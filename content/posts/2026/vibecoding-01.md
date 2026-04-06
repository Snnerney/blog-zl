---
title: Vibe Coding series の 01
date: 2026-03-14 21:06:00
updated: 2026-03-14 21:06:00
type: tech
image: # 封面图推荐 2:1，不含与标题重复的文字
categories: [vibecoding]
tags: [ai,随笔]
---
vibe  coding盛行时代

几乎过几周几个月甚至几天就有新的spec，新的model，新的编程ide工具 让人应接不暇

对于实时热点，个人一般是先持观望态度，等时间沉淀，结合市面上已有的实践经验以及较好的效果反馈才会去慢慢上手尝试，~~当然不排除有懒得成分~~ ，最近的openclaw就挺火的来着，在公司也加了养虾群，不过感觉就我本人来说似乎还没有什么用处

以下为个人最近实操vibe coding的一些心得，其实很多都是浅谈，vibe coding除了提前规范，个人基础知识能力 还有就是时间上的耗费了

即使是vibecoding，我们也循项目基本的流程走 ： 需求确立 - 评审 - 系统设计分析 - 开发 - 联调 - 测试 - 回归验收

- 原型 ui/ux 设计 ->  https://stitch.withgoogle.com/

> ai快速生成搭建原型界面，可导出以下格式
::pic
---
src: /img/2026/1773580559764.png
# mirror: # 是否借助第三方图片加载服务，见源代码
caption: stitch export setting
# zoom: false # 是否开启灯箱缩放，默认开启
---
::
- 检索信息-> grok

> 个人很喜欢用grok来当日常搜索，环境配置问题or简单热点问题都可以回答的很好。不过也不要无脑相信ai，结合官方文档以及搜索引擎 可能有更好的方法，再回丢给grok让它解释

- 需求明确 -> Gemini/ds ，虽然哈吉米在代码能力上可能比不过Claude,gpt最新高级模型，但是~~当陪聊很不错~~（bushi，输出内容很详细
- 系统分析设计：将基本需求确定下来作为 `prd.md`保存在workspace，plan模式 下基于已有的需求做整体框架设计分析以及补充。接下来就可以开始正式开发了。
- 开发：现将后端跑通，等后端单测以及集成测试跑通后再开发前端

  - 后端：参考现有的设计框架源码，like 若依，基本的权限校验 数据管理等。基本的框架还是要设计好，分各个模块专项负责
  - 前端：结合前端热门agent [skills](https://skills.sh/) `关键字：frontend` 或者个人喜欢的设计风格（Claude官网 、Apple等）规约限制“ai模板味”

ide：vscode + 插件（`claude code for vscode , codex , copilot...`）或者官方ai ide/cil，调试切换到熟悉的ide即可（pycharm，idea等）

> 闲言碎语：热点技术迭代很快，虽说倒也不必有热点就一股脑得扑上去，不过关注一些也不是一件坏事，就当新闻听听也行 -> [juya](https://space.bilibili.com/285286947/?spm_id_from=333.788.upinfo.detail.click) . 另外我觉得最重要的一点应该就是实践了吧，很多概念刚开始可能看得眼花缭乱，但是结合实际项目来使用，慢慢捋清思路和技巧，总结感悟体会，不是也挺好的吗
