---
title: Panduan Pembayaran Kode Bayar Bank Kalsel
description: Panduan pembayaran kode bayar Bank Kalsel untuk SIPLah Toko Ladang melalui Internet Banking Business (Maker, Checker, Releaser).
date: 2026-10-26
---

# Panduan Pembayaran Kode Bayar Bank Kalsel

<PageDate />

Panduan ini menjelaskan pembayaran transaksi marketplace SIPLah Toko Ladang menggunakan **kode bayar Bank Kalsel** melalui channel **Internet Banking Business (IBB)**. Di IBB, satu transaksi melewati tiga role: **Maker** yang membuat transaksi, **Checker** yang memeriksa, dan **Releaser** yang melakukan otorisasi akhir.

## Prasyarat

- Akun **Internet Banking Business Bank Kalsel** aktif dengan role Maker, Checker, dan Releaser.
- Transaksi sudah dibuat di marketplace dan mendapatkan **kode bayar (nomor billing)**.
- Respon token (8 angka) tersedia untuk Checker dan Releaser.

## Langkah 1 — Dapatkan kode bayar dari marketplace

1. Login ke marketplace SIPLah menggunakan akun sekolah.
2. Pilih barang yang akan dibeli, lalu lanjutkan ke proses **checkout**.
3. Pada halaman checkout, pilih **metode pembayaran** Bank Kalsel, kemudian klik tombol **Lanjut Pembayaran**.
4. Marketplace menampilkan halaman informasi pembayaran. Catat **kode bayar (nomor billing)**, **total pembayaran**, dan **batas waktu pembayaran**.

::: tip Catatan: Kode bayar inilah yang dimasukkan oleh user Maker pada langkah berikutnya. Pastikan kode bayar sesuai dengan tagihan di marketplace
:::

## User: MAKER

### 1. Input nomor billing

1. Login ke Internet Banking Business Bank Kalsel.
2. Pilih menu **Pembayaran**, kemudian **Pembayaran SIPLAH**.
3. Isi halaman input data pembayaran, lalu klik tombol **Lanjutkan**.

   ![IBB halaman input data pembayaran untuk Maker](/images/pembayaran-siplah/halaman-14-gambar-01.png)

#### Tabel 1. Deskripsi field halaman input data pembayaran

| No. | Field Name | Type | Status | Keterangan |
|---:|---|---|---|---|
| 1 | Nomor Rekening | Dropdown | Mandatory | Memilih sumber dana pembayaran. |
| 2 | Input Nomor Billing | Text field | Mandatory | Input kode bayar dari marketplace. |
| 3 | Simpan ke Daftar Pembayaran | Checkbox | Optional | Menyimpan nomor billing ke daftar pembayaran. |
| 4 | Dengan Alias | Text field | Optional | Menambahkan keterangan untuk nomor billing yang disimpan. |
| 5 | Lanjutkan | Button | Mandatory | Menampilkan halaman konfirmasi pembayaran. |

### 2. Konfirmasi pembayaran

1. Sistem menampilkan halaman konfirmasi berisi sumber dana, nomor billing, nama sekolah, dan total pembayaran.
2. Periksa kembali data yang tampil, kemudian klik tombol **Proses** untuk membuat transaksi.

   ![IBB halaman konfirmasi pembayaran untuk Maker](/images/pembayaran-siplah/halaman-15-gambar-01.png)

#### Tabel 2. Deskripsi field halaman konfirmasi pembayaran

| No. | Field Name | Type | Status | Keterangan |
|---:|---|---|---|---|
| 1 | Sumber Dana | Text | System | Menampilkan sumber dana pembayaran. |
| 2 | Nomor Billing | Text | System | Menampilkan nomor billing. |
| 3 | Nama Sekolah | Text | System | Menampilkan nama sekolah. |
| 4 | Total Pembayaran | Text | System | Menampilkan total pembayaran. |
| 5 | Kembali | Button | Optional | Kembali ke halaman sebelumnya. |
| 6 | Proses | Button | Mandatory | Membuat transaksi dan meneruskannya ke proses otorisasi. |

### 3. Bukti transaksi

Setelah transaksi berhasil dibuat, sistem menampilkan bukti transaksi dengan status **Menunggu Otorisasi**. Transaksi selanjutnya masuk ke daftar otorisasi Checker.

![IBB bukti transaksi Maker dengan status Menunggu Otorisasi](/images/pembayaran-siplah/halaman-16-gambar-01.png)

## User: CHECKER

### 1. Pilih transaksi pada daftar otorisasi

1. Login sebagai Checker.
2. Buka daftar **Otorisasi Checker**.
3. Centang checkbox pada transaksi yang akan diotorisasi.
4. Klik **Tolak Otorisasi** untuk menolak transaksi, atau **Setuju Otorisasi** untuk melanjutkan.

   ![IBB daftar Otorisasi Checker dengan tombol Tolak dan Setuju Otorisasi](/images/pembayaran-siplah/halaman-17-gambar-01.png)

