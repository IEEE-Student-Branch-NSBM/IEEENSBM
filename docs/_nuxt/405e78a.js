(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{479:function(t,e,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("7132a15d",content,!0,{sourceMap:!1})},480:function(t,e,r){var o=r(17)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},496:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3a5aea25",content,!0,{sourceMap:!1})},541:function(t,e,r){"use strict";r(496)},542:function(t,e,r){var o=r(17)(!1);o.push([t.i,".ArticleStyle[data-v-b8bb8da8],.ArticleStyle[data-v-b8bb8da8] a{color:#000!important}.blog-author-image[data-v-b8bb8da8]{border-radius:100px;height:50px;width:50px;box-shadow:none!important}",""]),t.exports=o},543:function(t,e,r){"use strict";r(8),r(5),r(7),r(10),r(6),r(11);var o=r(0),l=(r(479),r(27));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},585:function(t,e,r){"use strict";r.r(e);r(30),r(42);var o={name:"articleview",data:function(){return{article:Object}},mounted:function(){var t=this;this.$content(this.$route.path.replace("/","")).fetch().then((function(e){t.article=e,console.log(e)})),console.log(this.$route.path.replace("/",""))}},l=(r(541),r(67)),n=r(129),c=r.n(n),d=r(437),h=r(543),v=r(160),f=r(438),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"text-center text-md-left pt-md-15 mt-md-10 mb-10 pb-10"},[r("h1",{staticClass:"text-h2 my-8 font-weight-medium"},[t._v(t._s(t.article.title))]),t._v(" "),r("v-row",{staticClass:"no-gutters justify-space-between mb-10"},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"elevation-6 mr-5 blog-author-image",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}}),t._v(" "),r("h4",{staticClass:"font-weight-medium",staticStyle:{color:"#213751B2"}},[t._v(t._s(t.article.author))])],1),t._v(" "),r("h4",{staticClass:"d-flex align-center",staticStyle:{color:"#213751B2"}},[t._v(t._s(t.article.date))])]),t._v(" "),r("v-img",{attrs:{height:"480",width:"100%",src:t.article.image}}),t._v(" "),r("div",{staticClass:"ArticleStyle my-10 mt-10 text-center text-md-justify"},[r("nuxt-content",{staticClass:"black--text",attrs:{document:t.article}})],1),t._v(" "),r("v-divider",{attrs:{color:"#ACACAC"}}),t._v(" "),r("v-row",{staticClass:"pt-10 justify-center"},[r("div",{staticClass:"d-flex justify-center flex-column align-center",attrs:{width:"300"}},[r("h4",{staticClass:"text-uppercase mb-5",staticStyle:{color:"#213751B2","letter-spacing":"0.1em"}},[t._v("Written by")]),t._v(" "),r("v-img",{staticClass:"elevation-6 mr-5 blog-author-image",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}}),t._v(" "),r("h3",{staticClass:"pt-3 font-weight-medium",staticStyle:{color:"#213751"}},[t._v(t._s(t.article.author))])],1)])],1)],1)}),[],!1,null,"b8bb8da8",null);e.default=component.exports;c()(component,{VContainer:d.a,VDivider:h.a,VImg:v.a,VRow:f.a})}}]);