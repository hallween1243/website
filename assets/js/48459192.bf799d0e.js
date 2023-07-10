"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83156],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",id:"isEveryoneMentioned"},a=void 0,l={unversionedId:"functions/util-related/isEveryoneMentioned",id:"version-6.3.0/functions/util-related/isEveryoneMentioned",title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/isEveryoneMentioned.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isEveryoneMentioned",permalink:"/docs/functions/util-related/isEveryoneMentioned",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689004686,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",id:"isEveryoneMentioned"},sidebar:"docs",previous:{title:"$isDeafen",permalink:"/docs/functions/util-related/isDeafen"},next:{title:"$isGuildDeafened",permalink:"/docs/functions/util-related/isGuildDeafened"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$isEveryoneMentioned")," will check if everyone or here is mentioned."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$isEveryoneMentioned\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will check if you mentioned ",(0,o.kt)("inlineCode",{parentName:"p"},"@here")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@everyone"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'isEveryoneMentioned',\n    code: `\n  You did not mention @ everyone!\n  $onlyIf[$isEveryoneMentioned==false;You tried to mention @ everyone!]\n  `\n});\n")))}u.isMDXComponent=!0}}]);