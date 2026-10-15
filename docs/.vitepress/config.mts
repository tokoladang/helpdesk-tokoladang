import { defineConfig, loadEnv } from 'vitepress'
import { dapurMbgGuideSidebarItem, supplierMbgGuideSidebarItem } from './sidebar/mbg.mts'
import { merchantGuideSidebarItem } from './sidebar/merchant.mts'
import { paymentGuideSidebarItem } from './sidebar/payment.mts'
import { regulationGuideSidebarItem } from './sidebar/regulation.mts'
import { createTransformPageData } from './transform-page-data.mts'
import { createHead } from './head.mts'

const { VITE_SITE_URL, VITE_GITHUB_URL, VITE_GA_ID } = loadEnv(
    process.env.NODE_ENV || 'development',
    process.cwd(),
    'VITE_'
)
const siteUrl = VITE_SITE_URL
const githubUrl = VITE_GITHUB_URL
const defaultOgImage = `${siteUrl}/og-default-2.jpg`

// head

const head = createHead(VITE_GA_ID)

// navbar items

const navbarItems = [
    { text: 'SIPLah Satdik', link: '/guide/list', activeMatch: '/guide/' },
    { text: 'Dapur MBG', link: '/mbg/list', activeMatch: '/mbg/' },
    {
        text: 'Lainnya',
        items: [
            { text: 'Blog', link: '/blog/list', activeMatch: '/blog/' },
            { text: 'Legal', link: '/legal/about-siplah', activeMatch: '/legal/' },
            { text: 'FAQ', link: '/faq', activeMatch: '/faq' },
            { text: 'Download', link: '/download', activeMatch: '/download' },
        ],
    },
]

export default defineConfig({
    title: 'Helpdesk Toko Ladang',
    description: 'Pusat bantuan, panduan, dan informasi untuk pengguna Toko Ladang',
    lang: 'id-ID',
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
        hostname: siteUrl,
    },
    head,
    transformPageData: createTransformPageData(siteUrl, defaultOgImage),

    themeConfig: {
        nav: navbarItems,
        sidebar: {
            '/': [
                {
                    text: 'FAQ',
                    collapsed: false,
                    items: [{ text: 'Pertanyaan Umum', link: '/faq' }],
                },
            ],
            '/guide/': [
                {
                    text: 'Panduan Umum',
                    collapsed: false,
                    items: [
                        {
                            text: 'Clear Cache Chrome',
                            link: '/guide/20260715-000000-panduan-clear-cache-chrome',
                        },
                        {
                            text: 'Tutorial Negosiasi',
                            link: '/guide/20260718-114630-tutorial-negosiasi',
                        },
                    ],
                },
                {
                    text: 'Merchant / Penyedia',
                    collapsed: false,
                    items: merchantGuideSidebarItem(),
                },
                {
                    text: 'Satdik / Sekolah',
                    collapsed: false,
                    items: [
                        {
                            text: 'Pembatalan Status BAST',
                            link: '/guide/satdik/20260714-000000-pembatalan-status-bast',
                        },
                        {
                            text: 'Cara bertransaksi produk kategori banpem menulis',
                            link: '/guide/satdik/20260914-000000-cara-bertransaksi-produk-kategori-banpem-menulis',
                        },
                        {
                            text: 'Cara aktivasi sumber dana banpem menulis',
                            link: '/guide/satdik/20260915-000000-cara-aktivasi-sumber-dana-banpem-menulis',
                        },
                    ],
                },
                {
                    text: 'Cara Pembayaran',
                    collapsed: false,
                    items: paymentGuideSidebarItem(),
                },
                {
                    text: 'Regulasi',
                    collapsed: false,
                    items: regulationGuideSidebarItem(),
                },
            ],
            '/legal/': [
                {
                    text: 'Legal',
                    collapsed: false,
                    items: [
                        { text: 'Tentang Siplah', link: '/legal/about-siplah' },
                        { text: 'Kebijakan Privasi', link: '/legal/privacy-policy' },
                        {
                            text: 'Syarat dan Ketentuan',
                            link: '/legal/terms-of-conditions',
                        },
                    ],
                },
            ],
            '/mbg/': [
                {
                    text: 'Dapur/SPPG MBG',
                    collapsed: false,
                    items: dapurMbgGuideSidebarItem(),
                },
                {
                    text: 'Supplier MBG',
                    collapsed: false,
                    items: supplierMbgGuideSidebarItem(),
                },
            ],
        },
        socialLinks: [
            { icon: 'github', link: githubUrl },
            { icon: 'youtube', link: 'https://www.youtube.com/@tokoladang' },
            { icon: 'instagram', link: 'https://www.instagram.com/tokoladang/' },
            { icon: 'telegram', link: 'https://t.me/siplahtokoladang' },
            { icon: 'tiktok', link: 'https://www.tiktok.com/@tokoladang' },
        ],
        search: {
            provider: 'local',
        },
        outline: {
            level: 'deep',
            label: 'Semua di halaman ini',
        },
    },
    markdown: {
        toc: { level: [1, 2, 3] },
        image: {
            lazyLoad: true,
        },
    },
})
