"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[5316],{571:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(11),o=(t(2735),t(9530));const a={},s="Browser tab orchestrates the execution",i={unversionedId:"architecture/browser-tab-orchestrates-execution",id:"architecture/browser-tab-orchestrates-execution",title:"Browser tab orchestrates the execution",description:"The main index.html ties the entire application together. It starts all the concurrent processes and displays the PHP responses. The app only lives as long as the main index.html.",source:"@site/docs/11-architecture/09-browser-tab-orchestrates-execution.md",sourceDirName:"11-architecture",slug:"/architecture/browser-tab-orchestrates-execution",permalink:"/wordpress-playground/docs/architecture/browser-tab-orchestrates-execution",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/11-architecture/09-browser-tab-orchestrates-execution.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running PHP apps in the browser with ServiceWorkers and Worker Threads",permalink:"/wordpress-playground/docs/architecture/browser-concepts"},next:{title:"Iframe-based rendering",permalink:"/wordpress-playground/docs/architecture/browser-iframe-rendering"}},p={},c=[{value:"Boot sequence",id:"boot-sequence",level:2},{value:"Data flow",id:"data-flow",level:3}],l={toc:c},u="wrapper";function h(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browser-tab-orchestrates-the-execution"},"Browser tab orchestrates the execution"),(0,o.kt)("p",null,"The main ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," ties the entire application together. It starts all the concurrent processes and displays the PHP responses. The app only lives as long as the main ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,o.kt)("p",null,"Keep this point in mind as you read through the rest of the docs. At this point it may seem obvious, by the lines may get blurry later on. This package runs code outside of the browser tab using Web Workers, Service Workers, and, in the future, Shared Workers. Some of these workers may keep running even after the browser tab with ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," is closed."),(0,o.kt)("h2",{id:"boot-sequence"},"Boot sequence"),(0,o.kt)("p",null,"Here's what a boot sequence for a minimal app looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wordpress/wordpress-playground/trunk/pages/boot-sequence.png",alt:"The boot sequence"})),(0,o.kt)("p",null,"The main app initiates the Iframe, the Service Worker, and the Worker Thread. Note how the main app doesn't use the PHP stack directly \u2013 it's all handled in the Worker Thread."),(0,o.kt)("p",null,"Here's what that boot sequence looks like in code:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/index.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<script src="/app.ts"><\/script>\n<iframe id="my-app"></iframe>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/app.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { consumeAPI, PHPClient, recommendedWorkerBackend, registerServiceWorker, spawnPHPWorkerThread } from '@php-wasm/web';\n\nconst workerUrl = '/worker-thread.js';\n\nexport async function startApp() {\n    const phpClient = consumeAPI<PlaygroundWorkerEndpoint>(\n        await spawnPHPWorkerThread(\n            workerUrl, // Valid Worker script URL\n            recommendedWorkerBackend, // \"webworker\" or \"iframe\", see the docstring\n            {\n                wpVersion: 'latest',\n                phpVersion: '7.4', // Startup options\n            }\n        )\n    );\n\n    // Await the two-way communication channel\n    await phpClient.isReady();\n\n    // Must point to a valid Service Worker script:\n    await registerServiceWorker(\n        phpClient,\n        'default', // PHP instance scope, keep reading to learn more.\n        '/sw.js', // Valid Service Worker script URL.\n        '1' // Service worker version, used for reloading the script.\n    );\n\n    // Create a few PHP files to browse:\n    await workerThread.writeFile('/index.php', '<a href=\"page.php\">Go to page.php</a>');\n    await workerThread.writeFile('/page.php', '<?php echo \"Hello from PHP!\"; ?>');\n\n    // Navigate to index.php:\n    document.getElementById('my-app').src = playground.pathToInternalUrl('/index.php');\n}\nstartApp();\n")),(0,o.kt)("p",null,"Keep reading to learn how all these pieces fit together."),(0,o.kt)("h3",{id:"data-flow"},"Data flow"),(0,o.kt)("p",null,"Here's what happens whenever the iframe issues a same-domain request:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wordpress/wordpress-playground/trunk/pages/data-flow.png",alt:"The data flow"})),(0,o.kt)("p",null,"A step-by-step breakown:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The request is intercepted by the Service Worker"),(0,o.kt)("li",{parentName:"ol"},"The Service Worker passes it to the Worker Thread"),(0,o.kt)("li",{parentName:"ol"},"The Worker Thread calls ",(0,o.kt)("inlineCode",{parentName:"li"},"PHP.request")," to convert that request to a response"),(0,o.kt)("li",{parentName:"ol"},"The Worker Thread passes the response to the Service Worker"),(0,o.kt)("li",{parentName:"ol"},"The Service Worker provides the browser with a response")),(0,o.kt)("p",null,"At this point, if the request was triggered by user clicking on a link, the browser will render PHPRequestHandler's response inside the iframe."))}h.isMDXComponent=!0},9530:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(2735);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);