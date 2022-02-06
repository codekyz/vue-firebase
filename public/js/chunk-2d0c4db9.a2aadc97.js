(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4db9"],{"3d2d":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"form-element-number-input-demo"}},[t("number-input-default"),t("number-input-color"),t("number-input-min-max"),t("number-input-size"),t("number-input-step"),t("number-input-decimal"),t("number-input-label")],1)},u=[],a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Default","code-toggler":""}},[t("p",[n._v("If you need to add a component that handles a single number, use the component "),t("code",[n._v("vs-input-number")])]),t("p",[n._v("You can also change the increment and decrement button icons using the properties "),t("code",[n._v("icon-inc")]),n._v(" and "),t("code",[n._v("icon-dec")]),n._v(" respectively")]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{model:{value:n.number,callback:function(e){n.number=e},expression:"number"}}),t("vs-input-number",{attrs:{disabled:!0},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),t("vs-input-number",{attrs:{"icon-inc":"expand_less","icon-dec":"expand_more"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number"/>\n    <vs-input-number :disabled="true" v-model="number1"/>\n    <vs-input-number v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number:34,\n      number1:48,\n      number2:50\n    }\n  }\n}\n<\/script>\n        ')])],2)},l=[],s={data:function(){return{number:34,number1:48,number2:50}}},m=s,o=t("2877"),i=Object(o["a"])(m,a,l,!1,null,null,null),c=i.exports,b=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Color","code-toggler":""}},[t("span",[n._v("You can change the color of the "),t("strong",[n._v("Input-Number")]),n._v(" with the property "),t("code",[n._v("color")]),n._v(". You are able to use the Main Colors or "),t("strong",[n._v("RGB")]),n._v(" and "),t("strong",[n._v("HEX")]),n._v(" colors.")]),t("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[t("span",[n._v("Only "),t("strong",[n._v("RGB")]),n._v(" and "),t("strong",[n._v("HEX")]),n._v(" colors are supported.")])]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{color:"danger"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),t("vs-input-number",{attrs:{color:"success"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}}),t("vs-input-number",{attrs:{color:"warning"},model:{value:n.number3,callback:function(e){n.number3=e},expression:"number3"}}),t("vs-input-number",{attrs:{color:"dark"},model:{value:n.number4,callback:function(e){n.number4=e},expression:"number4"}}),t("vs-input-number",{attrs:{color:"rgb(218, 24, 94)"},model:{value:n.number5,callback:function(e){n.number5=e},expression:"number5"}}),t("vs-input-number",{attrs:{color:"#ad3af9"},model:{value:n.number6,callback:function(e){n.number6=e},expression:"number6"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number color="danger" v-model="number1"/>\n    <vs-input-number color="success" v-model="number2"/>\n    <vs-input-number color="warning" v-model="number3"/>\n    <vs-input-number color="dark" v-model="number4"/>\n    <vs-input-number color="rgb(218, 24, 94)" v-model="number5"/>\n    <vs-input-number color="#ad3af9" v-model="number6"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number1:196,\n      number2:88,\n      number3:25,\n      number4:12,\n      number5:590,\n      number6:32,\n    }\n  }\n}\n<\/script>\n        ')])],2)},p=[],d={data:function(){return{number1:196,number2:88,number3:25,number4:12,number5:590,number6:32}}},v=d,_=Object(o["a"])(v,b,p,!1,null,null,null),f=_.exports,x=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Min - Max","code-toggler":""}},[t("span",[n._v("You can restrict the maximum number or the minimum with the properties "),t("code",[n._v("min")]),n._v(", "),t("code",[n._v("max")])]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{min:"13",max:"21"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number min="13" max="21" v-model="number1"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number1:21,\n    }\n  }\n}\n<\/script>\n        ')])],2)},g=[],h={data:function(){return{number1:21}}},k=h,C=Object(o["a"])(k,x,g,!1,null,null,null),w=C.exports,z=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Size","code-toggler":""}},[t("span",[n._v("To change the size of the component, you can use the property "),t("code",[n._v("size")]),n._v(". The allowed values are: "),t("code",[n._v("medium")]),n._v(", "),t("code",[n._v("small")]),n._v(", and "),t("code",[n._v("mini")])]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}}),t("vs-input-number",{attrs:{size:"medium"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),t("vs-input-number",{attrs:{size:"small"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}}),t("vs-input-number",{attrs:{size:"mini"},model:{value:n.number3,callback:function(e){n.number3=e},expression:"number3"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0"/>\n    <vs-input-number size="medium" v-model="number1"/>\n    <vs-input-number size="small" v-model="number2"/>\n    <vs-input-number size="mini" v-model="number3"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:95,\n      number1:21,\n      number2:67,\n      number3:2\n    }\n  }\n}\n<\/script>\n        ')])],2)},I=[],E={data:function(){return{number0:95,number1:21,number2:67,number3:2}}},N=E,O=Object(o["a"])(N,z,I,!1,null,null,null),j=O.exports,y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Step","code-toggler":""}},[t("span",[n._v("To change the number to be added or decreased of the component, you can use the property "),t("code",[n._v("step")])]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{step:5},model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0" :step="5"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:5,\n    }\n  }\n}\n<\/script>\n        ')])],2)},$=[],M={data:function(){return{number0:5}}},D=M,S=Object(o["a"])(D,y,$,!1,null,null,null),Y=S.exports,T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Decimal","code-toggler":""}},[t("span",[n._v("Number Input also supports decimal values")]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{step:.5},model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0" :step="0.5"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:1.5,\n    }\n  }\n}\n<\/script>\n        ')])],2)},B=[],G={data:function(){return{number0:1.5}}},H=G,J=Object(o["a"])(H,T,B,!1,null,null,null),L=J.exports,R=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Label","code-toggler":""}},[t("p",[n._v("Number Input supports adding labels for number inputs.")]),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{label:"passengers:"},model:{value:n.passengers,callback:function(e){n.passengers=e},expression:"passengers"}})],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="passengers" label="passengers:"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      passengers:1,\n    }\n  }\n}\n<\/script>\n        ')])],2)},X=[],q={data:function(){return{passengers:1}}},A=q,F=Object(o["a"])(A,R,X,!1,null,null,null),K=F.exports,P={components:{NumberInputDefault:c,NumberInputColor:f,NumberInputMinMax:w,NumberInputSize:j,NumberInputStep:Y,NumberInputDecimal:L,NumberInputLabel:K}},Q=P,U=Object(o["a"])(Q,r,u,!1,null,null,null);e["default"]=U.exports}}]);
//# sourceMappingURL=chunk-2d0c4db9.a2aadc97.js.map