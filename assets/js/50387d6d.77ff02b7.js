"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Botinfo command",description:"simple botinfo command",authors:{name:"@arkwell",title:"Member - 405070001356275712",userid:"405070001356275712",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,c={permalink:"/wikis/posts/405070001356275712/sr2wtw",source:"@site/forums/posts/405070001356275712/sr2wtw.md",title:"Botinfo command",description:"simple botinfo command",date:"2023-06-29T13:01:26.000Z",formattedDate:"June 29, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@arkwell",title:"Member - 405070001356275712",userid:"405070001356275712",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif",imageURL:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif"}],frontMatter:{title:"Botinfo command",description:"simple botinfo command",authors:{name:"@arkwell",title:"Member - 405070001356275712",userid:"405070001356275712",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif",imageURL:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Serverinfo command",permalink:"/wikis/posts/405070001356275712/6bdeo"},nextItem:{title:"Transcript Custom Function",permalink:"/wikis/posts/428188716641812481/nw36qo"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "botinfo",\n    code: `\n$addField[Uptime;$uptime[full]]\n$addField[Ping;$pingms]\n$addField[Channels;$allChannelsCount]\n$addField[Users;$allMembersCount]\n$addField[Servers;$guildCount]\n$title[Bot Information]\n  `\n}]; \n')))}d.isMDXComponent=!0}}]);