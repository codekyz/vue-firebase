(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7a964fe"],{"14e1":function(t,e,o){},"41efd":function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"extra-component-quill-editor-demo"}},[t._m(0),o("quill-editor-theme-snow"),o("quill-editor-theme-bubble"),o("quill-editor-custom-toolbar")],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"mb-4"},[o("a",{attrs:{href:"https://surmon-china.github.io/vue-quill-editor/",target:"_blank",rel:"nofollow"}},[t._v("Vue-Quill-Editor")]),t._v(" editor component for Vue, support SPA and SSR. Read full documnetation "),o("a",{attrs:{href:"https://quilljs.com/docs/quickstart/",target:"_blank",rel:"nofollow"}},[t._v("here")])])}],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Theme Snow","code-toggler":""}},[o("p",{staticClass:"mb-5"},[t._v("Snow is a clean, flat toolbar theme")]),o("quill-editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),o("prism",{staticClass:"rounded-lg"},[t._v(" "+t._s(t.content)+" ")]),o("template",{slot:"codeContainer"},[t._v("\n<template>\n  <quill-editor v-model=\"content\"></quill-editor>\n</template>\n\n<script>\n// require styles\nimport 'quill/dist/quill.core.css'\nimport 'quill/dist/quill.snow.css'\nimport 'quill/dist/quill.bubble.css'\n\nimport { quillEditor } from 'vue-quill-editor'\n\nexport default {\n  data() {\n    return {\n      content: `...`,\n    }\n  },\n  components: {\n    quillEditor,\n  }\n}\n<\/script>\n        ")])],2)},s=[],r=(o("a753"),o("8096"),o("14e1"),o("953d")),a=o("8d51"),u=o.n(a),c={data:function(){return{content:'\n<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />\n<iframe class="ql-video ql-align-center" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\n            '}},components:{quillEditor:r["quillEditor"],Prism:u.a}},d=c,p=o("2877"),m=Object(p["a"])(d,i,s,!1,null,null,null),b=m.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Theme Bubble","code-toggler":""}},[o("p",{staticClass:"mb-5"},[t._v("Bubble is a simple tooltip based theme")]),o("quill-editor",{attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),o("prism",{staticClass:"rounded-lg"},[t._v(" "+t._s(t.content)+" ")]),o("template",{slot:"codeContainer"},[t._v("\n<template>\n  <quill-editor v-model=\"content\" :options=\"editorOption\"></quill-editor>\n</template>\n\n<script>\n// require styles\nimport 'quill/dist/quill.core.css'\nimport 'quill/dist/quill.snow.css'\nimport 'quill/dist/quill.bubble.css'\n\nimport { quillEditor } from 'vue-quill-editor'\n\nexport default {\n  data() {\n    return {\n      editorOption: {\n        theme: 'bubble',\n      },\n      content: `...`,\n    }\n  },\n  components: {\n    quillEditor,\n  }\n}\n<\/script>\n        ")])],2)},q=[],f={data:function(){return{editorOption:{theme:"bubble"},content:'\n<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>.</p><br />\n<iframe class="ql-video ql-align-center" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\n            '}},components:{quillEditor:r["quillEditor"],Prism:u.a}},v=f,w=Object(p["a"])(v,h,q,!1,null,null,null),x=w.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Custom Toolbar","code-toggler":""}},[o("p",{staticClass:"mb-5"},[t._v("You have freedom to create your own custom toolbar")]),o("div",{staticClass:"vx-row"},[o("div",{staticClass:"vx-col w-full md:w-1/2"},[o("quill-editor",{attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[o("div",{attrs:{slot:"toolbar",id:"toolbar"},slot:"toolbar"},[o("button",{staticClass:"ql-bold"},[t._v("Bold")]),o("button",{staticClass:"ql-italic"},[t._v("Italic")]),o("select",{staticClass:"ql-size"},[o("option",{attrs:{value:"small"}}),o("option",{attrs:{selected:""}}),o("option",{attrs:{value:"large"}}),o("option",{attrs:{value:"huge"}})]),o("select",{staticClass:"ql-font"},[o("option",{attrs:{selected:"selected"}}),o("option",{attrs:{value:"serif"}}),o("option",{attrs:{value:"monospace"}})]),o("button",{staticClass:"ql-script",attrs:{value:"sub"}}),o("button",{staticClass:"ql-script",attrs:{value:"super"}}),o("button",{staticStyle:{width:"auto"},on:{click:t.customButtonClick}},[t._v("Click here")])])])],1),o("div",{staticClass:"vx-col w-full md:w-1/2 flex"},[o("prism",{staticClass:"rounded-lg"},[t._v(" "+t._s(t.content)+" ")])],1)]),o("template",{slot:"codeContainer"},[t._v('\n<template>\n  <quill-editor v-model="content" :options="editorOption">\n\n    <div id="toolbar" slot="toolbar">\n\n      \x3c!-- Add a bold button --\x3e\n      <button class="ql-bold">Bold</button>\n      <button class="ql-italic">Italic</button>\n\n      \x3c!-- Add font size dropdown --\x3e\n      <select class="ql-size">\n        <option value="small"></option>\n        \x3c!-- Note a missing, thus falsy value, is used to reset to default --\x3e\n        <option selected></option>\n        <option value="large"></option>\n        <option value="huge"></option>\n      </select>\n\n      <select class="ql-font">\n        <option selected="selected"></option>\n        <option value="serif"></option>\n        <option value="monospace"></option>\n      </select>\n\n      \x3c!-- Add subscript and superscript buttons --\x3e\n      <button class="ql-script" value="sub"></button>\n      <button class="ql-script" value="super"></button>\n\n      \x3c!-- You can also add your own --\x3e\n      <button style="width:auto" @click="customButtonClick">Click here</button>\n    </div>\n  </quill-editor>\n</template>\n\n<script>\n// require styles\nimport \'quill/dist/quill.core.css\'\nimport \'quill/dist/quill.snow.css\'\nimport \'quill/dist/quill.bubble.css\'\n\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  data() {\n    return {\n      editorOption: {\n        modules: {\n          toolbar: \'#toolbar\'\n        }\n      },\n      content: `...`,\n    }\n  },\n  components: {\n    quillEditor,\n  },\n  methods: {\n    customButtonClick() {\n      alert("Button clicked!");\n    }\n  }\n}\n<\/script>\n        ')])],2)},C=[],g={data:function(){return{editorOption:{modules:{toolbar:"#toolbar"}},content:'\n<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />\n<iframe class="ql-video ql-align-center" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\n            '}},components:{quillEditor:r["quillEditor"],Prism:u.a},methods:{customButtonClick:function(){alert("Button clicked!")}}},E=g,k=Object(p["a"])(E,_,C,!1,null,null,null),y=k.exports,j={components:{QuillEditorThemeSnow:b,QuillEditorThemeBubble:x,QuillEditorCustomToolbar:y}},B=j,Q=Object(p["a"])(B,l,n,!1,null,null,null);e["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-a7a964fe.f3388e03.js.map