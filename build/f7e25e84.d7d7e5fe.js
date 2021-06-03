(window.webpackJsonp=window.webpackJsonp||[]).push([[1590],{1661:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(1714)),i={id:"buildingSearchBar",title:"Building SearchBar"},c={unversionedId:"buildingSearchBar",id:"buildingSearchBar",isDocsHomePage:!1,title:"Building SearchBar",description:"Search-bar are one of the most commonly seen variation of input. Here are design to make life easier.",source:"@site/docs/buildingSearchBar.md",slug:"/buildingSearchBar",permalink:"/next/buildingSearchBar",editUrl:"https://github.com/nativebase/website/tree/main/docs/buildingSearchBar.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Building Card",permalink:"/next/buildingCard"},next:{title:"Building AppBar",permalink:"/next/buildingAppBar"}},s=[{value:"Example:",id:"example",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Search-bar are one of the most commonly seen variation of input. Here are design to make life easier."),Object(o.b)("h2",{id:"example"},"Example:"),Object(o.b)("p",null,"Here are some examples to show how easily and quickly we can create so many types of search-bars."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Search Bar","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20VStack%2C%20Input%2C%20Button%2C%20IconButton%2C%20Icon%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Aimport%20%7B%20FontAwesome5%20%7D%20from%20'%40expo%2Fvector-icons'%3B%0A%0Afunction%20SearchBar()%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20mx%3D%7B2%7D%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Search...%22%0A%20%20%20%20%20%20%20%20variant%3D%22filled%22%0A%20%20%20%20%20%20%20%20borderRadius%3D%22pill%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22info%22%20borderRadius%3D%22pill%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20size%3D'sm'%20as%3D%7B%3CFontAwesome5%20name%3D%22search%22%20%2F%3E%7D%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Search...%22%0A%20%20%20%20%20%20%20%20variant%3D%22filled%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3D%22pill%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20size%3D'sm'%20as%3D%7B%3CFontAwesome5%20name%3D%22search%22%20%2F%3E%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Search...%22%0A%20%20%20%20%20%20%20%20variant%3D%22rounded%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3D%22pill%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20size%3D'sm'%20as%3D%7B%3CFontAwesome5%20name%3D%22search%22%20%2F%3E%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSearchBar%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}))}p.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);