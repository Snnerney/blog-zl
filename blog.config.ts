import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: 'Noospic',
	subtitle: '星露谷农民',
	// 长 description 利好于 SEO
	description: 'Noospic の 闲言碎语 - 虽然现实没有星露谷，但每一篇blog都可以看作我的耕作log',
	author: {
		name: 'Noospic',
		avatar: 'https://noospic.github.io/noospic.jpeg',
		email: 'noospic22@gmail.com',
		homepage: 'https://noospic.github.io/',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: './noospic.jpeg',
	language: 'zh-CN',
	timeEstablished: '2024-12-04',
	timeZone: 'Asia/Shanghai',
	url: 'https://noospic.github.io/',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'ph:folder-dotted-bold' },
			/** 实践可复用操作经验：工具/系统/部署/排障 */
			技术: { icon: 'ph:mouse-bold', color: '#33aaff' },
			vibecoding: { icon: 'ix-ai', color: '#33aaff' },
			tools: { icon: 'icon-park-outline:tool', color: '#62b1ea' },
			agent: { icon: 'ix:ai', color: '#ff7733' },
			/** 编程：代码实现/工程实践/开发方法 */
			开发: { icon: 'ph:code-bold', color: '#7777ff' },
			/** 安全：漏洞/CTF/恶意软件/安全事件分析 */
			安全: { icon: 'ph:bug-beetle-bold', color: '#ff7733' },
			/** 思考：观点讨论/复盘反思/行业或产品观察 */
			杂谈: { icon: 'ph:chat-bold', color: '#33bbaa' },
			/** 记录叙事：个人经历/校园家庭/日常片段 */
			生活: { icon: 'ph:shooting-star-bold', color: '#ff7777' },
		},
		defaultCategoryIcon: 'ph:folder-bold',
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** Bangumi(bgm.tv)收藏，用于 /media 娱乐页（番剧/影视/游戏） */
	bangumi: {
		uid: '1278777',
		/**
		 * 资源反代前缀（bgm.tv 在大陆访问不稳）。拼成 {prefix}{完整目标URL}，
		 * 如 https://api-bgm-tv.shinya.click/https://api.bgm.tv/...。留空则直连。
		 * 缓存时长由远端自动配置，无需在前缀里带 /cache= 段。
		 * 反代需回传 access-control-allow-origin（客户端取数要跨域）。
		 */
		/** 列表接口反代前缀 */
		apiProxy: 'https://api-bgm.noospic.top/',
		/** 封面图反代前缀 */
		imgProxy: 'https://img-bgm.noospic.top/',
	},


	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	scripts: [
		{ 'src': 'https://umami.noospic.top/script.js', 'data-website-id': 'e78c4925-155f-47ae-ad29-4afea10f1754', 'defer': true },
	],
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: '摸鱼处',
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'Vercel'],
	date: blogConfig.timeEstablished,
	comment: 'Reality has no Stardew Valley — yet every blog is my farm log',
}

export default blogConfig
