(window.webpackJsonp=window.webpackJsonp||[]).push([[997],{1070:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(1714)),c={id:"theme",title:"How to use NativeBase theme"},s={unversionedId:"theme",id:"version-3.0.0-next.27/theme",isDocsHomePage:!1,title:"How to use NativeBase theme",description:"There will be time when you want to access the theme object itself. Well np worries NativeBase provides with the useTheme hook to solve that problem.",source:"@site/versioned_docs/version-3.0.0-next.27/theme.md",slug:"/theme",permalink:"/3.0.0-next.27/theme",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/theme.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Breakpoints",permalink:"/3.0.0-next.27/breakpoint"},next:{title:"Accordion",permalink:"/3.0.0-next.27/migration/Accordion"}},i=[],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There will be time when you want to access the theme object itself. Well np worries NativeBase provides with the ",Object(a.b)("inlineCode",{parentName:"p"},"useTheme")," hook to solve that problem."),Object(a.b)("p",null,"But why we need the theme object? Maybe show of the your color pallets \ud83d\ude01"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03b86b10-10f8-4b5e-9ef6-251977282274/Screenshot_2021-01-19_at_5.24.12_PM.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03b86b10-10f8-4b5e-9ef6-251977282274/Screenshot_2021-01-19_at_5.24.12_PM.png"}))),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b9efc1b-4234-4305-b5cb-9c38f7a23023/Screenshot_2021-01-19_at_5.24.18_PM.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b9efc1b-4234-4305-b5cb-9c38f7a23023/Screenshot_2021-01-19_at_5.24.18_PM.png"}))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { useColorModeValue, Button, useTheme, SimpleGrid } from 'native-base';\n\nexport default function () {\n  const { colors } = useTheme();\n  const template = () => {\n    let temp = [];\n    for (const colorKey in colors) {\n      // skipping singleton colors\n      if (colorKey === 'black' || colorKey === 'white') {\n      } else\n        temp.push(\n          <Button\n            size='lg'\n            colorScheme={colorKey}\n            variant={useColorModeValue('solid', 'outline')}\n          >\n            {colorKey[0]}\n          </Button>\n        );\n    }\n    return temp.reverse();\n  };\n\n  return (\n    <SimpleGrid columns={5} spacing={4}>\n      {template()}\n    </SimpleGrid>\n  );\n}\n")),Object(a.b)("p",null,"Don't want the entire object, instead something vary specific. Don't we got you covered with our ",Object(a.b)("inlineCode",{parentName:"p"},"useToken")," hook. Let\u2019s see an example."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { useToken, Box, SimpleGrid } from 'native-base';\n\nexport default function () {\n  const colors = useToken('colors', 'amber');\n  const template = () => {\n    let temp = [];\n    for (const colorKey in colors) {\n      temp.push(<Box p={5} bg={`amber.${colorKey}`} />);\n    }\n    return temp;\n  };\n\n  return <SimpleGrid columns={10}>{template()}</SimpleGrid>;\n}\n")),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b3f5de8-30a8-43ca-986d-c72e811298e6/Screenshot_2021-01-19_at_6.11.52_PM.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b3f5de8-30a8-43ca-986d-c72e811298e6/Screenshot_2021-01-19_at_6.11.52_PM.png"}))))}p.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);