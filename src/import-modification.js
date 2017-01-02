import { arr, Path } from "lively.lang";
import { fuzzyParse, query, stringify } from "lively.ast";
import { resource } from "lively.resources";

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// injecting the import into a module
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/*

The injector doesn't actually modify modules (or evaluate import statements)
but only generates the code to do so.

// The import we want to add
var importData = {
  exported: "xxx",
  moduleId: "http://foo/src/b.js",
  packageName: "test-package",
  packageURL: "http://foo/",
  pathInPackage: "src/b.js"
}

// The module and source we want to modify
var m = "http://foo/a.js", src = "import { yyy } from './src/b.js'; class Foo {}";

// run
var {generated, newSource, from, to, standaloneImport, importedVarName} =
  ImportInjector.run(System, m, {name: "test-package"}, src, importData);

generated // => ", xxx"
from, to // => 12, 17 , indexes to inject generated
newSource // => "import { yyy, xxx } from './src/b.js'; class Foo {}"
standaloneImport // => import { xxx } from "./src/b.js"; can be used for evaluation
importedVarName // => "xxx"

*/

export class ImportInjector {

  static run(System, intoModuleId, intoPackage, intoModuleSource, importData, optAst) {
    return new this(System, intoModuleId, intoPackage, intoModuleSource, importData, optAst).run();
  }

  constructor(System, intoModuleId, intoPackage, intoModuleSource, importData, optAst) {
    this.System = System
    this.intoModuleId = intoModuleId;
    this.intoPackage = intoPackage;
    this.intoModuleSource = intoModuleSource
    this.fromModuleId = importData.moduleId;
    this.importData = importData
    this.parsed = optAst || fuzzyParse(intoModuleSource);
  }

  run() {
    var {standaloneImport, importedVarName} = this.generateImportStatement(),
        {imports, importsOfFromModule, importsOfVar} = this.existingImportsOfFromModule();

    // already imported?
    if (importsOfVar.length) return {
      status: "not modified",
      newSource: this.intoModuleSource,
      generated: "",
      importedVarName: "",
      standaloneImport,
      from: importsOfVar[0].start, to: importsOfVar[0].end
    };

    // modify an existing import?
    if (importsOfFromModule.length) {
      var modified = this.modifyExistingImport(importsOfFromModule, standaloneImport);
      if (modified) return modified;
    }

    // prepend new import
    var lastImport = arr.last(imports),
        insertPos = lastImport ? lastImport.end : 0;
    return this.insertNewImport(importsOfFromModule, standaloneImport, importedVarName, insertPos);
  }

  generateImportStatement() {
    var {intoModuleId, fromModuleId, importData, intoPackage} = this,
        isDefault = importData.exported === "default",
        varName = isDefault ? importData.local : importData.exported,
        intoPackageName = intoPackage && intoPackage.name,
        exportPath = fromModuleId;

    var {packageName, pathInPackage, isMain} = importData;
    if (isMain) exportPath = packageName;
    else if (intoPackageName === packageName) {
      try {
        exportPath = resource(fromModuleId).relativePathFrom(resource(intoModuleId));
        if (!exportPath.startsWith(".")) exportPath = "./" + exportPath;
      } catch (e) {
        if (packageName && packageName !== "no group" && pathInPackage)
          exportPath = packageName + "/" + pathInPackage;
      }
    } else {
      if (packageName && packageName !== "no group" && pathInPackage)
        exportPath = packageName + "/" + pathInPackage;
    }

    return {
      standaloneImport: isDefault ?
        `import ${varName} from "${exportPath}";` :
        `import { ${varName} } from "${exportPath}";`,
      importedVarName: varName
    }
  }

  existingImportsOfFromModule() {
    var {System, fromModuleId, intoModuleId, importData: {exported: impName}, parsed} = this,
        isDefault = impName === "default",
        imports = parsed.body.filter(({type}) => type === "ImportDeclaration")

    var importsOfFromModule = imports.filter(ea => {
      if (!ea.source || typeof ea.source.value !== "string") return null;
      var sourceId = System.decanonicalize(ea.source.value, intoModuleId)
      return fromModuleId === sourceId;
    });

    var importsOfImportedVar = importsOfFromModule.filter(ea =>
        (ea.specifiers || []).some(iSpec =>
          isDefault ?
            iSpec.type === "ImportDefaultSpecifier" :
            Path("imported.name").get(iSpec) === impName));

    return {
      imports, importsOfFromModule,
      importsOfVar: importsOfImportedVar
    }
  }

  modifyExistingImport(imports, standaloneImport) {
    var specifiers = arr.flatmap(imports, ({specifiers}) => specifiers || [])
    if (!specifiers.length) return null;

    var [[defaultSpecifier], [normalSpecifier]] =
      arr.partition(specifiers, ({type}) => type === "ImportDefaultSpecifier");

      // defaultSpecifier = arr.partition(imports, ({type}) => type === "ImportDefaultSpecifier")[0][0]
      // normalSpecifier = arr.partition(imports, ({type}) => type === "ImportDefaultSpecifier")[1][0]

    var {intoModuleSource: src, importData: {exported: impName, local: defaultImpName}} = this,
        isDefault = impName === "default";

    // Since this method is only called with imports this should never happen:
    if (isDefault) console.assert(!!normalSpecifier, "no ImportSpecifier found")
    else console.assert(normalSpecifier || defaultSpecifier, "at least one kine of specifier is expected");

    if (isDefault) {
      var pos = src.slice(0, normalSpecifier.start).lastIndexOf("{")-1;
      if (pos < 0) return null;

      var generated = defaultImpName + ",",
          pre = src.slice(0, pos),
          post = src.slice(pos);

      if (!pre.endsWith(" ") || !pre.endsWith("\n")) generated = " " + generated;
      if (!post.startsWith(" ")) generated += " ";

      return {
        status: "modified",
        newSource: `${pre}${generated}${post}`,
        generated,
        standaloneImport,
        importedVarName: defaultImpName,
        from: pos, to: pos + generated.length
      }
    }

    var pos = normalSpecifier ? normalSpecifier.end : defaultSpecifier.end,
        generated = normalSpecifier ? `, ${impName}` : `, { ${impName} }`;

    return {
      status: "modified",
      newSource: `${src.slice(0, pos)}${generated}${src.slice(pos)}`,
      generated,
      standaloneImport,
      importedVarName: impName,
      from: pos, to: pos + generated.length
    };

  }

