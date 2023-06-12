"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"$user"},o=void 0,s={unversionedId:"functions/user",id:"version-5.5.5/functions/user",title:"$user",description:"This function returns the given user's specified property",source:"@site/versioned_docs/version-5.5.5/functions/user.md",sourceDirName:"functions",slug:"/functions/user",permalink:"/docs/5.5.5/functions/user",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686542583,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$user"},sidebar:"docs",previous:{title:"$useChannel",permalink:"/docs/5.5.5/functions/usechannel"},next:{title:"$userAvatar",permalink:"/docs/5.5.5/functions/useravatar"}},l={},u=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the given user's specified property"),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This function has 2 fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$user[userID;property]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User ID - The user the properties are based off of"),(0,a.kt)("li",{parentName:"ul"},"Property - The property we're getting from ","<","user",">")),(0,a.kt)("h4",{id:"available-properties"},"Available Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name - User's name"),(0,a.kt)("li",{parentName:"ul"},"id - User's ID"),(0,a.kt)("li",{parentName:"ul"},"tag - User's Tag"),(0,a.kt)("li",{parentName:"ul"},"discrim - User's discriminator"),(0,a.kt)("li",{parentName:"ul"},"mention - User's mention"),(0,a.kt)("li",{parentName:"ul"},"avatar - User's avatar URL"),(0,a.kt)("li",{parentName:"ul"},"isbot - Whether or not the user is a bot, Return's Boolean"),(0,a.kt)("li",{parentName:"ul"},"istyping - Whether or not the user is typing, Return's Boolean"),(0,a.kt)("li",{parentName:"ul"},"created - User's date and time of creation"),(0,a.kt)("li",{parentName:"ul"},"timestamp - How long ago the user was created"),(0,a.kt)("li",{parentName:"ul"},"lastmessageid - User's last message ID"),(0,a.kt)("li",{parentName:"ul"},"lastmessagechannelid - User's last channel ID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "user",\ncode: `\n$user[535566311942651924;name]\n`\n})\n\n//Or specified user\n\nbot.command({\nname: "user",\ncode: `\n$user[$mentioned[1];name]\n`\n})\n')))}c.isMDXComponent=!0}}]);