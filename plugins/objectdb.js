import { ObjectDBInterface } from "lively.storage";
import { parseQuery } from "lively.resources";

// import LivelyServer from "../server.js";

// Array.from(LivelyServer.servers.keys())
// var s = LivelyServer.ensure({hostname: "0.0.0.0", port: "9011"})
// s.findPlugin("objectdb")
// s.addPlugin(new ObjectDBPlugin())


async function readBody(req) {
  if (req._body) return req._body;
  return new Promise((resolve, reject) => {
    var data = '';
    req.on('data', d => data += d.toString());
    req.on('end', () => {
      try {
        if (req.headers["content-type"] === "application/json")
          data = JSON.parse(data);
      } catch (err) {}
      resolve(req._body = data);
    });
    req.on('error', err => reject(err));
  });
}



export default class ObjectDBPlugin {

  constructor() {
    this.path = "/objectdb";
  }

  setOptions(opts) {}

  get pluginId() { return "objectdb" }
  get after() { return ["cors"]; }
  get before() { return ["jsdav"]; }

  setup(livelyServer) {}
  async close() {}

  async handleRequest(req, res, next) {
    if (!req.url.startsWith(this.path)) return next();

    let path = req.url.split("/")[2],
        action = path.split("?")[0],
        method = req.method.toUpperCase();

    try {

      switch (method) {

        case 'GET':
          switch (action) {
            case "explainInterface":   return await this.explainInterface(req, res);
            case "fetchCommits":       return await this.fetchCommits(req, res);
            case "fetchVersionGraph":  return await this.fetchVersionGraph(req, res);
            case "fetchLog":           return await this.fetchLog(req, res);
            case "fetchSnapshot":      return await this.fetchSnapshot(req, res);
            case "exportToSpecs":      return await this.exportToSpecs(req, res);
          }
          break;

        case 'POST':
          switch (action) {
            case "ensureDB":           return await this.ensureDB(req, res);
            case "destroyDB":          return await this.destroyDB(req, res);
            case "commit":             return await this.commit(req, res);
            case "exportToDir":        return await this.exportToDir(req, res);
            case "importFromDir":      return await this.importFromDir(req, res);
            case "importFromSpecs":    return await this.importFromSpecs(req, res);
            case "importFromResource": return await this.importFromResource(req, res);
            case "delete":             return await this.delete(req, res);
          }
          break;
      }

      res.writeHead(404, {"content-type": "application/json"});
      res.end(JSON.stringify({error: `method/action not supported ${method}/${action}`}));
      return;    

    } catch (err) {
      console.error(err);
      let errPayload = {};
      if (err.isVersionMismatchError) {
        errPayload.error = String(err);
        errPayload.isVersionMismatchError = true;
        errPayload.ref = err.ref;
        errPayload.ancestorCommit = err.ancestorCommit;
        errPayload.expectedVersion = err.expectedVersion;
      } else {
        errPayload.error = err.stack || String(err);
      }
      try {
        res.writeHead(500, {"content-type": "application/json"});
        res.end(JSON.stringify(errPayload));
      } catch (err2) { res.end(String(err.stack || err)); }
    }
  }

/*

let methods = ["importFromResource", "importFromSpecs","importFromDir","exportToDir","exportToSpecs","commit","fetchSnapshot","fetchLog", "fetchVersionGraph", "fetchCommits","destroyDB", "ensureDB"];

let sources = await Promise.all(methods.map(async method => {
  let {parameters} = await ObjectDBInterface.describe(method),
      paramList = parameters.join(", ");
  return `async ${method}(req, res) {\n  let {${paramList}} = parseQuery(req.url),\n      result = await ObjectDBInterface.${method}({${paramList}});\n  res.write(200, {"content-type": "application/json"});\n  res.end(JSON.stringify(result));\n}`
}))

sources.join("\n\n");
*/

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // querying / GET

  async explainInterface(req, res) {
    let {method} = parseQuery(req.url),
        report = await ObjectDBInterface.describe(method);
        // report = method ? `${name}\n parameters:\n  ${parameters.join("\n  ")}` : `methods:\n ${methods.join("\n  ")}`;
    let payload = JSON.stringify(report);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async fetchSnapshot(req, res) {
    let {db, type, name, ref, commit} = parseQuery(req.url),
        result = await ObjectDBInterface.fetchSnapshot({db, type, name, ref, commit});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async fetchLog(req, res) {
    let {db, type, name, ref, commit, limit, includeCommits, knownCommitIds} = parseQuery(req.url),
        result = await ObjectDBInterface.fetchLog({db, type, name, ref, commit, limit, includeCommits, knownCommitIds});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async fetchVersionGraph(req, res) {
    let {db, type, name} = parseQuery(req.url),
        result = await ObjectDBInterface.fetchVersionGraph({db, type, name});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async fetchCommits(req, res) {
    let {db, ref, type, typesAndNames, knownCommitIds, includeDeleted} = parseQuery(req.url),
        result = await ObjectDBInterface.fetchCommits({
          db,
          ref,
          type,
          typesAndNames,
          knownCommitIds,
          includeDeleted
        });
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // modification / POST

  async importFromResource(req, res) {
    let {db, type, name, url, commitSpec, purgeHistory} = await readBody(req),
        result = await ObjectDBInterface.importFromResource({db, type, name, url, commitSpec, purgeHistory});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async importFromSpecs(req, res) {
    let {db, specs, overwrite, copyResources} = await readBody(req),
        result = await ObjectDBInterface.importFromSpecs({db, specs, overwrite, copyResources});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async importFromDir(req, res) {
    let {db, url, overwrite, copyResources} = await readBody(req),
        result = await ObjectDBInterface.importFromDir({db, url, overwrite, copyResources});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async exportToDir(req, res) {
    let {db, url, nameAndTypes, copyResources, includeDeleted} = await readBody(req),
        result = await ObjectDBInterface.exportToDir({db, url, nameAndTypes, copyResources, includeDeleted});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async exportToSpecs(req, res) {
    let {db, nameAndTypes, includeDeleted} = parseQuery(req.url),
        result = await ObjectDBInterface.exportToSpecs({db, nameAndTypes, includeDeleted});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async commit(req, res) {
    let {db, type, name, ref, expectedParentCommit, commitSpec, snapshot, preview} = await readBody(req),
        result = await ObjectDBInterface.commit({db, type, name, ref, expectedParentCommit, commitSpec, snapshot, preview});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async destroyDB(req, res) {
    let {db} = await readBody(req),
        result = await ObjectDBInterface.destroyDB({db});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async ensureDB(req, res) {
    let {db, snapshotLocation} = await readBody(req),
        result = await ObjectDBInterface.ensureDB({db, snapshotLocation});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

  async delete(req, res) {
    let {db, type, name, dryRun} = await readBody(req),
        result = await ObjectDBInterface.delete({db, type, name, dryRun});
    if (typeof result !== "object") result = {status: String(result)};
    let payload = JSON.stringify(result);
    res.writeHead(200, {"content-type": "application/json"});
    res.end(payload);
  }

}
