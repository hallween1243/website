"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36247],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return n?t.createElement(m,o(o({ref:r},c),{},{components:n})):t.createElement(m,o({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10636:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>w,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var t=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))i.call(r,n)&&c(e,n,r[n]);if(s)for(var n of s(r))p.call(r,n)&&c(e,n,r[n]);return e},u=(e,r)=>l(e,o(r)),f=(e,r)=>{var n={};for(var t in e)i.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))r.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n};const m={title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",id:"respawnAllShards"},w=void 0,y={unversionedId:"functions/interaction-related/respawnAllShards",id:"version-6.4.0/functions/interaction-related/respawnAllShards",title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/respawnAllShards.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/respawnAllShards",permalink:"/ru/docs/functions/interaction-related/respawnAllShards",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",id:"respawnAllShards"},sidebar:"docs",previous:{title:"$reply",permalink:"/ru/docs/functions/interaction-related/reply"},next:{title:"$sendDm",permalink:"/ru/docs/functions/interaction-related/sendDm"}},h={},v=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:v},O="wrapper";function g(e){var r=e,{components:n}=r,a=f(r,["components"]);return(0,t.kt)(O,u(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$respawnAllShards")," will respawn all shards. (requires sharding)"),(0,t.kt)("h2",d({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$respawnAllShards\n")),(0,t.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,t.kt)("p",null,"This will respawn all shards (requires sharding):"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'respawnAllShards',\n    code: `\n   $respawnAllShards\n  `\n});\n")))}g.isMDXComponent=!0}}]);