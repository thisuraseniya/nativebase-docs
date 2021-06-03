(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1714:function(e,o,t){"use strict";t.d(o,"a",(function(){return u})),t.d(o,"b",(function(){return b}));var r=t(0),n=t.n(r);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),d=function(e){var o=n.a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=d(e.components);return n.a.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},m=n.a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?n.a.createElement(b,i(i({ref:o},s),{},{components:t})):n.a.createElement(b,i({ref:o},s))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},397:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return c})),t.d(o,"metadata",(function(){return i})),t.d(o,"toc",(function(){return l})),t.d(o,"default",(function(){return d}));var r=t(3),n=t(7),a=(t(0),t(1714)),c={id:"color-mode",title:"Color Mode"},i={unversionedId:"color-mode",id:"color-mode",isDocsHomePage:!1,title:"Color Mode",description:"When you use the\xa0NativebaseProvider\xa0at the root of your app, you can automatically use color mode in your apps.",source:"@site/docs/colorMode.md",slug:"/color-mode",permalink:"/next/color-mode",editUrl:"https://github.com/nativebase/website/tree/main/docs/colorMode.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Utility Props",permalink:"/next/utility-props"},next:{title:"NativeBase Factory",permalink:"/next/nativebase-factory"}},l=[{value:"<strong>useColorMode</strong>",id:"usecolormode",children:[]},{value:"<strong>useColorModeValue</strong>",id:"usecolormodevalue",children:[]},{value:"Default color mode",id:"default-color-mode",children:[]},{value:"Persisting the color mode",id:"persisting-the-color-mode",children:[]}],s={toc:l};function d(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you use the\xa0",Object(a.b)("inlineCode",{parentName:"p"},"NativebaseProvider"),"\xa0at the root of your app, you can automatically use color mode in your apps."),Object(a.b)("p",null,"By default, most components are dark mode compatible. To handle color mode manually in your application, use the\xa0",Object(a.b)("inlineCode",{parentName:"p"},"useColorMode"),"\xa0or\xa0",Object(a.b)("inlineCode",{parentName:"p"},"useColorModeValue"),"\xa0hooks."),Object(a.b)("h2",{id:"usecolormode"},Object(a.b)("strong",{parentName:"h2"},"useColorMode")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useColorMode"),"\xa0is a React hook that gives you access to the current color mode, and a function to toggle the color mode."),Object(a.b)("p",null,"Calling toggleColorMode anywhere in your app tree toggles the color mode."),Object(a.b)("h2",{id:"usecolormodevalue"},Object(a.b)("strong",{parentName:"h2"},"useColorModeValue")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useColorModeValue"),"\xa0is a React hook used to change any value or style based on the color mode. It takes 2 arguments: the value in light mode, and the value in dark mode."),Object(a.b)("div",{className:"snack-player","data-snack-name":"ColorMode Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20useColorMode%2C%0A%20%20Button%2C%0A%20%20HStack%2C%0A%20%20Avatar%2C%0A%20%20Center%2C%0A%20%20useColorModeValue%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20ColorModeExample%20()%20%7B%0A%20%20const%20%7B%20colorMode%2C%20toggleColorMode%20%7D%20%3D%20useColorMode()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CHeading%3EI'm%20a%20Heading%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20colorScheme%3D%7BcolorMode%20%3D%3D%3D%20'light'%20%3F%20'blue'%20%3A%20'red'%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20toggleColorMode()%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Change%20mode%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B2%7D%20mt%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20name%3D%22Ankur%22%0A%20%20%20%20%20%20%20%20%20%20borderWidth%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20name%3D%22Rohit%22%0A%20%20%20%20%20%20%20%20%20%20borderWidth%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20LocalWrapper%20%3D%20(%7B%20children%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%0A%20%20%20%20%20%20flex%3D%7B1%7D%0A%20%20%20%20%20%20bg%3D%7BuseColorModeValue('gray.200'%2C%20'gray.800')%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%7Bchildren%7D%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CLocalWrapper%3E%0A%20%20%20%20%20%20%20%20%3CColorModeExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FLocalWrapper%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(a.b)("h2",{id:"default-color-mode"},"Default color mode"),Object(a.b)("p",null,"You can set default color mode. By default, the color mode will be\xa0",Object(a.b)("inlineCode",{parentName:"p"},"light"),". To support this, extend the default theme with a\xa0",Object(a.b)("inlineCode",{parentName:"p"},"config")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { NativeBaseProvider, extendTheme, Text } from 'native-base';\n\n// Define the config\nconst config = {\n  useSystemColorMode: false,\n  initialColorMode: 'dark',\n};\n\n// extend the theme\nconst customTheme = extendTheme({ config });\nfunction App() {\n  return (\n    // pass itto NativeBaseProvider\n    <NativeBaseProvider theme={customTheme}>\n      // Your component\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("h2",{id:"persisting-the-color-mode"},"Persisting the color mode"),Object(a.b)("p",null,"You can persist the color mode in you app by defining you color mode manager of type ",Object(a.b)("inlineCode",{parentName:"p"},"StorageManager")," and passing it to the NativeBaseProvider. This will retain the color mode even when the app is refreshed."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { NativeBaseProvider, StorageManager, ColorMode } from 'native-base';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\n\n// Define the colorModeManager,\n// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)\nconst colorModeManager: StorageManager = {\n  get: async () => {\n    try {\n      let val = await AsyncStorage.getItem('@color-mode');\n      return val === 'dark' ? 'dark' : 'light';\n    } catch (e) {\n      return 'light';\n    }\n  },\n  set: async (value: ColorMode) => {\n    try {\n      await AsyncStorage.setItem('@color-mode', value);\n    } catch (e) {\n      console.log(e);\n    }\n  },\n};\nexport default function () {\n  return (\n    // pass it to NativeBaseProvider\n    <NativeBaseProvider colorModeManager={colorModeManager}>\n      // Your components\n    </NativeBaseProvider>\n  );\n}\n")))}d.isMDXComponent=!0}}]);