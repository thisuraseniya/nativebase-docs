(window.webpackJsonp=window.webpackJsonp||[]).push([[1260],{1332:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return d})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return b}));var t=a(3),f=a(7),o=(a(0),a(1714)),r={id:"default-theme",title:"Default Theme"},d={unversionedId:"default-theme",id:"version-3.0.0-next.25/default-theme",isDocsHomePage:!1,title:"Default Theme",description:"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more.",source:"@site/versioned_docs/version-3.0.0-next.25/default-theme.md",slug:"/default-theme",permalink:"/3.0.0-next.25/default-theme",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.25/default-theme.md",version:"3.0.0-next.25",sidebar:"version-3.0.0-next.25/componentsSidebar",previous:{title:"useColorModeValue",permalink:"/3.0.0-next.25/use-color-mode-value"},next:{title:"Todo-List",permalink:"/3.0.0-next.25/todo-example"}},c=[{value:"Colors",id:"colors",children:[]},{value:"<strong>Typography</strong>",id:"typography",children:[]},{value:"<strong>Size</strong>",id:"size",children:[]},{value:"Shadows",id:"shadows",children:[]}],i={toc:c};function b(n){var e=n.components,a=Object(f.a)(n,["components"]);return Object(o.b)("wrapper",Object(t.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more."),Object(o.b)("p",null,"Theming in NativeBase is based on the\xa0",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(t.a)({parentName:"strong"},{href:"https://system-ui.com/theme/"}),"Styled System Theme Specification"))),Object(o.b)("h2",{id:"colors"},"Colors"),Object(o.b)("p",null,"Add a\xa0",Object(o.b)("inlineCode",{parentName:"p"},"theme.colors"),"\xa0object to provide colors for your project. By default these colors can be referenced by the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"color"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"borderColor"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor"),", etc.. props."),Object(o.b)("p",null,"We recommend adding a palette that ranges from\xa0",Object(o.b)("inlineCode",{parentName:"p"},"0"),"\xa0to\xa0",Object(o.b)("inlineCode",{parentName:"p"},"9"),". Tools like\xa0",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(t.a)({parentName:"strong"},{href:"https://palx.jxnblk.com/"}),"Palx")),"\xa0are available to generate these palettes."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'// This is colors object from nativebase default theme\n\nexport default {\n  whiteAlpha: {\n    50: "rgba(255, 255, 255, 0.04)",\n    100: "rgba(255, 255, 255, 0.06)",\n    200: "rgba(255, 255, 255, 0.08)",\n    300: "rgba(255, 255, 255, 0.16)",\n    400: "rgba(255, 255, 255, 0.24)",\n    500: "rgba(255, 255, 255, 0.36)",\n    600: "rgba(255, 255, 255, 0.48)",\n    700: "rgba(255, 255, 255, 0.64)",\n    800: "rgba(255, 255, 255, 0.80)",\n    900: "rgba(255, 255, 255, 0.92)",\n  },\n\n  blackAlpha: {\n    50: "rgba(0, 0, 0, 0.04)",\n    100: "rgba(0, 0, 0, 0.06)",\n    200: "rgba(0, 0, 0, 0.08)",\n    300: "rgba(0, 0, 0, 0.16)",\n    400: "rgba(0, 0, 0, 0.24)",\n    500: "rgba(0, 0, 0, 0.36)",\n    600: "rgba(0, 0, 0, 0.48)",\n    700: "rgba(0, 0, 0, 0.64)",\n    800: "rgba(0, 0, 0, 0.80)",\n    900: "rgba(0, 0, 0, 0.92)",\n  },\n  rose: {\n    50: "#fff1f2",\n    100: "#ffe4e6",\n    200: "#fecdd3",\n    300: "#fda4af",\n    400: "#fb7185",\n    500: "#f43f5e",\n    600: "#e11d48",\n    700: "#be123c",\n    800: "#9f1239",\n    900: "#881337",\n  },\n  pink: {\n    50: "#fdf2f8",\n    100: "#fce7f3",\n    200: "#fbcfe8",\n    300: "#f9a8d4",\n    400: "#f472b6",\n    500: "#ec4899",\n    600: "#db2777",\n    700: "#be185d",\n    800: "#9d174d",\n    900: "#831843",\n  },\n  fuchsia: {\n    50: "#fdf4ff",\n    100: "#fae8ff",\n    200: "#f5d0fe",\n    300: "#f0abfc",\n    400: "#e879f9",\n    500: "#d946ef",\n    600: "#c026d3",\n    700: "#a21caf",\n    800: "#86198f",\n    900: "#701a75",\n  },\n  purple: {\n    50: "#faf5ff",\n    100: "#f3e8ff",\n    200: "#e9d5ff",\n    300: "#d8b4fe",\n    400: "#c084fc",\n    500: "#a855f7",\n    600: "#9333ea",\n    700: "#7e22ce",\n    800: "#6b21a8",\n    900: "#581c87",\n  },\n  violet: {\n    50: "#f5f3ff",\n    100: "#ede9fe",\n    200: "#ddd6fe",\n    300: "#c4b5fd",\n    400: "#a78bfa",\n    500: "#8b5cf6",\n    600: "#7c3aed",\n    700: "#6d28d9",\n    800: "#5b21b6",\n    900: "#4c1d95",\n  },\n  indigo: {\n    50: "#eef2ff",\n    100: "#e0e7ff",\n    200: "#c7d2fe",\n    300: "#a5b4fc",\n    400: "#818cf8",\n    500: "#6366f1",\n    600: "#4f46e5",\n    700: "#4338ca",\n    800: "#3730a3",\n    900: "#312e81",\n  },\n  blue: {\n    50: "#eff6ff",\n    100: "#dbeafe",\n    200: "#bfdbfe",\n    300: "#93c5fd",\n    400: "#60a5fa",\n    500: "#3b82f6",\n    600: "#2563eb",\n    700: "#1d4ed8",\n    800: "#1e40af",\n    900: "#1e3a8a",\n  },\n  lightBlue: {\n    50: "#f0f9ff",\n    100: "#e0f2fe",\n    200: "#bae6fd",\n    300: "#7dd3fc",\n    400: "#38bdf8",\n    500: "#0ea5e9",\n    600: "#0284c7",\n    700: "#0369a1",\n    800: "#075985",\n    900: "#0c4a6e",\n  },\n  cyan: {\n    50: "#ecfeff",\n    100: "#cffafe",\n    200: "#a5f3fc",\n    300: "#67e8f9",\n    400: "#22d3ee",\n    500: "#06b6d4",\n    600: "#0891b2",\n    700: "#0e7490",\n    800: "#155e75",\n    900: "#164e63",\n  },\n  teal: {\n    50: "#f0fdfa",\n    100: "#ccfbf1",\n    200: "#99f6e4",\n    300: "#5eead4",\n    400: "#2dd4bf",\n    500: "#14b8a6",\n    600: "#0d9488",\n    700: "#0f766e",\n    800: "#115e59",\n    900: "#134e4a",\n  },\n  emerald: {\n    50: "#ecfdf5",\n    100: "#d1fae5",\n    200: "#a7f3d0",\n    300: "#6ee7b7",\n    400: "#34d399",\n    500: "#10b981",\n    600: "#059669",\n    700: "#047857",\n    800: "#065f46",\n    900: "#064e3b",\n  },\n  green: {\n    50: "#f0fdf4",\n    100: "#dcfce7",\n    200: "#bbf7d0",\n    300: "#86efac",\n    400: "#4ade80",\n    500: "#22c55e",\n    600: "#16a34a",\n    700: "#15803d",\n    800: "#166534",\n    900: "#14532d",\n  },\n  lime: {\n    50: "#f7fee7",\n    100: "#ecfccb",\n    200: "#d9f99d",\n    300: "#bef264",\n    400: "#a3e635",\n    500: "#84cc16",\n    600: "#65a30d",\n    700: "#4d7c0f",\n    800: "#3f6212",\n    900: "#365314",\n  },\n  yellow: {\n    50: "#fefce8",\n    100: "#fef9c3",\n    200: "#fef08a",\n    300: "#fde047",\n    400: "#facc15",\n    500: "#eab308",\n    600: "#ca8a04",\n    700: "#a16207",\n    800: "#854d0e",\n    900: "#713f12",\n  },\n  amber: {\n    50: "#fffbeb",\n    100: "#fef3c7",\n    200: "#fde68a",\n    300: "#fcd34d",\n    400: "#fbbf24",\n    500: "#f59e0b",\n    600: "#d97706",\n    700: "#b45309",\n    800: "#92400e",\n    900: "#78350f",\n  },\n  orange: {\n    50: "#fff7ed",\n    100: "#ffedd5",\n    200: "#fed7aa",\n    300: "#fdba74",\n    400: "#fb923c",\n    500: "#f97316",\n    600: "#ea580c",\n    700: "#c2410c",\n    800: "#9a3412",\n    900: "#7c2d12",\n  },\n  red: {\n    50: "#fef2f2",\n    100: "#fee2e2",\n    200: "#fecaca",\n    300: "#fca5a5",\n    400: "#f87171",\n    500: "#ef4444",\n    600: "#dc2626",\n    700: "#b91c1c",\n    800: "#991b1b",\n    900: "#7f1d1d",\n  },\n  warmGray: {\n    50: "#fafaf9",\n    100: "#f5f5f4",\n    200: "#e7e5e4",\n    300: "#d6d3d1",\n    400: "#a8a29e",\n    500: "#78716c",\n    600: "#57534e",\n    700: "#44403c",\n    800: "#292524",\n    900: "#1c1917",\n  },\n  trueGray: {\n    50: "#fafafa",\n    100: "#f5f5f5",\n    200: "#e5e5e5",\n    300: "#d4d4d4",\n    400: "#a3a3a3",\n    500: "#737373",\n    600: "#525252",\n    700: "#404040",\n    800: "#262626",\n    900: "#171717",\n  },\n  gray: {\n    50: "#fafafa",\n    100: "#f4f4f5",\n    200: "#e4e4e7",\n    300: "#d4d4d8",\n    400: "#a1a1aa",\n    500: "#71717a",\n    600: "#52525b",\n    700: "#3f3f46",\n    800: "#27272a",\n    900: "#18181b",\n  },\n  dark: {\n    50: "#18181b",\n    100: "#27272a",\n    200: "#3f3f46",\n    300: "#52525b",\n    400: "#71717a",\n    500: "#a1a1aa",\n    600: "#d4d4d8",\n    700: "#e4e4e7",\n    800: "#f4f4f5",\n    900: "#fafafa",\n  },\n  coolGray: {\n    50: "#f9fafb",\n    100: "#f3f4f6",\n    200: "#e5e7eb",\n    300: "#d1d5db",\n    400: "#9ca3af",\n    500: "#6b7280",\n    600: "#4b5563",\n    700: "#374151",\n    800: "#1f2937",\n    900: "#111827",\n  },\n  blueGray: {\n    50: "#f8fafc",\n    100: "#f1f5f9",\n    200: "#e2e8f0",\n    300: "#cbd5e1",\n    400: "#94a3b8",\n    500: "#64748b",\n    600: "#475569",\n    700: "#334155",\n    800: "#1e293b",\n    900: "#0f172a",\n  },\n  danger: {\n    50: \'#fff1f2\',\n    100: \'#ffe4e6\',\n    200: \'#fecdd3\',\n    300: \'#fda4af\',\n    400: \'#fb7185\',\n    500: \'#f43f5e\',\n    600: \'#e11d48\',\n    700: \'#be123c\',\n    800: \'#9f1239\',\n    900: \'#881337\',\n  },,\n  error: {\n    50: \'#fef2f2\',\n    100: \'#fee2e2\',\n    200: \'#fecaca\',\n    300: \'#fca5a5\',\n    400: \'#f87171\',\n    500: \'#ef4444\',\n    600: \'#dc2626\',\n    700: \'#b91c1c\',\n    800: \'#991b1b\',\n    900: \'#7f1d1d\',\n  },\n  success: {\n    50: \'#f0fdf4\',\n    100: \'#dcfce7\',\n    200: \'#bbf7d0\',\n    300: \'#86efac\',\n    400: \'#4ade80\',\n    500: \'#22c55e\',\n    600: \'#16a34a\',\n    700: \'#15803d\',\n    800: \'#166534\',\n    900: \'#14532d\',\n  },\n  warning: {\n    50: "#fff7ed",\n    100: "#ffedd5",\n    200: "#fed7aa",\n    300: "#fdba74",\n    400: "#fb923c",\n    500: "#f97316",\n    600: "#ea580c",\n    700: "#c2410c",\n    800: "#9a3412",\n    900: "#7c2d12",\n  },\n  muted: {\n    50: \'#fafafa\',\n    100: \'#f5f5f5\',\n    200: \'#e5e5e5\',\n    300: \'#d4d4d4\',\n    400: \'#a3a3a3\',\n    500: \'#737373\',\n    600: \'#525252\',\n    700: \'#404040\',\n    800: \'#262626\',\n    900: \'#171717\',\n  },\n  default: {\n    50: \'#eff6ff\',\n    100: \'#dbeafe\',\n    200: \'#bfdbfe\',\n    300: \'#93c5fd\',\n    400: \'#60a5fa\',\n    500: \'#3b82f6\',\n    600: \'#2563eb\',\n    700: \'#1d4ed8\',\n    800: \'#1e40af\',\n    900: \'#1e3a8a\',\n  },\n  info: {\n    50: \'#f0f9ff\',\n    100: \'#e0f2fe\',\n    200: \'#bae6fd\',\n    300: \'#7dd3fc\',\n    400: \'#38bdf8\',\n    500: \'#0ea5e9\',\n    600: \'#0284c7\',\n    700: \'#0369a1\',\n    800: \'#075985\',\n    900: \'#0c4a6e\',\n  },\n  secondary: {\n    50: \'#f9fafb\',\n    100: \'#f3f4f6\',\n    200: \'#e5e7eb\',\n    300: \'#d1d5db\',\n    400: \'#9ca3af\',\n    500: \'#6b7280\',\n    600: \'#4b5563\',\n    700: \'#374151\',\n    800: \'#1f2937\',\n    900: \'#111827\',\n  },\n  light: {\n    50: \'#fafaf9\',\n    100: \'#f5f5f4\',\n    200: \'#e7e5e4\',\n    300: \'#d6d3d1\',\n    400: \'#a8a29e\',\n    500: \'#78716c\',\n    600: \'#57534e\',\n    700: \'#44403c\',\n    800: \'#292524\',\n    900: \'#1c1917\',\n  },\n};\n\n')),Object(o.b)("h2",{id:"typography"},Object(o.b)("strong",{parentName:"h2"},"Typography")),Object(o.b)("p",null,"To manage Typography options, the theme object supports the following keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fonts"),"\xa0(font families)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fontSizes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fontWeights")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lineHeights")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"letterSpacings"))),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  letterSpacings: {\n    tighter: '-0.08px',\n    tight: '-0.4px',\n    normal: '0',\n    wide: '0.4px',\n    wider: '0.8px',\n    widest: '1.6px',\n  },\n  lineHeights: {\n    none: 1,\n    shorter: 1.25,\n    short: 1.375,\n    base: 1.5,\n    tall: 1.625,\n    taller: '2',\n    3: '12px',\n    4: '16px',\n    5: '20px',\n    6: '24px',\n    7: '28px',\n    8: '32px',\n    9: '36px',\n    10: '40px',\n  },\n  fontWeights: {\n    hairline: 100,\n    thin: 200,\n    light: 300,\n    normal: 400,\n    medium: 500,\n    semibold: 600,\n    bold: 700,\n    extrabold: 800,\n    black: 900,\n  },\n  fonts: {\n    heading: `Courier`,\n    body: `Courier`,\n    mono: `monospace`,\n  },\n  fontSizes: {\n    xs: 12,\n    sm: 14,\n    md: 16,\n    lg: 18,\n    xl: 20,\n    '2xl': 24,\n    '3xl': 30,\n    '4xl': 36,\n    '5xl': 48,\n    '6xl': 64,\n  },\n};\n\nexport default typography;\n")),Object(o.b)("h2",{id:"size"},Object(o.b)("strong",{parentName:"h2"},"Size")),Object(o.b)("p",null,"The\xa0",Object(o.b)("inlineCode",{parentName:"p"},"size"),"\xa0key allows you to customize the global spacing and sizing scale for your project. By default these spacing value can be referenced by the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"padding"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"margin"),", and\xa0",Object(o.b)("inlineCode",{parentName:"p"},"top"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"left"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"right"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),"\xa0props."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  0: '0',\n  1: '4px',\n  2: '8px',\n  3: '12px',\n  4: '16px',\n  5: '20px',\n  6: '24px',\n  7: '28px',\n  8: '32px',\n  9: '36px',\n  10: '40px',\n  12: '48px',\n  16: '64px',\n  20: '80px',\n  24: '96px',\n  32: '128px',\n  40: '160px',\n  48: '192px',\n  56: '224px',\n  64: '256px',\n  72: '288px',\n  80: '320px',\n  96: '384px',\n};\n")),Object(o.b)("h2",{id:"shadows"},"Shadows"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"shadow")," key allows you to customize the global box shadow for your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  0: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.18,\n    shadowRadius: 1.0,\n    elevation: 1,\n  },\n  1: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.2,\n    shadowRadius: 1.41,\n    elevation: 2,\n  },\n  2: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.22,\n    shadowRadius: 2.22,\n    elevation: 3,\n  },\n  3: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.23,\n    shadowRadius: 2.62,\n    elevation: 4,\n  },\n  4: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.25,\n    shadowRadius: 3.84,\n    elevation: 5,\n  },\n  5: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 3,\n    },\n    shadowOpacity: 0.27,\n    shadowRadius: 4.65,\n    elevation: 6,\n  },\n  6: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 3,\n    },\n    shadowOpacity: 0.29,\n    shadowRadius: 4.65,\n    elevation: 7,\n  },\n  7: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 4,\n    },\n    shadowOpacity: 0.3,\n    shadowRadius: 4.65,\n    elevation: 8,\n  },\n  8: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 4,\n    },\n    shadowOpacity: 0.32,\n    shadowRadius: 5.46,\n    elevation: 9,\n  },\n  9: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 5,\n    },\n    shadowOpacity: 0.34,\n    shadowRadius: 6.27,\n    elevation: 10,\n  },\n};\n")),Object(o.b)("p",null,"Still confused? You can always explore ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/GeekyAnts/nativebase-v3/tree/development/src/theme/base"}),"here"),"."))}b.isMDXComponent=!0},1714:function(n,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return h}));var t=a(0),f=a.n(t);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function d(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function c(n,e){if(null==n)return{};var a,t,f=function(n,e){if(null==n)return{};var a,t,f={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(f[a]=n[a]);return f}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(f[a]=n[a])}return f}var i=f.a.createContext({}),b=function(n){var e=f.a.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):d(d({},e),n)),a},l=function(n){var e=b(n.components);return f.a.createElement(i.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return f.a.createElement(f.a.Fragment,{},e)}},p=f.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,o=n.originalType,r=n.parentName,i=c(n,["components","mdxType","originalType","parentName"]),l=b(a),p=t,h=l["".concat(r,".").concat(p)]||l[p]||s[p]||o;return a?f.a.createElement(h,d(d({ref:e},i),{},{components:a})):f.a.createElement(h,d({ref:e},i))}));function h(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var o=a.length,r=new Array(o);r[0]=p;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=n,d.mdxType="string"==typeof n?n:t,r[1]=d;for(var i=2;i<o;i++)r[i]=a[i];return f.a.createElement.apply(null,r)}return f.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);