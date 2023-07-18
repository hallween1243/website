"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||v[d]||a;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var i=n(3905),r=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},v=(e,t)=>a(e,s(t)),d=(e,t)=>{var n={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n};const m={title:"Invite System",description:"This page is covering all about the built-in invite system .",id:"invite-system"},g=void 0,f={unversionedId:"guides/other/invite-system",id:"version-6.4.0/guides/other/invite-system",title:"Invite System",description:"This page is covering all about the built-in invite system .",source:"@site/versioned_docs/version-6.4.0/guides/other/3invitesystem.md",sourceDirName:"guides/other",slug:"/guides/other/invite-system",permalink:"/es/docs/guides/other/invite-system",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"Invite System",description:"This page is covering all about the built-in invite system .",id:"invite-system"},sidebar:"docs",previous:{title:"Parser",permalink:"/es/docs/guides/other/parser"},next:{title:"Message Formatting",permalink:"/es/docs/guides/other/msgformatting"}},y={},b=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Setup",id:"setup",level:2},{value:"Invite Events",id:"invite-events",level:2},{value:"InviteCreate",id:"invitecreate",level:3},{value:"InviteDelete",id:"invitedelete",level:3}],h={toc:b},k="wrapper";function O(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,i.kt)(k,v(u(u({},h),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This page is about command options and what they do.")),(0,i.kt)("h2",u({},{id:"table-of-contents"}),"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#getting-started"}),"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#setup"}),"Setup"))),(0,i.kt)("hr",null),(0,i.kt)("h2",u({},{id:"getting-started"}),"Getting Started"),(0,i.kt)("p",null,"The built-in invite system offers the ability to cache and manage your invites of specific servers."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),'const { AoiClient, LoadCommands, AoiInviteSystem } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: process.env.token,\n    prefix: "!",\n    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildInvites"],\n    events: ["onMessage", "onInviteCreate", "onInviteDelete"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    },\n    fetchInvites: {\n        cacheInviters: true,\n        enabled: true,\n    }\n});\n\nconst invite = new AoiInviteSystem(bot, true);\n')),(0,i.kt)("h2",u({},{id:"setup"}),"Setup"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="Invite Setup"',title:'"Invite','Setup"':!0}),"fetchInvites: {\n    cacheInviters : boolean,\n    enabled : boolean,\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="AoiInviteSystem Class"',title:'"AoiInviteSystem','Class"':!0}),"AoiInviteSystem(clientInstance, enableCaching)\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",u({},{id:"invite-events"}),"Invite Events"),(0,i.kt)("h3",u({},{id:"invitecreate"}),"InviteCreate"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteCreate"',title:'"inviteCreate"'}),"bot.inviteCreateCommand({\n    name?: string,\n    channel: integer,\n    code: string \n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteCreate"',title:'"inviteCreate"'}),'module.exports = ({\n    name?: string,\n    type: "inviteCreate",\n    channel: integer,\n    code: string \n})\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",u({},{id:"invitedelete"}),"InviteDelete"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteDelete"',title:'"inviteDelete"'}),"bot.inviteDeleteCommand({\n    name?: string,\n    channel: integer,\n    code: string \n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteDelete"',title:'"inviteDelete"'}),'module.exports = ({\n    name?: string,\n    type: "inviteDelete",\n    channel: integer,\n    code: string \n})\n')))}O.isMDXComponent=!0}}]);