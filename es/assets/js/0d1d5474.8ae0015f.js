"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20636],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),s=p(a),u=r,k=s["".concat(o,".").concat(u)]||s[u]||g[u]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m[s]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42834:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>c,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&d(t,a,e[a]);if(m)for(var a of m(e))p.call(e,a)&&d(t,a,e[a]);return t},g=(t,e)=>l(t,i(e)),u=(t,e)=>{var a={};for(var n in t)o.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a};const k={title:"Message Formatting",description:"This page is covering all about message formatting.",id:"msgformatting"},c=void 0,N={unversionedId:"guides/other/msgformatting",id:"version-6.4.0/guides/other/msgformatting",title:"Message Formatting",description:"This page is covering all about message formatting.",source:"@site/versioned_docs/version-6.4.0/guides/other/4msgformatting.md",sourceDirName:"guides/other",slug:"/guides/other/msgformatting",permalink:"/es/docs/guides/other/msgformatting",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ago 2023",frontMatter:{title:"Message Formatting",description:"This page is covering all about message formatting.",id:"msgformatting"},sidebar:"docs",previous:{title:"Invite System",permalink:"/es/docs/guides/other/invite-system"},next:{title:"Character Escaping",permalink:"/es/docs/guides/other/characterescaping"}},b={},f=[{value:"Markdown",id:"markdown",level:3},{value:"Unix Timestamp Formatting",id:"unix-timestamp-formatting",level:3}],h={toc:f},y="wrapper";function v(t){var e=t,{components:a}=e,r=u(e,["components"]);return(0,n.kt)(y,g(s(s({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This page is about hyperlinks, markdown, what they do and how to use them.")),(0,n.kt)("admonition",s({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Discord is rolling out Masked Links & Markdown to Communities slowly, meaning you no longer require embeds or interactions to embed links!"),(0,n.kt)("p",{parentName:"admonition"},"Learn more about the changes on their official ",(0,n.kt)("a",s({parentName:"p"},{href:"https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-#h_01H53FJBNB9B5RT9M1M9V1EQ7W"}),"blog"),".")),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"TYPE"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"STRUCTURE"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"EXAMPLE"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"PREVIEW"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"User"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<@USER_ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<@608358453580136499>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/user.png",alt:"preview"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"User ","[DEPRECATED]"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<@!USER_ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<@!608358453580136499>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/user.png",alt:"preview"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Channel"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<#CHANNEL_ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<#832704676096245800>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/channel.png",alt:"preview"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Role"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<@&ROLE_ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<@&774059181820870696>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/role.png",alt:"preview"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Slash Command"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"</NAME:COMMAND_ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"</help:1061818977933873282>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/slash.png",alt:"preview"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Standard Emoji"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Unicode Characters"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2764\ufe0f"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Custom Emoji"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<:NAME:ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<:lerefblob:1010320053687832586>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Custom Emoji (Animated)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<a:NAME:ID>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<a:b1nzy:392938283556143104>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Unix Timestamp"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<t:TIMESTAMP>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<t:1619757519>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1087796841053171833/wX6f10lPbNKAgAAAAASUVORK5CYII.png",alt:"img"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Unix Timestamp (Styled)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<t:TIMESTAMP:STYLE>"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<t:1619757519:d>"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),(0,n.kt)("img",s({parentName:"td"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1087797013472612383/8fZajSBpMWcIIAAAAASUVORK5CYII.png",alt:"img"})))))),(0,n.kt)("h3",s({},{id:"markdown"}),"Markdown"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"TYPE"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"STRUCTURE"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"EXAMPLE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Big Header"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#"," Text"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#"," Hello World")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Medium Header"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#","#"," Text"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#","#"," Hello World")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Small Header"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#","#","#"," Text"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"#","#","#"," Hello World")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Numbered Lists"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"1","."," Item ",(0,n.kt)("br",null)," 2","."," Item"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"1","."," Potato ",(0,n.kt)("br",null)," 2","."," Milk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Bullet Lists"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"*"," Item ",(0,n.kt)("br",null)," ","*"," Item"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"*"," Discord ",(0,n.kt)("br",null)," ","*"," Twitter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Masked Links"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"[","Alt Text","]","(link)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"[","aoi.js","]","(",(0,n.kt)("a",s({parentName:"td"},{href:"https://aoi.js.org"}),"https://aoi.js.org"),")")))),(0,n.kt)("h3",s({},{id:"unix-timestamp-formatting"}),"Unix Timestamp Formatting"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"STYLE"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"EXAMPLE OUTPUT"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"23:20"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Short Time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"23:20:30"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Long Time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"d"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"20/04/2021"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Short Date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"D"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"20 April 2021"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Long Date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"20 April 2021 23:20"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Short Date/Time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"F"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Tuesday, 20 April 2021 23:20"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Long Date/Time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"R"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"2 years ago"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Relative Time")))))}v.isMDXComponent=!0}}]);