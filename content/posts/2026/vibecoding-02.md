---
title: Vibe Coding series の 02
date: 2026-03-25 21:06:00
updated: 2026-03-25 21:06:00
type: tech
image: # 封面图推荐 2:1，不含与标题重复的文字
categories: [vibecoding]
tags: [ai]
---
接上文
收录一些vibe coding 好用的tools/spec（非agent中的tools

### frontend

- cc搭配plugins

  - `superpowers`: https://github.com/obra/superpowers - 先plan再action
- skills相关：

  - https://github.com/vercel-labs/agent-skills
  - https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md  | 实测其实主要还是取决于model的能力，大体说起来其实还是prompt而已，约束性很低& 用户query过于简单& 非claude/gemini这类前端审美较好的model， 基本还是达不到很好的效果
  - https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- mcp：

  - Chrome DevTools MCP
  - Context7
- Visual feedback for agents： https://agentation.dev/
- Design prompt: https://getdesign.md/  参考国内外品牌风格（like Apple、Claude Code等）的design范式，实测还不错，比单纯的frontend-design效果好很多，也可以说是对于模型的“宽容性”高了很多

### review

> 与vibe coding没什么联系，和agent一些理论关系比较大，like rag，embedding

- https://github.com/AnnaSuSu/TechSpar
