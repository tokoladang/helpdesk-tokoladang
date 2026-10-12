import type { DefaultTheme } from 'vitepress'

export const merchantGuideSidebarItem = (): DefaultTheme.SidebarItem[] => {
    return [
        { text: 'Daftar / Registrasi', link: '/guide/merchant/01-registrasi' },
        {
            text: 'Panduan Penggunaan Notifikasi Whatsapp',
            link: '/guide/merchant/20260715-000000-panduan-notif-whatsapp',
        },
        {
            text: 'Panduan Penggunaan TTE',
            link: '/guide/merchant/20251104-000000-panduan-penggunaan-tte',
        },
        {
            text: 'Tambah Pengguna / Admin Toko',
            link: '/guide/merchant/20260716-000000-tambah-pengguna-admin-toko',
        },
        {
            text: 'Tata Cara Menambah Produk Kategori Banpem Menulis',
            link: '/guide/merchant/20260908-000000-tambah-produk-banpem-menulis',
        },
        {
            text: 'Tambah Produk Secara Massal',
            link: '/guide/merchant/20260928-000000-tambah-produk-massal',
        },
    ]
}
