(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1715:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1716:function(e,t,n){"use strict";var r=n(0),a=n(1717);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1717:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},1718:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1716),i=n(1715),c=n(56),l=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(r.useState)(c),g=r.Children.toArray(e.children);if(null!=b){const e=m[b];null!=e&&e!==v&&p.some((t=>t.value===e))&&O(e)}const y=e=>{O(e),null!=b&&f(b,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1719:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},535:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1714)),i=n(1718),c=n(1719),l={},s={unversionedId:"migration/Radio Button",id:"version-3.0.0-next.31/migration/Radio Button",isDocsHomePage:!1,title:"Radio Button",description:"Migrating to v3 will provide a lot more design, size, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.31/migration/Radio Button.md",slug:"/migration/Radio Button",permalink:"/3.0.0-next.31/migration/Radio Button",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/migration/Radio Button.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"Picker",permalink:"/3.0.0-next.31/migration/Picker"},next:{title:"Searchbar",permalink:"/3.0.0-next.31/migration/Searchbar"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Migrating to v3 will provide a lot more ",Object(o.b)("strong",{parentName:"p"},"design"),", ",Object(o.b)("strong",{parentName:"p"},"size"),", ",Object(o.b)("strong",{parentName:"p"},"color")," and ",Object(o.b)("strong",{parentName:"p"},"customisation")," option."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Migrating Checkbox components can broadly described in these points:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In v3 ",Object(o.b)("inlineCode",{parentName:"li"},"Radio")," can only used along with ",Object(o.b)("inlineCode",{parentName:"li"},"Radio.Group"),"."),Object(o.b)("li",{parentName:"ul"},"Colors of the Checkbox:\nIn v3 the color is controlled by ",Object(o.b)("inlineCode",{parentName:"li"},"colorScheme")," prop. And it accepts all the color available in the theme."),Object(o.b)("li",{parentName:"ul"},"onPress props is deprecated, instead v3 provides onChange which provides a callback when state of the checkbox change.")),Object(o.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(o.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Radio selected={true} />\n"))),Object(o.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Radio.Group defaultValue='1' name='myRadioGroup'>\n  <Radio value='1' />\n</Radio.Group>\n")))))}b.isMDXComponent=!0}}]);