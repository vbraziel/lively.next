/*global Map*/
import L2LConnection from "./interface.js";
import { defaultActions, defaultTrackerActions } from "./default-actions.js";
import user from "lively.user/user.js"
import * as authserver from "lively.user/authserver.js"

// Array.from(L2LTracker._trackers.keys());
// Array.from(L2LTracker._trackers.values())[1].remove()

export default class L2LTracker extends L2LConnection {

  static trackerKey(hostname, port, ioPath, namespace) {
    return `${hostname}:${port}${ioPath}-${namespace}`
  }

  static ensure(options) {
    // options should include
    //   namespace - socket.io namespace to use
    //   io - io server instance
    //   port, hostname,
    //   autoOpen - defaults to true
    var {io, port, hostname, namespace, autoOpen} = options;
    if (!this._trackers) this._trackers = new Map();
    var key = this.trackerKey(hostname, port, io.path(), namespace),
        tracker = this._trackers.get(key);
    if (!tracker) {
      tracker = new this(namespace, io);
      this._trackers.set(key, tracker);
      if (autoOpen || autoOpen === undefined) tracker.open();
    }
    return tracker;
  }

  constructor(ns, io) {
    super();
    this.namespace = ns;
    this.io = io;
    this._open = false;
    this._connectionHandler = null;
    this.clients = new Map();

    this.addService("register",
      (tracker, msg, ackfn, socket) =>
        tracker.registerClient(msg, ackfn, socket));

    this.addService("unregister",
      (tracker, msg, ackfn, socket) =>
        tracker.unregisterClient(msg, ackfn, socket));
      
    Object.keys(defaultActions).forEach(name =>
      this.addService(name, defaultActions[name]));
    Object.keys(defaultTrackerActions).forEach(name =>
      this.addService(name, defaultTrackerActions[name]));
  }

  get ioNamespace() { return this.io.of(this.namespace); }

  getTrackerList() {
    return Array.from(this.constructor._trackers).map(ea => ea[1])
  }

  isOnline() { return this._open; }

  getClientIdForSocketId(wantedSocketId) {
    for (let [key, {socketId}] of this.clients)
      if (wantedSocketId === socketId) return key;
  }

  getSocketForClientId(clientId) {
    var clientData = this.clients.get(clientId);
    return clientData ? this.ioNamespace.sockets[clientData.socketId] : null;
  }

  removeDisconnectedClients() {
    var ids = Array.from(this.clients.keys()),
        toRemove = ids.filter(id => !this.getSocketForClientId(id));
    toRemove.forEach(id => this.clients.delete(id));
    if (toRemove.length)
      console.log(`[${this}] removing disconnected clients ${ids.join(",")}`)
  }

  open() {
    if (this.isOnline()) return Promise.resolve(this);

    if (this.debug) console.log(`[${this}] starts listening to connection events`);

    this._open = true;
    this.ioNamespace.on("connection", this._connectionHandler = this.onConnection.bind(this));
    this.ioNamespace.on("connection",function joinRoom(socket){
      socket.join('defaultRoom')
      if(this.debug) console.log(`[${socket.id}] joined defaultRoom`)
    }.bind(this))
    return Promise.resolve(this);
  }

  close() {
    if (!this.isOnline()) return Promise.resolve();
    if (this.debug) console.log(`[${this}] stops listening to connection events`)

    this.ioNamespace.removeListener("connection", this._connectionHandler)

    var ns = this.namespace.replace(/^\/?/, "/");

    for (var id in this.io.nsps[ns].sockets) {
      try {
        var s = this.io.nsps[ns].sockets[id];
        s.disconnect(true);
        this.io.nsps[ns].remove(s);
      } catch (e) {
        console.error("error in ${this}.disconnect", e.stack || e)
      }
    }
    delete this.io.nsps[ns]

    this._connectionHandler = null;
    this._open = false;
    return Promise.resolve();
  }

  remove() {
    for (let [key, tracker] of this.constructor._trackers)
      if (tracker === this)
        this.constructor._trackers.delete(key)
    return this.close();
  }

  onConnection(socket) {
    if (this.debug) console.log(`[${this}] got connection request ${socket.id}`);

    // FIXME, remove this
    console.log(`[${this}] client connected ${socket.id} ${socket.request.headers["x-real-ip"] || socket.request.socket.remoteAddress}`);

    socket.on("error", (err) => this.onError(err));
    socket.on("connect", () => this.onConnect(socket));
    socket.on("disconnect", () => this.onDisconnect(socket));

    this.installEventToMessageTranslator(socket);
  }

  onConnect(socket) {
    if (this.debug) console.log(`[${this}] connected to ${socket.id}`);
  }

  onDisconnect(socket) {
    if (this.debug) console.log(`[${this}] disconnected from ${socket.id}`);
  }

  registerClient({sender, data}, answerFn, socket) {
    this.debug && console.log(`[${this}] got register request ${JSON.stringify({sender, data})}`);
    this.clients.set(sender, {socketId: socket.id});
    var msgNo = this._outgoingOrderNumberingByTargets.get(sender);
    typeof answerFn === "function" && answerFn({nextMessageNumber: msgNo, trackerId: this.id});
  }

  unregisterClient(_, answerFn, socket) {
    var clientId = this.getClientIdForSocketId(socket.id);
    this.debug && console.log(`[${this}] got unregister request ${clientId}`);
    this.clients.delete(clientId);
    typeof answerFn === "function" && answerFn();
  }

  receive(msg, socket, ackFn) {

    // 1. is the message for the tracker itself?
    if (!msg.target || msg.target === this.id || msg.target === "tracker") {
      this.dispatchL2LMessageToSelf(msg, socket, ackFn);
      return;
    }

    // 2. do we know the target? if not return error
    var targetSocket = this.getSocketForClientId(msg.target);
    if (!targetSocket) {
      var error = `target ${msg.target} not found`;
      console.warn(error)
      if (typeof ackFn === "function")
         ackFn(this.prepareAnswerMessage(msg, {error}));
      return;
    }

    // 3. otherwise dispatch message and relay answer
    typeof ackFn === "function" ?
      targetSocket.emit(msg.action, msg, ackFn) :
      targetSocket.emit(msg.action, msg)
  }

  send(msg, ackFn) {
    [msg, ackFn] = this.prepareSend(msg, ackFn);
    return this.whenOnline().then(() => {
      var {action, target} = msg,
          socket = this.getSocketForClientId(target);
      if (!socket) {
        var errMsg = `Trying to send message ${action} to ${target} but cannot find a connection to it!`;
        console.error(errMsg);
        throw new Error(errMsg);
      }
      typeof ackFn === "function" ?
        socket.emit(action, msg, ackFn) :
        socket.emit(action, msg);
    });
  }

  toString() {
    return `L2LTracker(${this.namespace}, open: ${this.isOnline()})`
  }

  async validateToken(user){    
    var response = await authserver.verify(user)    
    return response  
  }

  async makeUser(options){    
    var newUser = new user(options);
    await newUser.authenticated(300)
    return newUser;
  }



  
}
