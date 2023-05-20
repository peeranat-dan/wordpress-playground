(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7247],{7360:(e,s,o)=>{"use strict";o.r(s),o.d(s,{assets:()=>w,contentTitle:()=>h,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var t=o(11),r=(o(2735),o(9530)),n=o(776),a=o(8005),i=o(9539),p=o.n(i);const d={toc:[]},l="wrapper";function u(e){let{components:s,...o}=e;return(0,r.kt)(l,(0,t.Z)({},d,o,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wp-now")," is a CLI tool that allows you to quickly spin up a WordPress site with a single command. Similarly to the VS Code extension, it uses a portable WebAssembly version of PHP and SQLite. No Docker, MySQL, or Apache is required."),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"wp-now")," directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @wp-now/wp-now\ncd wordpress-plugin-or-theme\nwp-now start\n")))}u.isMDXComponent=!0;const c={title:"Usage in Node.js",slug:"/usage-in-node-js"},h="Using WordPress Playground in Node.js",m={unversionedId:"nodejs/index",id:"nodejs/index",title:"Usage in Node.js",description:"As a WebAssembly project, WordPress Playground can also be used in Node.js. Here's how you can do it:",source:"@site/docs/04-nodejs/01-index.md",sourceDirName:"04-nodejs",slug:"/usage-in-node-js",permalink:"/wordpress-playground/docs/usage-in-node-js",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/04-nodejs/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Usage in Node.js",slug:"/usage-in-node-js"},sidebar:"tutorialSidebar",previous:{title:"Build your first app",permalink:"/wordpress-playground/docs/build-your-first-app"},next:{title:"APIs overview",permalink:"/wordpress-playground/docs/apis-overview"}},w={},g=[{value:"Start a zero-setup dev environment via VScode extension",id:"start-a-zero-setup-dev-environment-via-vscode-extension",level:2},{value:"Run WordPress via the <code>wp-now</code> CLI tool",id:"run-wordpress-via-the-wp-now-cli-tool",level:2},{value:"Build an app with Playground npm packages",id:"build-an-app-with-playground-npm-packages",level:2},{value:"Use <code>wp-now</code> as a library",id:"use-wp-now-as-a-library",level:3},{value:"Use JSON Blueprints for Node.js",id:"use-json-blueprints-for-nodejs",level:3},{value:"Work directly with WebAssembly PHP for Node.js",id:"work-directly-with-webassembly-php-for-nodejs",level:3}],y={toc:g},k="wrapper";function b(e){let{components:s,...o}=e;return(0,r.kt)(k,(0,t.Z)({},y,o,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-wordpress-playground-in-nodejs"},"Using WordPress Playground in Node.js"),(0,r.kt)("p",null,"As a WebAssembly project, WordPress Playground can also be used in Node.js. Here's how you can do it:"),(0,r.kt)(n.Z,{toc:g,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"start-a-zero-setup-dev-environment-via-vscode-extension"},"Start a zero-setup dev environment via VScode extension"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=WordPress.wordpress-playground"},"VScode extension")," to develop your plugin or theme locally without installing Apache or MySQL."),(0,r.kt)("p",null,'The extension ships with a portable WebAssembly version of PHP and sets up WordPress to use SQLite. All you have to do is click the "Start WordPress Server" button in VScode:'),(0,r.kt)("div",{style:{maxWidth:350}},(0,r.kt)(a.Z,{img:p(),mdxType:"Image"})),(0,r.kt)("h2",{id:"run-wordpress-via-the-wp-now-cli-tool"},"Run WordPress via the ",(0,r.kt)("inlineCode",{parentName:"h2"},"wp-now")," CLI tool"),(0,r.kt)(u,{mdxType:"WPNowOverview"}),(0,r.kt)("h2",{id:"build-an-app-with-playground-npm-packages"},"Build an app with Playground npm packages"),(0,r.kt)("p",null,"WordPress Playground ships with a set of npm packages that you can use to build your own tools on top of it."),(0,r.kt)("h3",{id:"use-wp-now-as-a-library"},"Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"wp-now")," as a library"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://npmjs.org/@wp-now/wp-now"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"@wp-now/wp-now")," package")," is not only a CLI tool but also a library providing tools for serving WordPress, setting up the SQLite support, and many more. It is a great package to use when you want to get started with WordPress Playground in Node.js."),(0,r.kt)("h3",{id:"use-json-blueprints-for-nodejs"},"Use JSON Blueprints for Node.js"),(0,r.kt)("p",null,"You can control the WebAssembly PHP using the same ",(0,r.kt)("a",{parentName:"p",href:"/wordpress-playground/docs/blueprints-api/index"},"JSON Blueprints")," as in the web version. ",(0,r.kt)("a",{parentName:"p",href:"/wordpress-playground/docs/blueprints-api/isomorphic"},"They're isomorphic"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.org/@wp-playground/blueprints"},(0,r.kt)("inlineCode",{parentName:"a"},"@wp-playground/blueprints"))," package can run Blueprints and exposes many useful helpers you can use in your code. See ",(0,r.kt)("a",{parentName:"p",href:"/wordpress-playground/docs/blueprints-api/index"},"Getting Started with Blueprints")," to learn more."),(0,r.kt)("h3",{id:"work-directly-with-webassembly-php-for-nodejs"},"Work directly with WebAssembly PHP for Node.js"),(0,r.kt)("p",null,"And if you need a low-level control over the underlying WebAssembly PHP build, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.org/@php-wasm/node"},(0,r.kt)("inlineCode",{parentName:"a"},"@php-wasm/node")," package")," which ships the PHP WebAssembly runtime. This package is at the core of all WordPress Playground tools for Node.js."))}b.isMDXComponent=!0},9539:(e,s,o)=>{e.exports={src:{srcSet:o.p+"assets/ideal-img/start-wordpress-server.3a1b71b.640.png 640w,"+o.p+"assets/ideal-img/start-wordpress-server.7167f0d.1030.png 1030w",images:[{path:o.p+"assets/ideal-img/start-wordpress-server.3a1b71b.640.png",width:640,height:724},{path:o.p+"assets/ideal-img/start-wordpress-server.7167f0d.1030.png",width:1030,height:1166}],src:o.p+"assets/ideal-img/start-wordpress-server.3a1b71b.640.png",toString:function(){return o.p+"assets/ideal-img/start-wordpress-server.3a1b71b.640.png"},placeholder:void 0,width:640,height:724},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA8ElEQVQYlY2Py06EQBBF+Qjo6qYf0A2CvJqRQWdG4jeY6Ke4mM+/hgZi4kYXJ3dRp26qIm4KZNahKIqAcw5SSjDGEMcxtNaQUiBS2sB7j3me0XU92rbFMAyoqgppmoZs2gaRdDXafsA0PcH7EdM0hcXT6YQ8z0NjWT0i0sbAjyOWZcHlZcb18oy35RW32zWcYoyBtQ6RqXoopaCbM8qPO8rPO9z7F1ReQHAKUpZliLRSIGJgJJAot2PBGEEIEVqD+FA34Jw2WLJBCYh+iXXTgROBOAfn/Cd30Vq7ietnx2DNg0N0bm9cN/4l/tVo3fb1N613mBjRAJeFAAAAAElFTkSuQmCC"}}}]);