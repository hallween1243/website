"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=u,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:u,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),u=(n(67294),n(3905));const o={title:"$queueStatus",description:"Returns the current Queue Status."},a=void 0,i={unversionedId:"functions/queuestatus",id:"version-5.5.5/functions/queuestatus",title:"$queueStatus",description:"Returns the current Queue Status.",source:"@site/versioned_docs/version-5.5.5/functions/queuestatus.md",sourceDirName:"functions",slug:"/functions/queuestatus",permalink:"/docs/5.5.5/functions/queuestatus",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689004686,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$queueStatus",description:"Returns the current Queue Status."},sidebar:"docs",previous:{title:"$queueLength",permalink:"/docs/5.5.5/functions/queuelength"},next:{title:"$ram",permalink:"/docs/5.5.5/functions/ram"}},s={},c=[{value:"Example:",id:"example",level:3}],l={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,u.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"This function will tell you the current status of the queue, if it's playing, paused or idle."),(0,u.kt)("h3",{id:"example"},"Example:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "queuestatus",\n    code: `\n    The queue is currently $queueStatus\n    `\n})\n')))}f.isMDXComponent=!0}}]);