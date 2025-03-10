---
slug: flink-development-framework-streampark
title: Flink 开发利器 StreamPark
tags: [StreamPark, DataStream, FlinkSQL]
---

<br/>

# 1. 背景

Hadoop 体系虽然在目前应用非常广泛，但架构繁琐、运维复杂度过高、版本升级困难，且由于部门原因，数据中台需求排期较长，我们急需探索敏捷性开发的数据平台模式。在目前云原生架构的普及和湖仓一体化的大背景下，我们已经确定了将 Doris 作为离线数据仓库，将 TiDB（目前已经应用于生产）作为实时数据平台，同时因为 Doris 具有 on MySQL 的 ODBC 能力，所以又可以对外部数据库资源进行整合，统一对外输出报表

![](/blog/belle/doris.png)

<center style={{"color": "gray"}}>(这里借用一下 Doris 官方的架构图)</center>

<br/><br/>

# 2. 遇到的问题

在数据引擎上，我们确定使用 Spark 和 Flink

* 使用 Spark on K8s client 客户端模式做离线数据处理
* 使用 Flink on K8s Native-Application/Session 模式做实时任务流管理

在这里，实际上有一些问题我们一直没有彻底解决：

用过 Native-Application 模式的朋友都知道，每提交一个任务，都需要打包新的镜像，提交到私有仓库，然后再调用 Flink Run 指令沟通 K8s，去拉取镜像运行 Pod。任务提交之后，还需要去 K8s 查看 log, 但是：

1. 任务运行监控怎么处理？
2. 使用 Cluster 模式还是 NodePort 暴露端口访问 Web UI？
3. 提交任务能否简化打包镜像的流程?
4. 如何减少开发压力？

<br/><br/>

# 3. 解决问题的过程

以上的这些其实都是需要解决的问题，如果单纯地使用命令行去提交每个任务，是不现实的，任务量大了，会变得不可维护。如何解决这些问题变成一个不得不面对的问题。

<br/>

## 简化镜像构建

首先，针对 Flink 原生镜像需要二次 build 的问题：我们利用了 MinIO 作为外部存储，并使用 s3-fuse 通过 DaemonSet 的方式直接挂载在了每个宿主节点上，我们所需要提交的 jar 包都可以放到上面统一管理。这样的话，即使扩缩容 Flink 节点，也能实现 S3 挂载自动伸缩。

![](/blog/belle/k8s.png)

Flink 从 1.13 版本开始，就支持 Pod Template，我们可以在 Pod Template 中利用数据卷挂载的方式再将宿主机目录挂载到每个 pod 中，从而无需镜像打包而直接在 K8s 上运行 Flink 程序。如上图，我们将 S3 先通过 s3-fuse Pod 挂载在 Node 1、Node 2 的 `/mnt/data-s3fs` 目录下，然后再将 `/mnt/data-s3fs` 挂载到 Pod A 中。

但是，因为对象存储随机写入或追加文件需要重写整个对象，导致这种方式仅适合于频繁读。而这刚好满足我们现在的场景。

<br/>

## 引入 StreamPark

之前我们写 Flink SQL 基本上都是使用 Java 包装 SQL，打 jar 包，提交到 S3 平台上。通过命令行方式提交代码，但这种方式始终不友好，流程繁琐，开发和运维成本太大。我们希望能够进一步简化流程，将 Flink TableEnvironment 抽象出来，有平台负责初始化、打包运行 Flink 任务，实现 Flink 应用程序的构建、测试和部署自动化。

这是个开源兴起的时代，我们自然而然的将目光投向开源领域中：在一众开源项目中，经过对比各个项目综合评估发现 <span style={{color:'red'}}> Zeppelin </span> 和 <span style={{color:'red'}}> StreamPark </span> 这两个项目对 Flink 的支持较为完善，都宣称支持 <span style={{color:'red'}}> Flink on K8s </span>，最终进入到我们的目标选择范围中，以下是两者在 K8s 相关支持的简单比较（目前如果有更新，麻烦批评指正）。

