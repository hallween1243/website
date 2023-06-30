"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"$channelOverwrites"},i=void 0,o={unversionedId:"functions/channeloverwrites",id:"version-5.5.5/functions/channeloverwrites",title:"$channelOverwrites",description:"This function returns the channel permission overwrites",source:"@site/versioned_docs/version-5.5.5/functions/channeloverwrites.md",sourceDirName:"functions",slug:"/functions/channeloverwrites",permalink:"/docs/5.5.5/functions/channeloverwrites",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688131444,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{title:"$channelOverwrites"},sidebar:"docs",previous:{title:"$channelNSFW",permalink:"/docs/5.5.5/functions/channelnsfw"},next:{title:"$channelPermissionsFor",permalink:"/docs/5.5.5/functions/channelpermissionsfor"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Properties",id:"properties",level:4},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the channel permission overwrites"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$channelOverwrites[channelID?;properties?;separator?]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"channel ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The channel we're getting permission from"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The properties that will be displayed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"separator"),(0,a.kt)("td",{parentName:"tr",align:"left"},"To separate each permission"),(0,a.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{type} - Channel Type"),(0,a.kt)("li",{parentName:"ul"},"{mention} - Mention's the channel"),(0,a.kt)("li",{parentName:"ul"},"{allowed} - The allowed perms"),(0,a.kt)("li",{parentName:"ul"},"{denied} - The denied perms")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\n//Without the optional fields\nbot.command({\n    name: "channel",\n    code: `\nCurrent Channel Overwrites\n$channelOverwrites\n    `\n});\n\n\n//With the optional fields\nbot.command({\n    name: "channel",\n    code: `\nCurrent Channel Overwrites\n$channelOverwrites[$channelID;{mention}\'s Overwrites:\\nAllowed: {allowed}\\n\nDenied:\\n{denied};,]\n    `\n});\n')))}u.isMDXComponent=!0}}]);