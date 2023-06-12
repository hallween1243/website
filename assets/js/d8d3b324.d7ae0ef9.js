"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28109],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var f=a.createContext({}),u=function(e){var r=a.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(f.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,f=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),y=n,d=s["".concat(f,".").concat(y)]||s[y]||p[y]||l;return t?a.createElement(d,o(o({ref:r},c),{},{components:t})):a.createElement(d,o({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var f in r)hasOwnProperty.call(r,f)&&(i[f]=r[f]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},88927:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const l={title:"$arrayShuffle",description:"$arrayShuffle will shuffle the elements of the given array.",id:"arrayShuffle"},o=void 0,i={unversionedId:"functions/array-related/arrayShuffle",id:"version-6.2.6/functions/array-related/arrayShuffle",title:"$arrayShuffle",description:"$arrayShuffle will shuffle the elements of the given array.",source:"@site/versioned_docs/version-6.2.6/functions/array-related/arrayShuffle.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayShuffle",permalink:"/docs/functions/array-related/arrayShuffle",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686542583,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$arrayShuffle",description:"$arrayShuffle will shuffle the elements of the given array.",id:"arrayShuffle"},sidebar:"docs",previous:{title:"$arrayShift",permalink:"/docs/functions/array-related/arrayShift"},next:{title:"$arraySome",permalink:"/docs/functions/array-related/arraySome"}},f={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$arrayShuffle")," will shuffle the elements of the given array."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$arrayShuffle[name]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Array name."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "array-shuffle",\n    code: `\n  $arrayJoin[array;, ]\n  $arrayShuffle[array]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}p.isMDXComponent=!0}}]);