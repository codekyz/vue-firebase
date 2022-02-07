(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0de4"],{"9dcf":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"breadcrumb-demo"}},[r("breadcrumb-default"),r("breadcrumb-color"),r("breadcrumb-separator"),r("breadcrumb-slot"),r("breadcrumb-alignment")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vx-card",{attrs:{title:"Default","code-toggler":""}},[r("p",[t._v("Use the "),r("code",[t._v("items")]),t._v(" in order to programatically generate the breadcrumb links")]),r("div",{staticClass:"demo-alignment"},[r("vs-breadcrumb",{attrs:{items:[{title:"Dashboard",url:"/"},{title:"Link 1",url:"/blog"},{title:"Link 2",disabled:!0},{title:"Active",active:!0}]}})],1),r("template",{slot:"codeContainer"},[t._v("\n<vs-breadcrumb\n:items=\"\n   [\n     {\n       title: 'Dashboard',\n       url: '/'\n     },\n     {\n       title: 'Link 1',\n       url: '/blog'\n     },\n     {\n       title: 'Link 2',\n       disabled: true\n     },\n     {\n       title: 'Active',\n       active: true\n     }\n   ]\"\n></vs-breadcrumb>\n        ")])],2)},l=[],i=r("2877"),o={},c=Object(i["a"])(o,s,l,!1,null,null,null),u=c.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vx-card",{attrs:{title:"Color","code-toggler":""}},[r("p",[t._v("Use the "),r("code",[t._v("color")]),t._v(" directive like for any other component that supports it to customize the breadcrumbs links color")]),r("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[r("span",[t._v("Only "),r("strong",[t._v("RGB")]),t._v(" and "),r("strong",[t._v("HEX")]),t._v(" colors are supported.")])]),r("div",{staticClass:"demo-alignment"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.colorx,expression:"colorx"}],attrs:{type:"color",name:"",value:""},domProps:{value:t.colorx},on:{input:function(e){e.target.composing||(t.colorx=e.target.value)}}}),r("vs-breadcrumb",{attrs:{color:t.colorx,items:t.items}})],1),r("template",{slot:"codeContainer"},[t._v("\n<template>\n  <div class=\"demo-alignment\">\n    <input v-model=\"colorx\" type=\"color\" name=\"\" value=\"\">\n    <vs-breadcrumb\n    :color=\"colorx\"\n    :items=\"items\"\n    ></vs-breadcrumb>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: ()=>({\n    colorx:'#3DC9B3',\n    items:[\n      {\n        title: 'Dashboard',\n        url: '/'\n      },\n      {\n        title: 'Link 1',\n        url: '/blog'\n      },\n      {\n        title: 'Link 2',\n        disabled: true\n      },\n      {\n        title: 'Active',\n        active: true\n      }\n    ]\n  })\n}\n<\/script>\n    ")])],2)},d=[],m={data:function(){return{colorx:"#3DC9B3",items:[{title:"Dashboard",url:"/"},{title:"Link 1",url:"/blog"},{title:"Link 2",disabled:!0},{title:"Active",active:!0}]}}},b=m,p=Object(i["a"])(b,v,d,!1,null,null,null),g=p.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vx-card",{attrs:{title:"Separator","code-toggler":""}},[r("p",[t._v("You can change the separator dividing the links by either passing a string to the "),r("code",[t._v("separator")]),t._v(' directive like so "'),r("strong",[t._v("•")]),t._v('", "'),r("strong",[t._v("-")]),t._v('", "'),r("strong",[t._v("|")]),t._v('" etc..., or by passing in one of the material icons text "'),r("strong",[t._v("chevron_right")]),t._v('"')]),r("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[r("span",[t._v('In order to differeciate a custom separator "'),r("strong",[t._v("•")]),t._v('" from an icon "'),r("strong",[t._v("chevron_right")]),t._v('", we verify the string length. If the length is '),r("strong",[t._v("greater than 1")]),t._v(" it will be considered a material icon.")])]),r("br"),r("div",[r("vs-breadcrumb",{attrs:{items:t.items,separator:"•"}}),r("vs-breadcrumb",{attrs:{items:t.items,separator:"-"}}),r("vs-breadcrumb",{attrs:{items:t.items,separator:"|"}}),r("vs-breadcrumb",{attrs:{items:t.items,separator:t.$vs.rtl?"chevron_left":"chevron_right"}})],1),r("template",{slot:"codeContainer"},[t._v('\n<vs-breadcrumb :items="[{...}, {...}]" separator="•"></vs-breadcrumb>\n<vs-breadcrumb :items="[{...}, {...}]" separator="-"></vs-breadcrumb>\n<vs-breadcrumb :items="[{...}, {...}]" separator="|"></vs-breadcrumb>\n<vs-breadcrumb :items="[{...}, {...}]" :separator="$vs.rtl ? \'chevron_left\' : \'chevron_right\'"</vs-breadcrumb>\n        ')])],2)},h=[],f={data:function(){return{colorx:"#3DC9B3",items:[{title:"Dashboard",url:"/"},{title:"Link 1",url:"/blog"},{title:"Link 2",disabled:!0},{title:"Active",active:!0}]}}},k=f,x=Object(i["a"])(k,_,h,!1,null,null,null),C=x.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vx-card",{attrs:{title:"Slot","code-toggler":""}},[r("p",[t._v("A default Vue slot that can be used instead of passing in an array of object. This allows for greater control of the breadcrumbs")]),r("div",{staticClass:"demo-alignment"},[r("vs-breadcrumb",[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("span",{staticClass:"vs-breadcrum--separator"},[t._v("/")])],1),r("li",[r("router-link",{attrs:{to:"/apps/chat"}},[t._v("Chat")]),r("span",{staticClass:"vs-breadcrum--separator"},[t._v("/")])],1),r("li",{staticClass:"active",attrs:{"aria-current":"page"}},[t._v("Infos")])])],1),r("template",{slot:"codeContainer"},[t._v('\n<vs-breadcrumb>\n   <li><router-link to="/">Home</router-link><span class="vs-breadcrum--separator">/</span></li>\n   <li><router-link to="/apps/chat">Chat</router-link><span class="vs-breadcrum--separator">/</span></li>\n   <li aria-current="page" class="active">Infos</li>\n</vs-breadcrumb>\n        ')])],2)},D=[],L={},B=Object(i["a"])(L,w,D,!1,null,null,null),y=B.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vx-card",{attrs:{title:"Alignment","code-toggler":""}},[r("p",[t._v("Use "),r("code",[t._v("align")]),t._v(" to either align the breadcrumb to the left, center or right")]),r("div",{staticClass:"mt-5"},[r("vs-breadcrumb",{staticClass:"op-block mb-2",attrs:{items:t.items,align:"left"}}),r("vs-breadcrumb",{staticClass:"op-block mb-2",attrs:{items:t.items,align:"center"}}),r("vs-breadcrumb",{staticClass:"op-block mb-2",attrs:{items:t.items,align:"right"}})],1),r("template",{slot:"codeContainer"},[t._v('\n<vs-breadcrumb align="left">...</vs-breadcrumb>\n<vs-breadcrumb align="center">...</vs-breadcrumb>\n<vs-breadcrumb align="right">...</vs-breadcrumb>\n    ')])],2)},$=[],j={data:function(){return{colorx:"#3DC9B3",items:[{title:"Dashboard",url:"/"},{title:"Link 1",url:"/blog"},{title:"Link 2",disabled:!0},{title:"Active",active:!0}]}}},E=j,O=Object(i["a"])(E,A,$,!1,null,null,null),I=O.exports,S={components:{BreadcrumbDefault:u,BreadcrumbColor:g,BreadcrumbSeparator:C,BreadcrumbSlot:y,BreadcrumbAlignment:I}},H=S,U=Object(i["a"])(H,a,n,!1,null,null,null);e["default"]=U.exports}}]);
//# sourceMappingURL=chunk-2d0f0de4.534937fd.js.map