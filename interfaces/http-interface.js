import { HttpEvalStrategy } from "lively.vm/lib/eval-strategies.js";
import { RemoteCoreInterface } from "./interface.js";

export class HTTPCoreInterface extends RemoteCoreInterface {

  constructor(url) {
    super();
    this.currentEval = null;
    this.url = url;
    this.server = new HttpEvalStrategy(url);
  }

  runEval(source, options) {
    return this.server.runEval(source, options);
  }

}
