"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,N=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Client Status",description:"How to setup a Bot Status"},i=void 0,s={unversionedId:"guides/client-status",id:"version-5.5.5/guides/client-status",title:"Client Status",description:"How to setup a Bot Status",source:"@site/versioned_docs/version-5.5.5/guides/client-status.md",sourceDirName:"guides",slug:"/guides/client-status",permalink:"/docs/5.5.5/guides/client-status",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687252277,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Client Status",description:"How to setup a Bot Status"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/5.5.5/guides/variables"},next:{title:"Command Aliases",permalink:"/docs/5.5.5/guides/command-aliases"}},o={},u=[{value:"Setting a Client Status:",id:"setting-a-client-status",level:3},{value:"Usage:",id:"usage",level:3},{value:"Adding multiple Client Status:",id:"adding-multiple-client-status",level:3},{value:"Different Types:",id:"different-types",level:3},{value:"Client Status Method:",id:"client-status-method",level:3},{value:"Different Status Types:",id:"different-status-types",level:3},{value:"Streaming URL Method:",id:"streaming-url-method",level:3},{value:"Mobile Status",id:"mobile-status",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"setting-a-client-status"},"Setting a Client Status:"),(0,r.kt)("p",null,"You need to enter the following, in your main index."),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.status({\n  text: "TEXT",\n  type: "PLAYING",\n  time: 12\n})\n')),(0,r.kt)("h3",{id:"adding-multiple-client-status"},"Adding multiple Client Status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.status({\n  text: "TEXT1",\n  type: "PLAYING",\n  time: 12\n})\n\nbot.status({\n  text: "TEXT2",\n  type: "WATCHING",\n  time: 12\n})\n')),(0,r.kt)("h3",{id:"different-types"},"Different Types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PLAYING"),(0,r.kt)("li",{parentName:"ul"},"WATCHING"),(0,r.kt)("li",{parentName:"ul"},"LISTENING"),(0,r.kt)("li",{parentName:"ul"},"STREAMING"),(0,r.kt)("li",{parentName:"ul"},"COMPETING")),(0,r.kt)("h3",{id:"client-status-method"},"Client Status Method:"),(0,r.kt)("p",null,"If you want to change the Client Discord Status use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ status: "type"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.status({\n  text: "TEXT",\n  type: "PLAYING",\n  status: "idle",\n  time: 12\n})\n')),(0,r.kt)("h3",{id:"different-status-types"},"Different Status Types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dnd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"invisible"))),(0,r.kt)("h3",{id:"streaming-url-method"},"Streaming URL Method:"),(0,r.kt)("p",null,"Streaming-Status supports ",(0,r.kt)("inlineCode",{parentName:"p"},"YouTube-Video-URLs")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Twitch-Stream-URLs"),"."),(0,r.kt)("p",null,"If you want to enter an URL, Enter the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ url: "URL"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.status({\ntext: "TEXT", \ntype: "STREAMING", \nurl: "URL"\n})\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure your ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"STREAMING"))),(0,r.kt)("h3",{id:"mobile-status"},"Mobile Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ mobilePlatform: true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.AoiClient({\n  token: "DISCORD BOT TOKEN",\n  prefix: "DISCORD BOT PREFIX",\n  intents: ["GUILDS", "GUILD_MESSAGES"]\n})\nmobilePlatform: true\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example",src:n(72736).Z,width:"237",height:"61"})))}m.isMDXComponent=!0},72736:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);