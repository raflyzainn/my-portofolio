# PRD: Redesign Halaman Projects — Achmad Rafly Khatami Zain

## 1. Ringkasan

Redesign halaman `/projects` pada portofolio (`raflyzainn-portofolio.vercel.app`). Fokus masalah utama:
1. Thumbnail antar project punya "look" yang sangat berbeda satu sama lain (dark UI, ilustrasi warna-warni, screenshot dengan carousel arrow nempel, background putih polos) — grid terasa acak-acakan karena tidak ada framing visual yang menyatukan.
2. Tag teknologi masih generic (outline hitam-putih polos), tidak mengikuti design system baru dan tidak ada hierarki (semua tag terlihat sama pentingnya).
3. Card tidak punya akses langsung ke live demo atau repo — recruiter harus masuk ke detail page dulu untuk menemukan link.
4. Tidak ada hover state/interaksi yang menandakan card itu clickable.
5. Elemen "4 items" di pojok kanan atas underutilized — berpotensi jadi filter, bukan cuma counter statis.

Halaman ini menggunakan design system yang sama dengan homepage: **Pure White + Charcoal + Coral** (lihat PRD redesign homepage untuk detail lengkap token warna). PRD ini fokus spesifik ke komponen dan layout halaman Projects.

Stack: Next.js, Tailwind CSS. Migrasi per komponen, jangan rewrite total.

---

## 2. Referensi design token (sama dengan homepage)

Gunakan CSS variables yang sama persis dengan homepage redesign, jangan buat token warna baru khusus halaman ini:

```css
:root {
  --bg-base: #ffffff;
  --bg-raised: #f4f2ee;
  --bg-raised-hover: #ece9e3;
  --border-subtle: #e5e0d8;
  --border-strong: #d4cdc0;

  --text-primary: #1c1c1a;
  --text-secondary: #4a4842;
  --text-muted: #726f68;

  --accent: #c1443a;
  --accent-hover: #b23c33;
  --accent-muted: #f5d9d5;
  --accent-on-muted: #8a2c24;
}
```

---

## 3. Spesifikasi komponen

### 3.1 Page header ("Selected Projects" + counter)

**Masalah saat ini**: judul dan counter "4 items" berdiri sendiri tanpa fungsi tambahan.

**Perubahan**:
- Pertahankan judul "Selected Projects" dan style-nya.
- Ubah counter "4 items" jadi **filter chip row** di sisi kanan (atau di bawah judul pada mobile): chip "All" (default active), lalu chip per kategori/stack utama yang relevan (misal "Frontend", "Fullstack", "Research") — derive dari tag project yang ada, jangan hardcode kategori yang tidak dipakai.
- Chip aktif: `background: var(--accent-muted)`, `color: var(--accent-on-muted)`. Chip inactive: `background: transparent`, `border: 0.5px solid var(--border-subtle)`, `color: var(--text-secondary)`.
- Filter murni client-side (tidak perlu routing/query param kecuali mau di-share sebagai link, opsional).
- Jika jumlah project masih sedikit (4 seperti sekarang), filter ini boleh disembunyikan dulu dan baru dimunculkan saat project bertambah (>6 item) — evaluasi berdasarkan kebutuhan aktual, jangan over-engineer untuk 4 item.

### 3.2 Project card — struktur & framing thumbnail

**Masalah saat ini**: setiap thumbnail render dengan gaya visual asli masing-masing project (dark UI, ilustrasi, foto, carousel), tanpa framing yang menyatukan, membuat grid terasa tidak konsisten.

**Perubahan**:
1. **Browser-chrome frame seragam** membungkus setiap thumbnail:
   - Container thumbnail: `border-radius: 8px`, `overflow: hidden`, `background: #1c1c1a` (dark frame, konsisten untuk semua card terlepas dari warna asli screenshot di dalamnya).
   - Bar atas frame: `height: ~28px`, `background: sedikit lebih terang dari frame utama (#2a2a27)`, berisi 3 dot kecil (7px, `background: #726f68`) rata kiri sebagai representasi tombol close/minimize/maximize browser — murni dekoratif.
   - Area screenshot di bawah bar: `height` konsisten antar semua card (misal `180-200px` pada desktop), `object-fit: cover` untuk gambar/screenshot asli supaya tidak gepeng/stretch.
   - **Untuk project dengan live embed/carousel (seperti EduMap Bandung saat ini)**: ganti jadi static screenshot juga, bukan live iframe — supaya konsisten dengan card lain dan tidak ada elemen interaktif (arrow carousel) yang "bocor" keluar dari framing card.
