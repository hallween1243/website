"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Yes or no command",description:"Yes or no command",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,i={permalink:"/wikis/posts/632607624742961153/0s8eh9",source:"@site/forums/posts/632607624742961153/0s8eh9.md",title:"Yes or no command",description:"Yes or no command",date:"2023-07-10T15:58:06.000Z",formattedDate:"July 10, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"}],frontMatter:{title:"Yes or no command",description:"Yes or no command",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Download function",permalink:"/wikis/posts/591690683509768223/h3mscp"},nextItem:{title:"HowGamer command",permalink:"/wikis/posts/632607624742961153/ic9vu7"}},m={authorsImageUrls:[void 0]},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Most ridiculous command (in my opinion) made for fun purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\nname: "yesorno",\ncode: `> $message\n*$randomText[yes;no]*\n$cooldown[5s; Slow down! Don\'t spam the command!\nTime left: \\`%time%\\`]\n$onlyIf[$message!=;Please Ask me a question to answer you.]`\n}\n')))}u.isMDXComponent=!0}}]);