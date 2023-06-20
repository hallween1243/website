"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50670],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),p=i,h=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"$findServerChannel",description:"Returns channel ID for specified channel"},o=void 0,l={unversionedId:"functions/findserverchannel",id:"version-5.5.5/functions/findserverchannel",title:"$findServerChannel",description:"Returns channel ID for specified channel",source:"@site/versioned_docs/version-5.5.5/functions/findserverchannel.md",sourceDirName:"functions",slug:"/functions/findserverchannel",permalink:"/docs/5.5.5/functions/findserverchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687252277,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$findServerChannel",description:"Returns channel ID for specified channel"},sidebar:"docs",previous:{title:"$findRoles",permalink:"/docs/5.5.5/functions/findroles"},next:{title:"$findSpecialChars",permalink:"/docs/5.5.5/functions/findspecialchars"}},c={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:s},f="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function finds and returns the id of the specified channel in the current guild. Yes/No will determine if function returns current channel id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 1 required field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Server Channel ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Return Current Channel ID ","(","Optional",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$findChannel[server channel;returnCurrentChannel (yes/no) (optional)]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Server Channel - The channel we're finding. You can use name/id/mention"),(0,i.kt)("li",{parentName:"ul"},"Return Current Channel ID - Returns current channel id if no channel found")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "server-channel",\ncode: `$findServerChannel[announcements]`\n})\n')))}d.isMDXComponent=!0}}]);