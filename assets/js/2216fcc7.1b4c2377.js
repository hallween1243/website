"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"$replaceText",description:'Replaces "sample" to "new" from "text"'},l=void 0,i={unversionedId:"functions/replacetext",id:"version-5.5.5/functions/replacetext",title:"$replaceText",description:'Replaces "sample" to "new" from "text"',source:"@site/versioned_docs/version-5.5.5/functions/replacetext.md",sourceDirName:"functions",slug:"/functions/replacetext",permalink:"/docs/5.5.5/functions/replacetext",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689004686,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$replaceText",description:'Replaces "sample" to "new" from "text"'},sidebar:"docs",previous:{title:"$repeatMessage",permalink:"/docs/5.5.5/functions/repeatmessage"},next:{title:"$replaceTextWithRegex",permalink:"/docs/5.5.5/functions/replacetextwithregex"}},p={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows you to replace text from the given text"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 3 required fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Sample ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"New ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"How Many ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText[text;sample;new;howMany (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Text - The text in general"),(0,a.kt)("li",{parentName:"ul"},"Sample - The text that's being replaced"),(0,a.kt)("li",{parentName:"ul"},"New - The text that is replacing ","<","sample",">"),(0,a.kt)("li",{parentName:"ul"},"How Many - How many times the text is being replaced")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Without optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "replacetext",\ncode: `$replaceText[Hi Bye;Bye;Goodbye]`\n})\n// Returns: Hi Goodbye\n')),(0,a.kt)("p",null,"With optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "replacetext",\ncode: `$replaceText[Hi Bye Bye;Bye;Goodbye;1]`\n})\n// Returns: Hi Goodbye Bye\n')))}d.isMDXComponent=!0}}]);