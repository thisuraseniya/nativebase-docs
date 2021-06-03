(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{1714:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,u=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return r?n.a.createElement(u,c(c({ref:t},l),{},{components:r})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},593:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),o=(r(0),r(1714)),s={id:"progress",title:"Progress"},c={unversionedId:"progress",id:"version-3.0.0-next.21/progress",isDocsHomePage:!1,title:"Progress",description:"Progress is used to display the progress status for a task that takes a long time or consists of several steps.",source:"@site/versioned_docs/version-3.0.0-next.21/progress.md",slug:"/progress",permalink:"/3.0.0-next.21/progress",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/progress.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"CircularProgress",permalink:"/3.0.0-next.21/circularProgress"},next:{title:"Skeleton",permalink:"/3.0.0-next.21/skeleton"}},i=[{value:"Import",id:"import",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Progress colorScheme and Sizes",id:"progress-colorscheme-and-sizes",children:[]},{value:"Rounded Progress",id:"rounded-progress",children:[]},{value:"Custom Track Color",id:"custom-track-color",children:[]},{value:"Props",id:"props",children:[{value:"Progress",id:"progress",children:[]}]}],l={toc:i};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Progress")," is used to display the progress status for a task that takes a long time or consists of several steps."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Progress } from 'native-base';\n")),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Box")," from nativebase")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"progress-colorscheme-and-sizes"},"Progress colorScheme and Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress ColorSchemeSizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22xs%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22sm%22%20colorScheme%3D%22success%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22md%22%20colorScheme%3D%22dark%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22lg%22%20colorScheme%3D%22danger%22%20mb%3D%7B4%7D%20value%3D%7B65%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22xl%22%20colorScheme%3D%22warning%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%222xl%22%20colorScheme%3D%22light%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"rounded-progress"},"Rounded Progress"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress Rounded","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20rounded%3D%2250%22%20size%3D%22lg%22%20colorScheme%3D%22blue%22%20mb%3D%7B4%7D%20value%3D%7B65%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"custom-track-color"},"Custom Track Color"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress Custom Track Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22lg%22%20colorScheme%3D%22warning%22%20bg%3D%22teal.200%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"progress"},"Progress"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value of Progress."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2xl, lg, md, sm, xl, xs"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defines height of Progress"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"md")))))}d.isMDXComponent=!0}}]);