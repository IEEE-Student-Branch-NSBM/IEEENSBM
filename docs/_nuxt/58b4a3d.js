(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{209:function(t,e,o){"use strict";o(425)},267:function(t,e,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2f61aa80",content,!0,{sourceMap:!1})},297:function(t,e,o){"use strict";o(22),o(340);var r={data:function(){return{Path:"",NavDrawer:!1,showNavbar:!0,lastScrollPosition:0,BackColor:"#00629B",Menu:[{Name:"Home",To:"/"},{Name:"Events",To:"/events"},{Name:"Blog",To:"/blog"},{Name:"EXCOM",To:"/excom"},{Name:"About US",To:"/aboutus"},{Name:"Contact Us",To:"/contact"},{Name:"Join Us",To:"/volunteer"}]}},methods:{onScroll:function(){var t=window.scrollY||document.documentElement.scrollTop;t<0||(window.innerHeight<window.innerWidth&&(t>=135&&(this.showNavbar=!1),t<=115&&(this.showNavbar=!0)),this.lastScrollPosition=t)},ChangeColor:function(){console.log(this.$route.name),"wie"===this.$route.name?this.BackColor="#702f8a":"cs"===this.$route.name?this.BackColor="#FFA300":this.BackColor="#00629B"}},mounted:function(){this.Path=this.$route.path.replaceAll("/",""),window.addEventListener("scroll",this.onScroll,{passive:!0})},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},n=(o(342),o(70)),l=o(132),c=o.n(l),v=o(441),d=o(447),m=o(203),h=o(196),f=o(86),_=o(438),w=o(439),E=o(442),C=o(198),x=o(163),k=o(199),y=o(125),S=o(133),N=o(443),I=o(446),V=o(440),B=o(57),T=o(444),M=o(445),L=o(448),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticClass:"DefaultFont"},[o("v-navigation-drawer",{class:{WIE:"wie"===t.Path,CS:"cs"===t.Path},attrs:{color:t.BackColor,temporary:"",app:""},model:{value:t.NavDrawer,callback:function(e){t.NavDrawer=e},expression:"NavDrawer"}},[o("v-list",[o("v-list-item",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-img",{attrs:{alt:"NSBM IEEE Student",src:"/Assets/Logos/IEEE_SB_Logo.png","max-width":"128"}})],1)],1),t._v(" "),t._l(t.Menu,(function(e){return o("v-list-item",{key:e.Name,attrs:{to:e.To,link:"",dark:""}},[o("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(e.Name))])],1)}))],2)],1),t._v(" "),o("header",{staticClass:"header"},[o("v-app-bar",{attrs:{"elevate-on-scroll":"",color:t.BackColor,app:"",dense:""}},[t.showNavbar?t._e():o("v-tabs",{staticClass:"justify-center d-md-flex",attrs:{"background-color":t.BackColor,dark:"","slider-size":"4"},on:{change:t.ChangeColor}},t._l(t.Menu,(function(e){return o("v-tab",{key:e.Name,attrs:{to:e.To}},[t._v(t._s(e.Name))])})),1),t._v(" "),t.showNavbar?o("div",[o("v-row",{attrs:{"no-gutters":"",align:"center"}},[o("v-btn",{staticClass:"hidden-md-and-up",attrs:{icon:""},on:{click:function(e){t.NavDrawer=!0}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-menu")])],1),t._v(" "),o("h3",{staticClass:"white--text hidden-sm-and-up text-center"},[t._v("\n            IEEE Student Branch of NSBM\n          ")])],1),t._v(" "),o("v-row",{staticClass:"hidden-sm-and-down",attrs:{"no-gutters":""}},[o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org",rel:"noreferrer",target:"_blank"}},[t._v("IEEE.org")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://ieeexplore.ieee.org",rel:"noreferrer"}},[t._v("IEEE "),o("i",[t._v("Xplore  ")]),t._v(" Digital Library")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://standards.ieee.org",rel:"noreferrer"}},[t._v("IEEE Standards")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://spectrum.ieee.org",rel:"noreferrer"}},[t._v("IEEE Spectrum")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org/sitemap",rel:"noreferrer"}},[t._v("More Sites")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org/join"}},[t._v("Join IEEE")])],1)],1):t._e()],1)],1),t._v(" "),o("v-main",{staticClass:"lighten-2",staticStyle:{"background-color":"#F3FBFF"}},[o("v-card",{staticClass:"rounded-0",attrs:{color:t.BackColor}},[o("v-card-title",{staticClass:"hidden-sm-and-down pt-2"},[o("v-row",{attrs:{"no-gutters":"",justify:"space-between",align:"center"}},[o("nuxt-img",{staticClass:"hidden-sm-and-down",attrs:{quality:"98",format:"webp",fit:"contain",height:"64",alt:"Brand Logo",src:"/Assets/Logos/MainLogo.png"}}),t._v(" "),o("nuxt-img",{staticClass:"hidden-sm-and-down",attrs:{alt:"IEEE Logo",quality:"98",format:"webp",fit:"contain",height:"64",src:"/Assets/Logos/IEEE_Logo.png"}})],1)],1),t._v(" "),o("v-tabs",{staticClass:"hidden-sm-and-down justify-center d-md-flex",attrs:{"background-color":t.BackColor,dark:"","slider-size":"4"},on:{change:t.ChangeColor}},t._l(t.Menu,(function(e){return o("v-tab",{key:e.Name,attrs:{to:e.To}},[t._v(t._s(e.Name))])})),1)],1),t._v(" "),o("nuxt")],1),t._v(" "),o("v-footer",{attrs:{padless:""}},[o("v-sheet",{attrs:{dark:"",width:"100%",color:"#00273E"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{align:"center",cols:"12",sm:"12",md:"3",lg:"3"}},[o("v-card",{staticClass:"mb-8 rounded-b-xl",attrs:{color:"#00629b","max-width":"250px"}},[o("v-container"),t._v(" "),o("nuxt-img",{staticClass:"mb-4",attrs:{width:"250px",src:"/Assets/Logos/IEEE_Logo_White.png"}}),t._v(" "),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{attrs:{icon:"",href:"https://www.facebook.com/ieeensbm/",target:"_blank"}},[o("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/company/ieee-student-branch-nsbm/mycompany/",target:"_blank"}},[o("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",href:"https://twitter.com/nsbmieee",target:"_blank"}},[o("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",href:"https://www.instagram.com/nsbmieee/",target:"_blank"}},[o("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",href:"https://www.youtube.com/channel/UCx0ZNiZrDQCEWKbqWfp9YcQ",target:"_blank"}},[o("v-icon",[t._v("mdi-youtube")])],1)],1),t._v(" "),o("v-container")],1)],1),t._v(" "),o("v-col",{staticClass:"mt-8 mb-8 footer-col",attrs:{cols:"12",sm:"12",md:"2",lg:"2",align:"center"}},[o("div",[o("h3",{staticStyle:{width:"75%","text-align":"left"}},[t._v("Get Started")]),t._v(" "),o("ul",{staticStyle:{width:"88%","list-style":"none","text-align":"left","margin-right":"20px"}},[o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/events"}},[t._v("EVENTS")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/blog"}},[t._v("BLOG")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/excom"}},[t._v("EXECUTIVE COMMITTEE")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/volunteer"}},[t._v("MEMBERSHIP")])],1)])])]),t._v(" "),o("v-col",{staticClass:"mt-8 mb-8 footer-col",attrs:{cols:"12",sm:"12",md:"3",lg:"3",align:"center"}},[o("div",[o("h3",{staticStyle:{width:"75%","text-align":"left"}},[t._v("\n              Student Branch Chapters\n            ")]),t._v(" "),o("ul",{staticStyle:{width:"88%","list-style":"none","text-align":"left"}},[o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/wie"}},[t._v("Women in Engineering")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"link",attrs:{to:"/cs"}},[t._v("Computer Society")])],1)])])]),t._v(" "),o("v-col",{staticClass:"mt-8 mb-8 footer-col",attrs:{cols:"12",sm:"12",md:"4",lg:"4",align:"center"}},[o("div",[o("h3",{staticStyle:{width:"75%","text-align":"left"}},[t._v("Contact Us")]),t._v(" "),o("table",{staticStyle:{width:"75%"}},[o("tr",[o("td",[o("v-icon",[t._v("mdi-phone")])],1),t._v(" "),o("td",{staticClass:"pl-1"},[o("a",{staticClass:"mailSection",attrs:{href:"tel:+94769872270"}},[t._v("+94 76 987 2270")])])]),t._v(" "),o("tr",[o("td",[o("v-icon",[t._v("mdi-email")])],1),t._v(" "),o("td",{staticClass:"pl-1"},[o("a",{staticClass:"mailSection",attrs:{href:"mailto:name@nsbmieee@gmail.com"}},[t._v("nsbmieee@gmail.com")])])]),t._v(" "),o("tr",[o("td",[o("v-icon",[t._v("mdi-map-marker-outline")])],1),t._v(" "),o("td",{staticClass:"pl-1"},[t._v("\n                  Pitipana "),o("br"),t._v("\n                  Thalagala Rd, "),o("br"),t._v(" Homagama\n                ")])])])])])],1),t._v(" "),o("v-row",{staticClass:"shrink",attrs:{"no-gutters":"",color:"#000000",align:"center",justify:"end"}},[o("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"4",align:"center"}},[o("p",[t._v("© Copyright 2021 | All rights reserved")])]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"4",align:"right"}},[o("v-card",{staticClass:"pa-0 rounded-tl-xl",attrs:{width:"70%",color:"#00629b",align:"center",id:"developed"}},[o("v-card-subtitle",[o("a",{staticClass:"developedBy",attrs:{href:"https://www.facebook.com/ieeecsnsbm",target:"_blank"}},[t._v("Developed by IEEE Computer Society — NSBM")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,"1bd93a64",null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VBtn:m.a,VCard:h.a,VCardActions:f.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:_.a,VContainer:w.a,VFooter:E.a,VIcon:C.a,VImg:x.a,VList:k.a,VListItem:y.a,VListItemTitle:S.b,VMain:N.a,VNavigationDrawer:I.a,VRow:V.a,VSheet:B.a,VSpacer:T.a,VTab:M.a,VTabs:L.a})},302:function(t,e,o){o(303),t.exports=o(304)},342:function(t,e,o){"use strict";o(267)},343:function(t,e,o){var r=o(17)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap);"]),r.push([t.i,'@media screen and (max-width:600px){#developed{width:100%!important;border-radius:0!important}.footer-col div{width:50%!important;margin:0 auto!important}}*,html{text-decoration:none!important}html{overflow-y:auto}body{margin:0;padding:0;line-height:1.5;font-family:"Poppins","sans-serif"!important;text-decoration:none!important}::-webkit-scrollbar-track{border-radius:10px;opacity:.3;background-color:#00629b}::-webkit-scrollbar-thumb{border-radius:10px;opacity:1;background-color:#fff}::-webkit-scrollbar{width:8px;opacity:.3;background-color:#00629b}.developedBy,.mailSection{color:#fff!important;text-decoration:none!important}.DefaultFont{font-family:"Poppins","sans-serif"!important}.v-card__text{font-size:18px!important;font-weight:200}.v-tabs-bar{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}.IEEE{background-color:#f3fbff!important}.IEEEFont{color:#00629b!important}.WIE{background-color:#702f8a!important}.WIEFont{color:#702f8a!important}.CS{background-color:#ffa300!important}.CSFont{color:#ffa300!important}.IEEENoCaps{text-transform:none!important;font-size:13px!important;color:#fff!important}.IEEEHand{cursor:pointer!important}.layout{max-width:760px;margin:0 auto;padding-left:20px;padding-right:20px}.header{display:flex;justify-content:space-between;align-items:center}.nav__link{margin-left:20px}.footer-col{border-right:1px solid #fff5ee}.footer-col div ul li{margin:10px 0}td{height:50px;vertical-align:center}',""]),t.exports=r},83:function(t,e,o){"use strict";var r={data:function(){return{}}},n=o(70),l=o(132),c=o.n(l),v=o(438),d=o(439),m=o(440),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-col",[e("v-row",{attrs:{justify:"center","no-gutters":""}},[e("nuxt-img",{attrs:{quality:"96",format:"png",fit:"contain",sizes:"sm:75vw md:50vw lg:400px",src:"/Assets/Other/404.png"}})],1)],1)],1)}),[],!1,null,"48a92b9a",null);e.a=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})}},[[302,27,2,28]]]);