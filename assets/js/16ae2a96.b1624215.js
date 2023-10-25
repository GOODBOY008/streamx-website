"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5581],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=r.createContext({}),p=function(t){var e=r.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(k.Provider,{value:e},t.children)},o="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,k=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=p(a),u=n,c=o["".concat(k,".").concat(u)]||o[u]||g[u]||l;return a?r.createElement(c,s(s({ref:e},m),{},{components:a})):r.createElement(c,s({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i[o]="string"==typeof t?t:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1659:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={slug:"streampark-usercase-shunwang",title:"StreamPark \u5728\u987a\u7f51\u79d1\u6280\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},s="StreamPark \u5728\u987a\u7f51\u79d1\u6280\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u5b9e\u8df5",i={permalink:"/blog/streampark-usercase-shunwang",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/4-streampark-usercase-shunwang.md",source:"@site/blog/4-streampark-usercase-shunwang.md",title:"StreamPark \u5728\u987a\u7f51\u79d1\u6280\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u5b9e\u8df5",description:"\u5bfc\u8bfb\uff1a\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u987a\u7f51\u79d1\u6280\u5728\u4f7f\u7528 Flink \u8ba1\u7b97\u5f15\u64ce\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u6311\u6218\uff0c\u57fa\u4e8e StreamPark \u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\u5982\u4f55\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u4ece\u800c\u5927\u89c4\u6a21\u652f\u6301\u516c\u53f8\u7684\u4e1a\u52a1\u3002",date:"2023-10-24T15:06:09.000Z",formattedDate:"October 24, 2023",tags:[{label:"StreamPark",permalink:"/blog/tags/stream-park"},{label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/blog/tags/\u751f\u4ea7\u5b9e\u8df5"},{label:"FlinkSQL",permalink:"/blog/tags/flink-sql"}],readingTime:18.56,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"streampark-usercase-shunwang",title:"StreamPark \u5728\u987a\u7f51\u79d1\u6280\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},prevItem:{title:"\u6d77\u7a0b\u90a6\u8fbe\u57fa\u4e8e Apache Paimon + StreamPark \u7684\u6d41\u5f0f\u6570\u4ed3\u5b9e\u8df5",permalink:"/blog/streampark-usercase-bondex-with-paimon"},nextItem:{title:"StreamPark \u5728\u5c18\u950b\u4fe1\u606f\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5316\u7e41\u4e3a\u7b80\u6781\u81f4\u4f53\u9a8c",permalink:"/blog/streampark-usercase-dustess"}},k={authorsImageUrls:[]},p=[{value:"<strong>\u516c\u53f8\u4e1a\u52a1\u4ecb\u7ecd</strong>",id:"\u516c\u53f8\u4e1a\u52a1\u4ecb\u7ecd",level:2},{value:"<strong>\u9047\u5230\u7684\u6311\u6218</strong>",id:"\u9047\u5230\u7684\u6311\u6218",level:2},{value:"<strong>SQL\u5f00\u53d1\u6d41\u7a0b\u7e41\u7410</strong>",id:"sql\u5f00\u53d1\u6d41\u7a0b\u7e41\u7410",level:3},{value:"<strong>SQL-Client \u5b58\u5728\u5f0a\u7aef</strong>",id:"sql-client-\u5b58\u5728\u5f0a\u7aef",level:3},{value:"<strong>\u4f5c\u4e1a\u7f3a\u5c11\u7edf\u4e00\u7ba1\u7406</strong>",id:"\u4f5c\u4e1a\u7f3a\u5c11\u7edf\u4e00\u7ba1\u7406",level:3},{value:"<strong>\u95ee\u9898\u8bca\u65ad\u6d41\u7a0b\u7e41\u7410</strong>",id:"\u95ee\u9898\u8bca\u65ad\u6d41\u7a0b\u7e41\u7410",level:3},{value:"<strong>\u4e3a\u4ec0\u4e48\u7528</strong> <strong>StreamPark</strong>",id:"\u4e3a\u4ec0\u4e48\u7528-streampark",level:2},{value:"01  <strong>StreamPark \u89e3\u51b3 Flink \u95ee\u9898\u7684\u5229\u5668</strong>",id:"01--streampark-\u89e3\u51b3-flink-\u95ee\u9898\u7684\u5229\u5668",level:3},{value:"02  <strong>StreamPark \u89e3\u51b3\u81ea\u7814\u5e73\u53f0\u7684\u95ee\u9898</strong>",id:"02--streampark-\u89e3\u51b3\u81ea\u7814\u5e73\u53f0\u7684\u95ee\u9898",level:3},{value:"\u843d \u5730 \u5b9e \u8df5",id:"\u843d-\u5730-\u5b9e-\u8df5",level:2},{value:"01  <strong>\u7ed3\u5408 Flink-SQL-Gateway \u7684\u80fd\u529b</strong>",id:"01--\u7ed3\u5408-flink-sql-gateway-\u7684\u80fd\u529b",level:3},{value:"02  <strong>\u589e\u5f3a Flink \u96c6\u7fa4\u7ba1\u7406\u80fd\u529b</strong>",id:"02--\u589e\u5f3a-flink-\u96c6\u7fa4\u7ba1\u7406\u80fd\u529b",level:3},{value:"03  <strong>\u589e\u5f3a\u544a\u8b66\u80fd\u529b</strong>",id:"03--\u589e\u5f3a\u544a\u8b66\u80fd\u529b",level:3},{value:"04  <strong>\u589e\u52a0\u963b\u585e\u961f\u5217\u89e3\u51b3\u9650\u6d41\u95ee\u9898</strong>",id:"04--\u589e\u52a0\u963b\u585e\u961f\u5217\u89e3\u51b3\u9650\u6d41\u95ee\u9898",level:3},{value:"\u5e26\u6765\u7684\u6536\u76ca",id:"\u5e26\u6765\u7684\u6536\u76ca",level:2},{value:"\u672a \u6765 \u89c4 \u5212",id:"\u672a-\u6765-\u89c4-\u5212",level:2}],m={toc:p};function o(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9897).Z,width:"1080",height:"460"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5bfc\u8bfb\uff1a"),"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u987a\u7f51\u79d1\u6280\u5728\u4f7f\u7528 Flink \u8ba1\u7b97\u5f15\u64ce\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u6311\u6218\uff0c\u57fa\u4e8e StreamPark \u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\u5982\u4f55\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u4ece\u800c\u5927\u89c4\u6a21\u652f\u6301\u516c\u53f8\u7684\u4e1a\u52a1\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u516c\u53f8\u4e1a\u52a1\u4ecb\u7ecd"),(0,n.kt)("li",{parentName:"ul"},"\u9047\u5230\u7684\u6311\u6218"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u7528 StreamPark"),(0,n.kt)("li",{parentName:"ul"},"\u843d\u5730\u5b9e\u8df5"),(0,n.kt)("li",{parentName:"ul"},"\u5e26\u6765\u7684\u6536\u76ca"),(0,n.kt)("li",{parentName:"ul"},"\u672a\u6765\u89c4\u5212")),(0,n.kt)("h2",{id:"\u516c\u53f8\u4e1a\u52a1\u4ecb\u7ecd"},(0,n.kt)("strong",{parentName:"h2"},"\u516c\u53f8\u4e1a\u52a1\u4ecb\u7ecd")),(0,n.kt)("p",null,"\u676d\u5dde\u987a\u7f51\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8\u6210\u7acb\u4e8e 2005 \u5e74\uff0c\u79c9\u627f\u79d1\u6280\u8fde\u63a5\u5feb\u4e50\u7684\u4f01\u4e1a\u4f7f\u547d\uff0c\u662f\u56fd\u5185\u5177\u6709\u5f71\u54cd\u529b\u7684\u6cdb\u5a31\u4e50\u6280\u672f\u670d\u52a1\u5e73\u53f0\u4e4b\u4e00\u3002\u591a\u5e74\u6765\u516c\u53f8\u59cb\u7ec8\u4ee5\u4ea7\u54c1\u548c\u6280\u672f\u4e3a\u9a71\u52a8\uff0c\u81f4\u529b\u4e8e\u4ee5\u6570\u5b57\u5316\u5e73\u53f0\u670d\u52a1\u4e3a\u4eba\u4eec\u521b\u9020\u6c89\u6d78\u5f0f\u7684\u5168\u573a\u666f\u5a31\u4e50\u4f53\u9a8c\u3002"),(0,n.kt)("p",null,"\u81ea\u987a\u7f51\u79d1\u6280\u6210\u7acb\u4ee5\u6765\uff0c\u968f\u7740\u4e1a\u52a1\u5feb\u901f\u53d1\u5c55\uff0c\u987a\u7f51\u79d1\u6280\u670d\u52a1\u4e86 8 \u4e07\u5bb6\u7ebf\u4e0b\u5b9e\u4f53\u5e97\uff0c\u62e5\u6709\u8d85\u8fc7 5000 \u4e07\u4e92\u8054\u7f51\u7528\u6237\uff0c\u5e74\u89e6\u8fbe\u8d85 1.4 \u4ebf\u7f51\u6c11\uff0c\u6bcf 10 \u5bb6\u516c\u5171\u4e0a\u7f51\u670d\u52a1\u573a\u6240\u6709 7 \u5bb6\u4f7f\u7528\u987a\u7f51\u79d1\u6280\u4ea7\u54c1\u3002"),(0,n.kt)("p",null,"\u5728\u62e5\u6709\u5e9e\u5927\u7684\u7528\u6237\u7fa4\u4f53\u7684\u60c5\u51b5\u4e0b\uff0c\u987a\u7f51\u79d1\u6280\u4e3a\u4e86\u7ed9\u7528\u6237\u63d0\u4f9b\u66f4\u52a0\u4f18\u8d28\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0c\u5b9e\u73b0\u4f01\u4e1a\u7684\u6570\u5b57\u5316\u8f6c\u578b\uff0c\u4ece 2015 \u5e74\u5f00\u59cb\u5927\u529b\u53d1\u5c55\u5927\u6570\u636e\uff0c Flink \u5728\u987a\u7f51\u79d1\u6280\u7684\u5b9e\u65f6\u8ba1\u7b97\u4e2d\u4e00\u76f4\u626e\u6f14\u7740\u91cd\u8981\u7684\u89d2\u8272\u3002\u5728\u987a\u7f51\u79d1\u6280\uff0c\u5b9e\u65f6\u8ba1\u7b97\u5927\u6982\u5206\u4e3a 4 \u4e2a\u5e94\u7528\u573a\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u753b\u50cf\u5b9e\u65f6\u66f4\u65b0\uff1a\u5305\u62ec\u7f51\u5427\u753b\u50cf\u548c\u7f51\u6c11\u753b\u50cf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u98ce\u63a7\uff1a\u5305\u62ec\u6d3b\u52a8\u9632\u5237\u3001\u5f02\u5730\u767b\u5f55\u76d1\u6d4b\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u540c\u6b65\uff1a\u5305\u62ec Kafka \u6570\u636e\u540c\u6b65\u5230 Hive / Iceberg / ClickHouse \u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u6570\u636e\u5206\u6790\uff1a\u5305\u62ec\u6e38\u620f\u3001\u8bed\u97f3\u3001\u5e7f\u544a\u3001\u76f4\u64ad\u7b49\u4e1a\u52a1\u5b9e\u65f6\u5927\u5c4f\u3002")),(0,n.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u987a\u7f51\u79d1\u6280\u6bcf\u65e5\u9700\u8981\u5904\u7406 TB \u7ea7\u522b\u7684\u6570\u636e\uff0c\u603b\u5171\u62e5\u6709 700+ \u4e2a\u5b9e\u65f6\u4efb\u52a1\uff0c\u5176\u4e2d FlinkSQL \u4efb\u52a1\u5360\u6bd4\u4e3a 95% \u4ee5\u4e0a\u3002\u968f\u7740\u516c\u53f8\u4e1a\u52a1\u5feb\u901f\u53d1\u5c55\u548c\u6570\u636e\u65f6\u6548\u6027\u8981\u6c42\u53d8\u9ad8\uff0c\u9884\u8ba1\u5728\u4eca\u5e74\u5e74\u5e95 Flink \u4efb\u52a1\u4f1a\u8fbe\u5230 900+\u3002"),(0,n.kt)("h2",{id:"\u9047\u5230\u7684\u6311\u6218"},(0,n.kt)("strong",{parentName:"h2"},"\u9047\u5230\u7684\u6311\u6218")),(0,n.kt)("p",null,"Flink \u4f5c\u4e3a\u5f53\u4e0b\u5b9e\u65f6\u8ba1\u7b97\u9886\u57df\u4e2d\u6700\u6d41\u884c\u7684\u6280\u672f\u6846\u67b6\u4e4b\u4e00\uff0c\u62e5\u6709\u9ad8\u541e\u5410\u3001\u4f4e\u5ef6\u8fdf\u3001\u6709\u72b6\u6001\u8ba1\u7b97\u7b49\u5f3a\u5927\u7684\u7279\u6027\u3002\u5728\u63a2\u7d22\u4e2d\u6211\u4eec\u53d1\u73b0 Flink \u867d\u7136\u62e5\u6709\u5f3a\u5927\u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u4f46\u662f\u5bf9\u4e8e\u4f5c\u4e1a\u5f00\u53d1\u7ba1\u7406\u548c\u8fd0\u7ef4\u95ee\u9898\uff0c\u793e\u533a\u5e76\u6ca1\u6709\u63d0\u4f9b\u6709\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u5bf9 Flink \u4f5c\u4e1a\u5f00\u53d1\u7ba1\u7406\u4e0a\u9047\u5230\u7684\u4e00\u4e9b\u75db\u70b9\u5927\u6982\u603b\u7ed3\u4e3a 4 \u4e2a\u65b9\u9762\uff0c\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(4860).Z,width:"1080",height:"744"})),(0,n.kt)("p",null,"\u5728\u9762\u5bf9 Flink \u4f5c\u4e1a\u7ba1\u7406\u548c\u8fd0\u7ef4\u4e0a\u7684\u7684\u4e00\u7cfb\u5217\u75db\u70b9\u540e\uff0c\u6211\u4eec\u4e00\u76f4\u5728\u5bfb\u627e\u5408\u9002\u7684\u89e3\u51b3\u65b9\u6848\u6765\u964d\u4f4e\u5f00\u53d1\u540c\u5b66\u4f7f\u7528 Flink \u95e8\u69db\uff0c\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002"),(0,n.kt)("p",null,"\u5728\u6ca1\u6709\u9047\u5230 StreamPark \u4e4b\u524d\uff0c\u6211\u4eec\u8c03\u7814\u4e86\u90e8\u5206\u516c\u53f8\u7684 Flink \u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u53d1\u73b0\u90fd\u662f\u901a\u8fc7\u81ea\u7814\u5b9e\u65f6\u4f5c\u4e1a\u5e73\u53f0\u7684\u65b9\u5f0f\u6765\u5f00\u53d1\u548c\u7ba1\u7406 Flink \u4f5c\u4e1a\u3002\u4e8e\u662f\uff0c\u6211\u4eec\u4e5f\u51b3\u5b9a\u81ea\u7814\u4e00\u5957\u5b9e\u65f6\u8ba1\u7b97\u7ba1\u7406\u5e73\u53f0\uff0c\u6765\u6ee1\u8db3\u4e86\u5f00\u53d1\u540c\u5b66\u5bf9\u4e8e Flink \u4f5c\u4e1a\u7ba1\u7406\u548c\u8fd0\u7ef4\u7684\u57fa\u7840\u9700\u6c42\uff0c\u6211\u4eec\u8fd9\u5957\u5e73\u53f0\u53eb Streaming-Launcher\uff0c\u5927\u4f53\u529f\u80fd\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(3177).Z,width:"1080",height:"670"})),(0,n.kt)("p",null,"\u4f46\u662f\u540e\u7eed\u5f00\u53d1\u540c\u5b66\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0 Streaming-Launcher \u5b58\u5728\u6bd4\u8f83\u591a\u7684\u7f3a\u9677\uff1aFlink \u5f00\u53d1\u6210\u672c\u4f9d\u7136\u8fc7\u9ad8\u3001\u5de5\u4f5c\u6548\u7387\u4f4e\u4e0b\u3001\u95ee\u9898\u6392\u67e5\u56f0\u96be\u3002\u6211\u4eec\u603b\u7ed3\u4e86 Streaming-Launcher \u5b58\u5728\u7684\u7f3a\u9677\uff0c\u5927\u81f4\u5982\u4e0b\uff1a"),(0,n.kt)("h3",{id:"sql\u5f00\u53d1\u6d41\u7a0b\u7e41\u7410"},(0,n.kt)("strong",{parentName:"h3"},"SQL\u5f00\u53d1\u6d41\u7a0b\u7e41\u7410")),(0,n.kt)("p",null,"\u4f5c\u4e1a\u52a1\u5f00\u53d1\u9700\u8981\u591a\u4e2a\u5de5\u5177\u5b8c\u6210\u4e00\u4e2a SQL \u4f5c\u4e1a\u5f00\u53d1\uff0c\u63d0\u9ad8\u4e86\u5f00\u53d1\u540c\u5b66\u7684\u4f7f\u7528\u95e8\u69db\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cc0b1414ed43942e0ef5e9129c2bf817",src:a(1153).Z,width:"1080",height:"229"})),(0,n.kt)("h3",{id:"sql-client-\u5b58\u5728\u5f0a\u7aef"},(0,n.kt)("strong",{parentName:"h3"},"SQL-Client \u5b58\u5728\u5f0a\u7aef")),(0,n.kt)("p",null,"Flink \u63d0\u4f9b\u7684 SQL-Client \u76ee\u524d\u5bf9\u4f5c\u4e1a\u8fd0\u884c\u6a21\u5f0f\u652f\u6301\u4e0a\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u5f0a\u7aef\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(1280).Z,width:"1080",height:"721"})),(0,n.kt)("h3",{id:"\u4f5c\u4e1a\u7f3a\u5c11\u7edf\u4e00\u7ba1\u7406"},(0,n.kt)("strong",{parentName:"h3"},"\u4f5c\u4e1a\u7f3a\u5c11\u7edf\u4e00\u7ba1\u7406")),(0,n.kt)("p",null,"Streaming-Launcher \u4e2d\uff0c\u6ca1\u6709\u63d0\u4f9b\u7edf\u4e00\u7684\u4f5c\u4e1a\u7ba1\u7406\u754c\u9762\u3002\u5f00\u53d1\u540c\u5b66\u65e0\u6cd5\u76f4\u89c2\u7684\u770b\u5230\u4f5c\u4e1a\u8fd0\u884c\u60c5\u51b5\uff0c\u53ea\u80fd\u901a\u8fc7\u544a\u8b66\u4fe1\u606f\u6765\u5224\u65ad\u4f5c\u4e1a\u8fd0\u884c\u60c5\u51b5\uff0c\u8fd9\u5bf9\u5f00\u53d1\u540c\u5b66\u6765\u8bf4\u975e\u5e38\u4e0d\u53cb\u597d\u3002\u5982\u679c\u56e0\u4e3a Yarn \u96c6\u7fa4\u7a33\u5b9a\u6027\u95ee\u9898\u6216\u8005\u7f51\u7edc\u6ce2\u52a8\u7b49\u4e0d\u786e\u5b9a\u56e0\u7d20\uff0c\u4e00\u4e0b\u5b50\u5931\u8d25\u5927\u6279\u91cf\u4efb\u52a1\uff0c\u5728\u5f00\u53d1\u540c\u5b66\u624b\u52a8\u6062\u590d\u4f5c\u4e1a\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f88\u5bb9\u6613\u6f0f\u6062\u590d\u67d0\u4e2a\u4efb\u52a1\u800c\u9020\u6210\u751f\u4ea7\u4e8b\u6545\u3002"),(0,n.kt)("h3",{id:"\u95ee\u9898\u8bca\u65ad\u6d41\u7a0b\u7e41\u7410"},(0,n.kt)("strong",{parentName:"h3"},"\u95ee\u9898\u8bca\u65ad\u6d41\u7a0b\u7e41\u7410")),(0,n.kt)("p",null,"\u4e00\u4e2a\u4f5c\u4e1a\u67e5\u770b\u65e5\u5fd7\u9700\u8981\u901a\u8fc7\u591a\u4e2a\u6b65\u9aa4\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u964d\u4f4e\u4e86\u5f00\u53d1\u540c\u5b66\u5de5\u4f5c\u6548\u7387\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(4479).Z,width:"1080",height:"122"})),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u7528-streampark"},(0,n.kt)("strong",{parentName:"h2"},"\u4e3a\u4ec0\u4e48\u7528")," ",(0,n.kt)("strong",{parentName:"h2"},"StreamPark")),(0,n.kt)("p",null,"\u9762\u5bf9\u81ea\u7814\u5e73\u53f0 Streaming-Launcher \u5b58\u5728\u7684\u7f3a\u9677\uff0c\u6211\u4eec\u4e00\u76f4\u5728\u601d\u8003\u5982\u4f55\u5c06 Flink \u7684\u4f7f\u7528\u95e8\u69db\u964d\u5230\u66f4\u4f4e\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002\u8003\u8651\u5230\u4eba\u5458\u6295\u5165\u6210\u672c\u548c\u65f6\u95f4\u6210\u672c\uff0c\u6211\u4eec\u51b3\u5b9a\u5411\u5f00\u6e90\u793e\u533a\u6c42\u52a9\u5bfb\u627e\u5408\u9002\u7684\u5f00\u6e90\u9879\u76ee\u6765\u5bf9\u6211\u4eec\u7684 Flink \u4efb\u52a1\u8fdb\u884c\u7ba1\u7406\u548c\u8fd0\u7ef4\u3002"),(0,n.kt)("h3",{id:"01--streampark-\u89e3\u51b3-flink-\u95ee\u9898\u7684\u5229\u5668"},"01  ",(0,n.kt)("strong",{parentName:"h3"},"StreamPark \u89e3\u51b3 Flink \u95ee\u9898\u7684\u5229\u5668")),(0,n.kt)("p",null,"\u5f88\u5e78\u8fd0\u5728 2022 \u5e74 6 \u6708\u521d\uff0c\u6211\u4eec\u5728 GitHub \u673a\u7f18\u5de7\u5408\u4e4b\u95f4\u8ba4\u8bc6\u5230\u4e86 StreamPark\uff0c\u6211\u4eec\u6ee1\u6000\u5e0c\u671b\u5730\u5bf9 StreamPark \u8fdb\u884c\u4e86\u521d\u6b65\u7684\u63a2\u7d22\u3002\u53d1\u73b0 StreamPark \u5177\u5907\u7684\u80fd\u529b\u5927\u6982\u5206\u4e3a\u4e09\u5927\u5757\uff1a\u7528\u6237\u6743\u9650\u7ba1\u7406\u3001\u4f5c\u4e1a\u8fd0\u7ef4\u7ba1\u7406\u548c\u5f00\u53d1\u811a\u624b\u67b6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7528\u6237\u6743\u9650\u7ba1\u7406")),(0,n.kt)("p",null,"\u5728 StreamPark \u5e73\u53f0\u4e2d\u4e3a\u4e86\u907f\u514d\u7528\u6237\u6743\u9650\u8fc7\u5927\uff0c\u53d1\u751f\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u8bef\u64cd\u4f5c\uff0c\u5f71\u54cd\u4f5c\u4e1a\u8fd0\u884c\u7a33\u5b9a\u6027\u548c\u73af\u5883\u914d\u7f6e\u7684\u51c6\u786e\u6027\uff0c\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u4e00\u4e9b\u7528\u6237\u6743\u9650\u7ba1\u7406\u529f\u80fd\uff0c\u8fd9\u5bf9\u4f01\u4e1a\u7ea7\u7528\u6237\u6765\u8bf4\uff0c\u975e\u5e38\u6709\u5fc5\u8981\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(8313).Z,width:"1080",height:"721"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u8fd0\u7ef4\u7ba1\u7406")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5728\u5bf9 StreamPark \u505a\u8c03\u7814\u7684\u65f6\u5019\uff0c\u6700\u5173\u6ce8\u7684\u662f StreamPark \u5bf9\u4e8e\u4f5c\u4e1a\u7684\u7ba1\u7406\u7684\u80fd\u529b\u3002"),"StreamPark \u662f\u5426\u6709\u80fd\u529b\u7ba1\u7406\u4f5c\u4e1a\u4e00\u4e2a\u5b8c\u6574\u7684\u751f\u547d\u5468\u671f\uff1a\u4f5c\u4e1a\u5f00\u53d1\u3001\u4f5c\u4e1a\u90e8\u7f72\u3001\u4f5c\u4e1a\u7ba1\u7406\u3001\u95ee\u9898\u8bca\u65ad\u7b49\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5f88\u5e78\u8fd0\uff0cStreamPark \u5728\u8fd9\u4e00\u65b9\u9762\u975e\u5e38\u4f18\u79c0\uff0c\u5bf9\u4e8e\u5f00\u53d1\u540c\u5b66\u6765\u8bf4\u53ea\u9700\u8981\u5173\u6ce8\u4e1a\u52a1\u672c\u8eab\uff0c\u4e0d\u518d\u9700\u8981\u7279\u522b\u5173\u5fc3 Flink \u4f5c\u4e1a\u7ba1\u7406\u548c\u8fd0\u7ef4\u4e0a\u9047\u5230\u7684\u4e00\u7cfb\u5217\u75db\u70b9\u3002"),"\u5728 StreamPark \u4f5c\u4e1a\u5f00\u53d1\u7ba1\u7406\u7ba1\u7406\u4e2d\uff0c\u5927\u81f4\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757\uff1a\u4f5c\u4e1a\u7ba1\u7406\u57fa\u7840\u529f\u80fd\uff0cJar \u4f5c\u4e1a\u7ba1\u7406\uff0cFlinkSQL \u4f5c\u4e1a\u7ba1\u7406\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(6285).Z,width:"1080",height:"542"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u811a\u624b\u67b6")),(0,n.kt)("p",null,"\u901a\u8fc7\u8fdb\u4e00\u6b65\u7684\u7814\u7a76\u53d1\u73b0\uff0cStreamPark \u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u5e73\u53f0\uff0c\u8fd8\u5305\u542b Flink \u4f5c\u4e1a\u5f00\u53d1\u811a\u624b\u67b6, \u5728 StreamPark \u4e2d\uff0c\u9488\u5bf9\u7f16\u5199\u4ee3\u7801\u7684 Flink \u4f5c\u4e1a\uff0c\u63d0\u4f9b\u4e00\u79cd\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5c06\u7a0b\u5e8f\u914d\u7f6e\u6807\u51c6\u5316\uff0c\u63d0\u4f9b\u4e86\u66f4\u4e3a\u7b80\u5355\u7684\u7f16\u7a0b\u6a21\u578b\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5217 Connectors\uff0c\u964d\u4f4e\u4e86 DataStream \u5f00\u53d1\u7684\u95e8\u69db\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(6477).Z,width:"1080",height:"720"})),(0,n.kt)("h3",{id:"02--streampark-\u89e3\u51b3\u81ea\u7814\u5e73\u53f0\u7684\u95ee\u9898"},"02  ",(0,n.kt)("strong",{parentName:"h3"},"StreamPark \u89e3\u51b3\u81ea\u7814\u5e73\u53f0\u7684\u95ee\u9898")),(0,n.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u7b80\u5355\u4ecb\u7ecd\u4e86 StreamPark \u7684\u6838\u5fc3\u80fd\u529b\u3002\u5728\u987a\u7f51\u79d1\u6280\u7684\u6280\u672f\u9009\u578b\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0 StreamPark \u6240\u5177\u5907\u5f3a\u5927\u7684\u529f\u80fd\u4e0d\u4ec5\u5305\u542b\u4e86\u73b0\u6709 Streaming-Launcher \u7684\u57fa\u7840\u529f\u80fd\uff0c\u8fd8\u63d0\u4f9b\u4e86\u66f4\u5b8c\u6574\u7684\u5bf9\u5e94\u65b9\u6848\u89e3\u51b3\u4e86 Streaming-Launcher \u7684\u8bf8\u591a\u4e0d\u8db3\u3002\u5728\u8fd9\u90e8\u5206\uff0c\u7740\u91cd\u4ecb\u7ecd\u4e0b StreamPark \u9488\u5bf9\u6211\u4eec\u81ea\u7814\u5e73\u53f0 Streaming-Launcher \u7684\u4e0d\u8db3\u6240\u63d0\u4f9b\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(6387).Z,width:"1080",height:"720"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Flink \u4f5c\u4e1a\u4e00\u7ad9\u5f0f\u7684\u5f00\u53d1\u80fd\u529b")),(0,n.kt)("p",null,"StreamPark \u4e3a\u4e86\u964d\u4f4e Flink \u4f5c\u4e1a\u5f00\u53d1\u95e8\u69db\uff0c\u63d0\u9ad8\u5f00\u53d1\u540c\u5b66\u5de5\u4f5c\u6548\u7387\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u4e86 FlinkSQL IDE\u3001\u53c2\u6570\u7ba1\u7406\u3001\u4efb\u52a1\u7ba1\u7406\u3001\u4ee3\u7801\u7ba1\u7406\u3001\u4e00\u952e\u7f16\u8bd1\u3001\u4e00\u952e\u4f5c\u4e1a\u4e0a\u4e0b\u7ebf\u7b49\u4f7f\u7528\u7684\u529f\u80fd"),"\u3002\u5728\u8c03\u7814\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0 StreamPark \u96c6\u6210\u7684\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u8fdb\u4e00\u6b65\u63d0\u5347\u5f00\u53d1\u540c\u5b66\u7684\u5de5\u4f5c\u6548\u7387\u3002\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u6765\u8bf4\uff0c\u5f00\u53d1\u540c\u5b66\u4e0d\u9700\u8981\u53bb\u5173\u5fc3 Flink \u4f5c\u4e1a\u7ba1\u7406\u548c\u8fd0\u7ef4\u7684\u96be\u9898\uff0c\u53ea\u8981\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u7684\u5f00\u53d1\u3002\u540c\u65f6\uff0c\u8fd9\u4e9b\u529f\u80fd\u4e5f\u89e3\u51b3\u4e86 Streaming-Launcher \u4e2d SQL \u5f00\u53d1\u6d41\u7a0b\u7e41\u7410\u7684\u75db\u70b9\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(4531).Z,width:"1080",height:"959"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u652f\u6301\u591a\u79cd\u90e8\u7f72\u6a21\u5f0f")),(0,n.kt)("p",null,"\u5728 Streaming-Launcher \u4e2d\uff0c\u7531\u4e8e\u53ea\u652f\u6301 Yarn Session \u6a21\u5f0f\uff0c\u5bf9\u4e8e\u5f00\u53d1\u540c\u5b66\u6765\u8bf4\uff0c\u5176\u5b9e\u975e\u5e38\u4e0d\u7075\u6d3b\u3002StreamPark \u5bf9\u4e8e\u8fd9\u4e00\u65b9\u9762\u4e5f\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684\u89e3\u51b3\u65b9\u6848\u3002",(0,n.kt)("strong",{parentName:"p"},"StreamPark \u5b8c\u6574\u7684\u652f\u6301\u4e86Flink \u7684\u6240\u6709\u90e8\u7f72\u6a21\u5f0f\uff1aRemote\u3001Yarn Per-Job\u3001Yarn Application\u3001Yarn Session\u3001K8s Session\u3001K8s Application**"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u8ba9\u5f00\u53d1\u540c\u5b66\u9488\u5bf9\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u81ea\u7531\u9009\u62e9\u5408\u9002\u7684\u8fd0\u884c\u6a21\u5f0f\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u7edf\u4e00\u7ba1\u7406\u4e2d\u5fc3")),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5f00\u53d1\u540c\u5b66\u6765\u8bf4\uff0c\u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001\u662f\u4ed6\u4eec\u6700\u5173\u5fc3\u7684\u5185\u5bb9\u4e4b\u4e00\u3002\u5728 Streaming-Launcher \u4e2d\u7531\u4e8e\u7f3a\u4e4f\u4f5c\u4e1a\u7edf\u4e00\u7ba1\u7406\u754c\u9762\uff0c\u5f00\u53d1\u540c\u5b66\u53ea\u80fd\u901a\u8fc7\u544a\u8b66\u4fe1\u606f\u548c Yarn \u4e2dApplication \u7684\u72b6\u6001\u4fe1\u606f\u6765\u5224\u65ad\u4efb\u52a1\u72b6\u6001\uff0c\u8fd9\u5bf9\u5f00\u53d1\u540c\u5b66\u6765\u8bf4\u975e\u5e38\u4e0d\u53cb\u597d\u3002StreamPark \u9488\u5bf9\u8fd9\u4e00\u70b9\uff0c\u63d0\u4f9b\u4e86\u4f5c\u4e1a\u7edf\u4e00\u7ba1\u7406\u754c\u9762\uff0c\u53ef\u4ee5\u4e00\u76ee\u4e86\u7136\u67e5\u770b\u5230\u6bcf\u4e2a\u4efb\u52a1\u7684\u8fd0\u884c\u60c5\u51b5\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(2925).Z,width:"1080",height:"572"})),(0,n.kt)("p",null,"\u5728 Streaming-Launcher \u4e2d\uff0c\u5f00\u53d1\u540c\u5b66\u5728\u4f5c\u4e1a\u95ee\u9898\u8bca\u65ad\u7684\u65f6\u5019\uff0c\u9700\u8981\u901a\u8fc7\u591a\u4e2a\u6b65\u9aa4\u624d\u80fd\u5b9a\u4f4d\u4f5c\u4e1a\u8fd0\u884c\u65e5\u5fd7\u3002StreamPark \u63d0\u4f9b\u4e86\u4e00\u952e\u8df3\u8f6c\u529f\u80fd\uff0c\u80fd\u5feb\u901f\u5b9a\u4f4d\u5230\u4f5c\u4e1a\u8fd0\u884c\u65e5\u5fd7\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(1061).Z,width:"1080",height:"575"})),(0,n.kt)("h2",{id:"\u843d-\u5730-\u5b9e-\u8df5"},"\u843d \u5730 \u5b9e \u8df5"),(0,n.kt)("p",null,"\u5728 StreamPark \u5f15\u5165\u987a\u7f51\u79d1\u6280\u65f6\uff0c\u7531\u4e8e\u516c\u53f8\u4e1a\u52a1\u7684\u7279\u70b9\u548c\u5f00\u53d1\u540c\u5b66\u7684\u4e00\u4e9b\u5b9a\u5236\u5316\u9700\u6c42\uff0c\u6211\u4eec\u5bf9 StreamPark \u7684\u529f\u80fd\u505a\u4e86\u4e00\u4e9b\u589e\u52a0\u548c\u4f18\u5316\uff0c\u540c\u65f6\u4e5f\u603b\u7ed3\u4e86\u4e00\u4e9b\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u548c\u5bf9\u5e94\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("h3",{id:"01--\u7ed3\u5408-flink-sql-gateway-\u7684\u80fd\u529b"},"01  ",(0,n.kt)("strong",{parentName:"h3"},"\u7ed3\u5408 Flink-SQL-Gateway \u7684\u80fd\u529b")),(0,n.kt)("p",null,"\u5728\u987a\u7f51\u79d1\u6280\uff0c\u6211\u4eec\u57fa\u4e8e Flink-SQL-Gateway \u81ea\u7814\u4e86 ODPS \u5e73\u53f0\u6765\u65b9\u4fbf\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u7ba1\u7406 Flink \u8868\u7684\u5143\u6570\u636e\u3002\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u5728 ODPS \u4e0a\u5bf9 Flink \u8868\u8fdb\u884c DDL \u64cd\u4f5c\uff0c\u7136\u540e\u5728 StreamPark \u4e0a\u5bf9\u521b\u5efa\u7684 Flink \u8868\u8fdb\u884c\u5206\u6790\u67e5\u8be2\u64cd\u4f5c\u3002\u5728\u6574\u4e2a\u4e1a\u52a1\u5f00\u53d1\u6d41\u7a0b\u4e0a\uff0c\u6211\u4eec\u5bf9 Flink \u8868\u7684\u521b\u5efa\u548c\u5206\u6790\u5b9e\u73b0\u4e86\u89e3\u8026\uff0c\u8ba9\u5f00\u53d1\u6d41\u7a0b\u663e\u5f97\u6bd4\u8f83\u6e05\u6670\u3002"),(0,n.kt)("p",null,"\u5f00\u53d1\u540c\u5b66\u5982\u679c\u60f3\u5728 ODPS \u4e0a\u67e5\u8be2\u5b9e\u65f6\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a Flink SQL \u7684\u8fd0\u884c\u73af\u5883\u3002\u6211\u4eec\u4f7f\u7528 StreamPark \u8fd0\u884c\u4e86\u4e00\u4e2a Yarn Session \u7684 Flink \u73af\u5883\u63d0\u4f9b\u7ed9 ODPS \u505a\u5b9e\u65f6\u67e5\u8be2\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(3238).Z,width:"1080",height:"541"})),(0,n.kt)("p",null,"\u76ee\u524d StreamPark \u793e\u533a\u4e3a\u4e86\u8fdb\u4e00\u6b65\u964d\u4f4e\u5b9e\u65f6\u4f5c\u4e1a\u5f00\u53d1\u95e8\u69db\uff0c\u6b63\u5728\u5bf9\u63a5 Flink-SQL-Gateway\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/streampark/issues/2274"},"https://github.com/apache/streampark/issues/2274")),(0,n.kt)("h3",{id:"02--\u589e\u5f3a-flink-\u96c6\u7fa4\u7ba1\u7406\u80fd\u529b"},"02  ",(0,n.kt)("strong",{parentName:"h3"},"\u589e\u5f3a Flink \u96c6\u7fa4\u7ba1\u7406\u80fd\u529b")),(0,n.kt)("p",null,"\u5728\u987a\u7f51\u79d1\u6280\uff0c\u5b58\u5728\u5927\u91cf\u4ece Kafka \u6570\u636e\u540c\u6b65\u5230 Iceberg / PG / Clickhouse / Hive \u7684\u4f5c\u4e1a\u3002\u8fd9\u4e9b\u4f5c\u4e1a\u9700\u8981\u7684 Yarn \u5bf9\u4e8e\u8d44\u6e90\u8981\u6c42\u548c\u65f6\u6548\u6027\u8981\u6c42\u4e0d\u9ad8\uff0c\u4f46\u662f\u5982\u679c\u5168\u90e8\u4f7f\u7528 Yarn Application \u548c per-job \u6a21\u5f0f\uff0c\u6bcf\u4e2a\u4efb\u52a1\u90fd\u4f1a\u542f\u52a8 JobManager\uff0c\u90a3\u4e48\u4f1a\u9020\u6210 Yarn \u8d44\u6e90\u7684\u6d6a\u8d39\u3002\u5bf9\u6b64\uff0c\u6211\u4eec\u51b3\u5b9a\u4f7f\u7528 Yarn Session \u6a21\u5f0f\u8fd0\u884c\u8fd9\u4e9b\u5927\u91cf\u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002"),(0,n.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\u6211\u4eec\u53d1\u73b0\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u5f88\u96be\u76f4\u89c2\u7684\u77e5\u9053\u5728\u6bcf\u4e2a Yarn Session \u4e2d\u8fd0\u884c\u4e86\u591a\u5c11\u4e2a\u4f5c\u4e1a\uff0c\u5176\u4e2d\u5305\u62ec\u4f5c\u4e1a\u603b\u6570\u548c\u6b63\u5728\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a\u6570\u91cf\u3002\u57fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u6211\u4eec\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u540c\u5b66\u53ef\u4ee5\u76f4\u89c2\u5730\u89c2\u5bdf\u5230 Yarn Session \u4e2d\u7684\u4f5c\u4e1a\u6570\u91cf\uff0c\u5728 Flink Cluster \u754c\u9762\u589e\u52a0\u4e86 All Jobs \u548c Running Jobs \u6765\u8868\u793a\u5728\u4e00\u4e2a Yarn Session \u4e2d\u603b\u7684\u4f5c\u4e1a\u6570\u548c\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u6570\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(7836).Z,width:"1080",height:"543"})),(0,n.kt)("h3",{id:"03--\u589e\u5f3a\u544a\u8b66\u80fd\u529b"},"03  ",(0,n.kt)("strong",{parentName:"h3"},"\u589e\u5f3a\u544a\u8b66\u80fd\u529b")),(0,n.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e2a\u516c\u53f8\u7684\u77ed\u4fe1\u544a\u8b66\u5e73\u53f0\u5b9e\u73b0\u90fd\u5404\u4e0d\u76f8\u540c\uff0c\u6240\u4ee5 StreamPark \u793e\u533a\u5e76\u6ca1\u6709\u62bd\u8c61\u51fa\u7edf\u4e00\u7684\u77ed\u4fe1\u544a\u8b66\u529f\u80fd\u3002\u5728\u6b64\uff0c\u6211\u4eec\u901a\u8fc7 Webhook \u7684\u65b9\u5f0f\uff0c\u81ea\u5df1\u5b9e\u73b0\u4e86\u77ed\u4fe1\u544a\u8b66\u529f\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(9634).Z,width:"1080",height:"601"})),(0,n.kt)("h3",{id:"04--\u589e\u52a0\u963b\u585e\u961f\u5217\u89e3\u51b3\u9650\u6d41\u95ee\u9898"},"04  ",(0,n.kt)("strong",{parentName:"h3"},"\u589e\u52a0\u963b\u585e\u961f\u5217\u89e3\u51b3\u9650\u6d41\u95ee\u9898")),(0,n.kt)("p",null,"\u5728\u751f\u4ea7\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u5728\u5927\u6279\u91cf\u4efb\u52a1\u540c\u65f6\u5931\u8d25\u7684\u65f6\u5019\uff0c\u6bd4\u5982 Yarn Session \u96c6\u7fa4\u6302\u4e86\uff0c\u98de\u4e66 / \u5fae\u4fe1\u7b49\u5e73\u53f0\u5728\u591a\u7ebf\u7a0b\u540c\u65f6\u8c03\u7528\u544a\u8b66\u63a5\u53e3\u65f6\u4f1a\u5b58\u5728\u9650\u6d41\u7684\u95ee\u9898\uff0c\u90a3\u4e48\u5927\u91cf\u7684\u544a\u8b66\u4fe1\u606f\u56e0\u4e3a\u98de\u4e66 / \u5fae\u4fe1\u7b49\u5e73\u53f0\u9650\u6d41\u95ee\u9898\uff0cStreamPark \u53ea\u4f1a\u53d1\u9001\u4e00\u90e8\u5206\u7684\u544a\u8b66\u4fe1\u606f\uff0c\u8fd9\u6837\u975e\u5e38\u5bb9\u6613\u8bef\u5bfc\u5f00\u53d1\u540c\u5b66\u6392\u67e5\u95ee\u9898\u3002\u5728\u987a\u7f51\u79d1\u6280\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e2a\u963b\u585e\u961f\u5217\u548c\u4e00\u4e2a\u544a\u8b66\u7ebf\u7a0b\uff0c\u6765\u89e3\u51b3\u9650\u6d41\u95ee\u9898\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(6106).Z,width:"1080",height:"320"})),(0,n.kt)("p",null,"\u5f53\u4f5c\u4e1a\u76d1\u63a7\u8c03\u5ea6\u5668\u68c0\u6d4b\u5230\u4f5c\u4e1a\u5f02\u5e38\u65f6\uff0c\u4f1a\u4ea7\u751f\u4e00\u6761\u4f5c\u4e1a\u5f02\u5e38\u7684\u6d88\u606f\u53d1\u9001\u7684\u963b\u585e\u961f\u5217\u4e2d\uff0c\u5728\u544a\u8b66\u7ebf\u7a0b\u4e2d\u4f1a\u4e00\u76f4\u6d88\u8d39\u963b\u585e\u961f\u5217\u4e2d\u7684\u6d88\u606f\uff0c\u5728\u5f97\u5230\u4f5c\u4e1a\u5f02\u5e38\u6d88\u606f\u540e\u5219\u4f1a\u6839\u636e\u7528\u6237\u914d\u7f6e\u7684\u544a\u8b66\u4fe1\u606f\u5355\u7ebf\u7a0b\u53d1\u9001\u5230\u4e0d\u540c\u7684\u5e73\u53f0\u4e2d\u3002\u867d\u7136\u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u8ba9\u7528\u6237\u5ef6\u8fdf\u6536\u5230\u544a\u8b66\uff0c\u4f46\u662f\u6211\u4eec\u5728\u5b9e\u8df5\u4e2d\u53d1\u73b0\u540c\u65f6\u6709 100+ \u4e2a Flink \u4f5c\u4e1a\u5931\u8d25\uff0c\u7528\u6237\u63a5\u53d7\u5230\u544a\u8b66\u7684\u5ef6\u8fdf\u65f6\u95f4\u5c0f\u4e8e 3s\u3002\u5bf9\u4e8e\u8fd9\u79cd\u5ef6\u8fdf\u65f6\u95f4\uff0c\u6211\u4eec\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u5b8c\u5168\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\u3002\u8be5\u6539\u8fdb\u76ee\u524d\u5df2\u7ecf\u8bb0\u5f55 ISSUE\uff0c\u6b63\u5728\u8003\u8651\u8d21\u732e\u5230\u793e\u533a\u4e2d\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/streampark/issues/2142"},"https://github.com/apache/streampark/issues/2142")),(0,n.kt)("h2",{id:"\u5e26\u6765\u7684\u6536\u76ca"},"\u5e26\u6765\u7684\u6536\u76ca"),(0,n.kt)("p",null,"\u6211\u4eec\u4ece StreamX 1.2.3\uff08StreamPark \u524d\u8eab\uff09\u5f00\u59cb\u63a2\u7d22\u548c\u4f7f\u7528\uff0c\u7ecf\u8fc7\u4e00\u5e74\u591a\u65f6\u95f4\u7684\u78e8\u5408\uff0c\u6211\u4eec\u53d1\u73b0 StreamPark \u771f\u5b9e\u89e3\u51b3\u4e86 Flink \u4f5c\u4e1a\u5728\u5f00\u53d1\u7ba1\u7406\u548c\u8fd0\u7ef4\u4e0a\u7684\u8bf8\u591a\u75db\u70b9\u3002"),(0,n.kt)("p",null,"StreamPark \u7ed9\u987a\u7f51\u79d1\u6280\u5e26\u6765\u7684\u6700\u5927\u7684\u6536\u76ca\u5c31\u662f\u964d\u4f4e\u4e86 Flink \u7684\u4f7f\u7528\u95e8\u69db\uff0c\u63d0\u5347\u4e86\u5f00\u53d1\u6548\u7387\u3002\u6211\u4eec\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u5728\u539f\u5148\u7684 Streaming-Launcher \u4e2d\u9700\u8981\u4f7f\u7528 vscode\u3001GitLab \u548c\u8c03\u5ea6\u5e73\u53f0\u7b49\u591a\u4e2a\u5de5\u5177\u5b8c\u6210\u4e00\u4e2a FlinkSQL \u4f5c\u4e1a\u5f00\u53d1\uff0c\u4ece\u5f00\u53d1\u5230\u7f16\u8bd1\u5230\u53d1\u5e03\u7684\u6d41\u7a0b\u4e2d\u7ecf\u8fc7\u591a\u4e2a\u5de5\u5177\u4f7f\u7528\uff0c\u6d41\u7a0b\u7e41\u7410\u3002StreamPark \u63d0\u4f9b\u4e00\u7ad9\u5f0f\u670d\u52a1\uff0c\u53ef\u4ee5\u5728 StreamPark \u4e0a\u5b8c\u6210\u4f5c\u4e1a\u5f00\u53d1\u7f16\u8bd1\u53d1\u5e03\uff0c\u7b80\u5316\u4e86\u6574\u4e2a\u5f00\u53d1\u6d41\u7a0b\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u76ee\u524d StreamPark \u5728\u987a\u7f51\u79d1\u6280\u5df2\u7ecf\u5927\u89c4\u6a21\u5728\u751f\u4ea7\u73af\u5883\u6295\u5165\u4f7f\u7528\uff0cStreamPark \u4ece\u6700\u5f00\u59cb\u7ba1\u7406\u7684 500+ \u4e2a FlinkSQL \u4f5c\u4e1a\u589e\u52a0\u5230\u4e86\u8fd1 700 \u4e2a FlinkSQL\u4f5c\u4e1a\uff0c\u540c\u65f6\u7ba1\u7406\u4e86 10+ \u4e2a Yarn Sesssion Cluster\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(4012).Z,width:"1080",height:"572"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u56fe\u7247",src:a(3874).Z,width:"1080",height:"545"})),(0,n.kt)("h2",{id:"\u672a-\u6765-\u89c4-\u5212"},"\u672a \u6765 \u89c4 \u5212"),(0,n.kt)("p",null,"\u987a\u7f51\u79d1\u6280\u4f5c\u4e3a StreamPark \u65e9\u671f\u7684\u7528\u6237\u4e4b\u4e00\uff0c\u5728 1 \u5e74\u671f\u95f4\u5185\u4e00\u76f4\u548c\u793e\u533a\u540c\u5b66\u4fdd\u6301\u4ea4\u6d41\uff0c\u53c2\u4e0e StreamPark \u7684\u7a33\u5b9a\u6027\u6253\u78e8\uff0c\u6211\u4eec\u5c06\u751f\u4ea7\u8fd0\u7ef4\u4e2d\u9047\u5230\u7684 Bug \u548c\u65b0\u7684 Feature \u63d0\u4ea4\u7ed9\u4e86\u793e\u533a\u3002\u5728\u672a\u6765\uff0c\u6211\u4eec\u5e0c\u671b\u53ef\u4ee5\u5728 StreamPark \u4e0a\u7ba1\u7406 Flink \u8868\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u57fa\u4e8e Flink \u5f15\u64ce\u901a\u8fc7\u591a Catalog \u5b9e\u73b0\u8de8\u6570\u636e\u6e90\u67e5\u8be2\u5206\u6790\u529f\u80fd\u3002\u76ee\u524d StreamPark \u6b63\u5728\u5bf9\u63a5 Flink-SQL-Gateway \u80fd\u529b\uff0c\u8fd9\u4e00\u5757\u5728\u672a\u6765\u5bf9\u4e8e\u8868\u5143\u6570\u636e\u7684\u7ba1\u7406\u548c\u8de8\u6570\u636e\u6e90\u67e5\u8be2\u529f\u80fd\u4f1a\u63d0\u4f9b\u4e86\u5f88\u5927\u7684\u5e2e\u52a9\u3002"),(0,n.kt)("p",null,"\u7531\u4e8e\u5728\u987a\u7f51\u79d1\u6280\u591a\u662f\u5df2 Yarn Session \u6a21\u5f0f\u8fd0\u884c\u7684\u4f5c\u4e1a\uff0c\u6211\u4eec\u5e0c\u671b StreamPark \u53ef\u4ee5\u63d0\u4f9b\u66f4\u591a\u5bf9\u4e8e Remote\u96c6\u7fa4\u3001Yarn Session \u96c6\u7fa4\u548c K8s Session \u96c6\u7fa4\u529f\u80fd\u652f\u6301\uff0c\u6bd4\u5982\u76d1\u63a7\u544a\u8b66\uff0c\u4f18\u5316\u64cd\u4f5c\u6d41\u7a0b\u7b49\u65b9\u9762\u3002"),(0,n.kt)("p",null,"\u8003\u8651\u5230\u672a\u6765\uff0c\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\u53ef\u80fd\u4f1a\u4f7f\u7528 StreamPark \u7ba1\u7406\u66f4\u591a\u7684 Flink \u5b9e\u65f6\u4f5c\u4e1a\uff0c\u5355\u8282\u70b9\u6a21\u5f0f\u4e0b\u7684 StreamPark \u53ef\u80fd\u5e76\u4e0d\u5b89\u5168\u3002\u6240\u4ee5\u6211\u4eec\u5bf9\u4e8e StreamPark \u7684 HA \u4e5f\u662f\u975e\u5e38\u671f\u5f85\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e StreamPark \u5bf9\u63a5 Flink-SQL-Gateway \u80fd\u529b\u3001\u4e30\u5bcc Flink Cluster \u529f\u80fd\u548c StreamPark HA\uff0c\u6211\u4eec\u540e\u7eed\u4e5f\u4f1a\u53c2\u4e0e\u5efa\u8bbe\u4e2d\u3002"))}o.isMDXComponent=!0},4012:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/achievements1-9eb1dec5b2fa480e897cf1c12d1425d8.png"},3874:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/achievements2-5aa9b3c14892f9b1d8b054e82f3b4ad3.png"},9634:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/alarm-8fa330c6a2d27cfd62878dcd20cd524c.png"},4531:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/application-c99d4b0512fdb7d214e5429769629930.png"},9897:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/autor-4fee09aa3abf8842dcdbb7ada1aa9409.png"},7836:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/cluster-96bd791c1c4f3d6144fbd1d134d89cd6.png"},6477:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/connectors-d405c391d0cfdd753e7b329433275117.png"},6387:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/function-c2d3ad419e1676a0253d933935921a71.png"},3238:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/homework-96030dec4ea9db88b42668873f5a176d.png"},6285:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/homework_manager-96dc37860dd87f12ed55311b38116931.png"},3177:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/launcher-766611cb0dddb99d8437ead44d0665d4.png"},1061:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/logs-e4e9f2084f1fbcf0a4afe079433cef0a.png"},2925:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/management-9eb1dec5b2fa480e897cf1c12d1425d8.png"},4860:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/pain-4d2aee42ea7aae80eaeac17a6d51c090.png"},8313:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/permission-affd274acd10773ad4531da9102f3f91.png"},6106:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/queue-83552f1862acff8811b74488e8fe7c05.png"},1280:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/sql_client-32fd9eb063198e6f35349187eed61546.png"},1153:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/sql_develop-ef85f6a001fb814d494c9b39eb2dfba9.png"},4479:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/step-d945592bbe32c0e093289c6265472f1c.png"}}]);