import type { TransformPageData } from 'vitepress'

export const createTransformPageData = (
    siteUrl: string,
    defaultOgImage: string
): TransformPageData => {
    return (pageData) => {
        const isBlog = pageData.relativePath.startsWith('blog/')
        const isBlogPost =
            isBlog &&
            pageData.relativePath !== 'blog/list.md' &&
            pageData.relativePath !== 'blog/list'

        if (isBlog) {
            pageData.frontmatter.prev = false
            pageData.frontmatter.next = false
        }

        const canonicalUrl = `${siteUrl}/${pageData.relativePath}`
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '.html')

        const title =
            pageData.frontmatter.layout === 'home'
                ? 'Helpdesk Toko Ladang'
                : `${pageData.frontmatter.title} | Helpdesk Toko Ladang`

        const description = pageData.frontmatter.description || pageData.description
        const ogImage = pageData.frontmatter.ogImage || defaultOgImage

        pageData.frontmatter.head ??= []

        pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }])
        pageData.frontmatter.head.push(['meta', { property: 'og:title', content: title }])
        pageData.frontmatter.head.push(['meta', { property: 'og:url', content: canonicalUrl }])
        pageData.frontmatter.head.push(['meta', { property: 'og:image', content: ogImage }])

        if (description) {
            pageData.frontmatter.head.push([
                'meta',
                { property: 'og:description', content: description },
            ])
            pageData.frontmatter.head.push([
                'meta',
                { name: 'twitter:description', content: description },
            ])
        }

        pageData.frontmatter.head.push(['meta', { name: 'twitter:title', content: title }])
        pageData.frontmatter.head.push(['meta', { name: 'twitter:image', content: ogImage }])

        // article meta untuk blog posts
        if (isBlogPost && pageData.frontmatter.date) {
            pageData.frontmatter.head.push([
                'meta',
                {
                    property: 'article:published_time',
                    content: new Date(pageData.frontmatter.date).toISOString(),
                },
            ])
            if (pageData.lastUpdated) {
                pageData.frontmatter.head.push([
                    'meta',
                    {
                        property: 'article:modified_time',
                        content: new Date(pageData.lastUpdated).toISOString(),
                    },
                ])
            }
        }

        // JSON-LD Structured Data
        const jsonLdGraph: Record<string, unknown>[] = []

        // Organization schema
        jsonLdGraph.push({
            '@type': 'Organization',
            name: 'Toko Ladang',
            url: siteUrl,
            logo: `${siteUrl}/logo.svg`,
            sameAs: [
                'https://www.youtube.com/@tokoladang',
                'https://www.instagram.com/tokoladang/',
                'https://t.me/siplahtokoladang',
                'https://www.tiktok.com/@tokoladang',
            ],
        })

        // BreadcrumbList schema
        const pathParts = pageData.relativePath.replace(/\.md$/, '').split('/').filter(Boolean)
        const breadcrumbLabels: Record<string, string> = {
            guide: 'Panduan',
            merchant: 'Merchant / Penyedia',
            satdik: 'Satdik / Sekolah',
            payment: 'Cara Pembayaran',
            regulation: 'Regulasi',
            blog: 'Blog & Informasi',
            legal: 'Legal',
            download: 'Download',
            faq: 'FAQ',
        }
        const breadcrumbItems = [
            { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteUrl },
        ]
        let accPath = ''
        for (let i = 0; i < pathParts.length; i++) {
            accPath += '/' + pathParts[i]
            const isLast = i === pathParts.length - 1
            breadcrumbItems.push({
                '@type': 'ListItem',
                position: i + 2,
                name: isLast
                    ? pageData.frontmatter.title || pathParts[i]
                    : breadcrumbLabels[pathParts[i]] || pathParts[i],
                item: `${siteUrl}${accPath}`,
            })
        }
        jsonLdGraph.push({
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItems,
        })

        // Article schema untuk blog posts
        if (isBlogPost && pageData.frontmatter.date) {
            jsonLdGraph.push({
                '@type': 'Article',
                headline: pageData.frontmatter.title,
                description: description,
                datePublished: new Date(pageData.frontmatter.date).toISOString(),
                dateModified: pageData.lastUpdated
                    ? new Date(pageData.lastUpdated).toISOString()
                    : new Date(pageData.frontmatter.date).toISOString(),
                author: { '@type': 'Organization', name: 'Toko Ladang' },
                publisher: {
                    '@type': 'Organization',
                    name: 'Toko Ladang',
                    logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg` },
                },
                image: ogImage,
                mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
            })
        }

        pageData.frontmatter.head.push([
            'script',
            { type: 'application/ld+json' },
            JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLdGraph }),
        ])
    }
}
