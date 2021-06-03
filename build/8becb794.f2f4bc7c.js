(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,u=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(u,o(o({ref:t},s),{},{components:a})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},965:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(1714)),l={id:"transition",title:"Transition"},o={unversionedId:"transition",id:"version-3.0.0-next.33/transition",isDocsHomePage:!1,title:"Transition",description:"NativeBase exports four components: Fade, ScaleFade, Slide, and SlideFade to provide simple transitions.",source:"@site/versioned_docs/version-3.0.0-next.33/transition.md",slug:"/transition",permalink:"/3.0.0-next.33/transition",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/transition.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"FAB",permalink:"/3.0.0-next.33/FAB"},next:{title:"useDisclosure",permalink:"/3.0.0-next.33/use-disclosure"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Fade",id:"fade",children:[]},{value:"ScaleFade",id:"scalefade",children:[]},{value:"Slide",id:"slide",children:[]},{value:"Slide wrapped inside parent",id:"slide-wrapped-inside-parent",children:[]},{value:"Slide Composition",id:"slide-composition",children:[]},{value:"SlideFade",id:"slidefade",children:[]}]},{value:"Props",id:"props",children:[{value:"Fade",id:"fade-1",children:[]},{value:"Scale Fade",id:"scale-fade",children:[]},{value:"Slide",id:"slide-1",children:[]},{value:"SlideFade",id:"slidefade-1",children:[]}]}],s={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NativeBase exports four components: ",Object(i.b)("inlineCode",{parentName:"p"},"Fade"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ScaleFade"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Slide"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"SlideFade")," to provide simple transitions."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 4 modal-related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Fade"),": The wrapper that provides context and functionality for all children."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ScaleFade"),": The empty part of the slider that shows the track."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Slide"),": The filled part of the slider."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SlideFade"),": The handle that's used to change the slider value.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import {\n  Fade,\n  ScaleFade\n  Slide,\n  SlideFade\n  SliderTrack,\n  SliderFilledTrack,\nSliderThumb,\n} from "native-base";\n')),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"fade"},"Fade"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Transition Fade","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Fade%2C%20Button%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20FadeExample%20()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20'hide'%20%3A%20'show'%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CFade%20in%3D%7BisOpen%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20color%3D%22white%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20Fade%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FFade%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFadeExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"scalefade"},"ScaleFade"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Transition ScaleFade","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScaleFade%2C%20Button%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20ScaleFadeExample%20()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20'hide'%20%3A%20'show'%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CScaleFade%20in%3D%7BisOpen%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20color%3D%22white%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20ScaleFade%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FScaleFade%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CScaleFadeExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"slide"},"Slide"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Transition Slide","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Slide%2C%20Button%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20SlideExample%20()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20'hide'%20%3A%20'show'%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CSlide%20in%3D%7BisOpen%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20color%3D%22white%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20Slide%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FSlide%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlideExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"slide-wrapped-inside-parent"},"Slide wrapped inside parent"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Transition Slide With Parent","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Slide%2C%20Button%2C%20Box%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20SlideExample%20()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%2290%25%22%20height%3D%2250%25%22%20alignItems%3D%22center%22%20justifyContent%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%22xs%22%3E%0A%20%20%20%20%20%20%20%20This%20is%20an%20example%20to%20show%20how%20slider%20can%20be%20used.%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CButton%20my%3D%7B2%7D%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20'hide'%20%3A%20'show'%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20The%20Force%20is%20strong%20with%20this%20one.%20I%20have%20you%20now.%20Look%2C%20I%20ain't%20in%20this%0A%20%20%20%20%20%20%20%20for%20your%20revolution%2C%20and%20I'm%20not%20in%20it%20for%20you%2C%20Princess.%20I%20expect%20to%20be%0A%20%20%20%20%20%20%20%20well%20paid.%20I'm%20in%20it%20for%20the%20money.%20What!%3F%20Hey%2C%20Luke!%20May%20the%20Force%20be%0A%20%20%20%20%20%20%20%20with%20you.%20Remember%2C%20a%20Jedi%20can%20feel%20the%20Force%20flowing%20through%20him.%20All%0A%20%20%20%20%20%20%20%20right.%20Well%2C%20take%20care%20of%20yourself%2C%20Han.%20I%20guess%20that's%20what%20you're%20best%0A%20%20%20%20%20%20%20%20at%2C%20ain't%20it%3F%20In%20my%20experience%2C%20there%20is%20no%20such%20thing%20as%20luck.%20Kid%2C%0A%20%20%20%20%20%20%20%20I've%20flown%20from%20one%20side%20of%20this%20galaxy%20to%20the%20other.%20I've%20seen%20a%20lot%20of%0A%20%20%20%20%20%20%20%20strange%20stuff%2C%20but%20I've%20never%20seen%20anything%20to%20make%20me%20believe%20there's%0A%20%20%20%20%20%20%20%20one%20all-powerful%20Force%20controlling%20everything.%20There's%20no%20mystical%0A%20%20%20%20%20%20%20%20energy%20field%20that%20controls%20my%20destiny.%20It's%20all%20a%20lot%20of%20simple%20tricks%0A%20%20%20%20%20%20%20%20and%20nonsense.%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CSlide%20in%3D%7BisOpen%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20color%3D%22white%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20Slide%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FSlide%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlideExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"slide-composition"},"Slide Composition"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Transition Slide Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Slide%2C%20Button%2C%20Box%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20SlideExample%20()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CBox%20width%3D%2290%25%22%20height%3D%2250%25%22%20alignItems%3D%22center%22%20justifyContent%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%3CHeading%20fontSize%3D%22xs%22%3E%0A%20%20%20%20%20%20%20%20%20%20This%20is%20an%20example%20to%20show%20how%20slider%20can%20be%20used.%0A%20%20%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%20%20%3CButton%20my%3D%7B2%7D%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20'hide'%20%3A%20'show'%7D%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%20%20The%20Force%20is%20strong%20with%20this%20one.%20I%20have%20you%20now.%20Look%2C%20I%20ain't%20in%0A%20%20%20%20%20%20%20%20%20%20this%20for%20your%20revolution%2C%20and%20I'm%20not%20in%20it%20for%20you%2C%20Princess.%20I%0A%20%20%20%20%20%20%20%20%20%20expect%20to%20be%20well%20paid.%20I'm%20in%20it%20for%20the%20money.%20What!%3F%20Hey%2C%20Luke!%20May%0A%20%20%20%20%20%20%20%20%20%20the%20Force%20be%20with%20you.%20Remember%2C%20a%20Jedi%20can%20feel%20the%20Force%20flowing%0A%20%20%20%20%20%20%20%20%20%20through%20him.%20All%20right.%20Well%2C%20take%20care%20of%20yourself%2C%20Han.%20I%20guess%0A%20%20%20%20%20%20%20%20%20%20that's%20what%20you're%20best%20at%2C%20ain't%20it%3F%20In%20my%20experience%2C%20there%20is%20no%0A%20%20%20%20%20%20%20%20%20%20such%20thing%20as%20luck.%20Kid%2C%20I've%20flown%20from%20one%20side%20of%20this%20galaxy%20to%0A%20%20%20%20%20%20%20%20%20%20the%20other.%20I've%20seen%20a%20lot%20of%20strange%20stuff%2C%20but%20I've%20never%20seen%0A%20%20%20%20%20%20%20%20%20%20anything%20to%20make%20me%20believe%20there's%20one%20all-powerful%20Force%20controlling%0A%20%20%20%20%20%20%20%20%20%20everything.%20There's%20no%20mystical%20energy%20field%20that%20controls%20my%20destiny.%0A%20%20%20%20%20%20%20%20%20%20It's%20all%20a%20lot%20of%20simple%20tricks%20and%20nonsense.%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3CSlide%20in%3D%7BisOpen%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20color%3D%22white%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20Slide%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FSlide%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlideExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"slidefade"},"SlideFade"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Transition SlideFade","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SlideFade%2C%20Button%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20SlideFadeExample%20()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20'hide'%20%3A%20'show'%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CSlideFade%20in%3D%7BisOpen%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20color%3D%22white%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20SlideFade%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FSlideFade%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlideFadeExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"fade-1"},"Fade"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the component; triggers the enter or exit states."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Duration of animation in mili second."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"500")))),Object(i.b)("h3",{id:"scale-fade"},"Scale Fade"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the component; triggers the enter or exit states."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Duration of animation in mili second."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"500")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialScale"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial scale to animate from."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.9")))),Object(i.b)("h3",{id:"slide-1"},"Slide"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the component; triggers the enter or exit states."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Duration of animation in mili second."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"500")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placement"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"top")," ,",Object(i.b)("inlineCode",{parentName:"td"},"bottom")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction to slide drawer from."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"bottom"))))),Object(i.b)("h3",{id:"slidefade-1"},"SlideFade"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the component; triggers the enter or exit states."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Duration of animation in mili second."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"500")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offsetX"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial offset to slide from."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offsetY"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial offset to slide from."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")))))}d.isMDXComponent=!0}}]);