System.register("./__root_module__-64e296ea.js kld-intersections ./index-997f10f9.js ./index-2a6f00a9.js ./index-1222f918.js ./color-picker-9739352b.js ./index-8a05b158.js".split(" "),function(){var Ba,Ab,Qb,dc,Xb,Xd,ad,Nd,dd,Lc,rd,Gd,ke,Kd,Hc,fb,Db,mc,hc,Tc,Ld,oc;return{setters:[function(pc){Ba=pc.aj;Ab=pc.aB;Qb=pc.ao;dc=pc.ap;Xb=pc.aw;Xd=pc.a3;ad=pc.C;Nd=pc.au;dd=pc.ar;Lc=pc.br;rd=pc.at;Gd=pc.a7;ke=pc.s;Kd=pc.bU;Hc=pc.av;fb=pc.as;Db=pc.r;mc=pc.a6;hc=pc.P;Tc=pc.bX;Ld=pc.bY},function(){},function(){},
function(){},function(){},function(pc){oc=pc.S},function(){}],execute:function(){var pc=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js");pc.Morph=Ba;pc.touchInputDevice=Ab;pc.morph=Qb;pc.Icon=dc;pc.easings=Xb;pc.pt=Xd;pc.Color=ad;pc.fun=Nd;pc.connect=dd;pc.TreeData=Lc;var Nb=function(rb){var Hb=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),Mc=Hb.hasOwnProperty("SettingsTree")&&"function"===typeof Hb.SettingsTree?Hb.SettingsTree:Hb.SettingsTree=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return rd(Mc,rb,[{key:"display",value:function(qb){return qb.panel?[qb.panel,{}]:qb.name}},{key:"collapse",value:function(qb,tb){qb.isCollapsed=tb}},{key:"isCollapsed",value:function(qb){return qb.isCollapsed}},{key:"isLeaf",value:function(qb){return!qb.children}},{key:"getChildren",value:function(qb){return qb.children}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"SettingsTree"}},{key:"default",value:function(){return new this({isCollapsed:!1,
children:[{isCollapsed:!0,name:[" ",{}].concat($jscomp.arrayFromIterable(pc.Icon.textAttribute("font")),[" Rich Text",{fontWeight:"bold"}]),children:[{panel:pc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(pc.Icon.textAttribute("image")),[" Shape",{fontWeight:"bold"}]),children:[{panel:pc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(pc.Icon.textAttribute("border-style")),[" Border",{paddingLeft:"2px",fontWeight:"bold"}]),children:[{panel:pc.morph({})}]},
{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(pc.Icon.textAttribute("grip-vertical")),[" Layout",{paddingLeft:"4px",fontWeight:"bold"}]),children:[{panel:pc.morph({})}]}]})}},{key:"border",value:function(){return new this({isCollapsed:!1,children:[{isCollapsed:!0,name:[" Type    ",{},pc.morph({height:20}),{}],children:[{panel:pc.morph({})}]},{isCollapsed:!1,name:[" Color   ",{},pc.morph({height:20}),{}],children:[{panel:pc.morph({})}]},{isCollapsed:!1,name:[" Width  ",{},pc.morph({height:20}),
{}],children:[{panel:pc.morph({})}]},{isCollapsed:!1,name:[" Radius ",{},pc.morph({height:20}),{}],children:[{panel:pc.morph({})}]}]})}}],Hb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StylingSideBar",version:"0.1.1-59"}}},{start:284,end:2453})}(pc.TreeData);pc.SettingsTree=Nb;pc.SettingsTree=Nb;pc.SettingsTree=Nb;Nb=function(rb){var Hb=
lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),Mc=Hb.hasOwnProperty("StylingSideBar")&&"function"===typeof Hb.StylingSideBar?Hb.StylingSideBar:Hb.StylingSideBar=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return rd(Mc,rb,[{key:"relayout",value:function(){this.onWorldResize()}},{key:"collapseAll",value:function(){this.getSubmorphsByStyleClassName("Tree").forEach(function(qb){qb.nodes.forEach(function(tb){return qb.treeData.root==
tb?qb.uncollapse(tb):qb.collapse(tb)})})}},{key:"onWorldResize",value:function(qb){qb=void 0===qb?!0:qb;if(this.respondsToVisibleWindow){var tb=$world.visibleBounds(),eb=navigator.standalone&&pc.touchInputDevice?25:0,ob=this.getSubmorphNamed("horizontal resizer");this.height=tb.height-eb;this.top=eb+tb.top();ob.height=this.height;ob.left=0;ob.top=0;qb&&(this.visible?this.topRight=tb.topRight():this.topLeft=tb.topRight())}}},{key:"toggle",value:function(qb){var tb=this,eb,ob;return $jscomp.asyncExecutePromiseGeneratorProgram(function(wb){switch(wb.nextAddress){case 1:eb=
$world.visibleBounds();ob=navigator.standalone&&pc.touchInputDevice?25:0;tb.height=eb.height-ob;tb.top=ob+eb.top();if(qb)return $world.addMorph(tb,$world.get("lively top bar")),tb.topLeft=eb.topRight(),tb.visible=!0,wb.yield(tb.whenRendered(),5);tb.detachFromWorld($world);return wb.yield(tb.animate({opacity:0,topLeft:eb.topRight(),duration:300}),4);case 4:tb.visible=!1;tb.remove();wb.jumpTo(0);break;case 5:return tb.onWorldResize(!1),wb.yield(tb.animate({opacity:1,easing:pc.easings.outCirc,topRight:eb.topRight(),
duration:300}),6);case 6:tb.attachToWorld($world),wb.jumpToEnd()}})}},{key:"cleanupAnchors",value:function(){for(var qb=this.withAllSubmorphsSelect(function(wb){return wb.anchors&&wb.anchors.filter(function(cb){return!cb.id}).length}),tb={},eb=$jscomp.makeIterator(qb),ob=eb.next();!ob.done;tb={$jscomp$loop$prop$m$2427:tb.$jscomp$loop$prop$m$2427},ob=eb.next())tb.$jscomp$loop$prop$m$2427=ob.value,tb.$jscomp$loop$prop$m$2427.anchors.forEach(function(wb){return function(cb){return!cb.id&&wb.$jscomp$loop$prop$m$2427.removeAnchor(cb)}}(tb));
return qb.length}},{key:"attachToWorld",value:function(qb){pc.connect(qb,"showHaloFor",this,"focusMorph",{garbageCollect:!0})}},{key:"detachFromWorld",value:function(qb){var tb=this;qb.attributeConnections.forEach(function(eb){eb.targetObj===tb&&eb.disconnect()})}},{key:"focusMorph",value:function(qb){qb.isMorph&&qb.ownerChain().includes(this)||((qb.isLabel||qb.isText||qb.isButton)&&this.richTextControl.focusOn(qb,!1),Object.values(this.controls).forEach(function(tb){return tb&&tb.focusOn(qb)}))}},
{key:"onHierarchyChange",value:function(){Object.values(this.controls).forEach(function(qb){return qb&&qb.update()})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"StylingSideBar"}},{key:"properties",get:function(){return{controls:{},richTextControl:{},isHaloItem:{get:function(){return!0}}}}}],Hb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"StylingSideBar",version:"0.1.1-59"}}},{start:2470,end:5364})}(pc.Morph);Nb=pc.StylingSideBar;pc.default=Nb;var Dc=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js");Dc.Morph=Ba;Dc.obj=Gd;Dc.string=ke;Dc.connect=dd;Dc.noUpdate=Kd;Dc.once=Hc;Nb=function(rb){var Hb=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js"),Mc=Hb.hasOwnProperty("ShapeFormatStyler")&&"function"===typeof Hb.ShapeFormatStyler?Hb.ShapeFormatStyler:Hb.ShapeFormatStyler=function(qb){qb&&
qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return rd(Mc,rb,[{key:Symbol.for("lively-instance-initialize"),value:function(qb){rd._get(Object.getPrototypeOf(Mc.prototype),Symbol.for("lively-instance-initialize"),this).call(this,qb);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var qb=this.ui,tb={},eb=$jscomp.makeIterator(Object.entries(this.uiSpec)),ob=eb.next();!ob.done;tb={$jscomp$loop$prop$control$2429:tb.$jscomp$loop$prop$control$2429,
$jscomp$loop$prop$prop$2430:tb.$jscomp$loop$prop$prop$2430},ob=eb.next()){var wb=$jscomp.makeIterator(ob.value);ob=wb.next().value;wb=$jscomp.makeIterator(wb.next().value);wb.next();var cb=wb.next().value;tb.$jscomp$loop$prop$prop$2430=wb.next().value;tb.$jscomp$loop$prop$control$2429=qb[ob];Dc.connect(tb.$jscomp$loop$prop$control$2429,cb,this,"updateTarget",{updater:function(Oa){return function(Gb,sc){Oa.$jscomp$loop$prop$control$2429._updating=!0;Gb(Oa.$jscomp$loop$prop$prop$2430,sc);Oa.$jscomp$loop$prop$control$2429._updating=
!1}}(tb),varMapping:{prop:tb.$jscomp$loop$prop$prop$2430,control:tb.$jscomp$loop$prop$control$2429}})}}},{key:"update",value:function(){var qb=this,tb=this.target,eb=tb.clipMode,ob=tb.fill,wb=tb.dropShadow,cb=tb.opacity,Oa=tb.height,Gb=tb.width;tb=this.ui;var sc=tb.clipModeSelector,vc=tb.fillPicker,fc=tb.opacityField,rc=tb.shadowPicker,Q=tb.heightField,ha=tb.widthField;Dc.noUpdate(function(){qb.updateControl(rc,"shadowValue",wb);qb.updateControl(sc,"selection",eb);qb.updateControl(vc,"colorValue",
ob);qb.updateControl(fc,"number",cb);qb.updateControl(Q,"number",Oa);qb.updateControl(ha,"number",Gb)})}},{key:"updateTarget",value:function(qb,tb){this.target[qb]=tb;this.update()}},{key:"updateControl",value:function(qb,tb,eb){qb._updating||Dc.obj.equals(qb[tb],eb)||(qb[tb]=eb)}},{key:"updateMultiValue",value:function(qb,tb,eb){var ob=this.ui,wb=ob[this.join(qb)],cb=wb.get("multi value indicator"),Oa=Dc.obj.values(tb).some(function(Gb){return!Dc.obj.isFunction(Gb)&&!Dc.obj.equals(Gb,tb.valueOf())});
cb.left=0;wb.visible=wb.isLayoutable=!Oa;if(Oa&&cb.visible!=Oa)Dc.once(cb,"onMouseDown",wb,eb,{converter:function(){return tb.valueOf()},varMapping:{value:tb}});cb.visible=cb.isLayoutable=Oa;cb.left=Oa?200:0;this.updateControl(wb,eb,tb.valueOf());wb=$jscomp.makeIterator(["top","left","bottom","right"]);for(cb=wb.next();!cb.done;cb=wb.next())cb=cb.value,Oa=ob[this.join(qb,cb)],this.updateControl(Oa,eb,tb[cb])}},{key:"lower",value:function(qb){return qb.charAt(0).toLowerCase()+qb.slice(1)}},{key:"join",
value:function(qb,tb){return this.lower(Dc.string.camelCaseString(qb+(tb?" "+tb:"")))}},{key:"unwrap",value:function(qb,tb,eb){var ob={};ob=(ob[this.lower(Dc.string.camelCaseString(qb))]=[qb,tb,eb],ob);for(var wb=$jscomp.makeIterator(["top","left","bottom","right"]),cb=wb.next();!cb.done;cb=wb.next()){cb=cb.value;var Oa=qb+" "+cb;ob[this.lower(Dc.string.camelCaseString(Oa))]=[Oa,tb,this.join(eb,cb)]}return ob}},{key:"focusOn",value:function(qb){var tb=this,eb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ob){if(1==
ob.nextAddress)return!qb||tb.isAncestorOf(qb)||tb.target===qb||Dc.obj.isArray(qb)||(tb.target=qb),eb=tb.visible,tb.visible=!0,ob.yield(tb.whenRendered(),2);if(3!=ob.nextAddress)return tb.update(),ob.yield(tb.whenRendered(),3);tb.getSubmorphsByStyleClassName("NumberWidget").map(function(wb){return wb.relayout()});tb.visible=eb;ob.jumpToEnd()})}},{key:"onHoverIn",value:function(qb){this.watchForTarget=!1}},{key:"onHoverOut",value:function(qb){this.watchForTarget=!0}}],[{key:Symbol.for("__LivelyClassName__"),
get:function(){return"ShapeFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{get:function(){return this._uiSpec||(this._uiSpec={clipModeSelector:["clip mode selector","selection","clipMode"],fillPicker:["fill picker","colorValue","fill"],shadowPicker:["shadow picker","shadowValue","dropShadow"],opacityField:["opacity field","number","opacity"],heightField:["height field","number","height"],widthField:["width field","number","width"]})}},ui:{readOnly:!0,get:function(){var qb=this,tb=
this.uiSpec;return this._ui||(this._ui=Dc.obj.extract(tb,Dc.obj.keys(tb),function(eb,ob){eb=$jscomp.makeIterator(ob).next().value;return qb.getSubmorphNamed(eb)}))}}}}}],Hb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeFormatStyler",version:"0.1.1-144"}}},{start:176,end:4600})}(Dc.Morph);Nb=Dc.ShapeFormatStyler;Dc.default=
Nb;var Vc=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js");Vc.Morph=Ba;Vc.ShadowPopover=oc;Vc.connect=dd;Vc.signal=fb;Nb=function(rb){var Hb=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js"),Mc=Hb.hasOwnProperty("ShadowWidget")&&"function"===typeof Hb.ShadowWidget?Hb.ShadowWidget:Hb.ShadowWidget=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return rd(Mc,rb,[{key:"onHoverIn",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:1,
duration:200})}},{key:"onHoverOut",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:0,duration:200})}},{key:"onMouseDown",value:function(qb){this.openPopover()}},{key:"update",value:function(qb){var tb=this.submorphs[0];tb&&(tb.dropShadow=qb)}},{key:"openPopover",value:function(){var qb=this,tb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(eb){if(1==eb.nextAddress)return tb=new Vc.ShadowPopover({hasFixedPosition:!!qb.ownerChain().find(function(ob){return ob.hasFixedPosition}),
shadowValue:qb.shadowValue}),eb.yield(tb.fadeIntoWorld(qb.globalBounds().center()),2);Vc.connect(tb,"shadowValue",qb,"shadowValue");Vc.connect(qb,"shadowValue",qb,"update");Vc.signal(qb,"openWidget",tb);eb.jumpToEnd()})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ShadowWidget"}},{key:"properties",get:function(){return{shadowValue:{set:function(qb){this.setProperty("shadowValue",qb);this.update(qb)}}}}}],Hb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShadowWidget",version:"0.1.1-7"}}},{start:194,end:1231})}(Vc.Morph);Nb=Vc.ShadowWidget;Vc.default=Nb;var Hd=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js");Hd.Morph=Ba;Hd.obj=Gd;Hd.string=ke;Hd.connect=dd;Hd.noUpdate=Kd;Hd.once=Hc;Nb=function(rb){var Hb=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js"),Mc=Hb.hasOwnProperty("BorderFormatStyler")&&"function"===typeof Hb.BorderFormatStyler?
Hb.BorderFormatStyler:Hb.BorderFormatStyler=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return rd(Mc,rb,[{key:"setupUI",value:function(){var qb=this;this.getSubmorphsByStyleClassName("NumberWidget").map(function(tb){var eb=Hd.string.camelCaseString(tb.name);eb=eb[0].toLowerCase()+eb.slice(1);qb.ui[eb]=tb})}},{key:"cleanupAnchors",value:function(){var qb=this.withAllSubmorphsSelect(function(ob){return ob.anchors&&
ob.anchors.filter(function(wb){return!wb.id})}),tb={};qb=$jscomp.makeIterator(qb);for(var eb=qb.next();!eb.done;tb={$jscomp$loop$prop$m$2432:tb.$jscomp$loop$prop$m$2432},eb=qb.next())tb.$jscomp$loop$prop$m$2432=eb.value,tb.$jscomp$loop$prop$m$2432.anchors.forEach(function(ob){return function(wb){return!wb.id&&ob.$jscomp$loop$prop$m$2432.removeAnchor(wb)}}(tb))}},{key:Symbol.for("lively-instance-initialize"),value:function(qb){rd._get(Object.getPrototypeOf(Mc.prototype),Symbol.for("lively-instance-initialize"),
this).call(this,qb);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var qb=this.ui,tb={},eb=$jscomp.makeIterator(Object.entries(this.uiSpec)),ob=eb.next();!ob.done;tb={$jscomp$loop$prop$control$2434:tb.$jscomp$loop$prop$control$2434,$jscomp$loop$prop$prop$2435:tb.$jscomp$loop$prop$prop$2435},ob=eb.next()){var wb=$jscomp.makeIterator(ob.value);ob=wb.next().value;wb=$jscomp.makeIterator(wb.next().value);wb.next();var cb=wb.next().value;tb.$jscomp$loop$prop$prop$2435=
wb.next().value;tb.$jscomp$loop$prop$control$2434=qb[ob];Hd.connect(tb.$jscomp$loop$prop$control$2434,cb,this,"updateTarget",{updater:function(Oa){return function(Gb,sc){Oa.$jscomp$loop$prop$control$2434._updating=!0;Gb(Oa.$jscomp$loop$prop$prop$2435,sc);Oa.$jscomp$loop$prop$control$2434._updating=!1}}(tb),varMapping:{prop:tb.$jscomp$loop$prop$prop$2435,control:tb.$jscomp$loop$prop$control$2434}})}}},{key:"update",value:function(){var qb=this,tb=this.target,eb=tb.borderStyle,ob=tb.borderColor,wb=
tb.borderRadius,cb=tb.borderWidth;Hd.noUpdate(function(){qb.updateMultiValue("border style selector",eb,"selection");qb.updateMultiValue("border color picker",ob,"colorValue");qb.updateMultiValue("border radius field",wb,"number");qb.updateMultiValue("border width field",cb,"number")})}},{key:"updateTarget",value:function(qb,tb){this.target[qb]=tb;this.update()}},{key:"updateControl",value:function(qb,tb,eb){qb._updating||Hd.obj.equals(qb[tb],eb)||(qb[tb]=eb)}},{key:"updateMultiValue",value:function(qb,
tb,eb){var ob=this.ui,wb=ob[this.join(qb)],cb=wb.get("multi value indicator"),Oa=Hd.obj.values(tb).some(function(Gb){return!Hd.obj.isFunction(Gb)&&!Hd.obj.equals(Gb,tb.valueOf())});wb.visible=wb.isLayoutable=!Oa;if(Oa&&cb.visible!=Oa)Hd.once(cb,"onMouseDown",wb,eb,{converter:function(){return tb.valueOf()},varMapping:{value:tb}});cb.visible=cb.isLayoutable=Oa;this.updateControl(wb,eb,tb.valueOf());wb=$jscomp.makeIterator(["top","left","bottom","right"]);for(cb=wb.next();!cb.done;cb=wb.next())cb=cb.value,
Oa=ob[this.join(qb,cb)],this.updateControl(Oa,eb,tb[cb])}},{key:"lower",value:function(qb){return qb.charAt(0).toLowerCase()+qb.slice(1)}},{key:"join",value:function(qb,tb){return this.lower(Hd.string.camelCaseString(qb+(tb?" "+tb:"")))}},{key:"unwrap",value:function(qb,tb,eb){var ob={};ob=(ob[this.lower(Hd.string.camelCaseString(qb))]=[qb,tb,eb],ob);for(var wb=$jscomp.makeIterator(["top","left","bottom","right"]),cb=wb.next();!cb.done;cb=wb.next()){cb=cb.value;var Oa=qb+" "+cb;ob[this.lower(Hd.string.camelCaseString(Oa))]=
[Oa,tb,this.join(eb,cb)]}return ob}},{key:"attachToWorld",value:function(){Hd.connect($world,"showHaloFor",this,"focusOn",{garbageCollect:!0})}},{key:"focusOn",value:function(qb){var tb=this,eb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ob){if(1==ob.nextAddress)return!qb||tb.isAncestorOf(qb)||tb.target===qb||Hd.obj.isArray(qb)||(tb.target=qb),eb=tb.visible,tb.visible=!0,ob.yield(tb.whenRendered(),2);if(3!=ob.nextAddress)return tb.update(),ob.yield(tb.whenRendered(),3);tb.getSubmorphsByStyleClassName("NumberWidget").map(function(wb){return wb.relayout()});
tb.visible=eb;ob.jumpToEnd()})}},{key:"onHoverIn",value:function(qb){this.watchForTarget=!1}},{key:"onHoverOut",value:function(qb){this.watchForTarget=!0}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"BorderFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{derived:!0,serialize:!1,get:function(){return this._uiSpec||(this._uiSpec=Object.assign({},this.unwrap("border style selector","selection","borderStyle"),{},this.unwrap("border color picker","colorValue","borderColor"),
{},this.unwrap("border radius field","number","borderRadius"),{},this.unwrap("border width field","number","borderWidth")))}},ui:{initialize:function(){this.setupUI()}}}}}],Hb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"BorderFormatStyler",version:"0.1.1-16"}}},{start:185,end:5003})}(Hd.Morph);Nb=Hd.BorderFormatStyler;Hd.default=
Nb;var Id=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js");Id.Morph=Ba;Id.resource=Db;Id.arr=mc;Id.obj=Gd;Id.string=ke;Id.Path=hc;Id.connect=dd;Id.getMastersMenu=Tc;Id.resolvedMasters=Ld;Nb=function(rb){var Hb=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js"),Mc=Hb.hasOwnProperty("MasterComponentControl")&&"function"===typeof Hb.MasterComponentControl?Hb.MasterComponentControl:Hb.MasterComponentControl=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return rd(Mc,rb,[{key:"focusOn",value:function(qb){this.target=qb;this.update()}},{key:"onMouseUp",value:function(qb){var tb=this,eb,ob,wb,cb,Oa,Gb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(sc){if(1==sc.nextAddress){"auto master selection"==qb.targetMorph.name&&(eb="auto");"hover master selection"==qb.targetMorph.name&&(eb="hover");"click master selection"==qb.targetMorph.name&&(eb="click");tb.refreshButtons();
if(!tb.target)return sc.return();ob=$jscomp.makeIterator(["auto","hover","click"]);for(wb=ob.next();!wb.done;wb=ob.next())cb=wb.value,tb.target.master&&tb.target.master[cb]&&!tb.get(cb+" master checkbox").checked&&tb.adjustMasterComponent(cb,null);if(!eb)return sc.jumpTo(0);Oa=tb;Gb=Oa.openMenu;return sc.yield(tb.getMastersMenu(eb),3)}Gb.call(Oa,sc.yieldResult,qb);sc.jumpToEnd()})}},{key:"getMastersMenu",value:function(qb){var tb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(eb){return 1==
eb.nextAddress?eb.yield(Promise.all([].concat($jscomp.arrayFromIterable(Object.keys(Id.resolvedMasters)),[tb.world().name]).map(function(ob){var wb,cb,Oa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Gb){return 1==Gb.nextAddress?(wb=ob,cb=tb,Oa=cb.componentsToMenu,Gb.yield(Id.resource("styleguide://"+ob+"/").dirList(),2)):Gb.return([wb,Oa.call(cb,Gb.yieldResult,qb)])})})),2):eb.return(eb.yieldResult)})}},{key:"componentsToMenu",value:function(qb,tb,eb,ob){var wb=this;eb=void 0===eb?
null:eb;ob=void 0===ob?1:ob;eb||(eb=qb.map(function(Oa){return{name:Id.arr.last(Oa.name.split("/")),path:Oa.name.split("/"),value:Oa}}));if(0==eb.length||100<ob)return[];var cb=this;return Id.arr.flatten(Object.entries(Id.arr.groupBy(eb,function(Oa){return Oa.path[ob-1]})).map(function(Oa){var Gb=$jscomp.makeIterator(Oa);Oa=Gb.next().value;Gb=Gb.next().value;var sc=$jscomp.makeIterator(Id.arr.partition(Gb,function(vc){return vc.path.length<=ob}));Gb=sc.next().value;sc=sc.next().value;Oa=[Oa,wb.componentsToMenu(null,
tb,sc,ob+1)];return[].concat($jscomp.arrayFromIterable(Gb.map(function(vc){return[vc.name,function(){cb.adjustMasterComponent(tb,vc.value)}]})),$jscomp.arrayFromIterable(Oa[1].length?[Oa]:[]))}),1)}},{key:"getComponentSelectionMenu",value:function(qb){var tb=this,eb,ob,wb,cb,Oa,Gb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(sc){if(1==sc.nextAddress)return eb=tb.world().metadata.commit.name,ob=Id.resource("styleguide://"+eb+"/"),sc.yield(ob.dirList(),2);if(3!=sc.nextAddress)return wb=
sc.yieldResult,sc.yield(Id.resource("styleguide://System/").dirList(),3);cb=sc.yieldResult;Oa=tb.componentsToMenu(wb,qb);Gb=tb.componentsToMenu(cb,qb);return sc.return([].concat($jscomp.arrayFromIterable(0<Oa.length?[].concat($jscomp.arrayFromIterable(Oa),[{isDivider:!0}]):[]),$jscomp.arrayFromIterable(Gb)))})}},{key:"adjustMasterComponent",value:function(qb,tb){if(this.target.master)this.target.master[qb]=tb;else if(tb){var eb={};this.target.master=(eb[qb]=tb,eb)}qb=this.target.master;tb=qb.hover;
eb=qb.click;qb.auto||tb||eb||(this.target.master=null);this.update();this.target.withAllSubmorphsDo(function(ob){return delete ob._parametrizedProps});this.target.requestMasterStyling()}},{key:"componentsToMenu",value:function(qb,tb,eb,ob){var wb=this;eb=void 0===eb?null:eb;ob=void 0===ob?1:ob;eb||(eb=qb.map(function(Oa){return{name:Id.arr.last(Oa.name.split("/")),path:Oa.name.split("/"),value:Oa}}));if(0==eb.length||100<ob)return[];var cb=this;return Id.arr.flatten(Object.entries(Id.arr.groupBy(eb,
function(Oa){return Oa.path[ob-1]})).map(function(Oa){var Gb=$jscomp.makeIterator(Oa);Oa=Gb.next().value;Gb=Gb.next().value;var sc=$jscomp.makeIterator(Id.arr.partition(Gb,function(vc){return vc.path.length<=ob}));Gb=sc.next().value;sc=sc.next().value;Oa=[Oa,wb.componentsToMenu(null,tb,sc,ob+1)];return[].concat($jscomp.arrayFromIterable(Gb.map(function(vc){return[vc.name,function(){cb.adjustMasterComponent(tb,vc.value)}]})),$jscomp.arrayFromIterable(Oa[1].length?[Oa]:[]))}),1)}},{key:"update",value:function(){if(this.target){for(var qb=
$jscomp.makeIterator(["auto","hover","click"]),tb=qb.next();!tb.done;tb=qb.next()){tb=tb.value;var eb=this.getSubmorphNamed(tb+" master selection"),ob=this.getSubmorphNamed(tb+" master checkbox");Id.Path(["master",tb]).get(this.target)?ob.checked=!0:ob.checked=!1;eb.label=Id.string.truncateLeft(Id.Path(["master",tb,"name"]).get(this.target)||"select master",15,"...")}this.refreshButtons()}}},{key:"refreshButtons",value:function(){for(var qb=$jscomp.makeIterator(["auto","hover","click"]),tb=qb.next();!tb.done;tb=
qb.next()){tb=tb.value;var eb=this.getSubmorphNamed(tb+" master selection"),ob=this.getSubmorphNamed(tb+" master checkbox");eb=eb.deactivated=!ob.checked;this.getSubmorphNamed(tb+" master selection").opacity=eb?.5:1}qb=this.getSubmorphNamed("overridden props list");qb.items=this.getOverriddenProps();this.getSubmorphNamed("clear overridden prop button").deactivated=!qb.selection}},{key:"getMasterForTarget",value:function(){if(this.target.isMorph)return[this.target].concat($jscomp.arrayFromIterable(this.target.ownerChain())).map(function(qb){return qb.master}).find(Boolean)}},
{key:"clearSelectedProperty",value:function(){var qb=this.getSubmorphNamed("overridden props list").selection;this.getMasterForTarget().clearOverriddenPropertiesFor(this.target,[qb]);this.refreshButtons()}},{key:"getOverriddenProps",value:function(){var qb=this.getMasterForTarget();return qb&&qb._overriddenProps?(qb=qb._overriddenProps.get(this.target))?Object.keys(qb):[]:[]}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"MasterComponentControl"}}],Hb,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"MasterComponentControl",version:"0.1.1-108"}}},{start:315,end:6096})}(Id.Morph);Nb=Id.MasterComponentControl;Id.default=Nb}}});
