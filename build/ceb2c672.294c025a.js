(window.webpackJsonp=window.webpackJsonp||[]).push([[1342],{1413:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(1714)),c={id:"Kbd",title:"KBD"},i={unversionedId:"Kbd",id:"version-3.0.0-next.38/Kbd",isDocsHomePage:!1,title:"KBD",description:"The keyboard key component exists to show which key or combination of keys performs a given action.",source:"@site/versioned_docs/version-3.0.0-next.38/Kbd.md",slug:"/Kbd",permalink:"/Kbd",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/Kbd.md",version:"3.0.0-next.38"},s=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The keyboard key component exists to show which key or combination of keys performs a given action."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"KBD Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20HStack%2C%20Kbd%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20KbdComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%20%20%3CKbd%3Eshift%3C%2FKbd%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%20%2B%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CKbd%3EC%3C%2FKbd%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%20%20%3CKbd%3Eshift%3C%2FKbd%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%20then%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CKbd%3EH%3C%2FKbd%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%20%20%3CKbd%3Ealt%3C%2FKbd%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%20or%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CKbd%3Eoption%3C%2FKbd%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CKbdComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Kbd")," implements ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"/box"}),"Box")),", so all the Box Props can be passed to it."))}d.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,m=b["".concat(c,".").concat(u)]||b[u]||l[u]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);