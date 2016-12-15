import { arr } from "lively.lang";

export const initializeSymbol = Symbol.for("lively-instance-initialize"),
             instanceRestorerSymbol = Symbol.for("lively-instance-restorer"),
             superclassSymbol = Symbol.for("lively-instance-superclass"),
             moduleMetaSymbol = Symbol.for("lively-instance-module-meta"),
             moduleSubscribeToToplevelChangesSym = Symbol.for("lively-klass-changes-subscriber");

const constructorArgMatcher = /\([^\\)]*\)/;

const defaultPropertyDescriptorForGetterSetter = {
  enumerable: false,
  configurable: true
}

const defaultPropertyDescriptorForValue = {
  enumerable: false,
  configurable: true,
  writable: true
}

function setSuperclass(klass, superclassOrSpec) {
  // define klass.prototype, klass.prototype[constructor], klass[superclassSymbol]
  var superclass = !superclassOrSpec ? Object :
    typeof superclassOrSpec === "function" ? superclassOrSpec :
      superclassOrSpec.value ? superclassOrSpec.value : Object;
  var existingSuperclass = klass && klass[superclassSymbol];
  // set the superclass if necessary and set prototype
  if (!existingSuperclass || existingSuperclass !== superclass) {
    ensureInitializeStub(superclass);
    klass[superclassSymbol] = superclass;
    klass.prototype = Object.create(superclass.prototype);
    klass.prototype.constructor = klass;
    if (superclass !== Object)
      Object.setPrototypeOf ?
        Object.setPrototypeOf(klass, superclass) :
        klass.__proto__ = superclass;
  }
  return superclass
}

function installValueDescriptor(object, klass, descr) {
  descr = Object.assign(descr, defaultPropertyDescriptorForValue);
  descr.value.displayName = descr.key;
  if (descr.needsDeclaringClass) {
    var orig = descr.value.originalFunction || descr.value;
    descr.value = Object.assign(
      function declaring_class_wrapper(/*args*/) { return orig.call(this, klass, ...arguments); },
      {
        originalFunction: orig,
        toString: () => orig.toString(),
        displayName: descr.key
      });
  }
  Object.defineProperty(object, descr.key, descr)
}

function installGetterSetterDescriptor(klass, descr) {
  descr = Object.assign(descr, defaultPropertyDescriptorForGetterSetter);
  Object.defineProperty(klass, descr.key, descr)
}

function installMethods(klass, instanceMethods, classMethods) {
  // install methods from two lists (static + instance) of {key, value} or
  // {key, get/set} descriptors
  
  classMethods && classMethods.forEach(ea => {
    ea.value ?
      installValueDescriptor(klass, klass, ea) :
      installGetterSetterDescriptor(klass, ea);
  });

  instanceMethods && instanceMethods.forEach(ea => {
    ea.value ?
      installValueDescriptor(klass.prototype, klass, ea) :
      installGetterSetterDescriptor(klass.prototype, ea);
  });

  // 4. define initializer method, in our class system the constructor is
  // generic and re-directs to the initializer method. This way we can change
  // the constructor without loosing the identity of the class
  if (!klass.prototype[initializeSymbol]) {
    Object.defineProperty(klass.prototype, initializeSymbol, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {}
    });
    klass.prototype[initializeSymbol].displayName = "lively-initialize";
  }
  
  // 5. undefine properties that were removed form class definition
  const toDeleteInstance = arr.withoutAll(
    Object.getOwnPropertyNames(klass.prototype),
    instanceMethods.map(m => m.key).concat(["constructor", "arguments", "caller"]));
  toDeleteInstance.forEach(key => { delete klass.prototype[key]; });
  const toDeleteClass = arr.withoutAll(
    Object.getOwnPropertyNames(klass),
    classMethods.map(m => m.key).concat(["length", "name", "prototype", "arguments", "caller"]));
  toDeleteClass.forEach(key => { delete klass[key]; });
}