  insertNewImport(importsOfFromModule, standaloneImport, importedVarName, insertPos = 0) {
    if (importsOfFromModule && importsOfFromModule.length)
      insertPos = arr.last(importsOfFromModule).end;

    var src = this.intoModuleSource,
        pre = src.slice(0, insertPos),
        post = src.slice(insertPos),
        generated = standaloneImport;

    if (pre.length && !pre.endsWith("\n")) generated = "\n" + generated;
    if (post.length && !post.startsWith("\n")) generated += "\n";

    return {
      status: "modified",
      newSource: pre + generated + post,
      generated,
      standaloneImport,
      importedVarName,
      from: insertPos, to: insertPos + generated.length
    };
  }
}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// removing imports from a module
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/*

var src = "import { xxx, yyy } from './src/b.js'; class Foo { m() { return yyy + 1 } }";
var unusedImports = ImportRemover.findUnusedImports(src);
unusedImports // => [{local: "xxx", importStmt: {...}}]



var {changes, removedImports, source} = ImportRemover.removeImports(src, unusedImports)
changes // => [{start: 0, end: 38, replacement: "import { yyy } from './src/b.js';"}]
removedImports // => [{from: "./src/b.js", local: "xxx"}]
source // => "import { yyy } from './src/b.js'; class Foo { m() { return yyy + 1 } }"

// or short:
ImportRemover.removeUnusedImports(src)

*/

export class ImportRemover {

  static removeImports(moduleSource, importsToRemove, optModuleAst) {
    // returns {
    //   source: STRING,
    //   modifications: [{start: NUMBER, end: NUMBER, replacement: STRING}]
    //   removedImports: [{local: STRING, from: STRING}]
    // }

    var parsed = optModuleAst || fuzzyParse(moduleSource);

    // 1.get imports with specifiers
    var imports = arr.flatmap(parsed.body, ea => {
      if (ea.type !== "ImportDeclaration" || !ea.specifiers.length) return [];
      return ea.specifiers.map(spec => ({local: spec.local, importStmt: ea}));
    });

    // 3. figure out what imports need to be removed or changed
    var importsToChange = imports.filter(ea =>
        importsToRemove.some(rem => rem.local === ea.local.name)),
        removedImports = importsToChange.map(ea =>
          ({local: ea.local.name, from: ea.importStmt.source.value})),
        affectedStmts = arr.uniq(importsToChange.map(ea => {
          var specToRemove = ea.importStmt.specifiers.find(spec => ea.local === spec.local);
          arr.remove(ea.importStmt.specifiers, specToRemove);
          return ea.importStmt;
        }));

    // 4. Compute the actual modifications to transform source and also new source itself
    var modifications = affectedStmts.slice().reverse().reduce((state, importStmt) => {
      var {source, changes} = state,
          {start, end, specifiers} = importStmt,
          pre = source.slice(0, start), post = source.slice(end),
          removed = source.slice(start, end),
          replacement = !specifiers.length ? "" : stringify(importStmt);

      if (replacement && replacement.includes("\n") && !removed.includes("\n"))
        replacement = replacement.replace(/\s+/g, " ");

      source = pre + replacement + post;
      changes = changes.concat({replacement, start, end});
      return {source, changes};
    }, {source: moduleSource, changes: []});

    return {...modifications, removedImports};
  }

  static findUnusedImports(moduleSourceOrAst) {
    // get all var references of source without those included in the import
    // statments

    // 1.get imports with specifiers
    var parsed = typeof moduleSourceOrAst === "string" ?
      fuzzyParse(moduleSourceOrAst) : moduleSourceOrAst;

    var imports = arr.flatmap(parsed.body, ea => {
          if (ea.type !== "ImportDeclaration" || !ea.specifiers.length) return [];
          return ea.specifiers.map(spec =>
            ({local: spec.local, from: ea.source ? ea.source.value : "", importStmt: ea}));
        }),
        importIdentifiers = imports.map(ea => ea.local)

    var scope = query.resolveReferences(query.scopes(parsed)),
        refsWithoutImports = Array.from(scope.resolvedRefMap.keys()).filter(ea =>
                                !importIdentifiers.includes(ea)),
        realRefs = arr.uniq(refsWithoutImports.map(ea => ea.name));

    return imports
      .filter(ea => !realRefs.includes(ea.local.name))
      .map(ea => ({...ea, local: ea.local.name}))
  }

  static removeUnusedImports(moduleSource) {
    var parsed = fuzzyParse(moduleSource);
    return this.removeImports(moduleSource, this.findUnusedImports(parsed), parsed);
  }
}
