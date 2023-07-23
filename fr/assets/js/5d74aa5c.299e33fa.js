"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76670],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,v=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(v,l(l({ref:r},p),{},{components:t})):n.createElement(v,l({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42245:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&p(e,t,r[t]);return e},u=(e,r)=>o(e,l(r)),d=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const v={title:"$lerefAvatar",description:"$lerefAvatar will return the Avatar of the creator of aoi.js",id:"lerefAvatar"},m=void 0,y={unversionedId:"functions/misc-related/lerefAvatar",id:"version-6.4.0/functions/misc-related/lerefAvatar",title:"$lerefAvatar",description:"$lerefAvatar will return the Avatar of the creator of aoi.js",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/lerefAvatar.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/lerefAvatar",permalink:"/fr/docs/functions/misc-related/lerefAvatar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$lerefAvatar",description:"$lerefAvatar will return the Avatar of the creator of aoi.js",id:"lerefAvatar"},sidebar:"docs",previous:{title:"$joinSplitText",permalink:"/fr/docs/functions/misc-related/joinSplitText"},next:{title:"$loop",permalink:"/fr/docs/functions/misc-related/loop"}},b={},O=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],g={toc:O},j="wrapper";function h(e){var r=e,{components:t}=r,a=d(r,["components"]);return(0,n.kt)(j,u(f(f({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$lerefAvatar")," will return the Avatar of the creator of aoi.js"),(0,n.kt)("h2",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$lerefAvatar\n")),(0,n.kt)("h2",f({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the creator's Avatar:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "lerefAvatar",\n    code: `\n    $lerefAvatar\n    `\n});\n')))}h.isMDXComponent=!0}}]);