
(function() {
  var GLOBAL = typeof window !== "undefined" ? window :
      typeof global!=="undefined" ? global :
        typeof self!=="undefined" ? self : this;
  if (typeof GLOBAL.lively === "undefined") GLOBAL.lively = {};
  if (typeof btoa === "undefined")
    GLOBAL.btoa = function(str) { return new Buffer(str).toString('base64'); };
  if (typeof atob === "undefined")
    GLOBAL.atob = function(str) { return new Buffer(str, 'base64').toString() };
  (function() {
    this.lively = this.lively || {};
(function (exports,_PouchDB,pouchdbAdapterMem,lively_lang,lively_resources) {
'use strict';

_PouchDB = 'default' in _PouchDB ? _PouchDB['default'] : _PouchDB;
pouchdbAdapterMem = 'default' in pouchdbAdapterMem ? pouchdbAdapterMem['default'] : pouchdbAdapterMem;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj$$1) {
  return typeof obj$$1;
} : function (obj$$1) {
  return obj$$1 && typeof Symbol === "function" && obj$$1.constructor === Symbol && obj$$1 !== Symbol.prototype ? "symbol" : typeof obj$$1;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncIterator = function (iterable) {
  if (typeof Symbol === "function") {
    if (Symbol.asyncIterator) {
      var method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      return iterable[Symbol.iterator]();
    }
  }

  throw new TypeError("Object is not async iterable");
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var asyncGeneratorDelegate = function (inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  

  if (typeof Symbol === "function" && Symbol.iterator) {
    iter[Symbol.iterator] = function () {
      return this;
    };
  }

  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }

    return pump("next", value);
  };

  if (typeof inner.throw === "function") {
    iter.throw = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }

      return pump("throw", value);
    };
  }

  if (typeof inner.return === "function") {
    iter.return = function (value) {
      return pump("return", value);
    };
  }

  return iter;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineEnumerableProperties = function (obj$$1, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj$$1, key, desc);
  }

  return obj$$1;
};

var defaults = function (obj$$1, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj$$1[key] === undefined) {
      Object.defineProperty(obj$$1, key, value);
    }
  }

  return obj$$1;
};

