---
title: 'N卡-Windows 部署教程'
date: '2024-06-28'
lastmod: '2024-07-12'
summary: '如何在 Windows 上使用 Nvidia 显卡部署 Io.Net 项目的详细步骤，尤其针对国内用户解决网络问题的方法。'
slug: "nnn"
parent: "000"
layout: PostSimple
---

# （N卡-Windows）

**此教程针对物理机，如果是云主机，需要开嵌套虚拟化，否则请用Ubuntu系统。**

国外用户直接按照官网Doc即可。[Windows: Install Worker (io.net)](https://docs.io.net/docs/install-on-windows) 

CUDA一定要装。

**国内用户需要解决网络问题，推荐使用Clash，下载地址：https://help.happynothings031.xyz/jiao-cheng/windows/windows**

1. Clash中需打开允许局域网访问、系统代理、开机自启；

1. 点击服务模式右边的管理，点安装，安装成功后地球会变绿；

![Untitled](/static/images/blogs/nn/000.png)

1. 打开TUN模式；

这时候理论上你的CMD、其他应用的流量就能走梯子了。

按照官网文档进行部署，在Docker装完后，在Docker设置里配上Proxy：

![Untitled](/static/images/blogs/nn/111.png)

继续按照官网文档完成后面的步骤，出现小火箭后即部署完成。