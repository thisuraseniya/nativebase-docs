(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},660:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1714)),i={id:"radio",title:"Radio"},c={unversionedId:"radio",id:"version-3.0.0-next.38/radio",isDocsHomePage:!1,title:"Radio",description:"Radio is used when only one choice may be selected in a series of options.",source:"@site/versioned_docs/version-3.0.0-next.38/radio.md",slug:"/radio",permalink:"/radio",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/radio.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Link",permalink:"/link"},next:{title:"Select",permalink:"/select"}},d=[{value:"Examples",id:"examples",children:[{value:"Controlled",id:"controlled",children:[]},{value:"Uncontrolled",id:"uncontrolled",children:[]},{value:"Disabled",id:"disabled",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Size",id:"size",children:[]},{value:"Custom Color",id:"custom-color",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[{value:"Radio",id:"radio",children:[]},{value:"Radio Group",id:"radio-group",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard Interactions",id:"keyboard-interactions",children:[]}]}],s={toc:d};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Radio")," is used when only one choice may be selected in a series of options."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"controlled"},"Controlled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bvalue%2C%20setValue%5D%20%3D%20React.useState(%22one%22)%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%0A%20%20%20%20%20%20name%3D%22myRadioGroup%22%0A%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20onChange%3D%7B(nextValue)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setValue(nextValue)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%22one%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20One%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%22two%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Two%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"uncontrolled"},"Uncontrolled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%20name%3D%22myRadioGroup%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20First%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%222%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Second%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%223%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Third%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"disabled"},"Disabled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%222%22%20name%3D%22exampleGroup%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20my%3D%7B1%7D%20isDisabled%3E%0A%20%20%20%20%20%20%20%20First%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%222%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Second%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%223%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Third%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"invalid"},"Invalid"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20name%3D%22exampleGroup%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%22test%22%20isInvalid%3E%0A%20%20%20%20%20%20%20%20Invalid%20Radio%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"size"},"Size"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20name%3D%22exampleGroup%22%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20colorScheme%3D%22red%22%20size%3D%22sm%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Small%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%222%22%20colorScheme%3D%22green%22%20size%3D%22md%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Medium%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%223%22%20colorScheme%3D%22yellow%22%20size%3D%22lg%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Large%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"custom-color"},"Custom Color"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%20name%3D%22exampleGroup%22%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22emerald%22%20value%3D%221%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20emerald%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22secondary%22%20value%3D%222%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20secondary%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22warning%22%20value%3D%223%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20warning%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"custom-icon"},"Custom Icon"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialCommunityIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%20size%3D%22lg%22%20name%3D%22exampleGroup%22%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20mx%3A%202%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20value%3D%221%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22alien%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20my%3D%7B1%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Alien%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20mx%3A%202%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20colorScheme%3D%22red%22%0A%20%20%20%20%20%20%20%20value%3D%222%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22fire%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20my%3D%7B1%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Fire%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20colorScheme%3D%22warning%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20mx%3A%202%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20value%3D%223%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22exclamation%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20my%3D%7B1%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Warning%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Container%2C%0A%20%20FormControl%2C%0A%20%20Radio%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3ESelect%20One%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%20name%3D%22exampleGroup%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20First%0A%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%222%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Second%0A%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%223%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Third%0A%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Radio%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20myRef%20%3D%20React.useRef(%7B%7D)%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%0A%20%20%20%20%20%20name%3D%22exampleGroup%22%0A%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20onChange%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(value%20%3D%3D%3D%20%222%22)%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current%3F.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%22%2300de0050%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current%3F.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%22%23fa000050%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22success%22%20value%3D%221%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Wrong%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22success%22%20ref%3D%7BmyRef%7D%20value%3D%222%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Right%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"radio"},"Radio"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The value to be used in the radio input. This is the value that will be returned on form submission\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        The color of the radio. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        'priamry'\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the radio will be disabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isInvalid\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the radio is marked as invalid. Changes style of unchecked state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "sm" | "md" | "lg"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size (width and height) of the radio.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        icon\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If given, will use this icon instead of the default.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        wrapperRef\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Ref to be passed to Icon's wrapper Box\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Radio implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h3",{id:"radio-group"},"Radio Group"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The value of the radio group.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        name\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The name of the input field in a radio (Useful for form submission).\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        defaultValue\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The initial value of the radio group.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        The color of the radios. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        'priamry'\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "sm" | "md" | "lg"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size (width and height) of the radio.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        onChange\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        IRadioGroupOnChangeHandler\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The callback fired when any children radio is checked or unchecked.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"RadioGroup implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h2",{id:"accessibility"},"Accessibility"),Object(o.b)("p",null,"Uses React Native ARIA ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/docs/useRadioGroup"}),"@react-native-aria/radio")," which follows the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton"}),"Radio Group WAI-ARIA design pattern"),"."),Object(o.b)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Tab")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to either the checked radio item or the first radio item in the group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Space")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When focus is on an unchecked radio item, checks it.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ArrowDown")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the next radio item in the group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ArrowRight")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the next radio item in the group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ArrowUp")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the previous radio item in the group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ArrowLeft")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the previous radio item in the group.")))))}l.isMDXComponent=!0}}]);