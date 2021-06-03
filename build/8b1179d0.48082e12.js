(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{1714:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},955:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(1714)),i={id:"breakpoint",title:"Breakpoints"},c={unversionedId:"breakpoint",id:"version-3.0.0-next.33/breakpoint",isDocsHomePage:!1,title:"Breakpoints",description:"Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.",source:"@site/versioned_docs/version-3.0.0-next.33/breakpoints.md",slug:"/breakpoint",permalink:"/3.0.0-next.33/breakpoint",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/breakpoints.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"Customising Components",permalink:"/3.0.0-next.33/customizingComponents"},next:{title:"Using Theme",permalink:"/3.0.0-next.33/theme"}},s=[],p={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size."),Object(a.b)("p",null,"NativeBase provides these default breakpoints and you can update with using extendTheme."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"breakpoints = {\n  base: 0,\n  sm: 480,\n  md: 768,\n  lg: 992,\n  xl: 1280,\n};\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useBreakpointValue"),"\xa0is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Box, useBreakpointValue } from 'native-base';\nexport default () => {\n  const color = useBreakpointValue({\n    base: 'red.200',\n    sm: 'blue.200',\n    md: 'blue.200',\n  });\n  return (\n    <Box bg={color} w={'100px'}>\n      This is a box\n    </Box>\n  );\n};\n")))}u.isMDXComponent=!0}}]);