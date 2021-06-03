(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(1714)),c={id:"select",title:"Select"},b={unversionedId:"select",id:"version-3.0.0-next.27/select",isDocsHomePage:!1,title:"Select",description:"Creates a dropdown list of items with the selected item in closed view.",source:"@site/versioned_docs/version-3.0.0-next.27/select.md",slug:"/select",permalink:"/3.0.0-next.27/select",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/select.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Radio",permalink:"/3.0.0-next.27/radio"},next:{title:"Slider",permalink:"/3.0.0-next.27/slider"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"Select",id:"select",children:[]},{value:"Select Item",id:"select-item",children:[]}]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Creates a dropdown list of items with the selected item in closed view."),Object(l.b)("h2",{id:"implements"},"Implements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Button")," from native-base.")),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Select } from 'native-base';\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Select Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent%20()%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('')%3B%0A%20%20return%20(%0A%20%20%20%20%3CSelect%0A%20%20%20%20%20%20placeholder%3D%22Pick%20language%22%0A%20%20%20%20%20%20_placeholder%3D%7B%7B%20color%3A%20'teal.500'%20%7D%7D%0A%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20width%3D%7B150%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%20%20selectedItemBg%3D%7B'blue.500'%7D%0A%20%20%20%20%20%20_selectedItem%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20dropdownOpenIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-up%22%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20dropdownCloseIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-down%22%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20_item%3D%7B%7B%20color%3A%20'red.500'%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%3C%2FSelect%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"select"},"Select"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The placeholder attribute specifies a short hint that describes the expected value of an select field"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text props to be applied to placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default value which is selected"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onValueChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback for on change on input value."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"itemStyle"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stylesheet"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedItemBg"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background color for selected item"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blue.500")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","selectedItem"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text props to be applied to the selected item"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"white")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the button will be disabled."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownIcon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownOpenIcon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon, when opened."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownCloseIcon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon, when closed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"select-item"},"Select Item"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The label which will be displayed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to be used for the item. This is the value that will be returned on form submission."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the item will be disabled."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps to be applied to label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||O[m]||l;return a?r.a.createElement(u,b(b({ref:t},o),{},{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);