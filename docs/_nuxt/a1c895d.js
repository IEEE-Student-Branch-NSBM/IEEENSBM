(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,8],{449:function(t,e,o){var content=o(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("618dc740",content,!0,{sourceMap:!1})},452:function(t,e,o){"use strict";o.r(e);var n={name:"JoinUs"},r=(o(453),o(70)),l=o(132),c=o.n(l),d=o(203),v=o(86),m=o(438),f=o(439),x=o(163),h=o(440),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"DontBreakWords py-8 mb-5",attrs:{align:"center","no-gutters":""}},[o("v-col",[o("v-img",{attrs:{quality:"98",format:"webp",fit:"contain","mx-auto":"",width:"600",alt:"Brand Logo",src:"/Assets/Other/JoinUs.png"}})],1),t._v(" "),o("v-col",{staticClass:"px-sm-10 px-5"},[o("v-card-title",{staticClass:"pa-0 pb-2 JoinUs hidden-md-and-up"},[t._v("Be part of our "),o("br"),t._v(" creative community")]),t._v(" "),o("v-card-title",{staticClass:"pa-0 pb-2 JoinUs hidden-sm-and-down"},[t._v("Be part of our creative community")]),t._v(" "),o("v-card-text",{staticClass:"pa-0 pb-2 text-justify JoinUsPara"},[t._v("\n        We love what we do and we do it with passion. We value the\n        experimentation of the message and smart incentives.\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"link",attrs:{to:"/volunteer"}},[o("v-btn",{staticClass:"JoinUsButton px-10 py-5",attrs:{outlined:"",justify:"center"}},[t._v("\n          Join Us\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VContainer:f.a,VImg:x.a,VRow:h.a})},453:function(t,e,o){"use strict";o(449)},454:function(t,e,o){var n=o(17)(!1);n.push([t.i,".JoinUs{font-size:42px;font-weight:700;line-height:40px}@media only screen and (max-width:600px){.JoinUs{margin-top:10px;font-size:30px;line-height:40px}}.JoinUsPara{margin-top:10px;font-size:18px;font-weight:400;line-height:25px}.link{text-decoration:none!important}.JoinUsButton,.link{color:#fff!important}.JoinUsButton{background-color:#00609c;border-radius:10px;text-align:center;text-decoration:none;width:40%;font-weight:350;margin-top:10px}",""]),t.exports=n},461:function(t,e,o){var content=o(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("32b787b2",content,!0,{sourceMap:!1})},470:function(t,e,o){"use strict";o(461)},471:function(t,e,o){var n=o(17)(!1);n.push([t.i,".floatOnHover[data-v-0ba17d3e]{cursor:pointer;transition:.5s ease}.blog-card-container[data-v-0ba17d3e]{color:#fff!important}.floatOnHover[data-v-0ba17d3e]:hover{transform:scale(1.05)}.blog-card[data-v-0ba17d3e]{border-radius:20px;height:480px;max-width:350px;position:relative;filter:drop-shadow(0 10px 20px rgba(41,41,42,.07))}.blog-banner[data-v-0ba17d3e]{border-radius:20px 20px 0 0}.blogTitle[data-v-0ba17d3e]{color:#000!important;font-size:24px!important;font-weight:600}.blogDesc[data-v-0ba17d3e]{color:rgba(33,55,81,.69804)!important;font-size:16px!important;font-weight:400;line-height:24px}.blog-below-section[data-v-0ba17d3e]{margin:0 0 15px;width:100%;justify-content:space-between;position:absolute;bottom:0}.blog-author-image[data-v-0ba17d3e]{border-radius:100px;height:30px;width:30px;box-shadow:none!important}.blog-author-text[data-v-0ba17d3e]{color:rgba(33,55,81,.69804)!important;font-size:13px!important;font-weight:400!important;padding:10px;width:auto}@media only screen and (max-width:768px){.blog-card[data-v-0ba17d3e]{max-width:300px;height:auto}.blogDesc[data-v-0ba17d3e],.blogTitle[data-v-0ba17d3e]{text-align:center}.blog-below-section[data-v-0ba17d3e]{flex-direction:column;align-items:center;position:relative}.blog-author-text[data-v-0ba17d3e]{padding:5px}}",""]),t.exports=n},488:function(t,e,o){var content=o(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("0cf51fdd",content,!0,{sourceMap:!1})},504:function(t,e,o){"use strict";o.r(e);var n={name:"BlogCard",props:{blog:Object},methods:{ViewBlog:function(){this.$router.push(this.blog.path)}}},r=(o(470),o(70)),l=o(132),c=o.n(l),d=o(196),v=o(86),m=o(163),f=o(125),x=o(133),h=o(440),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mx-10 mb-5 blog-card-container"},[o("v-card",{staticClass:"mx-auto mb-6 blog-card",attrs:{outlined:"",ripple:""},on:{click:t.ViewBlog}},[o("v-row",{staticClass:"ma-0"},[o("v-img",{staticClass:"blog-banner",attrs:{src:t.blog.image,width:"100%",height:"200px"}})],1),t._v(" "),o("v-card-actions",[o("v-list-item",{staticClass:"grow pa-0"},[o("v-list-item-content",[o("v-card-text",{staticClass:"blogTitle py-0"},[t._v(" "+t._s(t.blog.title)+" ")])],1)],1)],1),t._v(" "),o("v-card-text",{staticClass:"blogDesc px-7 pt-0"},[t._v("\n      "+t._s(t.blog.description)+"\n    ")]),t._v(" "),o("v-row",{staticClass:" blog-below-section px-7"},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"elevation-6 blog-author-image",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}}),t._v(" "),o("v-card-text",{staticClass:"blog-author-text"},[t._v("\n          "+t._s(t.blog.author)+"\n        ")])],1),t._v(" "),o("v-card-text",{staticClass:"blog-author-text"},[t._v("\n          "+t._s(t.blog.date)+"\n      ")])],1)],1)],1)}),[],!1,null,"0ba17d3e",null);e.default=component.exports;c()(component,{VCard:d.a,VCardActions:v.a,VCardText:v.c,VImg:m.a,VListItem:f.a,VListItemContent:x.a,VRow:h.a})},509:function(t,e,o){"use strict";o(488)},510:function(t,e,o){var n=o(17)(!1);n.push([t.i,".heading-event[data-v-f0531256]{letter-spacing:0!important;font-size:64px;font-weight:700;margin-bottom:30px!important;margin-top:50px!important}.para-event[data-v-f0531256]{letter-spacing:0!important;padding-top:10px;justify-content:center;text-align:center;font-size:15px;font-weight:500;color:rgba(47,35,79,.8)}.ImgFilter[data-v-f0531256]{filter:brightness(500)}@media only screen and (max-width:768px){.heading-event[data-v-f0531256]{font-size:50px;font-weight:500;margin-bottom:25px!important;margin-top:25px!important}}",""]),t.exports=n},584:function(t,e,o){"use strict";o.r(e);var n={name:"blog",data:function(){return{Blogs:[]}},methods:{},mounted:function(){var t=this;this.$content("blogs").fetch().then((function(e){t.Blogs=e,console.log(e)}))}},r=(o(509),o(70)),l=o(132),c=o.n(l),d=o(86),v=o(439),m=o(440),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-card-title",{staticClass:"heading-event text-center md:text-left hidden-sm-and-down text-uppercase"},[t._v("\n        Blog\n    ")])],1),t._v(" "),o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-card-text",{staticClass:"para-event mx-sm-16 mx-0 mb-6"},[t._v("\n        Amet minim mollit non deserunt ullamco est sit aliqua \n        dolor do amet sint. Velit officia consequat duis enim \n        velit mollit. Exercitation veniam consequat sunt nostrud \n        amet.\n      ")])],1),t._v(" "),o("v-row",{staticClass:"py-6",attrs:{"no-gutters":"",justify:"center"}},t._l(t.Blogs,(function(t){return o("BlogCard",{key:t.id,attrs:{blog:t}})})),1),t._v(" "),o("JoinUs")],1)}),[],!1,null,"f0531256",null);e.default=component.exports;c()(component,{BlogCard:o(504).default,JoinUs:o(452).default}),c()(component,{VCardText:d.c,VCardTitle:d.d,VContainer:v.a,VRow:m.a})}}]);