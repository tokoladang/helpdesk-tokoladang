import { createContentLoader } from 'vitepress'

interface MbgItem {
  title: string
  url: string
  category: string
}

function inferCategory(url: string): string {
  if (url.startsWith('/mbg/merchant/')) return 'merchant'
  if (url.startsWith('/mbg/sppg/')) return 'sppg'
  return 'umum'
}

export default createContentLoader('mbg/**/*.md', {
  transform(rawData): MbgItem[] {
    return rawData
      .filter((page) => {
        const basename = page.url.split('/').pop() || ''
        return !['list', 'index'].includes(basename.replace(/\.html$/, ''))
      })
      .sort((a, b) => a.url.localeCompare(b.url))
      .map((page) => ({
        title: page.frontmatter.title,
        url: page.url.replace(/\.html$/, ''),
        category: inferCategory(page.url),
      }))
  },
})