2. **Header card** (di bawah thumbnail): `display: flex; justify-content: space-between; align-items: flex-start`.
   - Kiri: judul project, `font-size: 15px`, `font-weight: 500`, `color: var(--text-primary)`.
   - Kanan: dua icon kecil (Tabler `ti-external-link` untuk live demo, `ti-brand-github` untuk repo), `font-size: 16px`, `color: var(--text-muted)` default, `color: var(--accent)` on hover. Sembunyikan icon yang tidak relevan (misal jika project tidak punya live demo publik, tampilkan repo icon saja).
3. **Deskripsi**: pertahankan satu-dua baris singkat seperti sekarang, `font-size: 12.5px`, `color: var(--text-secondary)`, `line-height: 1.5`.
4. **Tag teknologi** — beri hierarki, bukan rata semua:
   - Tag **primer** (stack utama/paling representatif untuk project itu, maksimal 1-2 tag): `background: var(--accent-muted)`, `color: var(--accent-on-muted)`.
   - Tag **sekunder** (pendukung): `background: var(--bg-raised)` atau `border: 0.5px solid var(--border-subtle)`, `color: var(--text-secondary)`.
   - Semua tag: `font-size: 10.5px`, `padding: 3px 8px`, `border-radius: 4px`, `display: flex; flex-wrap: wrap; gap: 6px`.

### 3.3 Card container & hover state

**Masalah saat ini**: card statis, tidak ada indikasi interaktif.

**Perubahan**:
- Card wrapper: `background: var(--bg-raised)`, `border: 0.5px solid var(--border-subtle)`, `border-radius: 12px`, padding `1rem 1.25rem`.
- Hover state: `border-color: var(--accent)` (atau `var(--border-strong)` jika ingin lebih subtle), `transform: translateY(-4px)`, `box-shadow: 0 4px 12px rgba(28,28,26,0.08)`, transisi `200ms ease-out`.
- Icon external-link/GitHub di header card: opacity `0.6` default, `1` on card-hover (bukan hanya on-icon-hover) supaya terasa "muncul" saat card di-hover, memberi sinyal ada aksi tambahan di sana.
- Seluruh card clickable (menuju detail project jika ada halaman detail), kecuali area icon link yang stop propagation ke link masing-masing (external-link dan GitHub icon punya `href` sendiri, tidak ikut trigger navigasi ke detail page).

### 3.4 Grid layout

- Pertahankan grid 2 kolom pada desktop (`grid-template-columns: repeat(2, 1fr)`), gap `1.5rem`.
- Breakpoint mobile (`<768px`): turun jadi 1 kolom.
- Jika filter chip (3.1) diimplementasikan: gunakan simple fade/scale transition saat card difilter keluar-masuk (`opacity` + `scale(0.96)` on hidden, jangan animasi layout-shift yang kasar).

---

## 4. Non-goals

- Tidak membangun halaman detail project baru (di luar scope PRD ini) — asumsikan detail page sudah ada atau belum diperlukan.
- Tidak mengubah konten/copy deskripsi project kecuali diperlukan untuk konsistensi panjang teks antar card.
- Filter chip (3.1) adalah **nice-to-have**, bukan prioritas utama — prioritaskan dulu framing thumbnail (3.2) dan hover state (3.3) karena itu yang paling terasa dampaknya secara visual.

---

## 5. Acceptance criteria

- [ ] Semua thumbnail project dibungkus browser-chrome frame yang seragam (3 dot + bar atas gelap), terlepas dari gaya visual screenshot aslinya.
- [ ] Tidak ada elemen live/interaktif (carousel arrow, dsb) yang bocor keluar dari framing card — semua thumbnail berupa static image.
- [ ] Tinggi area thumbnail konsisten antar semua card dalam grid.
- [ ] Tag teknologi punya hierarki visual jelas: tag primer (aksen coral) vs tag sekunder (netral).
- [ ] Setiap card punya icon live-demo dan/atau repo yang bisa diklik langsung tanpa masuk ke detail page, dan klik pada icon ini tidak trigger navigasi card secara keseluruhan.
- [ ] Card punya hover state yang jelas (lift + border/shadow berubah).
- [ ] Grid responsive: 2 kolom desktop, 1 kolom mobile.
- [ ] Warna yang dipakai konsisten dengan design system homepage (Pure White + Charcoal + Coral), tidak ada token warna baru yang menyimpang.