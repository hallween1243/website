"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55136],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76341:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>v,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var t=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&p(e,n,r[n]);if(c)for(var n of c(r))l.call(r,n)&&p(e,n,r[n]);return e},d=(e,r)=>o(e,i(r)),f=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&c)for(var t of c(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m={title:"$packageVersion",description:"$packageVersion will return your current aoi.js version.",id:"packageVersion"},g=void 0,y={unversionedId:"functions/misc-related/packageVersion",id:"version-6.4.0/functions/misc-related/packageVersion",title:"$packageVersion",description:"$packageVersion will return your current aoi.js version.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/packageVersion.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/packageVersion",permalink:"/docs/functions/misc-related/packageVersion",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"$packageVersion",description:"$packageVersion will return your current aoi.js version.",id:"packageVersion"},sidebar:"docs",previous:{title:"$packageDependencies",permalink:"/docs/functions/misc-related/packageDependencies"},next:{title:"$readFile",permalink:"/docs/functions/misc-related/readFile"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:b},O="wrapper";function j(e){var r=e,{components:n}=r,a=f(r,["components"]);return(0,t.kt)(O,d(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$packageVersion")," will return your current aoi.js version."),(0,t.kt)("h2",u({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$packageVersion\n")),(0,t.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,t.kt)("p",null,"This will return your current aoi.js version:"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "packageVersion",\n    code: `\n    $packageVersion\n    `\n});\n')))}j.isMDXComponent=!0}}]);