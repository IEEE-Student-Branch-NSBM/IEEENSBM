(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{330:function(e,t,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(127).default)("f1bca288",content,!0,{sourceMap:!1})},489:function(e,t,r){"use strict";r(330)},490:function(e,t,r){var n=r(126)(!1);n.push([e.i,".formTitle[data-v-2a45e2b6]{font-size:48px;font-weight:500;letter-spacing:0}.formSubTitle[data-v-2a45e2b6]{margin-top:12px;font-size:20px;font-weight:300;letter-spacing:0}@media only screen and (max-width:768px){.formTitle[data-v-2a45e2b6]{font-size:35px;font-weight:500;letter-spacing:0}.formSubTitle[data-v-2a45e2b6]{margin-top:12px;font-size:18px;font-weight:300;letter-spacing:0}}",""]),e.exports=n},570:function(e,t,r){"use strict";r.r(t);var n={name:"contact",computed:{},data:function(){return{valid:!0,name:"",fnameRules:[function(e){return!!e||"First Name is required"}],snameRules:[function(e){return!!e||"Second Name is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be required"}],message:"",messageRules:[function(e){return!!e||"Message is required"}]}},methods:{sendMessage:function(){this.$refs.contactForm.validate()&&this.$refs.submit.click()}}},l=(r(489),r(139)),o=r(142),m=r.n(o),d=r(345),c=r(125),f=r(549),v=r(550),w=r(557),h=r(551),x=r(200),y=r(534),_=r(558),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{staticClass:"py-10"},[r("v-row",{attrs:{"no-gutters":"","align-content":"center"}},[r("v-col",{staticClass:"px-sm-10 px-5",attrs:{cols:"12",sm:"6"}},[r("v-card-title",{staticClass:"formTitle justify-sm-start justify-center"},[e._v("Contact Us\n      ")]),e._v(" "),r("span",{staticClass:"formSubTitle ml-sm-5 ml-0"},[e._v("Our friendly team want to hear from you")]),e._v(" "),r("v-container",[r("v-form",{ref:"contactForm",attrs:{method:"post",action:"https://formspree.io/f/mpzkzwdw"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mr-2"},[r("v-text-field",{attrs:{name:"fname",id:"full-name",outlined:"",label:"First Name",rules:e.fnameRules}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{name:"lname",id:"full-name",outlined:"",label:"Second Name",rules:e.snameRules}})],1)],1),e._v(" "),r("v-row",{staticClass:"secondForm",attrs:{"no-gutters":""}},[r("v-col",[r("v-text-field",{attrs:{name:"_replyto",id:"email-address",outlined:"",label:"Email",rules:e.emailRules}})],1)],1),e._v(" "),r("v-textarea",{attrs:{name:"message",id:"message",outlined:"",label:"Type Message",requied:"",rules:e.fnameRules}}),e._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"end"}},[r("button",{ref:"submit",staticStyle:{display:"none"}},[e._v("Submit")]),e._v(" "),r("v-btn",{attrs:{"min-width":"256",height:"56",color:"primary",dark:"",large:""},on:{click:e.sendMessage}},[e._v("Send Message")])],1)],1)],1)],1),e._v(" "),r("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",sm:"6"}},[r("iframe",{staticClass:"rounded-lg",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk",width:"750",height:"500",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})]),e._v(" "),r("v-col",{staticClass:"hidden-md-and-up",attrs:{cols:"12",sm:"6"}},[r("iframe",{staticStyle:{border:"0","border-radius":"20px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk",width:"400",height:"200",allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])],1)],1)}),[],!1,null,"2a45e2b6",null);t.default=component.exports;m()(component,{VBtn:d.a,VCardTitle:c.d,VCol:f.a,VContainer:v.a,VForm:w.a,VRow:h.a,VSheet:x.a,VTextField:y.a,VTextarea:_.a})}}]);