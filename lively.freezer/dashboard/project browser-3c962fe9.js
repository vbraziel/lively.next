System.register(["./__root_module__-dce2a509.js","kld-intersections","./index-7c60e27b.js","./index-0a258dcd.js","./user-ui-2b4d12a6.js"],function(Ba,zb){var Ib,nc,bc,Sd,Vc,Ud,Yc,Oc,qd,ie,Ye,sf,ne,cc,Hc,Md,fc,$d,pe;return{setters:[function(Cc){Ib=Cc.an;nc=Cc.aD;bc=Cc.ap;Sd=Cc.ab;Vc=Cc.Y;Ud=Cc.a6;Yc=Cc.ax;Oc=Cc.a7;qd=Cc.C;ie=Cc.a3;Ye=Cc.r;sf=Cc.aw;ne=Cc.aC;cc=Cc.b2;Hc=Cc.b3;Md=Cc.au;fc=Cc.b0;$d=Cc.aZ},function(){},function(){},function(){},function(Cc){pe=Cc.UserUI}],execute:function(){var Cc=
lively.FreezerRuntime.recorderFor("WorldDashboard/index.js");Cc.Morph=Ib;Cc.HorizontalLayout=nc;Cc.VerticalLayout=bc;Cc.morph=Sd;Cc.MorphicDB=Vc;Cc.arr=Ud;Cc.fun=Yc;Cc.string=Oc;Cc.Color=qd;Cc.pt=ie;Cc.UserUI=pe;Cc.resource=Ye;var Ic=function(dd){var Jd=lively.FreezerRuntime.recorderFor("WorldDashboard/index.js"),Kd=Jd.hasOwnProperty("WorldDashboard")&&"function"===typeof Jd.WorldDashboard?Jd.WorldDashboard:Jd.WorldDashboard=function(Hb){Hb&&Hb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return sf(Kd,dd,[{key:"focus",value:function(){this.ui.searchField.focus()}},{key:"update",value:function(){this.displayWorlds()}},{key:"beforePublish",value:function(){this.reset()}},{key:"reset",value:function(){this.ui.worldList.items=[];this.ui.noWorldWarning.visible=!1}},{key:"relayout",value:function(){this.alignInWorld()}},{key:"alignInWorld",value:function(Hb){Hb=void 0===Hb?$world:Hb;this.owner!=Hb&&Hb.addMorph(this);this.center=Hb.visibleBounds().center()}},{key:"sortAndFilterPreviews",
value:function(Hb){var Bb=Cc.UserUI.getCurrentUser();Hb=this.ui.searchField.fuzzyFilter(Hb,function(Mb){return Mb._commit.name+Mb._commit.description});switch(this.ui.sortSelector.selection){case "RECENT":return Cc.arr.sortBy(Hb,function(Mb){return-Mb._commit.timestamp});case "TEMPLATES":return Hb;case "MY PROJECTS":return Cc.arr.filter(Hb,function(Mb){return Mb._commit.author.name===Bb.name});case "PUBLISHED":return Hb}}},{key:"updateList",value:function(){var Hb=this;this.previews&&Cc.fun.debounceNamed("update world list",
150,function(){Hb.ui.worldList.items=Hb.sortAndFilterPreviews(Hb.previews)})()}},{key:"displayWorlds",value:function(){var Hb=this,Bb,Mb,Na,Ua,Oa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ia){switch(Ia.nextAddress){case 1:return Hb.reset(),Bb=Hb.ui,Mb=Bb.loadingLabel,Mb.animate({opacity:1,duration:300}),Ia.yield(Hb.db.latestCommits("world"),2);case 2:return Na=Ia.yieldResult,Ia.yield(zb.import("./world preview-5f82bb0d.js"),4);case 4:if(!(Ua=Ia.yieldResult)){Ia.jumpTo(5);break}return Ia.yield(Cc.resource("part://partial freezing/world preview"),
6);case 6:Ua=Ia.yieldResult;case 5:return Ia.yield(Ua.read(),3);case 3:return Oa=Ia.yieldResult,Hb.previews=Na.map(function(eb){var cb=Cc.morph({reactsToPointer:!1,fill:Cc.Color.transparent,extent:Oa.extent});cb._commit=eb;cb.displayPreview=function(){var ob;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Zb){if(1==Zb.nextAddress)return ob=Oa.copy(),ob._commit=eb,ob.opacity=0,cb.addMorph(ob),ob.displayPreview(),ob.position=Cc.pt(0,0),Zb.yield(cb.whenRendered(),2);cb.layout=new Cc.HorizontalLayout({autoResize:!0,
reactToSubmorphAnimations:!0});Zb.jumpToEnd()})};return cb}),Ia.yield(Mb.animate({opacity:0,duration:300}),7);case 7:Hb.updateList(),0==Na.length&&(Hb.ui.noWorldWarning.center=Hb.innerBounds().center(),Hb.ui.noWorldWarning.animate({visible:!0,duration:300})),Ia.jumpToEnd()}})}},{key:"createNewProject",value:function(){document.location="/worlds/load?name=__newWorld__"}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"WorldDashboard"}},{key:"properties",get:function(){return{showCloseButton:{derived:!0,
get:function(){return this.ui.closeButton.visible},set:function(Hb){this.ui.closeButton.visible=Hb}},db:{serialize:!1,get:function(){return Cc.MorphicDB.default}},ui:{derived:!0,get:function(){return{worldList:this.getSubmorphNamed("world list"),sortSelector:this.getSubmorphNamed("search selector"),searchField:this.getSubmorphNamed("search field"),closeButton:this.getSubmorphNamed("close button"),loadingLabel:this.getSubmorphNamed("loading label"),noWorldWarning:this.getSubmorphNamed("no world warning")}}}}}}],
Jd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"WorldDashboard",version:"0.1.1-127"}}},{start:330,end:3954})}(Cc.Morph);Ic=Cc.WorldDashboard;Cc.default=Ic;var Sb=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js");Sb.Morph=Ib;Sb.touchInputDevice=ne;Sb.TilingLayout=cc;Sb.arr=Ud;Sb.pt=ie;Ic=function(dd){var Jd=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js"),
Kd=Jd.hasOwnProperty("GrowingWorldList")&&"function"===typeof Jd.GrowingWorldList?Jd.GrowingWorldList:Jd.GrowingWorldList=function(Hb){Hb&&Hb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return sf(Kd,dd,[{key:"onLoad",value:function(){this.clipMode="auto"}},{key:"onScroll",value:function(Hb){sf._get(Object.getPrototypeOf(Kd.prototype),"onScroll",this).call(this,Hb);this.update()}},{key:"onChange",value:function(Hb){sf._get(Object.getPrototypeOf(Kd.prototype),
"onChange",this).call(this,Hb);"extent"==Hb.prop&&this.update(!0)}},{key:"onHoverIn",value:function(Hb){this.clipMode="auto"}},{key:"onHoverOut",value:function(Hb){Sb.touchInputDevice||(this.clipMode="hidden")}},{key:"update",value:function(Hb){var Bb=this.items;if(Bb&&0!=Bb.length){var Mb=this.scrollContainer,Na=Mb.layout.spacing;Mb.extent=this.extent;var Ua=this.ui,Oa=Ua.bufferTop;Ua=Ua.bufferBottom;Oa=Oa||Mb.addMorph({fill:null,name:"buffer top",height:10});Ua=Ua||Mb.addMorph({fill:null,name:"buffer bottom",
height:10});Oa.width=Ua.width=this.width-100;Mb.layout.disable();var Ia=Bb[0];Na=Bb.slice(0,Math.floor(this.width/(Ia.width+Na))*(Math.ceil((this.scroll.y+this.height)/(Ia.height+Na))+1)).filter(function(Zb){return Zb.owner!=Mb});Ia=this.scroll.y+2*this.height;for(var eb={},cb=$jscomp.makeIterator(Na),ob=cb.next();!ob.done;eb={$jscomp$loop$prop$item$2572:eb.$jscomp$loop$prop$item$2572},ob=cb.next())eb.$jscomp$loop$prop$item$2572=ob.value,Ia++,eb.$jscomp$loop$prop$item$2572.top=Ia,Mb.addMorph(eb.$jscomp$loop$prop$item$2572),
eb.$jscomp$loop$prop$item$2572._initialized||eb.$jscomp$loop$prop$item$2572.whenRendered().then(function(Zb){return function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(mc){Zb.$jscomp$loop$prop$item$2572._initialized=!0;return mc.yield(Zb.$jscomp$loop$prop$item$2572.displayPreview(),0)})}}(eb));Hb&&(Oa.position=Sb.pt(0,0),Bb.forEach(function(Zb,mc){return Zb.position=Sb.pt(mc+1,mc+1)}),Ua.position=Sb.pt(Bb.length+2,Bb.length+2));Mb.layout.enable();if(Hb||0<Na.length)Ua.top=this.submorphBounds().height,
Mb.layout.apply()}}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"GrowingWorldList"}},{key:"properties",get:function(){return{scrollContainer:{get:function(){return this.getSubmorphNamed("scroll container")||this.addMorph({name:"scroll container",fill:null,reactsToPointer:!1,renderOnGPU:!0,layout:new Sb.TilingLayout({spacing:25,align:"center",autoResize:!0})})}},ui:{get:function(){return{bufferTop:this.getSubmorphNamed("buffer top"),bufferBottom:this.getSubmorphNamed("buffer bottom")}}},
items:{after:["layout","scrollContainer"],set:function(Hb){this.setProperty("items",Hb);var Bb=this.scrollContainer;Bb.layout&&Bb.layout.disable();var Mb=this.ui,Na=Mb.bufferTop;Mb=Mb.bufferBottom;Sb.arr.withoutAll(Bb.submorphs,[].concat($jscomp.arrayFromIterable(Hb),[Na,Mb])).forEach(function(Ua){return Ua.remove()});this.update(!0)}}}}}],Jd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"GrowingWorldList",version:"0.1.1-32"}}},{start:179,end:3777})}(Sb.Morph);Ic=Sb.GrowingWorldList;Sb.default=Ic;var Jc=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js");Jc.InputLine=Hc;Jc.Color=qd;Jc.connect=Md;Jc.disconnectAll=fc;Jc.disconnect=$d;Jc.arr=Ud;Jc.string=Oc;Ic=function(dd){var Jd=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js"),Kd=Jd.hasOwnProperty("SearchInputLine")&&"function"===typeof Jd.SearchInputLine?Jd.SearchInputLine:Jd.SearchInputLine=
function(Hb){Hb&&Hb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return sf(Kd,dd,[{key:"fuzzyMatch",value:function(Hb,Bb){Bb=void 0===Bb?this.parseInput():Bb;if(Bb.lowercasedTokens.every(function(Na){return Hb.toLowerCase().includes(Na)}))return!0;var Mb=Hb.toLowerCase();return 3>=Jc.arr.sum(Bb.lowercasedTokens.map(function(Na){return Jc.string.levenshtein(Mb,Na)}))}},{key:"fuzzyFilter",value:function(Hb,Bb){var Mb=this;Bb=void 0===
Bb?function(Ua){return Ua}:Bb;var Na=this.parseInput();return Jc.arr.filter(Hb,function(Ua){return Mb.fuzzyMatch(Bb(Ua),Na)})}},{key:"parseInput",value:function(){var Hb=Array.from(this.textString).reduce(function(Mb,Na){if("\\"===Na&&!Mb.escaped)return Mb.escaped=!0,Mb;" "!==Na||Mb.escaped?(Mb.spaceSeen=!1,Mb.current+=Na):(!Mb.spaceSeen&&Mb.current&&(Mb.tokens.push(Mb.current),Mb.current=""),Mb.spaceSeen=!0);Mb.escaped=!1;return Mb},{tokens:[],current:"",escaped:!1,spaceSeen:!1});Hb.current&&Hb.tokens.push(Hb.current);
var Bb=Hb.tokens.map(function(Mb){return Mb.toLowerCase()});return{tokens:Hb.tokens,lowercasedTokens:Bb}}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"SearchInputLine"}}],Jd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"SearchInputLine",version:"0.1.1-4"}}},{start:239,end:1834})}(Jc.InputLine);Ic=Jc.SearchInputLine;
Jc.default=Ic}}});