"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19948],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(i),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return i?n.createElement(g,l(l({ref:t},d),{},{components:i})):n.createElement(g,l({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},69121:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const a={title:"$guildEmojiExists",description:"$guildEmojiExists will check if the given emoji exists in the given guild.",id:"guildEmojiExists"},l=void 0,o={unversionedId:"functions/guild-related/guildEmojiExists",id:"version-6.2.6/functions/guild-related/guildEmojiExists",title:"$guildEmojiExists",description:"$guildEmojiExists will check if the given emoji exists in the given guild.",source:"@site/versioned_docs/version-6.2.6/functions/guild-related/guildEmojiExists.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildEmojiExists",permalink:"/docs/functions/guild-related/guildEmojiExists",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686797068,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$guildEmojiExists",description:"$guildEmojiExists will check if the given emoji exists in the given guild.",id:"guildEmojiExists"},sidebar:"docs",previous:{title:"$guildDescription",permalink:"/docs/functions/guild-related/guildDescription"},next:{title:"$guildEmojis",permalink:"/docs/functions/guild-related/guildEmojis"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildEmojiExists")," will check if the given emoji exists in the given guild."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$guildEmojiExists[emojiResolver;guildId?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emojiResolver"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Emoji you want to check if it exists."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the guild where the emoji exists."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," as\nthe ",(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"})," emoji exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildEmojiExists',\n    code: `\n  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]\n  `\n});\n")))}p.isMDXComponent=!0}}]);