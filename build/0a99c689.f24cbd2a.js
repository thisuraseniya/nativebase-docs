(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{153:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return d}));var r=o(3),n=o(7),a=(o(0),o(1714)),p={id:"popOver",title:"Popover"},i={unversionedId:"popOver",id:"version-3.0.0-next.38/popOver",isDocsHomePage:!1,title:"Popover",description:"Popover is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element.",source:"@site/versioned_docs/version-3.0.0-next.38/popOver.md",slug:"/popOver",permalink:"/popOver",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/popOver.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Modal",permalink:"/modal"},next:{title:"Tooltip",permalink:"/tooltip"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"initialFocusRef",id:"initialfocusref",children:[]},{value:"Positions",id:"positions",children:[]}]},{value:"Props",id:"props",children:[{value:"Popover.Arrow",id:"popoverarrow",children:[]},{value:"Popover.Content",id:"popovercontent",children:[]},{value:"Popover.Header",id:"popoverheader",children:[]},{value:"Popover.Footer",id:"popoverfooter",children:[]},{value:"Popover.Body",id:"popoverbody",children:[]},{value:"Popover.CloseButton\xa0",id:"popoverclosebutton",children:[]}]}],b={toc:c};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover")," is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover"),": The wrapper that provides props, state, and context to its children."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover.Arrow"),": The popover arrow."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover.Body"),": The body of the popover."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover.Content"),": The popover itself."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover.CloseButton"),": A button to close the popover."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover.Header"),": The header of the popover."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Popover.Trigger"),": Used to wrap the reference (or trigger) element.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Popover } from 'native-base';\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Popover%2C%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ETrigger%3C%2FButton%3E%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CPopover.Content%20accessibilityLabel%3D%22hello%20world%22%20borderRadius%3D%7B%22xl%22%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%3EConfirmation%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20Are%20you%20sure%20you%20want%20to%20continue%20with%20your%20action%3F%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Footer%20justifyContent%3D%22flex-end%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton.Group%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20size%3D%22sm%22%20variant%3D%22ghost%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Cancel%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20size%3D%22sm%22%3EApply%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton.Group%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Footer%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(a.b)("h3",{id:"initialfocusref"},"initialFocusRef"),Object(a.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Popover%2C%20Button%2C%20Input%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20initialFocusRef%20%3D%20React.useRef(null)%0A%20%20return%20(%0A%20%20%20%20%3CPopover%0A%20%20%20%20%20%20initialFocusRef%3D%7BinitialFocusRef%7D%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ETrigger%3C%2FButton%3E%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CPopover.Content%20width%3D%7B250%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%20fontSize%3D%7B20%7D%20fontWeight%3D%7B700%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Header%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%7BinitialFocusRef%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D%22I%20will%20get%20focused%20on%20Popover%20opening%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20This%20Popover%20won't%20close%20on%20clicking%20outside%20the%20popover%20area.%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Footer%3EThis%20is%20the%20footer%3C%2FPopover.Footer%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(a.b)("h3",{id:"positions"},"Positions"),Object(a.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20VStack%2C%0A%20%20HStack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3EAuto%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22top%20left%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ETop%20Left%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22top%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ETop%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22top%20right%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ETop%20right%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%20top%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ERight%20top%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ERight%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%20bottom%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ERight%20bottom%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22bottom%20left%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3EBottom%20left%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22bottom%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3EBottom%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22bottom%20right%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3EBottom%20right%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%20top%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ELeft%20top%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ELeft%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%0A%20%20%20%20%20%20%20%20%3CPopover%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%20bottom%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%3CButton%20%7B...triggerProps%7D%3ELeft%20bottom%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Arrow%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Header%3EData%20Saved%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPopover.Body%3EYour%20changes%20has%20been%20saved.%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FPopover%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You can pass custom backgroundColor using ",Object(a.b)("inlineCode",{parentName:"p"},"bg")," or ",Object(a.b)("inlineCode",{parentName:"p"},"backgroundColor"),", ",Object(a.b)("inlineCode",{parentName:"p"},"borderColor")," and ",Object(a.b)("inlineCode",{parentName:"p"},"borderWidth")," to Popover.Content."))),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("table",null,"\n  ",Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},"\n    ",Object(a.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(a.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(a.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(a.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        defaultIsOpen\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        If true, the popover will be opened by default\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        isOpen\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Whether the popover is opened. Useful for conrolling the open state\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        trapFocus\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Whether popover should trap focus.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        shouldFlip\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        initialFocusRef\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        The ref of element to receive focus when the popover opens.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        finalFocusRef\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        The ref of element to receive focus when the modal closes.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        trigger\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        (_props: any, state: { open: boolean; }) => Element\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Function that returns a React Element. This element will be used as a Trigger for the popover\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        crossOffset\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        The additional offset applied along the cross axis between the element and its trigger element.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        offset\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        The additional offset applied along the main axis between the element and its trigger element.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        shouldOverlapWithTrigger\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Determines whether menu content should overlap with the trigger\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        false\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        ReactNode\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Popover children\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        isKeyboardDismissable\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        If true, the modal will close when Escape key is pressed\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        placement\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},'\n        "top" | "bottom" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right" | "right top" | "right bottom" | "left top" | "left bottom"\n      '),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        Popover placement\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        bottom\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        onClose\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        () => void\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        This function will be invoked when popover is closed. It'll also be called when user attempts to close the popover via Escape key or backdrop press.\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(a.b)("tr",{parentName:"tbody"},"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        onOpen\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        () => void\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        This function will be invoked when popover is opened\n      "),"\n      ",Object(a.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(a.b)("h3",{id:"popoverarrow"},"Popover.Arrow"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover.Arrow")," composes the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/box"}),Object(a.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(a.b)("h3",{id:"popovercontent"},"Popover.Content"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover.Content")," composes the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/box"}),Object(a.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(a.b)("h3",{id:"popoverheader"},"Popover.Header"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover.Header")," composes the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/box"}),Object(a.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(a.b)("h3",{id:"popoverfooter"},"Popover.Footer"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover.Footer")," composes the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/box"}),Object(a.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(a.b)("h3",{id:"popoverbody"},"Popover.Body"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover.Body")," composes the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/box"}),Object(a.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(a.b)("h3",{id:"popoverclosebutton"},"Popover.CloseButton\xa0"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Popover.CloseButton")," composes the\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/button"}),Object(a.b)("inlineCode",{parentName:"a"},"Button")),"\xa0component."))}d.isMDXComponent=!0},1714:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return C}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=d(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},v=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(o),v=r,C=s["".concat(p,".").concat(v)]||s[v]||l[v]||a;return o?n.a.createElement(C,i(i({ref:t},b),{},{components:o})):n.a.createElement(C,i({ref:t},b))}));function C(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,p=new Array(a);p[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var b=2;b<a;b++)p[b]=o[b];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,o)}v.displayName="MDXCreateElement"}}]);