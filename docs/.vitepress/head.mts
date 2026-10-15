import type { HeadConfig } from 'vitepress'

export const createHead = (gaId?: string): HeadConfig[] => {
    const head: HeadConfig[] = [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'Toko Ladang' }],
        ['meta', { property: 'og:locale', content: 'id_ID' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Blog & Informasi — Toko Ladang', href: '/feed.xml' }],
    ]

    if (gaId) {
        head.push(
            [
                'script',
                {
                    async: '',
                    src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                },
            ],
            [
                'script',
                {},
                `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
`,
            ]
        )
    }

    return head
}
