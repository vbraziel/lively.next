/*global System*/
import { MorphicEnv } from "./index.js";
import { loadWorldFromResource } from "./serialization.js";
import { resource, registerExtension as registerResourceExension } from "lively.resources";
import { MorphicDB } from "./morphicdb/index.js";


export function pathForBrowserHistory(worldName, queryString) {
  // how does the resource map to a URL shown in the browser URL bar? used for
  // browser history
  queryString = queryString.trim();
  if (!queryString || queryString === "?") queryString = "";
  let basePath = "/worlds/";
  worldName = worldName.replace(/\.json$/, "").replace(/%20/g, " ");
  return `${basePath}${worldName}${queryString}`;
}

export async function loadWorldFromURL(url, oldWorld, options) {
  let worldResource = url.isResource ? url :
        lively.resources.resource(System.decanonicalize(url)),
      name = worldResource.nameWithoutExt();
  return loadWorldFromDB(name, undefined, oldWorld, options);
}

export async function loadWorldFromCommit(commitOrId, oldWorld, options) {
    let db = MorphicDB.default,
        newWorld = await db.load("world", undefined, options, commitOrId),
        queryString = typeof document !== "undefined" ? document.location.search : ""  
  options = {
    pathForBrowserHistory: pathForBrowserHistory(newWorld.name, queryString),
    ...options
  };
  return loadWorld(newWorld, oldWorld, options)
}

export async function loadWorldFromDB(name, ref, oldWorld, options) {
  let db = MorphicDB.default,
      newWorld = await db.load("world", name, options, undefined/*commit||id*/, ref || undefined),
      queryString = typeof document !== "undefined" ? document.location.search : ""  
  options = {
    pathForBrowserHistory: pathForBrowserHistory(name, queryString),
    ...options
  };
  return loadWorld(newWorld, oldWorld, options)
}

export async function loadWorld(newWorld, oldWorld, options = {}) {
  // oldWorld is optional

  let {
    env,
    verbose = true,
    localconfig = true,
    l2l = true,
    shell = true,
    worldLoadDialog = false,
    initializeGlobalStyleSheets = true,
    showUserFlap = typeof newWorld.showsUserFlap === "undefined"
      ? true : newWorld.showsUserFlap
  } = options;

  env = env || (oldWorld ? oldWorld.env : MorphicEnv.default());

  let doc = env.domEnv.document || document,
      nativeLoadingIndicator = doc.getElementById("dom-loading-indicator");

  try {

    let l2lClient = l2l && await setupLively2Lively();

    if (l2lClient && shell) await setupLivelyShell({l2lClient});

    if (verbose && nativeLoadingIndicator) nativeLoadingIndicator.style.display = "";

    await env.setWorld(newWorld);

    localconfig && await loadLocalConfig();

    initializeGlobalStyleSheets && newWorld.whenRendered().then(() =>
                                    newWorld.propertiesAndPropertySettings()
                                      .properties.styleSheets.initialize.call(newWorld));

    worldLoadDialog && newWorld.execCommand("load world");

    if (options.pathForBrowserHistory) {
      window.history.pushState({}, "lively.next", options.pathForBrowserHistory);
    }

    newWorld.showsUserFlap = showUserFlap;

    return newWorld;
  } catch (e) {
    console.error(`Error loading world: `, e);
    if (oldWorld) {
      await env.setWorld(oldWorld);
      oldWorld.showError(e);
    }
    throw e;
  } finally {
    if (nativeLoadingIndicator) nativeLoadingIndicator.style.display = "none";
  }
}


async function loadLocalConfig() {
  let localconfig = lively.modules.module("localconfig.js");
  try {
    // reload so that localconfig module actually executes, even if it was loaded before
    if (await resource(localconfig.id).exists())
      await localconfig.reload({resetEnv: false, reloadDeps: false});
  } catch (err) {
    console.error(`Error loading localconfig:`, err);
    if (typeof $world !== "undefined")
      $world.showError(`Error loading localconfig.js: ${err}`);
  }
}

async function setupLivelyShell(opts) {
  await lively.modules.importPackage("lively.shell");
  let {default: ClientCommand} = await lively.modules.module("lively.shell/client-command.js").load(),
      { resourceExtension } = await lively.modules.module("lively.shell/client-resource.js").load(),
      {l2lClient} = opts;
  ClientCommand.installLively2LivelyServices(l2lClient);
  resourceExtension.resourceClass.defaultL2lClient = l2lClient;
  registerResourceExension(resourceExtension);
  console.log(`[lively] lively.shell setup`);
}

async function setupLively2Lively() {
  await lively.modules.importPackage("lively.2lively");
  let {default: L2LClient} = await lively.modules.module("lively.2lively/client.js").load(),
      client = await L2LClient.forLivelyInBrowser();
  console.log(`[lively] lively2lively client created ${client}`)
  return client;
}
