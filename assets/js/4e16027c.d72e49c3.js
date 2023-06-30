"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=i,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"$minute",description:"$minute will return the current minute in CST.",id:"minute"},o=void 0,u={unversionedId:"functions/misc-related/minute",id:"version-6.2.6/functions/misc-related/minute",title:"$minute",description:"$minute will return the current minute in CST.",source:"@site/versioned_docs/version-6.2.6/functions/misc-related/minute.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/minute",permalink:"/docs/functions/misc-related/minute",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1688131444,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{title:"$minute",description:"$minute will return the current minute in CST.",id:"minute"},sidebar:"docs",previous:{title:"$map",permalink:"/docs/functions/misc-related/map"},next:{title:"$month",permalink:"/docs/functions/misc-related/month"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:l},s="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$minute")," will return the current minute in CST."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$minute\n")),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will returns the current minute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "minute",\n    code: `\n    $minute\n    `\n});\n')),(0,i.kt)("p",null,"You can change the timezone using ",(0,i.kt)("inlineCode",{parentName:"p"},"$timezone"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "minute",\n    code: `\n    $minute \n    $timezone[America/New_York]\n    ` // returns current minute in New York\n});\n')))}p.isMDXComponent=!0}}]);