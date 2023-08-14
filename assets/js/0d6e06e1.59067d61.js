"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>N,frontMatter:()=>g,metadata:()=>f,toc:()=>w});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$globalCooldown",description:"$globalCooldown will set a global-based cooldown for a command.",id:"globalCooldown"},b=void 0,f={unversionedId:"functions/variables-related/globalCooldown",id:"version-6.4.0/functions/variables-related/globalCooldown",title:"$globalCooldown",description:"$globalCooldown will set a global-based cooldown for a command.",source:"@site/versioned_docs/version-6.4.0/functions/variables-related/globalCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/globalCooldown",permalink:"/docs/functions/variables-related/globalCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"$globalCooldown",description:"$globalCooldown will set a global-based cooldown for a command.",id:"globalCooldown"},sidebar:"docs",previous:{title:"$getVar",permalink:"/docs/functions/variables-related/getVar"},next:{title:"$globalUserLeaderBoard",permalink:"/docs/functions/variables-related/globalUserLeaderBoard"}},k={},w=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:w},y="wrapper";function N(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(y,m(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$globalCooldown")," will set a global-based cooldown for a command."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$globalCooldown[time;errorMessage]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,r.kt)("inlineCode",{parentName:"li"},"$globalCooldown")," function by using ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the\nfollowing below.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"time"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The duration of the cooldown."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"errorMessage"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Error message given when there's remaining time of the cooldown."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello")," and stop anyone from executing the command again for another five minutes:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'globalCooldown',\n    code: `\n  Hello\n  $globalCooldown[5m;Please wait %time% to execute this command again.]\n  `\n});\n")))}N.isMDXComponent=!0}}]);