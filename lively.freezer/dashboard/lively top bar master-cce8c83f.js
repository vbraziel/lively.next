System.register("./__root_module__-5a58cfed.js kld-intersections ./user-ui-f14b43d5.js ./editor-plugin-cfb50052.js ./index-ce89c89c.js ./index-dcbaecb9.js ./index-5d42aa65.js".split(" "),function(Ca,Cb){var Vb,lc,gc,fe,fd,Zd,id,Uc;return{setters:[function(Ad){Vb=Ad.ag;lc=Ad.am;gc=Ad.a1;fe=Ad.C;fd=Ad.a4;Zd=Ad.L;id=Ad.r;Uc=Ad.aq},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var Ad=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");Ad.Morph=
Vb;Ad.Icon=lc;Ad.pt=gc;Ad.Color=fe;Ad.arr=fd;Ad.LoadingIndicator=Zd;Ad.resource=id;var Nd=function(ee){var Ud=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),kd=Ud.hasOwnProperty("LivelyTopBar")&&"function"===typeof Ud.LivelyTopBar?Ud.LivelyTopBar:Ud.LivelyTopBar=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Uc(kd,ee,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode=
"Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var cb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Fb){if(1==Fb.nextAddress)return cb.isComponent?Fb.return():Fb.yield(cb.whenRendered(),2);document.body.style.background="black";cb.setEditMode("Halo");cb.getSubmorphNamed("fast load toggler").refresh();Fb.jumpToEnd()})}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=Ad.pt(0,0));var cb=
this.getSubmorphNamed("user flap");this.get("ipad status bar").width=this.width;cb.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var cb=this;return Object.entries(this.shapeToIcon).map(function(Fb){Fb=$jscomp.makeIterator(Fb);var vc=Fb.next().value,pc=Fb.next().value;Fb=pc.shortcut;pc=pc.args;return[[].concat($jscomp.arrayFromIterable(cb.currentShapeMode===vc?[].concat($jscomp.arrayFromIterable(Ad.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),
$jscomp.arrayFromIterable(Ad.Icon.textAttribute.apply(Ad.Icon,$jscomp.arrayFromIterable(pc))),["   "+vc+" ",{float:"none"},"      "+Fb,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){cb.currentShapeMode=vc;cb.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var cb=this;return Object.entries(this.sideBarToIcon).map(function(Fb){Fb=$jscomp.makeIterator(Fb);var vc=Fb.next().value;Fb=Fb.next().value.args;return[[].concat($jscomp.arrayFromIterable(cb.activeSideBars.includes(vc)?
[].concat($jscomp.arrayFromIterable(Ad.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Ad.Icon.textAttribute.apply(Ad.Icon,$jscomp.arrayFromIterable(Fb))),["   "+vc+" ",{float:"none"}]),function(){return cb.openSideBar(vc)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",
value:function(cb){"Hand"==this._currentEditMode&&this.setEditMode("Hand",!0)}},{key:"onKeyDown",value:function(cb){Uc._get(Object.getPrototypeOf(kd.prototype),"onKeyDown",this).call(this,cb);if(cb.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!cb.isAltDown()){var Fb={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(cb.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=
Fb[cb.key];this.setEditMode("Shape");break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(cb){var Fb=this,vc,pc,sd,pd,tc,bd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Xb){switch(Xb.nextAddress){case 1:Fb.activeSideBars.includes(cb)?Ad.arr.remove(Fb.activeSideBars,cb):Fb.activeSideBars.push(cb);if("Scene Graph"!=cb){Xb.jumpTo(2);break}if(Fb.sideBar){Xb.jumpTo(3);break}vc=Ad.LoadingIndicator.open("loading side bar");pc=Fb;return Xb.yield(Cb.import("./scene graph side bar master-e157c50e.js"),
5);case 5:if(!(sd=Xb.yieldResult)){Xb.jumpTo(6);break}return Xb.yield(Ad.resource("part://SystemIDE/scene graph side bar master"),7);case 7:sd=Xb.yieldResult;case 6:return Xb.yield(sd.read(),4);case 4:return pc.sideBar=Xb.yieldResult,Fb.sideBar.hasFixedPosition=!0,Fb.sideBar.openInWorld(),Fb.sideBar.right=0,Xb.yield(Fb.sideBar.whenRendered(),8);case 8:vc.remove();case 3:Fb.sideBar.toggle(Fb.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=cb){Xb.jumpTo(0);break}if(Fb.stylingPalette){Xb.jumpTo(10);
break}pd=Ad.LoadingIndicator.open("loading side bar");tc=Fb;return Xb.yield(Cb.import("./styling side bar master-6094d60f.js"),12);case 12:if(!(bd=Xb.yieldResult)){Xb.jumpTo(13);break}return Xb.yield(Ad.resource("part://SystemIDE/styling side bar master"),14);case 14:bd=Xb.yieldResult;case 13:return Xb.yield(bd.read(),11);case 11:return tc.stylingPalette=Xb.yieldResult,Fb.stylingPalette.hasFixedPosition=!0,Fb.stylingPalette.openInWorld(),Fb.stylingPalette.left=Fb.world().right,Xb.yield(Fb.stylingPalette.whenRendered(),
15);case 15:pd.remove();case 10:Fb.stylingPalette.toggle(Fb.activeSideBars.includes("Styling Palette")),Xb.jumpToEnd()}})}},{key:"onMouseDown",value:function(cb){var Fb=this.get("select shape type"),vc=this.get("shape mode button"),pc=this.get("side bar selector");cb.targetMorph==Fb&&(this.world().openWorldMenu(cb,this.getShapeMenuItems()).position=vc.globalBounds().bottomLeft().subPt(this.world().scroll));cb.targetMorph==vc&&this.setEditMode("Shape");"text mode button"==cb.targetMorph.name&&this.setEditMode("Text");
"hand mode button"==cb.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==cb.targetMorph.name&&this.setEditMode("Halo");"open component browser"==cb.targetMorph.name&&this.interactivelyLoadComponent();cb.targetMorph==pc&&(this.world().openWorldMenu(cb,this.getSideBarMenuItems()).position=pc.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var cb=this,Fb,vc,pc,sd,pd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(tc){if(1==
tc.nextAddress)return Fb=cb.get("open component browser"),vc=cb.get("user flap"),pc=vc.haloShadow,sd=vc.haloColor,pd=Ad.Color.rgb(102,102,102),Fb.fontColor=sd,Fb.dropShadow=pc,tc.yield(cb.world().execCommand("browse and load component"),2);Fb.dropShadow=!1;Fb.fontColor=pd;tc.jumpToEnd()})}},{key:"setEditMode",value:function(cb,Fb){var vc=this;Fb=void 0===Fb?!1:Fb;var pc=this.get("user flap"),sd=pc.haloShadow,pd=pc.haloColor,tc=Ad.Color.rgb(102,102,102);Fb||(this._currentEditMode=cb);Fb=this.get("shape mode button");
pc=this.get("text mode button");var bd=this.get("hand mode button"),Xb=this.get("halo mode button");[["Shape",Fb.submorphs],["Text",[pc]],["Hand",[bd]],["Halo",[Xb]]].forEach(function(Tb){var Oc=$jscomp.makeIterator(Tb);Tb=Oc.next().value;Oc=Oc.next().value;"Shape"==cb?vc.world().toggleShapeMode(!0,vc.currentShapeMode):"Text"==cb?vc.world().toggleShapeMode(!0,"Text"):vc.world().toggleShapeMode(!1);vc.world().showHaloPreviews("Halo"==cb);Tb==cb?Oc.forEach(function(td){td.dropShadow=sd;td.fontColor=
pd}):Oc.forEach(function(td){td.dropShadow=null;td.fontColor=tc})})}}],[{key:"className",get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],set:function(cb){this.setProperty("currentShapeMode",cb);this.get("shape status icon").textAndAttributes=Ad.Icon.textAttribute(this.shapeToIcon[cb].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",
{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",
{paddingTop:"1px"}]},HTML:{shortcut:"H",args:["code",{paddingTop:"1px"}]}}}}}}}],Ud,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-151"}}},{start:328,end:9061})}(Ad.Morph);Nd=Ad.LivelyTopBar;Ad.default=Nd}}});