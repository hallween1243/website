"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"$memberJoinPosition"},a=void 0,c={unversionedId:"functions/memberjoinposition",id:"version-5.5.5/functions/memberjoinposition",title:"$memberJoinPosition",description:"This function will show you your position in the joined history. \\(1st, 2nd, 3rd member, etc.\\)",source:"@site/versioned_docs/version-5.5.5/functions/memberjoinposition.md",sourceDirName:"functions",slug:"/functions/memberjoinposition",permalink:"/docs/5.5.5/functions/memberjoinposition",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688131444,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{title:"$memberJoinPosition"},sidebar:"docs",previous:{title:"$memberJoinedDate",permalink:"/docs/5.5.5/functions/memberjoineddate"},next:{title:"$membersCount",permalink:"/docs/5.5.5/functions/memberscount"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function will show you your position in the joined history. ","(","1st, 2nd, 3rd member, etc.",")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This function requires you to have all server members cached to be accurate.")),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$memberJoinPosition[User ID (Optional)]")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "joined",\n    code: `You are in position: $memberJoinPosition`\n});\n')))}m.isMDXComponent=!0}}]);