<script setup lang="ts">
const { timeEstablished } = useAppConfig()

const blogLog = [
	{},
	{
		label: '2026-04-06',
		value: 'astro-paper/cactus -> nuxt-Clarity',
		//tip: `博客重构上线，基于 Nuxt 3 和 Vite 构建，使用 TypeScript 开发，性能和体验大幅提升。\n\n博客地址不变，数据和设置无缝迁移。`,
	},
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
