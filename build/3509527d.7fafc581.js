(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(1714)),o={id:"container",title:"Container"},c={unversionedId:"container",id:"container",isDocsHomePage:!1,title:"Container",description:"The Container is used to constrain a content's width to the current breakpoint, while keeping it fluid.",source:"@site/docs/container.md",slug:"/container",permalink:"/next/container",editUrl:"https://github.com/nativebase/website/tree/main/docs/container.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Center",permalink:"/next/center"},next:{title:"Flex",permalink:"/next/flex"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"Container",id:"container",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Container")," is used to constrain a content's width to the current breakpoint, while keeping it fluid."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/next/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"To include content, wrap it in the Container component."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Container Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Container%2C%20Text%2C%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ContainerComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CHeading%3E%0A%20%20%20%20%20%20%20%20A%20component%20library%20for%20the%0A%20%20%20%20%20%20%20%20%3CHeading%20color%3D%22emerald.400%22%3E%0A%20%20%20%20%20%20%20%20%20%20React%20Ecosystem%0A%20%20%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20pt%3D%7B4%7D%20fontWeight%3D%22md%22%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20NativeBase%20is%20a%20simple%2C%20modular%20and%20accessible%20component%20library%20that%20gives%20you%20building%20blocks%20to%20build%20you%20React%20applications.%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CContainerComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Container")," implements ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/next/box"}),"Box")),", so all the Box Props can be passed to it."),Object(i.b)("h3",{id:"container"},"Container"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"centerContent"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It'll center child elements based on their content width."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))))}b.isMDXComponent=!0}}]);