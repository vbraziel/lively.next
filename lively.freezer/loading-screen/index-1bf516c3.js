System.register(["./__root_module__-b4667baa.js"],function(){var ta,lb,yb;return{setters:[function(Qb){ta=Qb.b3;lb=Qb.C;yb=Qb.as}],execute:function(){var Qb=lively.FreezerRuntime.recorderFor("StripeButton/index.js");Qb.Button=ta;Qb.Color=lb;var Kb=function(yd){var Cc=lively.FreezerRuntime.recorderFor("StripeButton/index.js"),rd=Cc.hasOwnProperty("StripeButton")&&"function"===typeof Cc.StripeButton?Cc.StripeButton:Cc.StripeButton=function(Fc){Fc&&Fc[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return yb(rd,yd,[{key:"onDrop",value:function(Fc){(Fc=$jscomp.makeIterator(Fc.hand.grabbedMorphs).next().value)&&Fc.isLabel&&(this.label=Fc.textAndAttributes,Fc.remove())}},{key:"onHoverIn",value:function(Fc){yb._get(Object.getPrototypeOf(rd.prototype),"onHoverIn",this).call(this,Fc);!1!==this.haloShadowEnabled&&(Fc=this.dropShadow.toJson(),Fc.blur=10,Fc.distance=3,this.animate({dropShadow:Fc,duration:200}))}},{key:"onHoverOut",value:function(Fc){yb._get(Object.getPrototypeOf(rd.prototype),
"onHoverOut",this).call(this,Fc);!1!==this.haloShadowEnabled&&(Fc=this.dropShadow.toJson(),Fc.blur=6,Fc.distance=1,this.animate({dropShadow:Fc,duration:200}))}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"StripeButton"}},{key:"properties",get:function(){return{haloShadowEnabled:{defaultValue:!0},toggleFill:{}}}}],Cc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"StripeButton",version:"0.1.1-26"}}},{start:121,end:1027})}(Qb.Button);Kb=Qb.StripeButton;Qb.default=Kb}}});