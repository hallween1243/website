"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97125],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"$unPinMessage",description:"Unpins a message"},i=void 0,s={unversionedId:"functions/unpinmessage",id:"version-5.5.5/functions/unpinmessage",title:"$unPinMessage",description:"Unpins a message",source:"@site/versioned_docs/version-5.5.5/functions/unpinmessage.md",sourceDirName:"functions",slug:"/functions/unpinmessage",permalink:"/docs/5.5.5/functions/unpinmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686542583,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$unPinMessage",description:"Unpins a message"},sidebar:"docs",previous:{title:"$unban",permalink:"/docs/5.5.5/functions/unban"},next:{title:"$updateCommands",permalink:"/docs/5.5.5/functions/updatecommands"}},c={},p=[],u={toc:p};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows the bot to unpin the given messageID ","(","if pinned",")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$unPinMessage[channelID;messageID]\n")),(0,a.kt)("p",null,"Using the function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "unpin",\ncode: `$unPinMessage[790811472829743105;794203850839949372]`\n}) //Unpins the given messageID\n')))}l.isMDXComponent=!0}}]);