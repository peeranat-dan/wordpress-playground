"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9576],{1828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(11),i=(n(2735),n(9530));const o={title:"Using Blueprints"},a=void 0,s={unversionedId:"blueprints-api/using-blueprints",id:"blueprints-api/using-blueprints",title:"Using Blueprints",description:"Using Blueprints",source:"@site/docs/09-blueprints-api/02-using-blueprints.md",sourceDirName:"09-blueprints-api",slug:"/blueprints-api/using-blueprints",permalink:"/wordpress-playground/docs/blueprints-api/using-blueprints",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/09-blueprints-api/02-using-blueprints.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using Blueprints"},sidebar:"tutorialSidebar",previous:{title:"Blueprint data Format",permalink:"/wordpress-playground/docs/blueprints-api/data-format"},next:{title:"Resources",permalink:"/wordpress-playground/docs/blueprints-api/resources"}},p={},l=[{value:"Using Blueprints",id:"using-blueprints",level:2},{value:"URL Fragment",id:"url-fragment",level:3},{value:"JavaScript API",id:"javascript-api",level:3}],u=(c="BlueprintExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const d={toc:l},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-blueprints"},"Using Blueprints"),(0,i.kt)("p",null,"You can use Blueprints in one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By passing them as a URL fragment to the Playground."),(0,i.kt)("li",{parentName:"ul"},"By using the JavaScript API.")),(0,i.kt)("h3",{id:"url-fragment"},"URL Fragment"),(0,i.kt)("p",null,'The easiest way to start using Blueprints is to paste one into the URL "fragment" on WordPress Playground website, e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},'https://playground.wordpress.net/#{"preferredVersions...'),"."),(0,i.kt)("p",null,"For example, to create a Playground with specific versions of WordPress and PHP you would use the following Blueprint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "preferredVersions": {\n        "php": "7.4",\n        "wp": "5.9"\n    }\n}\n')),(0,i.kt)("p",null,"And then you would go to\n",(0,i.kt)("inlineCode",{parentName:"p"},'https://playground.wordpress.net/#{"preferredVersions": {"php":"7.4", "wp":"5.9"}}'),"."),(0,i.kt)("p",null,"You won't have to paste links to follow along. We'll use code examples with a \"Try it out\" button that will automatically run the examples for you:"),(0,i.kt)(u,{justButton:!0,blueprint:{preferredVersions:{php:"7.4",wp:"5.9"}},mdxType:"BlueprintExample"}),(0,i.kt)("h3",{id:"javascript-api"},"JavaScript API"),(0,i.kt)("p",null,"You can also use Blueprints with the JavaScript API using the ",(0,i.kt)("inlineCode",{parentName:"p"},"startPlaygroundWeb()")," function from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@wp-playground/client")," package. Here's a small, self-contained example you can run on JSFiddle or CodePen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<iframe id=\"wp\" style=\"width: 1200px; height: 800px\"></iframe>\n<script type=\"module\">\n    import { startPlaygroundWeb } from 'https://unpkg.com/@wp-playground/client/index.js';\n\n    const client = await startPlaygroundWeb({\n        iframe,\n        remoteUrl: `https://playground.wordpress.net/remote.html`,\n        blueprint: {\n            landingPage: '/wp-admin/',\n            preferredVersions: {\n                php: '8.0',\n                wp: 'latest',\n            },\n            steps: [\n                {\n                    step: 'login',\n                    username: 'admin',\n                    password: 'password',\n                },\n                {\n                    step: 'installPlugin',\n                    pluginZipFile: {\n                        resource: 'wordpress.org/plugins',\n                        slug: 'friends',\n                    },\n                },\n            ],\n        },\n    });\n\n    const response = await client.run({\n        code: '<?php echo \"Hi!\"; ',\n    });\n    console.log(response.text);\n<\/script>\n")))}m.isMDXComponent=!0},9530:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2735);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=i,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);