---
title: Panduan Transaksi Penjual (Merchant) MBG
description: Panduan lengkap alur transaksi sisi penjual/merchant di SIPLah Toko Ladang LOKA MBG, mulai dari login, memproses pesanan, mengirim barang, hingga pembayaran diterima.
date: 2026-11-06
---

# Panduan Transaksi Penjual (Merchant) MBG

<PageDate />

Panduan ini menjelaskan alur transaksi dari sisi **penjual/merchant** di SIPLah Toko Ladang LOKA MBG, mulai dari masuk ke akun penjual, memproses pesanan dari SPPG, mengirim barang, memantau serah terima, hingga memastikan pembayaran sudah diterima.

## Dua jalur transaksi

| Jalur               | Kapan dipakai                                | Bagian                                                                    |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------------- |
| **Transaksi biasa** | Menerima harga daftar produk tanpa penawaran | [Bagian 2](#2-buka-daftar-pesanan) s.d. [Bagian 8](#8-pembayaran-selesai) |
| **Negosiasi**       | Menanggapi penawaran harga dari pembeli      | [Bagian 9](#9-menanggapi-negosiasi-pembeli)                               |

Setelah respons negosiasi disetujui, pesanan yang masuk mengikuti harga hasil kesepakatan dan alur dilanjutkan ke [Bagian 2 (Daftar Pesanan)](#2-buka-daftar-pesanan).

## Prasyarat

- Akun penjual sudah terdaftar dan terverifikasi. Lihat [Panduan registrasi merchant MBG](/mbg/merchant/20261012-122535-registrasi).
- Produk bahan baku MBG sudah ditambahkan dan tayang. Lihat [Panduan Tambah Produk MBG](/mbg/merchant/20261014-105012-tambah-produk-mbg).
- **Email toko sudah diverifikasi** agar notifikasi pesanan masuk ke email. Jika belum, klik **Verifikasi Sekarang** pada banner di bagian atas dasbor.
- Nomor rekening bank yang terdaftar sudah benar, karena dana pesanan akan diteruskan ke rekening tersebut.

## 1. Masuk ke akun penjual

1. Buka situs penjual SIPLah Toko Ladang, lalu klik tombol **Masuk** atau **Daftar Jadi Penjual** pada halaman beranda LOKA MBG.

    ![Beranda SIPLah Toko Ladang LOKA MBG](/images/mbg/merchant/transaksi-penjual/1.png)

2. Akan muncul pilihan **Login Sebagai**. Pilih **Penjual** (_Login untuk menjual bahan baku MBG_).

    ![Pilihan login sebagai penjual](/images/mbg/merchant/transaksi-penjual/2.png)

    :::tip INFO
    Halaman yang sama juga digunakan oleh pembeli. Pastikan Anda memilih **Penjual**, bukan **SPPG (BGN)** yang menggunakan akun SSO SIPGN BGN.
    :::

3. Pada halaman **Dasbor Penjual**, isi **Email** dan **Password** akun toko, lalu klik tombol **Masuk**. Gunakan tautan **Lupa Kata Sandi?** bila Anda lupa kata sandi.

    ![Form login dasbor penjual](/images/mbg/merchant/transaksi-penjual/form-login.png)

## 2. Buka daftar pesanan

1. Setelah berhasil masuk, buka menu **Pesanan** pada sidebar, atau klik **Daftar Pesanan**. Halaman **Daftar Pesanan** menampilkan seluruh pesanan yang masuk beserta rentang tanggalnya.
2. Gunakan fitur berikut untuk mempermudah pencarian:
    - **Filter Tanggal** untuk membatasi periode pesanan.
    - Tab status: **semua**, **Baru**, **Pengiriman**, **Diterima**, **Pembayaran**, **Selesai**, dan **Batal**.
    - Kolom pencarian **Cari pesanan anda disini** berdasarkan kode pesanan atau nama sekolah.
    - Tombol **Ekspor** untuk mengunduh rekap pesanan.


3. Kolom **Informasi Pesanan** menampilkan kode pesanan, nama sekolah/SPPG, tanggal pesanan, serta **Nominal** pesanan dan **Status** terkini.
4. Pada **Daftar Pesanan** klik **nomor PO** atau tombol icon titik 3 **(...)** untuk melihat detail pesanan
    ![Daftar pesanan penjual beserta filter status](/images/mbg/merchant/transaksi-penjual/4.png)

## 3. Konfirmasi proses pesanan

1. Pada bagian **Aksi**, klik tombol untuk terima pesanan sehingga muncul pop-up **Konfirmasi Proses Pesanan**.
   ![Detail pesanan penjual status baru](/images/mbg/merchant/transaksi-penjual/5.png)
2. Lengkapi isian pada pop-up tersebut:
    - **Jangka Waktu Pelaksanaan Pekerjaan** dan **Estimasi Pengiriman** sesuai kesiapan barang.


3. Setelah klik **Proses**, status pesanan berubah menjadi **Diproses**.
    ![Pop-up konfirmasi proses pesanan dan metode transfer](/images/mbg/merchant/transaksi-penjual/pop-up-cofirm.png)

## 5. Kirim pesanan

1. Pada bagian **Aksi**, klik tombol **Kirim Pesanan**. Form **Konfirmasi Pengiriman** akan terbuka pada kolom **Informasi Pengiriman**.

    ![Detail pesanan status pesanan dibuat](/images/mbg/merchant/transaksi-penjual/7.png)

2. Isi **Nomor Resi** bila menggunakan ekspedisi yang memiliki nomor resi. Kolom ini bersifat **opsional**, misalnya untuk pengiriman tidak dengan **Kurir Toko**.
3. Klik tombol **Simpan** untuk mengonfirmasi pengiriman. Status pesanan berubah menjadi **Pengiriman** dan pembeli dapat memantau pengiriman tersebut.

    ![Form konfirmasi pengiriman dan input nomor resi](/images/mbg/merchant/transaksi-penjual/8.png)

## 6. Serah terima dan dokumen transaksi

1. Setelah barang diterima, pembeli (SPPG) melakukan **serah terima** dan mengesahkan Berita Acara. Tahapan pesanan pada halaman detail akan bergerak menuju **Serah Terima** dan **Pembayaran**.

2. Dokumen transaksi tersedia pada kolom **Aksi** dan dapat diunduh melalui tombol **Unduh Dokumen**, antara lain:
    - **Surat Pesanan**
    - **Berita Acara Pemeriksaan/Penerimaan**
    - **Surat Hasil Pemeriksaan**
    - **Proforma Invoice**

3. Gunakan tombol **Bubuhkan e-meterai** untuk membubuhkan e-meterai pada dokumen yang memerlukan
4. Gunakan **Riwayat Pesanan** untuk melihat kronologi aktivitas pesanan dari pembuatan pesanan hingga pembayaran.

    ::: tip Perhatian!
    Sesuai UU ITE Pasal 5, dokumen yang telah dibubuhi **Tanda Tangan Elektronik (TTE)** dan e-meterai dinyatakan sah secara hukum. Pastikan data pesanan sudah benar sebelum dokumen diunduh dan diarsipkan.
    :::

## 7. Cek pembayaran

1. Pada bagian **Aksi**, klik **Cek Pembayaran** untuk memeriksa status pembayaran pesanan.
2. Pilih **Metode Pembayaran** yang digunakan pembeli (contoh: **Virtual Akun (Bank Jateng)**), lalu periksa status pembayarannya.

    ![Detail pesanan setelah serah terima beserta dokumen transaksi](/images/mbg/merchant/transaksi-penjual/9.png)
    ![Pop-up cek pembayaran dengan pilihan metode pembayaran](/images/mbg/merchant/transaksi-penjual/10.png)

3. Bila pembayaran belum terverifikasi, status pesanan masih menampilkan tahapan **BAST dibuat**. Pembayaran dari SPPG akan diverifikasi sesuai metode yang dipilih pada saat serah terima.

## 8. Pembayaran selesai

1. Setelah pembayaran terverifikasi, status pesanan berubah menjadi **Pembayaran Terverifikasi** dan seluruh tahapan pesanan selesai.
2. Dokumen **Invoice Pembayaran** dapat diunduh sebagai arsip transaksi.
3. Periksa rincian **Informasi Pembayaran** untuk memastikan dana yang diterima sudah sesuai. Contoh perhitungan pada panduan ini:

    | Komponen                  | Nominal      |
    | ------------------------- | ------------ |
    | Total Pesanan             | Rp100.000    |
    | PPH Penjual               | Rp500        |
    | Biaya VA                  | Rp5.000      |
    | Metode Transfer Beda Bank | Rp2.900      |
    | **Diterima Penjual**      | **Rp91.600** |

    :::tip Catatan
    Perhitungan nominal diterima penjual bersifat **simulasi**. Besaran dana yang disalurkan dapat berkurang apabila terdapat pemotongan biaya administrasi layanan dari mitra (misalnya biaya Virtual Account dan biaya transfer beda bank).
    :::

4. Penerusan dana akan dilakukan 1x24jam saat jam kerja dan di hari kerja

    ![Detail pesanan dengan pembayaran terverifikasi](/images/mbg/merchant/transaksi-penjual/11.png)

## 9. Menanggapi negosiasi pembeli

1. Buka menu **Negosiasi** pada sidebar untuk membuka halaman **Daftar Negosiasi**. Halaman ini menampilkan pengajuan negosiasi dari sekolah/SPPG beserta **Nama Sekolah**, **Diajukan**, dan **Tanggal**.

    ![Daftar negosiasi penjual](/images/mbg/merchant/transaksi-penjual/negosiasi/1.png)

2. Klik tombol icon titik tiga **(...)** pada baris negosiasi untuk membuka pop-up **Detail Negosiasi**.

3. Periksa rincian negosiasi pada tabel:
    - **Nama Produk** yang dinegosiasikan.
    - **Nego Anda (Rp)** — harga penawaran dari penjual.
    - **Nego Pembeli (Rp)** — harga yang diajukan pembeli.

    ![Detail negosiasi produk](/images/mbg/merchant/transaksi-penjual/negosiasi/2.png)

4. Tentukan respons Anda:
    - Pilih **Setuju** untuk menerima pengajuan negosiasi.
    - Pilih **Tolak** untuk menolak pengajuan negosiasi.
    - Jika memilih **Tolak**, isi kolom **Masukkan Nego Anda** (contoh: **Rp50.000**) bila ingin mengajukan harga balik kepada pembeli.

5. Jika memilih **Setuju** Klik tombol **Simpan** untuk memproses negosiasi. Akan muncul dialog **Peringatan! Apakah Anda Akan Memproses Data ini?** — klik **Lanjutkan** untuk melanjutkan atau **Batal** untuk membatalkan.

    ![Dialog konfirmasi proses negosiasi](/images/mbg/merchant/transaksi-penjual/negosiasi/3.png)

6. Setelah diproses, status negosiasi pada halaman **Daftar Negosiasi** akan diperbarui sesuai respons yang Anda berikan.
   Respon:
    - Jika **Setuju** akan masuk di halaman daftar pesanan [Bagian 2](#2-buka-daftar-pesanan)
    - Jika **Tolak**, tetap di halaman negosiasi dan menunggu respon dari sekolah/SPPG

## Catatan penting

- **Verifikasi email toko** terlebih dahulu agar notifikasi pesanan baru masuk ke email Anda. Gunakan tombol **Verifikasi Sekarang** pada banner di dasbor.
- Selalu periksa **Detail Pesanan** dan **Catatan Pembeli** sebelum memproses pesanan, terutama jumlah, harga, dan alamat pengiriman.
- **Lama Pengerjaan** dan **Estimasi Pengiriman** yang diisi saat konfirmasi proses pesanan menjadi acuan batas waktu penyelesaian. Pastikan realistis dan dapat dipenuhi.
- Pemilihan **Metode Transfer Beda Bank** memengaruhi besaran biaya dan kecepatan pencairan dana. Perhatikan batas waktu verifikasi (pukul 12:00 untuk SKN Online dan pukul 16:00 untuk opsi yang lebih cepat).
- Nominal **Diterima Penjual** bersifat simulasi dan dapat berubah bila terdapat potongan biaya administrasi dari mitra.
- Gunakan **Ekspor** pada halaman **Daftar Pesanan** dan unduh seluruh dokumen transaksi untuk kebutuhan pembukuan serta pelaporan.
- Jika terdapat kendala pada pesanan, gunakan menu **Negosiasi** atau hubungi **Customer Service** melalui nomor yang tertera pada halaman pesanan.
