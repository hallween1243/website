"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,y=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>y,metadata:()=>O,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,o(t)),f=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arrayLastIndexOf",description:"$arrayLastIndexOf will return the index of the last found item of the query.",id:"arrayLastIndexOf"},m=void 0,O={unversionedId:"functions/array-related/arrayLastIndexOf",id:"version-6.4.0/functions/array-related/arrayLastIndexOf",title:"$arrayLastIndexOf",description:"$arrayLastIndexOf will return the index of the last found item of the query.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/arrayLastIndexOf.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayLastIndexOf",permalink:"/docs/functions/array-related/arrayLastIndexOf",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"$arrayLastIndexOf",description:"$arrayLastIndexOf will return the index of the last found item of the query.",id:"arrayLastIndexOf"},sidebar:"docs",previous:{title:"$arrayJoin",permalink:"/docs/functions/array-related/arrayJoin"},next:{title:"$arrayLength",permalink:"/docs/functions/array-related/arrayLength"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},h="wrapper";function k(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(h,c(d(d({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayLastIndexOf")," will return the index of the last found item of the query."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayLastIndexOf[name;query]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The element we will be queering for every element inside the array."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "arrayLastIndexOf",\n    code: `\n  $arrayLastIndexOf[array;akarui]\n  $createArray[array;aoi.js;akarui;akarui;documents;bot]\n  `\n    // It will return "3" as the word "akarui" is in the 3rd position of the array.\n});\n')))}k.isMDXComponent=!0}}]);