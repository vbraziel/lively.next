System.register(["./__root_module__-dce2a509.js","./index-133ff6c6.js","./color-picker-fd77b442.js"],function(){var Ba,zb,Ib,nc,bc,Sd,Vc,Ud,Yc,Oc,qd,ie,Ye,sf,ne,cc,Hc,Md,fc,$d,pe,Cc,Ic,Sb,Jc,dd,Jd,Kd;return{setters:[function(Hb){Ba=Hb.ax;zb=Hb.a7;Ib=Hb.a8;nc=Hb.a$;bc=Hb.a6;Sd=Hb.ac;Vc=Hb.ad;Ud=Hb.aD;Yc=Hb.ap;Oc=Hb.ab;qd=Hb.an;ie=Hb.as;Ye=Hb.a3;sf=Hb.a1;ne=Hb.C;cc=Hb.au;Hc=Hb.aj;Md=Hb.bR;fc=Hb.bt;$d=Hb.af;pe=Hb.aw;Cc=Hb.bl;Ic=Hb.bs;Sb=Hb.bq;Jc=Hb.bT},function(Hb){dd=Hb.N;Jd=Hb.I},function(Hb){Kd=
Hb.a}],execute:function(){var Hb=lively.FreezerRuntime.recorderFor("lively.ide/text/ui.js");Hb.fun=Ba;Hb.string=zb;Hb.obj=Ib;Hb.properties=nc;Hb.arr=bc;Hb.Text=Sd;Hb.config=Vc;Hb.HorizontalLayout=Ud;Hb.VerticalLayout=Yc;Hb.morph=Oc;Hb.Morph=qd;Hb.Icon=ie;Hb.pt=Ye;Hb.Rectangle=sf;Hb.Color=ne;Hb.connect=cc;Hb.once=Hc;Hb.noUpdate=Md;Hb.ColorPicker=Kd;Hb.DropDownList=fc;Hb.loadObjectFromPartsbinFolder=$d;Hb.cachedControls=new WeakMap;var Bb=function(Oa){var Ia=lively.FreezerRuntime.recorderFor("lively.ide/text/ui.js"),
eb=Ia.hasOwnProperty("RichTextControl")&&"function"===typeof Ia.RichTextControl?Ia.RichTextControl:Ia.RichTextControl=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return pe(eb,Oa,[{key:"toggleButton",value:function(cb,ob){cb.master=ob?{auto:"styleguide://SystemIDE/selected button"}:{auto:"styleguide://System/dark button"}}},{key:"reset",value:function(){var cb=this.ui.fontSelection;cb.items=Hb.RichTextControl.basicFontItems();
cb.selection=cb.items[0].value;Hb.connect(this.target,"selectionChange",this,"update")}},{key:"alignAtTarget",value:function(cb){cb=void 0===cb?!!this.world():cb;var ob=this.target,Zb=ob.world()||$world,mc=this.globalBounds();ob=(ob.selection.isEmpty()?ob.globalBounds():ob.getGlobalTransform().transformRectToRect(ob.selectionBounds().translatedBy(ob.scroll.negated()))).bottomCenter().subPt(mc.topCenter());Zb=Zb.visibleBounds().translateForInclusion(mc.translatedBy(ob)).topLeft().subPt(mc.topLeft());
Zb=this.position.addPt(Zb);cb?this.animate({duration:300,position:Zb}):this.position=Zb}},{key:"removeFocus",value:function(){this.autoRemove&&this.target&&(this.remove(),this.target=null)}},{key:"focusOn",value:function(cb,ob){ob=void 0===ob?!0:ob;var Zb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(mc){if(1==mc.nextAddress)return Zb.target=cb,Zb.update(),mc.yield(Zb.whenRendered(),2);Zb.ui.fontSizeField.relayout();ob&&Zb.alignAtTarget();mc.jumpToEnd()})}},{key:"setupConnections",
value:function(){Hb.connect(this.ui.paddingField,"number",this,"setPadding");Hb.connect(this.ui.paddingFieldTop,"number",this,"setPaddingTop");Hb.connect(this.ui.paddingFieldBottom,"number",this,"setPaddingBottom");Hb.connect(this.ui.paddingFieldLeft,"number",this,"setPaddingLeft");Hb.connect(this.ui.paddingFieldRight,"number",this,"setPaddingRight")}},{key:"update",value:function(){var cb=this,ob=this.target,Zb=this.updateSpec,mc=ob.selection;mc=mc?mc.isEmpty()?ob.textAttributeAt(mc.start):ob.getStyleInRange(mc):
{};var Tb=this.managedProps,pa=Hb.obj.select(ob,Tb);ob=$jscomp.makeIterator(Object.entries(Hb.obj.select(mc||{},Tb)));for(mc=ob.next();!mc.done;mc=ob.next())Tb=$jscomp.makeIterator(mc.value),mc=Tb.next().value,Tb=Tb.next().value,"undefined"!==typeof Tb&&(pa[mc]=Tb);Hb.noUpdate(function(){for(var Ja=$jscomp.makeIterator(Object.entries(cb.ui)),X=Ja.next();!X.done;X=Ja.next()){var ua=$jscomp.makeIterator(X.value);X=ua.next().value;ua=ua.next().value;if(Zb[X])Zb[X](pa,ua)}})}},{key:"relayout",value:function(){}},
{key:"changeAttributeInSelectionOrMorph",value:function(cb,ob){var Zb=this.target,mc=Zb.selection;Zb.isLabel||mc.isEmpty()?Zb[cb]="function"===typeof ob?ob(Zb[cb]):ob:(Zb.undoManager.group(),Zb.changeStyleProperty(cb,function(Tb){return"function"===typeof ob?ob(Tb):ob}),Zb.undoManager.group())}},{key:"changeFont",value:function(cb){var ob=this,Zb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(mc){if(1==mc.nextAddress)return ob._last=cb,(Zb="custom..."===cb)?mc.yield($world.prompt("Enter font family name",
{requester:ob.target,historyId:"lively.morphic-rich-text-font-names",useLastInput:!0}),3):mc.jumpTo(2);if(2!=mc.nextAddress&&(cb=mc.yieldResult,!cb))return mc.return();ob.changeAttributeInSelectionOrMorph("fontFamily",cb);mc.jumpToEnd()})}},{key:"setPadding",value:function(cb){this.target.padding=Hb.Rectangle.inset(cb)}},{key:"setPaddingTop",value:function(cb){var ob=this.target.padding;this.target.padding=Hb.Rectangle.inset(ob.left(),cb,ob.right(),ob.bottom())}},{key:"setPaddingLeft",value:function(cb){var ob=
this.target.padding;this.target.padding=Hb.Rectangle.inset(cb,ob.top(),ob.right(),ob.bottom())}},{key:"setPaddingRight",value:function(cb){var ob=this.target.padding;this.target.padding=Hb.Rectangle.inset(ob.left(),ob.top(),cb,ob.bottom())}},{key:"setPaddingBottom",value:function(cb){var ob=this.target.padding;this.target.padding=Hb.Rectangle.inset(ob.left(),ob.top(),ob.right(),cb)}},{key:"setLineWrapping",value:function(cb){this.target.lineWrapping=cb}},{key:"changeFontWeight",value:function(cb){this.changeAttributeInSelectionOrMorph("fontWeight",
cb)}},{key:"changeTextAlign",value:function(cb){this.changeAttributeInSelectionOrMorph("textAlign",cb)}},{key:"changeFontColor",value:function(cb){this.changeAttributeInSelectionOrMorph("fontColor",cb)}},{key:"changeFontSize",value:function(cb){this.changeAttributeInSelectionOrMorph("fontSize",cb)}},{key:"changeFixedWidth",value:function(cb){this.target.fixedWidth=cb}},{key:"changeFixedHeight",value:function(cb){this.target.fixedHeight=cb}},{key:"changeLink",value:function(){var cb=this,ob,Zb,mc,
Tb,pa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ja){if(1==Ja.nextAddress)return ob=cb.target,Zb=ob.selection,mc=ob.getStyleInRange(Zb),Tb=mc.link,Ja.yield(cb.world().prompt("Set link",{input:Tb||"https://"}),2);pa=Ja.yieldResult;ob.undoManager.group();ob.setStyleInRange({link:pa||void 0},Zb);ob.undoManager.group();cb.autoRemove&&cb.remove();Ja.jumpToEnd()})}},{key:"toggleUnderline",value:function(){this.changeAttributeInSelectionOrMorph("textDecoration",function(cb){return"underline"===
cb?"none":"underline"})}},{key:"toggleItalic",value:function(){this.changeAttributeInSelectionOrMorph("fontStyle",function(cb){return"italic"===cb?"normal":"italic"})}},{key:"toggleBold",value:function(){this.changeAttributeInSelectionOrMorph("fontWeight",function(cb){return"bold"===cb||"700"===cb?"normal":"bold"})}},{key:"copyStyle",value:function(){var cb=this,ob=this.target,Zb=this.ui.applyStyleButton;ob=ob.selection.isEmpty()?ob.defaultTextStyle:ob.getStyleInRange(ob.selection);var mc=JSON.stringify(ob,
null,2);this.constructor.copiedStyle=ob;Zb.tooltip="paste style\n"+mc;this.env.eventDispatcher.doCopyWithMimeTypes([{type:"text/plain",data:mc},{type:"application/morphic-text-style",styleString:mc}]).then(function(){return cb.setStatusMessage("Copied style\n"+mc)}).catch(function(Tb){return cb.showError(Tb)})}},{key:"pasteStyle",value:function(){var cb=this,ob=this.target,Zb=this.constructor.copiedStyle;ob.selection.isEmpty()?Object.assign(ob,Zb):ob.selections.forEach(function(mc){return ob.addTextAttribute(cb.constructor.copiedStyle,
mc)});this.update()}},{key:"clearStyle",value:function(){var cb=this.target;cb.selections.forEach(function(ob){return cb.resetStyleInRange(ob)});this.update()}},{key:"configureRichTextOptions",value:function(){this.getSubmorphNamed("config panel")&&this.getSubmorphNamed("config panel").remove();var cb=this.defaultSpec,ob=this.uiSpec;cb=this.addMorph({name:"config panel",layout:new Hb.VerticalLayout({spacing:5}),epiMorph:!0,submorphs:[].concat($jscomp.arrayFromIterable(Object.keys(cb).map(function(Zb){var mc=
ob.rows.some(function(Tb){return Tb.some(function(pa){return pa===Zb})});return{type:"labeledcheckbox",label:Zb,name:Zb,checked:mc}})),[{layout:new Hb.HorizontalLayout({spacing:3}),submorphs:[{type:"button",name:"OK button",label:"OK"},{type:"button",name:"cancel button",label:"Cancel"}]}])});cb.center=this.innerBounds().center();Hb.connect(cb.getSubmorphNamed("OK button"),"fire",this,"configureAccepted");Hb.connect(cb.getSubmorphNamed("cancel button"),"fire",this,"configureCanceled")}},{key:"configureAccepted",
value:function(){var cb=this.getSubmorphNamed("config panel");cb&&(cb.remove(),cb.submorphs.filter(function(ob){return"LabeledCheckBox"===ob.constructor.name}))}},{key:"configureCanceled",value:function(){var cb=this.getSubmorphNamed("config panel");cb&&cb.remove()}},{key:"close",value:function(){var cb=this;this.target&&this.target.attributeConnections&&this.target.attributeConnections.forEach(function(ob){return ob.targetObj===cb&&ob.disconnect()});this.remove()}},{key:"alwaysTargetFocusedMorph",
value:function(){this.startStepping(1500,"updateTarget")}},{key:"updateTarget",value:function(){var cb=this.world();cb&&(cb=cb.focusedMorph)&&(cb.isLabel||cb.isText)&&!this.isAncestorOf(cb)&&this.target!==cb&&this.focusOn(cb,!1)}},{key:"onMouseUp",value:function(cb){var ob=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Zb){if(1==Zb.nextAddress)return Zb.yield(ob.whenRendered(),2);ob.update();Zb.jumpToEnd()})}},{key:"attachToWorld",value:function(){Hb.connect($world,"onMouseDown",
this,"updateTarget",{garbageCollect:!0})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"RichTextControl"}},{key:"properties",get:function(){return{autoRemove:{defaultValue:!1},target:{},toggleColor:{},managedProps:{readOnly:!0,get:function(){return"fontFamily fontWeight fontSize fontStyle isText fontColor textAlign link textDecoration fixedWidth fixedHeight lineWrapping padding".split(" ")}},updateSpec:{get:function(){var cb=this;return Object.assign({fontSelection:function(ob,Zb){var mc=
ob.fontFamily;(ob=mc&&Zb.items.find(function(Tb){return Tb.value.toLowerCase()===mc.toLowerCase()}))?Zb.selection=ob.value:mc&&(Zb.items=Zb.items.concat({isListItem:!0,label:[mc,{fontFamily:mc}],value:mc}),Zb.selection=Hb.arr.last(Zb.items));Zb.fit();Zb.width=Math.max(Zb.width,170)},fontWeightSelection:function(ob,Zb){Zb.selection="normal"==ob.fontWeight?"Medium":ob.fontWeight?Hb.string.capitalize(ob.fontWeight):"Medium"},boldButton:function(ob,Zb){cb.toggleButton(Zb,"bold"===ob.fontWeight)},italicButton:function(ob,
Zb){cb.toggleButton(Zb,"italic"===ob.fontStyle)},underlineButton:function(ob,Zb){cb.toggleButton(Zb,"underline"===ob.textDecoration)},linkButton:function(ob,Zb){cb.toggleButton(Zb,!!ob.link)},colorPicker:function(ob,Zb){Zb.colorValue=ob.fontColor},fontSizeField:function(ob,Zb){Zb.number=ob.fontSize},fixedWidthControl:function(ob,Zb){ob.isText?Zb.enable():Zb.disable();Zb.checked=ob.fixedWidth},fixedHeightControl:function(ob,Zb){ob.isText?Zb.enable():Zb.disable();Zb.checked=ob.fixedHeight},lineWrappingControl:function(ob,
Zb){var mc=$jscomp.makeIterator(Zb.submorphs);Zb=mc.next().value;mc=mc.next().value;Zb.checked=!!ob.lineWrapping;ob.isText?Zb.enable():Zb.disable();mc.deactivated=!ob.lineWrapping;mc.deactivated?mc.opacity=.5:(mc.opacity=1,mc.selection=ob.lineWrapping)},paddingControl:function(ob,Zb){var mc=ob.padding,Tb=mc.left();ob=mc.top();var pa=mc.right();mc=mc.bottom();var Ja=!Hb.arr.every([Tb,ob,pa,mc],function(X){return X==Tb});Zb.get("multi value indicator").visible=Ja;Hb.connect(Zb.get("multi value indicator"),
"onMouseDown",Zb.get("padding field"),"number",{converter:"() => left",varMapping:{left:Tb}});Zb.get("padding field").number=Tb;Zb.get("padding field").visible=!Ja;Zb.get("padding field top").number=ob;Zb.get("padding field left").number=Tb;Zb.get("padding field right").number=pa;Zb.get("padding field bottom").number=mc}},["left","center","right","block"].reduce(function(ob,Zb){ob[Zb+"Align"]=function(mc,Tb){Tb.deactivated=!mc.isText;cb.toggleButton(Tb,mc.textAlign==Zb)};return ob},{}))}},ui:{get:function(){var cb=
this,ob={fontSelection:"font selection",fontWeightSelection:"font weight selection",boldButton:"bold button",italicButton:"italic button",underlineButton:"underline button",linkButton:"link button",leftAlign:"left align",centerAlign:"center align",rightAlign:"right align",blockAlign:"block align",fontSizeField:"font size field",colorPicker:"color picker",copyStyleButton:"copy style",applyStyleButton:"apply style",removeStyleButton:"remove style",fixedHeightControl:"fixed height control",fixedWidthControl:"fixed width control",
lineWrappingControl:"line wrapping control",paddingControl:"padding control",paddingField:"padding field",paddingFieldTop:"padding field top",paddingFieldLeft:"padding field left",paddingFieldRight:"padding field right",paddingFieldBottom:"padding field bottom"};return Hb.obj.extract(ob,Hb.obj.keys(ob),function(Zb,mc){return cb.getSubmorphNamed(mc)})}}}}},{key:"openDebouncedFor",value:function(cb){var ob=cb.selection;if(ob.isEmpty()){var Zb=Hb.cachedControls.get(cb);Zb&&(Zb.update(),Zb.alignAtTarget(),
Zb.world()||cb.world().addMorph(Zb))}else Hb.fun.debounceNamed(cb.id+"openRichTextControl",600,function(){var mc=Hb.cachedControls.get(cb);ob.isEmpty()?mc&&mc.removeFocus():(mc&&mc.world()||(mc=new Hb.RichTextControl,Hb.cachedControls.set(cb,mc)),cb.world().addMorph(mc),mc.focusOn(cb,!0),mc.alwaysTargetFocusedMorph())})()}},{key:"openFor",value:function(cb){var ob=Hb.cachedControls.get(cb);ob?ob.update():(ob=new Hb.RichTextControl,Hb.cachedControls.set(cb,ob),ob.focusOn(cb,!0),ob.alwaysTargetFocusedMorph());
ob.alignAtTarget();ob.world()||cb.world().addMorph(ob);return ob}}],Ia,{pathInPackage:function(){return"text/ui.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"lively.ide",version:"0.1.0"}}},{start:624,end:17067})}(Hb.Morph);Hb.RichTextControl=Bb;Hb.RichTextControl=Bb;Hb.RichTextControl=Bb;Bb=lively.FreezerRuntime.recorderFor("ProtoSearchField/index.js");Bb.SearchField=
Cc;var Mb=function(Oa){var Ia=lively.FreezerRuntime.recorderFor("ProtoSearchField/index.js"),eb=Ia.hasOwnProperty("ProtoSearchField")&&"function"===typeof Ia.ProtoSearchField?Ia.ProtoSearchField:Ia.ProtoSearchField=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return pe(eb,Oa,void 0,[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ProtoSearchField"}},{key:"properties",get:function(){return{master:{initialize:function(){}}}}}],
Ia,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoSearchField",version:"0.1.1-0"}}},{start:76,end:221})}(Bb.SearchField);Mb=Bb.ProtoSearchField;Bb.default=Mb;var Na=lively.FreezerRuntime.recorderFor("ProtoTree/index.js");Na.Tree=Ic;Na.TreeData=Sb;Bb=function(Oa){var Ia=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),
eb=Ia.hasOwnProperty("TestTreeData")&&"function"===typeof Ia.TestTreeData?Ia.TestTreeData:Ia.TestTreeData=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return pe(eb,Oa,[{key:"display",value:function(cb){return cb.name}},{key:"isCollapsed",value:function(cb){return cb.isCollapsed}},{key:"collapse",value:function(cb,ob){cb.isCollapsed=ob}},{key:"getChildren",value:function(cb){return cb.isLeaf?null:cb.isCollapsed?[]:
cb.children}},{key:"isLeaf",value:function(cb){return cb.isLeaf}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"TestTreeData"}}],Ia,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:113,end:417})}(Na.TreeData);Na.TestTreeData=Bb;Na.TestTreeData=Bb;Na.TestTreeData=Bb;Bb=function(Oa){var Ia=
lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),eb=Ia.hasOwnProperty("ProtoTree")&&"function"===typeof Ia.ProtoTree?Ia.ProtoTree:Ia.ProtoTree=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return pe(eb,Oa,void 0,[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ProtoTree"}},{key:"properties",get:function(){return{treeData:{initialize:function(){this.treeData=new Na.TestTreeData({name:"root",isCollapsed:!1,
isLeaf:!1,children:[{name:"child 1",isLeaf:!0},{name:"child 2",isLeaf:!1,isCollapsed:!0,children:[{name:"child 2 - 1",isLeaf:!0}]},{name:"child 3",isLeaf:!1,isCollapsed:!1,children:[{name:"child 3 - 1",isLeaf:!0},{name:"child 3 - 2",isLeaf:!0}]},{name:"child 4",isLeaf:!0}]})}},master:{initialize:function(){}}}}}],Ia,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:434,end:1297})}(Na.Tree);Bb=Na.ProtoTree;Na.default=Bb;Bb=lively.FreezerRuntime.recorderFor("ProtoNumberWidget/index.js");Bb.NumberWidget=dd;Mb=function(Oa){var Ia=lively.FreezerRuntime.recorderFor("ProtoNumberWidget/index.js"),eb=Ia.hasOwnProperty("ProtoNumberWidget")&&"function"===typeof Ia.ProtoNumberWidget?Ia.ProtoNumberWidget:Ia.ProtoNumberWidget=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return pe(eb,Oa,void 0,[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ProtoNumberWidget"}},{key:"properties",get:function(){return{master:{initialize:function(){}}}}}],Ia,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoNumberWidget",version:"0.1.1-0"}}},{start:76,end:224})}(Bb.NumberWidget);Mb=Bb.ProtoNumberWidget;
Bb.default=Mb;Bb=lively.FreezerRuntime.recorderFor("FrameResizer/index.js");Bb.Morph=qd;Mb=function(Oa){var Ia=lively.FreezerRuntime.recorderFor("FrameResizer/index.js"),eb=Ia.hasOwnProperty("FrameResizer")&&"function"===typeof Ia.FrameResizer?Ia.FrameResizer:Ia.FrameResizer=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return pe(eb,Oa,[{key:"onDrag",value:function(cb){var ob=this.owner.left;cb=cb.positionIn(this).x;
cb*="left"==this.direction?-1:1;this.owner.width+=cb;350>this.owner.width&&(cb+=350-this.owner.width,this.owner.width=350);this.owner.left="left"==this.direction?ob-cb:ob}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"FrameResizer"}},{key:"properties",get:function(){return{direction:{type:"Enum",values:["left","right"]}}}}],Ia,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"FrameResizer",version:"0.1.1-24"}}},{start:56,end:840})}(Bb.Morph);Mb=Bb.FrameResizer;Bb.default=Mb;var Ua=lively.FreezerRuntime.recorderFor("ShapeLayoutControl/index.js");Ua.Morph=qd;Ua.morph=Oc;Ua.layouts=Jc;Ua.string=zb;Ua.connect=cc;Ua.noUpdate=Md;Ua.InteractiveMorphSelector=Jd;Ua.Color=ne;Ua.pt=Ye;Bb=function(Oa){var Ia=lively.FreezerRuntime.recorderFor("ShapeLayoutControl/index.js"),eb=Ia.hasOwnProperty("ShapeLayoutControl")&&"function"===typeof Ia.ShapeLayoutControl?
Ia.ShapeLayoutControl:Ia.ShapeLayoutControl=function(cb){cb&&cb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return pe(eb,Oa,[{key:"focusOn",value:function(cb){this.target=cb;this.update(!1)}},{key:"setupConnections",value:function(){var cb=this.ui;Ua.connect(cb.submorphSettingsControl,"fire",this,"chooseSubmorphToChangeLayoutSettings");Ua.connect(cb.dragmeControl,"onDragStart",this,"onSubmorphSettingsDragStart");Ua.connect(cb.xAxisPolicyControl,
"selection",this,"updateSubmorphProportionalLayoutSettings",{converter:'policy => ({\n        policy,\n        axis: "x",\n        submorph: self.selectedSubmorph,\n      })',varMapping:{self:this}});Ua.connect(cb.yAxisPolicyControl,"selection",this,"updateSubmorphProportionalLayoutSettings",{converter:'policy => ({\n        policy,\n        axis: "y",\n        submorph: self.selectedSubmorph,\n      })',varMapping:{self:this}});for(var ob={},Zb=$jscomp.makeIterator(this.managedProps),mc=Zb.next();!mc.done;ob=
{$jscomp$loop$prop$prop$2576:ob.$jscomp$loop$prop$prop$2576},mc=Zb.next()){var Tb=$jscomp.makeIterator(mc.value),pa=Tb.next().value;mc=Tb.next().value;Tb.next().value||(ob.$jscomp$loop$prop$prop$2576=this.join(pa),Tb=cb[this.join(pa,"control")],Ua.connect(Tb,mc,this,"updateLayout",{updater:function(Ja){return function(X,ua){X(Ja.$jscomp$loop$prop$prop$2576,ua)}}(ob),varMapping:{prop:ob.$jscomp$loop$prop$prop$2576}}))}}},{key:"lower",value:function(cb){return cb.charAt(0).toLowerCase()+cb.slice(1)}},
{key:"join",value:function(cb,ob){return this.lower(Ua.string.camelCaseString(cb+(ob?" "+ob:"")))}},{key:"updateLayoutOfTarget",value:function(cb){cb=Ua.layouts[Ua.string.camelCaseString(cb)];this.target.layout=cb?new cb({autoResize:!1}):null;this.update()}},{key:"updateLayout",value:function(cb,ob){this.target.layout[cb]=ob}},{key:"update",value:function(cb){var ob=this;this.target&&Ua.noUpdate(function(){for(var Zb=ob.ui,mc=ob.target.layout||{name:function(){return"No"}},Tb=$jscomp.makeIterator(ob.managedProps),
pa=Tb.next();!pa.done;pa=Tb.next()){var Ja=$jscomp.makeIterator(pa.value);pa=Ja.next().value;var X=Ja.next().value;Ja.next();Ja=Zb[ob.join(pa,"control")];var ua=Zb[ob.join(pa,"label")];if(X)if("type"===pa)Ja.selection=mc.name()+" Layout";else{var ab=mc[ob.join(pa)],rb="undefined"!==typeof ab;if(rb){switch(pa){case "align":Ja.items=mc.possibleAlignValues;break;case "direction":Ja.items=mc.possibleDirectionValues;break;case "axis":Ja.items=mc.possibleAxisValues}Ja[X]=ab}ua.isLayoutable=ua.visible=rb}}ob.showGridLayoutControl("Grid"===
mc.name());ob.showProportionalControl("Proportional"===mc.name())})}},{key:"updateSubmorphProportionalLayoutSettings",value:function(cb){var ob={};this.target.layout.changeSettingsFor(cb.submorph,(ob[cb.axis]=cb.policy,ob),!0)}},{key:"onSubmorphSettingsDragStart",value:function(cb){var ob=this;cb.stop();var Zb=this.target.layout,mc=Zb.settingsFor(this.selectedSubmorph),Tb=[],pa;for(pa in mc)Tb=[].concat($jscomp.arrayFromIterable(Tb),[pa+": ",{fontWeight:"bold"},mc[pa]+" ",{}]);var Ja=Ua.morph({type:"label",
fontColor:Ua.Color.white,value:Tb,fill:Ua.Color.black.withA(.7),padding:5,borderRadius:10,isLayoutable:!1});Ja.wantsToBeDroppedOn=function(X){return Zb.layoutableSubmorphs.includes(X)};Ja.onBeingDroppedOn=function(X,ua){Ja.remove();if(X=Zb.layoutableSubmorphs.includes(ua)?ua:cb.world.morphsContainingPoint(cb.hand.position).find(function(ab){return Zb.layoutableSubmorphs.includes(ab)}))ob.updateSubmorphProportionalLayoutSettings({policy:mc.x,axis:"x",submorph:X}),ob.updateSubmorphProportionalLayoutSettings({policy:mc.y,
axis:"y",submorph:X}),X.show(),$world.setStatusMessage("layout settings applied")};cb.hand.grab(Ja);Ja.moveBy(Ua.pt(10,10))}},{key:"chooseSubmorphToChangeLayoutSettings",value:function(){var cb=this,ob,Zb,mc,Tb,pa,Ja,X,ua,ab;return $jscomp.asyncExecutePromiseGeneratorProgram(function(rb){switch(rb.nextAddress){case 1:return ob=cb.target.layout.layoutableSubmorphs,cb.manageFocus=!0,cb.env.eventDispatcher.isKeyPressed("Shift")?(mc=ob.map(function(vc){return{isListItem:!0,string:String(vc),value:vc}}),
rb.yield($world.listPrompt("Select morph",mc,{onSelection:function(vc){return vc.show()}}),5)):rb.yield(Ua.InteractiveMorphSelector.selectMorph(cb.world(),cb,function(vc){return ob.includes(vc)}),4);case 4:Zb=rb.yieldResult;rb.jumpTo(3);break;case 5:Tb=rb.yieldResult,pa=$jscomp.makeIterator(Tb.selected),Zb=pa.next().value;case 3:cb.manageFocus=!1;cb.selectedSubmorph=Zb;if(!Zb)return rb.return();Ja=cb.ui;X=Ja.xAxisPolicyControl;ua=Ja.yAxisPolicyControl;ab=cb.target.layout.settingsFor(Zb);Ua.noUpdate(function(){X.selection=
ab.x;ua.selection=ab.y});rb.jumpToEnd()}})}},{key:"showProportionalControl",value:function(cb){var ob=this.ui;[ob.submorphSettingsControl,ob.dragmeControl,ob.xAxisPolicyControl,ob.xAxisPolicyLabel,ob.yAxisPolicyControl,ob.yAxisPolicyLabel].forEach(function(Zb){Zb.isLayoutable=cb;Zb.visible=cb})}},{key:"showGridLayoutHalo",value:function(){$world.showLayoutHaloFor(this.target)}},{key:"showGridLayoutControl",value:function(cb){var ob=this.ui.configureGridLayoutControl;ob.visible=ob.isLayoutable=cb}}],
[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ShapeLayoutControl"}},{key:"properties",get:function(){return{managedProps:{get:function(){return[["type","selection",!0],["align","selection"],["direction","selection"],["axis","selection"],["spacing","number"],["auto resize","checked"],["resize submorphs","checked"],["x axis policy","selection",!0],["y axis policy","selection",!0],["react to submorph animations","checked"],["submorph settings",!1,!0],["order by index","checked"],["dragme",
!1,!0],["configure grid layout",!1,!0]]}},ui:{readOnly:!0,get:function(){for(var cb={labelContainer:this.getSubmorphNamed("label container"),controlContainer:this.getSubmorphNamed("control container")},ob=$jscomp.makeIterator(this.managedProps),Zb=ob.next();!Zb.done;Zb=ob.next()){var mc=$jscomp.makeIterator(Zb.value).next().value;Zb=mc+" label";mc+=" control";cb[this.join(Zb)]=this.getSubmorphNamed(Zb);cb[this.join(mc)]=this.getSubmorphNamed(mc)}return cb}}}}}],Ia,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeLayoutControl",version:"0.1.1-166"}}},{start:345,end:7771})}(Ua.Morph);Bb=Ua.ShapeLayoutControl;Ua.default=Bb}}});