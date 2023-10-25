"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,h=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const i={id:"submit_code",title:"Submit Code",sidebar_position:2},o=void 0,l={unversionedId:"submit_guide/submit_code",id:"submit_guide/submit_code",title:"Submit Code",description:"\x3c!--",source:"@site/community/submit_guide/submit-code.md",sourceDirName:"submit_guide",slug:"/submit_guide/submit_code",permalink:"/community/submit_guide/submit_code",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"submit_code",title:"Submit Code",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Documentation Notice",permalink:"/community/submit_guide/document"},next:{title:"Code style and quality guide",permalink:"/community/submit_guide/code_style_and_quality_guide"}},p={},m=[],u={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"First from the remote repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampark.git"},"https://github.com/apache/incubator-streampark.git")," fork a copy of the code into your own repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There are currently three branches in the remote repository:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"dev"),"   daily development branch"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Every day dev development branch, newly submitted code can pull request to this branch."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"1.0.0-release")," release version branch"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The release version branch, there will be 2.0...and other version branches in the future."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clone your repository to your local"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"    git clone git@github.com:apache/incubator-streampark.git\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add remote repository address, named upstream")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"  git remote add upstream git@github.com:apache/incubator-streampark.git\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"View repository")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"  git remote -v\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"At this time, there will be two repositories: origin (your own repository) and upstream (remote repository)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get/Update remote repository code"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch upstream\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Synchronize remote repository code to local repository"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout origin/dev\ngit merge --no-ff upstream/dev\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If remote branch has a new branch such as ",(0,n.kt)("inlineCode",{parentName:"p"},"dev-1.0"),", you need to synchronize this branch to the local repository"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b dev-1.0 upstream/dev-1.0\ngit push --set-upstream origin dev-1.0\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After modifying the code locally, submit it to your own repository:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git commit -m 'commit content'\ngit push\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Submit changes to the remote repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'On the github page, click "New pull request".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select the modified local branch and the branch you want to merge with the past, click "Create pull request".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Then the community Committers will do CodeReview, and then he will discuss some details (including design, implementation, performance, etc.) with you. When everyone on the team is satisfied with this modification, the commit will be merged into the dev branch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally, congratulations, you have become an official contributor to StreamPark !"))))}c.isMDXComponent=!0}}]);