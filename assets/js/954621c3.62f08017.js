"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"$exec"},a=void 0,c={unversionedId:"functions/exec",id:"version-5.5.5/functions/exec",title:"$exec",description:"This function executes a command in the console",source:"@site/versioned_docs/version-5.5.5/functions/exec.md",sourceDirName:"functions",slug:"/functions/exec",permalink:"/docs/5.5.5/functions/exec",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686797068,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$exec"},sidebar:"docs",previous:{title:"$eval",permalink:"/docs/5.5.5/functions/eval"},next:{title:"$executionTime",permalink:"/docs/5.5.5/functions/executiontime"}},l={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function executes a command in the console"),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("p",null,"This function has 1 field"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Command Line ","(","Required",")")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$exec[command]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command - The command that will be executed in the console")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "execute",\ncode: `$exec[npm i aoi.js]`\n})\n')))}p.isMDXComponent=!0}}]);