var defineProperty = function (obj$$1, key, value) {
  if (key in obj$$1) {
    Object.defineProperty(obj$$1, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj$$1[key] = value;
  }

  return obj$$1;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj$$1) {
  return obj$$1 && obj$$1.__esModule ? obj$$1 : {
    default: obj$$1
  };
};

var interopRequireWildcard = function (obj$$1) {
  if (obj$$1 && obj$$1.__esModule) {
    return obj$$1;
  } else {
    var newObj = {};

    if (obj$$1 != null) {
      for (var key in obj$$1) {
        if (Object.prototype.hasOwnProperty.call(obj$$1, key)) newObj[key] = obj$$1[key];
      }
    }

    newObj.default = obj$$1;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj$$1) {
  if (obj$$1 == null) throw new TypeError("Cannot destructure undefined");
};

var objectWithoutProperties = function (obj$$1, keys) {
  var target = {};

  for (var i in obj$$1) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj$$1, i)) continue;
    target[i] = obj$$1[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var selfGlobal = typeof global === "undefined" ? self : global;

var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};



var babelHelpers$1 = Object.freeze({
	jsx: jsx,
	asyncIterator: asyncIterator,
	asyncGenerator: asyncGenerator,
	asyncGeneratorDelegate: asyncGeneratorDelegate,
	asyncToGenerator: asyncToGenerator,
	classCallCheck: classCallCheck,
	createClass: createClass,
	defineEnumerableProperties: defineEnumerableProperties,
	defaults: defaults,
	defineProperty: defineProperty,
	get: get$1,
	inherits: inherits,
	interopRequireDefault: interopRequireDefault,
	interopRequireWildcard: interopRequireWildcard,
	newArrowCheck: newArrowCheck,
	objectDestructuringEmpty: objectDestructuringEmpty,
	objectWithoutProperties: objectWithoutProperties,
	possibleConstructorReturn: possibleConstructorReturn,
	selfGlobal: selfGlobal,
	set: set$1,
	slicedToArray: slicedToArray,
	slicedToArrayLoose: slicedToArrayLoose,
	taggedTemplateLiteral: taggedTemplateLiteral,
	taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
	temporalRef: temporalRef,
	temporalUndefined: temporalUndefined,
	toArray: toArray,
	toConsumableArray: toConsumableArray,
	typeof: _typeof,
	extends: _extends,
	instanceof: _instanceof
});

/*global global,self,process,System,require*/
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// PouchDB setup

var GLOBAL = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : undefined;

var isNode = typeof global !== "undefined" && typeof process !== "undefined";
var PouchDB = _PouchDB;
PouchDB.plugin(pouchdbAdapterMem);

function nodejsRequire(name) {
  if (!isNode) throw new Error("nodejsRequire can only be used in nodejs!");
  if (typeof System !== "undefined") return System._nodeRequire(name);
  return require("module")._load(name);
}

// nodejs_leveldbPath("test")
// nodejs_leveldbPath("file:///Users/robert/Downloads/hackernews-data")
function nodejs_leveldbPath(dbName) {
  // absolute path?
  if (dbName.startsWith("/")) return dbName;
  if (dbName.match(/[^\/]+:\/\//)) {
    if (dbName.startsWith("file:")) dbName = dbName.replace(/^file:\/\//, "");
    return dbName;
  }

  if (!isNode) throw new Error("nodejs_leveldbPath called under non-nodejs environment");
  var basePath = typeof System !== "undefined" && System.baseURL.startsWith("file://") ? System.baseURL.replace("file://", "") : GLOBAL.process.cwd();

  // are we in a typical lively.next env? Meaning serverPath points to
  // lively.next-dir/lively.server. If so, use parent dir of lively.server

  var _nodejsRequire = nodejsRequire("path"),
      join = _nodejsRequire.join,
      _nodejsRequire2 = nodejsRequire("fs"),
      mkdirSync = _nodejsRequire2.mkdirSync,
      existsSync = _nodejsRequire2.existsSync,
      readdirSync = _nodejsRequire2.readdirSync,
      readFileSync = _nodejsRequire2.readFileSync;

  if (dbName.includes("/")) return join(basePath, dbName);

  try {
    var parentPackage = readFileSync(join(basePath, "../package.json")),
        conf = JSON.parse(parentPackage);
    if (conf.name === "lively.web" || conf.name === "lively.next") {
      var _dbDir = join(basePath, "../.livelydbs");
      if (!existsSync(_dbDir)) mkdirSync(_dbDir);
      return join(_dbDir, dbName);
    }
  } catch (e) {}

  var dbDir = join(basePath, ".livelydbs");
  if (!existsSync(dbDir)) mkdirSync(dbDir);
  return join(dbDir, dbName);
}

function nodejs_attemptToLoadProperPouchDB() {
  // We ship lively.storage with a PouchDB dist version that runs everywhere.
  // This version does not support leveldb, the adapter backend that is needed in
  // nodejs for persistence storage.  Here we try to lazily switch to a PouchDB
  // required via node's require.

  if (!isNode) throw new Error("nodejs_attemptToLoadProperPouchDB called under non-nodejs environment");

  if (typeof System !== "undefined") {
    var _System$_nodeRequire = System._nodeRequire("path"),
        join = _System$_nodeRequire.join,
        storageMain = System.normalizeSync("lively.storage/index.js"),
        pouchDBMain = System.normalizeSync("pouchdb", storageMain).replace(/file:\/\//, ""),
        pouchDBNodeMain = join(pouchDBMain, "../../lib/index.js");

    try {
      PouchDB = System._nodeRequire(pouchDBNodeMain);
      PouchDB.plugin(pouchdbAdapterMem);
      return true;
    } catch (e) {
      return false;
    }
  }

  try {
    PouchDB = require("pouchdb");
    PouchDB.plugin(pouchdbAdapterMem);
    return true;
  } catch (err) {
    return false;
  }
}

// var pouch = createPouchDB("test-db"); pouch.adapter;
var createPouchDB = !isNode ? function (name, options) {
  return new PouchDB(_extends({ name: name }, options));
} : function () {
  var properLoadAttempted = false,
      nodejsCouchDBLoaded = false;
  return function createPouchDB(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!properLoadAttempted) {
      properLoadAttempted = true;
      nodejsCouchDBLoaded = nodejs_attemptToLoadProperPouchDB();
    }
    if (!options.adapter) {
      options.adapter = name.startsWith("http") ? "http" : nodejsCouchDBLoaded ? "leveldb" : "memory";
    }
    if (options.adapter == "leveldb") name = nodejs_leveldbPath(name);
    options = _extends({}, options, { name: name });
    return new PouchDB(options);
  };
}();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// main database interface

var Database = function () {
  createClass(Database, null, [{
    key: "findDB",
    value: function findDB(name) {
      return this.databases.get(name);
    }
  }, {
    key: "ensureDB",
    value: function ensureDB(name, options) {
      var db = this.findDB(name);
      if (db) return db;
      db = new this(name, options);
      this.databases.set(name, db);
      if (!name.endsWith("lively.storage-meta")) this.createMetaEntryForDB(name, options);
      return db;
    }
  }, {
    key: "knownDBs",
    value: function knownDBs(dbName, options) {
      var metaDB = Database.ensureDB("lively.storage-meta");
      return metaDB.getAll().then(function (metaEntries) {
        return metaEntries.map(function (ea) {
          return ea._id;
        });
      });
    }
  }, {
    key: "createMetaEntryForDB",
    value: function createMetaEntryForDB(dbName, options) {
      var metaDB = Database.ensureDB("lively.storage-meta");
      metaDB.has(dbName).then(function (known) {
        return !known && metaDB.set(dbName, { created: Date.now(), options: options });
      });
    }
  }, {
    key: "knowsDB",
    value: function () {
      var _ref = asyncToGenerator(regeneratorRuntime.mark(function _callee(dbName) {
        var db, docCount;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = this.ensureDB(dbName);
                _context.next = 3;
                return db.docCount();

              case 3:
                docCount = _context.sent;

                if (!(docCount > 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", true);

              case 6:
                _context.next = 8;
                return db.destroy();

              case 8:
                return _context.abrupt("return", false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function knowsDB(_x2) {
        return _ref.apply(this, arguments);
      }

      return knowsDB;
    }()
  }, {
    key: "PouchDB",
    get: function get() {
      return PouchDB;
    },
    set: function set(klass) {
      PouchDB = klass;
    }
  }, {
    key: "databases",
    get: function get() {
      return this._databases || (this._databases = new Map());
    }
  }]);

  function Database(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Database);

    this.name = name;
    this.options = options;
    this._pouchdb = null;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // initialize / release
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  createClass(Database, [{
    key: "close",
    value: function close() {
      // close database to free mem
      if (!this._pouchdb) return;
      this._pouchdb.close();
      delete this._pouchdb;
    }
  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return !!this.pouchdb._destroyed;
    }
  }, {
    key: "destroy",
    value: function destroy(opts) {
      // completely get rid of database
      this.constructor.databases.delete(this.name);
      return this.isDestroyed() ? { ok: true } : this.pouchdb.destroy(opts);
    }

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // accessing and updating
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "update",
    value: function () {
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee2(_id, updateFn, options) {
        var updateAttempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        var _options, _options$ensure, ensure, _options$retryOnConfl, retryOnConflict, _options$maxUpdateAtt, maxUpdateAttempts, getOpts, db, lastDoc, newDoc, _ref3, id, rev;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Will try to fetch document _id and feed it to updateFn. The result value
                // (promise supported) of updateFn will be used as the next version of
                // document.  If updateFn returns a falsy value the update will be canceled.
                // options: {
                //   ensure: BOOL, // if no document exists, create one, default true
                //   retryOnConflict: BOOL, // if update conflicts retry maxUpdateAttempts
                //                          // times to update doc, default true
                //   maxUpdateAttempts: NUMBER // default 10
                // }
                // returns created document
                options = options || {};

                _options = options, _options$ensure = _options.ensure, ensure = _options$ensure === undefined ? true : _options$ensure, _options$retryOnConfl = _options.retryOnConflict, retryOnConflict = _options$retryOnConfl === undefined ? true : _options$retryOnConfl, _options$maxUpdateAtt = _options.maxUpdateAttempts, maxUpdateAttempts = _options$maxUpdateAtt === undefined ? 10 : _options$maxUpdateAtt, getOpts = { latest: true }, db = this.pouchdb, lastDoc = void 0, newDoc = void 0;

                // 1. get the old doc

                _context2.prev = 2;
                _context2.next = 5;
                return db.get(_id, getOpts);

              case 5:
                lastDoc = _context2.sent;
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);

                if (!(_context2.t0.name !== "not_found" || !ensure)) {
                  _context2.next = 12;
                  break;
                }

                throw _context2.t0;

              case 12:
                _context2.next = 14;
                return updateFn(lastDoc);

              case 14:
                newDoc = _context2.sent;

                if (!(!newDoc || (typeof newDoc === "undefined" ? "undefined" : _typeof(newDoc)) !== "object")) {
                  _context2.next = 17;
                  break;
                }

                return _context2.abrupt("return", null);

              case 17:
                // canceled!

                // ensure _id, _rev props
                if (newDoc._id !== _id) newDoc._id = _id;
                if (lastDoc && newDoc._rev !== lastDoc._rev) newDoc._rev = lastDoc._rev;

                // 3. try writing new doc
                _context2.prev = 19;
                _context2.next = 22;
                return db.put(newDoc);

              case 22:
                _ref3 = _context2.sent;
                id = _ref3.id;
                rev = _ref3.rev;
                return _context2.abrupt("return", Object.assign(newDoc, { _rev: rev }));

              case 28:
                _context2.prev = 28;
                _context2.t1 = _context2["catch"](19);

                if (!(_context2.t1.name === "conflict" && retryOnConflict && updateAttempt < maxUpdateAttempts)) {
                  _context2.next = 32;
                  break;
                }

                return _context2.abrupt("return", this.update(_id, updateFn, options, updateAttempt + 1));

              case 32:
                throw _context2.t1;

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8], [19, 28]]);
      }));

      function update(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "mixin",
    value: function () {
      var _ref4 = asyncToGenerator(regeneratorRuntime.mark(function _callee3(_id, _mixin, options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.update(_id, function (oldDoc) {
                  return Object.assign(oldDoc || { _id: _id }, _mixin);
                }, options));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function mixin(_x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      }

      return mixin;
    }()
  }, {
    key: "set",
    value: function () {
      var _ref5 = asyncToGenerator(regeneratorRuntime.mark(function _callee4(id, value, options) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.update(id, function (_) {
                  return value;
                }, options));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function set$$1(_x11, _x12, _x13) {
        return _ref5.apply(this, arguments);
      }

      return set$$1;
    }()
  }, {
    key: "get",
    value: function () {
      var _ref6 = asyncToGenerator(regeneratorRuntime.mark(function _callee5(id) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.pouchdb.get(id, opts);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);

                if (!(_context5.t0.name === "not_found")) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", undefined);

              case 10:
                throw _context5.t0;

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6]]);
      }));

      function get$$1(_x14) {
        return _ref6.apply(this, arguments);
      }

      return get$$1;
    }()
  }, {
    key: "has",
    value: function () {
      var _ref7 = asyncToGenerator(regeneratorRuntime.mark(function _callee6(id) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.get(id);

              case 2:
                return _context6.abrupt("return", !!_context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function has(_x16) {
        return _ref7.apply(this, arguments);
      }

      return has;
    }()
  }, {
    key: "add",
    value: function () {
      var _ref8 = asyncToGenerator(regeneratorRuntime.mark(function _callee7(doc) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.pouchdb.post(doc));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function add(_x17) {
        return _ref8.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "docList",
    value: function () {
      var _ref9 = asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref10, rows, result, i, _rows$i, id, rev;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.pouchdb.allDocs(opts);

              case 2:
                _ref10 = _context8.sent;
                rows = _ref10.rows;
                result = [];

                for (i = 0; i < rows.length; i++) {
                  _rows$i = rows[i], id = _rows$i.id, rev = _rows$i.value.rev;

                  result.push({ id: id, rev: rev });
                }
                return _context8.abrupt("return", result);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function docList() {
        return _ref9.apply(this, arguments);
      }

      return docList;
    }()
  }, {
    key: "docCount",
    value: function () {
      var _ref11 = asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
        var entries;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.pouchdb.allDocs();

              case 2:
                entries = _context9.sent;
                return _context9.abrupt("return", entries.rows.length);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function docCount() {
        return _ref11.apply(this, arguments);
      }

      return docCount;
    }()
  }, {
    key: "revList",
    value: function () {
      var _ref12 = asyncToGenerator(regeneratorRuntime.mark(function _callee10(id) {
        var _ref13, _id, _ref13$_revisions, start, ids;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.pouchdb.get(id, { revs: true });

              case 2:
                _ref13 = _context10.sent;
                _id = _ref13._id;
                _ref13$_revisions = _ref13._revisions;
                start = _ref13$_revisions.start;
                ids = _ref13$_revisions.ids;
                return _context10.abrupt("return", ids.map(function (ea) {
                  return start-- + "-" + ea;
                }));

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function revList(_x19) {
        return _ref12.apply(this, arguments);
      }

      return revList;
    }()
  }, {
    key: "getAllRevisions",
    value: function () {
      var _ref14 = asyncToGenerator(regeneratorRuntime.mark(function _callee11(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$skip, skip, _options$limit, limit, revs, query;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _options$skip = options.skip;
                skip = _options$skip === undefined ? 0 : _options$skip;
                _options$limit = options.limit;
                limit = _options$limit === undefined ? 0 : _options$limit;
                _context11.next = 6;
                return this.revList(id);

              case 6:
                revs = _context11.sent;

                if (skip > 0) revs = revs.slice(skip);
                if (limit > 0) revs = revs.slice(0, limit);
                query = revs.map(function (rev) {
                  return { rev: rev, id: id };
                });
                _context11.next = 12;
                return this.getDocuments(query);

              case 12:
                return _context11.abrupt("return", _context11.sent);

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getAllRevisions(_x20) {
        return _ref14.apply(this, arguments);
      }

      return getAllRevisions;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _ref15 = asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref16, rows;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.pouchdb.allDocs(_extends({}, options, { include_docs: true }));

              case 2:
                _ref16 = _context12.sent;
                rows = _ref16.rows;
                return _context12.abrupt("return", rows.map(function (ea) {
                  return ea.doc;
                }));

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getAll() {
        return _ref15.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "setDocuments",
    value: function () {
      var _ref17 = asyncToGenerator(regeneratorRuntime.mark(function _callee13(documents, opts) {
        var results, i, d, result, _ref18, id, rev;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.pouchdb.bulkDocs(documents, opts);

              case 2:
                results = _context13.sent;
                i = 0;

              case 4:
                if (!(i < results.length)) {
                  _context13.next = 16;
                  break;
                }

                d = documents[i], result = results[i];
                // if a conflict happens and document does not specify the exact revision
                // then just overwrite old doc

                if (!(!result.ok && result.name === "conflict" && !d._rev)) {
                  _context13.next = 13;
                  break;
                }

                _context13.next = 9;
                return this.set(d._id, d);

              case 9:
                _ref18 = _context13.sent;
                id = _ref18._id;
                rev = _ref18._rev;

                results[i] = { ok: true, id: id, rev: rev };

              case 13:
                i++;
                _context13.next = 4;
                break;

              case 16:
                return _context13.abrupt("return", results);

              case 17:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function setDocuments(_x23, _x24) {
        return _ref17.apply(this, arguments);
      }

      return setDocuments;
    }()
  }, {
    key: "updateDocuments",
    value: function () {
      var _ref19 = asyncToGenerator(regeneratorRuntime.mark(function _callee14(documents, conflictFn, opts) {
        var results, tryAgain, resolvedResults, i, d, result, oldDoc, resolved;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.pouchdb.bulkDocs(documents, opts);

              case 2:
                results = _context14.sent;
                tryAgain = [];
                resolvedResults = {};
                i = 0;

              case 6:
                if (!(i < results.length)) {
                  _context14.next = 18;
                  break;
                }

                d = documents[i], result = results[i];
                // if a conflict happens and document does not specify the exact revision
                // then just overwrite old doc

                resolvedResults[result._id || d._id] = result;

                if (!(!result.ok && result.name === "conflict")) {
                  _context14.next = 15;
                  break;
                }

                _context14.next = 12;
                return this.get(d._id);

              case 12:
                oldDoc = _context14.sent;
                resolved = conflictFn(oldDoc, d);

                if (resolved) {
                  if (!resolved._id) resolved._id = d._id;
                  if (!resolved._rev) resolved._rev = oldDoc._rev;
                  tryAgain.push(resolved);
                }

              case 15:
                i++;
                _context14.next = 6;
                break;

              case 18:
                if (!tryAgain.length) {
                  _context14.next = 26;
                  break;
                }

                _context14.t0 = babelHelpers$1;
                _context14.t1 = {};
                _context14.t2 = resolvedResults;
                _context14.next = 24;
                return this.updateDocuments(tryAgain, conflictFn, opts);

              case 24:
                _context14.t3 = _context14.sent;
                resolvedResults = _context14.t0.extends.call(_context14.t0, _context14.t1, _context14.t2, _context14.t3);

              case 26:
                return _context14.abrupt("return", resolvedResults);

              case 27:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function updateDocuments(_x25, _x26, _x27) {
        return _ref19.apply(this, arguments);
      }

      return updateDocuments;
    }()
  }, {
    key: "getDocuments",
    value: function () {
      var _ref20 = asyncToGenerator(regeneratorRuntime.mark(function _callee15(idsAndRevs) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$ignoreErrors, ignoreErrors, _ref21, results, result, i, _results$i, docs, id, j, d;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _options$ignoreErrors = options.ignoreErrors;
                ignoreErrors = _options$ignoreErrors === undefined ? true : _options$ignoreErrors;
                _context15.next = 4;
                return this.pouchdb.bulkGet({ docs: idsAndRevs });

              case 4:
                _ref21 = _context15.sent;
                results = _ref21.results;
                result = [];
                i = 0;

              case 8:
                if (!(i < results.length)) {
                  _context15.next = 23;
                  break;
                }

                _results$i = results[i], docs = _results$i.docs, id = _results$i.id;

                console.assert(docs.length === 1, "getDocuments: expected only one doc for " + id);
                j = 0;

              case 12:
                if (!(j < docs.length)) {
                  _context15.next = 20;
                  break;
                }

                d = docs[j];

                if (!(ignoreErrors && !d.ok)) {
                  _context15.next = 16;
                  break;
                }

                return _context15.abrupt("continue", 17);

              case 16:
                result.push(d.ok || d.error || d);

              case 17:
                j++;
                _context15.next = 12;
                break;

              case 20:
                i++;
                _context15.next = 8;
                break;

              case 23:
                return _context15.abrupt("return", result);

              case 24:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getDocuments(_x28) {
        return _ref20.apply(this, arguments);
      }

      return getDocuments;
    }()
  }, {
    key: "query",
    value: function query(subject, opts) {
      return this.pouchdb.query(subject, opts);
    }

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // removal
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "remove",
    value: function () {
      var _ref22 = asyncToGenerator(regeneratorRuntime.mark(function _callee16(_id, _rev, options) {
        var arg;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(typeof _rev !== "undefined")) {
                  _context16.next = 4;
                  break;
                }

                _context16.t0 = { _id: _id, _rev: _rev };
                _context16.next = 7;
                break;

              case 4:
                _context16.next = 6;
                return this.get(_id);

              case 6:
                _context16.t0 = _context16.sent;

              case 7:
                arg = _context16.t0;
                return _context16.abrupt("return", arg ? this.pouchdb.remove(arg) : undefined);

              case 9:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function remove(_x30, _x31, _x32) {
        return _ref22.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "removeAll",
    value: function () {
      var _ref23 = asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
        var db, docs;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                db = this.pouchdb;
                _context17.next = 3;
                return db.allDocs();

              case 3:
                docs = _context17.sent;
                _context17.next = 6;
                return Promise.all(docs.rows.map(function (row) {
                  return db.remove(row.id, row.value.rev);
                }));

              case 6:
                return _context17.abrupt("return", _context17.sent);

              case 7:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function removeAll() {
        return _ref23.apply(this, arguments);
      }

      return removeAll;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // replication + conflicts
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "replicateTo",
    value: function replicateTo(otherDB, opts) {
      // opts: {live, retry}
      if (otherDB instanceof Database) otherDB = otherDB.pouchdb;
      return this.pouchdb.replicate.to(otherDB, opts);
    }
  }, {
    key: "replicateFrom",
    value: function replicateFrom(otherDB, opts) {
      // opts: {live, retry}
      if (otherDB instanceof Database) otherDB = otherDB.pouchdb;
      return this.pouchdb.replicate.from(otherDB, opts);
    }
  }, {
    key: "sync",
    value: function sync(otherDB, opts) {
      // opts: {live, retry}
      if (otherDB instanceof Database) otherDB = otherDB.pouchdb;
      return this.pouchdb.sync(otherDB, opts);
    }
  }, {
    key: "getConflicts",
    value: function () {
      var _ref24 = asyncToGenerator(regeneratorRuntime.mark(function _callee18(opts) {
        var _ref25, rows;

        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.pouchdb.query({ map: "function(doc) { if (doc._conflicts) emit(doc._id); }" }, _extends({ reduce: false, include_docs: true, conflicts: true }, opts));

              case 2:
                _ref25 = _context18.sent;
                rows = _ref25.rows;
                return _context18.abrupt("return", rows.map(function (ea) {
                  var result = { id: ea.id, rev: ea.doc._rev, doc: ea.doc };
                  if (ea.doc._conflicts) {
                    result.conflicts = ea.doc._conflicts;
                    delete ea.doc._conflicts;
                  }
                  return result;
                }));

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getConflicts(_x33) {
        return _ref24.apply(this, arguments);
      }

      return getConflicts;
    }()
  }, {
    key: "resolveConflicts",
    value: function () {
      var _ref26 = asyncToGenerator(regeneratorRuntime.mark(function _callee19(id, resolveFn) {
        var doc, query, conflicted, resolved, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, conflictedDoc;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.pouchdb.get(id, { conflicts: true });

              case 2:
                doc = _context19.sent;
                query = doc._conflicts.map(function (rev) {
                  return { id: id, rev: rev };
                });
                _context19.next = 6;
                return this.getDocuments(query);

              case 6:
                conflicted = _context19.sent;
                resolved = doc;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context19.prev = 11;
                _iterator = conflicted[Symbol.iterator]();

              case 13:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context19.next = 28;
                  break;
                }

                conflictedDoc = _step.value;
                _context19.next = 17;
                return resolveFn(resolved, conflictedDoc);

              case 17:
                resolved = _context19.sent;

                if (resolved) {
                  _context19.next = 20;
                  break;
                }

                return _context19.abrupt("return", null);

              case 20:
                _context19.next = 22;
                return this.set(id, resolved);

              case 22:
                resolved = _context19.sent;
                _context19.next = 25;
                return this.pouchdb.remove(conflictedDoc);

              case 25:
                _iteratorNormalCompletion = true;
                _context19.next = 13;
                break;

              case 28:
                _context19.next = 34;
                break;

              case 30:
                _context19.prev = 30;
                _context19.t0 = _context19["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context19.t0;

              case 34:
                _context19.prev = 34;
                _context19.prev = 35;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 37:
                _context19.prev = 37;

                if (!_didIteratorError) {
                  _context19.next = 40;
                  break;
                }

                throw _iteratorError;

              case 40:
                return _context19.finish(37);

              case 41:
                return _context19.finish(34);

              case 42:
                return _context19.abrupt("return", resolved);

              case 43:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[11, 30, 34, 42], [35,, 37, 41]]);
      }));

      function resolveConflicts(_x34, _x35) {
        return _ref26.apply(this, arguments);
      }

      return resolveConflicts;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // diff
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "diffWith",
    value: function () {
      var _ref27 = asyncToGenerator(regeneratorRuntime.mark(function _callee20(otherDB) {
        var docs2, docs1, map2, map1, inLeft, inRight, changed, id, rev, rev1, _id2, _rev2, rev2;

        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return otherDB.docList();

              case 2:
                docs2 = _context20.sent;
                _context20.next = 5;
                return this.docList();

              case 5:
                docs1 = _context20.sent;
                map2 = docs2.reduce(function (all, ea) {
                  return Object.assign(all, defineProperty({}, ea.id, ea.rev));
                }, {});
                map1 = docs1.reduce(function (all, ea) {
                  return Object.assign(all, defineProperty({}, ea.id, ea.rev));
                }, {});
                inLeft = [];
                inRight = [];
                changed = [];

                for (id in map2) {
                  rev = map2[id];
                  rev1 = map1[id];

                  if (!rev1) inRight.push({ id: id, rev: rev });else if (rev != rev1) changed.push({ right: { id: id, rev: rev }, left: { id: id, rev: rev1 } });
                }
                for (_id2 in map1) {
                  _rev2 = map1[_id2];
                  rev2 = map2[_id2];

                  if (!rev2) inLeft.push({ id: _id2, rev: _rev2 });
                }
                return _context20.abrupt("return", { inLeft: inLeft, inRight: inRight, changed: changed });

              case 14:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function diffWith(_x36) {
        return _ref27.apply(this, arguments);
      }

      return diffWith;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // backup
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "dump",
    value: function () {
      var _ref28 = asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var filterFn, alias, type, dbInfo, myName, pouchdb, name, header, docs;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                filterFn = opts.filterFn;
                alias = opts.name;
                type = opts.type;
                dbInfo = opts.dbInfo;
                myName = this.name;
                pouchdb = this.pouchdb;
                name = alias || myName;
                _context21.t0 = name;
                _context21.t1 = type || pouchdb.type();
                _context21.t2 = new Date().toJSON();
                _context21.t3 = babelHelpers$1;
                _context21.t4 = {};
                _context21.next = 14;
                return pouchdb.info();

              case 14:
                _context21.t5 = _context21.sent;
                _context21.t6 = { db_name: name };
                _context21.t7 = dbInfo;
                _context21.t8 = _context21.t3.extends.call(_context21.t3, _context21.t4, _context21.t5, _context21.t6, _context21.t7);
                header = {
                  name: _context21.t0,
                  db_type: _context21.t1,
                  start_time: _context21.t2,
                  db_info: _context21.t8
                };
                _context21.next = 21;
                return this.getAll({ attachments: true });

              case 21:
                docs = _context21.sent;

                if (typeof filterFn === "function") docs = filterFn(docs, header);
                return _context21.abrupt("return", { header: header, docs: docs });

              case 24:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function dump() {
        return _ref28.apply(this, arguments);
      }

      return dump;
    }()
  }, {
    key: "backup",
    value: function () {
      var _ref29 = asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
        var backupNo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var name, backupDB;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                name = this.name + "_backup_" + backupNo, backupDB = this.constructor.ensureDB(name);
                _context22.next = 3;
                return this.replicateTo(backupDB);

              case 3:
                return _context22.abrupt("return", backupDB);

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function backup() {
        return _ref29.apply(this, arguments);
      }

      return backup;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // migration
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "migrate",
    value: function () {
      var _ref30 = asyncToGenerator(regeneratorRuntime.mark(function _callee23(migrationFn) {
        var docs, migrated, unchanged, i, doc, migratedDoc;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.getAll();

              case 2:
                docs = _context23.sent;
                migrated = [], unchanged = [];
                i = 0;

              case 5:
                if (!(i < docs.length)) {
                  _context23.next = 16;
                  break;
                }

                doc = docs[i], migratedDoc = migrationFn(doc, i);

                if (migratedDoc) {
                  _context23.next = 10;
                  break;
                }

                unchanged.push(doc);return _context23.abrupt("continue", 13);

              case 10:

                if (!migratedDoc.hasOwnProperty("_id")) migratedDoc._id = doc._id;
                if (migratedDoc.hasOwnProperty("_rev")) delete migratedDoc._rev;

                migrated.push(migratedDoc);

              case 13:
                i++;
                _context23.next = 5;
                break;

              case 16:
                _context23.next = 18;
                return this.setDocuments(migrated);

              case 18:
                return _context23.abrupt("return", { migrated: migrated.length, unchanged: unchanged.length });

              case 19:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function migrate(_x39) {
        return _ref30.apply(this, arguments);
      }

      return migrate;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // design docs
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  }, {
    key: "createDesignDocs",
    value: function createDesignDocs(specs) {
      return specs.map(this.createDesignDoc);
    }
  }, {
    key: "createDesignDoc",
    value: function createDesignDoc(_ref31) {
      var name = _ref31.name,
          mapFn = _ref31.mapFn,
          reduceFn = _ref31.reduceFn,
          filterFn = _ref31.filterFn,
          _ref31$version = _ref31.version,
          version = _ref31$version === undefined ? 1 : _ref31$version;

      var doc = { _id: '_design/' + name, version: version };
      if (filterFn) lively_lang.Path("filters." + name).set(doc, filterFn.toString(), true);
      if (mapFn) lively_lang.Path("views." + name + ".map").set(doc, mapFn.toString(), true);
      if (reduceFn) lively_lang.Path("views." + name + ".reduce").set(doc, reduceFn.toString(), true);
      return doc;
    }
  }, {
    key: "addDesignDocs",
    value: function () {
      var _ref32 = asyncToGenerator(regeneratorRuntime.mark(function _callee24(specs) {
        var _this = this;

        var queryStale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var docs, result;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                docs = this.createDesignDocs(specs);
                _context24.next = 3;
                return this.updateDocuments(docs, function (oldDoc, newDoc) {
                  if (!oldDoc.hasOwnProperty("version")) return newDoc;
                  if (newDoc.hasOwnProperty("version") && newDoc.version > oldDoc.version) return newDoc;
                  return null;
                });

              case 3:
                result = _context24.sent;

                if (!queryStale) {
                  _context24.next = 7;
                  break;
                }

                _context24.next = 7;
                return Promise.all(docs.map(function (ea) {
                  return _this.designDocDoQueryStale(ea._id);
                }));

              case 7:
                return _context24.abrupt("return", result);

              case 8:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function addDesignDocs(_x40) {
        return _ref32.apply(this, arguments);
      }

      return addDesignDocs;
    }()
  }, {
    key: "addDesignDoc",
    value: function () {
      var _ref33 = asyncToGenerator(regeneratorRuntime.mark(function _callee25(_ref34) {
        var name = _ref34.name,
            mapFn = _ref34.mapFn,
            reduceFn = _ref34.reduceFn,
            version = _ref34.version;
        var queryStale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var doc, result;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                doc = this.createDesignDoc({ name: name, mapFn: mapFn, reduceFn: reduceFn, version: version });
                _context25.next = 3;
                return this.set(doc._id, doc);

              case 3:
                result = _context25.sent;

                if (!queryStale) {
                  _context25.next = 7;
                  break;
                }

                _context25.next = 7;
                return this.designDocDoQueryStale(doc._id);

              case 7:
                return _context25.abrupt("return", result);

              case 8:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function addDesignDoc(_x42) {
        return _ref33.apply(this, arguments);
      }

      return addDesignDoc;
    }()
  }, {
    key: "removeDesignDoc",
    value: function removeDesignDoc(name) {
      return this.remove('_design/' + name);
    }
  }, {
    key: "designDocDoQueryStale",
    value: function designDocDoQueryStale(designDocId) {
      var _designDocId$split = designDocId.split("/"),
          _designDocId$split2 = slicedToArray(_designDocId$split, 2),
          _ = _designDocId$split2[0],
          name = _designDocId$split2[1];

      return this.query(name, { stale: 'update_after' });
    }
  }, {
    key: "pouchdb",
    get: function get() {
      // lazy pouch db accessor
      if (this._pouchdb) return this._pouchdb;
      var name = this.name,
          options = this.options;

      return this._pouchdb = createPouchDB(name, options);
    }
  }], [{
    key: "loadDump",
    value: function () {
      var _ref35 = asyncToGenerator(regeneratorRuntime.mark(function _callee26(dump) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var header, docs, name, db;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                header = dump.header, docs = dump.docs, name = opts.name || header.name, db = this.ensureDB(name);
                _context26.next = 3;
                return db.setDocuments(docs, { new_edits: false });

              case 3:
                return _context26.abrupt("return", db);

              case 4:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function loadDump(_x44) {
        return _ref35.apply(this, arguments);
      }

      return loadDump;
    }()
  }]);
  return Database;
}();

/*global System,process,require,fetch*/
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// sha1
// Author: creationix
// Repo: https://github.com/creationix/git-sha1
// License: MIT https://github.com/creationix/git-sha1/blob/b3474591e6834232df63b5cf9bb969185a54a04c/LICENSE
var sha1 = function sha1_setup() {
  function r(r) {
    if (void 0 === r) return o(!1);var e = o(!0);return e.update(r), e.digest();
  }function e() {
    var r = f.createHash("sha1");return { update: function update(e) {
        return r.update(e);
      }, digest: function digest() {
        return r.digest("hex");
      } };
  }function t(r) {
    function e(r) {
      if ("string" == typeof r) return t(r);var e = r.length;h += 8 * e;for (var n = 0; n < e; n++) {
        o(r[n]);
      }
    }function t(r) {
      var e = r.length;h += 8 * e;for (var t = 0; t < e; t++) {
        o(r.charCodeAt(t));
      }
    }function o(r) {
      a[y] |= (255 & r) << g, g ? g -= 8 : (y++, g = 24), 16 === y && u();
    }function f() {
      o(128), (y > 14 || 14 === y && g < 24) && u(), y = 14, g = 24, o(0), o(0), o(h > 0xffffffffff ? h / 1099511627776 : 0), o(h > 4294967295 ? h / 4294967296 : 0);for (var r = 24; r >= 0; r -= 8) {
        o(h >> r);
      }return i(s) + i(c) + i(v) + i(p) + i(d);
    }function u() {
      for (var r = 16; r < 80; r++) {
        var e = a[r - 3] ^ a[r - 8] ^ a[r - 14] ^ a[r - 16];a[r] = e << 1 | e >>> 31;
      }var t,
          n,
          o = s,
          f = c,
          u = v,
          i = p,
          g = d;for (r = 0; r < 80; r++) {
        r < 20 ? (t = i ^ f & (u ^ i), n = 1518500249) : r < 40 ? (t = f ^ u ^ i, n = 1859775393) : r < 60 ? (t = f & u | i & (f | u), n = 2400959708) : (t = f ^ u ^ i, n = 3395469782);var h = (o << 5 | o >>> 27) + t + g + n + (0 | a[r]);g = i, i = u, u = f << 30 | f >>> 2, f = o, o = h;
      }for (s = s + o | 0, c = c + f | 0, v = v + u | 0, p = p + i | 0, d = d + g | 0, y = 0, r = 0; r < 16; r++) {
        a[r] = 0;
      }
    }function i(r) {
      for (var e = "", t = 28; t >= 0; t -= 4) {
        e += (r >> t & 15).toString(16);
      }return e;
    }var a,
        s = 1732584193,
        c = 4023233417,
        v = 2562383102,
        p = 271733878,
        d = 3285377520,
        y = 0,
        g = 24,
        h = 0;return a = r ? n : new Uint32Array(80), { update: e, digest: f };
  }var n, o, f;return "object" == (typeof process === "undefined" ? "undefined" : _typeof(process)) && "object" == _typeof(process.versions) && process.versions.node && "renderer" !== process.__atom_type ? (f = "undefined" != typeof System ? System._nodeRequire("crypto") : require("crypto"), o = e) : (n = new Uint32Array(80), o = t), r;
}();

var hashRe = /^[0-9a-f]+$/i;
function isHash(string) {
  return typeof string === "string" && string.length === 40 && string.match(hashRe);
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// let db = await ObjectDB.find("test-object-db");
// db = objectDBs.get("lively.morphic/objectdb/morphicdb")
// await db.objectStats()

var objectDBs = objectDBs || new Map();

var ObjectDB = function () {
  createClass(ObjectDB, null, [{
    key: "dbList",
    value: function () {
      var _ref = asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var metaDB;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                metaDB = Database.ensureDB("internal__objectdb-meta");
                _context.next = 3;
                return metaDB.getAll();

              case 3:
                _context.t0 = function (ea) {
                  return ea._id;
                };

                return _context.abrupt("return", _context.sent.map(_context.t0));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function dbList() {
        return _ref.apply(this, arguments);
      }

      return dbList;
    }()
  }, {
    key: "find",
    value: function () {
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee2(name) {
        var found, metaDB, meta;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                found = objectDBs.get(name);

                if (!found) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", found);

              case 3:
                metaDB = Database.ensureDB("internal__objectdb-meta");
                _context2.next = 6;
                return metaDB.get(name);

              case 6:
                meta = _context2.sent;

                if (meta) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return");

              case 9:
                return _context2.abrupt("return", this.named(name, meta));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function find(_x) {
        return _ref2.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "named",
    value: function named(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var existing = objectDBs.get(name);
      if (existing) return existing;
      if (!options || !options.snapshotLocation) throw new Error("need snapshotLocation");
      if (typeof options.snapshotLocation === "string") {
        try {
          options.snapshotLocation = lively_resources.resource(options.snapshotLocation);
        } catch (err) {
          options.snapshotLocation = lively_resources.resource(System.baseURL).join(options.snapshotLocation);
        }
      }
      var db = new this(name, options);
      objectDBs.set(name, db);

      var metaDB = Database.ensureDB("internal__objectdb-meta");
      metaDB.set(name, _extends({}, options, { snapshotLocation: options.snapshotLocation.url })).catch(function (err) {
        return console.error("error writing objectdb meta:", err);
      });

      return db;
    }
  }]);

  function ObjectDB(name, options) {
    classCallCheck(this, ObjectDB);

    this.name = name;
    if (!options.snapshotLocation || !options.snapshotLocation.isResource) throw new Error("ObjectDB needs snapshotLocation!");
    this.snapshotLocation = options.snapshotLocation;
    this.__commitDB = null;
    this.__versionDB = null;
  }

  createClass(ObjectDB, [{
    key: "destroy",
    value: function () {
      var _ref3 = asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var commitDB, versionDB, metaDB;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commitDB = Database.findDB(this.name + "-commits");

                if (!commitDB) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return commitDB.destroy();

              case 4:
                versionDB = Database.findDB(this.name + "-version-graph");

                if (!versionDB) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return versionDB.destroy();

              case 8:
                objectDBs.delete(this.name);

                metaDB = Database.ensureDB("internal__objectdb-meta");
                _context3.next = 12;
                return metaDB.remove(this.name);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function destroy() {
        return _ref3.apply(this, arguments);
      }

      return destroy;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // storage

  }, {
    key: "snapshotResourceFor",
    value: function snapshotResourceFor(commit) {
      // content is sha1 hash
      var first = commit.content.slice(0, 2),
          rest = commit.content.slice(2);
      return this.snapshotLocation.join(first + "/" + rest + ".json");
    }
  }, {
    key: "snapshotObject",
    value: function () {
      var _ref4 = asyncToGenerator(regeneratorRuntime.mark(function _callee4(type, name, object, snapshotOptions, commitSpec, preview, ref, expectedPrevVersion) {
        var serializeFn, snapshot;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                snapshotOptions = snapshotOptions || {};

                serializeFn = function serializeFn(x) {
                  return x;
                };

                _context4.next = 4;
                return serializeFn(object, snapshotOptions);

              case 4:
                snapshot = _context4.sent;
                return _context4.abrupt("return", this.commit(type, name, snapshot, commitSpec, preview, ref, expectedPrevVersion));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function snapshotObject(_x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      }

      return snapshotObject;
    }()
  }, {
    key: "loadObject",
    value: function () {
      var _ref5 = asyncToGenerator(regeneratorRuntime.mark(function _callee5(type, name, loadOptions, commitIdOrCommit, ref) {
        var snapshot, deserializeFn;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                loadOptions = loadOptions || {};
                _context5.next = 3;
                return this.loadSnapshot(type, name, commitIdOrCommit, ref);

              case 3:
                snapshot = _context5.sent;

                deserializeFn = function deserializeFn(x) {
                  return x;
                };

                return _context5.abrupt("return", deserializeFn(snapshot, loadOptions));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadObject(_x11, _x12, _x13, _x14, _x15) {
        return _ref5.apply(this, arguments);
      }

      return loadObject;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // data management

  }, {
    key: "has",
    value: function () {
      var _ref6 = asyncToGenerator(regeneratorRuntime.mark(function _callee6(type, name) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.objectStats(type, name);

              case 2:
                return _context6.abrupt("return", !!_context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function has(_x16, _x17) {
        return _ref6.apply(this, arguments);
      }

      return has;
    }()
  }, {
    key: "objects",
    value: function () {
      var _ref7 = asyncToGenerator(regeneratorRuntime.mark(function _callee7(optType) {
        var stats, result, type;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.objectStats(optType);

              case 2:
                stats = _context7.sent;

                if (!optType) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", Object.keys(stats || {}));

              case 5:
                result = {};

                for (type in stats) {
                  result[type] = Object.keys(stats[type]);
                }return _context7.abrupt("return", result);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function objects(_x18) {
        return _ref7.apply(this, arguments);
      }

      return objects;
    }()
  }, {
    key: "objectStats",
    value: function () {
      var _ref8 = asyncToGenerator(regeneratorRuntime.mark(function _callee8(objectType, objectName) {
        var statsByType, commitDB, queryOpts, _ref9, rows, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref11, objectTypeAndName, _ref11$value, count, newest, oldest, _objectTypeAndName$sp, _objectTypeAndName$sp2, type, _objectName, statsOfType;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                statsByType = {};
                _context8.t0 = this.__commitDB;

                if (_context8.t0) {
                  _context8.next = 6;
                  break;
                }

                _context8.next = 5;
                return this._commitDB();

              case 5:
                _context8.t0 = _context8.sent;

              case 6:
                commitDB = _context8.t0;
                queryOpts = { reduce: true, group: true };

                if (objectType && objectName) {
                  queryOpts.key = objectType + "\0" + objectName;
                  // queryOpts.endkey = `${objectType}\u0000${objectName}`;
                } else if (objectType) {
                  // queryOpts.key = objectType;
                  queryOpts.startkey = objectType + "\0";
                  queryOpts.endkey = objectType + "\uFFF0";
                }

                _context8.prev = 9;
                _context8.next = 12;
                return commitDB.pouchdb.query("nameWithMaxMinTimestamp_index", queryOpts);

              case 12:
                _ref9 = _context8.sent;
                rows = _ref9.rows;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context8.prev = 17;

                for (_iterator = rows[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _ref11 = _step.value;
                  objectTypeAndName = _ref11.key, _ref11$value = _ref11.value, count = _ref11$value.count, newest = _ref11$value.max, oldest = _ref11$value.min;
                  _objectTypeAndName$sp = objectTypeAndName.split("\0"), _objectTypeAndName$sp2 = slicedToArray(_objectTypeAndName$sp, 2), type = _objectTypeAndName$sp2[0], _objectName = _objectTypeAndName$sp2[1], statsOfType = statsByType[type] || (statsByType[type] = {});

                  statsOfType[_objectName] = { count: count, newest: newest, oldest: oldest };
                }
                _context8.next = 25;
                break;

              case 21:
                _context8.prev = 21;
                _context8.t1 = _context8["catch"](17);
                _didIteratorError = true;
                _iteratorError = _context8.t1;

              case 25:
                _context8.prev = 25;
                _context8.prev = 26;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 28:
                _context8.prev = 28;

                if (!_didIteratorError) {
                  _context8.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context8.finish(28);

              case 32:
                return _context8.finish(25);

              case 33:
                _context8.next = 39;
                break;

              case 35:
                _context8.prev = 35;
                _context8.t2 = _context8["catch"](9);

                console.error(_context8.t2);
                return _context8.abrupt("return", statsByType);

              case 39:
                if (!(objectType && objectName)) {
                  _context8.next = 41;
                  break;
                }

                return _context8.abrupt("return", (statsByType[objectType] || {})[objectName]);

              case 41:
                if (!objectType) {
                  _context8.next = 43;
                  break;
                }

                return _context8.abrupt("return", statsByType[objectType]);

              case 43:
                return _context8.abrupt("return", statsByType);

              case 44:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[9, 35], [17, 21, 25, 33], [26,, 28, 32]]);
      }));

      function objectStats(_x19, _x20) {
        return _ref8.apply(this, arguments);
      }

      return objectStats;
    }()
  }, {
    key: "getCommits",
    value: function () {
      var _ref12 = asyncToGenerator(regeneratorRuntime.mark(function _callee9(type, objectName) {
        var ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "HEAD";
        var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
        var history, commitDB, commits;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._log(type, objectName, ref, limit);

              case 2:
                history = _context9.sent;

                if (history.length) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", []);

              case 5:
                _context9.t0 = this.__commitDB;

                if (_context9.t0) {
                  _context9.next = 10;
                  break;
                }

                _context9.next = 9;
                return this._commitDB();

              case 9:
                _context9.t0 = _context9.sent;

              case 10:
                commitDB = _context9.t0;
                _context9.next = 13;
                return commitDB.getDocuments(history.map(function (ea) {
                  return { id: ea };
                }));

              case 13:
                commits = _context9.sent;
                return _context9.abrupt("return", commits);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getCommits(_x21, _x22) {
        return _ref12.apply(this, arguments);
      }

      return getCommits;
    }()
  }, {
    key: "getCommit",
    value: function () {
      var _ref13 = asyncToGenerator(regeneratorRuntime.mark(function _callee10(commitId) {
        var commitDB;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.t0 = this.__commitDB;

                if (_context10.t0) {
                  _context10.next = 5;
                  break;
                }

                _context10.next = 4;
                return this._commitDB();

              case 4:
                _context10.t0 = _context10.sent;

              case 5:
                commitDB = _context10.t0;
                return _context10.abrupt("return", commitDB.get(commitId));

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getCommit(_x25) {
        return _ref13.apply(this, arguments);
      }

      return getCommit;
    }()
  }, {
    key: "getCommitsWithIds",
    value: function () {
      var _ref14 = asyncToGenerator(regeneratorRuntime.mark(function _callee11(commitIds) {
        var commitDB;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (commitIds.length) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return", []);

              case 2:
                _context11.t0 = this.__commitDB;

                if (_context11.t0) {
                  _context11.next = 7;
                  break;
                }

                _context11.next = 6;
                return this._commitDB();

              case 6:
                _context11.t0 = _context11.sent;

              case 7:
                commitDB = _context11.t0;
                return _context11.abrupt("return", commitDB.getDocuments(commitIds.map(function (id) {
                  return { id: id };
                })));

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getCommitsWithIds(_x26) {
        return _ref14.apply(this, arguments);
      }

      return getCommitsWithIds;
    }()
  }, {
    key: "getLatestCommit",
    value: function () {
      var _ref15 = asyncToGenerator(regeneratorRuntime.mark(function _callee12(type, objectName) {
        var ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "HEAD";
        var includeDeleted = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var _ref16, _ref17, commitId, commitDB, commit;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._log(type, objectName, ref, 1);

              case 2:
                _ref16 = _context12.sent;
                _ref17 = slicedToArray(_ref16, 1);
                commitId = _ref17[0];

                if (commitId) {
                  _context12.next = 7;
                  break;
                }

                return _context12.abrupt("return", null);

              case 7:
                _context12.t0 = this.__commitDB;

                if (_context12.t0) {
                  _context12.next = 12;
                  break;
                }

                _context12.next = 11;
                return this._commitDB();

              case 11:
                _context12.t0 = _context12.sent;

              case 12:
                commitDB = _context12.t0;
                _context12.next = 15;
                return commitDB.get(commitId);

              case 15:
                commit = _context12.sent;

                if (!(commit && commit.deleted && !includeDeleted)) {
                  _context12.next = 18;
                  break;
                }

                return _context12.abrupt("return", null);

              case 18:
                return _context12.abrupt("return", commit);

              case 19:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getLatestCommit(_x27, _x28) {
        return _ref15.apply(this, arguments);
      }

      return getLatestCommit;
    }()
  }, {
    key: "commit",
    value: function () {
      var _ref18 = asyncToGenerator(regeneratorRuntime.mark(function _callee13(type, name, snapshot, commitSpec, preview) {
        var ref = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "HEAD";
        var expectedPrevVersion = arguments[6];

        var author, _commitSpec$descripti, description, _commitSpec$tags, tags, timestamp, _commitSpec$message, message, metadata, alternativePreview, versionDB, versionData, ancestor, ancestors, snapshotIsHash, snapshotJson, commit, res, commitDB;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                author = commitSpec.author, _commitSpec$descripti = commitSpec.description, description = _commitSpec$descripti === undefined ? "no description" : _commitSpec$descripti, _commitSpec$tags = commitSpec.tags, tags = _commitSpec$tags === undefined ? [] : _commitSpec$tags, timestamp = commitSpec.timestamp, _commitSpec$message = commitSpec.message, message = _commitSpec$message === undefined ? "" : _commitSpec$message, metadata = commitSpec.metadata, alternativePreview = commitSpec.preview;

                if (type) {
                  _context13.next = 3;
                  break;
                }

                throw new Error("object needs a type");

              case 3:
                if (name) {
                  _context13.next = 5;
                  break;
                }

                throw new Error("object needs a name");

              case 5:
                if (author) {
                  _context13.next = 7;
                  break;
                }

                throw new Error("Cannot commit " + type + "/" + name + " without user");

              case 7:
                _context13.t0 = this.__versionDB;

                if (_context13.t0) {
                  _context13.next = 12;
                  break;
                }

                _context13.next = 11;
                return this._versionDB();

              case 11:
                _context13.t0 = _context13.sent;

              case 12:
                versionDB = _context13.t0;
                _context13.next = 15;
                return this.versionGraph(type, name);

              case 15:
                versionData = _context13.sent;
                ancestor = versionData ? versionData.refs[ref] : null;
                ancestors = ancestor ? [ancestor] : [];

                if (!expectedPrevVersion) {
                  _context13.next = 23;
                  break;
                }

                if (versionData) {
                  _context13.next = 21;
                  break;
                }

                throw new Error("Trying to store \"" + type + "/" + name + "\" on top of expected version " + expectedPrevVersion + " but no version entry exists!");

              case 21:
                if (!(ancestor !== expectedPrevVersion)) {
                  _context13.next = 23;
                  break;
                }

                throw new Error("Trying to store \"" + type + "/" + name + "\" on top of expected version " + expectedPrevVersion + " but ref " + ref + " is of version " + ancestor + "!");

              case 23:

                // Snapshot object and create commit.
                snapshotIsHash = isHash(snapshot), snapshotJson = snapshotIsHash ? null : snapshot ? JSON.stringify(snapshot) : null, commit = this._createCommit(type, name, description, tags, metadata, author, timestamp, message, ancestors, snapshotIsHash ? null : snapshot, snapshotJson, preview || alternativePreview, snapshotIsHash ? snapshot : null);

                // write snapshot to resource

                if (!(snapshot && !snapshotIsHash)) {
                  _context13.next = 35;
                  break;
                }

                res = this.snapshotResourceFor(commit);
                _context13.next = 28;
                return res.parent().ensureExistance();

              case 28:
                if (!res.canDealWithJSON) {
                  _context13.next = 33;
                  break;
                }

                _context13.next = 31;
                return res.writeJson(snapshot);

              case 31:
                _context13.next = 35;
                break;

              case 33:
                _context13.next = 35;
                return res.write(snapshotJson);

              case 35:
                _context13.t1 = this.__commitDB;

                if (_context13.t1) {
                  _context13.next = 40;
                  break;
                }

                _context13.next = 39;
                return this._commitDB();

              case 39:
                _context13.t1 = _context13.sent;

              case 40:
                commitDB = _context13.t1;
                _context13.next = 43;
                return commitDB.set(commit._id, commit);

              case 43:
                commit = _context13.sent;


                // update version graph
                if (!versionData) versionData = { refs: {}, history: {} };
                versionData.refs[ref] = commit._id;
                versionData.history[commit._id] = ancestors;
                _context13.next = 49;
                return versionDB.set(type + "/" + name, versionData);

              case 49:
                return _context13.abrupt("return", commit);

              case 50:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function commit(_x31, _x32, _x33, _x34, _x35) {
        return _ref18.apply(this, arguments);
      }

      return commit;
    }()
  }, {
    key: "loadSnapshot",
    value: function () {
      var _ref19 = asyncToGenerator(regeneratorRuntime.mark(function _callee14(type, name, commitOrId) {
        var ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "HEAD";
        var commit, commitDB;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                commit = void 0;

                if (!(commitOrId && typeof commitOrId !== "string")) {
                  _context14.next = 5;
                  break;
                }

                commit = commitOrId;
                _context14.next = 20;
                break;

              case 5:
                if (!commitOrId) {
                  _context14.next = 17;
                  break;
                }

                _context14.t0 = this.__commitDB;

                if (_context14.t0) {
                  _context14.next = 11;
                  break;
                }

                _context14.next = 10;
                return this._commitDB();

              case 10:
                _context14.t0 = _context14.sent;

              case 11:
                commitDB = _context14.t0;
                _context14.next = 14;
                return commitDB.get(commitOrId);

              case 14:
                commit = _context14.sent;
                _context14.next = 20;
                break;

              case 17:
                _context14.next = 19;
                return this.getLatestCommit(type, name, ref);

              case 19:
                commit = _context14.sent;

              case 20:
                if (commit) {
                  _context14.next = 22;
                  break;
                }

                throw new Error("Cannot find commit to loadSnapshot for " + type + "/" + name + " (using " + commitOrId + ")");

              case 22:
                return _context14.abrupt("return", this.snapshotResourceFor(commit).readJson());

              case 23:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function loadSnapshot(_x37, _x38, _x39) {
        return _ref19.apply(this, arguments);
      }

      return loadSnapshot;
    }()
  }, {
    key: "_createCommit",
    value: function _createCommit(type, name, description, tags, metadata, author, timestamp) {
      var message = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
      var ancestors = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
      var snapshot = arguments[9];
      var snapshotJson = arguments[10];
      var preview = arguments[11];
      var content = arguments[12];

      if (!preview && snapshot && snapshot.preview) preview = snapshot.preview;
      return this._createCommitFromSpec({
        name: name, type: type,
        timestamp: timestamp || Date.now(),
        author: {
          name: author.name,
          email: author.email,
          realm: author.realm
        },
        tags: tags, description: description, preview: preview,
        message: message,
        content: content || snapshotJson && sha1(snapshotJson) || null,
        deleted: !content && !snapshot,
        metadata: metadata, ancestors: ancestors
      }, true);
    }
  }, {
    key: "_createCommitFromSpec",
    value: function _createCommitFromSpec(commit) {
      var isHashed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!commit.name) throw new Error("commit needs name");
      if (!commit.type) throw new Error("commit needs type");
      if (!commit.author) throw new Error("commit needs author");
      if (!commit.author.name) throw new Error("commit needs author.name");
      if (!commit.timestamp) commit.timestamp = Date.now();
      if (!commit.tags) commit.tags = [];

      if (!isHashed && commit.content) {
        isHashed = isHash(commit.content);
        if (!isHashed) commit.content = sha1(commit.content);
      }
      var hashObj = lively_lang.obj.dissoc(commit, ["preview"]),
          commitHash = sha1(JSON.stringify(hashObj));
      return Object.assign(commit, { _id: commitHash });
    }
  }, {
    key: "_commitDB",
    value: function () {
      var _ref20 = asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
        var dbName, db;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!this.__commitDB) {
                  _context15.next = 2;
                  break;
                }

                return _context15.abrupt("return", this.__commitDB);

              case 2:
                dbName = this.name + "-commits", db = Database.findDB(dbName);

                if (!db) {
                  _context15.next = 5;
                  break;
                }

                return _context15.abrupt("return", this.__commitDB = db);

              case 5:

                db = Database.ensureDB(dbName);

                // prepare indexes

                _context15.next = 8;
                return db.addDesignDocs(this._commitdb_indexes);

              case 8:
                return _context15.abrupt("return", this.__commitDB = db);

              case 9:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _commitDB() {
        return _ref20.apply(this, arguments);
      }

      return _commitDB;
    }()
  }, {
    key: "close",
    value: function () {
      var _ref21 = asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!this.__commitDB) {
                  _context16.next = 4;
                  break;
                }

                _context16.next = 3;
                return this.__commitDB.close();

              case 3:
                this.__commitDB = null;

              case 4:
                if (!this.__versionDB) {
                  _context16.next = 8;
                  break;
                }

                _context16.next = 7;
                return this.__versionDB.close();

              case 7:
                this.__versionDB = null;

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function close() {
        return _ref21.apply(this, arguments);
      }

      return close;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // versioning

  }, {
    key: "versionGraph",
    value: function () {
      var _ref22 = asyncToGenerator(regeneratorRuntime.mark(function _callee17(type, objectName) {
        var versionDB, graph;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.t0 = this.__versionDB;

                if (_context17.t0) {
                  _context17.next = 5;
                  break;
                }

                _context17.next = 4;
                return this._versionDB();

              case 4:
                _context17.t0 = _context17.sent;

              case 5:
                versionDB = _context17.t0;
                _context17.next = 8;
                return versionDB.get(type + "/" + objectName);

              case 8:
                graph = _context17.sent;
                return _context17.abrupt("return", !graph || graph.deleted || graph._deleted ? null : graph);

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function versionGraph(_x44, _x45) {
        return _ref22.apply(this, arguments);
      }

      return versionGraph;
    }()
  }, {
    key: "_log",
    value: function () {
      var _ref23 = asyncToGenerator(regeneratorRuntime.mark(function _callee18(type, objectName) {
        var ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "HEAD";
        var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;

        var data, version, history, _ref24, _ref25;

        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.versionGraph(type, objectName);

              case 2:
                data = _context18.sent;

                if (!(!data || data.deleted || data._deleted)) {
                  _context18.next = 5;
                  break;
                }

                return _context18.abrupt("return", []);

              case 5:
                version = data.refs.HEAD, history = [];

              case 6:
                

                if (!history.includes(version)) {
                  _context18.next = 9;
                  break;
                }

                throw new Error("cyclic version graph???");

              case 9:
                history.push(version);
                // FIXME what about multiple ancestors?
                _ref24 = data.history[version] || [];
                _ref25 = slicedToArray(_ref24, 1);
                version = _ref25[0];

                if (!(!version || history.length >= limit)) {
                  _context18.next = 15;
                  break;
                }

                return _context18.abrupt("break", 17);

              case 15:
                _context18.next = 6;
                break;

              case 17:
                return _context18.abrupt("return", history);

              case 18:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function _log(_x46, _x47) {
        return _ref23.apply(this, arguments);
      }

      return _log;
    }()
  }, {
    key: "_findTimestampedVersionsOfObjectNamed",
    value: function () {
      var _ref26 = asyncToGenerator(regeneratorRuntime.mark(function _callee19(objectName) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$include_docs, include_docs, _options$descending, descending, _options$startTime, startTime, _options$endTime, endTime, startkey, endkey, objectDB, _ref27, rows;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _options$include_docs = options.include_docs;
                include_docs = _options$include_docs === undefined ? true : _options$include_docs;
                _options$descending = options.descending;
                descending = _options$descending === undefined ? true : _options$descending;
                _options$startTime = options.startTime;
                startTime = _options$startTime === undefined ? "0".repeat(13) : _options$startTime;
                _options$endTime = options.endTime;
                endTime = _options$endTime === undefined ? "9".repeat(13) : _options$endTime;
                startkey = objectName + "\0" + (descending ? endTime : startTime);
                endkey = objectName + "\0" + (descending ? startTime : endTime);
                _context19.t0 = this.__commitDB;

                if (_context19.t0) {
                  _context19.next = 15;
                  break;
                }

                _context19.next = 14;
                return this._commitDB();

              case 14:
                _context19.t0 = _context19.sent;

              case 15:
                objectDB = _context19.t0;
                _context19.next = 18;
                return objectDB.pouchdb.query("nameAndTimestamp_index", _extends({}, options, {
                  descending: descending,
                  include_docs: include_docs,
                  startkey: startkey,
                  endkey: endkey
                }));

              case 18:
                _ref27 = _context19.sent;
                rows = _ref27.rows;
                return _context19.abrupt("return", include_docs ? rows.map(function (ea) {
                  return ea.doc;
                }) : rows.map(function (ea) {
                  return ea.id;
                }));

              case 21:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function _findTimestampedVersionsOfObjectNamed(_x50) {
        return _ref26.apply(this, arguments);
      }

      return _findTimestampedVersionsOfObjectNamed;
    }()
  }, {
    key: "_versionDB",
    value: function () {
      var _ref28 = asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
        var dbName, db;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.__versionDB) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt("return", this.__versionDB);

              case 2:
                dbName = this.name + "-version-graph", db = Database.findDB(dbName);

                if (!db) {
                  _context20.next = 5;
                  break;
                }

                return _context20.abrupt("return", this.__versionDB = db);

              case 5:
                db = Database.ensureDB(dbName);
                _context20.next = 8;
                return db.addDesignDocs(this._versiondb_indexes);

              case 8:
                return _context20.abrupt("return", this.__versionDB = db);

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function _versionDB() {
        return _ref28.apply(this, arguments);
      }

      return _versionDB;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // export

  }, {
    key: "exportToDir",
    value: function () {
      var _ref29 = asyncToGenerator(regeneratorRuntime.mark(function _callee21(exportDir, nameAndTypes) {
        var _this = this;

        var copyResources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var includeDeleted = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var commitDB, versionDB, backupData, versions, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _ref31, refs, history, _id, _ref32, type, name, currentExportDir, commitIds, commits, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _ref34, _ref35, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _loop, _iterator4, _step4;

        return regeneratorRuntime.wrap(function _callee21$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:

                if (typeof exportDir === "string") exportDir = lively_resources.resource(exportDir);

                _context22.t0 = this.__commitDB;

                if (_context22.t0) {
                  _context22.next = 6;
                  break;
                }

                _context22.next = 5;
                return this._commitDB();

              case 5:
                _context22.t0 = _context22.sent;

              case 6:
                commitDB = _context22.t0;
                _context22.t1 = this.__versionDB;

                if (_context22.t1) {
                  _context22.next = 12;
                  break;
                }

                _context22.next = 11;
                return this._versionDB();

              case 11:
                _context22.t1 = _context22.sent;

              case 12:
                versionDB = _context22.t1;
                backupData = [];

                if (nameAndTypes) {
                  _context22.next = 58;
                  break;
                }

                _context22.next = 17;
                return versionDB.getAll();

              case 17:
                versions = _context22.sent;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context22.prev = 21;
                _iterator2 = versions[Symbol.iterator]();

              case 23:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context22.next = 42;
                  break;
                }

                _ref31 = _step2.value;
                refs = _ref31.refs, history = _ref31.history, _id = _ref31._id;

                if (!_id.startsWith("_")) {
                  _context22.next = 28;
                  break;
                }

                return _context22.abrupt("continue", 39);

              case 28:
                _context22.next = 30;
                return this.getCommit(refs.HEAD || Object.keys(history)[0]);

              case 30:
                _ref32 = _context22.sent;
                type = _ref32.type;
                name = _ref32.name;
                currentExportDir = exportDir.join(type).join(name).asDirectory();
                commitIds = Object.keys(history);
                _context22.next = 37;
                return this.getCommitsWithIds(commitIds);

              case 37:
                commits = _context22.sent;

                backupData.push({ refs: refs, history: history, currentExportDir: currentExportDir, commits: commits, name: name, type: type });

              case 39:
                _iteratorNormalCompletion2 = true;
                _context22.next = 23;
                break;

              case 42:
                _context22.next = 48;
                break;

              case 44:
                _context22.prev = 44;
                _context22.t2 = _context22["catch"](21);
                _didIteratorError2 = true;
                _iteratorError2 = _context22.t2;

              case 48:
                _context22.prev = 48;
                _context22.prev = 49;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 51:
                _context22.prev = 51;

                if (!_didIteratorError2) {
                  _context22.next = 54;
                  break;
                }

                throw _iteratorError2;

              case 54:
                return _context22.finish(51);

              case 55:
                return _context22.finish(48);

              case 56:
                _context22.next = 94;
                break;

              case 58:
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context22.prev = 61;
                _iterator3 = nameAndTypes[Symbol.iterator]();

              case 63:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context22.next = 80;
                  break;
                }

                _ref34 = _step3.value;
                name = _ref34.name, type = _ref34.type;
                currentExportDir = exportDir.join(type).join(name).asDirectory();
                _context22.next = 69;
                return this.versionGraph(type, name);

              case 69:
                _ref35 = _context22.sent;
                refs = _ref35.refs;
                history = _ref35.history;
                commitIds = Object.keys(history);
                _context22.next = 75;
                return this.getCommitsWithIds(commitIds);

              case 75:
                commits = _context22.sent;

                backupData.push({ refs: refs, history: history, currentExportDir: currentExportDir, commits: commits, name: name, type: type });

              case 77:
                _iteratorNormalCompletion3 = true;
                _context22.next = 63;
                break;

              case 80:
                _context22.next = 86;
                break;

              case 82:
                _context22.prev = 82;
                _context22.t3 = _context22["catch"](61);
                _didIteratorError3 = true;
                _iteratorError3 = _context22.t3;

              case 86:
                _context22.prev = 86;
                _context22.prev = 87;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 89:
                _context22.prev = 89;

                if (!_didIteratorError3) {
                  _context22.next = 92;
                  break;
                }

                throw _iteratorError3;

              case 92:
                return _context22.finish(89);

              case 93:
                return _context22.finish(86);

              case 94:
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context22.prev = 97;
                _loop = regeneratorRuntime.mark(function _loop() {
                  var _ref36, refs, history, currentExportDir, commits, name, type, resourcesForCopy, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _ref38, from, to;

                  return regeneratorRuntime.wrap(function _loop$(_context21) {
                    while (1) {
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          _ref36 = _step4.value;
                          refs = _ref36.refs, history = _ref36.history, currentExportDir = _ref36.currentExportDir, commits = _ref36.commits, name = _ref36.name, type = _ref36.type;

                          if (!includeDeleted) commits = commits.filter(function (ea) {
                            return !ea.deleted;
                          });

                          resourcesForCopy = copyResources ? commits.map(function (commit) {
                            if (commit.deleted || commit._deleted || !commit.content) return null;
                            delete commit._rev;
                            var from = _this.snapshotResourceFor(commit),
                                to = currentExportDir.join(from.parent().name() + "/" + from.name());
                            return { from: from, to: to };
                          }).filter(Boolean) : [];


                          if (!copyResources) commits.forEach(function (commit) {
                            delete commit._rev;
                          });
                          _context21.next = 7;
                          return currentExportDir.ensureExistance();

                        case 7:
                          _context21.next = 9;
                          return currentExportDir.join("index.json").writeJson({ name: name, type: type });

                        case 9:
                          _context21.next = 11;
                          return currentExportDir.join("commits.json").writeJson(commits);

                        case 11:
                          _context21.next = 13;
                          return currentExportDir.join("history.json").writeJson({ refs: refs, history: history });

                        case 13:
                          _iteratorNormalCompletion5 = true;
                          _didIteratorError5 = false;
                          _iteratorError5 = undefined;
                          _context21.prev = 16;
                          _iterator5 = resourcesForCopy[Symbol.iterator]();

                        case 18:
                          if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context21.next = 26;
                            break;
                          }

                          _ref38 = _step5.value;
                          from = _ref38.from, to = _ref38.to;
                          _context21.next = 23;
                          return from.copyTo(to);

                        case 23:
                          _iteratorNormalCompletion5 = true;
                          _context21.next = 18;
                          break;

                        case 26:
                          _context21.next = 32;
                          break;

                        case 28:
                          _context21.prev = 28;
                          _context21.t0 = _context21["catch"](16);
                          _didIteratorError5 = true;
                          _iteratorError5 = _context21.t0;

                        case 32:
                          _context21.prev = 32;
                          _context21.prev = 33;

                          if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                          }

                        case 35:
                          _context21.prev = 35;

                          if (!_didIteratorError5) {
                            _context21.next = 38;
                            break;
                          }

                          throw _iteratorError5;

                        case 38:
                          return _context21.finish(35);

                        case 39:
                          return _context21.finish(32);

                        case 40:
                        case "end":
                          return _context21.stop();
                      }
                    }
                  }, _loop, _this, [[16, 28, 32, 40], [33,, 35, 39]]);
                });
                _iterator4 = backupData[Symbol.iterator]();

              case 100:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  _context22.next = 105;
                  break;
                }

                return _context22.delegateYield(_loop(), "t4", 102);

              case 102:
                _iteratorNormalCompletion4 = true;
                _context22.next = 100;
                break;

              case 105:
                _context22.next = 111;
                break;

              case 107:
                _context22.prev = 107;
                _context22.t5 = _context22["catch"](97);
                _didIteratorError4 = true;
                _iteratorError4 = _context22.t5;

              case 111:
                _context22.prev = 111;
                _context22.prev = 112;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 114:
                _context22.prev = 114;

                if (!_didIteratorError4) {
                  _context22.next = 117;
                  break;
                }

                throw _iteratorError4;

              case 117:
                return _context22.finish(114);

              case 118:
                return _context22.finish(111);

              case 119:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee21, this, [[21, 44, 48, 56], [49,, 51, 55], [61, 82, 86, 94], [87,, 89, 93], [97, 107, 111, 119], [112,, 114, 118]]);
      }));

      function exportToDir(_x52, _x53) {
        return _ref29.apply(this, arguments);
      }

      return exportToDir;
    }()
  }, {
    key: "exportToSpecs",
    value: function () {
      var _ref39 = asyncToGenerator(regeneratorRuntime.mark(function _callee22(nameAndTypes) {
        var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var specs, stats, type, name, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _ref41, _name, _type, _ref42, refs, history, commitIds, commits;

        return regeneratorRuntime.wrap(function _callee22$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                // note: only version data, no snapshots!
                specs = [];

                if (nameAndTypes) {
                  _context23.next = 10;
                  break;
                }

                // = everything
                nameAndTypes = [];
                _context23.next = 5;
                return this.objectStats();

              case 5:
                _context23.t0 = _context23.sent;

                if (_context23.t0) {
                  _context23.next = 8;
                  break;
                }

                _context23.t0 = {};

              case 8:
                stats = _context23.t0;

                for (type in stats) {
                  for (name in stats[type]) {
                    nameAndTypes.push({ type: type, name: name });
                  }
                }

              case 10:
                _iteratorNormalCompletion6 = true;
                _didIteratorError6 = false;
                _iteratorError6 = undefined;
                _context23.prev = 13;
                _iterator6 = nameAndTypes[Symbol.iterator]();

              case 15:
                if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                  _context23.next = 33;
                  break;
                }

                _ref41 = _step6.value;
                _name = _ref41.name, _type = _ref41.type;
                _context23.next = 20;
                return this.versionGraph(_type, _name);

              case 20:
                _ref42 = _context23.sent;
                refs = _ref42.refs;
                history = _ref42.history;
                commitIds = Object.keys(history);
                _context23.next = 26;
                return this.getCommitsWithIds(commitIds);

              case 26:
                commits = _context23.sent;

                if (!includeDeleted) commits = commits.filter(function (ea) {
                  return !ea.deleted;
                });
                commits.forEach(function (commit) {
                  delete commit._rev;
                });
                specs.push({ type: _type, name: _name, commits: commits, history: { refs: refs, history: history } });

              case 30:
                _iteratorNormalCompletion6 = true;
                _context23.next = 15;
                break;

              case 33:
                _context23.next = 39;
                break;

              case 35:
                _context23.prev = 35;
                _context23.t1 = _context23["catch"](13);
                _didIteratorError6 = true;
                _iteratorError6 = _context23.t1;

              case 39:
                _context23.prev = 39;
                _context23.prev = 40;

                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }

              case 42:
                _context23.prev = 42;

                if (!_didIteratorError6) {
                  _context23.next = 45;
                  break;
                }

                throw _iteratorError6;

              case 45:
                return _context23.finish(42);

              case 46:
                return _context23.finish(39);

              case 47:
                return _context23.abrupt("return", specs);

              case 48:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee22, this, [[13, 35, 39, 47], [40,, 42, 46]]);
      }));

      function exportToSpecs(_x56) {
        return _ref39.apply(this, arguments);
      }

      return exportToSpecs;
    }()
  }, {
    key: "importFromDir",
    value: function () {
      var _ref43 = asyncToGenerator(regeneratorRuntime.mark(function _callee24(importDir) {
        var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

        var findImportDataIn = function () {
          var _ref44 = asyncToGenerator(regeneratorRuntime.mark(function _callee23(dir) {
            var _ref45, _ref46, _ref46$, type, name, commits, history, snapshotDirs;

            return regeneratorRuntime.wrap(function _callee23$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return Promise.all([dir.join("index.json").readJson(), dir.join("commits.json").readJson(), dir.join("history.json").readJson()]);

                  case 2:
                    _ref45 = _context24.sent;
                    _ref46 = slicedToArray(_ref45, 3);
                    _ref46$ = _ref46[0];
                    type = _ref46$.type;
                    name = _ref46$.name;
                    commits = _ref46[1];
                    history = _ref46[2];

                    if (!copyResources) {
                      _context24.next = 15;
                      break;
                    }

                    _context24.next = 12;
                    return dir.dirList(1, { exclude: function exclude(ea) {
                        return !ea.isDirectory();
                      } });

                  case 12:
                    _context24.t0 = _context24.sent;
                    _context24.next = 16;
                    break;

                  case 15:
                    _context24.t0 = [];

                  case 16:
                    snapshotDirs = _context24.t0;
                    return _context24.abrupt("return", { dir: dir, type: type, name: name, commits: commits, history: history, snapshotDirs: snapshotDirs });

                  case 18:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee23, this);
          }));

          return function findImportDataIn(_x61) {
            return _ref44.apply(this, arguments);
          };
        }();

        var copyResources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var indexes, dirs, snapshotLocation, importSpecs, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, dir;

        return regeneratorRuntime.wrap(function _callee24$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return importDir.dirList(3, { exclude: function exclude(ea) {
                    return !ea.isDirectory() && ea.name() !== "index.json";
                  } });

              case 2:
                indexes = _context25.sent;


                indexes = indexes.filter(function (ea) {
                  return ea.name() === "index.json";
                }); // FIXME!
                dirs = indexes.map(function (ea) {
                  return ea.parent();
                });
                snapshotLocation = this.snapshotLocation, importSpecs = [];

                // 2. retrieve import data

                _iteratorNormalCompletion7 = true;
                _didIteratorError7 = false;
                _iteratorError7 = undefined;
                _context25.prev = 9;
                _iterator7 = dirs[Symbol.iterator]();

              case 11:
                if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                  _context25.next = 21;
                  break;
                }

                dir = _step7.value;
                _context25.t0 = importSpecs;
                _context25.next = 16;
                return findImportDataIn(dir);

              case 16:
                _context25.t1 = _context25.sent;

                _context25.t0.push.call(_context25.t0, _context25.t1);

              case 18:
                _iteratorNormalCompletion7 = true;
                _context25.next = 11;
                break;

              case 21:
                _context25.next = 27;
                break;

              case 23:
                _context25.prev = 23;
                _context25.t2 = _context25["catch"](9);
                _didIteratorError7 = true;
                _iteratorError7 = _context25.t2;

              case 27:
                _context25.prev = 27;
                _context25.prev = 28;

                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }

              case 30:
                _context25.prev = 30;

                if (!_didIteratorError7) {
                  _context25.next = 33;
                  break;
                }

                throw _iteratorError7;

              case 33:
                return _context25.finish(30);

              case 34:
                return _context25.finish(27);

              case 35:
                return _context25.abrupt("return", this.importFromSpecs(importSpecs, overwrite, copyResources));

              case 36:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee24, this, [[9, 23, 27, 35], [28,, 30, 34]]);
      }));

      function importFromDir(_x58) {
        return _ref43.apply(this, arguments);
      }

      return importFromDir;
    }()
  }, {
    key: "importFromSpecs",
    value: function () {
      var _ref47 = asyncToGenerator(regeneratorRuntime.mark(function _callee25(specs) {
        var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var copyResources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var versionDB, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _ref49, type, name, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, spec;

        return regeneratorRuntime.wrap(function _callee25$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (overwrite) {
                  _context26.next = 36;
                  break;
                }

                _context26.t0 = this.__versionDB;

                if (_context26.t0) {
                  _context26.next = 6;
                  break;
                }

                _context26.next = 5;
                return this._versionDB();

              case 5:
                _context26.t0 = _context26.sent;

              case 6:
                versionDB = _context26.t0;
                _iteratorNormalCompletion8 = true;
                _didIteratorError8 = false;
                _iteratorError8 = undefined;
                _context26.prev = 10;
                _iterator8 = specs[Symbol.iterator]();

              case 12:
                if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                  _context26.next = 22;
                  break;
                }

                _ref49 = _step8.value;
                type = _ref49.type, name = _ref49.name;
                _context26.next = 17;
                return versionDB.get(type + "/" + name);

              case 17:
                if (!_context26.sent) {
                  _context26.next = 19;
                  break;
                }

                throw new Error("Import failed: object " + type + "/" + name + " already exists and overwrite is not allowed");

              case 19:
                _iteratorNormalCompletion8 = true;
                _context26.next = 12;
                break;

              case 22:
                _context26.next = 28;
                break;

              case 24:
                _context26.prev = 24;
                _context26.t1 = _context26["catch"](10);
                _didIteratorError8 = true;
                _iteratorError8 = _context26.t1;

              case 28:
                _context26.prev = 28;
                _context26.prev = 29;

                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                  _iterator8.return();
                }

              case 31:
                _context26.prev = 31;

                if (!_didIteratorError8) {
                  _context26.next = 34;
                  break;
                }

                throw _iteratorError8;

              case 34:
                return _context26.finish(31);

              case 35:
                return _context26.finish(28);

              case 36:
                _iteratorNormalCompletion9 = true;
                _didIteratorError9 = false;
                _iteratorError9 = undefined;
                _context26.prev = 39;
                _iterator9 = specs[Symbol.iterator]();

              case 41:
                if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                  _context26.next = 48;
                  break;
                }

                spec = _step9.value;
                _context26.next = 45;
                return this.importFromSpec(spec, true, copyResources);

              case 45:
                _iteratorNormalCompletion9 = true;
                _context26.next = 41;
                break;

              case 48:
                _context26.next = 54;
                break;

              case 50:
                _context26.prev = 50;
                _context26.t2 = _context26["catch"](39);
                _didIteratorError9 = true;
                _iteratorError9 = _context26.t2;

              case 54:
                _context26.prev = 54;
                _context26.prev = 55;

                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                  _iterator9.return();
                }

              case 57:
                _context26.prev = 57;

                if (!_didIteratorError9) {
                  _context26.next = 60;
                  break;
                }

                throw _iteratorError9;

              case 60:
                return _context26.finish(57);

              case 61:
                return _context26.finish(54);

              case 62:
                return _context26.abrupt("return", specs);

              case 63:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee25, this, [[10, 24, 28, 36], [29,, 31, 35], [39, 50, 54, 62], [55,, 57, 61]]);
      }));

      function importFromSpecs(_x62) {
        return _ref47.apply(this, arguments);
      }

      return importFromSpecs;
    }()
  }, {
    key: "importFromSpec",
    value: function () {
      var _ref50 = asyncToGenerator(regeneratorRuntime.mark(function _callee26(spec) {
        var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var copyResources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var versionDB, commitDB, snapshotLocation, type, name, commits, history, snapshotDirs;
        return regeneratorRuntime.wrap(function _callee26$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.t0 = this.__versionDB;

                if (_context27.t0) {
                  _context27.next = 5;
                  break;
                }

                _context27.next = 4;
                return this._versionDB();

              case 4:
                _context27.t0 = _context27.sent;

              case 5:
                versionDB = _context27.t0;
                _context27.t1 = this.__commitDB;

                if (_context27.t1) {
                  _context27.next = 11;
                  break;
                }

                _context27.next = 10;
                return this._commitDB();

              case 10:
                _context27.t1 = _context27.sent;

              case 11:
                commitDB = _context27.t1;
                snapshotLocation = this.snapshotLocation;
                type = spec.type;
                name = spec.name;
                commits = spec.commits;
                history = spec.history;
                snapshotDirs = spec.snapshotDirs;
                _context27.t2 = !overwrite;

                if (!_context27.t2) {
                  _context27.next = 23;
                  break;
                }

                _context27.next = 22;
                return versionDB.get(type + "/" + name);

              case 22:
                _context27.t2 = _context27.sent;

              case 23:
                if (!_context27.t2) {
                  _context27.next = 25;
                  break;
                }

                throw new Error("Import failed: object " + type + "/" + name + " already exists and overwrite is not allowed");

              case 25:
                _context27.next = 27;
                return Promise.all([commitDB.setDocuments(commits), versionDB.set(type + "/" + name, history)].concat(toConsumableArray(snapshotDirs && copyResources ? snapshotDirs.map(function (ea) {
                  return ea.copyTo(snapshotLocation.join(ea.name()).asDirectory());
                }) : [])));

              case 27:
                return _context27.abrupt("return", spec);

              case 28:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee26, this);
      }));

      function importFromSpec(_x65) {
        return _ref50.apply(this, arguments);
      }

      return importFromSpec;
    }()
  }, {
    key: "importFromResource",
    value: function () {
      var _ref51 = asyncToGenerator(regeneratorRuntime.mark(function _callee27(type, name, resource$$1, commitSpec) {
        var purgeHistory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var snap;
        return regeneratorRuntime.wrap(function _callee27$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return resource$$1.readJson();

              case 2:
                snap = _context28.sent;
                _context28.t0 = purgeHistory;

                if (!_context28.t0) {
                  _context28.next = 8;
                  break;
                }

                _context28.next = 7;
                return this.has(type, name);

              case 7:
                _context28.t0 = _context28.sent;

              case 8:
                if (!_context28.t0) {
                  _context28.next = 11;
                  break;
                }

                _context28.next = 11;
                return this.delete(type, name, false);

              case 11:
                return _context28.abrupt("return", this.commit(type, name, snap, commitSpec));

              case 12:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee27, this);
      }));

      function importFromResource(_x68, _x69, _x70, _x71) {
        return _ref51.apply(this, arguments);
      }

      return importFromResource;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // synchronization / replication

  }, {
    key: "replicateTo",
    value: function replicateTo(remoteCommitDB, remoteVersionDB, toSnapshotLocation, options) {
      return new Synchronization(this, remoteCommitDB, remoteVersionDB, toSnapshotLocation, _extends({ method: "replicateTo" }, options)).start();
    }
  }, {
    key: "replicateFrom",
    value: function replicateFrom(remoteCommitDB, remoteVersionDB, toSnapshotLocation, options) {
      return new Synchronization(this, remoteCommitDB, remoteVersionDB, toSnapshotLocation, _extends({ method: "replicateFrom" }, options)).start();
    }
  }, {
    key: "sync",
    value: function sync(remoteCommitDB, remoteVersionDB, toSnapshotLocation, options) {
      return new Synchronization(this, remoteCommitDB, remoteVersionDB, toSnapshotLocation, _extends({ method: "sync" }, options)).start();
    }
  }, {
    key: "getConflicts",
    value: function () {
      var _ref52 = asyncToGenerator(regeneratorRuntime.mark(function _callee30(includeDocs, only) {
        var getConflicts = function () {
          var _ref53 = asyncToGenerator(regeneratorRuntime.mark(function _callee29(db, kind) {
            var _this2 = this;

            var conflicts;
            return regeneratorRuntime.wrap(function _callee29$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return db.getConflicts({ include_docs: true });

                  case 2:
                    conflicts = _context30.sent;
                    _context30.next = 5;
                    return Promise.all(conflicts.map(function () {
                      var _ref54 = asyncToGenerator(regeneratorRuntime.mark(function _callee28(ea) {
                        var id, rev, conflicts, doc, query;
                        return regeneratorRuntime.wrap(function _callee28$(_context29) {
                          while (1) {
                            switch (_context29.prev = _context29.next) {
                              case 0:
                                id = ea.id, rev = ea.rev, conflicts = ea.conflicts, doc = ea.doc;

                                if (!(only && only[kind] && !only[kind][id])) {
                                  _context29.next = 3;
                                  break;
                                }

                                return _context29.abrupt("return", null);

                              case 3:
                                if (!includeDocs) {
                                  _context29.next = 8;
                                  break;
                                }

                                query = conflicts.map(function (rev) {
                                  return { id: id, rev: rev };
                                });
                                _context29.next = 7;
                                return db.getDocuments(query);

                              case 7:
                                conflicts = _context29.sent;

                              case 8:
                                if (!includeDocs) doc = null;else lively_lang.obj.dissoc(doc, ["_conflicts"]);
                                return _context29.abrupt("return", { id: id, rev: rev, conflicts: conflicts, kind: kind, doc: doc });

                              case 10:
                              case "end":
                                return _context29.stop();
                            }
                          }
                        }, _callee28, _this2);
                      }));

                      return function (_x77) {
                        return _ref54.apply(this, arguments);
                      };
                    }()));

                  case 5:
                    _context30.t0 = Boolean;
                    return _context30.abrupt("return", _context30.sent.filter(_context30.t0));

                  case 7:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee29, this);
          }));

          return function getConflicts(_x75, _x76) {
            return _ref53.apply(this, arguments);
          };
        }();

        var commitDB, versionDB;
        return regeneratorRuntime.wrap(function _callee30$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.t0 = this.__commitDB;

                if (_context31.t0) {
                  _context31.next = 5;
                  break;
                }

                _context31.next = 4;
                return this._commitDB();

              case 4:
                _context31.t0 = _context31.sent;

              case 5:
                commitDB = _context31.t0;
                _context31.t1 = this.__versionDB;

                if (_context31.t1) {
                  _context31.next = 11;
                  break;
                }

                _context31.next = 10;
                return this._versionDB();

              case 10:
                _context31.t1 = _context31.sent;

              case 11:
                versionDB = _context31.t1;
                _context31.next = 14;
                return getConflicts(versionDB, "versions");

              case 14:
                _context31.t2 = _context31.sent;
                _context31.next = 17;
                return getConflicts(commitDB, "commits");

              case 17:
                _context31.next = 19;
                return _context31.sent;

              case 19:
                _context31.t3 = _context31.sent;
                return _context31.abrupt("return", {
                  versionConflicts: _context31.t2,
                  commitConflicts: _context31.t3
                });

              case 21:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee30, this);
      }));

      function getConflicts(_x73, _x74) {
        return _ref52.apply(this, arguments);
      }

      return getConflicts;
    }()
  }, {
    key: "resolveConflict",
    value: function () {
      var _ref55 = asyncToGenerator(regeneratorRuntime.mark(function _callee31(arg) {
        var resolved, del, kind, id, db;
        return regeneratorRuntime.wrap(function _callee31$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                // {resolved, delete: del, kind, id}
                resolved = arg.resolved, del = arg.delete, kind = arg.kind, id = arg.id, db = void 0;

                if (!(kind === "versions")) {
                  _context32.next = 10;
                  break;
                }

                _context32.t0 = this.__versionDB;

                if (_context32.t0) {
                  _context32.next = 7;
                  break;
                }

                _context32.next = 6;
                return this._versionDB();

              case 6:
                _context32.t0 = _context32.sent;

              case 7:
                db = _context32.t0;
                _context32.next = 20;
                break;

              case 10:
                if (!(kind === "commits")) {
                  _context32.next = 19;
                  break;
                }

                _context32.t1 = this.__commitDB;

                if (_context32.t1) {
                  _context32.next = 16;
                  break;
                }

                _context32.next = 15;
                return this._commitDB();

              case 15:
                _context32.t1 = _context32.sent;

              case 16:
                db = _context32.t1;
                _context32.next = 20;
                break;

              case 19:
                throw new Error("Unknown conflict kind: " + kind);

              case 20:
                _context32.next = 22;
                return db.set(id, resolved);

              case 22:
                _context32.next = 24;
                return Promise.all(del.map(function (rev) {
                  return db.pouchdb.remove(id, rev);
                }));

              case 24:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee31, this);
      }));

      function resolveConflict(_x78) {
        return _ref55.apply(this, arguments);
      }

      return resolveConflict;
    }()
  }, {
    key: "getDiff",
    value: function () {
      var _ref56 = asyncToGenerator(regeneratorRuntime.mark(function _callee35(remoteCommitDBOrName, remoteVersionDB) {
        var _this3 = this;

        var remoteCommitDB, localCommitDB, localVersionDB, commitDiff, versionDiff, local, remote, changed, localCommits, remoteCommits, changedCommits, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, ea, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _ea, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _ea2, localCommitTypeAndNames, remoteCommitTypeAndNames, changedCommitTypeAndNames;

        return regeneratorRuntime.wrap(function _callee35$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                remoteCommitDB = remoteCommitDBOrName;

                if (typeof remoteCommitDBOrName === "string") {
                  remoteCommitDB = Database.ensureDB(remoteCommitDBOrName + "-commits");
                  remoteVersionDB = Database.ensureDB(remoteCommitDBOrName + "-version-graph");
                }

                _context36.t0 = this.__commitDB;

                if (_context36.t0) {
                  _context36.next = 7;
                  break;
                }

                _context36.next = 6;
                return this._commitDB();

              case 6:
                _context36.t0 = _context36.sent;

              case 7:
                localCommitDB = _context36.t0;
                _context36.t1 = this.__versionDB;

                if (_context36.t1) {
                  _context36.next = 13;
                  break;
                }

                _context36.next = 12;
                return this._versionDB();

              case 12:
                _context36.t1 = _context36.sent;

              case 13:
                localVersionDB = _context36.t1;
                _context36.next = 16;
                return localCommitDB.diffWith(remoteCommitDB);

              case 16:
                commitDiff = _context36.sent;
                _context36.next = 19;
                return localVersionDB.diffWith(remoteVersionDB);

              case 19:
                versionDiff = _context36.sent;
                _context36.next = 22;
                return Promise.all(versionDiff.inLeft.map(function () {
                  var _ref57 = asyncToGenerator(regeneratorRuntime.mark(function _callee32(ea) {
                    return regeneratorRuntime.wrap(function _callee32$(_context33) {
                      while (1) {
                        switch (_context33.prev = _context33.next) {
                          case 0:
                            _context33.t0 = ea.id;
                            _context33.next = 3;
                            return localVersionDB.get(ea.id);

                          case 3:
                            _context33.t1 = _context33.sent;
                            return _context33.abrupt("return", {
                              id: _context33.t0,
                              doc: _context33.t1
                            });

                          case 5:
                          case "end":
                            return _context33.stop();
                        }
                      }
                    }, _callee32, _this3);
                  }));

                  return function (_x81) {
                    return _ref57.apply(this, arguments);
                  };
                }()));

              case 22:
                local = _context36.sent;
                _context36.next = 25;
                return Promise.all(versionDiff.inRight.map(function () {
                  var _ref58 = asyncToGenerator(regeneratorRuntime.mark(function _callee33(ea) {
                    return regeneratorRuntime.wrap(function _callee33$(_context34) {
                      while (1) {
                        switch (_context34.prev = _context34.next) {
                          case 0:
                            _context34.t0 = ea.id;
                            _context34.next = 3;
                            return remoteVersionDB.get(ea.id);

                          case 3:
                            _context34.t1 = _context34.sent;
                            return _context34.abrupt("return", {
                              id: _context34.t0,
                              doc: _context34.t1
                            });

                          case 5:
                          case "end":
                            return _context34.stop();
                        }
                      }
                    }, _callee33, _this3);
                  }));

                  return function (_x82) {
                    return _ref58.apply(this, arguments);
                  };
                }()));

              case 25:
                remote = _context36.sent;
                _context36.next = 28;
                return Promise.all(versionDiff.changed.map(function () {
                  var _ref59 = asyncToGenerator(regeneratorRuntime.mark(function _callee34(ea) {
                    return regeneratorRuntime.wrap(function _callee34$(_context35) {
                      while (1) {
                        switch (_context35.prev = _context35.next) {
                          case 0:
                            _context35.t0 = babelHelpers$1;
                            _context35.t1 = {};
                            _context35.t2 = ea.left;
                            _context35.next = 5;
                            return localVersionDB.get(ea.left.id);

                          case 5:
                            _context35.t3 = _context35.sent;
                            _context35.next = 8;
                            return remoteVersionDB.get(ea.right.id);

                          case 8:
                            _context35.t4 = _context35.sent;
                            _context35.t5 = {
                              docA: _context35.t3,
                              docB: _context35.t4
                            };
                            return _context35.abrupt("return", _context35.t0.extends.call(_context35.t0, _context35.t1, _context35.t2, _context35.t5));

                          case 11:
                          case "end":
                            return _context35.stop();
                        }
                      }
                    }, _callee34, _this3);
                  }));

                  return function (_x83) {
                    return _ref59.apply(this, arguments);
                  };
                }()));

              case 28:
                changed = _context36.sent;
                localCommits = [];
                remoteCommits = [];
                changedCommits = [];
                _iteratorNormalCompletion10 = true;
                _didIteratorError10 = false;
                _iteratorError10 = undefined;
                _context36.prev = 35;
                _iterator10 = commitDiff.inLeft[Symbol.iterator]();

              case 37:
                if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                  _context36.next = 47;
                  break;
                }

                ea = _step10.value;
                _context36.t2 = localCommits;
                _context36.next = 42;
                return localCommitDB.get(ea.id);

              case 42:
                _context36.t3 = _context36.sent;

                _context36.t2.push.call(_context36.t2, _context36.t3);

              case 44:
                _iteratorNormalCompletion10 = true;
                _context36.next = 37;
                break;

              case 47:
                _context36.next = 53;
                break;

              case 49:
                _context36.prev = 49;
                _context36.t4 = _context36["catch"](35);
                _didIteratorError10 = true;
                _iteratorError10 = _context36.t4;

              case 53:
                _context36.prev = 53;
                _context36.prev = 54;

                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                  _iterator10.return();
                }

              case 56:
                _context36.prev = 56;

                if (!_didIteratorError10) {
                  _context36.next = 59;
                  break;
                }

                throw _iteratorError10;

              case 59:
                return _context36.finish(56);

              case 60:
                return _context36.finish(53);

              case 61:
                _iteratorNormalCompletion11 = true;
                _didIteratorError11 = false;
                _iteratorError11 = undefined;
                _context36.prev = 64;
                _iterator11 = commitDiff.inRight[Symbol.iterator]();

              case 66:
                if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
                  _context36.next = 76;
                  break;
                }

                _ea = _step11.value;
                _context36.t5 = remoteCommits;
                _context36.next = 71;
                return remoteCommitDB.get(_ea.id);

              case 71:
                _context36.t6 = _context36.sent;

                _context36.t5.push.call(_context36.t5, _context36.t6);

              case 73:
                _iteratorNormalCompletion11 = true;
                _context36.next = 66;
                break;

              case 76:
                _context36.next = 82;
                break;

              case 78:
                _context36.prev = 78;
                _context36.t7 = _context36["catch"](64);
                _didIteratorError11 = true;
                _iteratorError11 = _context36.t7;

              case 82:
                _context36.prev = 82;
                _context36.prev = 83;

                if (!_iteratorNormalCompletion11 && _iterator11.return) {
                  _iterator11.return();
                }

              case 85:
                _context36.prev = 85;

                if (!_didIteratorError11) {
                  _context36.next = 88;
                  break;
                }

                throw _iteratorError11;

              case 88:
                return _context36.finish(85);

              case 89:
                return _context36.finish(82);

              case 90:
                _iteratorNormalCompletion12 = true;
                _didIteratorError12 = false;
                _iteratorError12 = undefined;
                _context36.prev = 93;
                _iterator12 = commitDiff.changed[Symbol.iterator]();

              case 95:
                if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
                  _context36.next = 110;
                  break;
                }

                _ea2 = _step12.value;
                _context36.t8 = changedCommits;
                _context36.next = 100;
                return localCommitDB.get(_ea2.left.id);

              case 100:
                _context36.t9 = _context36.sent;

                _context36.t8.push.call(_context36.t8, _context36.t9);

                _context36.t10 = changedCommits;
                _context36.next = 105;
                return remoteCommitDB.get(_ea2.right.id);

              case 105:
                _context36.t11 = _context36.sent;

                _context36.t10.push.call(_context36.t10, _context36.t11);

              case 107:
                _iteratorNormalCompletion12 = true;
                _context36.next = 95;
                break;

              case 110:
                _context36.next = 116;
                break;

              case 112:
                _context36.prev = 112;
                _context36.t12 = _context36["catch"](93);
                _didIteratorError12 = true;
                _iteratorError12 = _context36.t12;

              case 116:
                _context36.prev = 116;
                _context36.prev = 117;

                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                  _iterator12.return();
                }

              case 119:
                _context36.prev = 119;

                if (!_didIteratorError12) {
                  _context36.next = 122;
                  break;
                }

                throw _iteratorError12;

              case 122:
                return _context36.finish(119);

              case 123:
                return _context36.finish(116);

              case 124:
                localCommitTypeAndNames = localCommits.map(function (ea) {
                  return lively_lang.obj.select(ea, ["_id", "name", "type"]);
                }), remoteCommitTypeAndNames = remoteCommits.map(function (ea) {
                  return lively_lang.obj.select(ea, ["_id", "name", "type"]);
                }), changedCommitTypeAndNames = changedCommits.map(function (ea) {
                  return lively_lang.obj.select(ea, ["_id", "name", "type"]);
                });
                return _context36.abrupt("return", {
                  changed: changed, remote: remote, local: local,
                  changedCommitTypeAndNames: changedCommitTypeAndNames,
                  remoteCommitTypeAndNames: remoteCommitTypeAndNames,
                  localCommitTypeAndNames: localCommitTypeAndNames
                });

              case 126:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee35, this, [[35, 49, 53, 61], [54,, 56, 60], [64, 78, 82, 90], [83,, 85, 89], [93, 112, 116, 124], [117,, 119, 123]]);
      }));

      function getDiff(_x79, _x80) {
        return _ref56.apply(this, arguments);
      }

      return getDiff;
    }()

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // deletion

  }, {
    key: "delete",
    value: function () {
      var _ref60 = asyncToGenerator(regeneratorRuntime.mark(function _callee36(type, name) {
        var dryRun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var resources, commitDeletions, objectDB, opts, _ref61, rows, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, _ref64, commit, versionDB, _ref63, _id, _rev, deletedHist;

        return regeneratorRuntime.wrap(function _callee36$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                resources = [], commitDeletions = [];

                // 1. meta data to delete

                _context37.t0 = this.__commitDB;

                if (_context37.t0) {
                  _context37.next = 6;
                  break;
                }

                _context37.next = 5;
                return this._commitDB();

              case 5:
                _context37.t0 = _context37.sent;

              case 6:
                objectDB = _context37.t0;
                opts = {
                  include_docs: true,
                  startkey: type + "\0" + name + "\0",
                  endkey: type + "\0" + name + "\uFFFF"
                };
                _context37.next = 10;
                return objectDB.query("nameAndTimestamp_index", opts);

              case 10:
                _ref61 = _context37.sent;
                rows = _ref61.rows;
                _iteratorNormalCompletion13 = true;
                _didIteratorError13 = false;
                _iteratorError13 = undefined;
                _context37.prev = 15;


                for (_iterator13 = rows[Symbol.iterator](); !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  _ref64 = _step13.value;
                  commit = _ref64.doc;

                  // 2. resources to delete
                  if (!commit.deleted && !commit._deleted && commit.content) resources.push(this.snapshotResourceFor(commit));
                  commitDeletions.push(_extends({}, commit, { _deleted: true }));
                }

                // 3. history to delete
                _context37.next = 23;
                break;

              case 19:
                _context37.prev = 19;
                _context37.t1 = _context37["catch"](15);
                _didIteratorError13 = true;
                _iteratorError13 = _context37.t1;

              case 23:
                _context37.prev = 23;
                _context37.prev = 24;

                if (!_iteratorNormalCompletion13 && _iterator13.return) {
                  _iterator13.return();
                }

              case 26:
                _context37.prev = 26;

                if (!_didIteratorError13) {
                  _context37.next = 29;
                  break;
                }

                throw _iteratorError13;

              case 29:
                return _context37.finish(26);

              case 30:
                return _context37.finish(23);

              case 31:
                _context37.t2 = this.__versionDB;

                if (_context37.t2) {
                  _context37.next = 36;
                  break;
                }

                _context37.next = 35;
                return this._versionDB();

              case 35:
                _context37.t2 = _context37.sent;

              case 36:
                versionDB = _context37.t2;
                _context37.next = 39;
                return versionDB.get(type + "/" + name);

              case 39:
                _ref63 = _context37.sent;
                _id = _ref63._id;
                _rev = _ref63._rev;
                deletedHist = { _id: _id, _rev: _rev, _deleted: true };

                if (dryRun) {
                  _context37.next = 49;
                  break;
                }

                _context37.next = 46;
                return objectDB.setDocuments(commitDeletions);

              case 46:
                _context37.next = 48;
                return versionDB.setDocuments([deletedHist]);

              case 48:
                Promise.all(resources.map(function (ea) {
                  return ea.remove();
                }));

              case 49:
                return _context37.abrupt("return", {
                  commits: commitDeletions,
                  history: deletedHist,
                  resources: resources
                });

              case 50:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee36, this, [[15, 19, 23, 31], [24,, 26, 30]]);
      }));

      function _delete(_x84, _x85) {
        return _ref60.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "deleteCommit",
    value: function () {
      var _ref65 = asyncToGenerator(regeneratorRuntime.mark(function _callee37(commitOrId) {
        var dryRun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "HEAD";

        var commit, commitDB, versionDB, objectDB, _commit, name, type, _id, resources, commitDeletions, hist, _ref66, _ref67, ancestor;

        return regeneratorRuntime.wrap(function _callee37$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                commit = void 0;

                if (!(commitOrId && typeof commitOrId !== "string")) {
                  _context38.next = 5;
                  break;
                }

                commit = commitOrId;
                _context38.next = 15;
                break;

              case 5:
                if (!commitOrId) {
                  _context38.next = 15;
                  break;
                }

                _context38.t0 = this.__commitDB;

                if (_context38.t0) {
                  _context38.next = 11;
                  break;
                }

                _context38.next = 10;
                return this._commitDB();

              case 10:
                _context38.t0 = _context38.sent;

              case 11:
                commitDB = _context38.t0;
                _context38.next = 14;
                return commitDB.get(commitOrId);

              case 14:
                commit = _context38.sent;

              case 15:
                if (commit) {
                  _context38.next = 17;
                  break;
                }

                throw new Error("commit needed!");

              case 17:
                _context38.t1 = this.__versionDB;

                if (_context38.t1) {
                  _context38.next = 22;
                  break;
                }

                _context38.next = 21;
                return this._versionDB();

              case 21:
                _context38.t1 = _context38.sent;

              case 22:
                versionDB = _context38.t1;
                _context38.t2 = this.__commitDB;

                if (_context38.t2) {
                  _context38.next = 28;
                  break;
                }

                _context38.next = 27;
                return this._commitDB();

              case 27:
                _context38.t2 = _context38.sent;

              case 28:
                objectDB = _context38.t2;
                _commit = commit;
                name = _commit.name;
                type = _commit.type;
                _id = _commit._id;
                resources = commit.deleted || commit._deleted || !commit.content ? [] : [this.snapshotResourceFor(commit)];
                commitDeletions = [_extends({}, commit, { _deleted: true })];
                _context38.next = 37;
                return versionDB.get(type + "/" + name);

              case 37:
                hist = _context38.sent;

                if (hist) {
                  _context38.next = 40;
                  break;
                }

                throw new Error("No history for " + type + "/" + name + "@" + commit._id);

              case 40:
                if (hist.refs[ref]) {
                  _context38.next = 42;
                  break;
                }

                throw new Error("Cannot delete commit " + type + "/" + name + "@" + commit._id + " b/c it is not where ref " + ref + " is pointing!");

              case 42:
                _ref66 = hist.history[commit._id] || [], _ref67 = slicedToArray(_ref66, 1), ancestor = _ref67[0];

                if (!(!ancestor && Object.keys(hist.history).length <= 1)) {
                  _context38.next = 47;
                  break;
                }

                hist._deleted = true;
                _context38.next = 53;
                break;

              case 47:
                if (ancestor) {
                  _context38.next = 51;
                  break;
                }

                throw new Error("Cannot delete commit " + type + "/" + name + "@" + commit._id + " b/c it has no ancestor but there are still other commits!");

              case 51:
                delete hist.history[commit._id];
                hist.refs[ref] = ancestor;

              case 53:
                if (dryRun) {
                  _context38.next = 60;
                  break;
                }

                _context38.next = 56;
                return versionDB.set(type + "/" + name, hist);

              case 56:
                _context38.next = 58;
                return objectDB.setDocuments(commitDeletions);

              case 58:
                _context38.next = 60;
                return Promise.all(resources.map(function (ea) {
                  return ea.remove();
                }));

              case 60:
                return _context38.abrupt("return", {
                  commits: commitDeletions,
                  history: hist,
                  resources: resources
                });

              case 61:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee37, this);
      }));

      function deleteCommit(_x87) {
        return _ref65.apply(this, arguments);
      }

      return deleteCommit;
    }()
  }, {
    key: "_commitdb_indexes",
    get: function get() {

      return [{
        name: 'name_index',
        version: 4,
        mapFn: "function (doc) { emit(doc.type + \"\0\" + doc.name); }"
      }, {
        name: 'nameAndTimestamp_index',
        version: 3,
        mapFn: "function (doc) { emit(doc.type + \"\0\" + doc.name + \"\0\" + doc.timestamp + \"\0\" + doc._id); }"
      }, {
        name: 'nameWithMaxMinTimestamp_index',
        version: 3,
        mapFn: "function(doc) { emit(doc.type + \"\0\" + doc.name, doc.timestamp); }",
        reduceFn: "_stats"
      }, {
        name: 'nameTypeFilter',
        version: 7,
        filterFn: "function(doc, req) {\n          if (doc._id[0] === \"_\" || !req || !req.query) return true;\n          if (req.query.onlyIds) return !!req.query.onlyIds[doc._id];\n          if (req.query.onlyTypesAndNames)\n            return !!req.query.onlyTypesAndNames[doc.type + \"/\" + doc.name];\n          return true;\n        }"
      }];
    }
  }, {
    key: "_versiondb_indexes",
    get: function get() {
      return [{
        name: 'nameTypeFilter',
        version: 3,
        filterFn: "function(doc, req) {\n          if (doc._id[0] === \"_\" || !req || !req.query) return true;\n          if (req.query.onlyIds) return !!req.query.onlyIds[doc._id];\n          if (req.query.onlyTypesAndNames) return !!req.query.onlyTypesAndNames[doc._id];\n          return true;\n        }"
      }];
    }
  }]);
  return ObjectDB;
}();

var Synchronization = function () {
  function Synchronization(fromObjectDB, remoteCommitDB, remoteVersionDB, remoteLocation) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    classCallCheck(this, Synchronization);

    // replicationFilter: {onlyIds: {STRING: BOOL}, onlyTypesAndNames: {[type+"\u0000"+name]: BOOL}}
    this.options = _extends({
      debug: false, live: false, method: "sync",
      replicationFilter: undefined
    }, options);
    this.state = "not started";
    this.method = "";
    this.fromObjectDB = fromObjectDB;
    this.remoteCommitDB = remoteCommitDB;
    this.remoteVersionDB = remoteVersionDB;
    this.remoteLocation = remoteLocation;
    this.deferred = lively_lang.promise.deferred();
    this.conflicts = [];
    this.changes = [];
    this.errors = [];
  }

  createClass(Synchronization, [{
    key: "whenPaused",
    value: function whenPaused() {
      var _this4 = this;

      return Promise.resolve().then(function () {
        return lively_lang.promise.waitFor(function () {
          return _this4.isPaused || _this4.isComplete;
        });
      }).then(function () {
        return _this4;
      });
    }
  }, {
    key: "waitForIt",
    value: function waitForIt() {
      return this.deferred.promise;
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.isSynchonizing) this._startReplicationAndCopy().catch(function (err) {
        return console.error("Error starting synchronization: ", err);
      });
      return this;
    }
  }, {
    key: "_startReplicationAndCopy",
    value: function () {
      var _ref68 = asyncToGenerator(regeneratorRuntime.mark(function _callee39() {
        var _this5 = this;

        var fromObjectDB, remoteCommitDB, remoteVersionDB, remoteLocation, _options, debug, _options$live, live, _options$retry, retry, method, replicationFilter, versionDB, commitDB, _commitdb_indexes, _versiondb_indexes, fromSnapshotLocation, versionChangeListener, commitChangeListener, commitNameTypeFilter, versionNameTypeFilter, opts, commitOpts, versionOpts, commitReplication, versionReplication, snapshotReplication, commitReplicationState, versionReplicationState, updateState, tryToResolve, snapshotPathFor;

        return regeneratorRuntime.wrap(function _callee39$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                snapshotPathFor = function snapshotPathFor(commit) {
                  // content is sha1 hash
                  if (!commit.content) return null;
                  var first = commit.content.slice(0, 2),
                      rest = commit.content.slice(2);
                  return first + "/" + rest + ".json";
                };

                tryToResolve = function tryToResolve(sync, errors) {
                  if (!errors.length && (commitReplicationState !== "complete" || versionReplicationState !== "complete" || !snapshotReplication.isComplete())) return;
                  versionChangeListener.cancel();
                  var err = void 0;
                  if (errors.length) {
                    sync.state = "complete";
                    sync.errors = errors;
                    commitReplication.cancel();
                    versionReplication.cancel();
                    err = new Error("Synchronization error:\n  " + errors.join("\n  "));
                    err.errors = errors;
                    console.log(sync + " errored");
                  } else {
                    console.log(sync + " completed");
                  }
                  if (err) sync.deferred.reject(err);else sync.deferred.resolve(sync);
                };

                updateState = function updateState(sync) {
                  if (versionReplicationState === "paused" && commitReplicationState === "paused" && snapshotReplication.copyCalls <= 0 && snapshotReplication.copyCallsWaiting <= 0) return sync.state = "paused";
                  if (versionReplicationState === "complete" && commitReplicationState === "complete" && snapshotReplication.isComplete()) return sync.state = "complete";
                  return sync.state = "running";
                };

                fromObjectDB = this.fromObjectDB;
                remoteCommitDB = this.remoteCommitDB;
                remoteVersionDB = this.remoteVersionDB;
                remoteLocation = this.remoteLocation;
                _options = this.options;
                debug = _options.debug;
                _options$live = _options.live;
                live = _options$live === undefined ? false : _options$live;
                _options$retry = _options.retry;
                retry = _options$retry === undefined ? false : _options$retry;
                method = _options.method;
                replicationFilter = _options.replicationFilter;
                _context40.t0 = fromObjectDB.__versionDB;

                if (_context40.t0) {
                  _context40.next = 20;
                  break;
                }

                _context40.next = 19;
                return fromObjectDB._versionDB();

              case 19:
                _context40.t0 = _context40.sent;

              case 20:
                versionDB = _context40.t0;
                _context40.t1 = fromObjectDB.__commitDB;

                if (_context40.t1) {
                  _context40.next = 26;
                  break;
                }

                _context40.next = 25;
                return fromObjectDB._commitDB();

              case 25:
                _context40.t1 = _context40.sent;

              case 26:
                commitDB = _context40.t1;
                _commitdb_indexes = fromObjectDB._commitdb_indexes;
                _versiondb_indexes = fromObjectDB._versiondb_indexes;
                fromSnapshotLocation = fromObjectDB.snapshotLocation;
                versionChangeListener = void 0;
                commitChangeListener = void 0;


                this.method = method;

                commitNameTypeFilter = _commitdb_indexes.find(function (ea) {
                  return ea.name === 'nameTypeFilter';
                }), versionNameTypeFilter = _versiondb_indexes.find(function (ea) {
                  return ea.name === 'nameTypeFilter';
                });


                console.log("adding commitNameTypeFilter");
                _context40.next = 37;
                return remoteCommitDB.addDesignDoc(commitNameTypeFilter);

              case 37:

                console.log("adding versionNameTypeFilter");
                _context40.next = 40;
                return remoteVersionDB.addDesignDoc(versionNameTypeFilter);

              case 40:
                opts = {
                  live: live, retry: retry
                  // conflicts: true,
                }, commitOpts = _extends({}, opts), versionOpts = _extends({}, opts);


                if (replicationFilter) {
                  // opts.filter = 'nameTypeFilter/nameTypeFilter';
                  commitOpts.filter = eval("(" + commitNameTypeFilter.filterFn + ")");
                  commitOpts.query_params = replicationFilter;
                  versionOpts.filter = eval("(" + versionNameTypeFilter.filterFn + ")");
                  versionOpts.query_params = replicationFilter;
                }

                commitReplication = commitDB[method](remoteCommitDB, commitOpts), versionReplication = versionDB[method](remoteVersionDB, versionOpts), snapshotReplication = {
                  copyCalls: 0,
                  copyCallsWaiting: 0,
                  nFilesToCopy: 0,
                  nFilesCopied: 0,
                  stopped: false,
                  isComplete: function isComplete() {
                    return this.stopped || this.copyCalls <= 0 && this.copyCallsWaiting <= 0;
                  }
                }, commitReplicationState = "not started", versionReplicationState = "not started";


                this.versionReplication = versionReplication;
                this.commitReplication = commitReplication;
                this.snapshotReplication = snapshotReplication;

                commitChangeListener = remoteCommitDB.pouchdb.changes({
                  include_docs: true, live: true, conflicts: true });
                versionChangeListener = remoteVersionDB.pouchdb.changes({
                  include_docs: true, live: true, conflicts: true });

                commitChangeListener.on("change", function (change) {
                  var id = change.id,
                      changes = change.changes,
                      conflicts = change.doc._conflicts;

                  debug && console.log("commit changes " + id + ":", changes, conflicts);
                  if (!conflicts) return;
                  console.log("commit conflict " + id + ":", changes, conflicts);
                  _this5.conflicts.push({ db: "commits", id: id, changes: changes, conflicts: conflicts });
                });

                versionChangeListener.on("change", function (change) {
                  var id = change.id,
                      changes = change.changes,
                      conflicts = change.doc._conflicts;

                  debug && console.log("version changes " + id + ":", changes, conflicts);
                  if (!conflicts) return;
                  console.log("version conflict " + id + ":", changes, conflicts);
                  _this5.conflicts.push({ db: "versions", id: id, changes: changes, conflicts: conflicts });
                });

                commitReplication.on("change", function () {
                  var _ref69 = asyncToGenerator(regeneratorRuntime.mark(function _callee38(change) {
                    var _change, direction, _change$change, ok, commits, errors, error, toCopy, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, commit, contentResource;

                    return regeneratorRuntime.wrap(function _callee38$(_context39) {
                      while (1) {
                        switch (_context39.prev = _context39.next) {
                          case 0:
                            if (method === "replicateTo") change = { direction: "push", change: change };else if (method === "replicateFrom") change = { direction: "pull", change: change };

                            _change = change, direction = _change.direction, _change$change = _change.change, ok = _change$change.ok, commits = _change$change.docs, errors = _change$change.errors;

                            console.log(_this5 + " " + (direction === "push" ? "send" : "received") + " " + commits.length + " commits");

                            _context39.prev = 3;
                            toCopy = [];
                            _iteratorNormalCompletion14 = true;
                            _didIteratorError14 = false;
                            _iteratorError14 = undefined;
                            _context39.prev = 8;
                            _iterator14 = commits[Symbol.iterator]();

                          case 10:
                            if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
                              _context39.next = 20;
                              break;
                            }

                            commit = _step14.value;

                            if (!commit._id.startsWith("_")) {
                              _context39.next = 14;
                              break;
                            }

                            return _context39.abrupt("continue", 17);

                          case 14:
                            _this5.changes.push({ direction: direction, kind: "commits", id: commit._id, type: commit.type, name: commit.name });
                            contentResource = snapshotPathFor(commit);

                            contentResource && toCopy.push(contentResource);

                          case 17:
                            _iteratorNormalCompletion14 = true;
                            _context39.next = 10;
                            break;

                          case 20:
                            _context39.next = 26;
                            break;

                          case 22:
                            _context39.prev = 22;
                            _context39.t0 = _context39["catch"](8);
                            _didIteratorError14 = true;
                            _iteratorError14 = _context39.t0;

                          case 26:
                            _context39.prev = 26;
                            _context39.prev = 27;

                            if (!_iteratorNormalCompletion14 && _iterator14.return) {
                              _iterator14.return();
                            }

                          case 29:
                            _context39.prev = 29;

                            if (!_didIteratorError14) {
                              _context39.next = 32;
                              break;
                            }

                            throw _iteratorError14;

                          case 32:
                            return _context39.finish(29);

                          case 33:
                            return _context39.finish(26);

                          case 34:

                            snapshotReplication.nFilesToCopy += toCopy.length;

                            if (!(snapshotReplication.copyCalls > 0)) {
                              _context39.next = 40;
                              break;
                            }

                            snapshotReplication.copyCallsWaiting++;
                            _context39.next = 39;
                            return lively_lang.promise.waitFor(function () {
                              return snapshotReplication.copyCalls <= 0;
                            });

                          case 39:
                            snapshotReplication.copyCallsWaiting--;

                          case 40:

                            snapshotReplication.copyCalls++;updateState(_this5);

                            console.log(_this5 + " copying " + toCopy.length + " snapshots...");

                            _context39.next = 45;
                            return lively_lang.promise.parallel(toCopy.map(function (path) {
                              return function () {
                                var fromResource = (direction === "push" ? fromSnapshotLocation : remoteLocation).join(path),
                                    toResource = (direction === "push" ? remoteLocation : fromSnapshotLocation).join(path);

                                if (snapshotReplication.stopped) {
                                  console.warn(_this5 + " Stopping copying resources b/c synchronization ended (" + snapshotReplication.copyCalls + ", " + fromResource.url + " => " + toResource.url + ")");
                                  return Promise.resolve();
                                }

                                return toResource.exists().then(function (toExists) {
                                  if (toExists) {
                                    debug && console.log("Skip copying to " + toResource.url + ", already exist");
                                    return Promise.resolve();
                                  }

                                  return fromResource.exists().then(function (fromExists) {
                                    if (!fromExists) {
                                      console.warn("Skip copying " + fromResource.url + ", does not exist");
                                      return Promise.resolve();
                                    }
                                    debug && console.log(_this5 + " Copying " + fromResource.url + " => " + toResource.url);
                                    return tryCopy(0).then(function (result) {
                                      snapshotReplication.nFilesCopied++;
                                      if (!snapshotReplication.stopped && snapshotReplication.nFilesCopied % 10 === 0) console.log(_this5 + " copied " + snapshotReplication.nFilesCopied + " of " + snapshotReplication.nFilesToCopy + " snapshots");
                                      return result;
                                    });
                                  });

                                  function tryCopy() {
                                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                                    return fromResource.copyTo(toResource).catch(function (err) {
                                      if (n >= 5) throw err;
                                      return tryCopy(n + 1);
                                    });
                                  }
                                });
                              };
                            }), 5);

                          case 45:
                            console.log(_this5 + " sending files done");
                            _context39.next = 53;
                            break;

                          case 48:
                            _context39.prev = 48;
                            _context39.t1 = _context39["catch"](3);

                            console.error("error in commitReplication onChange", _context39.t1);
                            error = _context39.t1;
                            throw _context39.t1;

                          case 53:
                            _context39.prev = 53;

                            snapshotReplication.copyCalls--;
                            updateState(_this5);
                            tryToResolve(_this5, error ? [error] : []);
                            return _context39.finish(53);

                          case 58:
                          case "end":
                            return _context39.stop();
                        }
                      }
                    }, _callee38, _this5, [[3, 48, 53, 58], [8, 22, 26, 34], [27,, 29, 33]]);
                  }));

                  return function (_x91) {
                    return _ref69.apply(this, arguments);
                  };
                }()).on('paused', function () {
                  commitReplicationState = "paused";
                  updateState(_this5);
                  debug && console.log(_this5 + " commit replication paused");
                }).on('active', function () {
                  commitReplicationState = "active";
                  updateState(_this5);
                  debug && console.log(_this5 + " commit replication active");
                }).on('error', function (err) {
                  commitReplicationState = "complete";updateState(_this5);
                  console.error(_this5 + " commit replication error", err);
                  tryToResolve(_this5, [err]);
                }).on('complete', function (info) {
                  commitReplicationState = "complete";updateState(_this5);
                  var errors = method === "sync" ? info.push.errors.concat(info.pull.errors) : info.errors;
                  tryToResolve(_this5, errors);
                });

                versionReplication.on("change", function (change) {
                  if (method === "replicateTo") change = { direction: "push", change: change };else if (method === "replicateFrom") change = { direction: "pull", change: change };
                  var _change2 = change,
                      direction = _change2.direction,
                      _change2$change = _change2.change,
                      ok = _change2$change.ok,
                      docs = _change2$change.docs,
                      errors = _change2$change.errors;


                  debug && console.log(_this5 + " " + (direction === "push" ? "send" : "received") + " " + docs.length + " histories");

                  docs.forEach(function (doc) {
                    if (doc._id.startsWith("_")) return;
                    _this5.changes.push({ direction: direction, kind: "versions", id: doc._id });
                  });

                  // versionChanges.push(change);
                }).on('paused', function () {
                  versionReplicationState = "paused";
                  updateState(_this5);
                  debug && console.log(_this5 + " version replication paused");
                }).on('active', function (x) {
                  versionReplicationState = "active";
                  updateState(_this5);
                  debug && console.log(_this5 + " version replication active", x);
                }).on('error', function (err) {
                  versionReplicationState = "complete";updateState(_this5);
                  console.error(_this5 + " version replication error", err);
                  tryToResolve(_this5, [err]);
                }).on('complete', function (info) {
                  versionReplicationState = "complete";updateState(_this5);
                  var errors = method === "sync" ? info.push.errors.concat(info.pull.errors) : info.errors;
                  tryToResolve(_this5, errors);
                });

                this.state = "running";

                return _context40.abrupt("return", this);

              case 54:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee39, this);
      }));

      function _startReplicationAndCopy() {
        return _ref68.apply(this, arguments);
      }

      return _startReplicationAndCopy;
    }()
  }, {
    key: "safeStop",
    value: function () {
      var _ref70 = asyncToGenerator(regeneratorRuntime.mark(function _callee40() {
        return regeneratorRuntime.wrap(function _callee40$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (!(this.state === "not started" || !this.isSynchonizing)) {
                  _context41.next = 2;
                  break;
                }

                return _context41.abrupt("return", this);

              case 2:
                _context41.next = 4;
                return this.whenPaused();

              case 4:
                return _context41.abrupt("return", this.stop());

              case 5:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee40, this);
      }));

      function safeStop() {
        return _ref70.apply(this, arguments);
      }

      return safeStop;
    }()
  }, {
    key: "stop",
    value: function stop() {
      if (this.state === "not started" || !this.isSynchonizing) return this;
      this.commitReplication.cancel();
      this.versionReplication.cancel();
      this.snapshotReplication.stopped = true;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      var method = this.method,
          state = this.state,
          name = this.fromObjectDB.name,
          dir = method === "sync" ? "<=>" : method === "replicateTo" ? "=>" : method === "replicateFrom" ? "<=" : "??";

      return "Synchronization(" + state + ": " + name + " " + dir + ")";
    }
  }, {
    key: "isSynchonizing",
    get: function get() {
      return this.isPaused || this.isRunning;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this.state === "complete";
    }
  }, {
    key: "isRunning",
    get: function get() {
      return this.state === "running";
    }
  }, {
    key: "isPaused",
    get: function get() {
      return this.state === "paused";
    }
  }, {
    key: "changesByTypeAndName",
    get: function get() {
      var changesByTypeAndName = { push: {}, pull: {} };
      this.changes.forEach(function (ea) {
        var dir = ea.direction,
            id = ea.id,
            kind = ea.kind;

        if (id[0] === "_") return;
        var byTypeAndName = void 0;
        if (kind === "versions") {
          byTypeAndName = changesByTypeAndName[dir][id] || (changesByTypeAndName[dir][id] = []);
        } else if (kind === "commits") {
          var typeAndName = ea.type + "/" + ea.name;
          byTypeAndName = changesByTypeAndName[dir][typeAndName] || (changesByTypeAndName[dir][typeAndName] = []);
        }
        byTypeAndName.push(ea);
      });
      return changesByTypeAndName;
    }
  }]);
  return Synchronization;
}();

function checkArg(name, value, spec) {
  if (typeof value === "undefined" && typeof spec === "string" && !spec.includes("undefined")) throw new Error("parameter " + name + " is undefined");
  if (value === null && typeof spec === "string" && !spec.includes("null")) throw new Error("parameter " + name + " is null");

  if (typeof spec === "string") {
    var actualType = typeof value === "undefined" ? "undefined" : _typeof(value),
        actualClass = value ? value.constructor.name : "",
        types = spec.split("|"),
        matches = types.some(function (t) {
      return actualType === t || actualClass === t;
    });
    if (!matches) throw new Error("parameter \"" + name + "\" expected to be of type " + spec + " but is " + (actualClass || actualType));
  }

  if (typeof spec === "function") {
    var result = spec(value);
    if (result && result.error) throw new Error("check of parameter \"" + name + "\" failed: " + result.error);
  }
}

function checkArgs(args, specs, testFn) {
  for (var key in specs) {
    checkArg(key, args[key], specs[key]);
  }if (typeof testFn === "function") {
    var result = testFn(args);
    if (result && result.error) throw new Error(result.error);
  }
  return args;
}

var ObjectDBInterface = {
  describe: function describe(method) {
    var _this6 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee41() {
      var src, parsed, entities, methodNameAndParametersAndDescription;
      return regeneratorRuntime.wrap(function _callee41$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              methodNameAndParametersAndDescription = function methodNameAndParametersAndDescription(methodSpecs, name) {
                var methodSpec = methodSpecs.find(function (ea) {
                  return ea.name === name;
                }),
                    body = methodSpec.node.value.body,
                    stmts = body.body || [],
                    comment = (body.comments || []).find(function (ea) {
                  return ea.end < stmts[0].start;
                }),
                    doc = { name: name, parameters: [], sideEffect: false, returns: null, description: "" };

                if (comment && comment.text.trim()) {
                  var text = lively.lang.string.changeIndent(comment.text, " ", 0),
                      commentLines = text.split("\n");
                  var _iteratorNormalCompletion15 = true;
                  var _didIteratorError15 = false;
                  var _iteratorError15 = undefined;

                  try {
                    for (var _iterator15 = commentLines[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                      var line = _step15.value;

                      if (line.startsWith("ignore-in-doc")) {
                        doc.description = "";break;
                      }
                      if (line.startsWith("side effect:")) {
                        doc.sideEffect = JSON.parse(line.split(":")[1]);
                        continue;
                      }
                      if (line.startsWith("returns:")) {
                        doc.returns = line.split(":")[1].trim();
                        continue;
                      }
                      doc.description += line + "\n";
                    }
                  } catch (err) {
                    _didIteratorError15 = true;
                    _iteratorError15 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion15 && _iterator15.return) {
                        _iterator15.return();
                      }
                    } finally {
                      if (_didIteratorError15) {
                        throw _iteratorError15;
                      }
                    }
                  }
                }

                var _iteratorNormalCompletion16 = true;
                var _didIteratorError16 = false;
                var _iteratorError16 = undefined;

                try {
                  for (var _iterator16 = stmts[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    var stmt = _step16.value;

                    if ("checkArgs" !== lively.lang.Path("declarations.0.init.callee.name").get(stmt)) continue;
                    var props = lively.lang.Path("declarations.0.id.properties").get(stmt);
                    if (props) {
                      doc.parameters = props.map(function (ea) {
                        return ea.key.name;
                      });
                    }
                  }
                } catch (err) {
                  _didIteratorError16 = true;
                  _iteratorError16 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion16 && _iterator16.return) {
                      _iterator16.return();
                    }
                  } finally {
                    if (_didIteratorError16) {
                      throw _iteratorError16;
                    }
                  }
                }

                return doc;
              };

              _context42.prev = 1;

              if (_this6._methodSpecs) {
                _context42.next = 9;
                break;
              }

              _context42.next = 5;
              return lively.modules.module("lively.storage/objectdb.js").source();

            case 5:
              src = _context42.sent;
              parsed = lively.ast.parse(src, { withComments: true });
              entities = lively.ast.categorizer.findDecls(parsed);

              _this6._methodSpecs = entities.filter(function (ea) {
                return ea.parent && ea.parent.name === "ObjectDBInterface";
              });

            case 9:
              return _context42.abrupt("return", method ? methodNameAndParametersAndDescription(_this6._methodSpecs, method) : _this6._methodSpecs.map(function (ea) {
                return methodNameAndParametersAndDescription(_this6._methodSpecs, ea.name);
              }).filter(Boolean));

            case 12:
              _context42.prev = 12;
              _context42.t0 = _context42["catch"](1);
              return _context42.abrupt("return", "Error in describe " + _context42.t0);

            case 15:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee41, _this6, [[1, 12]]);
    }))();
  },
  ensureDB: function ensureDB(args) {
    var _this7 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee42() {
      var _checkArgs, dbName, snapshotLocation, db;

      return regeneratorRuntime.wrap(function _callee42$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              _checkArgs = checkArgs(args, {
                db: "string",
                snapshotLocation: "string|Resource"
              });
              dbName = _checkArgs.db;
              snapshotLocation = _checkArgs.snapshotLocation;
              _context43.next = 5;
              return ObjectDB.find(dbName);

            case 5:
              db = _context43.sent;

              if (!db) {
                _context43.next = 8;
                break;
              }

              return _context43.abrupt("return", false);

            case 8:
              ObjectDB.named(dbName, { snapshotLocation: snapshotLocation });
              return _context43.abrupt("return", true);

            case 10:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee42, _this7);
    }))();
  },
  destroyDB: function destroyDB(args) {
    var _this8 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee43() {
      var _checkArgs2, dbName, db;

      return regeneratorRuntime.wrap(function _callee43$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              _checkArgs2 = checkArgs(args, { db: "string" });
              dbName = _checkArgs2.db;
              _context44.next = 4;
              return ObjectDB.find(dbName);

            case 4:
              db = _context44.sent;

              if (db) {
                _context44.next = 7;
                break;
              }

              return _context44.abrupt("return", false);

            case 7:
              _context44.next = 9;
              return db.destroy();

            case 9:
              return _context44.abrupt("return", true);

            case 10:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee43, _this8);
    }))();
  },
  fetchCommits: function fetchCommits(args) {
    var _this9 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee44() {
      var _checkArgs3, dbName, ref, type, typesAndNames, knownCommitIds, includeDeleted, filterFn, db, commitDB, versionDB, versionQueryOpts, refsByTypeAndName, keys, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _ref72, _type2, name, _ref73, versions, commitIds, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, version, _id, refs, commitId, commits, fn, filteredCommits;

      return regeneratorRuntime.wrap(function _callee44$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              _checkArgs3 = checkArgs(args, {
                db: "string",
                ref: "string|undefined",
                type: "string|undefined",
                typesAndNames: "Array|undefined",
                knownCommitIds: "object|undefined",
                includeDeleted: "boolean|undefined",
                filterFn: "string|undefined"
              });
              dbName = _checkArgs3.db;
              ref = _checkArgs3.ref;
              type = _checkArgs3.type;
              typesAndNames = _checkArgs3.typesAndNames;
              knownCommitIds = _checkArgs3.knownCommitIds;
              includeDeleted = _checkArgs3.includeDeleted;
              filterFn = _checkArgs3.filterFn;
              _context45.next = 10;
              return ObjectDB.find(dbName);

            case 10:
              db = _context45.sent;

              if (!ref) ref = "HEAD";

              if (db) {
                _context45.next = 14;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 14:
              _context45.t0 = db.__commitDB;

              if (_context45.t0) {
                _context45.next = 19;
                break;
              }

              _context45.next = 18;
              return db._commitDB();

            case 18:
              _context45.t0 = _context45.sent;

            case 19:
              commitDB = _context45.t0;
              _context45.t1 = db.__versionDB;

              if (_context45.t1) {
                _context45.next = 25;
                break;
              }

              _context45.next = 24;
              return db._versionDB();

            case 24:
              _context45.t1 = _context45.sent;

            case 25:
              versionDB = _context45.t1;
              versionQueryOpts = {}, refsByTypeAndName = {};

              if (!typesAndNames) {
                _context45.next = 50;
                break;
              }

              keys = versionQueryOpts.keys = [];
              _iteratorNormalCompletion17 = true;
              _didIteratorError17 = false;
              _iteratorError17 = undefined;
              _context45.prev = 32;

              for (_iterator17 = typesAndNames[Symbol.iterator](); !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                _ref72 = _step17.value;
                _type2 = _ref72.type, name = _ref72.name, _ref73 = _ref72.ref;

                keys.push(_type2 + "/" + name);
                if (_ref73) refsByTypeAndName[_type2 + "/" + name] = _ref73;
              }

              _context45.next = 40;
              break;

            case 36:
              _context45.prev = 36;
              _context45.t2 = _context45["catch"](32);
              _didIteratorError17 = true;
              _iteratorError17 = _context45.t2;

            case 40:
              _context45.prev = 40;
              _context45.prev = 41;

              if (!_iteratorNormalCompletion17 && _iterator17.return) {
                _iterator17.return();
              }

            case 43:
              _context45.prev = 43;

              if (!_didIteratorError17) {
                _context45.next = 46;
                break;
              }

              throw _iteratorError17;

            case 46:
              return _context45.finish(43);

            case 47:
              return _context45.finish(40);

            case 48:
              _context45.next = 51;
              break;

            case 50:
              if (type) {
                versionQueryOpts.startkey = type + "/\0\"";
                versionQueryOpts.endkey = type + "/\uFFFF\"";
              }

            case 51:
              _context45.next = 53;
              return versionDB.getAll(versionQueryOpts);

            case 53:
              versions = _context45.sent;
              commitIds = [];
              _iteratorNormalCompletion18 = true;
              _didIteratorError18 = false;
              _iteratorError18 = undefined;
              _context45.prev = 58;
              _iterator18 = versions[Symbol.iterator]();

            case 60:
              if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
                _context45.next = 73;
                break;
              }

              version = _step18.value;

              if (!(version.deleted || version._deleted)) {
                _context45.next = 64;
                break;
              }

              return _context45.abrupt("continue", 70);

            case 64:
              _id = version._id, refs = version.refs;

              if (!_id.startsWith("_")) {
                _context45.next = 67;
                break;
              }

              return _context45.abrupt("continue", 70);

            case 67:
              ref = refsByTypeAndName[_id] || ref;
              commitId = refs[ref];

              if (commitId && !knownCommitIds || !knownCommitIds.hasOwnProperty(commitId)) commitIds.push(commitId);

            case 70:
              _iteratorNormalCompletion18 = true;
              _context45.next = 60;
              break;

            case 73:
              _context45.next = 79;
              break;

            case 75:
              _context45.prev = 75;
              _context45.t3 = _context45["catch"](58);
              _didIteratorError18 = true;
              _iteratorError18 = _context45.t3;

            case 79:
              _context45.prev = 79;
              _context45.prev = 80;

              if (!_iteratorNormalCompletion18 && _iterator18.return) {
                _iterator18.return();
              }

            case 82:
              _context45.prev = 82;

              if (!_didIteratorError18) {
                _context45.next = 85;
                break;
              }

              throw _iteratorError18;

            case 85:
              return _context45.finish(82);

            case 86:
              return _context45.finish(79);

            case 87:
              _context45.next = 89;
              return db.getCommitsWithIds(commitIds);

            case 89:
              commits = _context45.sent;

              if (!includeDeleted) commits = commits.filter(function (ea) {
                return !ea.deleted;
              });

              if (!filterFn) {
                _context45.next = 107;
                break;
              }

              _context45.prev = 92;
              fn = eval("(" + filterFn + ")");

              if (!(typeof fn !== "function")) {
                _context45.next = 96;
                break;
              }

              throw new Error(filterFn + " does not eval to a function!");

            case 96:
              filteredCommits = commits.filter(fn);

              if (Array.isArray(filteredCommits)) {
                _context45.next = 101;
                break;
              }

              throw new Error(filterFn + " does not return an array!");

            case 101:
              commits = filteredCommits;

            case 102:
              _context45.next = 107;
              break;

            case 104:
              _context45.prev = 104;
              _context45.t4 = _context45["catch"](92);

              console.error("fetchCommits filterFn failed:", _context45.t4);

            case 107:
              return _context45.abrupt("return", commits);

            case 108:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee44, _this9, [[32, 36, 40, 48], [41,, 43, 47], [58, 75, 79, 87], [80,, 82, 86], [92, 104]]);
    }))();
  },
  fetchVersionGraph: function fetchVersionGraph(args) {
    var _this10 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee45() {
      var _checkArgs4, dbName, type, name, db, _ref74, refs, history;

      return regeneratorRuntime.wrap(function _callee45$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              _checkArgs4 = checkArgs(args, {
                db: "string",
                type: "string",
                name: "string"
              });
              dbName = _checkArgs4.db;
              type = _checkArgs4.type;
              name = _checkArgs4.name;
              _context46.next = 6;
              return ObjectDB.find(dbName);

            case 6:
              db = _context46.sent;

              if (db) {
                _context46.next = 9;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 9:
              _context46.next = 11;
              return db.versionGraph(type, name);

            case 11:
              _ref74 = _context46.sent;
              refs = _ref74.refs;
              history = _ref74.history;
              return _context46.abrupt("return", { refs: refs, history: history });

            case 15:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee45, _this10);
    }))();
  },
  exists: function exists(args) {
    var _this11 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee46() {
      var _checkArgs5, dbName, type, name, ref, db, hist, commit;

      return regeneratorRuntime.wrap(function _callee46$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              _checkArgs5 = checkArgs(args, {
                db: "string",
                type: "string",
                name: "string",
                ref: "string|undefined"
              });
              dbName = _checkArgs5.db;
              type = _checkArgs5.type;
              name = _checkArgs5.name;
              ref = _checkArgs5.ref;
              _context47.next = 7;
              return ObjectDB.find(dbName);

            case 7:
              db = _context47.sent;
              _context47.next = 10;
              return db.versionGraph(type, name);

            case 10:
              hist = _context47.sent;

              if (hist) {
                _context47.next = 13;
                break;
              }

              return _context47.abrupt("return", { exists: false, commitId: undefined });

            case 13:
              ref = ref || "HEAD";
              commit = hist.refs[ref];

              if (commit) {
                _context47.next = 17;
                break;
              }

              return _context47.abrupt("return", { exists: false, commitId: undefined });

            case 17:
              return _context47.abrupt("return", { exists: true, commitId: commit });

            case 18:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee46, _this11);
    }))();
  },
  fetchLog: function fetchLog(args) {
    var _this12 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee47() {
      var _checkArgs6, dbName, type, name, ref, commit, limit, includeCommits, knownCommitIds, db, defaultRef, startCommitId, realCommit, versionGraph, refs, history, currentCommit, result, ancestors, _ancestors;

      return regeneratorRuntime.wrap(function _callee47$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              _checkArgs6 = checkArgs(args, {
                db: "string",
                type: "string|undefined",
                name: "string|undefined",
                ref: "string|undefined",
                commit: "string|undefined",
                limit: "number|undefined",
                includeCommits: "boolean|undefined",
                knownCommitIds: "object|undefined"
              }, function (args) {
                return args.type && args.name || args.commit ? null : { error: "Eiter .type + .name or .commit needed!" };
              });
              dbName = _checkArgs6.db;
              type = _checkArgs6.type;
              name = _checkArgs6.name;
              ref = _checkArgs6.ref;
              commit = _checkArgs6.commit;
              limit = _checkArgs6.limit;
              includeCommits = _checkArgs6.includeCommits;
              knownCommitIds = _checkArgs6.knownCommitIds;
              _context48.next = 11;
              return ObjectDB.find(dbName);

            case 11:
              db = _context48.sent;
              defaultRef = ref || "HEAD";

              if (db) {
                _context48.next = 15;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 15:

              if (!limit) limit = Infinity;
              if (!commit && !ref) ref = defaultRef;

              startCommitId = void 0;

              if (!commit) {
                _context48.next = 28;
                break;
              }

              startCommitId = commit;

              if (!(!type || !name)) {
                _context48.next = 28;
                break;
              }

              _context48.next = 23;
              return db.getCommit(commit);

            case 23:
              realCommit = _context48.sent;

              if (realCommit) {
                _context48.next = 26;
                break;
              }

              throw new Error("fetchLog: specified commit " + commit + " but no commit with this id is in the database!");

            case 26:
              type = realCommit.type;
              name = realCommit.name;

            case 28:
              _context48.next = 30;
              return db.versionGraph(type, name);

            case 30:
              versionGraph = _context48.sent;

              if (versionGraph) {
                _context48.next = 33;
                break;
              }

              throw new Error("Unknown object " + type + "/" + name);

            case 33:
              refs = versionGraph.refs, history = versionGraph.history;

              if (!startCommitId) startCommitId = refs[ref];

              currentCommit = startCommitId, result = [];

            case 36:
              if (!(result.length < limit && !result.includes(currentCommit))) {
                _context48.next = 45;
                break;
              }

              result.push(currentCommit);
              ancestors = history[currentCommit];

              if (!(!ancestors || !ancestors.length)) {
                _context48.next = 41;
                break;
              }

              return _context48.abrupt("break", 45);

            case 41:
              _ancestors = slicedToArray(ancestors, 1);
              currentCommit = _ancestors[0];
              _context48.next = 36;
              break;

            case 45:
              if (!includeCommits) {
                _context48.next = 50;
                break;
              }

              if (knownCommitIds) result = result.filter(function (id) {
                return !knownCommitIds.hasOwnProperty(id);
              });
              _context48.next = 49;
              return db.getCommitsWithIds(result);

            case 49:
              result = _context48.sent;

            case 50:
              return _context48.abrupt("return", result);

            case 51:
            case "end":
              return _context48.stop();
          }
        }
      }, _callee47, _this12);
    }))();
  },
  fetchSnapshot: function fetchSnapshot(args) {
    var _this13 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee48() {
      var _checkArgs7, dbName, type, name, ref, commitId, db, defaultRef, versionGraph, commit;

      return regeneratorRuntime.wrap(function _callee48$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              _checkArgs7 = checkArgs(args, {
                db: "string",
                type: "string|undefined",
                name: "string|undefined",
                ref: "string|undefined",
                commit: "string|undefined"
              }, function (args) {
                return args.type && args.name || args.commit ? null : { error: "Eiter .type + .name or .commit needed!" };
              });
              dbName = _checkArgs7.db;
              type = _checkArgs7.type;
              name = _checkArgs7.name;
              ref = _checkArgs7.ref;
              commitId = _checkArgs7.commit;
              _context49.next = 8;
              return ObjectDB.find(dbName);

            case 8:
              db = _context49.sent;
              defaultRef = "HEAD";


              ref = ref || defaultRef;

              if (db) {
                _context49.next = 13;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 13:
              if (commitId) {
                _context49.next = 22;
                break;
              }

              _context49.next = 16;
              return db.versionGraph(type, name);

            case 16:
              versionGraph = _context49.sent;

              if (versionGraph) {
                _context49.next = 19;
                break;
              }

              throw new Error("Unknown object " + type + "/" + name);

            case 19:
              commitId = versionGraph.refs[ref];

              if (commitId) {
                _context49.next = 22;
                break;
              }

              throw new Error("Cannot find commit for ref " + ref + " of " + type + "/" + name);

            case 22:
              _context49.next = 24;
              return db.getCommit(commitId);

            case 24:
              commit = _context49.sent;

              if (commit) {
                _context49.next = 27;
                break;
              }

              throw new Error("Cannot find commit " + commitId);

            case 27:
              return _context49.abrupt("return", db.loadSnapshot(undefined, undefined, commit));

            case 28:
            case "end":
              return _context49.stop();
          }
        }
      }, _callee48, _this13);
    }))();
  },
  commit: function commit(args) {
    var _this14 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee49() {
      var _checkArgs8, dbName, type, name, ref, expectedParentCommit, commitSpec, snapshot, preview, db;

      return regeneratorRuntime.wrap(function _callee49$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              _checkArgs8 = checkArgs(args, {
                db: "string",
                type: "string", name: "string",
                ref: "string|undefined",
                snapshot: "object|string|undefined",
                preview: "string|undefined",
                commitSpec: "object",
                expectedParentCommit: "string|undefined"
              });
              dbName = _checkArgs8.db;
              type = _checkArgs8.type;
              name = _checkArgs8.name;
              ref = _checkArgs8.ref;
              expectedParentCommit = _checkArgs8.expectedParentCommit;
              commitSpec = _checkArgs8.commitSpec;
              snapshot = _checkArgs8.snapshot;
              preview = _checkArgs8.preview;
              _context50.next = 11;
              return ObjectDB.find(dbName);

            case 11:
              db = _context50.sent;


              if (!ref) ref = "HEAD";
              return _context50.abrupt("return", db.commit(type, name, snapshot, commitSpec, preview, ref, expectedParentCommit));

            case 14:
            case "end":
              return _context50.stop();
          }
        }
      }, _callee49, _this14);
    }))();
  },
  exportToSpecs: function exportToSpecs(args) {
    var _this15 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee50() {
      var _checkArgs9, dbName, nameAndTypes, db;

      return regeneratorRuntime.wrap(function _callee50$(_context51) {
        while (1) {
          switch (_context51.prev = _context51.next) {
            case 0:
              _checkArgs9 = checkArgs(args, {
                db: "string",
                nameAndTypes: "Array|undefined",
                includeDeleted: "boolean|undefined"
              });
              dbName = _checkArgs9.db;
              nameAndTypes = _checkArgs9.nameAndTypes;
              _context51.next = 5;
              return ObjectDB.find(dbName);

            case 5:
              db = _context51.sent;

              if (db) {
                _context51.next = 8;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 8:
              return _context51.abrupt("return", db.exportToSpecs(nameAndTypes));

            case 9:
            case "end":
              return _context51.stop();
          }
        }
      }, _callee50, _this15);
    }))();
  },
  exportToDir: function exportToDir(args) {
    var _this16 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee51() {
      var _checkArgs10, dbName, url, nameAndTypes, copyResources, includeDeleted, db, exportDir;

      return regeneratorRuntime.wrap(function _callee51$(_context52) {
        while (1) {
          switch (_context52.prev = _context52.next) {
            case 0:
              _checkArgs10 = checkArgs(args, {
                db: "string",
                url: "string",
                nameAndTypes: "Array|undefined",
                copyResources: "boolean|undefined",
                includeDeleted: "boolean|undefined"
              });
              dbName = _checkArgs10.db;
              url = _checkArgs10.url;
              nameAndTypes = _checkArgs10.nameAndTypes;
              copyResources = _checkArgs10.copyResources;
              includeDeleted = _checkArgs10.includeDeleted;
              _context52.next = 8;
              return ObjectDB.find(dbName);

            case 8:
              db = _context52.sent;
              exportDir = void 0;

              if (db) {
                _context52.next = 12;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 12:
              try {
                exportDir = lively_resources.resource(url);
              } catch (err) {
                exportDir = lively_resources.resource(System.baseURL).join(url);
              }
              return _context52.abrupt("return", db.exportToDir(exportDir, nameAndTypes, copyResources, includeDeleted));

            case 14:
            case "end":
              return _context52.stop();
          }
        }
      }, _callee51, _this16);
    }))();
  },
  importFromDir: function importFromDir(args) {
    var _this17 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee52() {
      var _checkArgs11, dbName, url, overwrite, copyResources, db, importDir;

      return regeneratorRuntime.wrap(function _callee52$(_context53) {
        while (1) {
          switch (_context53.prev = _context53.next) {
            case 0:
              _checkArgs11 = checkArgs(args, {
                db: "string", url: "string",
                overwrite: "boolean|undefined",
                copyResources: "boolean|undefined"
              });
              dbName = _checkArgs11.db;
              url = _checkArgs11.url;
              overwrite = _checkArgs11.overwrite;
              copyResources = _checkArgs11.copyResources;
              _context53.next = 7;
              return ObjectDB.find(dbName);

            case 7:
              db = _context53.sent;
              importDir = void 0;

              if (db) {
                _context53.next = 11;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 11:
              try {
                importDir = lively_resources.resource(url);
              } catch (err) {
                importDir = lively_resources.resource(System.baseURL).join(url);
              }
              return _context53.abrupt("return", db.importFromDir(importDir, overwrite, copyResources));

            case 13:
            case "end":
              return _context53.stop();
          }
        }
      }, _callee52, _this17);
    }))();
  },
  importFromSpecs: function importFromSpecs(args) {
    var _this18 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee53() {
      var _checkArgs12, dbName, specs, overwrite, copyResources, db;

      return regeneratorRuntime.wrap(function _callee53$(_context54) {
        while (1) {
          switch (_context54.prev = _context54.next) {
            case 0:
              _checkArgs12 = checkArgs(args, {
                db: "string",
                specs: "object",
                overwrite: "boolean|undefined",
                copyResources: "boolean|undefined"
              });
              dbName = _checkArgs12.db;
              specs = _checkArgs12.specs;
              overwrite = _checkArgs12.overwrite;
              copyResources = _checkArgs12.copyResources;
              _context54.next = 7;
              return ObjectDB.find(dbName);

            case 7:
              db = _context54.sent;

              if (db) {
                _context54.next = 10;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 10:
              return _context54.abrupt("return", db.importFromSpecs(specs, overwrite, copyResources));

            case 11:
            case "end":
              return _context54.stop();
          }
        }
      }, _callee53, _this18);
    }))();
  },
  importFromResource: function importFromResource(args) {
    var _this19 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee54() {
      var _checkArgs13, dbName, type, name, url, commitSpec, purgeHistory, db, res;

      return regeneratorRuntime.wrap(function _callee54$(_context55) {
        while (1) {
          switch (_context55.prev = _context55.next) {
            case 0:
              _checkArgs13 = checkArgs(args, {
                db: "string",
                type: "string", name: "string",
                url: "string",
                commitSpec: "object",
                purgeHistory: "boolean|undefined"
              });
              dbName = _checkArgs13.db;
              type = _checkArgs13.type;
              name = _checkArgs13.name;
              url = _checkArgs13.url;
              commitSpec = _checkArgs13.commitSpec;
              purgeHistory = _checkArgs13.purgeHistory;
              _context55.next = 9;
              return ObjectDB.find(dbName);

            case 9:
              db = _context55.sent;
              res = void 0;

              if (db) {
                _context55.next = 13;
                break;
              }

              throw new Error("db " + dbName + " does not exist");

            case 13:
              try {
                res = lively_resources.resource(url);
              } catch (err) {
                res = lively_resources.resource(System.baseURL).join(url);
              }
              return _context55.abrupt("return", db.importFromResource(type, name, res, commitSpec, purgeHistory));

            case 15:
            case "end":
              return _context55.stop();
          }
        }
      }, _callee54, _this19);
    }))();
  },
  delete: function _delete(args) {
    var _this20 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee55() {
      var _checkArgs14, dbName, type, name, dryRun, db;

      return regeneratorRuntime.wrap(function _callee55$(_context56) {
        while (1) {
          switch (_context56.prev = _context56.next) {
            case 0:
              _checkArgs14 = checkArgs(args, {
                db: "string", type: "string", name: "string",
                dryRun: "boolean|undefined"
              });
              dbName = _checkArgs14.db;
              type = _checkArgs14.type;
              name = _checkArgs14.name;
              dryRun = _checkArgs14.dryRun;
              _context56.next = 7;
              return ObjectDB.find(dbName);

            case 7:
              db = _context56.sent;
              return _context56.abrupt("return", db.delete(type, name, typeof dryRun === "undefined" || dryRun));

            case 9:
            case "end":
              return _context56.stop();
          }
        }
      }, _callee55, _this20);
    }))();
  },
  deleteCommit: function deleteCommit(args) {
    var _this21 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee56() {
      var _checkArgs15, dbName, commit, dryRun, db;

      return regeneratorRuntime.wrap(function _callee56$(_context57) {
        while (1) {
          switch (_context57.prev = _context57.next) {
            case 0:
              _checkArgs15 = checkArgs(args, {
                db: "string", commit: "string",
                dryRun: "boolean|undefined"
              });
              dbName = _checkArgs15.db;
              commit = _checkArgs15.commit;
              dryRun = _checkArgs15.dryRun;
              _context57.next = 6;
              return ObjectDB.find(dbName);

            case 6:
              db = _context57.sent;
              return _context57.abrupt("return", db.deleteCommit(commit, typeof dryRun === "undefined" || dryRun));

            case 8:
            case "end":
              return _context57.stop();
          }
        }
      }, _callee56, _this21);
    }))();
  },
  fetchConflicts: function fetchConflicts(args) {
    var _this22 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee57() {
      var _checkArgs16, dbName, includeDocs, only, db;

      return regeneratorRuntime.wrap(function _callee57$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              _checkArgs16 = checkArgs(args, {
                db: "string",
                includeDocs: "boolean|undefined",
                only: "object|undefined"
              });
              dbName = _checkArgs16.db;
              includeDocs = _checkArgs16.includeDocs;
              only = _checkArgs16.only;
              _context58.next = 6;
              return ObjectDB.find(dbName);

            case 6:
              db = _context58.sent;
              return _context58.abrupt("return", db.getConflicts(includeDocs, only));

            case 8:
            case "end":
              return _context58.stop();
          }
        }
      }, _callee57, _this22);
    }))();
  },
  resolveConflict: function resolveConflict(args) {
    var _this23 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee58() {
      var _checkArgs17, dbName, resolved, del, kind, id, db;

      return regeneratorRuntime.wrap(function _callee58$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              _checkArgs17 = checkArgs(args, {
                db: "string",
                id: "string",
                kind: "string",
                delete: "Array",
                resolved: "object"
              });
              dbName = _checkArgs17.db;
              resolved = _checkArgs17.resolved;
              del = _checkArgs17.delete;
              kind = _checkArgs17.kind;
              id = _checkArgs17.id;
              _context59.next = 8;
              return ObjectDB.find(dbName);

            case 8:
              db = _context59.sent;
              return _context59.abrupt("return", db.resolveConflict({ resolved: resolved, delete: del, kind: kind, id: id }));

            case 10:
            case "end":
              return _context59.stop();
          }
        }
      }, _callee58, _this23);
    }))();
  },
  fetchDiff: function fetchDiff(args) {
    var _this24 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee59() {
      var _checkArgs18, dbName, otherDB, db;

      return regeneratorRuntime.wrap(function _callee59$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              _checkArgs18 = checkArgs(args, {
                db: "string",
                otherDB: "string"
              });
              dbName = _checkArgs18.db;
              otherDB = _checkArgs18.otherDB;
              _context60.next = 5;
              return ObjectDB.find(dbName);

            case 5:
              db = _context60.sent;
              return _context60.abrupt("return", db.getDiff(otherDB));

            case 7:
            case "end":
              return _context60.stop();
          }
        }
      }, _callee59, _this24);
    }))();
  },
  synchronize: function synchronize(args) {
    var _this25 = this;

    return asyncToGenerator(regeneratorRuntime.mark(function _callee60() {
      var _checkArgs19, dbName, otherDB, otherDBSnapshotLocation, onlyTypesAndNames, method, db, db1, db2, remoteCommitDB, remoteVersionDB, toSnapshotLocation, opts, rep;

      return regeneratorRuntime.wrap(function _callee60$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              _checkArgs19 = checkArgs(args, {
                db: "string",
                otherDB: "string",
                otherDBSnapshotLocation: "string|undefined",
                onlyTypesAndNames: "object|undefined",
                method: "string|undefined"
              });
              dbName = _checkArgs19.db;
              otherDB = _checkArgs19.otherDB;
              otherDBSnapshotLocation = _checkArgs19.otherDBSnapshotLocation;
              onlyTypesAndNames = _checkArgs19.onlyTypesAndNames;
              method = _checkArgs19.method;
              _context61.next = 8;
              return ObjectDB.find(dbName);

            case 8:
              db = _context61.sent;


              if (!otherDBSnapshotLocation) otherDBSnapshotLocation = otherDB.replace(/\/$/, "") + "/" + "snapshots";
              if (!method) method = "replicateTo";

              _context61.next = 13;
              return ObjectDB.find(dbName);

            case 13:
              db1 = _context61.sent;
              _context61.next = 16;
              return ObjectDB.named(otherDB, { snapshotLocation: otherDBSnapshotLocation });

            case 16:
              db2 = _context61.sent;
              _context61.next = 19;
              return db2._commitDB();

            case 19:
              remoteCommitDB = _context61.sent;
              _context61.next = 22;
              return db2._versionDB();

            case 22:
              remoteVersionDB = _context61.sent;
              toSnapshotLocation = db2.snapshotLocation;
              opts = {
                replicationFilter: onlyTypesAndNames ? { onlyTypesAndNames: onlyTypesAndNames } : undefined,
                retry: true, live: true
              };
              rep = db1[method](remoteCommitDB, remoteVersionDB, toSnapshotLocation, opts);
              _context61.next = 28;
              return rep.whenPaused();

            case 28:
              _context61.next = 30;
              return rep.safeStop();

            case 30:
              _context61.next = 32;
              return rep.waitForIt();

            case 32:
              return _context61.abrupt("return", lively_lang.obj.select(rep, ["state", "method", "conflicts", "errors", "changesByTypeAndName"]));

            case 33:
            case "end":
              return _context61.stop();
          }
        }
      }, _callee60, _this25);
    }))();
  }
};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// let httpDB = new ObjectDBHTTPInterface()
// await httpDB.exportToSpecs({db: "test-object-db"})

var ObjectDBHTTPInterface = function () {
  function ObjectDBHTTPInterface() {
    var serverURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.location.origin + "/objectdb/";
    classCallCheck(this, ObjectDBHTTPInterface);

    this.serverURL = serverURL;
  }

  createClass(ObjectDBHTTPInterface, [{
    key: "_processResponse",
    value: function () {
      var _ref75 = asyncToGenerator(regeneratorRuntime.mark(function _callee61(res) {
        var contentType, answer, json;
        return regeneratorRuntime.wrap(function _callee61$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                contentType = res.headers.get("content-type");
                _context62.next = 3;
                return res.text();

              case 3:
                answer = _context62.sent;
                json = void 0;

                if (contentType === "application/json") {
                  try {
                    json = JSON.parse(answer);
                  } catch (err) {}
                }

                if (!(!res.ok || json && json.error)) {
                  _context62.next = 8;
                  break;
                }

                throw new Error(json && json.error || answer || res.statusText);

              case 8:
                return _context62.abrupt("return", json || answer);

              case 9:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee61, this);
      }));

      function _processResponse(_x94) {
        return _ref75.apply(this, arguments);
      }

      return _processResponse;
    }()
  }, {
    key: "_GET",
    value: function () {
      var _ref76 = asyncToGenerator(regeneratorRuntime.mark(function _callee62(action) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var query, url;
        return regeneratorRuntime.wrap(function _callee62$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                query = Object.keys(opts).map(function (key) {
                  var val = opts[key];
                  if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") val = JSON.stringify(val);
                  return key + "=" + encodeURIComponent(val);
                }).join("&"), url = this.serverURL + action + "?" + query;
                _context63.t0 = this;
                _context63.next = 4;
                return fetch(url);

              case 4:
                _context63.t1 = _context63.sent;
                return _context63.abrupt("return", _context63.t0._processResponse.call(_context63.t0, _context63.t1));

              case 6:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee62, this);
      }));

      function _GET(_x95) {
        return _ref76.apply(this, arguments);
      }

      return _GET;
    }()
  }, {
    key: "_POST",
    value: function () {
      var _ref77 = asyncToGenerator(regeneratorRuntime.mark(function _callee63(action) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var url;
        return regeneratorRuntime.wrap(function _callee63$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                url = this.serverURL + action;
                _context64.t0 = this;
                _context64.next = 4;
                return fetch(url, {
                  method: "POST", body: JSON.stringify(opts),
                  headers: { "content-type": "application/json" }
                });

              case 4:
                _context64.t1 = _context64.sent;
                return _context64.abrupt("return", _context64.t0._processResponse.call(_context64.t0, _context64.t1));

              case 6:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee63, this);
      }));

      function _POST(_x97) {
        return _ref77.apply(this, arguments);
      }

      return _POST;
    }()
  }, {
    key: "describe",
    value: function () {
      var _ref78 = asyncToGenerator(regeneratorRuntime.mark(function _callee64(args) {
        return regeneratorRuntime.wrap(function _callee64$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                return _context65.abrupt("return", this._GET("describe", args));

              case 1:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee64, this);
      }));

      function describe(_x99) {
        return _ref78.apply(this, arguments);
      }

      return describe;
    }()
  }, {
    key: "ensureDB",
    value: function () {
      var _ref79 = asyncToGenerator(regeneratorRuntime.mark(function _callee65(args) {
        return regeneratorRuntime.wrap(function _callee65$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                return _context66.abrupt("return", this._POST("ensureDB", args));

              case 1:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee65, this);
      }));

      function ensureDB(_x100) {
        return _ref79.apply(this, arguments);
      }

      return ensureDB;
    }()
  }, {
    key: "destroyDB",
    value: function () {
      var _ref80 = asyncToGenerator(regeneratorRuntime.mark(function _callee66(args) {
        return regeneratorRuntime.wrap(function _callee66$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                return _context67.abrupt("return", this._POST("destroyDB", args));

              case 1:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee66, this);
      }));

      function destroyDB(_x101) {
        return _ref80.apply(this, arguments);
      }

      return destroyDB;
    }()
  }, {
    key: "fetchCommits",
    value: function () {
      var _ref81 = asyncToGenerator(regeneratorRuntime.mark(function _callee67(args) {
        return regeneratorRuntime.wrap(function _callee67$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                return _context68.abrupt("return", this._GET("fetchCommits", args));

              case 1:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee67, this);
      }));

      function fetchCommits(_x102) {
        return _ref81.apply(this, arguments);
      }

      return fetchCommits;
    }()
  }, {
    key: "fetchVersionGraph",
    value: function () {
      var _ref82 = asyncToGenerator(regeneratorRuntime.mark(function _callee68(args) {
        return regeneratorRuntime.wrap(function _callee68$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                return _context69.abrupt("return", this._GET("fetchVersionGraph", args));

              case 1:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee68, this);
      }));

      function fetchVersionGraph(_x103) {
        return _ref82.apply(this, arguments);
      }

      return fetchVersionGraph;
    }()
  }, {
    key: "exists",
    value: function () {
      var _ref83 = asyncToGenerator(regeneratorRuntime.mark(function _callee69(args) {
        return regeneratorRuntime.wrap(function _callee69$(_context70) {
          while (1) {
            switch (_context70.prev = _context70.next) {
              case 0:
                return _context70.abrupt("return", this._GET("exists", args));

              case 1:
              case "end":
                return _context70.stop();
            }
          }
        }, _callee69, this);
      }));

      function exists(_x104) {
        return _ref83.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "fetchLog",
    value: function () {
      var _ref84 = asyncToGenerator(regeneratorRuntime.mark(function _callee70(args) {
        return regeneratorRuntime.wrap(function _callee70$(_context71) {
          while (1) {
            switch (_context71.prev = _context71.next) {
              case 0:
                return _context71.abrupt("return", this._GET("fetchLog", args));

              case 1:
              case "end":
                return _context71.stop();
            }
          }
        }, _callee70, this);
      }));

      function fetchLog(_x105) {
        return _ref84.apply(this, arguments);
      }

      return fetchLog;
    }()
  }, {
    key: "fetchSnapshot",
    value: function () {
      var _ref85 = asyncToGenerator(regeneratorRuntime.mark(function _callee71(args) {
        return regeneratorRuntime.wrap(function _callee71$(_context72) {
          while (1) {
            switch (_context72.prev = _context72.next) {
              case 0:
                return _context72.abrupt("return", this._GET("fetchSnapshot", args));

              case 1:
              case "end":
                return _context72.stop();
            }
          }
        }, _callee71, this);
      }));

      function fetchSnapshot(_x106) {
        return _ref85.apply(this, arguments);
      }

      return fetchSnapshot;
    }()
  }, {
    key: "commit",
    value: function () {
      var _ref86 = asyncToGenerator(regeneratorRuntime.mark(function _callee72(args) {
        return regeneratorRuntime.wrap(function _callee72$(_context73) {
          while (1) {
            switch (_context73.prev = _context73.next) {
              case 0:
                return _context73.abrupt("return", this._POST("commit", args));

              case 1:
              case "end":
                return _context73.stop();
            }
          }
        }, _callee72, this);
      }));

      function commit(_x107) {
        return _ref86.apply(this, arguments);
      }

      return commit;
    }()
  }, {
    key: "exportToSpecs",
    value: function () {
      var _ref87 = asyncToGenerator(regeneratorRuntime.mark(function _callee73(args) {
        return regeneratorRuntime.wrap(function _callee73$(_context74) {
          while (1) {
            switch (_context74.prev = _context74.next) {
              case 0:
                return _context74.abrupt("return", this._GET("exportToSpecs", args));

              case 1:
              case "end":
                return _context74.stop();
            }
          }
        }, _callee73, this);
      }));

      function exportToSpecs(_x108) {
        return _ref87.apply(this, arguments);
      }

      return exportToSpecs;
    }()
  }, {
    key: "exportToDir",
    value: function () {
      var _ref88 = asyncToGenerator(regeneratorRuntime.mark(function _callee74(args) {
        return regeneratorRuntime.wrap(function _callee74$(_context75) {
          while (1) {
            switch (_context75.prev = _context75.next) {
              case 0:
                return _context75.abrupt("return", this._POST("exportToDir", args));

              case 1:
              case "end":
                return _context75.stop();
            }
          }
        }, _callee74, this);
      }));

      function exportToDir(_x109) {
        return _ref88.apply(this, arguments);
      }

      return exportToDir;
    }()
  }, {
    key: "importFromDir",
    value: function () {
      var _ref89 = asyncToGenerator(regeneratorRuntime.mark(function _callee75(args) {
        return regeneratorRuntime.wrap(function _callee75$(_context76) {
          while (1) {
            switch (_context76.prev = _context76.next) {
              case 0:
                return _context76.abrupt("return", this._POST("importFromDir", args));

              case 1:
              case "end":
                return _context76.stop();
            }
          }
        }, _callee75, this);
      }));

      function importFromDir(_x110) {
        return _ref89.apply(this, arguments);
      }

      return importFromDir;
    }()
  }, {
    key: "importFromSpecs",
    value: function () {
      var _ref90 = asyncToGenerator(regeneratorRuntime.mark(function _callee76(args) {
        return regeneratorRuntime.wrap(function _callee76$(_context77) {
          while (1) {
            switch (_context77.prev = _context77.next) {
              case 0:
                return _context77.abrupt("return", this._POST("importFromSpecs", args));

              case 1:
              case "end":
                return _context77.stop();
            }
          }
        }, _callee76, this);
      }));

      function importFromSpecs(_x111) {
        return _ref90.apply(this, arguments);
      }

      return importFromSpecs;
    }()
  }, {
    key: "importFromResource",
    value: function () {
      var _ref91 = asyncToGenerator(regeneratorRuntime.mark(function _callee77(args) {
        return regeneratorRuntime.wrap(function _callee77$(_context78) {
          while (1) {
            switch (_context78.prev = _context78.next) {
              case 0:
                return _context78.abrupt("return", this._POST("importFromResource", args));

              case 1:
              case "end":
                return _context78.stop();
            }
          }
        }, _callee77, this);
      }));

      function importFromResource(_x112) {
        return _ref91.apply(this, arguments);
      }

      return importFromResource;
    }()
  }, {
    key: "delete",
    value: function () {
      var _ref92 = asyncToGenerator(regeneratorRuntime.mark(function _callee78(args) {
        return regeneratorRuntime.wrap(function _callee78$(_context79) {
          while (1) {
            switch (_context79.prev = _context79.next) {
              case 0:
                return _context79.abrupt("return", this._POST("delete", args));

              case 1:
              case "end":
                return _context79.stop();
            }
          }
        }, _callee78, this);
      }));

      function _delete(_x113) {
        return _ref92.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "deleteCommit",
    value: function () {
      var _ref93 = asyncToGenerator(regeneratorRuntime.mark(function _callee79(args) {
        return regeneratorRuntime.wrap(function _callee79$(_context80) {
          while (1) {
            switch (_context80.prev = _context80.next) {
              case 0:
                return _context80.abrupt("return", this._POST("deleteCommit", args));

              case 1:
              case "end":
                return _context80.stop();
            }
          }
        }, _callee79, this);
      }));

      function deleteCommit(_x114) {
        return _ref93.apply(this, arguments);
      }

      return deleteCommit;
    }()
  }, {
    key: "fetchConflicts",
    value: function () {
      var _ref94 = asyncToGenerator(regeneratorRuntime.mark(function _callee80(args) {
        return regeneratorRuntime.wrap(function _callee80$(_context81) {
          while (1) {
            switch (_context81.prev = _context81.next) {
              case 0:
                return _context81.abrupt("return", this._GET("fetchConflicts", args));

              case 1:
              case "end":
                return _context81.stop();
            }
          }
        }, _callee80, this);
      }));

      function fetchConflicts(_x115) {
        return _ref94.apply(this, arguments);
      }

      return fetchConflicts;
    }()
  }, {
    key: "resolveConflict",
    value: function () {
      var _ref95 = asyncToGenerator(regeneratorRuntime.mark(function _callee81(args) {
        return regeneratorRuntime.wrap(function _callee81$(_context82) {
          while (1) {
            switch (_context82.prev = _context82.next) {
              case 0:
                return _context82.abrupt("return", this._POST("resolveConflict", args));

              case 1:
              case "end":
                return _context82.stop();
            }
          }
        }, _callee81, this);
      }));

      function resolveConflict(_x116) {
        return _ref95.apply(this, arguments);
      }

      return resolveConflict;
    }()
  }, {
    key: "fetchDiff",
    value: function () {
      var _ref96 = asyncToGenerator(regeneratorRuntime.mark(function _callee82(args) {
        return regeneratorRuntime.wrap(function _callee82$(_context83) {
          while (1) {
            switch (_context83.prev = _context83.next) {
              case 0:
                return _context83.abrupt("return", this._GET("fetchDiff", args));

              case 1:
              case "end":
                return _context83.stop();
            }
          }
        }, _callee82, this);
      }));

      function fetchDiff(_x117) {
        return _ref96.apply(this, arguments);
      }

      return fetchDiff;
    }()
  }, {
    key: "synchronize",
    value: function () {
      var _ref97 = asyncToGenerator(regeneratorRuntime.mark(function _callee83(args) {
        return regeneratorRuntime.wrap(function _callee83$(_context84) {
          while (1) {
            switch (_context84.prev = _context84.next) {
              case 0:
                return _context84.abrupt("return", this._POST("synchronize", args));

              case 1:
              case "end":
                return _context84.stop();
            }
          }
        }, _callee83, this);
      }));

      function synchronize(_x118) {
        return _ref97.apply(this, arguments);
      }

      return synchronize;
    }()
  }]);
  return ObjectDBHTTPInterface;
}();

var debug = false;
var slashRe = /\//g;

function applyExclude(resource$$1, exclude) {
  if (!exclude) return true;
  if (typeof exclude === "string") return !resource$$1.url.includes(exclude);
  if (typeof exclude === "function") return !exclude(resource$$1);
  if (exclude instanceof RegExp) return !exclude.test(resource$$1.url);
  return true;
}

// await StorageDatabase.databases.get("lively.storage-worlds").destroy()
var StorageDatabase = function (_Database) {
  inherits(StorageDatabase, _Database);

  function StorageDatabase() {
    classCallCheck(this, StorageDatabase);
    return possibleConstructorReturn(this, (StorageDatabase.__proto__ || Object.getPrototypeOf(StorageDatabase)).apply(this, arguments));
  }

  createClass(StorageDatabase, null, [{
    key: "ensureDB",
    value: function ensureDB(name, options) {
      return get$1(StorageDatabase.__proto__ || Object.getPrototypeOf(StorageDatabase), "ensureDB", this).call(this, "lively.storage-" + name, options);
    }
  }]);
  return StorageDatabase;
}(Database);

var LivelyStorageResource = function (_Resource) {
  inherits(LivelyStorageResource, _Resource);

  function LivelyStorageResource() {
    classCallCheck(this, LivelyStorageResource);
    return possibleConstructorReturn(this, (LivelyStorageResource.__proto__ || Object.getPrototypeOf(LivelyStorageResource)).apply(this, arguments));
  }

  createClass(LivelyStorageResource, [{
    key: "read",
    value: function () {
      var _ref = asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var file, content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                debug && console.log("[" + this + "] read");
                _context.next = 3;
                return this.db.get(this.pathWithoutQuery());

              case 3:
                file = _context.sent;
                content = file && file.content;
                return _context.abrupt("return", !content ? "" : typeof content === "string" ? content : JSON.stringify(content));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _ref.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "readJson",
    value: function () {
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var content;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.read();

              case 2:
                content = _context2.sent;
                return _context2.abrupt("return", typeof content === "string" ? JSON.parse(content) : content);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function readJson() {
        return _ref2.apply(this, arguments);
      }

      return readJson;
    }()
  }, {
    key: "write",
    value: function () {
      var _ref3 = asyncToGenerator(regeneratorRuntime.mark(function _callee3(content) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                debug && console.log("[" + this + "] write");
                if (!content) content = "";

                if (!this.isDirectory()) {
                  _context3.next = 4;
                  break;
                }

                throw new Error("Cannot write into a directory! (" + this.url + ")");

              case 4:
                _context3.next = 6;
                return this.db.update(this.pathWithoutQuery(), function (spec) {
                  if (spec && spec.isDirectory) throw new Error(_this3.url + " already exists and is a directory (cannot write into it!)");
                  var t = Date.now();
                  if (!spec) {
                    return {
                      etag: undefined,
                      type: undefined,
                      contentType: undefined,
                      user: undefined,
                      group: undefined,
                      mode: undefined,
                      lastModified: t,
                      created: t,
                      size: typeof content === "string" ? content.length : 0,
                      content: content
                    };
                  }

                  return _extends({}, spec, {
                    lastModified: t,
                    size: content.length,
                    content: content
                  });
                });

              case 6:
                return _context3.abrupt("return", this);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function write(_x) {
        return _ref3.apply(this, arguments);
      }

      return write;
    }()
  }, {
    key: "writeJson",
    value: function writeJson(obj$$1) {
      return this.write(obj$$1);
    }
  }, {
    key: "mkdir",
    value: function () {
      var _ref4 = asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var spec, t;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                debug && console.log("[" + this + "] mkdir");

                if (this.isDirectory()) {
                  _context4.next = 3;
                  break;
                }

                throw new Error("Cannot mkdir a file! (" + this.url + ")");

              case 3:
                _context4.next = 5;
                return this.db.get(this.pathWithoutQuery());

              case 5:
                spec = _context4.sent;

                if (!spec) {
                  _context4.next = 10;
                  break;
                }

                if (spec.isDirectory) {
                  _context4.next = 9;
                  break;
                }

                throw new Error(this.url + " already exists and is a file (cannot mkdir it!)");

              case 9:
                return _context4.abrupt("return", this);

              case 10:
                t = Date.now();
                _context4.next = 13;
                return this.db.set(this.pathWithoutQuery(), {
                  etag: undefined,
                  type: undefined,
                  contentType: undefined,
                  user: undefined,
                  group: undefined,
                  mode: undefined,
                  lastModified: t,
                  created: t,
                  isDirectory: true
                });

              case 13:
                return _context4.abrupt("return", this);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function mkdir() {
        return _ref4.apply(this, arguments);
      }

      return mkdir;
    }()
  }, {
    key: "exists",
    value: function () {
      var _ref5 = asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                debug && console.log("[" + this + "] exists");
                _context5.t0 = this.isRoot();

                if (_context5.t0) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 5;
                return this.db.get(this.pathWithoutQuery());

              case 5:
                _context5.t0 = !!_context5.sent;

              case 6:
                return _context5.abrupt("return", _context5.t0);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function exists() {
        return _ref5.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "remove",
    value: function () {
      var _ref6 = asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
        var thisPath, db, matching;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                debug && console.log("[" + this + "] remove");
                thisPath = this.pathWithoutQuery();
                db = this.db;
                _context6.next = 5;
                return db.docList({ startkey: thisPath, endkey: thisPath + "\uFFFF" });

              case 5:
                matching = _context6.sent;
                _context6.next = 8;
                return db.setDocuments(matching.map(function (_ref7) {
                  var _id = _ref7.id,
                      _rev = _ref7.rev;
                  return { _id: _id, _rev: _rev, _deleted: true };
                }));

              case 8:
                return _context6.abrupt("return", this);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function remove() {
        return _ref6.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "readProperties",
    value: function readProperties() {
      debug && console.log("[" + this + "] readProperties");
      return this.db.get(this.pathWithoutQuery());
    }
  }, {
    key: "dirList",
    value: function () {
      var _ref8 = asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
        var _this4 = this;

        var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var exclude, prefix, children, docs, i, doc, path, isDirectory, trailing, childDepth, _ret, child, propNames, props, _i;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                debug && console.log("[" + this + "] dirList");

                if (this.isDirectory()) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return", this.asDirectory().dirList(depth, opts));

              case 3:
                exclude = opts.exclude;
                prefix = this.pathWithoutQuery();
                children = [];
                _context7.next = 8;
                return this.db.getAll({ startkey: prefix, endkey: prefix + "\uFFFF" });

              case 8:
                docs = _context7.sent;


                if (depth === "infinity") depth = Infinity;

                i = 0;

              case 11:
                if (!(i < docs.length)) {
                  _context7.next = 29;
                  break;
                }

                doc = docs[i], path = doc._id, isDirectory = doc.isDirectory;

                if (!(!path.startsWith(prefix) || prefix === path)) {
                  _context7.next = 15;
                  break;
                }

                return _context7.abrupt("continue", 26);

              case 15:
                trailing = path.slice(prefix.length), childDepth = trailing.includes("/") ? trailing.match(slashRe).length + 1 : 1;

                if (!(childDepth > depth)) {
                  _context7.next = 20;
                  break;
                }

                _ret = function () {
                  // add the dirs pointing to child
                  var dirToChild = _this4.join(trailing.split("/").slice(0, depth).join("/") + "/");
                  if (!children.some(function (ea) {
                    return ea.equals(dirToChild);
                  })) children.push(dirToChild);
                  return "continue";
                }();

                if (!(_ret === "continue")) {
                  _context7.next = 20;
                  break;
                }

                return _context7.abrupt("continue", 26);

              case 20:
                child = this.join(trailing);

                if (!(exclude && !applyExclude(child, exclude))) {
                  _context7.next = 23;
                  break;
                }

                return _context7.abrupt("continue", 26);

              case 23:
                children.push(child);
                propNames = ["created", "lastModified", "mode", "group", "user", "contentType", "type", "etag", "size"], props = {};

                for (_i = 0; _i < propNames.length; _i++) {
                  child[propNames[_i]] = doc[propNames[_i]];
                }

              case 26:
                i++;
                _context7.next = 11;
                break;

              case 29:
                return _context7.abrupt("return", children);

              case 30:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function dirList() {
        return _ref8.apply(this, arguments);
      }

      return dirList;
    }()
  }, {
    key: "canDealWithJSON",
    get: function get() {
      return true;
    }
  }, {
    key: "db",
    get: function get() {
      return this._db || (this._db = StorageDatabase.ensureDB(this.host()));
    }
  }]);
  return LivelyStorageResource;
}(lively_resources.Resource);

var resourceExtension = {
  name: "lively.storage",
  matches: function matches(url) {
    return url.startsWith("lively.storage:");
  },
  resourceClass: LivelyStorageResource

  // will install resource extension:
};lively_resources.registerExtension(resourceExtension);

// to trigger resource extension

exports.Database = Database;
exports.ObjectDB = ObjectDB;
exports.ObjectDBInterface = ObjectDBInterface;
exports.ObjectDBHTTPInterface = ObjectDBHTTPInterface;

}((this.lively.storage = this.lively.storage || {}),PouchDB,pouchdbAdapterMem,lively.lang,lively.resources));

  }).call(GLOBAL);
  if (typeof module !== "undefined" && module.exports) module.exports = GLOBAL.lively.storage;
})();
