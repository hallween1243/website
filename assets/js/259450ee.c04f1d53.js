"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(r),d=a,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<s;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>s(e,u(t)),d=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$userCustomStatus",description:"$userCustomStatus will return a user's custom status.",id:"userCustomStatus"},g=void 0,y={unversionedId:"functions/user-related/userCustomStatus",id:"version-6.4.0/functions/user-related/userCustomStatus",title:"$userCustomStatus",description:"$userCustomStatus will return a user's custom status.",source:"@site/versioned_docs/version-6.4.0/functions/user-related/userCustomStatus.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userCustomStatus",permalink:"/docs/functions/user-related/userCustomStatus",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"$userCustomStatus",description:"$userCustomStatus will return a user's custom status.",id:"userCustomStatus"},sidebar:"docs",previous:{title:"$userBannerColor",permalink:"/docs/functions/user-related/userBannerColor"},next:{title:"$userDefaultAvatar",permalink:"/docs/functions/user-related/userDefaultAvatar"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,m(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$userCustomStatus")," will return a user's custom status."),(0,n.kt)("h2",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$userCustomStatus[guildID?;userID?;option?]\n")),(0,n.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The role ID."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"userID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The user ID."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Which part of the status will be returned ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"state")," (default) - returns the status text ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"emoji")," - returns the emoji"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return your status text if you have any:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userCustomStatus',\n    code: `\n  $userCustomStatus[$authorID;$guildID;state]\n  `\n});\n")))}h.isMDXComponent=!0}}]);