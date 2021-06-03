(window.webpackJsonp=window.webpackJsonp||[]).push([[1154],{1226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(1714)),o={id:"divider",title:"Divider"},c={unversionedId:"divider",id:"version-3.0.0-next.36/divider",isDocsHomePage:!1,title:"Divider",description:"Divider is used to visually separate content in a list or group.",source:"@site/versioned_docs/version-3.0.0-next.36/divider.md",slug:"/divider",permalink:"/3.0.0-next.36/divider",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/divider.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Code",permalink:"/3.0.0-next.36/code"},next:{title:"KBD",permalink:"/3.0.0-next.36/Kbd"}},d=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Divider Orientation",id:"divider-orientation",children:[]},{value:"Composition",id:"composition",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:d};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Divider")," is used to visually separate content in a list or group."),Object(i.b)("h2",{id:"import"},Object(i.b)("strong",{parentName:"h2"},"Import")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Divider } from 'native-base';\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/view"}),Object(i.b)("inlineCode",{parentName:"a"},"View"))," from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),"React Native"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("p",null,"The Divider displays a thin horizontal or vertical line."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Divider Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Divider%2C%20NativeBaseProvider%2C%20Center%2C%20Box%20%7D%20from%20'native-base'%3B%0A%0Afunction%20DividerComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%7B48%7D%3E%0A%20%20%20%20%20%20%3CDivider%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CDividerComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"divider-orientation"},"Divider Orientation"),Object(i.b)("p",null,"Pass the ",Object(i.b)("inlineCode",{parentName:"p"},"orientation")," prop and set it to either ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vertical"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," If the horizontal orientation is used, make sure that the parent element is assigned a width and If the vertical orientation is used, make sure that the parent element is assigned a height.")),Object(i.b)("div",{className:"snack-player","data-snack-name":"Divider Divider Orientation","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Divider%2C%20Center%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20DividerComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%7B48%7D%3E%0A%20%20%20%20%20%20%3CDivider%20orientation%3D%22horizontal%22%20mb%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20%3CCenter%20height%3D%7B12%7D%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CDividerComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"composition"},"Composition"),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"bg")," or ",Object(i.b)("inlineCode",{parentName:"p"},"backgroundColor")," to change the divider's color and ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," to change its width and height respectively."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Divider Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Divider%2C%20HStack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20DividerComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20p%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CText%3ESimple%3C%2FText%3E%0A%20%20%20%20%20%20%3CDivider%20bg%3D%22red.500%22%20mx%3D%7B2%7D%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EEasy%3C%2FText%3E%0A%20%20%20%20%20%20%3CDivider%20bg%3D%22blue.500%22%20mx%3D%7B2%7D%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EBeautiful%3C%2FText%3E%0A%20%20%20%20%20%20%3CDivider%20bg%3D%22green.500%22%20mx%3D%7B2%7D%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3ENativeBase%3C%2FText%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CDividerComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orientation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"horizontal"),", ",Object(i.b)("inlineCode",{parentName:"td"},"vertical")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The orientation of the divider."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}l.isMDXComponent=!0},1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,v=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return a?r.a.createElement(v,c(c({ref:t},s),{},{components:a})):r.a.createElement(v,c({ref:t},s))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);