<table>
    <thead>
        <tr>
            <td>功能</td>
            <td>Zeppelin</td>
            <td>StreamPark</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>任务状态监控</td>
            <td><span style={{color:'red'}}> 稍低 </span>，不能作为任务状态监控工具</td>
            <td><span style={{color:'red'}}> 较高 </span></td>
        </tr>
        <tr>
            <td>任务资源管理</td>
            <td><span style={{color:'red'}}> 无 </span></td>
            <td><span style={{color:'red'}}> 有 </span>，但目前版本还不是很健全</td>
        </tr>
        <tr>
            <td>本地化部署</td>
            <td><span style={{color:'red'}}> 稍低 </span>，on K8s 模式只能将 Zeppelin 部署在 K8s 中，否则就需要打通 Pod 和外部网络，但是这在生产环境中很少这样做的</td>
            <td><span style={{color:'red'}}> 可以本地化部署 </span></td>
        </tr>
        <tr>
            <td>多语言支持</td>
            <td><span style={{color:'red'}}> 较高 </span>，支持 Python/Scala/Java 多语言</td>
            <td><span style={{color:'red'}}> 一般 </span>，目前 K8s 模式和 YARN 模式同时支持 FlinkSQL，并可以根据自身需求，使用 Java/Scala 开发 DataStream</td>
        </tr>
        <tr>
            <td>Flink WebUI 代理</td>
            <td><span style={{color:'red'}}> 目前还支持的不是很完整 </span>，主开发大佬目前是考虑整合 Ingress</td>
            <td><span style={{color:'red'}}> 较好 </span>，目前支持 ClusterIp/NodePort/LoadBalance 模式</td>
        </tr>
        <tr>
            <td>学习成本</td>
            <td><span style={{color:'red'}}> 成本较低 </span>，需要增加额外的参数学习，这个和原生的 FlinkSQL 在参数上有点区别</td>
            <td><span style={{color:'red'}}> 无成本 </span>，K8s 模式下 FlinkSQL 为原生支持的 SQL 格式；同时支持 Custome-Code（用户编写代码开发Datastream/FlinkSQL 任务）</td>
        </tr>
        <tr>
            <td>Flink 多版本支持</td>
            <td><span style={{color:'red'}}> 支持 </span></td>
            <td><span style={{color:'red'}}> 支持 </span></td>
        </tr>
        <tr>
            <td>Flink 原生镜像侵入</td>
            <td><span style={{color:'red'}}> 有侵入 </span>，需要在 Flink 镜像中提前部署 jar 包，会同 JobManager 启动在同一个 Pod 中，和 zeppelin-server 通信</td>
            <td><span style={{color:'red'}}> 无侵入 </span>，但是会产生较多镜像，需要定时清理</td>
        </tr>
        <tr>
            <td>代码多版本管理</td>
            <td><span style={{color:'red'}}> 支持 </span></td>
            <td><span style={{color:'red'}}> 支持 </span></td>
        </tr>
    </tbody>
</table>

<center style={{"color": "gray"}}>（PS: 此处仅从调研用户角度出发，我们对双方开发都保持极大的尊重）</center>

<br/>

调研过程中，我们与两者的主开发人员都进行了多次沟通。经过我们反复研究之后，还是决定将 StreamPark 作为我们目前的 Flink 开发工具来使用。

<video src="http://assets.streamxhub.com/streamx-video.mp4" controls="controls" width="100%" height="100%"></video>

<center style={{"color": "gray"}}>(StreamPark 官网的闪屏)</center>

<br/>

经过开发同学长时间开发测试，StreamPark 目前已经具备：

* 完善的<span style={{"color": "red"}}>SQL 校验功能</span>
* 实现了<span style={{"color": "red"}}>自动 build/push 镜像</span>
* 使用自定义类加载器，通过 Child-first 加载方式 <span style={{"color": "red"}}>解决了 YARN 和 K8s 两种运行模式</span>、<span style={{"color": "red"}}>支持了自由切换 Flink 多版本</span>
* 与 Flink-Kubernetes 进行深度整合，提交任务后返回 WebUI，通过 remote rest api + remote K8s，<span style={{"color": "red"}}>追踪任务执行状态</span>
* 同时支持了 <span style={{"color": "red"}}>Flink 1.12、1.13、1.14 等版本</span>

以上基本解决了我们目前开发和运维中存在的大部分问题。

<video src="http://assets.streamxhub.com/streamx-1.2.0.mp4" controls="controls" width="100%" height="100%"></video>

<center style={{"color": "gray"}}>(StreamPark 对 Flink 多版本的支持演示视频)</center>

<br/>

在目前最新发布的 1.2.0 版本中，StreamPark 较为完善地支持了 K8s-Native-Application 和 K8s-Session-Application 模式。

<video src="http://assets.streamxhub.com/streamx-k8s.mp4" controls="controls" width="100%" height="100%"></video>

<center style={{"color": "gray"}}>(StreamPark K8s 部署演示视频)</center>

<br/>

### K8s Native Application 模式

在 StreamPark 中，我们只需要配置相应的参数，并在 Maven POM 中填写相应的依赖，或者上传依赖 jar 包，点击 Apply，相应的依赖就会生成。这就意味着我们也可以将所有使用的 UDF 打成 jar 包，以及各种 connector.jar，直接在 SQL 中使用。如下图:

![](/blog/belle/dependency.png)

SQL 校验能力和 Zeppelin 基本一致:

![](/blog/belle/sqlverify.png)

我们也可以指定资源，指定 Flink Run 中的动态参数 Dynamic Option，甚至参数可以整合 Pod  Template

![](/blog/belle/pod.png)

