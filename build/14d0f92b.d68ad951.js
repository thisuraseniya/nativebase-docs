(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(p,".").concat(m)]||b[m]||l[m]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(1714)),p={id:"input",title:"Input"},c={unversionedId:"input",id:"version-3.0.0-next.38/input",isDocsHomePage:!1,title:"Input",description:"The Input component is a component that is used to get user input in a text field.",source:"@site/versioned_docs/version-3.0.0-next.38/input.md",slug:"/input",permalink:"/input",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/input.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"IconButton",permalink:"/iconButton"},next:{title:"Link",permalink:"/link"}},i=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Input Sizes",id:"input-sizes",children:[]},{value:"Input Variants",id:"input-variants",children:[]},{value:"Input Elements",id:"input-elements",children:[]},{value:"Password Input",id:"password-input",children:[]},{value:"Controlled Input",id:"controlled-input",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]}]},{value:"Props",id:"props",children:[{value:"Input",id:"input",children:[]},{value:"Input.Group",id:"inputgroup",children:[]}]}],s={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Input")," component is a component that is used to get user input in a text field."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Input%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CInput%20mx%3D%7B3%7D%20placeholder%3D%22Default%20Input%22%20%2F%3E%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"input-sizes"},"Input Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Input%2C%20Stack%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3EInput%20Sizes%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22xs%22%20placeholder%3D%22xs%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22sm%22%20placeholder%3D%22sm%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22md%22%20placeholder%3D%22md%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22lg%22%20placeholder%3D%22lg%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22xl%22%20placeholder%3D%22xl%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%222xl%22%20placeholder%3D%222xl%20Input%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"input-variants"},"Input Variants"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Input%2C%20Stack%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20w%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3EInput%20Variants%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22outline%22%20placeholder%3D%22Outline%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22filled%22%20placeholder%3D%22Filled%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22underlined%22%20placeholder%3D%22Underlined%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22unstyled%22%20placeholder%3D%22Unstyled%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22rounded%22%20placeholder%3D%22Round%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"input-elements"},"Input Elements"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Input%2C%0A%20%20Icon%2C%0A%20%20useColorModeValue%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20InputLeftElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20as%3D%7BMaterialIcons%7D%0A%20%20%20%20%20%20%20%20%20%20name%3D%22phone%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%7BuseColorModeValue(%22black%22%2C%20%22gray.300%22)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20as%3D%7BMaterialIcons%7D%0A%20%20%20%20%20%20%20%20%20%20name%3D%22person%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20m%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%7BuseColorModeValue(%22black%22%2C%20%22gray.300%22)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20placeholder%3D%22Left%20and%20Right%20InputElement%22%0A%20%20%20%20%20%20mx%3D%7B4%7D%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"password-input"},"Password Input"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Input%2C%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(false)%0A%0A%20%20const%20handleClick%20%3D%20()%20%3D%3E%20setShow(!show)%0A%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20type%3D%7Bshow%20%3F%20%22text%22%20%3A%20%22password%22%7D%0A%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CButton%20ml%3D%7B1%7D%20roundedLeft%3D%7B0%7D%20roundedRight%3D%22md%22%20onPress%3D%7BhandleClick%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bshow%20%3F%20%22Hide%22%20%3A%20%22Show%22%7D%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20placeholder%3D%22Password%22%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"controlled-input"},"Controlled Input"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Input%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bvalue%2C%20setValue%5D%20%3D%20React.useState(%22%22)%0A%0A%20%20const%20handleChange%20%3D%20(event)%20%3D%3E%20setValue(event.target.value)%0A%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20mx%3D%7B3%7D%0A%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20onChange%3D%7BhandleChange%7D%0A%20%20%20%20%20%20placeholder%3D%22Value%20Controlled%20Input%22%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Input%2C%0A%20%20Stack%2C%0A%20%20FormControl%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFormControl%20isRequired%20isInvalid%20p%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CStack%20mx%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EForm%20Controlled%20Input%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22FormControl%20is%20providing%20me%20isInvalid%20prop%22%0A%20%20%20%20%20%20%20%20%20%20my%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3EI%20am%20a%20Helper%20text%20%F0%9F%98%8A%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%20%20%20%20I'll%20only%20appear%20when%20FormControl%20have%20isInvalid%20props.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FFormControl%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"input"},"Input"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isInvalid\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the input will indicate an error.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "outline" | "filled" | "underlined" | "unstyled" | "rounded"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The variant of the input style to use.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("code",{parentName:"td"},"outline"),"\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the input will be disabled.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size of the input.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("code",{parentName:"td"},"md"),"\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isRequired\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isReadOnly\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, prevents the value of the input from being edited.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isFullWidth\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the input element will span the full width of its parent\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        InputLeftElement\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If given, adds the provided element to the left of the input.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        InputRightElement\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If given, adds the provided element to the right of the input.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        type\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Using the type password, user can mask the input.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        wrapperRef\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Ref to be passed to Icon's wrapper Box\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _hover\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"input#input"}),"IInputProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on hovered state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _focus\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"input#input"}),"IInputProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on focused state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _disabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"input#input"}),"IInputProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on disabled state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _invalid\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"input#input"}),"IInputProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on invalid state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Input implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"ColorProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#background"}),"BackgroundProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view"}),Object(o.b)("code",{parentName:"a"},"View")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#typography"}),"TypographyProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#outline"}),"OutlineProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"))),Object(o.b)("h3",{id:"inputgroup"},"Input.Group"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The variant of the input style to use.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("code",{parentName:"td"},"outline"),"\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size of the input.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("code",{parentName:"td"},"md"),"\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"InputGroup implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"box#props"}),"Box"))))}d.isMDXComponent=!0}}]);