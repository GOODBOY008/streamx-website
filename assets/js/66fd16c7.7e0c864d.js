"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[7992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),k=a,m=s["".concat(c,".").concat(k)]||s[k]||u[k]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"ExternalLink",title:"External Link Management",sidebar_position:9},o=void 0,l={unversionedId:"user-guide/ExternalLink",id:"user-guide/ExternalLink",title:"External Link Management",description:"Background",source:"@site/docs/user-guide/9-ExternalLink.md",sourceDirName:"user-guide",slug:"/user-guide/ExternalLink",permalink:"/docs/user-guide/ExternalLink",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/9-ExternalLink.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"ExternalLink",title:"External Link Management",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Yarn Queue Management",permalink:"/docs/user-guide/YarnQueueManagement"},next:{title:"SSO Integration",permalink:"/docs/user-guide/SSO"}},c={},d=[{value:"Background",id:"background",level:2},{value:"How to create the external link",id:"how-to-create-the-external-link",level:2},{value:"Where can see the external link",id:"where-can-see-the-external-link",level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"In production practice, in order to manage the Flink job properly, there is always a need to integrate it with external services, such as code repository, metrics monitoring page, real time logging, or checkpoint/savepoint folder on HDFS/OSS, etc. "),(0,a.kt)("p",null,"Streampark, as an one-stop Flink DevOps platform, will bring more values to user, if it can provide the capability of integrating those services in form of dynamic link, which can be defined in centeralised place, and applied to each Flink job automatically."),(0,a.kt)("h2",{id:"how-to-create-the-external-link"},"How to create the external link"),(0,a.kt)("p",null,"Login as system admin, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," module, and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"External Link")," from the navigation bar. From the listing page, you are able to click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add New")," button and create new entry."),(0,a.kt)("img",{src:"/doc/image/external-link/external-link-detail.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"In the detail page, each link consists of label(optional), name, color and link. And they can make a clickable badge together. Color can be either chosen from the ",(0,a.kt)("inlineCode",{parentName:"p"},"color picker"),", or just click the samples on the right side to follow the pattern, and after that you can preview the badge immediately. And last but not least, the link can be definded with placeholder, including ",(0,a.kt)("inlineCode",{parentName:"p"},"job_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"job_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn_id"),", all of that can be replaced with real values, and become a clickable badge when the Flink Job is spinned up."),(0,a.kt)("h2",{id:"where-can-see-the-external-link"},"Where can see the external link"),(0,a.kt)("p",null,"After the Flink job starts, you can go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," module, and click the Flink job from the list page. After that, all the defined badges will be displayed on the top of the detail page, and upon click, request will be redirected to desired external service page."),(0,a.kt)("img",{src:"/doc/image/external-link/badge.png"}),(0,a.kt)("br",null))}s.isMDXComponent=!0}}]);