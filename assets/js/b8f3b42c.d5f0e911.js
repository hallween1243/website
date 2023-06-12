"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"$filterMessage",description:"Removes specified value from specified text"},o=void 0,l={unversionedId:"functions/filtermessage",id:"version-5.5.5/functions/filtermessage",title:"$filterMessage",description:"Removes specified value from specified text",source:"@site/versioned_docs/version-5.5.5/functions/filtermessage.md",sourceDirName:"functions",slug:"/functions/filtermessage",permalink:"/docs/5.5.5/functions/filtermessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686542583,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$filterMessage",description:"Removes specified value from specified text"},sidebar:"docs",previous:{title:"$fileSize",permalink:"/docs/5.5.5/functions/filesize"},next:{title:"$findChannel",permalink:"/docs/5.5.5/functions/findchannel"}},s={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function filters and removes the given value from the given text"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 2 required fields"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Value ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Value 2 ","(","Optional",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$filterMessage[text;value1,value2,...]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Text - The text we're filtering from"),(0,i.kt)("li",{parentName:"ul"},"Value","(","s",")"," - The value","(","s",")"," we're removing the text from")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Filtering 1 word"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus;Aoi.JS]` \n//Removes 'Aoi.JS' from text\n})\n")),(0,i.kt)("p",null,"Filtering multiple words"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus Chiwi ElTuna;Chiwi,ElTuna,Aoi.JS]` \n//Removes 'Kubaturi' and 'Aoi.JS' from text\n})\n")))}p.isMDXComponent=!0}}]);