"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33607],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,g=s["".concat(d,".").concat(f)]||s[f]||p[f]||i;return t?n.createElement(g,l(l({ref:r},c),{},{components:t})):n.createElement(g,l({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33265:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>D,frontMatter:()=>g,metadata:()=>h,toc:()=>y});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))u.call(r,t)&&c(e,t,r[t]);return e},p=(e,r)=>i(e,l(r)),f=(e,r)=>{var t={};for(var n in e)d.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const g={title:"$guildShardID",description:"$guildShardID renverra l'ID actuel du shard.",id:"guildShardID"},m=void 0,h={unversionedId:"functions/guild-related/guildShardID",id:"version-6.4.0/functions/guild-related/guildShardID",title:"$guildShardID",description:"$guildShardID renverra l'ID actuel du shard.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildShardID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShardID",permalink:"/fr/docs/functions/guild-related/guildShardID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ao\xfbt 2023",frontMatter:{title:"$guildShardID",description:"$guildShardID renverra l'ID actuel du shard.",id:"guildShardID"},sidebar:"docs",previous:{title:"$guildShard",permalink:"/fr/docs/functions/guild-related/guildShard"},next:{title:"$guildShardPing",permalink:"/fr/docs/functions/guild-related/guildShardPing"}},v={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:y},O="wrapper";function D(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(O,p(s(s({},b),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShardID")," renverra l'ID actuel du shard."),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildShardID\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notez que cela ne fonctionnera pas sans sharding. Si vous n'\xeates pas s\xfbr, consultez le ",(0,n.kt)("a",s({parentName:"strong"},{href:"/fr/docs/guides/client/sharding"}),"guide sharding"),".")),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci retournera l'ID actuel du shard:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ShardSevreurID',\n    code: `\n  Je suis actuellement sur le shard $guildShardID!\n  `\n});\n")))}D.isMDXComponent=!0}}]);