(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b7299"],{"1ff4":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"avatar-demo"}},[e("avatar-default"),e("avatar-size"),e("avatar-color"),e("avatar-with-badge"),e("avatar-icon")],1)},s=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Default","code-toggler":""}},[e("p",[a._v("Often you need to add an user's avatar to your app. In order to make this we have the component "),e("code",[a._v("vs-avatar")])]),e("p",[a._v("To add an internal text value such as "),e("code",[a._v("Luis")]),a._v(" use the "),e("code",[a._v("text")]),a._v(" property")]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v("If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is "),e("code",[a._v("Luis Daniel")]),a._v(" and only the letters LD will be shown if the word contains spaces the initial of each one is added.")])]),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar"),e("vs-avatar",{attrs:{text:"Luis Daniel"}}),e("vs-avatar",{attrs:{text:"Luisd"}}),e("vs-avatar",{attrs:{src:"https://i.imgur.com/ezM6SJ5.png"}})],1),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar />\n<vs-avatar text="Luis Daniel"/>\n<vs-avatar text="Luisd"/>\n<vs-avatar src="https://i.imgur.com/ezM6SJ5.png"/>\n        ')])],2)},o=[],c=e("2877"),i={},l=Object(c["a"])(i,n,o,!1,null,null,null),v=l.exports,d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"size","code-toggler":""}},[e("p",[a._v("You can change the size of the Avatar with the property size the allowed values are:")]),e("vx-list",{attrs:{list:["large","small","Custom measures"]}}),e("vs-alert",{staticClass:"mb-1",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v("In the example the last avatar has the custom size of "),e("code",[a._v("70px")]),a._v(" the added value will be the avatar's "),e("strong",[a._v("height")]),a._v(" and "),e("strong",[a._v("width")])])]),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{size:"small"}}),e("vs-avatar",{attrs:{text:"Luis Daniel"}}),e("vs-avatar",{attrs:{size:"large",src:"https://i.imgur.com/ezM6SJ5.png"}}),e("vs-avatar",{attrs:{size:"70px",src:"https://i.imgur.com/ezM6SJ5.png"}})],1),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar size="small" />\n<vs-avatar text="Luis Daniel"/>\n<vs-avatar size="large" src="https://i.imgur.com/ezM6SJ5.png"/>\n<vs-avatar size="70px" src="https://i.imgur.com/ezM6SJ5.png"/>\n        ')])],2)},u=[],h={},p=Object(c["a"])(h,d,u,!1,null,null,null),g=p.exports,m=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Color","code-toggler":""}},[e("p",[a._v("You can change the Avatar's color by using the property "),e("code",[a._v("color")]),a._v(". If needed you could also change the text's color with the property "),e("code",[a._v("text-color")])]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("span",[a._v("If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is "),e("code",[a._v("Luis Daniel")]),a._v(" and only the letters LD will be shown if the word contains spaces the initial of each one is added.")])]),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{color:"primary",text:"primary"}}),e("vs-avatar",{attrs:{color:"success",text:"success"}}),e("vs-avatar",{attrs:{color:"danger",text:"danger"}}),e("vs-avatar",{attrs:{color:"warning",text:"warning"}}),e("vs-avatar",{attrs:{color:"dark",text:"dark"}}),e("vs-avatar",{attrs:{color:"rgb(200, 21, 129)",text:"RGB"}}),e("vs-avatar",{attrs:{color:"#18cd5b",text:"HEX"}}),e("vs-avatar",{attrs:{color:"#26302a","text-color":"rgb(246, 190, 16)",text:"HEX RGB"}})],1),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar color="primary" text="primary"/>\n<vs-avatar color="success" text="success"/>\n<vs-avatar color="danger" text="danger"/>\n<vs-avatar color="warning" text="warning"/>\n<vs-avatar color="dark" text="dark"/>\n<vs-avatar color="rgb(200, 21, 129)" text="RGB"/>\n<vs-avatar color="#18cd5b" text="HEX"/>\n<vs-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>\n        ')])],2)},_=[],b={},f=Object(c["a"])(b,m,_,!1,null,null,null),x=f.exports,w=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"With Badge","code-toggler":""}},[e("p",[a._v("You can add a notification label to the avatar, either a reference point or a number with the property "),e("code",[a._v("badge")])]),e("p",[a._v("You could also change the badge's color by using the property "),e("code",[a._v("badge-color")]),a._v(". You are able to use the "),e("router-link",{attrs:{to:"/ui-elements/colors"}},[a._v("Main Colors")]),a._v(" or "),e("strong",[a._v("RGB")]),a._v(" and "),e("strong",[a._v("HEX")]),a._v(" colors.")],1),e("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("span",[a._v("Only "),e("strong",[a._v("RGB")]),a._v(" and "),e("strong",[a._v("HEX")]),a._v(" colors are supported.")])]),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{badge:""}}),e("vs-avatar",{attrs:{badge:a.badge1,text:"Luisdaniel"}}),e("vs-avatar",{attrs:{"badge-color":"rgb(140, 23, 164)",badge:a.badge2,text:"Luisd"}}),e("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:a.increment}},[a._v(" Increment Badge counter ")])],1),e("template",{slot:"codeContainer"},[a._v('\n<template>\n  <vs-avatar badge />\n  <vs-avatar :badge="badge1" text="Luisdaniel" />\n  <vs-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd" />\n  <vs-button color="primary" type="filled" @click="increment"> Increment Badge counter </vs-button>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    badge1: 2,\n    badge2: 10,\n  }),\n  methods: {\n    increment() {\n      this.badge1++\n      this.badge2++\n    }\n  }\n}\n<\/script>\n        ')])],2)},y=[],k={data:function(){return{badge1:2,badge2:10}},methods:{increment:function(){this.badge1++,this.badge2++}}},C=k,z=Object(c["a"])(C,w,y,!1,null,null,null),L=z.exports,E=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("vx-card",{attrs:{title:"Icon","code-toggler":""}},[e("p",[a._v("You can change the main icon of the Avatar with the property "),e("code",[a._v("icon")])]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("p",[a._v("Vuesax uses the "),e("strong",[a._v("Google Material Icons")]),a._v(" font library by default. For a list of all available icons, visit the official "),e("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[a._v("Material Icons page")]),a._v(". Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.")]),e("p",[a._v("This icon is only displayed when there is no property as "),e("code",[a._v("text")]),a._v(" or "),e("code",[a._v("src")])])]),e("div",{staticClass:"demo-alignment mt-5"},[e("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),e("vs-avatar",{attrs:{color:"primary","icon-pack":"feather",icon:"icon-calendar"}}),e("vs-avatar",{attrs:{color:"success","icon-pack":"feather",icon:"icon-inbox"}}),e("vs-avatar",{attrs:{color:"danger","icon-pack":"feather",icon:"icon-camera"}}),e("vs-avatar",{attrs:{color:"warning","icon-pack":"feather",icon:"icon-award"}}),e("vs-avatar",{attrs:{color:"dark","icon-pack":"feather",icon:"icon-code"}})],1),e("template",{slot:"codeContainer"},[a._v('\n<vs-avatar icon-pack="feather" icon="icon-user" />\n\n<vs-avatar color="primary" icon-pack="feather" icon="icon-calendar" />\n\n<vs-avatar color="success" icon-pack="feather" icon="icon-inbox" />\n\n<vs-avatar color="danger" icon-pack="feather" icon="icon-camera" />\n\n<vs-avatar color="warning" icon-pack="feather" icon="icon-award" />\n\n<vs-avatar color="dark" icon-pack="feather" icon="icon-code" />\n        ')])],2)},I=[],A={},B=Object(c["a"])(A,E,I,!1,null,null,null),D=B.exports,M={components:{AvatarDefault:v,AvatarSize:g,AvatarColor:x,AvatarWithBadge:L,AvatarIcon:D}},O=M,J=Object(c["a"])(O,r,s,!1,null,null,null);t["default"]=J.exports}}]);
//# sourceMappingURL=chunk-2d0b7299.275ed4a1.js.map