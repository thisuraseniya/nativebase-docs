(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1714:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1715:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},1716:function(e,n,t){"use strict";var r=t(0),o=t(1717);n.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1717:function(e,n,t){"use strict";var r=t(0);const o=Object(r.createContext)(void 0);n.a=o},1718:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1716),i=t(1715),c=t(56),l=t.n(c);const s=37,u=39;n.a=function(e){const{lazy:n,block:t,defaultValue:c,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[v,O]=Object(r.useState)(c),g=r.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==v&&p.some((n=>n.value===e))&&O(e)}const y=e=>{O(e),null!=b&&f(b,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},p.map((({value:e,label:n})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(j,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},n)))),n?Object(r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map(((e,n)=>Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}},1719:function(e,n,t){"use strict";var r=t(3),o=t(0),a=t.n(o);n.a=function({children:e,hidden:n,className:t}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:t}),e)}},295:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),a=(t(0),t(1714)),i=t(1718),c=t(1719),l={},s={unversionedId:"migration/Spinner",id:"version-3.0.0-next.35/migration/Spinner",isDocsHomePage:!1,title:"Spinner",description:"Migrating to v3 will provide a lot more size, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.35/migration/Spinner.md",slug:"/migration/Spinner",permalink:"/3.0.0-next.35/migration/Spinner",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/migration/Spinner.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"Searchbar",permalink:"/3.0.0-next.35/migration/Searchbar"},next:{title:"Tabs",permalink:"/3.0.0-next.35/migration/Tabs"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:u};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Migrating to v3 will provide a lot more ",Object(a.b)("strong",{parentName:"p"},"size"),", ",Object(a.b)("strong",{parentName:"p"},"color")," and ",Object(a.b)("strong",{parentName:"p"},"customisation")," option."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Migrating Badge components can broadly described in these points:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Also get 2 size options, namely sm and lg."),Object(a.b)("li",{parentName:"ul"},"In v3 the color are provided by theme, so the shade for the color should be passed along with the color name.")),Object(a.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(a.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Spinner />\n<Spinner color='red' />\n<Spinner color='green' />\n<Spinner color='blue' />\n"))),Object(a.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'<Spinner />\n<Spinner color="danger.400" />\n<Spinner color="green.500" />\n<Spinner color="blue.500" />\n')))))}b.isMDXComponent=!0}}]);