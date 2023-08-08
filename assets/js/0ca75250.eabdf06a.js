"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97346],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),y=n,d=f["".concat(c,".").concat(y)]||f[y]||u[y]||i;return t?a.createElement(d,o(o({ref:r},s),{},{components:t})):a.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[f]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},22679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var a=t(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>i(e,o(r)),y=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const d={title:"$arrayShift",description:"$arrayShift will return the first item of the given array.",id:"arrayShift"},m=void 0,h={unversionedId:"functions/array-related/arrayShift",id:"version-6.4.0/functions/array-related/arrayShift",title:"$arrayShift",description:"$arrayShift will return the first item of the given array.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/arrayShift.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayShift",permalink:"/docs/functions/array-related/arrayShift",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{title:"$arrayShift",description:"$arrayShift will return the first item of the given array.",id:"arrayShift"},sidebar:"docs",previous:{title:"$arrayReverse",permalink:"/docs/functions/array-related/arrayReverse"},next:{title:"$arrayShuffle",permalink:"/docs/functions/array-related/arrayShuffle"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:g},O="wrapper";function k(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,u(f(f({},b),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayShift")," will return the first item of the given array."),(0,a.kt)("h2",f({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$arrayShift[name]\n")),(0,a.kt)("h2",f({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",f({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",f({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",f({},{id:"examples"}),"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-shift",\n    code: `\n  $arrayShift[array]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}k.isMDXComponent=!0}}]);