"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(r),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(k,c(c({ref:t},u),{},{components:r})):n.createElement(k,c({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>x,frontMatter:()=>k,metadata:()=>h,toc:()=>f});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,c(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const k={title:"$color",description:"$color changera la couleur d'un embed.",id:"color"},g=void 0,h={unversionedId:"functions/interaction-related/color",id:"version-6.4.0/functions/interaction-related/color",title:"$color",description:"$color changera la couleur d'un embed.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/color.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/color",permalink:"/fr/docs/functions/interaction-related/color",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$color",description:"$color changera la couleur d'un embed.",id:"color"},sidebar:"docs",previous:{title:"$clearReactions",permalink:"/fr/docs/functions/interaction-related/clearReactions"},next:{title:"$createApplicationCommand",permalink:"/fr/docs/functions/interaction-related/createApplicationCommand"}},b={},f=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],N={toc:f},y="wrapper";function x(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(y,m(s(s({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$color")," changera la couleur d'un embed"),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$color[index?;hex]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"index?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'index de l'embed."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"hex"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"La couleur hexad\xe9cimale ou le nom de la couleur (noms de couleurs support\xe9s ci-dessous)."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",null," Couleurs des embeds ")),(0,n.kt)("p",null,(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/000000/000000.png",alt:"c"}))," Default ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/FFFFFF/FFFFFF.png",alt:"c"}))," White ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/1ABC9C/1ABC9C.png",alt:"c"}))," Aqua ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/57F287/57F287.png",alt:"c"}))," Green ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/3498DB/3498DB.png",alt:"c"}))," Blue ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/FFFF00/FFFF00.png",alt:"c"}))," Yellow ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/9B59B6/9B59B6.png",alt:"c"}))," Purple ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/E91E63/E91E63.png",alt:"c"}))," LuminousVividPink ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/EB459E/EB459E.png",alt:"c"}))," Fuchsia ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/F1C40F/F1C40F.png",alt:"c"}))," Gold ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/E67E22/E67E22.png",alt:"c"}))," Orange ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/ED4245/ED4245.png",alt:"c"}))," Red ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/95A5A6/95A5A6.png",alt:"c"}))," Grey ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/34495E/34495E.png",alt:"c"}))," Navy ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/11806A/11806A.png",alt:"c"}))," DarkAqua ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/1F8B4C/1F8B4C.png",alt:"c"}))," DarkGreen ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/206694/206694.png",alt:"c"}))," DarkBlue ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/71368A/71368A.png",alt:"c"}))," DarkPurple ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/AD1457/AD1457.png",alt:"c"}))," DarkVividPink ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/C27C0E/C27C0E.png",alt:"c"}))," DarkGold ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/A84300/A84300.png",alt:"c"}))," DarkOrange ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/992D22/992D22.png",alt:"c"}))," DarkRed ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/979C9F/979C9F.png",alt:"c"}))," DarkGrey ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/7F8C8D/7F8C8D.png",alt:"c"}))," DarkerGrey ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/BCC0C0/BCC0C0.png",alt:"c"}))," LightGrey ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/2C3E50/2C3E50.png",alt:"c"}))," DarkNavy ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/5865F2/5865F2.png",alt:"c"}))," Blurple ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/99AAB5/99AAB5.png",alt:"c"}))," Greyple ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/2C2F33/2C2F33.png",alt:"c"}))," DarkButNotBlack ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/23272A/23272A.png",alt:"c"}))," NotQuiteBlack ",(0,n.kt)("br",null)," ",(0,n.kt)("img",s({parentName:"p"},{src:"https://placehold.co/15x15/000000/000000.png",alt:"c"}))," Random")),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera un embed rouge :"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'color',\n    code: `\n  $description[Quelle belle couleur !]\n  $color[Red]\n  `\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'color',\n    code: `\n  $description[Quelle belle couleur !]\n  $color[ED4245]\n  `\n});\n")))}x.isMDXComponent=!0}}]);