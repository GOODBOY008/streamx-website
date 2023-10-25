"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,u=c["".concat(s,".").concat(f)]||c[f]||h[f]||a;return t?i.createElement(u,r(r({ref:n},p),{},{components:t})):i.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(7462),o=(t(7294),t(3905));const a={id:"hadoop-resource-integration",title:"Hadoop Resource Integration",sidebar_position:3},r=void 0,l={unversionedId:"flink-k8s/hadoop-resource-integration",id:"flink-k8s/hadoop-resource-integration",title:"Hadoop Resource Integration",description:"Using Hadoop resource in Flink on K8s",source:"@site/docs/flink-k8s/3-hadoop-resource-integration.md",sourceDirName:"flink-k8s",slug:"/flink-k8s/hadoop-resource-integration",permalink:"/docs/flink-k8s/hadoop-resource-integration",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flink-k8s/3-hadoop-resource-integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"hadoop-resource-integration",title:"Hadoop Resource Integration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Kubernetes PVC Resource usage",permalink:"/docs/flink-k8s/k8s-pvc-integration"}},s={},d=[{value:"Using Hadoop resource in Flink on K8s",id:"using-hadoop-resource-in-flink-on-k8s",level:2},{value:"1\u3001HDFS",id:"1hdfs",level:4},{value:"i\u3001add <code>shade jar</code>",id:"iadd-shade-jar",level:5},{value:"ii\u3001add <code>core-site.xml</code> and <code>hdfs-site.xml</code>",id:"iiadd-core-sitexml-and-hdfs-sitexml",level:5},{value:"2\u3001Hive",id:"2hive",level:4},{value:"i\u3001Add hive related jars",id:"iadd-hive-related-jars",level:5},{value:"ii\u3001Add hive configuration file (hive-site.xml)",id:"iiadd-hive-configuration-file-hive-sitexml",level:5},{value:"Conclusion",id:"conclusion",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-hadoop-resource-in-flink-on-k8s"},"Using Hadoop resource in Flink on K8s"),(0,o.kt)("p",null,"Using Hadoop resources under the StreamPark Flink-K8s runtime, such as checkpoint mount HDFS, read and write Hive, etc. The general process is as follows:"),(0,o.kt)("h4",{id:"1hdfs"},"1\u3001HDFS"),(0,o.kt)("p",null,"\u200b       To put flink on k8s related resources in HDFS, you need to go through the following two steps:"),(0,o.kt)("h5",{id:"iadd-shade-jar"},"i\u3001add ",(0,o.kt)("inlineCode",{parentName:"h5"},"shade jar")),(0,o.kt)("p",null,"\u200b            By default, the flink image pulled from Docker does not include hadoop-related jars. Here, flink:1.14.5-scala_2.12-java8 is taken as an example, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[flink@ff]  /opt/flink-1.14.5/lib\n$ ls\nflink-csv-1.14.5.jar        flink-shaded-zookeeper-3.4.14.jar  log4j-api-2.17.1.jar\nflink-dist_2.12-1.14.5.jar  flink-table_2.12-1.14.5.jar        log4j-core-2.17.1.jar\nflink-json-1.14.5.jar       log4j-1.2-api-2.17.1.jar           log4j-slf4j-impl-2.17.1.jar\n")),(0,o.kt)("p",null,"\u200b         This is to download the shaded jar and put it in the lib directory of flink. Take hadoop2 as an example, download ",(0,o.kt)("inlineCode",{parentName:"p"},"flink-shaded-hadoop-2-uber"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/apache/flink/flink-shaded-hadoop-2-uber/2.7.5-9.0/flink-shaded-hadoop-2-uber-2.7.5-9.0.jar"},"https://repo1.maven.org/maven2/org/apache/flink/flink-shaded-hadoop-2-uber/2.7.5-9.0/flink-shaded-hadoop-2-uber-2.7.5-9.0.jar")),(0,o.kt)("p",null,"\u200b\tIn addition, you can configure the shade jar in a dependent manner in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dependency")," in the StreamPark task configuration. the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-shaded-hadoop-2-uber</artifactId>\n    <version>2.7.5-9.0</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,o.kt)("h5",{id:"iiadd-core-sitexml-and-hdfs-sitexml"},"ii\u3001add ",(0,o.kt)("inlineCode",{parentName:"h5"},"core-site.xml")," and ",(0,o.kt)("inlineCode",{parentName:"h5"},"hdfs-site.xml")),(0,o.kt)("p",null,"\u200b            With the shade jar, you also need the corresponding configuration file to find the hadoop address. Two configuration files are mainly involved here: ",(0,o.kt)("inlineCode",{parentName:"p"},"core-site.xml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml"),", through the source code analysis of flink (the classes involved are mainly: org .apache.flink.kubernetes.kubeclient.parameters.AbstractKubernetesParameters), the two files have a fixed loading order, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// The process of finding hadoop configuration files:\n// 1\u3001Find out whether parameters have been added:${kubernetes.hadoop.conf.config-map.name}\n@Override\npublic Optional<String> getExistingHadoopConfigurationConfigMap() {\n    final String existingHadoopConfigMap =\n            flinkConfig.getString(KubernetesConfigOptions.HADOOP_CONF_CONFIG_MAP);\n    if (StringUtils.isBlank(existingHadoopConfigMap)) {\n        return Optional.empty();\n    } else {\n        return Optional.of(existingHadoopConfigMap.trim());\n    }\n}\n\n@Override\npublic Optional<String> getLocalHadoopConfigurationDirectory() {\n    // 2\u3001If there is no parameter specified in "1", find out whether the local environment where the native command is submitted has environment variables\uff1a${HADOOP_CONF_DIR}\n    final String hadoopConfDirEnv = System.getenv(Constants.ENV_HADOOP_CONF_DIR);\n    if (StringUtils.isNotBlank(hadoopConfDirEnv)) {\n        return Optional.of(hadoopConfDirEnv);\n    }\n    // 3\u3001If there are no "2" environment variables, continue to see if there are environment variables:${HADOOP_HOME}\n    final String hadoopHomeEnv = System.getenv(Constants.ENV_HADOOP_HOME);\n    if (StringUtils.isNotBlank(hadoopHomeEnv)) {\n        // Hadoop 2.x\n        final File hadoop2ConfDir = new File(hadoopHomeEnv, "/etc/hadoop");\n        if (hadoop2ConfDir.exists()) {\n            return Optional.of(hadoop2ConfDir.getAbsolutePath());\n        }\n\n        // Hadoop 1.x\n        final File hadoop1ConfDir = new File(hadoopHomeEnv, "/conf");\n        if (hadoop1ConfDir.exists()) {\n            return Optional.of(hadoop1ConfDir.getAbsolutePath());\n        }\n    }\n\n    return Optional.empty();\n}\n\nfinal List<File> hadoopConfigurationFileItems = getHadoopConfigurationFileItems(localHadoopConfigurationDirectory.get());\n// If "1", "2", and "3" are not found, there is no hadoop environment\nif (hadoopConfigurationFileItems.isEmpty()) {\n    LOG.warn("Found 0 files in directory {}, skip to mount the Hadoop Configuration ConfigMap.", localHadoopConfigurationDirectory.get());\n    return flinkPod;\n}\n// If "2" or "3" exists, it will look for the core-site.xml and hdfs-site.xml files in the path where the above environment variables are located\nprivate List<File> getHadoopConfigurationFileItems(String localHadoopConfigurationDirectory) {\n    final List<String> expectedFileNames = new ArrayList<>();\n    expectedFileNames.add("core-site.xml");\n    expectedFileNames.add("hdfs-site.xml");\n\n    final File directory = new File(localHadoopConfigurationDirectory);\n    if (directory.exists() && directory.isDirectory()) {\n        return Arrays.stream(directory.listFiles())\n                .filter(\n                        file ->\n                                file.isFile()\n                                        && expectedFileNames.stream()\n                                                .anyMatch(name -> file.getName().equals(name)))\n                .collect(Collectors.toList());\n    } else {\n        return Collections.emptyList();\n    }\n}\n// If the above files are found, it means that there is a hadoop environment. The above two files will be parsed into kv pairs, and then constructed into a ConfigMap. The naming rules are as follows:\npublic static String getHadoopConfConfigMapName(String clusterId) {\n    return Constants.HADOOP_CONF_CONFIG_MAP_PREFIX + clusterId;\n}\n')),(0,o.kt)("h4",{id:"2hive"},"2\u3001Hive"),(0,o.kt)("p",null,"\u200b        To sink data to hive, or use hive metastore as flink's metadata, it is necessary to open the path from flink to hive, which also needs to go through the following two steps:"),(0,o.kt)("h5",{id:"iadd-hive-related-jars"},"i\u3001Add hive related jars"),(0,o.kt)("p",null,"\u200b\t     As mentioned above, the default flink image does not include hive-related jars. The following three hive-related jars need to be placed in the lib directory of flink. Here, hive version 2.3.6 is used as an example:"),(0,o.kt)("p",null,"\u200b                a\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"hive-exec"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.6/hive-exec-2.3.6.jar"},"https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.6/hive-exec-2.3.6.jar")),(0,o.kt)("p",null,"\u200b                b\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"flink-connector-hive"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/apache/flink/flink-connector-hive_2.12/1.14.5/flink-connector-hive_2.12-1.14.5.jar"},"https://repo1.maven.org/maven2/org/apache/flink/flink-connector-hive_2.12/1.14.5/flink-connector-hive_2.12-1.14.5.jar")),(0,o.kt)("p",null,"\u200b                c\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"flink-sql-connector-hive"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/apache/flink/flink-sql-connector-hive-2.3.6_2.12/1.14.5/flink-sql-connector-hive-2.3.6_2.12-1.14.5.jar"},"https://repo1.maven.org/maven2/org/apache/flink/flink-sql-connector-hive-2.3.6_2.12/1.14.5/flink-sql-connector-hive-2.3.6_2.12-1.14.5.jar")),(0,o.kt)("p",null,"\u200b            Similarly, the above-mentioned hive-related jars can also be dependently configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dependency")," in the task configuration of StreamPark in a dependent manner, which will not be repeated here."),(0,o.kt)("h5",{id:"iiadd-hive-configuration-file-hive-sitexml"},"ii\u3001Add hive configuration file (hive-site.xml)"),(0,o.kt)("p",null,"\u200b\t       The difference from hdfs is that there is no default loading method for the hive configuration file in the flink source code, so developers need to manually add the hive configuration file. There are three main methods here:"),(0,o.kt)("p",null,"\u200b                  a. Put hive-site.xml in the custom image of flink, it is generally recommended to put it under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/flink/")," directory in the image"),(0,o.kt)("p",null,"\u200b                  b. Put hive-site.xml behind the remote storage system, such as HDFS, and load it when it is used"),(0,o.kt)("p",null,"\u200b                  c. Mount hive-site.xml in k8s in the form of ConfigMap. It is recommended to use this method, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# 1\u3001Mount the hive-site.xml at the specified location in the specified namespace\nkubectl create cm hive-conf --from-file=hive-site.xml -n flink-test\n# 2\u3001View the hive-site.xml mounted to k8s\nkubectl describe cm hive-conf -n flink-test \n# 3\u3001Mount this cm to the specified directory inside the container\nspec:\n  containers:\n    - name: flink-main-container\n      volumeMounts:\n        - mountPath: /opt/flink/hive\n          name: hive-conf\n  volumes:\n    - name: hive-conf\n      configMap:\n        name: hive-conf\n        items:\n          - key: hive-site.xml\n            path: hive-site.xml\n")),(0,o.kt)("h4",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"\u200b        Through the above method, flink can be connected with hadoop and hive. This method can be extended to general, that is, flink and external systems such as redis, mongo, etc., generally require the following two steps:"),(0,o.kt)("p",null,"\u200b        i. Load the connector jar of the specified external service"),(0,o.kt)("p",null,"\u200b        ii. If there is, load the specified configuration file into the flink system"))}c.isMDXComponent=!0}}]);