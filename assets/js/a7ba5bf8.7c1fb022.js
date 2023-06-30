"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67886],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(o),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<l;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},48450:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const l={title:"$resolveColor"},i=void 0,a={unversionedId:"functions/resolvecolor",id:"version-5.5.5/functions/resolvecolor",title:"$resolveColor",description:"This function converts rgb color into hex or color number.",source:"@site/versioned_docs/version-5.5.5/functions/resolvecolor.md",sourceDirName:"functions",slug:"/functions/resolvecolor",permalink:"/docs/5.5.5/functions/resolvecolor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688131444,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{title:"$resolveColor"},sidebar:"docs",previous:{title:"$resetVar",permalink:"/docs/5.5.5/functions/resetvar"},next:{title:"$resolveEmojiID",permalink:"/docs/5.5.5/functions/resolveemojiid"}},c={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage without optional field",id:"usage-without-optional-field",level:4},{value:"Usage with optional field",id:"usage-with-optional-field",level:4}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function converts rgb color into hex or color number."),(0,n.kt)("h4",{id:"fields"},"Fields"),(0,n.kt)("p",null,"This function has 3 required fields."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Red ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Green ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Blue ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"toHex ","(","Optional",")")),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$resolveColor[Red; Green; Blue;toHex (optional) (yes/no)]")),(0,n.kt)("h4",{id:"options"},"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Red - Amount of red into the color"),(0,n.kt)("li",{parentName:"ul"},"Green - Amount of green into the color"),(0,n.kt)("li",{parentName:"ul"},"Blue - Amount of blue into the color"),(0,n.kt)("li",{parentName:"ul"},"toHex - If the bot should convert it to hex or return the color number.")),(0,n.kt)("h4",{id:"usage-without-optional-field"},"Usage without optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "color",\n    code: `Pink color number is: $resolveColor[255;192;203]`\n})\n')),(0,n.kt)("h4",{id:"usage-with-optional-field"},"Usage with optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "hex",\n    code: `Pink color hex is: $resolveColor[255;192;203;yes]`\n})\n')))}d.isMDXComponent=!0}}]);