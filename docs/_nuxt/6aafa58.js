(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{481:function(t,e,o){var content=o(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("7422f97d",content,!0,{sourceMap:!1})},484:function(t,e,o){"use strict";o(481)},485:function(t,e,o){var r=o(15)(!1);r.push([t.i,".floatOnHover[data-v-4a16e38d]{cursor:pointer;transition:.5s ease}.floatOnHover[data-v-4a16e38d]:hover{transform:scale(1.05)}",""]),t.exports=r},491:function(t,e,o){var content=o(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("eec33eb8",content,!0,{sourceMap:!1})},501:function(t,e,o){"use strict";o.r(e);var r={name:"BlogArticleCard",props:{blog:Object},methods:{ViewBlog:function(){this.$router.push(this.blog.path)}}},n=(o(484),o(33)),l=o(131),c=o.n(l),d=o(200),f=o(84),v=o(164),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"ma-2 floatOnHover",attrs:{hover:"",ripple:"",outlined:"","max-width":"256"},on:{click:t.ViewBlog}},[o("v-img",{attrs:{contain:"",src:t.blog.image}}),t._v(" "),o("v-card-title",{staticStyle:{"word-break":"normal !important"}},[o("span",{staticClass:"font-weight-black",staticStyle:{"background-color":"white"}},[t._v(t._s(t.blog.title))])]),t._v(" "),o("v-card-subtitle",[t._v("\n    by "+t._s(t.blog.author)+" "),o("br"),o("span",{staticClass:"font-italic"},[t._v(" "+t._s(t.blog.date))])]),t._v(" "),o("v-card-text",[t._v("\n    "+t._s(t.blog.description)+"\n  ")])],1)}),[],!1,null,"4a16e38d",null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VImg:v.a})},506:function(t,e,o){"use strict";o(491)},507:function(t,e,o){var r=o(15)(!1);r.push([t.i,".ImgFilter[data-v-10d03160]{filter:brightness(500)}",""]),t.exports=r},563:function(t,e,o){"use strict";o.r(e);var r={name:"blog",data:function(){return{Blogs:[]}},methods:{},mounted:function(){var t=this;this.$content("blogs").fetch().then((function(e){t.Blogs=e,console.log(e)}))}},n=(o(506),o(33)),l=o(131),c=o.n(l),d=o(467),f=o(468),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.Blogs,(function(t){return o("BlogArticleCard",{key:t.createdAt,attrs:{blog:t}})})),1)],1)}),[],!1,null,"10d03160",null);e.default=component.exports;c()(component,{BlogArticleCard:o(501).default}),c()(component,{VContainer:d.a,VRow:f.a})}}]);