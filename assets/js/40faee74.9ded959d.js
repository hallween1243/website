"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75695],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9086:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"$userLeaderboard",description:"Generates a user leader board for the given variable value"},l=void 0,i={unversionedId:"functions/userleaderboard",id:"version-5.5.5/functions/userleaderboard",title:"$userLeaderboard",description:"Generates a user leader board for the given variable value",source:"@site/versioned_docs/version-5.5.5/functions/userleaderboard.md",sourceDirName:"functions",slug:"/functions/userleaderboard",permalink:"/docs/5.5.5/functions/userleaderboard",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686542583,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$userLeaderboard",description:"Generates a user leader board for the given variable value"},sidebar:"docs",previous:{title:"$userID",permalink:"/docs/5.5.5/functions/userid"},next:{title:"$messageID",permalink:"/docs/5.5.5/functions/usermessageid"}},s={},u=[],c={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function generates a leaderboard for a variable with a numerical value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$userLeaderboard[variable;asc/desc (optional);{top} - {username}: {value};list (optional)]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"asc - The values will be from greatest to least (top to bottom)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"desc - The values will be from least to greatest (bottom to top)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{top} - Their leaderboard position (1/2/3/etc)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{username} - The users username")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{value} - The users value of the given var")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "leaderboard",\ncode: `$userLeaderboard[money;asc;{top} - {username} - {value}]`\n})\n')))}p.isMDXComponent=!0}}]);