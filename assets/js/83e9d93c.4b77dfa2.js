"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(7462),n=r(7294),o=r(6010),i=r(2466),s=r(6550),l=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=f({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=r(2389);const g="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function S(e){const t=(0,b.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},8844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),i=r(5162);const s={id:"Doris-Connector",title:"Apache Doris Connector",original:!0,sidebar_position:4},l=void 0,c={unversionedId:"connector/Doris-Connector",id:"connector/Doris-Connector",title:"Apache Doris Connector",description:"Apache Doris Connector",source:"@site/docs/connector/4-doris.md",sourceDirName:"connector",slug:"/connector/Doris-Connector",permalink:"/docs/connector/Doris-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/4-doris.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Doris-Connector",title:"Apache Doris Connector",original:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ClickHouse Connector",permalink:"/docs/connector/Clickhouse-Connector"},next:{title:"Elasticsearch Connector",permalink:"/docs/connector/Elasticsearch-Connector"}},u={},p=[{value:"Apache Doris Connector",id:"apache-doris-connector",level:2},{value:"Write with StreamPark",id:"write-with-streampark",level:3},{value:"configuration list",id:"configuration-list",level:4},{value:"write data to Doris",id:"write-data-to-doris",level:4}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"apache-doris-connector"},"Apache Doris Connector"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris")," is a high-performance, and real-time analytical database,\nwhich could support high-concurrent point query scenarios.\nStreamPark encapsulates DoirsSink for writing data to Doris in real-time, based on  ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html"},"Doris' stream loads")),(0,n.kt)("h3",{id:"write-with-streampark"},"Write with StreamPark"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamPark")," to write data to ",(0,n.kt)("inlineCode",{parentName:"p"},"Doris"),'.  DorisSink only supports JSON format (single-layer) writing currently,\nsuch as: {"id":1,"name":"streampark"} The example of the running program is java, as follows:'),(0,n.kt)("h4",{id:"configuration-list"},"configuration list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"doris.sink:\n  fenodes:  127.0.0.1:8030    //doris fe http url\n  database: test            //doris database\n  table: test_tbl           //doris table\n  user: root\n  password: 123456\n  batchSize: 100         //doris sink batch size per streamload\n  intervalMs: 3000      //doris sink the time interval of each streamload\n  maxRetries: 1          //stream load retries\n  streamLoad:              //doris streamload own parameters\n    format: json\n    strip_outer_array: true\n    max_filter_ratio: 1\n")),(0,n.kt)("h4",{id:"write-data-to-doris"},"write data to Doris"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"package org.apache.streampark.test.flink.java.datastream;\n\nimport org.apache.streampark.flink.core.StreamEnvConfig;\nimport org.apache.streampark.flink.core.java.sink.doris.DorisSink;\nimport org.apache.streampark.flink.core.java.source.KafkaSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.source.KafkaRecord;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.DataStream;\n\npublic class DorisJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        DataStream<String> source = new KafkaSource<String>(context)\n            .getDataStream()\n            .map((MapFunction<KafkaRecord<String>, String>) KafkaRecord::value)\n            .returns(String.class);\n\n        new DorisSink<String>(context).sink(source);\n\n        context.start();\n    }\n}\n\n")))),(0,n.kt)("admonition",{title:"hint",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended to set batchSize to insert data in batches to improve performance.\nAt the same time, to improve real-time performance, intervalMs is supported for batch writing.\nThe number of streamload retries can be increased by setting maxRetries.")))}m.isMDXComponent=!0}}]);