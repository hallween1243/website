"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=l.createContext({}),s=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return l.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?l.createElement(h,o(o({ref:n},d),{},{components:t})):l.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=t(87462),r=(t(67294),t(3905));const a={title:"$deleteChannels",description:"Delete a channel or channels by using their IDs."},o=void 0,i={unversionedId:"functions/deletechannels",id:"version-5.5.5/functions/deletechannels",title:"$deleteChannels",description:"Delete a channel or channels by using their IDs.",source:"@site/versioned_docs/version-5.5.5/functions/deletechannels.md",sourceDirName:"functions",slug:"/functions/deletechannels",permalink:"/docs/5.5.5/functions/deletechannels",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686797068,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$deleteChannels",description:"Delete a channel or channels by using their IDs."},sidebar:"docs",previous:{title:"$deleteApplicationCommand",permalink:"/docs/5.5.5/functions/deleteapplicationcommand"},next:{title:"$deleteChannelVar",permalink:"/docs/5.5.5/functions/deletechannelvar"}},c={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function deletes the specified channel","(","s",")"),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Channel ID 2 ","(","Optional",")"),(0,r.kt)("li",{parentName:"ol"},"Etc")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteChannels[channel id;channel id;etc]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel ID","(","s",")"," - The channels the bot is deleting")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Deleting the mentioned channel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deletechannels", \ncode: `\nI\'ve deleted the mentioned channels!\n$deleteChannels[$mentionedChannels[1]]\n` \n})\n')),(0,r.kt)("p",null,"Deleting multiple mentioned channels"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deletechannels", \ncode: `\nI\'ve deleted all the mentioned channels!\n$deleteChannels[$mentionedChannels[1];$mentionedChannels[2];$mentionedChannels[3]]\n` \n})\n')))}p.isMDXComponent=!0}}]);