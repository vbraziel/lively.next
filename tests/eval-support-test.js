/*global beforeEach, afterEach, describe, it*/

import { expect } from "mocha-es6";

import { stringify, parse } from "lively.ast";
import { evalCodeTransform } from "../lib/eval-support.js";

describe("eval code transform", function() {

  it("allows object expressions", () =>
    expect(evalCodeTransform("{x: 23}", {})).equals("({ x: 23 });"));

  it("allows function expressions", () =>
    expect(evalCodeTransform("function() {}", {})).equals("(function () {\n});"));

  it("does nothing without options", () =>
    expect(evalCodeTransform("3 + 4", {})).equals("3 + 4;"));

  it("captures toplevel vars", () =>
    expect(evalCodeTransform("const x = 23;", {topLevelVarRecorder: {}, varRecorderName: "__foo"}))
      .equals("__foo.x = 23;"));

  it("wraps in start end call", () =>
    expect(evalCodeTransform("var x = 23;", {wrapInStartEndCall: true}))
      .equals("try {\n"
            + "    __start_execution();\n"
            + "    var x = 23;\n"
            + "    __end_execution(null, x);\n"
            + "} catch (err) {\n"
            + "    __end_execution(err, undefined);\n"
            + "}"));

  it("start / end + capturing", () =>
    expect(evalCodeTransform("var x = 23;", {topLevelVarRecorder: {}, wrapInStartEndCall: true}))
      .equals("try {\n"
            + "    __start_execution();\n"
            + "    __end_execution(null, __lvVarRecorder.x = 23);\n"
            + "} catch (err) {\n"
            + "    __end_execution(err, undefined);\n"
            + "}"));

});
