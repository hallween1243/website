"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,f=c["".concat(u,".").concat(g)]||c[g]||s[g]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),g=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$guildBanner",description:"$guildBanner will return the guild banner of a given guild.",id:"guildBanner"},m=void 0,b={unversionedId:"functions/guild-related/guildBanner",id:"version-6.4.0/functions/guild-related/guildBanner",title:"$guildBanner",description:"$guildBanner will return the guild banner of a given guild.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildBanner.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildBanner",permalink:"/uk/docs/functions/guild-related/guildBanner",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$guildBanner",description:"$guildBanner will return the guild banner of a given guild.",id:"guildBanner"},sidebar:"docs",previous:{title:"$guildAvailable",permalink:"/uk/docs/functions/guild-related/guildAvailable"},next:{title:"$guildBoostCount",permalink:"/uk/docs/functions/guild-related/guildBoostCount"}},v={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},O="wrapper";function h(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(O,s(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildBanner")," will return the guild banner of a given guild."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildBanner[guildID?]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The ID of the guild."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return your guild banner (if unlocked and using):"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildBanner',\n    code: `\n  $guildBanner[$guildID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);