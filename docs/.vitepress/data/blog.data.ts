import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/**/*.md', {
  transform(rawData) {
    return rawData
      .filter((page) => {
        const basename = page.url.split('/').pop() || ''
        return !['list', 'index'].includes(basename.replace(/\.html$/, ''))
      })
      .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
      .map((page) => ({
        ...page,
        url: page.url.replace(/\.html$/, ''),
      }))
  },
})
