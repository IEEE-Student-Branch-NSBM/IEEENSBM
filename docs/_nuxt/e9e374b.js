(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(t,o,e){"use strict";var r=e(2),n=e(305);r.a.use(n,{load:{key:"API_KEY",libraries:"places"},installComponents:!0})},272:function(t,o,e){var content=e(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("2f61aa80",content,!0,{sourceMap:!1})},308:function(t,o,e){"use strict";e(22),e(349);var r={data:function(){return{Path:"",NavDrawer:!1,showNavbar:!0,lastScrollPosition:0,BackColor:"#00629B",Menu:[{Name:"Home",To:"/"},{Name:"WIE",To:"/wie"},{Name:"CS",To:"/cs"},{Name:"Events",To:"/events"},{Name:"Blog",To:"/blog"},{Name:"EXCOM",To:"/excom"},{Name:"About US",To:"/membership"},{Name:"Contact Us",To:"/contact"},{Name:"Join Us",To:"/volunteer"}]}},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;console.log(t),t<0||(t>=135&&(this.showNavbar=!1),t<=115&&(this.showNavbar=!0),this.lastScrollPosition=t)},ChangeColor:function(){console.log(this.$route.name),"wie"===this.$route.name?this.BackColor="#702f8a":"cs"===this.$route.name?this.BackColor="#FFA300":this.BackColor="#00629B"}},mounted:function(){this.Path=this.$route.path.replaceAll("/",""),window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},n=(e(351),e(33)),l=e(131),c=e.n(l),v=e(469),d=e(475),m=e(207),h=e(200),_=e(84),f=e(466),E=e(467),w=e(470),C=e(202),x=e(164),y=e(203),k=e(124),N=e(157),S=e(471),I=e(474),V=e(468),B=e(55),T=e(472),M=e(473),L=e(476),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",{staticClass:"DefaultFont"},[e("v-navigation-drawer",{class:{WIE:"wie"===t.Path,CS:"cs"===t.Path},attrs:{color:t.BackColor,temporary:"",app:""},model:{value:t.NavDrawer,callback:function(o){t.NavDrawer=o},expression:"NavDrawer"}},[e("v-list",[e("v-list-item",[e("v-row",{attrs:{justify:"center","no-gutters":""}},[e("v-img",{attrs:{alt:"NSBM IEEE Student",src:"/Assets/Logos/IEEE_SB_Logo.png","max-width":"128"}})],1)],1),t._v(" "),t._l(t.Menu,(function(o){return e("v-list-item",{key:o.Name,attrs:{to:o.To,link:"",dark:""}},[e("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(o.Name))])],1)}))],2)],1),t._v(" "),e("header",{staticClass:"header"},[e("v-app-bar",{attrs:{"elevate-on-scroll":"",color:t.BackColor,app:"",dense:""}},[t.showNavbar?t._e():e("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{"background-color":t.BackColor,dark:"","slider-size":"4"},on:{change:t.ChangeColor}},t._l(t.Menu,(function(o){return e("v-tab",{key:o.Name,attrs:{to:o.To}},[t._v(t._s(o.Name))])})),1),t._v(" "),t.showNavbar?e("div",[e("v-row",{attrs:{"no-gutters":"",align:"center"}},[e("v-btn",{staticClass:"hidden-md-and-up",attrs:{icon:""},on:{click:function(o){t.NavDrawer=!0}}},[e("v-icon",{attrs:{color:"white"}},[t._v("mdi-menu")])],1),t._v(" "),e("h3",{staticClass:"white--text hidden-sm-and-up text-center"},[t._v("IEEE Student Branch of NSBM")])],1),t._v(" "),e("v-row",{staticClass:"hidden-sm-and-down",attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org",rel:"noreferrer",target:"_blank"}},[t._v("IEEE.org")]),t._v(" "),e("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://ieeexplore.ieee.org",rel:"noreferrer"}},[t._v("IEEE "),e("i",[t._v("Xplore  ")]),t._v(" Digital Library")]),t._v(" "),e("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://standards.ieee.org",rel:"noreferrer"}},[t._v("IEEE Standards")]),t._v(" "),e("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://spectrum.ieee.org",rel:"noreferrer"}},[t._v("IEEE Spectrum")]),t._v(" "),e("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org/sitemap",rel:"noreferrer"}},[t._v("More Sites")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org/join"}},[t._v("Join IEEE")])],1)],1):t._e()],1)],1),t._v(" "),e("v-main",{staticClass:"white lighten-2"},[e("v-card",{staticClass:"rounded-0",attrs:{color:t.BackColor}},[e("v-card-title",{staticClass:"hidden-sm-and-down pt-2"},[e("v-row",{attrs:{"no-gutters":"",justify:"space-between",align:"center"}},[e("nuxt-img",{staticClass:"hidden-sm-and-down",attrs:{quality:"98",format:"webp",fit:"contain",height:"64",alt:"Brand Logo",src:"/Assets/Logos/MainLogo.png"}}),t._v(" "),e("nuxt-img",{staticClass:"hidden-sm-and-down",attrs:{alt:"IEEE Logo",quality:"98",format:"webp",fit:"contain",height:"64",src:"/Assets/Logos/IEEE_Logo.png"}})],1)],1),t._v(" "),e("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{"background-color":t.BackColor,dark:"","slider-size":"4"},on:{change:t.ChangeColor}},t._l(t.Menu,(function(o){return e("v-tab",{key:o.Name,attrs:{to:o.To}},[t._v(t._s(o.Name))])})),1)],1),t._v(" "),e("nuxt")],1),t._v(" "),e("v-footer",{attrs:{padless:""}},[e("v-sheet",{attrs:{dark:"",width:"100%",color:"#00273E"}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{align:"center",cols:"12",sm:"12",md:"3",lg:"3"}},[e("v-card",{staticClass:"mb-8 rounded-b-xl",attrs:{color:"#00629b","max-width":"250px"}},[e("v-container"),t._v(" "),e("nuxt-img",{staticClass:"mb-4",attrs:{width:"250px",src:"/Assets/Logos/IEEE_Logo_White.png"}}),t._v(" "),e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-youtube")])],1)],1),t._v(" "),e("v-container")],1)],1),t._v(" "),e("v-col",{staticClass:"mt-8 mb-8 footer-col",attrs:{cols:"12",sm:"12",md:"2",lg:"2",align:"center"}},[e("div",[e("h3",{staticStyle:{width:"75%","text-align":"left"}},[t._v("Get Started")]),t._v(" "),e("ul",{staticStyle:{width:"88%","list-style":"none","text-align":"left","margin-right":"20px"}},[e("li",[t._v("HOME")]),t._v(" "),e("li",[t._v("EVENTS")]),t._v(" "),e("li",[t._v("BLOG")]),t._v(" "),e("li",[t._v("EXECUTIVE COMMITTEE")]),t._v(" "),e("li",[t._v("MEMBERSHIP")])])])]),t._v(" "),e("v-col",{staticClass:"mt-8 mb-8 footer-col",attrs:{cols:"12",sm:"12",md:"3",lg:"3",align:"center"}},[e("div",[e("h3",{staticStyle:{width:"75%","text-align":"left"}},[t._v("Student Branch Chapters")]),t._v(" "),e("ul",{staticStyle:{width:"88%","list-style":"none","text-align":"left"}},[e("li",[t._v("Women in Engineering")]),t._v(" "),e("li",[t._v("Computer Society")])])])]),t._v(" "),e("v-col",{staticClass:"mt-8 mb-8 footer-col",attrs:{cols:"12",sm:"12",md:"4",lg:"4",align:"center"}},[e("div",[e("h3",{staticStyle:{width:"75%","text-align":"left"}},[t._v("Contact Us")]),t._v(" "),e("table",{staticStyle:{width:"75%"}},[e("tr",[e("td",[e("v-icon",[t._v("mdi-phone")])],1),t._v(" "),e("td",{staticClass:"pl-1"},[t._v(" +94 00 000 000")])]),t._v(" "),e("tr",[e("td",[e("v-icon",[t._v("mdi-email")])],1),t._v(" "),e("td",{staticClass:"pl-1"},[t._v(" XXXXXXXXXXX@gmail.com")])]),t._v(" "),e("tr",[e("td",[e("v-icon",[t._v("mdi-map-marker-outline")])],1),t._v(" "),e("td",{staticClass:"pl-1"},[t._v(" 345 Faulconer Drive,"),e("br"),t._v("Suite 4 • "),e("br"),t._v("Charlottesville, CA")])])])])])],1),t._v(" "),e("v-row",{staticClass:"shrink",attrs:{"no-gutters":"",color:"#000000",align:"center",justify:"end"}},[e("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"4",align:"center"}},[e("p",[t._v("© Copyright 2021 | All rights reserved")])]),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"4",align:"right"}},[e("v-card",{staticClass:"pa-0 rounded-tl-xl",attrs:{width:"70%",color:"#00629b",align:"center",id:"developed"}},[e("v-card-subtitle",[t._v("Developed by IEEE Computer Society — NSBM")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"4814209c",null);o.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VBtn:m.a,VCard:h.a,VCardActions:_.a,VCardSubtitle:_.b,VCardTitle:_.d,VCol:f.a,VContainer:E.a,VFooter:w.a,VIcon:C.a,VImg:x.a,VList:y.a,VListItem:k.a,VListItemTitle:N.a,VMain:S.a,VNavigationDrawer:I.a,VRow:V.a,VSheet:B.a,VSpacer:T.a,VTab:M.a,VTabs:L.a})},313:function(t,o,e){e(314),t.exports=e(315)},351:function(t,o,e){"use strict";e(272)},352:function(t,o,e){var r=e(15)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap);"]),r.push([t.i,'@media screen and (max-width:600px){#developed{width:100%!important;border-radius:0!important}.footer-col div{width:50%!important;margin:0 auto!important}}html{overflow-y:auto}body{margin:0;padding:0;line-height:1.5;font-family:"Poppins","sans-serif"!important}::-webkit-scrollbar-track{border-radius:10px;opacity:.3;background-color:#00629b}::-webkit-scrollbar-thumb{border-radius:10px;opacity:1;background-color:#fff}::-webkit-scrollbar{width:8px;opacity:.3;background-color:#00629b}.DefaultFont{font-family:"Poppins","sans-serif"!important}.v-tabs-bar{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}.IEEE{background-color:#00629b!important}.IEEEFont{color:#00629b!important}.WIE{background-color:#702f8a!important}.WIEFont{color:#702f8a!important}.CS{background-color:#ffa300!important}.CSFont{color:#ffa300!important}.IEEENoCaps{text-transform:none!important;font-size:13px!important;color:#fff!important}.IEEEHand{cursor:pointer!important}.layout{max-width:760px;margin:0 auto;padding-left:20px;padding-right:20px}.header{display:flex;justify-content:space-between;align-items:center}.nav__link{margin-left:20px}.footer-col{border-right:1px solid #fff5ee}.footer-col div ul li{margin:10px 0}td{height:50px;vertical-align:center}',""]),t.exports=r},81:function(t,o,e){"use strict";var r={data:function(){return{}}},n=e(33),l=e(131),c=e.n(l),v=e(466),d=e(467),m=e(468),component=Object(n.a)(r,(function(){var t=this.$createElement,o=this._self._c||t;return o("v-container",[o("v-col",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("nuxt-img",{attrs:{quality:"96",format:"png",fit:"contain",sizes:"sm:75vw md:50vw lg:400px",src:"/Assets/Other/404.png"}})],1)],1)],1)}),[],!1,null,"48a92b9a",null);o.a=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})}},[[313,19,1,20]]]);