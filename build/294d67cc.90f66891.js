(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(u,i(i({ref:t},d),{},{components:a})):r.a.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},350:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1714)),c={id:"badge",title:"Badge"},i={unversionedId:"badge",id:"version-3.0.0-next.21/badge",isDocsHomePage:!1,title:"Badge",description:"Badges are used to highlight an item's status for quick recognition.",source:"@site/versioned_docs/version-3.0.0-next.21/badge.md",slug:"/badge",permalink:"/3.0.0-next.21/badge",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/badge.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"TypeAhead(Autocomplete)",permalink:"/3.0.0-next.21/typeAhead"},next:{title:"CloseButton",permalink:"/3.0.0-next.21/closeButton"}},s=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Example (Colors)",id:"example-colors",children:[]},{value:"Example (Variants)",id:"example-variants",children:[]},{value:"Props",id:"props",children:[{value:"Badge",id:"badge",children:[]}]}],d={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Badges are used to highlight an item's status for quick recognition."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Badge } from 'native-base';\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Badge Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20BadgeComponent%20()%20%7B%0A%20%20return%20%3CBadge%3EDEFAULT%20BADGE%3C%2FBadge%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CBadgeComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"example-colors"},"Example (Colors)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Badge Example(Colors)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20BadgeComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CBadge%20m%3D%7B2%7D%20colorScheme%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20SUCCESS%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20m%3D%7B2%7D%20colorScheme%3D%22danger%22%3E%0A%20%20%20%20%20%20%20%20DANGER%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20m%3D%7B2%7D%20colorScheme%3D%22gray%22%3E%0A%20%20%20%20%20%20%20%20GRAY%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20m%3D%7B2%7D%20colorScheme%3D%22dark%22%3E%0A%20%20%20%20%20%20%20%20DARK%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CBadgeComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"example-variants"},"Example (Variants)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Badge Example(Variants)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20BadgeComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CBadge%20mx%3D%7B2%7D%20colorScheme%3D%22success%22%20variant%3D%22solid%22%3E%0A%20%20%20%20%20%20%20%20SOLID%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20mx%3D%7B2%7D%20colorScheme%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20SUBTLE%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20mx%3D%7B2%7D%20colorScheme%3D%22success%22%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20OUTLINE%0A%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CBadgeComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"badge"},"Badge"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"outline, solid, subtle"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The style variant of the badge."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"subtle")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color scheme to use for the badge. Must be a key in theme.colors."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}l.isMDXComponent=!0}}]);