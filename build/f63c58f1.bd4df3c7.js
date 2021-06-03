(window.webpackJsonp=window.webpackJsonp||[]).push([[1580],{1651:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var r=t(3),n=t(7),i=(t(0),t(1714)),o={id:"avatar",title:"Avatar"},s={unversionedId:"avatar",id:"version-3.0.0-next.21/avatar",isDocsHomePage:!1,title:"Avatar",description:"The Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon.",source:"@site/versioned_docs/version-3.0.0-next.21/avatar.md",slug:"/avatar",permalink:"/3.0.0-next.21/avatar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/avatar.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"Tabs",permalink:"/3.0.0-next.21/tabs"},next:{title:"Icon",permalink:"/3.0.0-next.21/icon"}},c=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Example (Sizes)",id:"example-sizes",children:[]},{value:"Example (Fallbacks)",id:"example-fallbacks",children:[]},{value:"Example (Avatar Badge)",id:"example-avatar-badge",children:[]},{value:"Example (Avatar Group)",id:"example-avatar-group",children:[]},{value:"Props",id:"props",children:[{value:"Avatar",id:"avatar",children:[]}]}],A={toc:c};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},A,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 3 avatar-related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Avatar"),": An image that represents the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AvatarBadge"),": A wrapper that displays its content on the bottom right corner of the avatar."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AvatarGroup"),": A wrapper to stack multiple avatars together.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Avatar, AvatarBadge } from 'native-base';\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Sanket%20Sahu%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Gaurav%20Guha%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Rohit%20Singh%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1260766060401188864%2FySJfMIbZ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Ankur%20Kedia%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Suraj%20Ahmed%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F983582580372004864%2Fh9ccP0Ea_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Rehman%20Baig%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-sizes"},"Example (Sizes)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22xs%22%0A%20%20%20%20%20%20%20%20name%3D%22Sanket%20Sahu%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22sm%22%0A%20%20%20%20%20%20%20%20name%3D%22Himanshu%20Satija%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F929409889788510208%2FgRr2f7rZ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20name%3D%22Rohit%20Singh%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1260766060401188864%2FySJfMIbZ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20name%3D%22Ankur%20Kedia%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22xl%22%0A%20%20%20%20%20%20%20%20name%3D%22Gaurav%20Guha%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%222xl%22%0A%20%20%20%20%20%20%20%20name%3D%22Rehman%20Baig%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-fallbacks"},"Example (Fallbacks)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Example(Fallbacks)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20mr%3D%7B1%7D%0A%20%20%20%20%20%20%20%20name%3D%22Rohit%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20%22https%3A%2F%2Fbit.ly%2Fbroken-link%22%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%20name%3D%22Rehman%22%20source%3D%7B%7B%20uri%3A%20%22https%3A%2F%2Fbit.ly%2Fbroken-link%22%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%20uri%3A%20%22https%3A%2F%2Fbit.ly%2Fbroken-link%22%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-avatar-badge"},"Example (Avatar Badge)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Example(Avatar Badge)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20AvatarBadge%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20%22https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png%22%20%7D%7D%0A%20%20%20%20%20%20%20%20name%3D%7B%22Native%20Base%22%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatarBadge%20bg%3D%7B%22red.200%22%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20%22https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png%22%20%7D%7D%0A%20%20%20%20%20%20%20%20name%3D%7B%22Native%20Base%22%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatarBadge%20borderColor%3D%22papayawhip%22%20bg%3D%22tomato%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-avatar-group"},"Example (Avatar Group)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Example(Avatar Group)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20AvatarGroup%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CAvatarGroup%20size%3D%22lg%22%20max%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Sanket%20Sahu%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Ankur%20Kedia%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Rohit%20Singh%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1260766060401188864%2FySJfMIbZ_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Rehman%20Baig%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Christian%20Nwamba%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20%22https%3A%2F%2Fbit.ly%2Fcode-beast%22%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20name%3D%22Gaurav%20Guha%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FAvatarGroup%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"avatar"},"Avatar"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2xl, lg, md, sm, xl, xs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The size of the avatar."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"md")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The name of the user in the avatar."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"source"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ImageSourcePropType"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The image source of the avatar."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1714:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return b}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var A=n.a.createContext({}),p=function(e){var a=n.a.useContext(A),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=p(e.components);return n.a.createElement(A.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,b=l["".concat(o,".").concat(d)]||l[d]||m[d]||i;return t?n.a.createElement(b,s(s({ref:a},A),{},{components:t})):n.a.createElement(b,s({ref:a},A))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var A=2;A<i;A++)o[A]=t[A];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);