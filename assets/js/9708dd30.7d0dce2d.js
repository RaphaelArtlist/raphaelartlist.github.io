"use strict";(self.webpackChunkbilling_docs=self.webpackChunkbilling_docs||[]).push([[35],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(r),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8559:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},c="Create a Page",p={unversionedId:"billing-engine/overview",id:"billing-engine/overview",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/billing-engine/overview.md",sourceDirName:"billing-engine",slug:"/billing-engine/overview",permalink:"/docs/billing-engine/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/billing-engine/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/benefit-system/overview"},next:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"}},s=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[],level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[],level:2}],u={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-page"},"Create a Page"),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,o.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,o.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,o.kt)("p",null,"Create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,o.kt)("p",null,"A new page is now available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),(0,o.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,o.kt)("p",null,"Create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,o.kt)("p",null,"A new page is now available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}g.isMDXComponent=!0}}]);