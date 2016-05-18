import * as ast from "lively.ast";
import { obj, promise, arr } from "lively.lang";
import { moduleRecordFor, moduleEnv } from "./system.js";
import { runEval as realRunEval, EvalResult } from "lively.vm/lib/evaluator.js";
import { recordDoitRequest, recordDoitResult } from "./notify.js";

// export { runEval, runEvalWithAsyncSupport }
export { runEvalWithAsyncSupport as runEval }

function ensureImportsAreLoaded(System, code, parentModule) {
  var body = ast.parse(code).body,
      imports = body.filter(node => node.type === "ImportDeclaration");
  return Promise.all(imports.map(node =>
          System.normalize(node.source.value, parentModule)
            .then(fullName => moduleRecordFor(System, fullName) ? undefined : System.import(fullName))))
        .catch(err => { console.error("Error ensuring imports: " + err.message); throw err; });
}

function runEval(System, code, options) {
  options = obj.merge({
    targetModule: null, parentModule: null,
    parentAddress: null
  }, options);

  var originalCode = code;

  return Promise.resolve()
    .then(() => {
      var targetModule = options.targetModule || "*scratch*";
      return System.normalize(targetModule, options.parentModule, options.parentAddress);
    })
    .then((targetModule) => {
      var fullname = options.targetModule = targetModule;
      return System.import(fullname)
        .then(() => ensureImportsAreLoaded(System, code, fullname))
        .then(() => {
          var {recorder, recorderName, dontTransform} = moduleEnv(System, fullname),
              header = `var _moduleExport = ${recorderName}._moduleExport,\n`
                     + `    _moduleImport = ${recorderName}._moduleImport;\n`;

          code = header + code;
          options = obj.merge(
            {waitForPromise: true},
            options, {
              recordGlobals: true,
              dontTransform: dontTransform,
              varRecorderName: recorderName,
              topLevelVarRecorder: recorder,
              sourceURL: options.sourceURL || options.targetModule,
              context: options.context || recorder,
              es6ExportFuncId: "_moduleExport",
              es6ImportFuncId: "_moduleImport"
            });

          recordDoitRequest(
            System, originalCode,
            {waitForPromise: options.waitForPromise, targetModule: options.targetModule},
            Date.now());

          return realRunEval(code, options).then(result => {
            System["__lively.modules__"].evaluationDone(fullname);
            recordDoitResult(
              System, originalCode,
              {waitForPromise: options.waitForPromise, targetModule: options.targetModule},
              result, Date.now());
            return result;
          })
        })
    });
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


function babelTranspile(babel, filename, env, source, options) {
  options = Object.assign({
    modules: 'ignore',
    sourceMap: undefined, // 'inline' || true || false
    inputSourceMap: undefined,
    filename: filename,
    code: true,
    ast: false
  }, options);
  return babel.transform(source, options).code;
}


function interactiveAsyncAwaitTranspile(babel, filename, env, source, options) {

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // FIXME this needs to go somehwere else
  Object.assign(env, {
    currentEval: {status: "not running"} // promise holder
  });

  Object.assign(env.recorder, {
    'lively.modules-start-eval'() {
      env.currentEval = promise.deferred();
      env.currentEval.status = "running";
    },
    'lively.modules-end-eval'(value) {
      var result = new EvalResult();
      result.value = value
      env.currentEval.status = "not running";
      env.currentEval.resolve(result);
    }
  });



  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // source is already rewritten for capturing
  // await isn't allowed top level so we wrap the code in an async function...
  // var src = "async () => { await (await foo()).bar(); }";

  var parsed = ast.parse(source),
      funcDecls = ast.query.topLevelFuncDecls(parsed),
      innerBody = parsed.body,
      outerBody = [],
      startEval = member(id(env.recorderName), literal('lively.modules-start-eval'), true),
      endEval = member(env.recorderName, literal('lively.modules-end-eval'), true),
      initializer = expr(funcCall(startEval)),
      transformedSource;

  funcDecls.forEach(({node, path}) => {
    lively.lang.Path(path).set(parsed, expr(node.id));
    // lively.lang.Path(path.slice(1)).set(innerBody, expr(node.id));
    outerBody.push(node);
  });

  innerBody.unshift(initializer);
  var last = arr.last(innerBody);
  if (last.type === "ExpressionStatement") {
    var finalizer = returnStmt(funcCall(endEval, last.expression));
    innerBody.splice(innerBody.length-1, 1, finalizer)
  // } else if (last.type === "FunctionDeclaration") {
  //   var finalizer = returnStmt(funcCall(endEval, last.id));
  //   innerBody.push(finalizer);
  } else {
    var finalizer = returnStmt(funcCall(endEval, id("undefined")));
    innerBody.push(finalizer);
  }

  outerBody.push(tryStmt("err", [returnStmt(funcCall(endEval, id("err")))], null, ...innerBody));
  transformedSource = lively.ast.stringify(program(...outerBody));

  // The function wrapper is needed b/c we need toplevel awaits and babel
  // converts "this" => "undefined" for modules
  var sourceForBabel = `(async function(__rec) {\n${transformedSource}\n}).call(this);`;
  return babelTranspile(babel, filename, env, sourceForBabel, options)
          .replace(/\}\)\.call\(undefined\);$/, "}).call(this)");
}

