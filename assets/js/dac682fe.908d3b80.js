"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Roblox group info command",description:"Displays info about a roblox group",authors:{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,p={permalink:"/wikis/posts/964024743172915220/ebigj",source:"@site/forums/posts/964024743172915220/ebigj.md",title:"Roblox group info command",description:"Displays info about a roblox group",date:"2023-06-25T06:15:00.000Z",formattedDate:"June 25, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif",imageURL:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"}],frontMatter:{title:"Roblox group info command",description:"Displays info about a roblox group",authors:{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif",imageURL:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Ticketing system",permalink:"/wikis/posts/949588732498018324/r4uv0q"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "groupinfo",\n    code: `\n    $title[1;Success!] \n    $description[> Group ID: $getobjectproperty[id]\n    > **Group Name:** $getobjectproperty[name]\n    > **Group Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]\n    > **Group OwnerId:** $getobjectproperty[owner.username]\n    > **Group Latest Shout:** $getobjectproperty[shout.body] $if[$getobjectproperty[shout.body]==;undefined;]\n]\n    $color[1;#C3A78E]\n    $footer[1;bob]\n    $createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]]\n    $argscheck[1;Group id?]\n    `\n}\n')))}d.isMDXComponent=!0}}]);