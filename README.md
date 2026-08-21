# 🎤 Template Portfolio "Public Speaker"
**by Vixel Creative**

Halo Kreator! Terima kasih telah memilih template portofolio dari Vixel Creative. Berikut adalah panduan lengkap cara mengedit isi website ini. Jangan panik saat melihat kode, semua sudah kami tandai dengan jelas. Ikuti perlahan langkah di bawah ini!

---

## 📝 A. Cara Mengubah Teks & Biodata (PENTING!)

1. Buka file `index.html` menggunakan aplikasi Notepad atau Visual Studio Code.
2. Gunakan fitur Pencarian dengan menekan tombol **Ctrl + F** di keyboard.
3. Cari teks bawaan seperti "Caca", "Creative Youth Fest", atau paragraf biodata, lalu ganti sesuai datamu.
4. Cukup hapus teks bawaan kami, dan ketik teks kamu sendiri. **JANGAN** menghapus tanda kurung sudut HTML seperti `<p>` atau `<h1>`.
5. Simpan dengan menekan **Ctrl + S**.

---

## 🖼️ B. Persiapan File Gambar (BACA INI DULU!)

**⚠️ ATURAN PENAMAAN FILE (SANGAT PENTING AGAR WEB TIDAK ERROR/BLANK):**
Sistem website sangat sensitif terhadap spasi dan huruf besar.
*   ❌ **SALAH:** `Foto Profil Aku.JPG` (Ada spasi & huruf besar)
*   ❌ **SALAH:** `Karya_MC_100%!.png` (Ada simbol)
*   ✅ **BENAR:** `foto-profil-aku.jpg` atau `foto_profil_aku.jpg`

Pastikan **SEMUA** nama file menggunakan **HURUF KECIL, TANPA SPASI** (ganti spasi dengan tanda strip `-` atau garis bawah `_`), dan **TANPA SIMBOL**.

**Ukuran & Tata Letak Gambar:**
*   **Foto Profil:** Gunakan resolusi tajam (format `.jpg`, `.png`, `.jpeg`). Bebas ukuran kotak atau panjang karena sistem akan menyesuaikan.
*   **Foto Panggung/Karya:** Website ini dilengkapi sistem rasio (16:9). Foto panjang/lebar akan otomatis dirapikan menyesuaikan kotak tanpa terlihat melar.
*   **PENTING:** Pindahkan semua file gambar yang sudah di-rename dengan benar ke dalam folder `assets`.

---

## 💼 C. Cara Mengedit Karya / Pengalaman Panggung

1. Di dalam file `index.html`, *scroll* ke bawah dan cari tulisan `<section class="work-section" id="work">`.
2. Untuk mengubah foto *preview* acara, cari baris kode ini: 
   `<img src="assets/images.jpeg" alt="...">`
3. Ubah tulisan di dalam `src="..."` dengan nama file fotomu yang ada di dalam folder `assets`. (Contoh: `assets/mc-jakarta.jpg`).
4. Ganti juga teks di dalam `<h3>` (Judul Acara) dan `<p>` (Deskripsi) sesuai dengan pengalaman panggungmu.

---

## 📱 D. Cara Mengatur Ikon Sosial Media & Kontak

Di bagian paling bawah web (**CONTACT SECTION**), kami sudah menyediakan ikon sosial media lengkap (IG, TikTok, YouTube, LinkedIn).

1. Ketik `mailto:` di fitur pencarian (Ctrl + F), lalu ubah alamat email di sebelahnya menjadi email aslimu.
2. Untuk memasukkan link akun sosmedmu, ganti tanda pagar `#` pada `href="#"` menjadi link profile-mu. 
   *(Contoh IG: `href="https://instagram.com/username_kamu"`)*
3. **HAPUS BARIS KODE** untuk ikon sosial media yang TIDAK KAMU MILIKI agar ikonnya hilang dari layar dan tampilan tetap bersih.

---

## 🚀 E. Cara Online-kan Web (Deploy Gratis)

1. Pastikan file `index.html`, `style.css`, `script.js` dan folder `assets` berada di dalam **satu folder utama yang sama**.
2. Buka browser dan kunjungi website: [Netlify Drop](https://app.netlify.com/drop)
3. Seret (*drag and drop*) folder utamamu tersebut, lalu lepas di dalam lingkaran pada website Netlify.
4. Tunggu beberapa detik, web kamu sudah online dan mendapatkan link yang bisa disebar ke semua orang!

---

## 💡 Bingung atau Mau Terima Beres?

Pusing ngeditnya? Butuh custom tampilan? Ingin ganti link pakai nama sendiri (`.com` / `.my.id`)? Atau sekalian di-hosting-in tanpa ribet?

Kami siap membantu! Langsung hubungi kami:
*   🌐 **Website:** [vixelcreative.my.id](https://vixelcreative.my.id)