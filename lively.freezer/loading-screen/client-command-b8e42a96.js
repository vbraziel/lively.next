System.register(["./__root_module__-b4667baa.js","kld-intersections"],function(ta){var lb,yb,Qb,Kb,yd;return{setters:[function(Cc){lb=Cc.$;yb=Cc.bm;Qb=Cc.a6;Kb=Cc.a7;yd=Cc.ar},function(){}],execute:function(){function Cc(Uc,Pa){Pa=void 0===Pa?{}:Pa;var mb=Pa.l2lClient;if(!mb)throw Error("lively.shell client side runCommand needs opts.l2lClient!");gd.ClientCommand.installLively2LivelyServices(mb);mb=new gd.ClientCommand(mb);mb.spawn(Object.assign({command:Uc},gd.obj.dissoc(Pa,["l2lClient"])));
return mb}function rd(Uc){return gd.dirCache[Uc.trackerId]?gd.dirCache[Uc.trackerId]:Promise.resolve().then(function(){var Pa,mb,Nb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ub){if(1==Ub.nextAddress)return Ub.yield(Uc.sendToAndWait(Uc.trackerId,"lively.shell.info",{}),2);Pa=Ub.yieldResult;mb=Pa.data;Nb=mb.defaultDirectory;return Ub.return(gd.dirCache[Uc.trackerId]=Nb)})})}function Fc(Uc){var Pa,mb,Nb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ub){if(1==Ub.nextAddress)return Ub.yield(Uc.sendToAndWait(Uc.trackerId,
"lively.shell.env",{}),2);Pa=Ub.yieldResult;mb=Pa.data;Nb=mb.env;return Ub.return(Nb)})}function Dc(Uc,Pa){Pa=(Pa=void 0===Pa?{}:Pa)||{};var mb=gd.runCommand('cat "'+Uc+'"',Pa);return mb.whenDone().then(function(){if(mb.exitCode)throw Error("Read "+Uc+" failed: "+mb.stderr);return mb.output})}function Rc(Uc,Pa,mb){!mb&&Pa&&Pa.content&&(mb=Pa,Pa=mb.content);var Nb=gd.runCommand('tee "'+Uc+'"',Object.assign({stdin:Pa||""},mb));return Nb.whenDone().then(function(){if(Nb.exitCode)throw Error("Write "+
Uc+" failed: "+Nb.stderr);return Nb})}ta({defaultDirectory:rd,env:Fc,readFile:Dc,runCommand:Cc,writeFile:Rc});var $c=lively.FreezerRuntime.recorderFor("lively.shell/command-interface.js");$c.promise=lb;$c.events=yb;var Hd=function(){this._stderr=this._stdout="";this.exitCode=void 0;this.commandString="";this.process=null;this._whenDone=$c.promise.deferred();this._whenStarted=$c.promise.deferred();this.startTime=0;this.lastSignal=null;$c.events.makeEmitter(this)};Hd.findCommand=function(Uc){return this.commands.find(function(Pa){return Pa.pid===
Uc})};Hd.prototype.isRunning=function(){return this.process&&void 0===this.exitCode};Hd.prototype.isDone=function(){return void 0!=this.exitCode};Hd.prototype.whenStarted=function(){return this._whenStarted.promise};Hd.prototype.whenDone=function(){return this._whenDone.promise};Hd.prototype.spawn=function(Uc){throw Error("not yet implemented");};Hd.prototype.kill=function(Uc){this.lastSignal=void 0===Uc?"KILL":Uc};Hd.prototype.toString=function(){return this.constructor.name+"("+this.commandString+
", "+this.status+")"};$jscomp.global.Object.defineProperties(Hd.prototype,{isShellCommand:{configurable:!0,enumerable:!0,get:function(){return!0}},status:{configurable:!0,enumerable:!0,get:function(){return this.process?void 0===this.exitCode?"running, pid "+this.pid:"exited "+this.exitCode+", pid "+this.pid:"not started"}},pid:{configurable:!0,enumerable:!0,get:function(){return this.process?this.process.pid:null}},output:{configurable:!0,enumerable:!0,get:function(){return this.stdout+(this.stderr?
"\n"+this.stderr:"")}},stdout:{configurable:!0,enumerable:!0,get:function(){return this._stdout}},stderr:{configurable:!0,enumerable:!0,get:function(){return this._stderr}}});$jscomp.global.Object.defineProperties(Hd,{commands:{configurable:!0,enumerable:!0,get:function(){return this._commands||(this._commands=[])}}});$c.CommandInterface=Hd;$c.default=Hd;var gd=lively.FreezerRuntime.recorderFor("lively.shell/client-command.js");gd.runCommand=Cc;gd.defaultDirectory=rd;gd.env=Fc;gd.readFile=Dc;gd.writeFile=
Rc;gd.CommandInterface=Hd;gd.promise=lb;gd.arr=Qb;gd.obj=Kb;gd.signal=yd;gd.debug=!1;gd.runCommand=Cc;gd.runCommand=Cc;gd.dirCache={};gd.defaultDirectory=rd;gd.defaultDirectory=rd;gd.env=Fc;gd.env=Fc;gd.readFile=Dc;gd.readFile=Dc;gd.writeFile=Rc;gd.writeFile=Rc;Hd=function(Uc){var Pa=gd.CommandInterface.call(this)||this;Pa.debug=gd.debug;Pa.l2lClient=Uc;return Pa};$jscomp.inherits(Hd,gd.CommandInterface);Hd.installLively2LivelyServices=function(Uc){Object.keys(gd.L2LServices).forEach(function(Pa){return Uc.addService(Pa,
function(mb,Nb,Ub){return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ic){return Ic.return(gd.L2LServices[Pa](mb,Nb,Ub))})})})};Hd.prototype.envForCommand=function(Uc){var Pa=this.l2lClient,mb=Pa.id,Nb=Pa.origin,Ub=Pa.path;Pa=Pa.namespace;var Ic=Uc||{};Uc=Ic.env;Ic=Ic.owner;Uc=Uc||{};Ic&&(Uc.LIVELY_COMMAND_OWNER=Ic);return Object.assign({ASKPASS_SESSIONID:mb,L2L_EDITOR_SESSIONID:mb,L2L_SESSIONTRACKER_SERVER:Nb,L2L_SESSIONTRACKER_PATH:Ub,L2L_SESSIONTRACKER_NS:Pa},Uc)};Hd.prototype.spawn=function(Uc){Uc=
void 0===Uc?{command:null,env:{},cwd:null,stdin:null}:Uc;var Pa=this,mb,Nb,Ub,Ic,wd,Eb,Sb,sb,ec,rc,yc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Db){if(1==Db.nextAddress)return mb=Pa,Nb=mb.l2lClient,Ub=Uc,Ic=Ub.command,wd=Ub.env,Eb=Ub.cwd,Sb=Ub.stdin,Pa.startTime=new Date,wd=Pa.envForCommand(Uc),Pa.debug&&console.log(Pa+" spawning "+Ic),Pa.debug&&Pa.whenStarted().then(function(){return console.log(Pa+" started")}),Pa.debug&&Pa.whenDone().then(function(){return console.log(Pa+" exited")}),
gd.arr.pushIfNotIncluded(Pa.constructor.commands,Pa),Pa.commandString=Array.isArray(Ic)?Ic.join(""):Ic,Db.yield(Nb.sendToAndWait(Nb.trackerId,"lively.shell.spawn",{command:Ic,env:wd,cwd:Eb,stdin:Sb},{ackTimeout:3E4}),2);sb=Db.yieldResult;ec=sb.data;rc=ec.error;yc=ec.pid;if(rc)throw gd.debug&&console.error("["+Pa+"] error at start: "+rc),Pa.process={error:rc},Pa.exitCode=1,gd.signal(Pa,"error",rc),Error(rc);Pa.process={pid:yc};gd.debug&&console.log("["+Pa+"] got pid "+yc);gd.signal(Pa,"pid",yc);Pa._whenStarted.resolve();
return Db.return(Pa)})};Hd.prototype.writeToStdin=function(Uc){var Pa=this,mb,Nb,Ub;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ic){if(!Pa.isRunning())return Ic.return();mb=Pa;Nb=mb.l2lClient;Ub=mb.pid;return Ic.yield(Nb.sendToAndWait(Nb.trackerId,"lively.shell.writeToStdin",{pid:Ub,stdin:String(Uc)}),0)})};Hd.prototype.kill=function(Uc){Uc=void 0===Uc?"KILL":Uc;var Pa=this,mb,Nb,Ub,Ic,wd,Eb,Sb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(sb){if(1==sb.nextAddress){if(!Pa.isRunning())return sb.return();
gd.debug&&console.log(Pa+" signaling "+Uc);Pa.lastSignal=Uc;mb=Pa;Nb=mb.pid;Ub=mb.l2lClient;return sb.yield(Ub.sendToAndWait(Ub.trackerId,"lively.shell.kill",{pid:Nb}),2)}Ic=sb.yieldResult;wd=Ic.data;Eb=wd.status;Sb=wd.error;gd.debug&&console.log(Pa+" kill send: "+(Sb||Eb));if(Sb)throw Error(Sb);return sb.return(Pa.whenDone())})};Hd.prototype.onOutput=function(Uc){var Pa=Uc.stdout;Uc=Uc.stderr;Pa&&(this._stdout+=Pa,gd.signal(this,"stdout",Pa),this.emit("stdout",Pa));Uc&&(this._stderr+=Uc,gd.signal(this,
"stderr",Uc),this.emit("stderr",Uc))};Hd.prototype.onClose=function(Uc){gd.arr.remove(this.constructor.commands,this);this.exitCode=Uc;this.emit("close",Uc);gd.signal(this,"close",Uc);this._whenDone.resolve(this)};Hd.prototype.onError=function(Uc){gd.arr.remove(this.constructor.commands,this);this._stderr+=Uc.stack;this.exitCode=1;this.emit("error",Uc.stack);gd.signal(this,"error",Uc.stack);this._whenDone.reject(Uc)};ta("default",Hd);gd.ClientCommand=Hd;gd.L2LServices={"lively.shell.onOutput":function(Uc,
Pa,mb,Nb){Uc=Pa.data;var Ub=Uc.pid,Ic=Uc.stdout,wd=Uc.stderr,Eb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Sb){switch(Sb.nextAddress){case 1:return gd.debug&&console.log("[lively.shell] client received lively.shell.onOutput for command "+Ub),Sb.setCatchFinallyBlocks(2),Sb.yield(gd.promise.waitFor(1E3,function(){return gd.ClientCommand.findCommand(Ub)}),4);case 4:Eb=Sb.yieldResult;Sb.leaveTryBlock(3);break;case 2:return Sb.enterCatchBlock(),console.warn("[lively.shell] received output for command "+
Ub+" but it isn't registered!'"),Sb.return();case 3:Eb.onOutput({stdout:Ic,stderr:wd}),Sb.jumpToEnd()}})},"lively.shell.onExit":function(Uc,Pa,mb,Nb){Uc=Pa.data;var Ub=Uc.pid,Ic=Uc.code,wd=Uc.error,Eb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Sb){switch(Sb.nextAddress){case 1:return gd.debug&&console.log("[lively.shell] client received lively.shell.onExit for command "+Ub),Sb.setCatchFinallyBlocks(2),Sb.yield(gd.promise.waitFor(1E3,function(){return gd.ClientCommand.findCommand(Ub)}),
4);case 4:Eb=Sb.yieldResult;Sb.leaveTryBlock(3);break;case 2:return Sb.enterCatchBlock(),console.warn("[lively.shell] received exit message for command "+Ub+" but it isn't registered!'"),Sb.return();case 3:if(wd)"string"===typeof wd&&(wd=Error(wd)),Eb.onError(wd);else Eb.onClose(Ic);Sb.jumpToEnd()}})}};gd.default=Hd}}});