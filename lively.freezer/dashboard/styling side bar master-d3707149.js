System.register("./__root_module__-dce2a509.js kld-intersections ./index-7c60e27b.js ./index-0a258dcd.js ./index-133ff6c6.js ./color-picker-fd77b442.js ./index-50622fee.js".split(" "),function(){var Ba,zb,Ib,nc,bc,Sd,Vc,Ud,Yc,Oc,qd,ie,Ye,sf,ne,cc,Hc,Md,fc,$d,pe,Cc;return{setters:[function(Ic){Ba=Ic.an;zb=Ic.aC;Ib=Ic.ab;nc=Ic.as;bc=Ic.aa;Sd=Ic.a3;Vc=Ic.C;Ud=Ic.ax;Yc=Ic.au;Oc=Ic.bq;qd=Ic.aw;ie=Ic.a8;Ye=Ic.a7;sf=Ic.bR;ne=Ic.aj;cc=Ic.av;Hc=Ic.r;Md=Ic.a6;fc=Ic.P;$d=Ic.bU;pe=Ic.bV},function(){},function(){},
function(){},function(){},function(Ic){Cc=Ic.S},function(){}],execute:function(){var Ic=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js");Ic.Morph=Ba;Ic.touchInputDevice=zb;Ic.morph=Ib;Ic.Icon=nc;Ic.easings=bc;Ic.pt=Sd;Ic.Color=Vc;Ic.fun=Ud;Ic.connect=Yc;Ic.TreeData=Oc;var Sb=function(Hb){var Bb=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),Mb=Bb.hasOwnProperty("SettingsTree")&&"function"===typeof Bb.SettingsTree?Bb.SettingsTree:Bb.SettingsTree=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return qd(Mb,Hb,[{key:"display",value:function(Na){return Na.panel?[Na.panel,{}]:Na.name}},{key:"collapse",value:function(Na,Ua){Na.isCollapsed=Ua}},{key:"isCollapsed",value:function(Na){return Na.isCollapsed}},{key:"isLeaf",value:function(Na){return!Na.children}},{key:"getChildren",value:function(Na){var Ua=this;return Na===this.root?Na.children.filter(function(Oa){return Ua.target&&Oa.applicabilityCheck?eval(Oa.applicabilityCheck)(Ua.target):
!0}):Na.children}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"SettingsTree"}},{key:"default",value:function(){return new this({isCollapsed:!1,children:[{isCollapsed:!0,name:[" ",{}].concat($jscomp.arrayFromIterable(Ic.Icon.textAttribute("font")),[" Rich Text",{fontWeight:"bold"}]),children:[{panel:Ic.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(Ic.Icon.textAttribute("image")),[" Shape",{fontWeight:"bold"}]),children:[{panel:Ic.morph({})}]},{isCollapsed:!1,
name:[" ",{}].concat($jscomp.arrayFromIterable(Ic.Icon.textAttribute("border-style")),[" Border",{paddingLeft:"2px",fontWeight:"bold"}]),children:[{panel:Ic.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(Ic.Icon.textAttribute("grip-vertical")),[" Layout",{paddingLeft:"4px",fontWeight:"bold"}]),children:[{panel:Ic.morph({})}]}]})}},{key:"border",value:function(){return new this({isCollapsed:!1,children:[{isCollapsed:!0,name:[" Type    ",{},Ic.morph({height:20}),{}],children:[{panel:Ic.morph({})}]},
{isCollapsed:!1,name:[" Color   ",{},Ic.morph({height:20}),{}],children:[{panel:Ic.morph({})}]},{isCollapsed:!1,name:[" Width  ",{},Ic.morph({height:20}),{}],children:[{panel:Ic.morph({})}]},{isCollapsed:!1,name:[" Radius ",{},Ic.morph({height:20}),{}],children:[{panel:Ic.morph({})}]}]})}}],Bb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StylingSideBar",
version:"0.1.1-67"}}},{start:284,end:2663})}(Ic.TreeData);Ic.SettingsTree=Sb;Ic.SettingsTree=Sb;Ic.SettingsTree=Sb;Sb=function(Hb){var Bb=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),Mb=Bb.hasOwnProperty("StylingSideBar")&&"function"===typeof Bb.StylingSideBar?Bb.StylingSideBar:Bb.StylingSideBar=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return qd(Mb,Hb,[{key:"relayout",value:function(){this.onWorldResize()}},
{key:"collapseAll",value:function(){this.getSubmorphsByStyleClassName("Tree").forEach(function(Na){Na.nodes.forEach(function(Ua){return Na.treeData.root==Ua?Na.uncollapse(Ua):Na.collapse(Ua)})})}},{key:"onWorldResize",value:function(Na){Na=void 0===Na?!0:Na;if(this.respondsToVisibleWindow){var Ua=$world.visibleBounds(),Oa=navigator.standalone&&Ic.touchInputDevice?25:0,Ia=this.getSubmorphNamed("horizontal resizer");this.height=Ua.height-Oa;this.top=Oa+Ua.top();Ia.height=this.height;Ia.left=0;Ia.top=
0;Na&&(this.visible?this.topRight=Ua.topRight():this.topLeft=Ua.topRight())}}},{key:"toggle",value:function(Na){var Ua=this,Oa,Ia;return $jscomp.asyncExecutePromiseGeneratorProgram(function(eb){switch(eb.nextAddress){case 1:Oa=$world.visibleBounds().withTopLeft(Ic.pt(0,0));Ia=navigator.standalone&&Ic.touchInputDevice?25:0;Ua.height=Oa.height-Ia;Ua.top=Ia+Oa.top();if(Na)return $world.addMorph(Ua,$world.get("lively top bar")),Ua.topLeft=Oa.topRight(),Ua.visible=!0,eb.yield(Ua.whenRendered(),5);Ua.detachFromWorld($world);
return eb.yield(Ua.animate({opacity:0,topLeft:Oa.topRight(),duration:300}),4);case 4:Ua.visible=!1;Ua.remove();eb.jumpTo(0);break;case 5:return Ua.onWorldResize(!1),eb.yield(Ua.animate({opacity:1,easing:Ic.easings.outCirc,topRight:Oa.topRight(),duration:300}),6);case 6:Ua.attachToWorld($world),eb.jumpToEnd()}})}},{key:"cleanupAnchors",value:function(){for(var Na=this.withAllSubmorphsSelect(function(eb){return eb.anchors&&eb.anchors.filter(function(cb){return!cb.id}).length}),Ua={},Oa=$jscomp.makeIterator(Na),
Ia=Oa.next();!Ia.done;Ua={$jscomp$loop$prop$m$2578:Ua.$jscomp$loop$prop$m$2578},Ia=Oa.next())Ua.$jscomp$loop$prop$m$2578=Ia.value,Ua.$jscomp$loop$prop$m$2578.anchors.forEach(function(eb){return function(cb){return!cb.id&&eb.$jscomp$loop$prop$m$2578.removeAnchor(cb)}}(Ua));return Na.length}},{key:"attachToWorld",value:function(Na){Ic.connect(Na,"showHaloFor",this,"focusMorph",{garbageCollect:!0})}},{key:"detachFromWorld",value:function(Na){var Ua=this;Na.attributeConnections.forEach(function(Oa){Oa.targetObj===
Ua&&Oa.disconnect()})}},{key:"focusMorph",value:function(Na){if(!Na.isMorph||!Na.ownerChain().includes(this)){(Na.isLabel||Na.isText||Na.isButton)&&this.richTextControl.focusOn(Na,!1);var Ua=this.getSubmorphNamed("style settings tree");Ua.treeData.target=Na;Ua.update(!0);Object.values(this.controls).forEach(function(Oa){return Oa&&Oa.focusOn(Na)})}}},{key:"onHierarchyChange",value:function(){Object.values(this.controls).forEach(function(Na){return Na&&Na.update()})}}],[{key:Symbol.for("__LivelyClassName__"),
get:function(){return"StylingSideBar"}},{key:"properties",get:function(){return{controls:{},richTextControl:{},isHaloItem:{get:function(){return!0}}}}}],Bb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StylingSideBar",version:"0.1.1-67"}}},{start:2682,end:5749})}(Ic.Morph);Sb=Ic.StylingSideBar;Ic.default=Sb;var Jc=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js");
Jc.Morph=Ba;Jc.obj=ie;Jc.string=Ye;Jc.connect=Yc;Jc.noUpdate=sf;Jc.once=ne;Sb=function(Hb){var Bb=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js"),Mb=Bb.hasOwnProperty("ShapeFormatStyler")&&"function"===typeof Bb.ShapeFormatStyler?Bb.ShapeFormatStyler:Bb.ShapeFormatStyler=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return qd(Mb,Hb,[{key:Symbol.for("lively-instance-initialize"),value:function(Na){qd._get(Object.getPrototypeOf(Mb.prototype),
Symbol.for("lively-instance-initialize"),this).call(this,Na);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var Na=this.ui,Ua={},Oa=$jscomp.makeIterator(Object.entries(this.uiSpec)),Ia=Oa.next();!Ia.done;Ua={$jscomp$loop$prop$control$2580:Ua.$jscomp$loop$prop$control$2580,$jscomp$loop$prop$prop$2581:Ua.$jscomp$loop$prop$prop$2581},Ia=Oa.next()){var eb=$jscomp.makeIterator(Ia.value);Ia=eb.next().value;eb=$jscomp.makeIterator(eb.next().value);eb.next();
var cb=eb.next().value;Ua.$jscomp$loop$prop$prop$2581=eb.next().value;Ua.$jscomp$loop$prop$control$2580=Na[Ia];Jc.connect(Ua.$jscomp$loop$prop$control$2580,cb,this,"updateTarget",{updater:function(ob){return function(Zb,mc){ob.$jscomp$loop$prop$control$2580._updating=!0;Zb(ob.$jscomp$loop$prop$prop$2581,mc);ob.$jscomp$loop$prop$control$2580._updating=!1}}(Ua),varMapping:{prop:Ua.$jscomp$loop$prop$prop$2581,control:Ua.$jscomp$loop$prop$control$2580}})}}},{key:"update",value:function(){var Na=this,
Ua=this.target,Oa=Ua.clipMode,Ia=Ua.fill,eb=Ua.dropShadow,cb=Ua.opacity,ob=Ua.height,Zb=Ua.width;Ua=this.ui;var mc=Ua.clipModeSelector,Tb=Ua.fillPicker,pa=Ua.opacityField,Ja=Ua.shadowPicker,X=Ua.heightField,ua=Ua.widthField;Jc.noUpdate(function(){Na.updateControl(Ja,"shadowValue",eb);Na.updateControl(mc,"selection",Oa);Na.updateControl(Tb,"colorValue",Ia);Na.updateControl(pa,"number",cb);Na.updateControl(X,"number",ob);Na.updateControl(ua,"number",Zb)})}},{key:"updateTarget",value:function(Na,Ua){this.target[Na]=
Ua;this.update()}},{key:"updateControl",value:function(Na,Ua,Oa){Na._updating||Jc.obj.equals(Na[Ua],Oa)||(Na[Ua]=Oa)}},{key:"updateMultiValue",value:function(Na,Ua,Oa){var Ia=this.ui,eb=Ia[this.join(Na)],cb=eb.get("multi value indicator"),ob=Jc.obj.values(Ua).some(function(Zb){return!Jc.obj.isFunction(Zb)&&!Jc.obj.equals(Zb,Ua.valueOf())});cb.left=0;eb.visible=eb.isLayoutable=!ob;if(ob&&cb.visible!=ob)Jc.once(cb,"onMouseDown",eb,Oa,{converter:function(){return Ua.valueOf()},varMapping:{value:Ua}});
cb.visible=cb.isLayoutable=ob;cb.left=ob?200:0;this.updateControl(eb,Oa,Ua.valueOf());eb=$jscomp.makeIterator(["top","left","bottom","right"]);for(cb=eb.next();!cb.done;cb=eb.next())cb=cb.value,ob=Ia[this.join(Na,cb)],this.updateControl(ob,Oa,Ua[cb])}},{key:"lower",value:function(Na){return Na.charAt(0).toLowerCase()+Na.slice(1)}},{key:"join",value:function(Na,Ua){return this.lower(Jc.string.camelCaseString(Na+(Ua?" "+Ua:"")))}},{key:"unwrap",value:function(Na,Ua,Oa){var Ia={};Ia=(Ia[this.lower(Jc.string.camelCaseString(Na))]=
[Na,Ua,Oa],Ia);for(var eb=$jscomp.makeIterator(["top","left","bottom","right"]),cb=eb.next();!cb.done;cb=eb.next()){cb=cb.value;var ob=Na+" "+cb;Ia[this.lower(Jc.string.camelCaseString(ob))]=[ob,Ua,this.join(Oa,cb)]}return Ia}},{key:"focusOn",value:function(Na){var Ua=this,Oa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ia){if(1==Ia.nextAddress)return!Na||Ua.isAncestorOf(Na)||Ua.target===Na||Jc.obj.isArray(Na)||(Ua.target=Na),Oa=Ua.visible,Ua.visible=!0,Ia.yield(Ua.whenRendered(),2);
if(3!=Ia.nextAddress)return Ua.update(),Ia.yield(Ua.whenRendered(),3);Ua.getSubmorphsByStyleClassName("NumberWidget").map(function(eb){return eb.relayout()});Ua.visible=Oa;Ia.jumpToEnd()})}},{key:"onHoverIn",value:function(Na){this.watchForTarget=!1}},{key:"onHoverOut",value:function(Na){this.watchForTarget=!0}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ShapeFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{get:function(){return this._uiSpec||(this._uiSpec={clipModeSelector:["clip mode selector",
"selection","clipMode"],fillPicker:["fill picker","colorValue","fill"],shadowPicker:["shadow picker","shadowValue","dropShadow"],opacityField:["opacity field","number","opacity"],heightField:["height field","number","height"],widthField:["width field","number","width"]})}},ui:{readOnly:!0,get:function(){var Na=this,Ua=this.uiSpec;return this._ui||(this._ui=Jc.obj.extract(Ua,Jc.obj.keys(Ua),function(Oa,Ia){Oa=$jscomp.makeIterator(Ia).next().value;return Na.getSubmorphNamed(Oa)}))}}}}}],Bb,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeFormatStyler",version:"0.1.1-144"}}},{start:176,end:4600})}(Jc.Morph);Sb=Jc.ShapeFormatStyler;Jc.default=Sb;var dd=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js");dd.Morph=Ba;dd.ShadowPopover=Cc;dd.connect=Yc;dd.signal=cc;Sb=function(Hb){var Bb=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js"),Mb=Bb.hasOwnProperty("ShadowWidget")&&
"function"===typeof Bb.ShadowWidget?Bb.ShadowWidget:Bb.ShadowWidget=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return qd(Mb,Hb,[{key:"onHoverIn",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:1,duration:200})}},{key:"onHoverOut",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:0,duration:200})}},{key:"onMouseDown",value:function(Na){this.openPopover()}},
{key:"update",value:function(Na){var Ua=this.submorphs[0];Ua&&(Ua.dropShadow=Na)}},{key:"openPopover",value:function(){var Na=this,Ua;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Oa){if(1==Oa.nextAddress)return Ua=new dd.ShadowPopover({hasFixedPosition:!!Na.ownerChain().find(function(Ia){return Ia.hasFixedPosition}),shadowValue:Na.shadowValue}),Oa.yield(Ua.fadeIntoWorld(Na.globalBounds().center()),2);dd.connect(Ua,"shadowValue",Na,"shadowValue");dd.connect(Na,"shadowValue",Na,"update");
dd.signal(Na,"openWidget",Ua);Oa.jumpToEnd()})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ShadowWidget"}},{key:"properties",get:function(){return{shadowValue:{set:function(Na){this.setProperty("shadowValue",Na);this.update(Na)}}}}}],Bb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShadowWidget",version:"0.1.1-7"}}},
{start:194,end:1231})}(dd.Morph);Sb=dd.ShadowWidget;dd.default=Sb;var Jd=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js");Jd.Morph=Ba;Jd.obj=ie;Jd.string=Ye;Jd.connect=Yc;Jd.noUpdate=sf;Jd.once=ne;Sb=function(Hb){var Bb=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js"),Mb=Bb.hasOwnProperty("BorderFormatStyler")&&"function"===typeof Bb.BorderFormatStyler?Bb.BorderFormatStyler:Bb.BorderFormatStyler=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return qd(Mb,Hb,[{key:"setupUI",value:function(){var Na=this;this.getSubmorphsByStyleClassName("NumberWidget").map(function(Ua){var Oa=Jd.string.camelCaseString(Ua.name);Oa=Oa[0].toLowerCase()+Oa.slice(1);Na.ui[Oa]=Ua})}},{key:"cleanupAnchors",value:function(){var Na=this.withAllSubmorphsSelect(function(Ia){return Ia.anchors&&Ia.anchors.filter(function(eb){return!eb.id})}),Ua={};Na=$jscomp.makeIterator(Na);for(var Oa=Na.next();!Oa.done;Ua={$jscomp$loop$prop$m$2583:Ua.$jscomp$loop$prop$m$2583},
Oa=Na.next())Ua.$jscomp$loop$prop$m$2583=Oa.value,Ua.$jscomp$loop$prop$m$2583.anchors.forEach(function(Ia){return function(eb){return!eb.id&&Ia.$jscomp$loop$prop$m$2583.removeAnchor(eb)}}(Ua))}},{key:Symbol.for("lively-instance-initialize"),value:function(Na){qd._get(Object.getPrototypeOf(Mb.prototype),Symbol.for("lively-instance-initialize"),this).call(this,Na);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var Na=this.ui,Ua={},Oa=$jscomp.makeIterator(Object.entries(this.uiSpec)),
Ia=Oa.next();!Ia.done;Ua={$jscomp$loop$prop$control$2585:Ua.$jscomp$loop$prop$control$2585,$jscomp$loop$prop$prop$2586:Ua.$jscomp$loop$prop$prop$2586},Ia=Oa.next()){var eb=$jscomp.makeIterator(Ia.value);Ia=eb.next().value;eb=$jscomp.makeIterator(eb.next().value);eb.next();var cb=eb.next().value;Ua.$jscomp$loop$prop$prop$2586=eb.next().value;Ua.$jscomp$loop$prop$control$2585=Na[Ia];Jd.connect(Ua.$jscomp$loop$prop$control$2585,cb,this,"updateTarget",{updater:function(ob){return function(Zb,mc){ob.$jscomp$loop$prop$control$2585._updating=
!0;Zb(ob.$jscomp$loop$prop$prop$2586,mc);ob.$jscomp$loop$prop$control$2585._updating=!1}}(Ua),varMapping:{prop:Ua.$jscomp$loop$prop$prop$2586,control:Ua.$jscomp$loop$prop$control$2585}})}}},{key:"update",value:function(){var Na=this,Ua=this.target,Oa=Ua.borderStyle,Ia=Ua.borderColor,eb=Ua.borderRadius,cb=Ua.borderWidth;Jd.noUpdate(function(){Na.updateMultiValue("border style selector",Oa,"selection");Na.updateMultiValue("border color picker",Ia,"colorValue");Na.updateMultiValue("border radius field",
eb,"number");Na.updateMultiValue("border width field",cb,"number")})}},{key:"updateTarget",value:function(Na,Ua){this.target[Na]=Ua;this.update()}},{key:"updateControl",value:function(Na,Ua,Oa){Na._updating||Jd.obj.equals(Na[Ua],Oa)||(Na[Ua]=Oa)}},{key:"updateMultiValue",value:function(Na,Ua,Oa){var Ia=this.ui,eb=Ia[this.join(Na)],cb=eb.get("multi value indicator"),ob=Jd.obj.values(Ua).some(function(Zb){return!Jd.obj.isFunction(Zb)&&!Jd.obj.equals(Zb,Ua.valueOf())});eb.visible=eb.isLayoutable=!ob;
if(ob&&cb.visible!=ob)Jd.once(cb,"onMouseDown",eb,Oa,{converter:function(){return Ua.valueOf()},varMapping:{value:Ua}});cb.visible=cb.isLayoutable=ob;this.updateControl(eb,Oa,Ua.valueOf());eb=$jscomp.makeIterator(["top","left","bottom","right"]);for(cb=eb.next();!cb.done;cb=eb.next())cb=cb.value,ob=Ia[this.join(Na,cb)],this.updateControl(ob,Oa,Ua[cb])}},{key:"lower",value:function(Na){return Na.charAt(0).toLowerCase()+Na.slice(1)}},{key:"join",value:function(Na,Ua){return this.lower(Jd.string.camelCaseString(Na+
(Ua?" "+Ua:"")))}},{key:"unwrap",value:function(Na,Ua,Oa){var Ia={};Ia=(Ia[this.lower(Jd.string.camelCaseString(Na))]=[Na,Ua,Oa],Ia);for(var eb=$jscomp.makeIterator(["top","left","bottom","right"]),cb=eb.next();!cb.done;cb=eb.next()){cb=cb.value;var ob=Na+" "+cb;Ia[this.lower(Jd.string.camelCaseString(ob))]=[ob,Ua,this.join(Oa,cb)]}return Ia}},{key:"attachToWorld",value:function(){Jd.connect($world,"showHaloFor",this,"focusOn",{garbageCollect:!0})}},{key:"focusOn",value:function(Na){var Ua=this,Oa;
return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ia){if(1==Ia.nextAddress)return!Na||Ua.isAncestorOf(Na)||Ua.target===Na||Jd.obj.isArray(Na)||(Ua.target=Na),Oa=Ua.visible,Ua.visible=!0,Ia.yield(Ua.whenRendered(),2);if(3!=Ia.nextAddress)return Ua.update(),Ia.yield(Ua.whenRendered(),3);Ua.getSubmorphsByStyleClassName("NumberWidget").map(function(eb){return eb.relayout()});Ua.visible=Oa;Ia.jumpToEnd()})}},{key:"onHoverIn",value:function(Na){this.watchForTarget=!1}},{key:"onHoverOut",value:function(Na){this.watchForTarget=
!0}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"BorderFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{derived:!0,serialize:!1,get:function(){return this._uiSpec||(this._uiSpec=Object.assign({},this.unwrap("border style selector","selection","borderStyle"),{},this.unwrap("border color picker","colorValue","borderColor"),{},this.unwrap("border radius field","number","borderRadius"),{},this.unwrap("border width field","number","borderWidth")))}},ui:{initialize:function(){this.setupUI()}}}}}],
Bb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"BorderFormatStyler",version:"0.1.1-16"}}},{start:185,end:5003})}(Jd.Morph);Sb=Jd.BorderFormatStyler;Jd.default=Sb;var Kd=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js");Kd.Morph=Ba;Kd.resource=Hc;Kd.arr=Md;Kd.obj=ie;Kd.string=Ye;Kd.Path=fc;Kd.connect=Yc;Kd.getMastersMenu=
$d;Kd.resolvedMasters=pe;Sb=function(Hb){var Bb=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js"),Mb=Bb.hasOwnProperty("MasterComponentControl")&&"function"===typeof Bb.MasterComponentControl?Bb.MasterComponentControl:Bb.MasterComponentControl=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return qd(Mb,Hb,[{key:"focusOn",value:function(Na){this.target=Na;this.update()}},{key:"onMouseUp",value:function(Na){var Ua=
this,Oa,Ia,eb,cb,ob,Zb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(mc){if(1==mc.nextAddress){"auto master selection"==Na.targetMorph.name&&(Oa="auto");"hover master selection"==Na.targetMorph.name&&(Oa="hover");"click master selection"==Na.targetMorph.name&&(Oa="click");Ua.refreshButtons();if(!Ua.target)return mc.return();Ia=$jscomp.makeIterator(["auto","hover","click"]);for(eb=Ia.next();!eb.done;eb=Ia.next())cb=eb.value,Ua.target.master&&Ua.target.master[cb]&&!Ua.get(cb+" master checkbox").checked&&
Ua.adjustMasterComponent(cb,null);if(!Oa)return mc.jumpTo(0);ob=Ua;Zb=ob.openMenu;return mc.yield(Ua.getMastersMenu(Oa),3)}Zb.call(ob,mc.yieldResult,Na);mc.jumpToEnd()})}},{key:"getMastersMenu",value:function(Na){var Ua=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Oa){return 1==Oa.nextAddress?Oa.yield(Promise.all([].concat($jscomp.arrayFromIterable(Object.keys(Kd.resolvedMasters)),[Ua.world().name]).map(function(Ia){var eb,cb,ob;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Zb){return 1==
Zb.nextAddress?(eb=Ia,cb=Ua,ob=cb.componentsToMenu,Zb.yield(Kd.resource("styleguide://"+Ia+"/").dirList(),2)):Zb.return([eb,ob.call(cb,Zb.yieldResult,Na)])})})),2):Oa.return(Oa.yieldResult)})}},{key:"componentsToMenu",value:function(Na,Ua,Oa,Ia){var eb=this;Oa=void 0===Oa?null:Oa;Ia=void 0===Ia?1:Ia;Oa||(Oa=Na.map(function(ob){return{name:Kd.arr.last(ob.name.split("/")),path:ob.name.split("/"),value:ob}}));if(0==Oa.length||100<Ia)return[];var cb=this;return Kd.arr.flatten(Object.entries(Kd.arr.groupBy(Oa,
function(ob){return ob.path[Ia-1]})).map(function(ob){var Zb=$jscomp.makeIterator(ob);ob=Zb.next().value;Zb=Zb.next().value;var mc=$jscomp.makeIterator(Kd.arr.partition(Zb,function(Tb){return Tb.path.length<=Ia}));Zb=mc.next().value;mc=mc.next().value;ob=[ob,eb.componentsToMenu(null,Ua,mc,Ia+1)];return[].concat($jscomp.arrayFromIterable(Zb.map(function(Tb){return[Tb.name,function(){cb.adjustMasterComponent(Ua,Tb.value)}]})),$jscomp.arrayFromIterable(ob[1].length?[ob]:[]))}),1)}},{key:"getComponentSelectionMenu",
value:function(Na){var Ua=this,Oa,Ia,eb,cb,ob,Zb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(mc){if(1==mc.nextAddress)return Oa=Ua.world().metadata.commit.name,Ia=Kd.resource("styleguide://"+Oa+"/"),mc.yield(Ia.dirList(),2);if(3!=mc.nextAddress)return eb=mc.yieldResult,mc.yield(Kd.resource("styleguide://System/").dirList(),3);cb=mc.yieldResult;ob=Ua.componentsToMenu(eb,Na);Zb=Ua.componentsToMenu(cb,Na);return mc.return([].concat($jscomp.arrayFromIterable(0<ob.length?[].concat($jscomp.arrayFromIterable(ob),
[{isDivider:!0}]):[]),$jscomp.arrayFromIterable(Zb)))})}},{key:"adjustMasterComponent",value:function(Na,Ua){if(this.target.master)this.target.master[Na]=Ua;else if(Ua){var Oa={};this.target.master=(Oa[Na]=Ua,Oa)}Na=this.target.master;Ua=Na.hover;Oa=Na.click;Na.auto||Ua||Oa||(this.target.master=null);this.update();this.target.withAllSubmorphsDo(function(Ia){return delete Ia._parametrizedProps});this.target.requestMasterStyling()}},{key:"componentsToMenu",value:function(Na,Ua,Oa,Ia){var eb=this;Oa=
void 0===Oa?null:Oa;Ia=void 0===Ia?1:Ia;Oa||(Oa=Na.map(function(ob){return{name:Kd.arr.last(ob.name.split("/")),path:ob.name.split("/"),value:ob}}));if(0==Oa.length||100<Ia)return[];var cb=this;return Kd.arr.flatten(Object.entries(Kd.arr.groupBy(Oa,function(ob){return ob.path[Ia-1]})).map(function(ob){var Zb=$jscomp.makeIterator(ob);ob=Zb.next().value;Zb=Zb.next().value;var mc=$jscomp.makeIterator(Kd.arr.partition(Zb,function(Tb){return Tb.path.length<=Ia}));Zb=mc.next().value;mc=mc.next().value;
ob=[ob,eb.componentsToMenu(null,Ua,mc,Ia+1)];return[].concat($jscomp.arrayFromIterable(Zb.map(function(Tb){return[Tb.name,function(){cb.adjustMasterComponent(Ua,Tb.value)}]})),$jscomp.arrayFromIterable(ob[1].length?[ob]:[]))}),1)}},{key:"update",value:function(){if(this.target){for(var Na=$jscomp.makeIterator(["auto","hover","click"]),Ua=Na.next();!Ua.done;Ua=Na.next()){Ua=Ua.value;var Oa=this.getSubmorphNamed(Ua+" master selection"),Ia=this.getSubmorphNamed(Ua+" master checkbox");Kd.Path(["master",
Ua]).get(this.target)?Ia.checked=!0:Ia.checked=!1;Oa.label=Kd.string.truncateLeft(Kd.Path(["master",Ua,"name"]).get(this.target)||"select master",15,"...")}this.refreshButtons()}}},{key:"refreshButtons",value:function(){for(var Na=$jscomp.makeIterator(["auto","hover","click"]),Ua=Na.next();!Ua.done;Ua=Na.next()){Ua=Ua.value;var Oa=this.getSubmorphNamed(Ua+" master selection"),Ia=this.getSubmorphNamed(Ua+" master checkbox");Oa=Oa.deactivated=!Ia.checked;this.getSubmorphNamed(Ua+" master selection").opacity=
Oa?.5:1}Na=this.getSubmorphNamed("overridden props list");Na.items=this.getOverriddenProps();this.getSubmorphNamed("clear overridden prop button").deactivated=!Na.selection}},{key:"getMasterForTarget",value:function(){if(this.target.isMorph)return[this.target].concat($jscomp.arrayFromIterable(this.target.ownerChain())).map(function(Na){return Na.master}).find(Boolean)}},{key:"clearSelectedProperty",value:function(){var Na=this.getSubmorphNamed("overridden props list").selection;this.getMasterForTarget().clearOverriddenPropertiesFor(this.target,
[Na]);this.refreshButtons()}},{key:"getOverriddenProps",value:function(){var Na=this.getMasterForTarget();return Na&&Na._overriddenProps?(Na=Na._overriddenProps.get(this.target))?Object.keys(Na):[]:[]}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"MasterComponentControl"}}],Bb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"MasterComponentControl",
version:"0.1.1-108"}}},{start:315,end:6096})}(Kd.Morph);Sb=Kd.MasterComponentControl;Kd.default=Sb}}});
