(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{461:function(t,e,o){var content=o(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("32b787b2",content,!0,{sourceMap:!1})},470:function(t,e,o){"use strict";o(461)},471:function(t,e,o){var r=o(17)(!1);r.push([t.i,".floatOnHover[data-v-0ba17d3e]{cursor:pointer;transition:.5s ease}.blog-card-container[data-v-0ba17d3e]{color:#fff!important}.floatOnHover[data-v-0ba17d3e]:hover{transform:scale(1.05)}.blog-card[data-v-0ba17d3e]{border-radius:20px;height:480px;max-width:350px;position:relative;filter:drop-shadow(0 10px 20px rgba(41,41,42,.07))}.blog-banner[data-v-0ba17d3e]{border-radius:20px 20px 0 0}.blogTitle[data-v-0ba17d3e]{color:#000!important;font-size:24px!important;font-weight:600}.blogDesc[data-v-0ba17d3e]{color:rgba(33,55,81,.69804)!important;font-size:16px!important;font-weight:400;line-height:24px}.blog-below-section[data-v-0ba17d3e]{margin:0 0 15px;width:100%;justify-content:space-between;position:absolute;bottom:0}.blog-author-image[data-v-0ba17d3e]{border-radius:100px;height:30px;width:30px;box-shadow:none!important}.blog-author-text[data-v-0ba17d3e]{color:rgba(33,55,81,.69804)!important;font-size:13px!important;font-weight:400!important;padding:10px;width:auto}@media only screen and (max-width:768px){.blog-card[data-v-0ba17d3e]{max-width:300px;height:auto}.blogDesc[data-v-0ba17d3e],.blogTitle[data-v-0ba17d3e]{text-align:center}.blog-below-section[data-v-0ba17d3e]{flex-direction:column;align-items:center;position:relative}.blog-author-text[data-v-0ba17d3e]{padding:5px}}",""]),t.exports=r},504:function(t,e,o){"use strict";o.r(e);var r={name:"BlogCard",props:{blog:Object},methods:{ViewBlog:function(){this.$router.push(this.blog.path)}}},l=(o(470),o(70)),n=o(132),d=o.n(n),c=o(196),v=o(86),h=o(163),x=o(125),m=o(133),f=o(440),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mx-10 mb-5 blog-card-container"},[o("v-card",{staticClass:"mx-auto mb-6 blog-card",attrs:{outlined:"",ripple:""},on:{click:t.ViewBlog}},[o("v-row",{staticClass:"ma-0"},[o("v-img",{staticClass:"blog-banner",attrs:{src:t.blog.image,width:"100%",height:"200px"}})],1),t._v(" "),o("v-card-actions",[o("v-list-item",{staticClass:"grow pa-0"},[o("v-list-item-content",[o("v-card-text",{staticClass:"blogTitle py-0"},[t._v(" "+t._s(t.blog.title)+" ")])],1)],1)],1),t._v(" "),o("v-card-text",{staticClass:"blogDesc px-7 pt-0"},[t._v("\n      "+t._s(t.blog.description)+"\n    ")]),t._v(" "),o("v-row",{staticClass:" blog-below-section px-7"},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"elevation-6 blog-author-image",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}}),t._v(" "),o("v-card-text",{staticClass:"blog-author-text"},[t._v("\n          "+t._s(t.blog.author)+"\n        ")])],1),t._v(" "),o("v-card-text",{staticClass:"blog-author-text"},[t._v("\n          "+t._s(t.blog.date)+"\n      ")])],1)],1)],1)}),[],!1,null,"0ba17d3e",null);e.default=component.exports;d()(component,{VCard:c.a,VCardActions:v.a,VCardText:v.c,VImg:h.a,VListItem:x.a,VListItemContent:m.a,VRow:f.a})}}]);