function ensureEs6Transpiler(System, moduleId, env) {
  if (System.transpiler !== "babel")
    return Promise.reject(new Error("Sorry, currently only babel is supported as es6 transpiler for runEval!"));

  return Promise.resolve(System.global[System.transpiler] || System.import(System.transpiler))
    .then(transpiler => {
      // if (System.transpiler === "babel") return babelTranspile.bind(System.global, transpiler, moduleId, env);
      if (System.transpiler === "babel") return interactiveAsyncAwaitTranspile.bind(System.global, transpiler, moduleId, env);
      return null;
    })
}


function runEvalWithAsyncSupport(System, code, options) {
  options = obj.merge({
    targetModule: null, parentModule: null,
    parentAddress: null,
    es6Transpile: true,
    transpiler: null, // function with params: source, options
    transpilerOptions: null
  }, options);

  var originalCode = code;

  return Promise.resolve()
    .then(() => {
      var targetModule = options.targetModule || "*scratch*";
      return System.normalize(targetModule, options.parentModule, options.parentAddress);
    })
    .then((targetModule) => {
      var fullname = options.targetModule = targetModule,
          env = moduleEnv(System, fullname),
          {recorder, recorderName, dontTransform} = env;

      return System.import(fullname)
        .then(() => ensureImportsAreLoaded(System, code, fullname))
        .then(() => options.transpiler ?
                      options.transpiler :
                      options.es6Transpile ? ensureEs6Transpiler(System, options.targetModule, env) : null)
        .then(transpiler => {
          var header = `var _moduleExport = ${recorderName}._moduleExport,\n`
                     + `    _moduleImport = ${recorderName}._moduleImport;\n`;

          code = header + code;
          options = obj.merge(
            {waitForPromise: true},
            options, {
              recordGlobals: true,
              dontTransform: dontTransform,
              varRecorderName: recorderName,
              topLevelVarRecorder: recorder,
              sourceURL: options.sourceURL || options.targetModule,
              context: options.context || recorder,
              es6ExportFuncId: "_moduleExport",
              es6ImportFuncId: "_moduleImport",
              transpiler: transpiler
            });

          recordDoitRequest(
            System, originalCode,
            {waitForPromise: options.waitForPromise, targetModule: options.targetModule},
            Date.now());

          return realRunEval(code, options)
            .then(result =>
              result.isError || !env.currentEval.promise ?
                result :
                env.currentEval.promise.then(result => {
                  return result.process(options).then(() => result);
                }))
            .then(result => {
              System["__lively.modules__"].evaluationDone(fullname);
              recordDoitResult(
                System, originalCode,
                {waitForPromise: options.waitForPromise, targetModule: options.targetModule},
                result, Date.now());
              return result;
            })
        })
    });
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


function funcExpression(opts = {}, params = [], ...statements) {
  return {
    type: (opts.arrow ? "Arrow" : "") + "FunctionExpression",
    id: opts.id || undefined, params: params,
    body: {body: statements, type: "BlockStatement"},
    expression: opts.expression || false,
    generator: opts.generator || false
  }
}

function funcCall(callee, ...args) {
  if (typeof callee === "string") callee = id(callee);
  return {
    type: "CallExpression",
    callee: callee,
    arguments: args
  }
}

function varDecl(id, init, kind) {
  if (typeof id === "string") id = {name: id, type: "Identifier"};
  return {
    type: "VariableDeclaration", kind: kind || "var",
    declarations: [{type: "VariableDeclarator", id: id, init: init}]
  }
}

function expr(expression) { return {type: "ExpressionStatement", expression: expression}; }

function literal(value) { return {type: "Literal", value: value}; }

function id(name) { return name === "this" ? {type: "ThisExpression"} : {name: name, type: "Identifier"}; }

function returnStmt(expr) { return { type: "ReturnStatement", argument: expr}; }

function member(obj, prop, computed) {
  if (typeof obj === "string") obj = id(obj);
  if (typeof prop === "string") prop = id(prop);
  return {
    type: "MemberExpression",
    computed: !!computed,
    object: obj, property: prop
  }
}

function block(...body) {
  return {body: Array.isArray(body[0]) ? body[0] : body, type: "BlockStatement"};
}

function program(...body) {
  return Object.assign(block(...body), {sourceType: "module", type: "Program"})
}

function tryStmt(exName, handlerBody, finalizerBody, ...body) {
  return {
    block: block(body),
    finalizer: finalizerBody ? block(finalizerBody) : null,
    handler: {
      body: block(handlerBody),
      param: id(exName),
      type: "CatchClause"
    },
    type: "TryStatement"
  }
}
