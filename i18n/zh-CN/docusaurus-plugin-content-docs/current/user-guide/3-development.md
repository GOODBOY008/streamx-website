---
id: 'development'
title: '开发指南'
sidebar_position: 3
---

### 环境要求

import { DevelopmentEnvs } from '../components/TableData.jsx';

<DevelopmentEnvs></DevelopmentEnvs>

### clone源码

```bash
git clone https://github.com/apache/incubator-streampark.git
```

### 构建项目

```bash
cd incubator-streampark/
./build.sh
```

### 打开项目

此处使用`idea`打开项目

```bash
open -a /Applications/IntelliJ\ IDEA\ CE.app/ ./
```

### 解压缩包

```bash
cd ./dist
tar -zxvf apache-streampark-2.2.0-incubating-bin.tar.gz
```

### 复制路径

复制解压后的目录路径，例：`${workspace}/incubator-streampark/dist/apache-streampark-2.2.0-incubating-bin`

### 启动后台服务

找到 `streampark-console/streampark-console-service/src/main/java/org/apache/streampark/console/StreamParkConsoleBootstrap.java`

修改启动配置

![Streampark Modify Run Configuration](/doc/image/streampark_modify_run_configuration.jpg)

勾选`Add VM options`，填写参数`-Dapp.home=$path`，`$path`是我们刚刚复制的路径

```bash
-Dapp.home=${workspace}/incubator-streampark/dist/apache-streampark-2.2.0-incubating-bin
```

![Streampark Run Config](/doc/image/streampark_run_config.jpeg)

然后启动后台服务即可

### 启动前端服务

```bash
cd ../streampark-console/streampark-console-webapp
pnpm serve
```

![Streampark Frontend Running](/doc/image/streampark_frontend_running.png)

访问 `http://localhost:10001/` ，输入用户名`admin`密码`streampark`，选择一个`team`进入

![Streampark Select Team](/doc/image/streampark_select_team.jpg)

### 演示调试代码

选择`Project`菜单，点击build

![Streampark Project Build](/doc/image/streampark_project_build.png)

调试效果

![Streampark Debugging](/doc/image/streampark_debugging.png)