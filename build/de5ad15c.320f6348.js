(window.webpackJsonp=window.webpackJsonp||[]).push([[1442],{1513:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(1714)),i=n(1718),c=n(1719),s={},u={unversionedId:"migration/Card",id:"version-3.0.0-next.24/migration/Card",isDocsHomePage:!1,title:"Card",description:"With NativeBase v3 we have removed Card components because as it's very simple to create various card layout using primitive components.",source:"@site/versioned_docs/version-3.0.0-next.24/migration/Card.md",slug:"/migration/Card",permalink:"/3.0.0-next.24/migration/Card",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/migration/Card.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"Button",permalink:"/3.0.0-next.24/migration/Button"},next:{title:"Checkbox",permalink:"/3.0.0-next.24/migration/Checkbox"}},l=[{value:"Code Comparison",id:"code-comparison",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With NativeBase v3 we have removed Card components because as it's very simple to create various card layout using primitive components."),Object(o.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(o.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { Component } from 'react';\nimport {\n  Container,\n  Header,\n  Content,\n  Card,\n  CardItem,\n  Text,\n  Body,\n} from 'native-base';\nexport default class CardItemBordered extends Component {\n  render() {\n    return (\n      <Container>\n        <Header />\n        <Content padder>\n          <Card>\n            <CardItem header bordered>\n              <Text>NativeBase</Text>\n            </CardItem>\n            <CardItem bordered>\n              <Body>\n                <Text>\n                  NativeBase is a free and open source framework that enable\n                  developers to build high-quality mobile apps using React\n                  Native iOS and Android apps with a fusion of ES6.\n                </Text>\n              </Body>\n            </CardItem>\n            <CardItem footer bordered>\n              <Text>GeekyAnts</Text>\n            </CardItem>\n          </Card>\n        </Content>\n      </Container>\n    );\n  }\n}\n"))),Object(o.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { VStack, Box, Divider } from 'native-base';\n\nexport default function () {\n  return (\n    <Box border={1} borderRadius='md'>\n      <VStack space={4} divider={<Divider />}>\n        <Box px={4} pt={4}>\n          NativeBase\n        </Box>\n        <Box px={4}>\n          NativeBase is a free and open source framework that enable developers\n          to build high-quality mobile apps using React Native iOS and Android\n          apps with a fusion of ES6.\n        </Box>\n        <Box px={4} pb={4}>\n          GeekyAnts\n        </Box>\n      </VStack>\n    </Box>\n  );\n}\n")))))}p.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1715:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1716:function(e,t,n){"use strict";var r=n(0),a=n(1717);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1717:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},1718:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1716),i=n(1715),c=n(56),s=n.n(c);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:d,groupId:p,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(o.a)(),[v,y]=Object(r.useState)(c),O=r.Children.toArray(e.children);if(null!=p){const e=b[p];null!=e&&e!==v&&d.some((t=>t.value===e))&&y(e)}const x=e=>{y(e),null!=p&&f(p,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>x(e),onClick:()=>{x(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1719:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);