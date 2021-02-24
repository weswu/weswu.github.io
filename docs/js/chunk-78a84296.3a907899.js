(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a84296"],{6796:function(t,e,s){},da78:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-lg":"","pa-0":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-basic-card",{attrs:{title:"Alerts - Base","toolbar-height":"56"}},[s("template",{slot:"card-content"},t._l(t.alerts,(function(e,r){return s("v-alert",{key:r,attrs:{value:e.value,type:e.type}},[t._v(" This is a "+t._s(e.type)+" alert. ")])})),1)],2)],1),s("v-flex",{attrs:{xs12:""}},[s("v-basic-card",{attrs:{title:"Alerts - Outline"}},[s("template",{slot:"card-content"},t._l(t.alerts,(function(e,r){return s("v-alert",{key:r,attrs:{value:e.value,type:e.type,outline:""}},[t._v(" This is a "+t._s(e.type)+" alert. ")])})),1)],2)],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-basic-card",{attrs:{title:"Alerts - Custom"}},[s("template",{slot:"card-content"},[s("v-alert",{attrs:{value:!0,color:"cyan",icon:"new_releases"}},[t._v(" This is a success alert with custom color and icon. ")])],1)],2)],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-basic-card",{attrs:{title:"Alerts - Closable"}},[s("template",{slot:"card-content"},[s("v-alert",{attrs:{dismissible:"",type:"success"},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[t._v(" This is a success alert that is closable. ")]),s("div",{staticClass:"text-xs-center"},[t.display?t._e():s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){t.display=!0}}},[t._v(" Reset ")])],1)],1)],2)],1),s("v-flex",{attrs:{xs12:""}},[s("v-basic-card",{attrs:{title:"Alerts - Display transition"}},[s("template",{slot:"card-content"},[s("div",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.alert=!t.alert}}},[t._v(" Toggle ")])],1),s("v-alert",{attrs:{value:t.alert,type:"success",transition:"scale-transition"}},[t._v(" This is a success alert. ")])],1)],2)],1)],1)],1)},i=[],a={name:"VAlerts",data:function(){return{alerts:[{type:"info",value:!0,outline:!0},{type:"warning",value:!0,outline:!0},{type:"success",value:!0,outline:!0},{type:"error",value:!0,outline:!0}],alert:!1,display:!0}}},o=a,l=s("5d22"),n=s("7aad"),c=s.n(n),d=(s("6796"),s("2724")),h=s("15c4"),u=s("c04f"),p=s("255a"),v=s("fdbc"),m=s("812a"),y=s("9103"),_=s("93be"),b=Object(y["a"])(d["a"],p["a"],m["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(h["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(u["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(u["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...d["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||v["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(_["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),f=s("664c"),g=s("3167"),x=s("3773"),C=s("ca20"),B=Object(l["a"])(o,r,i,!1,null,null,null);e["default"]=B.exports;c()(B,{VAlert:b,VBtn:f["a"],VContainer:g["a"],VFlex:x["a"],VLayout:C["a"]})}}]);