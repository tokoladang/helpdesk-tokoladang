import type { DefaultTheme } from 'vitepress'

export const dapurMbgGuideSidebarItem = (): DefaultTheme.SidebarItem[] => {
    return [
        {text:'Login SSO BGN', link:'/mbg/sppg/20261012-122715-login-sso-bgn'},
    ]
}

export const supplierMbgGuideSidebarItem = (): DefaultTheme.SidebarItem[] => {
    return [
        {text:'Registrasi Supplier', link:'/mbg/merchant/20261012-122535-registrasi'},
        {text:'Tambah Produk', link:'/mbg/merchant/20261014-105012-tambah-produk-mbg'},
    ]
}
