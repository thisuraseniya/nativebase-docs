(window.webpackJsonp=window.webpackJsonp||[]).push([[1314],{1386:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(1714)),i={id:"buildingSearchBar",title:"Building SearchBar"},c={unversionedId:"buildingSearchBar",id:"version-3.0.0-next.30/buildingSearchBar",isDocsHomePage:!1,title:"Building SearchBar",description:"Search-bar are one of the most commonly seen variation of input. Here are design to make life easier.",source:"@site/versioned_docs/version-3.0.0-next.30/buildingSearchBar.md",slug:"/buildingSearchBar",permalink:"/3.0.0-next.30/buildingSearchBar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/buildingSearchBar.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Building Card",permalink:"/3.0.0-next.30/buildingCard"},next:{title:"Building a form with Validation",permalink:"/3.0.0-next.30/form"}},l=[{value:"Example:",id:"example",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Search-bar are one of the most commonly seen variation of input. Here are design to make life easier."),Object(o.b)("h2",{id:"example"},"Example:"),Object(o.b)("p",null,"Here are some examples to should easily and quickly we can create so many types of search-bars."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Search Bar","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20VStack%2C%20Input%2C%20Button%2C%20Icon%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20SearchBar()%7B%0Areturn%20%20%20%3CVStack%20w%3D%2290%25%22%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Search...%22%0A%20%20%20%20%20%20%20%20variant%3D%22filled%22%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20w%3D%22100%25%22%0A%20%20%20%20%20%20%20%20borderRadius%3D%22pill%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22info%22%20borderRadius%3D%22pill%22%20height%3D%7B12%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22FontAwesome5%22%20name%3D%22search%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Search...%22%0A%20%20%20%20%20%20%20%20variant%3D%22filled%22%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20w%3D%22100%25%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20height%3D%7B12%7D%20bg%3D%22transparent%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22FontAwesome5%22%20name%3D%22search%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Search...%22%0A%20%20%20%20%20%20%20%20variant%3D%22rounded%22%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20w%3D%22100%25%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3D%22pill%22%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3D%7B12%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20bg%3D%22transparent%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22FontAwesome5%22%20name%3D%22search%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSearchBar%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}))}u.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);