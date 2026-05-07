---
title: 人+Agent模式之速通本科论文|updating
date: 2026-05-05 05:06:00
updated: 2026-05-05 07:06:00
type: tech
image: # 封面图推荐 2:1，不含与标题重复的文字
categories: [agent]
tags: [杂谈,tools]
---

### 前前言

浅记一点点本科论文完成历程，纯log

在pyq帮转了出各种ai pro/plus号的帖子，没想到第一个联系我的居然还是高中同学

电气专业，听其戏谑称平时玩弄doubao居多&要赶中期论文审查，看到我pyq发的于是来询问我的建议

最后还是只提供了建议，没有明说推荐她买haha，错失一次交易w

稍微分析了一下情况，发现在不同专业 ai的渗透度差距还是挺大的: 使用网页版居多，不太了解agent模式+agent中各种方法工具论，不了解markdown&latex

我说上手并不难，实践中用就行，顺便写一点自己写论文可能用到的东西

---

### title解释

人+Agent模式，人在前，毕竟论文最终定稿还是由人来决定 + 以及查重 aigc等指标的制约

Agent模式，也就是可以外部交互的ai，可以操作我们的文件&外部工具调用，比如自动跑Python脚本生成图表、context7 mcp（专门为开发者提供最新、版本特定的代码文档和示）
；对比web版ai 只会说不会做，执行还是在人

优势在于 省去了手动修改的麻烦以及 自由读取参考文档/可根据修改后的内容进行迭代 & 初始init保存一个项目介绍，后续围绕介绍再进行扩展

配置可以从 可视化 AI IDE开始，例如 `Cursor`/`VS Code 配置codex插件`/`Codex`，有可用API或官方pro/plus号即可

交互方式也很简单，如果有参考项目or参考文档以及要求规范，完全可以建一个doc目录统一放置，左侧File目录中选中需要ai参考的文件右键`add file to chat`，以及详细说明需求清单 以及 不要有指望ai一次性生成一串可用论文的幻想

关于降aigc&跑出更符合规范的论文，可以在整个项目中配置skill（可以类比为sop？ 相当于跑一次项目流程跑通后可以复用的经验；网上比较火的也有蒸馏人的skill，毕竟skill大致就是prompt+script脚本（所做过的业务相关文档or项目pr都可以放进skill中 形成基于一件事或者一个个体的标准工作流）

本科论文最终交付文件可能word和pdf都需要，需要word且公式等涉及不多的话，可以优先选择markdown而非latex格式输出

---

### 进入正题

- 从标准模板开始：一般学院会给`要求与撰写规范`与 `往届参考论文`，参考论文大概率可能是pdf格式，此处推荐baidu的 :badge[PaddleOCR]{link = "https://github.com/PaddlePaddle/PaddleOCR"} ，虽然很多人吐槽baidu搜索广告满天飞，但是ocr服务很不错，直接使用web端或者py服务调用api都可，将pdf转换后的md文本和 `要求与撰写规范` 均放置在doc目录下作为参考引用reference 


```text wrap [about] 
Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the gap between images/PDFs and LLMs. Supports 100+ languages.
```


### reference
> :badge[research-writing-skill]{link = "https://github.com/Norman-bury/research-writing-skill#"} |  :badge[我的论文炼丹焚诀，助力你一键到初稿]{link = "https://www.bilibili.com/video/BV1RvRuBQEHQ/?share_source=copy_web&vd_source=6ec8aa29248fc44ea3382634d025fc5b"}
> :badge[thesis-docx]{link = "https://github.com/the-shy123456/thesis-docx"}
> :badge[本科生 / 研究生 论文辅助大合集]{link = "https://linux.do/t/topic/674623"}
