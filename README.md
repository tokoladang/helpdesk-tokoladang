# Helpdesk Toko Ladang

Pusat bantuan dan dokumentasi resmi [Toko Ladang](https://siplah.tokoladang.co.id) — marketplace SIPLah yang dioperasikan oleh PT Ladang Karya Husada.

Dibangun dengan [VitePress](https://vitepress.dev/), berisi panduan pengguna, informasi pembayaran, regulasi, FAQ, dan halaman legal untuk mitra penyedia (merchant) dan satuan pendidikan (sekolah).

## Tech Stack

| Teknologi                           | Deskripsi                            |
| ----------------------------------- | ------------------------------------ |
| [VitePress](https://vitepress.dev/) | Static site generator (Vue 3 + Vite) |
| [Vue 3](https://vuejs.org/)         | Komponen kustom (AnswerAccordion)    |
| [pnpm](https://pnpm.io/)            | Package manager                      |
| [Prettier](https://prettier.io/)    | Code formatter                       |
| MiniSearch                          | Pencarian lokal (tanpa backend)      |
| TypeScript                          | Konfigurasi situs (`config.mts`)     |

## Perintah

```bash
pnpm docs:dev      # Jalankan server development
pnpm docs:build    # Build untuk production
pnpm docs:preview  # Preview hasil build
```

## Struktur Direktori

```
docs/
├── .vitepress/
│   ├── config.mts                     # Konfigurasi situs
│   ├── components/
│   │   └── AnswerAccordion.vue        # Komponen akordeon FAQ
│   └── theme/
│       └── index.ts                   # Kustom tema
├── guide/
│   ├── merchant/                      # Panduan untuk Penyedia
│   ├── satdik/                        # Panduan untuk Sekolah
│   ├── payment/                       # Panduan pembayaran
│   └── regulation/                    # Dokumen regulasi
├── legal/                             # Halaman legal
├── public/                            # Aset statis
├── index.md                           # Halaman depan
└── faq.md                             # FAQ
```

## Lisensi

Hak cipta © PT Ladang Karya Husada.
