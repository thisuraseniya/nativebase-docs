(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},630:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(1714)),c={id:"button",title:"Button"},i={unversionedId:"button",id:"version-3.0.0-next.31/button",isDocsHomePage:!1,title:"Button",description:"The Button component is used to trigger an action or event.",source:"@site/versioned_docs/version-3.0.0-next.31/button.md",slug:"/button",permalink:"/3.0.0-next.31/button",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/button.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"ZStack",permalink:"/3.0.0-next.31/ZStack"},next:{title:"CheckBox",permalink:"/3.0.0-next.31/checkBox"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Loading",id:"loading",children:[]},{value:"Icons",id:"icons",children:[]},{value:"ButtonGroup",id:"buttongroup",children:[]},{value:"Composition",id:"composition",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component is used to trigger an action or event."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/touchableopacity"}),Object(o.b)("inlineCode",{parentName:"a"},"TouchableOpacity"))," form ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(o.b)("inlineCode",{parentName:"a"},"React Native")))),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Button, ButtonGroup } from 'native-base';\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Button")," : The button component with support for custom icons, spinners, etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ButtonGroup")," : Used to group buttons whose actions are related, with an option to flush them together.")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CButton%20size%3D%22sm%22%20colorScheme%3D%22teal%22%20variant%3D%7B'solid'%7D%20_text%3D%7B%7B%20fontWeight%3A%20700%20%7D%7D%3E%0A%20%20%20%20%20%20Button%20Variants%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"sizes"},"Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%7B%5B'xs'%2C%20'sm'%2C%20'md'%2C%20'lg'%5D.map((size%3A%20any)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%7Bsize%7D%20colorScheme%3D%22teal%22%3E%0A%20%20%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"variants"},"Variants"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button variants","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%7B%5B'solid'%2C%20'outline'%2C%20'ghost'%2C%20'link'%5D.map((variant%3A%20any)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%7Bvariant%7D%20colorScheme%3D%22teal%22%3E%0A%20%20%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"loading"},"Loading"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Loading","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22teal%22%20isLoading%3E%0A%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22teal%22%20isLoading%20isLoadingText%3D%22Submitting%22%3E%0A%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20colorScheme%3D%22teal%22%0A%20%20%20%20%20%20%20%20isLoading%0A%20%20%20%20%20%20%20%20isLoadingText%3D%22Submitting%22%0A%20%20%20%20%20%20%20%20variant%3D%22outline%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"icons"},"Icons"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Icons","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20VStack%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20startIcon%3D%7B%3CIcon%20name%3D%22menu%22%20size%3D%7B6%7D%20type%3D%22MaterialIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20colorScheme%3D%22indigo%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Menu%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20isDisabled%0A%20%20%20%20%20%20%20%20endIcon%3D%7B%3CIcon%20name%3D%22menu%22%20size%3D%7B6%7D%20type%3D%22MaterialIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20colorScheme%3D%22cyan%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Menu%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"buttongroup"},"ButtonGroup"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20ButtonGroup%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CButtonGroup%20variant%3D%22solid%22%20spacing%3D%7B6%7D%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22blue%22%3ESave%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22red%22%3ECancel%3C%2FButton%3E%0A%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"composition"},"Composition"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20height%3D%2248px%22%0A%20%20%20%20%20%20width%3D%22200px%22%0A%20%20%20%20%20%20border%3D%222px%22%0A%20%20%20%20%20%20borderColor%3D%22green.500%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Button%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Basic(With Ref)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ButtonComponent%20()%20%7B%0A%20%20const%20myRef%3A%20any%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20borderWidth%3A%2010%2C%0A%20%20%20%20%20%20opacity%3A%200.5%2C%0A%20%20%20%20%20%20borderRadius%3A%2010%2C%0A%20%20%20%20%7D)%3B%0A%20%20%7D%2C%20%5BmyRef%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CButton%20size%3D%22sm%22%20colorScheme%3D%22gray%22%20variant%3D%7B'solid'%7D%20ref%3D%7BmyRef%7D%3E%0A%20%20%20%20%20%20Button%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CButtonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ariaLabel"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An accessible label for the button, useful when you render only an icon in the button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"highlight"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active opacity of the button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"gray")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startIcon"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The start icon element to use in the button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endIcon"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The end icon element to use in the button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spinner"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The spinner element to use when isLoading is set to true."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ghost"),",",Object(o.b)("inlineCode",{parentName:"td"}," link"),",",Object(o.b)("inlineCode",{parentName:"td"}," outline"),",",Object(o.b)("inlineCode",{parentName:"td"}," solid"),",",Object(o.b)("inlineCode",{parentName:"td"}," unstyled")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variant of the button style to use."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"solid")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the button will be disabled."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isLoading"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the button will show a spinner."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loadingText"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The label to show in the button when isLoading is true. If no text is passed, it only shows the spinner"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(o.b)("inlineCode",{parentName:"td"},"md"),", ",Object(o.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(o.b)("inlineCode",{parentName:"td"},"xs")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"md"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shadow"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Shadow to apply to button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onPress"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback for onPress."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","text"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.31/text#props"}),Object(o.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props to style the child text"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}b.isMDXComponent=!0}}]);