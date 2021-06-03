(window.webpackJsonp=window.webpackJsonp||[]).push([[1064],{1137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1714)),i=n(1718),c=n(1719),u={},s={unversionedId:"migration/Thumbnail",id:"version-3.0.0-next.35/migration/Thumbnail",isDocsHomePage:!1,title:"Thumbnail",description:"Migrating to v3 will provide a lot more design, size, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.35/migration/Thumbnail.md",slug:"/migration/Thumbnail",permalink:"/3.0.0-next.35/migration/Thumbnail",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/migration/Thumbnail.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"Tabs",permalink:"/3.0.0-next.35/migration/Tabs"},next:{title:"Toast",permalink:"/3.0.0-next.35/migration/Toast"}},l=[{value:"Code Comparison",id:"code-comparison",children:[]}],m={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Migrating to v3 will provide a lot more ",Object(o.b)("strong",{parentName:"p"},"design"),", ",Object(o.b)("strong",{parentName:"p"},"size"),", ",Object(o.b)("strong",{parentName:"p"},"color")," and ",Object(o.b)("strong",{parentName:"p"},"customisation")," option."),Object(o.b)("p",null,"With v3 we have replaced the ",Object(o.b)("strong",{parentName:"p"},"Thumbnail")," with ",Object(o.b)("inlineCode",{parentName:"p"},"Image"),". And we also provide ",Object(o.b)("inlineCode",{parentName:"p"},"Avatar")," as well."),Object(o.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(o.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { Component } from 'react';\nimport { Container, Header, Content, Thumbnail, Text } from 'native-base';\nexport default class ThumbnailExample extends Component {\n  render() {\n    const uri =\n      'https://facebook.github.io/react-native/docs/assets/favicon.png';\n    return (\n      <Container>\n        <Header />\n        <Content>\n          <Text>Square Thumbnail</Text>\n          <Thumbnail square small source={{ uri: uri }} />\n          <Thumbnail square source={{ uri: uri }} />\n          <Thumbnail square large source={{ uri: uri }} />\n          <Text>Circular Thumbnail</Text>\n          <Thumbnail small source={{ uri: uri }} />\n          <Thumbnail source={{ uri: uri }} />\n          <Thumbnail large source={{ uri: uri }} />\n        </Content>\n      </Container>\n    );\n  }\n}\n"))),Object(o.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Avatar, VStack, Text, Image } from 'native-base';\n\nexport default function () {\n  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';\n\n  return (\n    <VStack space={2} alignItems='center'>\n      <Text>Square Thumbnail</Text>\n      <Image size={12} source={{ uri: uri }} alt='react-native' />\n      <Image size={16} source={{ uri: uri }} alt='react-native' />\n      <Image size={20} source={{ uri: uri }} alt='react-native' />\n      <Text>Circular Thumbnail</Text>\n      <Avatar size='xs' source={{ uri: uri }} />\n      <Avatar size='md' source={{ uri: uri }} />\n      <Avatar size='lg' source={{ uri: uri }} />\n    </VStack>\n  );\n}\n")))))}b.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,d=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1715:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1716:function(e,t,n){"use strict";var r=n(0),a=n(1717);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1717:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},1718:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1716),i=n(1715),c=n(56),u=n.n(c);const s=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:m,groupId:b,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[v,g]=Object(r.useState)(c),O=r.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==v&&m.some((t=>t.value===e))&&g(e)}const h=e=>{g(e),null!=b&&f(b,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},m.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>h(e),onClick:()=>{h(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1719:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);