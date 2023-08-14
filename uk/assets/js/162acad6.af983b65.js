"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1422],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15122:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var t=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&p(e,r,n[r]);if(s)for(var r of s(n))l.call(n,r)&&p(e,r,n[r]);return e},d=(e,n)=>i(e,a(n)),f=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&l.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$nodeVersion",description:"$nodeVersion will return your current node.js version.",id:"nodeVersion"},y=void 0,v={unversionedId:"functions/misc-related/nodeVersion",id:"version-6.4.0/functions/misc-related/nodeVersion",title:"$nodeVersion",description:"$nodeVersion will return your current node.js version.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/nodeVersion.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/nodeVersion",permalink:"/uk/docs/functions/misc-related/nodeVersion",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$nodeVersion",description:"$nodeVersion will return your current node.js version.",id:"nodeVersion"},sidebar:"docs",previous:{title:"$noMentionMessage",permalink:"/uk/docs/functions/misc-related/noMentionMessage"},next:{title:"$packageDependencies",permalink:"/uk/docs/functions/misc-related/packageDependencies"}},b={},g=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:g},j="wrapper";function k(e){var n=e,{components:r}=n,o=f(n,["components"]);return(0,t.kt)(j,d(u(u({},O),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$nodeVersion")," will return your current node.js version."),(0,t.kt)("h2",u({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$nodeVersion\n")),(0,t.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,t.kt)("p",null,"This will return the current node.js version your bot is running on:"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "nodeVersion",\n    code: `\n    $nodeVersion\n    `\n});\n')))}k.isMDXComponent=!0}}]);