System.register(["./__root_module__-3d4e820f.js","kld-intersections"],function(ra){var kb,zb,Sb,Mb,Fd,Jc,wd,Kc,Fc,Wc,hd,Id,nd,Xc,Na;return{setters:[function(nb){kb=nb.s;zb=nb.P;Sb=nb.a6;Mb=nb.p;Fd=nb.bF;Jc=nb.D;wd=nb.bG;Kc=nb.r;Fc=nb.aS;Wc=nb.bH;hd=nb.bI;Id=nb.bJ;nd=nb.bK;Xc=nb.bL;Na=nb.n},function(){}],execute:function(){function nb(Hb,Ub,vb,kc){kc=void 0===kc?{}:kc;kc=kc.package||Wb.ObjectPackage.lookupPackageForObject(Hb,kc);if(!kc)throw Error("Object is not part of an object package: "+Hb);
return kc.addScript(Hb,Ub,vb)}function Pb(Hb,Ub){Ub=Wb.normalizeOptions(Ub).System;Hb=(Hb=Hb[Symbol.for("lively-module-meta")])?Hb.package.name:null;return(Ub=(Hb?Wb.lookupPackage(Ub,Hb):{}).pkg)?!!Wb.ObjectPackage.forSystemPackage(Ub):!1}ra({addScript:nb,isObjectClass:Pb});var Wb=lively.FreezerRuntime.recorderFor("lively.classes/object-classes.js");Wb.normalizeOptions=function(Hb){Hb=Object.assign({baseURL:Wb.defaultBaseURL,System:System},Hb);Hb.baseURL=Hb.baseURL.replace(/\/$/,"");return Hb};Wb.addScript=
nb;Wb.isObjectClass=Pb;Wb.string=kb;Wb.Path=zb;Wb.arr=Sb;Wb.parse=Mb;Wb.isValidIdentifier=Fd;Wb.stringify=Jc;Wb.parseFunction=wd;Wb.resource=Kc;Wb.runEval=Fc;Wb.scripting=Wc;Wb.ExportLookup=hd;var Pc=Wb.scripting;Wb.ensurePackage=Pc.ensurePackage;Wb.registerPackage=Pc.registerPackage;Wb.importPackage=Pc.importPackage;Wb.lookupPackage=Pc.lookupPackage;Wb.module=Pc.module;Wb.ImportInjector=Pc.ImportInjector;Wb.RuntimeSourceDescriptor=Id;Wb.toJsIdentifier=nd;Wb.adoptObject=Xc;Wb.classToFunctionTransform=
Na;Wb.objectPackageSym=Symbol.for("lively-object-package-data");Wb.defaultBaseURL="local://lively-object-modules";Wb.globalClasses=Object.keys(System.global).map(function(Hb){Hb=System.global[Hb];return"function"===typeof Hb&&Hb.name&&Hb}).filter(Boolean);Wb.addScript=nb;Wb.addScript=nb;Wb.isObjectClass=Pb;Wb.isObjectClass=Pb;Wb._packageStore=Wb._packageStore||{};Pc=function(Hb,Ub){this._id=Hb;this.options=Wb.normalizeOptions(Ub)};Pc.lookupPackageForObject=function(Hb,Ub){return this.lookupPackageForClass(Hb.constructor,
Ub)};Pc.lookupPackageForClass=function(Hb,Ub){Ub=Wb.normalizeOptions(Ub).System;Hb=(Hb=Hb[Symbol.for("lively-module-meta")])?Hb.package.name:null;return(Ub=(Hb?Wb.lookupPackage(Ub,Hb):{}).pkg)?Wb.ObjectPackage.forSystemPackage(Ub):null};Pc.forSystemPackage=function(Hb){return this.packageStore[Hb.name]};Pc.withId=function(Hb,Ub){return this.packageStore[Hb]||(this.packageStore[Hb]=new this(Hb,Ub))};Pc.prototype.resource=function(Hb){Hb=void 0===Hb?"":Hb;return Wb.resource(this.packageURL).join(Hb)};
Pc.prototype.load=function(){return Wb.importPackage(this.System,this.packageURL)};Pc.prototype.ensureExistance=function(){var Hb=this,Ub,vb,kc,xc,Dc,Gb,$a,dc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(oc){switch(oc.nextAddress){case 1:return Ub=Hb.resource("/"),oc.yield(Ub.exists(),2);case 2:if(oc.yieldResult)return oc.return();vb=[{resource:Ub}];kc=[{resource:Hb.resource("package.json"),content:JSON.stringify(Hb.config,null,2)}];return oc.yield(Promise.all(vb.map(function(sa){return sa.resource.mkdir()})),
3);case 3:return oc.yield(Promise.all(kc.map(function(sa){var Ca;return $jscomp.asyncExecutePromiseGeneratorProgram(function(bb){switch(bb.nextAddress){case 1:return bb.yield(sa.resource.exists(),2);case 2:if(!(Ca=!bb.yieldResult)){bb.jumpTo(3);break}return bb.yield(sa.resource.write(sa.content),4);case 4:Ca=bb.yieldResult;case 3:return bb.return(Ca)}})})),4);case 4:return oc.yield(Hb.objectModule.ensureExistance(),5);case 5:return xc=Hb,Dc=xc.System,Gb=xc.packageURL,$a=xc.config,oc.yield(Wb.ensurePackage(Dc,
Gb),6);case 6:return dc=oc.yieldResult,dc.registerWithConfig($a),console.log(Hb.packageURL+" REGISTERED"),oc.return(Hb)}})};Pc.prototype.ensureObjectClass=function(Hb){var Ub=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(vb){return 1==vb.nextAddress?vb.yield(Ub.ensureExistance(),2):vb.return(Ub.objectModule.ensureObjectClass(Hb))})};Pc.prototype.adoptObject=function(Hb){var Ub=this,vb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(kc){if(1==kc.nextAddress)return Ub.objectClass===
Hb.constructor?kc.return():kc.yield(Ub.ensureObjectClass(Hb.constructor),2);vb=kc.yieldResult;Wb.adoptObject(Hb,vb);kc.jumpToEnd()})};Pc.prototype.addScript=function(Hb,Ub,vb){return this.objectModule.addScript(Hb,Ub,vb)};Pc.prototype.remove=function(){this.systemPackage.remove();delete Wb.ObjectPackage.packageStore[this.id];return this.resource().remove()};Pc.prototype.renameObjectClass=function(Hb,Ub){Ub=void 0===Ub?[]:Ub;var vb=this,kc,xc,Dc,Gb,$a,dc,oc,sa,Ca,bb,rb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(qb){if(1==
qb.nextAddress){kc=vb;xc=kc.objectClass;Dc=kc.System;if(!xc||xc[Symbol.for("__LivelyClassName__")]===Hb)return qb.return(xc);if(!Wb.isValidIdentifier(Hb))throw Error(Hb+" is not a valid name for a class");$a=Gb=Wb.RuntimeSourceDescriptor.for(xc,Dc);dc=$a.source;oc=$a.ast;sa=oc.id;Ca=sa.start;bb=sa.end;return qb.yield(Gb.changeSource(dc.slice(0,Ca)+Hb+dc.slice(bb)),2)}rb=vb.objectClass;Ub.forEach(function(Sa){Sa.constructor=rb;Sa.__proto__=rb.prototype});return qb.return(rb)})};Pc.prototype.fork=function(Hb,
Ub){var vb=this,kc,xc,Dc,Gb,$a,dc,oc,sa,Ca,bb,rb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(qb){switch(qb.nextAddress){case 1:return kc=vb,xc=kc.System,Dc=kc.baseURL,Gb=kc.objectClass,Ub=Object.assign({System:xc,baseURL:Dc},Ub),$a=Wb.RuntimeSourceDescriptor.for(Gb),dc=$a._renamedSource(Hb),oc=dc.moduleSource,sa=Wb.ObjectPackage.withId(Hb,Ub),qb.yield(sa.ensureExistance(),2);case 2:return Ca=sa,bb=Ca.objectModule,rb=bb.systemModule,qb.yield(rb.load({format:"esm"}),3);case 3:return qb.yield(rb.changeSource(oc),
4);case 4:return qb.return(sa)}})};$jscomp.global.Object.defineProperties(Pc.prototype,{id:{configurable:!0,enumerable:!0,get:function(){return this._id}},name:{configurable:!0,enumerable:!0,get:function(){return this.id}},System:{configurable:!0,enumerable:!0,get:function(){return this.options.System}},baseURL:{configurable:!0,enumerable:!0,get:function(){return this.options.baseURL}},packageURL:{configurable:!0,enumerable:!0,get:function(){return this.baseURL+("/"+this.id)}},config:{configurable:!0,
enumerable:!0,get:function(){return{name:this.name,version:"0.1.0",lively:{isObjectPackage:!0}}}},systemPackage:{configurable:!0,enumerable:!0,get:function(){return Wb.lookupPackage(this.System,this.packageURL,!0).pkg}},objectModule:{configurable:!0,enumerable:!0,get:function(){return this._objectModule||(this._objectModule=new Wb.ObjectModule("index.js",this))}},objectClass:{configurable:!0,enumerable:!0,get:function(){return this.objectModule.objectClass}}});$jscomp.global.Object.defineProperties(Pc,
{packageStore:{configurable:!0,enumerable:!0,get:function(){return this._packageStore||(this._packageStore=Wb._packageStore)}}});ra("default",Pc);Wb.ObjectPackage=Pc;var Bd=function(Hb,Ub){if(!Hb)throw Error("ObjectModule needs package!");if(!Ub)throw Error("ObjectModule needs package!");this._moduleName=Hb;this._objectPackage=Ub};Bd.prototype.read=function(){return this.resource.read()};Bd.prototype.write=function(Hb){return this.resource.write(Hb)};Bd.prototype.ensureExistance=function(){var Hb=
this,Ub,vb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(kc){switch(kc.nextAddress){case 1:return Ub=Hb.resource,kc.yield(Ub.exists(),2);case 2:if(kc.yieldResult){kc.jumpTo(3);break}return kc.yield(Ub.write("'format esm';\n"),4);case 4:vb={},Hb.System.config({meta:(vb[Hb.url]={format:"esm"},vb)});case 3:return kc.return(Hb)}})};Bd.prototype.ensureObjectClass=function(Hb){var Ub=this,vb=this.objectClass;return vb&&vb.prototype.__proto__===Hb.prototype?vb:Promise.resolve(this.ensureObjectClassSource(Hb)).then(function(kc){var xc=
kc.source,Dc=kc.moduleId,Gb=kc.className,$a=kc.bindings,dc=Ub.System;kc=Wb.module(dc,Dc);if($a)for(var oc in $a)kc.define(oc,$a[oc]);xc=Wb.runEval(xc,{classTransform:Wb.classToFunctionTransform,sync:!0,targetModule:Dc,System:dc});if(xc.isError)throw xc.value;xc=kc.recorder[Gb];if(!xc)throw Error("Failed to define class "+Gb+" in "+Dc);return xc})};Bd.prototype.ensureObjectClassSource=function(Hb){return this.createDefaultClassDeclaration(Hb)};Bd.prototype.createDefaultClassDeclaration=function(Hb){Hb=
void 0===Hb?Object:Hb;var Ub=this,vb,kc,xc,Dc,Gb,$a,dc,oc,sa,Ca,bb,rb,qb,Sa,Ta,sb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Zb){switch(Zb.nextAddress){case 1:vb=Ub;kc=vb.System;xc=vb.systemModule;Dc=vb.objectPackage;Gb=Wb.string.capitalize(Wb.toJsIdentifier(Dc.id));$a=Hb[Symbol.for("__LivelyClassName__")];dc=!$a;oc=Wb.globalClasses.includes(Hb);sa="";Ca=null;if(dc){$a="__anonymous_superclass__";bb={};Ca=(bb[$a]=Hb,bb);Zb.jumpTo(2);break}if(oc){Zb.jumpTo(2);break}return Zb.yield(Wb.ExportLookup.findExportOfValue(Hb,
kc),4);case 4:(rb=Zb.yieldResult)?(qb=Wb.ImportInjector.run(kc,xc.id,xc.package(),"",rb),Sa=qb.standaloneImport,sa+=Sa+"\n\n"):(Ta={},Ca=(Ta[$a]=Hb,Ta));case 2:return Gb===$a&&(Gb="Object"+Gb),sb="Object"===$a?"class "+Gb+" {}\n":"class "+Gb+" extends "+$a+" {}\n",sa+="export default "+sb+"\n",Zb.yield(xc.changeSource(sa),5);case 5:return Zb.yield(xc.load(),6);case 6:return Zb.return({source:sa,className:Gb,moduleId:Ub.url,bindings:Ca})}})};Bd.prototype.addScript=function(Hb,Ub,vb){var kc=this,xc,
Dc,Gb,$a,dc,oc,sa,Ca,bb,rb,qb,Sa,Ta,sb,Zb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(rc){switch(rc.nextAddress){case 1:if(Hb.constructor===kc.objectClass){xc=Hb.constructor;rc.jumpTo(2);break}return rc.yield(kc.ensureObjectClass(Hb.constructor),3);case 3:xc=rc.yieldResult;case 2:Dc=xc;Gb="function"===typeof Ub?String(Ub):Ub;$a=Wb.parseFunction(Gb);dc=Wb.RuntimeSourceDescriptor.for(Dc,kc.System);vb||(vb=Wb.Path("id.name").get($a));if(!vb)throw Error("No name, cannot add "+Wb.string.truncate(Gb,
30).replace(/\n/g,"")+"!");oc=Wb.toJsIdentifier(vb);console.assert("FunctionExpression"===$a.type||"ArrowFunctionExpression"===$a.type,"not a function expression but: "+$a.type);sa=$a.params.map(function(Xb){return Gb.slice(Xb.start,Xb.end)});Ca="BlockStatement"===$a.body.type?Gb.slice($a.body.start,$a.body.end):"{ return "+Gb.slice($a.body.start,$a.body.end)+" }";bb=oc+"("+sa.join(",")+") "+Ca;"ArrowFunctionExpression"===$a.type&&($a.type="FunctionExpression");rb=dc.source;qb=dc.ast;if(!qb)throw Error("cannot find class decl of "+
dc.module.id);(Sa=qb.body.body.find(function(Xb){return Xb.key.name===oc&&!Xb.static}))?rb=rb.slice(0,Sa.start)+bb+rb.slice(Sa.end):(Ta=rb.lastIndexOf("}"),sb=rb.slice(0,Ta),Zb=rb.slice(Ta),/\n\s*$/m.test(sb)||(sb+="\n"),bb=Wb.string.changeIndent(bb,"  ",1),/^[ ]*\n/m.test(Zb)||(Zb="\n"+Zb),rb=sb+bb+Zb);return rc.yield(dc.changeSource(rb),4);case 4:return rc.return({script:Dc.prototype[oc],klass:Dc,module:dc.module.id,methodName:oc})}})};$jscomp.global.Object.defineProperties(Bd.prototype,{objectPackage:{configurable:!0,
enumerable:!0,get:function(){return this._objectPackage}},objectClass:{configurable:!0,enumerable:!0,get:function(){var Hb=this.systemModule;return Hb.isLoaded()?Hb.System.get(Hb.id).default:null}},moduleName:{configurable:!0,enumerable:!0,get:function(){return this._moduleName}},systemModule:{configurable:!0,enumerable:!0,get:function(){return Wb.module(this.System,this.url)}},System:{configurable:!0,enumerable:!0,get:function(){return this.objectPackage.System}},resource:{configurable:!0,enumerable:!0,
get:function(){return this.objectPackage.resource(this.moduleName)}},url:{configurable:!0,enumerable:!0,get:function(){return this.resource.url}}});Wb.ObjectModule=Bd;Wb.default=Pc}}});