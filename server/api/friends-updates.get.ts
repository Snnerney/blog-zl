import type { FeedEntry, FriendUpdate } from '~/types/feed'
import { XMLParser } from 'fast-xml-parser'
import pLimit from 'p-limit'
import feeds from '~/feeds'

const parser = new XMLParser({
   ignoreAttributes: false,
   attributeNamePrefix: '@_',
   textNodeName: '#text',
})

const fetchLimit = pLimit(10)
const htmlTagRe = /<[^>]+>/g

// 部分 RSS 会把“随机页面”“关于页”等也混进来，这里过滤掉常见的非文章路径
const nonPostPathPrefixes = ['/random/', '/about/', '/friends/', '/search/', '/categories/', '/tags/', '/archives/']

function isNonPost(link: string, sourceLink: string): boolean {
   try {
      const path = new URL(link, sourceLink).pathname
      return nonPostPathPrefixes.some(prefix => path.startsWith(prefix))
   }
   catch {
      return false
   }
}

function textOf(value: string | { '#text'?: string } | undefined): string | undefined {
   if (typeof value === 'string')
      return value
   if (value && typeof value === 'object')
      return value['#text']
   return undefined
}

function normalizeDate(dateLike?: string): string | undefined {
   if (!dateLike)
      return undefined
   const ts = Date.parse(dateLike)
   if (!Number.isNaN(ts))
      return new Date(ts).toISOString()
   return undefined
}

function extractLink(item: any): string | undefined {
   return textOf(item.link) || textOf(item.guid) || item.guid
}

function extractItems(xml: string, feedSource: FeedEntry): FriendUpdate[] {
   const parsed = parser.parse(xml)

   let rawItems: any[] = []

   // RSS 2.0 / 1.0
   if (parsed?.rss?.channel?.item) {
      rawItems = Array.isArray(parsed.rss.channel.item)
         ? parsed.rss.channel.item
         : [parsed.rss.channel.item]
   }
   // Atom
   else if (parsed?.feed?.entry) {
      rawItems = Array.isArray(parsed.feed.entry)
         ? parsed.feed.entry
         : [parsed.feed.entry]
   }

   return rawItems
      .map((item): FriendUpdate | null => {
         const publishedAt = normalizeDate(
            item.pubDate || item.published || item['dc:date'] || item.updated,
         )
         if (!publishedAt)
            return null

         const link = extractLink(item) || feedSource.link
         if (isNonPost(link, feedSource.link))
            return null

         const title = textOf(item.title) || '无标题'

         let summary = textOf(item.description)
            || textOf(item.summary)
            || textOf(item.content)
            || ''
         summary = summary.replace(htmlTagRe, ' ').trim().slice(0, 160)

         return {
            title,
            link,
            publishedAt,
            summary,
            author: feedSource.author,
            avatar: feedSource.avatar,
            sourceLink: feedSource.link,
         }
      })
      .filter((x): x is FriendUpdate => Boolean(x))
}

async function fetchOne(entry: FeedEntry & { feed: string }): Promise<FriendUpdate[]> {
   try {
      const xml = await $fetch(entry.feed, {
         method: 'GET',
         responseType: 'text',
         headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; BlogFriendBot/1.0)',
            'Accept': '*/*',
         },
         timeout: 5000,
      })
      return extractItems(xml, entry).slice(0, 5)
   }
   catch (e) {
      console.error(`[friend-updates] 抓取失败: ${entry.feed}`, e)
      return []
   }
}

export default defineCachedEventHandler(async () => {
   const feedEntries = feeds
      .flatMap(g => g.entries)
      .filter((e): e is FeedEntry & { feed: string } => Boolean(e.feed))

   const nested = await Promise.all(
      feedEntries.map(entry => fetchLimit(() => fetchOne(entry))),
   )

   return nested
      .flat()
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}, {
   maxAge: 60 * 30,
   name: 'friends-updates',
})
