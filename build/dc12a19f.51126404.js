(window.webpackJsonp=window.webpackJsonp||[]).push([[1428],{1499:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(1714)),i=a(1718),c=a(1719),l={id:"installation",title:"Installation"},s={unversionedId:"installation",id:"version-3.0.0-next.32/installation",isDocsHomePage:!1,title:"Installation",description:"To have NativeBase components running onto your native apps, all you need to do is, create a fresh React Native project using whatever you want, expo is a really great starting point so we will start with that and install the NativeBase using npm or yarn and add all the peer dependencies.",source:"@site/versioned_docs/version-3.0.0-next.32/installation.md",slug:"/installation",permalink:"/3.0.0-next.32/installation",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.32/installation.md",version:"3.0.0-next.32",sidebar:"version-3.0.0-next.32/componentsSidebar",previous:{title:"NativeBase 3.0",permalink:"/3.0.0-next.32/nativebase"},next:{title:"Setup NativeBase Provider",permalink:"/3.0.0-next.32/setup-provider"}},p=[{value:"Setup with Expo",id:"setup-with-expo",children:[]},{value:"Setup with React Native",id:"setup-with-react-native",children:[]},{value:"Setup for Next.js with Expo for Web",id:"setup-for-nextjs-with-expo-for-web",children:[{value:"Important",id:"important",children:[]}]}],b={toc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To have ",Object(o.b)("inlineCode",{parentName:"p"},"NativeBase")," components running onto your native apps, all you need to do is, create a fresh React Native project using whatever you want, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/get-started/installation/"}),"expo")," is a really great starting point so we will start with that and install the NativeBase using ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," and add all the peer dependencies."),Object(o.b)("h2",{id:"setup-with-expo"},"Setup with Expo"),Object(o.b)("p",null,"Expo helps you make React Native apps with no build configuration. It works on macOS, Windows, and Linux. Refer this link for additional information on\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/"}),"Expo")," and setting up an Expo starter app."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For ",Object(o.b)("strong",{parentName:"em"},"Installing NativeBase")," just copy this and paste in your terminal and Voila! you are good to go to ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"setup-provider"}),"Setup NativeBaseProvider"))),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add native-base@next react-native-svg @expo/vector-icons styled-components styled-system react-native-safe-area-context\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i native-base@next react-native-svg @expo/vector-icons styled-components styled-system react-native-safe-area-context\n")))),Object(o.b)("h2",{id:"setup-with-react-native"},"Setup with React Native"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"react-native init AwesomeNativeBase\ncd AwesomeNativeBase\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Install ",Object(o.b)("strong",{parentName:"em"},"NativeBase"))),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add native-base@next\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i native-base@next\n")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Install ",Object(o.b)("strong",{parentName:"em"},"Peer Dependencies"))),Object(o.b)("p",null,"The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/blog/2019/07/03/version-60"}),"react-native@0.60.0")," or above supports autolinking, so there is no need to run linking process. Read more about autolinking ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"here"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"react-native link\n")),Object(o.b)("p",null,"You've successfully setup\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nativebase.io/"}),"NativeBase"),"\xa0with your\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/"}),"React Native"),"\xa0app. Your React Native app is ready to run on iOS and Android devices."),Object(o.b)("h2",{id:"setup-for-nextjs-with-expo-for-web"},"Setup for Next.js with Expo for Web"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-react-native-app -t with-nextjs\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Switch to your project directory , that you created.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For ",Object(o.b)("strong",{parentName:"em"},"Installing NativeBase")," just copy this and paste in your terminal.")),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add native-base@next react-native-svg @expo/vector-icons styled-components styled-system\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i native-base@next react-native-svg @expo/vector-icons styled-components styled-system\n")))),Object(o.b)("h3",{id:"important"},"Important"),Object(o.b)("p",null,"By default Next.js doesn't support static assets like an Expo project. Because this is the intended functionality of Next.js,\xa0",Object(o.b)("inlineCode",{parentName:"p"},"@expo/next-adapter"),"\xa0doesn't add font support by default. If you want to use libraries like\xa0",Object(o.b)("inlineCode",{parentName:"p"},"expo-font"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"@expo/vector-icons"),",\xa0you'll need to change a few things."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install the plugin -\xa0",Object(o.b)("inlineCode",{parentName:"p"},"yarn add next-fonts")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rohanray/next-fonts"}),Object(o.b)("inlineCode",{parentName:"a"},"next-fonts")),"\xa0injects a Webpack loader to handle fonts."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Wrap the font method with the Expo method in your\xa0",Object(o.b)("inlineCode",{parentName:"p"},"next.config.js"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The order is important because Expo can mix in the location of vector icons to the existing font loader.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const { withExpo } = require('@expo/next-adapter');\nconst withFonts = require('next-fonts');\n\nmodule.exports = withExpo(\n  withFonts({\n    projectRoot: __dirname,\n  })\n);\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Now restart your project and you should be able to load fonts!"))))}u.isMDXComponent=!0},1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1715:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1716:function(e,t,a){"use strict";var n=a(0),r=a(1717);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1717:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},1718:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1716),i=a(1715),c=a(56),l=a.n(c);const s=37,p=39;t.a=function(e){const{lazy:t,block:a,defaultValue:c,values:b,groupId:u,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(o.a)(),[O,v]=Object(n.useState)(c),f=n.Children.toArray(e.children);if(null!=u){const e=m[u];null!=e&&e!==O&&b.some((t=>t.value===e))&&v(e)}const h=e=>{v(e),null!=u&&j(u,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>h(e),onClick:()=>{h(e)}},t)))),t?Object(n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},1719:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function({children:e,hidden:t,className:a}){return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}}}]);