#### Tabel 3. Deskripsi field halaman list otorisasi checker

| No. | Field Name | Type | Status | Keterangan |
|---:|---|---|---|---|
| 1 | Transaksi | Checkbox | Mandatory | Memilih transaksi yang akan diotorisasi. |
| 2 | Tolak Otorisasi | Button | Optional | Menolak transaksi. |
| 3 | Setuju Otorisasi | Button | Optional | Menampilkan halaman konfirmasi transaksi. |

### 2. Konfirmasi otorisasi

Pada halaman konfirmasi otorisasi, masukkan **8 angka respon token**, kemudian klik **Setuju Otorisasi** untuk melanjutkan transaksi ke Releaser.

![IBB konfirmasi otorisasi Checker dengan input respon token](/images/pembayaran-siplah/halaman-18-gambar-01.png)

#### Tabel 4. Deskripsi field halaman konfirmasi otorisasi checker

| No. | Field Name | Type | Status | Keterangan |
|---:|---|---|---|---|
| 1 | Input respon token | Text field | Mandatory | Input 8 angka respon token. |
| 2 | Kembali | Button | Optional | Kembali ke daftar otorisasi. |
| 3 | Setuju Otorisasi | Button | Mandatory | Melanjutkan transaksi ke role Releaser. |

### 3. Bukti otorisasi checker

Setelah otorisasi berhasil, sistem menampilkan bukti otorisasi. Klik **nomor referensi** pada daftar untuk melihat rincian bukti transaksi.

![IBB bukti otorisasi Checker](/images/pembayaran-siplah/halaman-19-gambar-01.png)

Bukti transaksi memperlihatkan status transaksi beserta riwayat Maker dan Checker, dengan status masih **Menunggu Otorisasi** oleh Releaser.

![IBB bukti transaksi dengan riwayat Maker dan Checker](/images/pembayaran-siplah/halaman-19-gambar-02.png)

## User: RELEASER

### 1. Pilih transaksi pada daftar otorisasi

1. Transaksi yang disetujui Checker masuk ke daftar **Otorisasi Releaser**.
2. Login sebagai Releaser, lalu centang checkbox pada transaksi yang akan diotorisasi.
3. Klik **Tolak Otorisasi** untuk menolak transaksi, atau **Setuju Otorisasi** untuk melanjutkan.

   ![IBB daftar Otorisasi Releaser dengan tombol Tolak dan Setuju Otorisasi](/images/pembayaran-siplah/halaman-20-gambar-01.png)

#### Tabel 5. Deskripsi field halaman list otorisasi releaser

| No. | Field Name | Type | Status | Keterangan |
|---:|---|---|---|---|
| 1 | Transaksi | Checkbox | Mandatory | Memilih transaksi yang akan diotorisasi. |
| 2 | Tolak Otorisasi | Button | Optional | Menolak transaksi. |
| 3 | Setuju Otorisasi | Button | Optional | Menampilkan halaman konfirmasi transaksi. |

### 2. Konfirmasi otorisasi

Pada halaman konfirmasi otorisasi, masukkan **8 angka respon token**, kemudian klik **Setuju Otorisasi** untuk menyelesaikan pembayaran.

![IBB konfirmasi otorisasi Releaser dengan input respon token](/images/pembayaran-siplah/halaman-21-gambar-01.png)

#### Tabel 6. Deskripsi field halaman konfirmasi otorisasi releaser

| No. | Field Name | Type | Status | Keterangan |
|---:|---|---|---|---|
| 1 | Input respon token | Text field | Mandatory | Input 8 angka respon token. |
| 2 | Kembali | Button | Optional | Kembali ke daftar otorisasi. |
| 3 | Setuju Otorisasi | Button | Mandatory | Menyelesaikan otorisasi akhir transaksi. |

### 3. Bukti otorisasi dan resi sukses

Setelah otorisasi berhasil, sistem menampilkan bukti otorisasi Releaser.

![IBB bukti otorisasi Releaser](/images/pembayaran-siplah/halaman-22-gambar-01.png)

Klik nomor referensi untuk melihat bukti transaksi dengan status **Sukses**, lengkap dengan riwayat Maker, Checker, dan Releaser. Simpan atau unduh bukti ini sebagai dokumentasi pembayaran sekolah.

![IBB bukti transaksi dengan status Sukses](/images/pembayaran-siplah/halaman-22-gambar-02.png)

## Catatan penting

- Pastikan kode bayar yang diinput Maker **sama persis** dengan kode bayar dari marketplace.
- Periksa kembali nomor rekening, kode bayar, nama sekolah, dan total pembayaran sebelum menekan **Proses**.
- Semua field berstatus **Mandatory** wajib diisi agar transaksi dapat diproses.
- Transaksi dianggap selesai setelah mendapat status **Sukses** dari Releaser. Pantau status transaksi pada aplikasi SIPLah Toko Ladang.
- Simpan bukti transaksi atau resi pembayaran sebagai dokumentasi pertanggungjawaban dana.