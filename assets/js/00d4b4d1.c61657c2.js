"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,b=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const o={title:"bot.onRateLimit",description:"An event that gets executed, if the bot gets rate limited by the Discord API. To let the bot listen to the event, add one bot.onRateLimit() callback inside your main file."},a=void 0,l={unversionedId:"events/bot.onratelimit",id:"version-5.5.5/events/bot.onratelimit",title:"bot.onRateLimit",description:"An event that gets executed, if the bot gets rate limited by the Discord API. To let the bot listen to the event, add one bot.onRateLimit() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onratelimit.md",sourceDirName:"events",slug:"/events/bot.onratelimit",permalink:"/docs/5.5.5/events/bot.onratelimit",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687673700,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"bot.onRateLimit",description:"An event that gets executed, if the bot gets rate limited by the Discord API. To let the bot listen to the event, add one bot.onRateLimit() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onPresenceUpdate",permalink:"/docs/5.5.5/events/bot.onpresenceupdate"},next:{title:"bot.onReactionAdd",permalink:"/docs/5.5.5/events/bot.onreactionadd"}},s={},m=[{value:"Example Template",id:"example-template",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Options for $rateLimit",id:"options-for-ratelimit",level:4}],c={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This callback triggers every time your bot gets rate limited by the Discord API."),(0,i.kt)("h4",{id:"example-template"},"Example Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.rateLimitCommand({ //command\nchannel: "ID" //The channel we\'re the log is\ncode: `your code` //Code\n})\n\n')),(0,i.kt)("h4",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.rateLimitCommand({ \nchannel: "772414449839636490" \ncode: `I\'ve been rate limited!\nTimeout: $rateLimt[timeout]\nLimit: $rateLimit[limit]\nMethod: $rateLimit[method]\nPath: $rateLimit[path]\nRoute: $rateLimit[route]\n`\n})\n\n')),(0,i.kt)("h4",{id:"options-for-ratelimit"},"Options for $rateLimit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," - Time before this session rate limit is restarted "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"limit")," - Amount of times you can request this endpoint before failing "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method")," - Method used to this endpoint "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - The path to the api endpoint that triggered the rate limit "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"route")," - The route that triggered this event")))}d.isMDXComponent=!0}}]);