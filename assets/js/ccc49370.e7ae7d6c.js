"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{48166:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(86010),l=n(10833),i=n(35281),o=n(39058),c=n(51860),s=n(87462),u=n(95999),m=n(32244);function d(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(m.Z,(0,s.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(m.Z,(0,s.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var f=n(39407);function v(e){var t,n=e.content,r=n.assets,i=n.metadata,o=i.title,c=i.description,s=i.date,u=i.tags,m=i.authors,d=i.frontMatter,f=d.keywords,v=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:o,description:c,keywords:f,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}function g(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,i=l.nextItem,s=l.prevItem,u=l.frontMatter,m=u.hide_table_of_contents,v=u.toc_min_heading_level,g=u.toc_max_heading_level;return a.createElement(o.Z,{sidebar:n,toc:!m&&t.toc&&t.toc.length>0?a.createElement(f.default,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g}):void 0},a.createElement(c.Z,{frontMatter:u,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(i||s)&&a.createElement(d,{nextItem:i,prevItem:s}))}function p(e){return a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(v,e),a.createElement(g,e))}},39407:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),o=n(38011),c="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},38011:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(63366),l=n(67294),i=n(86668),o=n(39665),c=n(96841);function s(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var u=l.memo(s),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function d(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,f=void 0===d?"table-of-contents__link":d,v=e.linkActiveClassName,g=void 0===v?void 0:v,p=e.minHeadingLevel,h=e.maxHeadingLevel,b=(0,r.Z)(e,m),L=(0,i.L)(),E=null!=p?p:L.tableOfContents.minHeadingLevel,H=null!=h?h:L.tableOfContents.maxHeadingLevel,N=(0,o.b)({toc:t,minHeadingLevel:E,maxHeadingLevel:H}),x=(0,l.useMemo)((function(){if(f&&g)return{linkClassName:f,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:H}}),[f,g,E,H]);return(0,c.S)(x),l.createElement(u,(0,a.Z)({toc:N,className:s,linkClassName:f},b))}},96841:function(e,t,n){n.d(t,{S:function(){return c}});var a=n(67294),r=n(86668);function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function i(e,t){var n,a,r=t.anchorTopOffset,i=e.find((function(e){return l(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function o(){var e=(0,a.useRef)(0),t=(0,r.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){var t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=i(c,{anchorTopOffset:n.current}),u=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}},39665:function(e,t,n){n.d(t,{a:function(){return o},b:function(){return s}});var a=n(63366),r=n(67294),l=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.Z)(e,l);n>=0?t[n].children.push(i):r.push(i)})),r}function o(e){return(0,r.useMemo)((function(){return i(e)}),[e])}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}}}]);