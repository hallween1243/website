"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32025],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,f=s["".concat(d,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},89118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>k,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},p=(e,t)=>i(e,l(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$guildShardPing",description:"$guildShardPing renverra la latence d'un shard sp\xe9cifique.",id:"guildShardPing"},m=void 0,h={unversionedId:"functions/guild-related/guildShardPing",id:"version-6.4.0/functions/guild-related/guildShardPing",title:"$guildShardPing",description:"$guildShardPing renverra la latence d'un shard sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildShardPing.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShardPing",permalink:"/fr/docs/functions/guild-related/guildShardPing",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ao\xfbt 2023",frontMatter:{title:"$guildShardPing",description:"$guildShardPing renverra la latence d'un shard sp\xe9cifique.",id:"guildShardPing"},sidebar:"docs",previous:{title:"$guildShardID",permalink:"/fr/docs/functions/guild-related/guildShardID"},next:{title:"$guildSplash",permalink:"/fr/docs/functions/guild-related/guildSplash"}},v={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:y},O="wrapper";function k(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(O,p(s(s({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShardPing")," renverra la latence d'un shard sp\xe9cifique."),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildShardPing[IDshard?]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"IDshard?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du shard."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notez que cela ne fonctionnera pas sans sharding. Si vous n'\xeates pas s\xfbr, consultez le",(0,n.kt)("a",s({parentName:"strong"},{href:"/fr/docs/guides/client/sharding"}),"guide sharding"),".")),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera la latence du shard dans le shard actuel:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'serveurLatenceShard',\n    code: `\n  $guildShardPing[$shardId]MS\n  `\n});\n")))}k.isMDXComponent=!0}}]);