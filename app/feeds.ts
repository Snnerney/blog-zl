import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region 网上邻居
	{
		name: '网上邻居',
		desc: '哔——啵——电波通讯中，欢迎常来串门。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'Faust',
				//sitenick: 'Faust',
				title: 'Faust',
				//desc: 'Faust佬友'
				link: 'https://fft.im/',
				feed: 'https://fft.im/rss.xml',
				icon: 'https://fft.im/arch.jpg',
				avatar: 'https://fft.im/_astro/logo.BS0qX_Ty_1A3M9v.webp',
				archs: ['Astro', 'Vercel'],
				date: '2024-02-01',
				comment: 'Faust佬友',
			},
			{
				author: '焕昭君',
				title: '焕昭君',
				link: 'https://blog.huan666.de/',
				feed: 'https://blog.huan666.de/rss.xml',
				icon: 'https://blog.huan666.de/img/author.webp',
				avatar: 'https://blog.huan666.de/img/author.webp',
				archs: ['Hugo', 'Vercel'],
				date: '2024-02-01',
				comment: '知行合一，日拱一卒',
			},
			{
				author: 'XnneHang',
				title: 'XnneHang',
				link: 'https://xnnehang.top/',
				feed: 'https://xnnehang.top/rss.xml',
				icon: "https://linux.do/uploads/default/optimized/4X/1/1/b/11bad4399b6b69291630913d58f85f8b11b60aa6_2_1000x1000.webp",
				avatar: "https://linux.do/uploads/default/optimized/4X/1/1/b/11bad4399b6b69291630913d58f85f8b11b60aa6_2_1000x1000.webp",
				date: '2024-02-01',
				comment: '青石巷道闻星铃，披虹沐雪见本心。他日北寒仙界会，一声道友尽沧桑。',
			},
			{
				author: '口袋分享记',
				title: '口袋分享记',
				link: 'https://111620.xyz/',
				feed: 'https://111620.xyz/rss.xml',
				icon: "https://img.111620.xyz/2025/07/29/6887b5efbf768.png",
				avatar: "https://img.111620.xyz/2025/07/29/6887b5efbf768.png",
				archs: ['WordPress'],
				date: '2024-02-01',
				comment: '所谓过往，皆为序章。虚室生白️',
			},
		],
	},
] satisfies FeedGroup[]