程序保存后，点击运行时，也可以指定 savepoint。任务提交成功后，StreamPark 会根据 FlinkPod 网络 Exposed Type（loadBalancer/NodePort/ClusterIp），返回相应的 WebURL，从而自然的实现 WebUI 跳转。但是，目前因为线上私有 K8s 集群出于安全性考虑，尚未打通 Pod 与客户端节点网络（目前也没有这个规划）。所以么，我们只使用 NodePort。如果后续任务数过多，有使用 ClusterIP 的需求的话，我们可能会将 StreamPark 部署在 K8s，或者同 Ingress 做进一步整合。

![](/blog/belle/start.png)

注意：K8s master 如果使用 vip 做均衡代理的情况下，Flink 1.13 版本会返回 vip 的 ip 地址，在 1.14 版本中已经修复该问题。

下面是 K8s Application 模式下具体提交流程

![](/blog/belle/flow.png)

<center style={{"color": "gray"}}>（以上是依据个人理解绘制的任务提交流程图，如有错误，敬请谅解）</center>

<br/>

### K8s Native Session 模式

StreamPark 还较好地支持了 <span style={{"color": "red"}}> K8s Native-Sesson 模式</span>，这为我们后续做离线 FlinkSQL 开发或部分资源隔离做了较好的技术支持。

Native-Session 模式需要事先使用 Flink 命令创建一个运行在 K8s 中的 Flink 集群。如下：

```shell
./kubernetes-session.sh \
-Dkubernetes.cluster-id=flink-on-k8s-flinkSql-test \
-Dkubernetes.context=XXX \
-Dkubernetes.namespace=XXXX \
-Dkubernetes.service-account=XXXX \
-Dkubernetes.container.image=XXXX \
-Dkubernetes.container.image.pull-policy=Always \
-Dkubernetes.taskmanager.node-selector=XXXX \
-Dkubernetes.rest-service.exposed.type=Nodeport
```

![](/blog/belle/flinksql.png)

如上图，使用该 ClusterId 作为 StreamPark 的任务参数 Kubernetes ClusterId。保存提交任务后，任务会很快处于 Running 状态：

![](/blog/belle/detail.png)

我们顺着 application info 的 WebUI 点击跳转：

![](/blog/belle/dashboard.png)

可以看到，其实 StreamPark 是将 jar 包通过 REST API 上传到 Flink 集群上，并调度执行任务的。

<br/>

### Custom Code 模式

另我们惊喜的是，StreamPark 还支持代码编写 DataStream/FlinkSQL 任务。对于特殊需求，我们可以自己写 Java/Scala 实现。可以根据 StreamPark 推荐的脚手架方式编写任务，也可以编写一个标准普通的 Flink 任务，通过这种方式我们可以将代码管理交由 git 实现，平台可以用来自动化编译打包与部署。当然，如果能用 SQL 实现的功能，我们会尽量避免自定义 DataStream，减少不必要的运维麻烦。

<br/><br/>

# 4. 意见和规划

## 改进意见

当然 StreamPark 还有很多需要改进的地方，就目前测试来看：

* **资源管理还有待加强**：多文件系统jar包等资源管理功能尚未添加，任务版本功能有待加强。
* **前端 button 功能还不够丰富**：比如任务添加后续可以增加复制等功能按钮。
* **任务提交日志也需要可视化展示**：任务提交伴随着加载 class 文件，打 jar 包，build 镜像，提交镜像，提交任务等过程，每一个环节出错，都会导致任务的失败，但是失败日志往往不明确，或者因为某种原因导致异常未正常抛出，没有转换任务状态，用户会无从下手改进。

众所周知，一个新事物的出现一开始总会不是那么完美。尽管有些许问题和需要改进的 point，但是瑕不掩瑜，我们仍然选择 StreamPark 作为我们的 Flink DevOps，我们也将会和主开发人员一道共同完善 StreamPark，也欢迎更多的人来使用，为 StreamPark 带来更多进步。

<br/>

## 未来规划

* 我们会继续跟进 Doris，并将业务数据 + 日志数据统一入 Doris，通过 Flink 实现湖仓一体；
* 我们也会逐步将探索 StreamPark 同 DolphinScheduler 2.x 进行整合，完善DolphinScheduler 离线任务，逐步用 Flink 替换掉 Spark，实现真正的流批一体；
* 基于我们自身在 S3 上的探索积累，fat-jar 包 build 完成之后不再构建镜像，直接利用 Pod Tempelet 挂载 PVC 到 Flink Pod 中的目录，进一步优化代码提交流程；
* 将 StreamPark 持续应用到我们生产中，并汇同社区开发人员，共同努力，增强 StreamPark 在 Flink 流上的开发部署能力与运行监控能力，努力把 StreamPark 打造成一个功能完善的流数据  DevOps。

附：

StreamPark GitHub：[https://github.com/apache/incubator-streampark](https://github.com/apache/incubator-streampark) <br/>
Doris GitHub：[https://github.com/apache/doris](https://github.com/apache/doris)

![](/blog/belle/author.png)
