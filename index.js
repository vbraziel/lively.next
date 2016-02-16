/*global module,exports,require*/

var lang = typeof window !== "undefined" ? lively.lang : require("lively.lang");

module.exports = lang.obj.merge(
  require("./lib/evaluator"), {
    completions: require("./lib/completions"),
    cjs: require("./lib/commonjs-interface"),
    es6: require("./lib/es6-interface")
  });