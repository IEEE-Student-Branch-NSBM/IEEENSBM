(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{472:function(e,t,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("693e671a",content,!0,{sourceMap:!1})},489:function(e,t,r){"use strict";r(472)},490:function(e,t,r){var n=r(17)(!1);n.push([e.i,".formTitle[data-v-6f13cdc8]{font-size:48px;font-weight:500;letter-spacing:0}.formSubTitle[data-v-6f13cdc8]{margin-top:12px;font-size:20px;font-weight:300;letter-spacing:0}.secondForm[data-v-6f13cdc8]{margin-top:-40px}.moreButton[data-v-6f13cdc8]{background-color:#00629b;border-radius:10px;color:#fff;text-align:center;text-decoration:none}@media only screen and (max-width:768px){.formTitle[data-v-6f13cdc8]{font-size:35px;font-weight:500;letter-spacing:0}.formSubTitle[data-v-6f13cdc8]{margin-top:12px;font-size:18px;font-weight:300;letter-spacing:0}}",""]),e.exports=n},552:function(e,t,r){"use strict";r.r(t);var n={name:"contact",data:function(){return{valid:!0,name:"",fnameRules:[function(e){return!!e||"First Name is required"}],snameRules:[function(e){return!!e||"Second Name is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],message:"",messageRules:[function(e){return!!e||"Message is required"}]}},methods:{validate:function(){this.$refs.form.validate()}}},l=(r(489),r(67)),o=r(129),d=r.n(o),m=r(201),c=r(83),f=r(433),v=r(434),w=r(540),x=r(435),h=r(54),y=r(536),_=r(541),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{staticClass:"py-10"},[r("v-row",{attrs:{"no-gutters":"","align-content":"center"}},[r("v-col",{staticClass:"px-sm-10 px-5",attrs:{cols:"12",sm:"6"}},[r("v-card-title",{staticClass:"formTitle justify-sm-start justify-center"},[e._v("Contact Us\n      ")]),e._v(" "),r("span",{staticClass:"formSubTitle ml-sm-5 ml-0"},[e._v("Our friendly team want to hear from you")]),e._v(" "),r("v-container",[r("v-form",{attrs:{method:"post",action:"https://formspree.io/f/mpzkzwdw","lazy-validation":""}},[r("v-row",[r("v-col",[r("v-text-field",{attrs:{name:"fname",id:"full-name",outlined:"",label:"First Name",rules:e.fnameRules}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{name:"lname",id:"full-name",outlined:"",label:"Second Name",rules:e.snameRules}})],1)],1),e._v(" "),r("v-row",{staticClass:"secondForm"},[r("v-col",[r("v-text-field",{attrs:{name:"_replyto",id:"email-address",outlined:"",label:"Email",rules:e.emailRules}})],1)],1),e._v(" "),r("v-textarea",{attrs:{name:"message",id:"message",outlined:"",label:"Type Message",requied:"",rules:e.fnameRules}}),e._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"start"}},[r("v-btn",{staticClass:"moreButton",attrs:{block:"",type:"submit","min-width":"256",large:"",outlined:""},on:{click:e.validate}},[e._v("Send Message")])],1)],1)],1)],1),e._v(" "),r("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",sm:"6"}},[r("iframe",{staticStyle:{border:"0","border-radius":"10px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk",width:"750",height:"500",allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})]),e._v(" "),r("v-col",{staticClass:"hidden-md-and-up",attrs:{cols:"12",sm:"6"}},[r("iframe",{staticStyle:{border:"0","border-radius":"20px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk",width:"400",height:"200",allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])],1)],1)}),[],!1,null,"6f13cdc8",null);t.default=component.exports;d()(component,{VBtn:m.a,VCardTitle:c.d,VCol:f.a,VContainer:v.a,VForm:w.a,VRow:x.a,VSheet:h.a,VTextField:y.a,VTextarea:_.a})}}]);