function ensureInitializeStub(superclass) {
  // when we inherit from "conventional classes" those don't have an
  // initializer method. We install a stub that calls the superclass function
  // itself
  if (superclass === Object || superclass.prototype[initializeSymbol]) return;
  Object.defineProperty(superclass.prototype, initializeSymbol, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(/*args*/) { superclass.apply(this, arguments); }
  });
  superclass.prototype[initializeSymbol].displayName = "lively-initialize-stub";
}

export function initializeClass(
  constructorFunc, superclassSpec,
  instanceMethods = [],
  classMethods = [],
  classHolder = {},
  currentModule) {
  // Given a `classHolder` object as "environment", will try to find a "class"
  // (JS constructor function) inside it. If no class is found it will create a
  // new costructor function object and will attach the methods to it. If a class
  // is found it will be modified.
  // This is being used as the compile target for es6 class syntax by the
  // lively.ast capturing / transform logic
  // Example:
  // var Foo = function(superclass) {
  //   function Foo() {}
  //   return initializeClass(Foo, superclass, [{key: "m", value: function m() { return 23 }}])
  // }();
  // new Foo().m() // => 23

  // 1. create a new constructor function if necessary, re-use an exisiting if the
  // classHolder object has it
  var className = constructorFunc.name,
      klass = className && classHolder.hasOwnProperty(className) && classHolder[className],
      existingSuperclass = klass && klass[superclassSymbol];
  if (!klass || typeof klass !== "function" || !existingSuperclass)
    klass = constructorFunc;

  // 2. set the superclass if necessary and set prototype
  var superclass = setSuperclass(klass, superclassSpec);

  // 3. Install methods
  installMethods(klass, instanceMethods, classMethods);

  // 4. If we have a `currentModule` instance (from lively.modules/src/module.js)
  // then we also store some meta data about the module. This allows us to
  // (de)serialize class instances in lively.serializer
  if (currentModule) {
    var p  = currentModule.package()
    klass[moduleMetaSymbol] = {
      package: p ? {name: p.name, version: p.version} : {},
      pathInPackage: currentModule.pathInPackage()
    }

    // if we have a module, we can listen to toplevel changes of it in case the
    // superclass binding changes. With that we can keep our class up-to-date
    // even if the superclass binding changes. This is especially useful for
    // situations where modules have a circular dependency and classes in modules
    // won't get defined correctly when loaded first. See
    // https://github.com/LivelyKernel/lively.modules/issues/27 for more details
    if (superclassSpec && superclassSpec.referencedAs) {
      if (klass[moduleSubscribeToToplevelChangesSym]) {
        currentModule.unsubscribeFromToplevelDefinitionChanges(klass[moduleSubscribeToToplevelChangesSym])
      }
      klass[moduleSubscribeToToplevelChangesSym] = currentModule.subscribeToToplevelDefinitionChanges((name, val) => {
        if (name === superclassSpec.referencedAs) {
          // console.log(`class ${className}: new superclass ${name} ${name !== superclassSpec.referencedAs ? '(' + superclassSpec.referencedAs + ')' : ''}was defined via module bindings`)
          setSuperclass(klass, val);
          installMethods(klass, instanceMethods, classMethods);
        }
      });
    }
  }

  // 6. Add a toString method for the class to allows us to see its constructor arguments
  var init = klass.prototype[initializeSymbol],
      constructorArgs = String(klass.prototype[initializeSymbol]).match(constructorArgMatcher),
      string = `class ${className} ${superclass ? `extends ${superclass.name}` : ""} {\n`
             + `  constructor${constructorArgs ? constructorArgs[0] : "()"} { /*...*/ }`
             + `\n}`;
  klass.toString = () => string;

  return klass;
}


initializeClass._get = function _get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return undefined;
    } else {
      return _get(parent, property, receiver);
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
}


initializeClass._set = function _set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent !== null) {
      _set(parent, property, value, receiver);
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
}
