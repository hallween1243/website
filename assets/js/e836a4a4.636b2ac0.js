"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"$isEveryoneMentioned",description:"Returns true/false if @everyone was mentioned in the command."},a=void 0,s={unversionedId:"functions/iseveryonementioned",id:"version-5.5.5/functions/iseveryonementioned",title:"$isEveryoneMentioned",description:"Returns true/false if @everyone was mentioned in the command.",source:"@site/versioned_docs/version-5.5.5/functions/iseveryonementioned.md",sourceDirName:"functions",slug:"/functions/iseveryonementioned",permalink:"/docs/5.5.5/functions/iseveryonementioned",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689004686,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$isEveryoneMentioned",description:"Returns true/false if @everyone was mentioned in the command."},sidebar:"docs",previous:{title:"$isEmoji",permalink:"/docs/5.5.5/functions/isemoji"},next:{title:"$isHoisted",permalink:"/docs/5.5.5/functions/ishoisted"}},c={},l=[{value:"Example Command:",id:"example-command",level:4}],p={toc:l},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this function you can check if ",(0,o.kt)("inlineCode",{parentName:"p"},"@everyone")," was mentioned in the command's message."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$isEveryoneMentioned")),(0,o.kt)("h4",{id:"example-command"},"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "everyonementioned",\ncode: `\nEveryone mentioned? $isEveryoneMentioned\n? \n})\n')))}d.isMDXComponent=!0}}]);