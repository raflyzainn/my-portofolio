# PRD: Redesign Homepage Portofolio — Achmad Rafly Khatami Zain

## 1. Ringkasan

Redesign halaman homepage portofolio (`raflyzainn-portofolio.vercel.app`), fokus pada tiga masalah utama:
1. Palet warna saat ini (dark navy + indigo/ungu) terasa generic — sangat mirip template portofolio developer pada umumnya.
2. Hero section kurang "WAH" — layout terlalu center-symmetric, tidak ada elemen visual yang hidup, hierarki tipografi lemah.
3. Section Experience & Skills terasa flat/seragam — semua card punya style identik tanpa variasi, ikon skill saling bentrok warna.

Target akhir: homepage yang terasa curated dan distinctive, bukan hasil template, dengan konsistensi visual dari header sampai footer.

Stack: Next.js (App Router diasumsikan), Tailwind CSS. Sesuaikan dengan struktur project yang sudah ada — jangan rewrite total, migrasikan section per section.

---

## 2. Design system baru — "Pure White + Charcoal + Coral" (light theme)

> Catatan revisi: desain sempat dua kali pivot — dari dark theme "Espresso + Rose", sempat ke "Warm Cream + Terracotta", sekarang final ke **Pure White + Charcoal + Coral**. Prinsip umum (light theme butuh shadow tambahan, opacity glow lebih rendah, dll) tetap berlaku, hanya nilai warna yang berubah.

### 2.1 Palet warna (CSS variables)

Tambahkan sebagai CSS custom properties di `globals.css` (atau file setara), lalu register ke Tailwind config sebagai extended colors.

```css
:root {
  /* Surfaces */
  --bg-base: #ffffff;        /* page background utama, pure white */
  --bg-raised: #f4f2ee;      /* card, nav bar, container terangkat — off-white lembut */
  --bg-raised-hover: #ece9e3; /* hover state untuk card interaktif */
  --border-subtle: #e5e0d8;  /* border default, hairline */
  --border-strong: #d4cdc0;  /* border hover / emphasis */

  /* Text */
  --text-primary: #1c1c1a;   /* heading, teks utama — charcoal, bukan hitam pekat */
  --text-secondary: #4a4842; /* body text, deskripsi */
  --text-muted: #726f68;     /* caption, label kecil, timestamp */

  /* Accent (Coral) */
  --accent: #c1443a;
  --accent-hover: #b23c33;
  --accent-muted: #f5d9d5;   /* dipakai untuk bg badge/pill, bukan teks */
  --accent-on-muted: #8a2c24; /* teks di atas accent-muted */

  /* Semantic (opsional, dipakai sangat jarang) */
  --success: #4f8f66;
  --warning: #b5842a;
}
```

**Penyesuaian penting untuk light theme** (berlaku di semua section):
- Semua efek `filter: grayscale()` + `opacity()` pada icon (lihat 3.4) perlu dihitung ulang nilainya — opacity yang pas untuk dark background biasanya jadi terlalu pudar/nyaris tak kelihatan di atas putih.
- Background glow di hero (lihat 3.2) opacity-nya harus rendah (target 0.04-0.05) karena glow warna gelap di atas background putih gampang terlihat seperti noda, bukan efek cahaya.
- Shadow/elevation: karena base sekarang pure white dan card pakai off-white (`--bg-raised`), kontrasnya sangat halus — butuh `box-shadow` tipis (`0 1px 3px rgba(28, 28, 26, 0.06)`) selain border supaya card tetap kebaca sebagai elemen terangkat, bukan cuma beda satu-dua persen brightness dari background.
- Karena base putih polos (bukan cream yang punya warm undertone), pastikan `--accent` coral dipakai cukup sering di titik-titik kecil (dot timeline, active badge, hover state) supaya halaman tidak terasa terlalu steril/kosong — coral di sini yang jadi "penghangat" satu-satunya.

### 2.2 Tipografi

- Font tetap pakai yang sudah dipakai sekarang (cek konsistensi), tapi opsional eksplorasi monospace untuk label kecil (badge, timestamp) agar konsisten dengan gaya "engineering" — contoh: `IBM Plex Mono` atau `JetBrains Mono` untuk elemen seperti `FRONT END ENGINEER • AVAILABLE`, tanggal, dan label section.
- Hierarki ukuran:
  - Nama (H1 hero): `clamp(2.75rem, 7vw, 5.5rem)`, font-weight 700–800.
  - Tagline/typing text: `1.25rem–1.5rem`, font-weight 500.
  - Section heading (H2, misal "Experience", "Skills"): `2rem`, font-weight 700.
  - Body/deskripsi card: `0.9375rem`, line-height 1.6.

### 2.3 Prinsip pemakaian warna

- `--bg-base` (pure white) untuk body/page background.
- `--bg-raised` (off-white lembut) untuk semua card (Experience, Organizational Experience, Skills group) — kontrasnya halus, dibantu shadow tipis (lihat 2.1).
- Accent coral (`--accent`) dipakai **selektif tapi cukup sering muncul**: nama highlight di hero, active nav state, hover border card, dot timeline aktif, ikon skill (lihat 3.4). Karena base-nya putih polos (bukan warm cream), coral jadi satu-satunya sumber "kehangatan" di halaman — jangan terlalu pelit makainya, tapi tetap treat sebagai spot color, bukan warna dominan besar-besaran.
- Hindari gradient ungu/biru dari desain lama — ganti dengan radial glow coral yang sangat subtle (lihat catatan opacity di 2.1 dan 3.2).

---

## 3. Spesifikasi per section

### 3.1 Header/Navigation

**Masalah saat ini**: floating pill nav mengambang di tengah dengan banyak ruang kosong kiri-kanan, terasa kosong.

**Perubahan**:
- Ganti ke full-width bar: logo/monogram ("ARZ" atau inisial custom) di kiri, nav items (Home, Projects, About, Resume) di kanan.
- Background: `--bg-base` dengan bottom border 0.5px `--border-subtle`, sticky on scroll dengan sedikit backdrop-blur + background jadi `--bg-raised` saat sudah scroll (opsional, beri efek "elevated on scroll").
- Nav item active state: warna teks jadi `--accent`, dengan underline tipis 2px `--accent` di bawahnya.
- Nav item hover: transisi warna teks ke `--text-primary` (jika default `--text-secondary`), durasi 150ms.

### 3.2 Hero Section

**Masalah saat ini**: layout center-symmetric, background glow statis, kurang elemen visual, redundansi antara typing text dan deskripsi di bawahnya. Tambahan temuan (dari implementasi v2): setelah layout diubah ke asymmetric (teks kiri + code card kanan), hero masih terasa tidak full-width — ada dead space besar di kanan-atas dan kanan-bawah code card karena container terlalu sempit relatif ke lebar layar dan tidak ada elemen yang "menahan" ruang tersebut.

**Perubahan**:
1. **Layout**: asymmetric split — teks (badge, nama, tagline, CTA) di kiri/tengah-kiri, area kanan diisi elemen visual. Sudah diimplementasikan: kartu kode/snippet yang di-tilt sedikit (`rotate(-2deg)` sampai `-3deg`) menampilkan potongan kode nyata dari salah satu project (Vue/Next.js).
2. **Fix full-width/full-bleed** (prioritas utama, belum solved di v2):
   - Ganti container hero dari `max-width` sempit (kemungkinan ~1200-1400px) jadi `max-width: min(1600px, 92vw)`, sehingga di layar besar (≥1600px) ruang kosong berkurang signifikan.
   - Background grid pattern (garis-garis tipis existing) harus render **full-bleed**, nempel ke ujung kiri-kanan viewport (`width: 100vw`, bukan dibatasi container), independen dari lebar container konten.
   - Tambahkan elemen pengisi ruang di sekitar code card supaya area kanan tidak terasa kosong:
     - Floating badge kecil tambahan di pojok kanan-atas hero (contoh isi: "3+ years learning", "Open to collaborate", atau counter jumlah project) — posisi absolute, ukuran kecil (font 11-12px), background `--bg-raised` + border `--border-subtle`.
     - Elemen dekoratif tambahan di bawah/samping code card: bisa berupa 1-2 baris statistik singkat (contoh: "12+ repos", "3 internships") dalam format inline dengan divider tipis, atau dot-grid pattern kecil sebagai aksen (bukan konten, murni dekoratif, opacity rendah).
   - Pastikan code card sendiri punya `max-width` proporsional (jangan terlalu kecil dibanding ruang yang tersedia) — target lebar card sekitar 40-45% dari lebar konten area kanan pada desktop.
3. **Background glow**: ganti radial gradient ungu jadi radial glow coral sangat subtle — di light theme opacity harus rendah karena warna gelap di atas putih gampang terlihat seperti noda: `background: radial-gradient(circle at 30% 20%, var(--accent) 0%, transparent 40%); opacity: 0.05`.
4. **Spotlight cursor effect (opsional, nice-to-have)**: radial gradient rose subtle yang mengikuti posisi mouse di dalam hero container, pakai `mousemove` listener, update CSS variable `--mouse-x`/`--mouse-y`.
5. **Badge "FRONT END ENGINEER • AVAILABLE"**: tambahkan pulsing dot hijau kecil (`--success`) sebelum kata "AVAILABLE", animasi `@keyframes pulse` scale + opacity loop 2s.
6. **Copy hierarchy** (sudah diimplementasikan sebagian di v2, pertahankan arah ini):
   - Baris 1 (typing animation): statement singkat, contoh sudah bagus: "I'm crafting interfaces."
   - Baris 2 (deskripsi statis di bawah): sudah spesifik menyebut stack (Next.js, Vue, Go) — pertahankan pola ini, jangan kembalikan ke copy generic.
7. **CTA buttons** (`Explore`, `Download CV | PDF`):
   - Primary (`Explore`): background `--accent`, teks warna gelap dari ramp accent, pastikan kontras AA, hover: `--accent-hover` + `transform: scale(1.03)` + subtle box-shadow rose.
   - Secondary (`Download CV`): border 1px `--border-strong`, transparent bg, hover: border jadi `--accent`, teks jadi `--accent`.
   - Catatan: pastikan kedua tombol punya visual weight yang jelas beda (primary jauh lebih menonjol dari secondary) — di v2 saat ini keduanya terlihat hampir setara karena Explore belum punya fill/background yang kontras.

### 3.3 Experience & Organizational Experience Section

**Masalah saat ini**: semua entri diperlakukan identik — box dengan border, judul, tanggal, bullet list — padahal secara informasi bobotnya beda (role yang masih berjalan vs yang sudah lama selesai). Mengganti warna saja tidak menghasilkan perbedaan struktural; yang perlu diubah adalah layout-nya.

**Konsep baru: alternating (zigzag) timeline dengan sumbu di tengah**

Ganti list-of-boxes jadi timeline dua kolom dengan garis vertikal di **tengah** (bukan di kiri seperti versi sebelumnya), entri tersusun selang-seling kiri-kanan secara berurutan (entri 1 di kanan, entri 2 di kiri, entri 3 di kanan, dst — atau sebaliknya, konsisten mulai dari entri pertama).

- **Struktur layout**:
  - Container relatif (`position: relative`), garis vertikal `position: absolute; left: 50%; transform: translateX(-50%); width: 1px; background: var(--border-strong)` membentang dari dot pertama sampai dot terakhir dalam satu grup.
  - Setiap entri adalah row dengan `display: flex`, entri urutan ganjil `justify-content: flex-end` (card nempel ke sisi kiri sumbu, dengan `margin-right` untuk jarak dari garis), entri urutan genap `justify-content: flex-start` (card nempel ke sisi kanan sumbu, `margin-left` untuk jarak).
  - Card punya `width` tetap/max-width (misal `min(420px, 44%)` dari container — dilebarkan sedikit dari estimasi awal karena sekarang card berisi bullet list deskripsi lengkap, bukan cuma judul+tanggal, jadi butuh ruang lebih) supaya tidak melebar penuh dan pola zigzag-nya tetap kebaca jelas.
  - Dot penanda: `position: absolute; left: 50%; transform: translateX(-50%)`, sejajar vertikal dengan bagian atas tiap card.
- **Role aktif (tanggal mengandung "Present")**:
  - Card penuh: `background: var(--bg-raised)`, `border: 0.5px solid var(--border-subtle)`, `box-shadow: 0 1px 3px rgba(43,36,29,0.06)`, `border-radius: 10px`, padding `12px 14px` sampai `1rem 1.25rem`.
  - Badge kecil "active": `background: var(--accent-muted)`, `color: var(--accent-on-muted)`, `font-size: 10-11px` (pastikan tidak terlalu kecil sampai tidak terbaca — ini masalah di implementasi sebelumnya), `padding: 2px 8px`, `border-radius: 4px`, posisi inline setelah judul dengan `margin-left: 6px`.
  - Dot di sumbu tengah: lingkaran solid 8-9px, `background: var(--accent)`, beri `border: 2px solid var(--bg-base)` supaya dot terlihat "berlapis" di atas garis vertikal.
- **Role yang sudah selesai**:
  - Card lebih ringkas: tanpa shadow, border lebih tipis/`var(--border-subtle)`, padding lebih kecil (`8px 12px`), font judul `12-13px`, warna `var(--text-secondary)`.
  - Dot di sumbu tengah: lingkaran lebih kecil (5-6px), `background: var(--border-strong)` (bukan accent), tanpa border putih tambahan — supaya kontras visual dengan dot role aktif jelas kelihatan.
  - Teks di dalam card untuk role selesai bisa rata kanan jika card berada di sisi kiri sumbu, dan rata kiri jika card di sisi kanan sumbu (`text-align` mengikuti sisi) — terapkan ini hanya untuk judul dan tanggal, jangan untuk bullet list job description (bullet list tetap rata kiri seperti biasa supaya tetap mudah dibaca, membalik alignment bullet list justru bikin sulit dibaca).
- Detail bullet list (job description) **selalu ditampilkan** untuk kedua tipe entry (role aktif maupun yang sudah selesai) — tidak disembunyikan/accordion. Untuk role yang sudah selesai, tetap gunakan card yang lebih ringkas (border tipis, tanpa shadow, padding lebih kecil) seperti dijelaskan di atas, tapi bullet list job description tetap included di dalam card tersebut, hanya dengan font sedikit lebih kecil (`0.8125rem` vs `0.875rem` untuk role aktif) supaya hierarki visual tetap kebaca.

**Responsive (mobile)**: pola dua kolom zigzag ini **tidak jalan di layar sempit** — pada breakpoint mobile (`<768px`), turunkan jadi single-column: garis vertikal pindah ke kiri (bukan tengah), semua card `justify-content: flex-start` dengan `margin-left` konsisten, dot juga pindah ke kiri. Jangan paksakan alternating layout di mobile.

**Spacing antar grup**:
- Section "Organizational Experience" beri margin-top lebih besar (`4rem` alih-alih spacing default) supaya terasa sebagai grup baru, bukan lanjutan langsung dari "Professional Experience".
- Setiap grup (Professional Experience, Organizational Experience) render sebagai timeline terpisah dengan garis vertikal masing-masing (masing-masing mulai hitung urutan ganjil/genap dari 1 lagi) — jangan disambung jadi satu garis panjang lintas grup.

### 3.4 Skills Section

**Masalah saat ini**: ikon pakai warna brand asli masing-masing (bentrok satu sama lain), tidak ada label/tooltip, tidak ada hierarki (semua ikon ukuran sama rata).

**Perubahan**:
1. **Monochrome default state**: semua ikon skill di-render dalam satu warna (`--text-muted` atau `--text-secondary`) menggunakan `filter: grayscale(1) opacity(0.75)` (opacity lebih tinggi dari asumsi dark theme sebelumnya — di atas background terang, opacity rendah bikin ikon nyaris tak kelihatan) atau ganti asset ke versi outline single-color jika tersedia.
2. **Hover state**: on-hover, ikon kembali ke warna brand aslinya (`filter: none`) + slight scale `1.1` + tooltip kecil muncul di bawah ikon menampilkan nama teknologi (pakai `title` attribute minimal, atau custom tooltip component jika ingin lebih polished).
3. **Grouping card** (`Languages`, `Frameworks & Libraries`, `Tools`): pertahankan struktur grouping yang sudah ada, tapi beri variasi background tipis antar grup — misal card "Frameworks & Libraries" `background: var(--bg-raised)` sedikit lebih terang dari card "Languages" (`--bg-base` dengan border), untuk memecah monotoni visual.
4. **Highlight skill utama**: untuk stack yang paling dikuasai (Vue.js, Next.js, Go — berdasarkan pengalaman profesional), beri ukuran ikon sedikit lebih besar (28px vs 20px default) atau tambahkan small badge "Core" di pojok ikon.

### 3.5 Contact Section

- Belum terlihat detail di screenshot, tapi terapkan konsistensi design system yang sama: card dengan `--bg-raised`, CTA button primary pakai `--accent`, ikon sosial media (GitHub, LinkedIn, dll) ikuti pola monochrome-then-color-on-hover yang sama seperti section Skills.

---

## 4. Motion & interaksi (cross-section)

- Semua transisi warna/transform: `transition: all 200ms ease-out` sebagai default, jangan lebih dari 300ms (biar tidak terasa lambat).
- Scroll-triggered fade/slide-in untuk setiap card di Experience & Skills section (intersection observer atau library seperti Framer Motion `whileInView`, `initial={{opacity:0, y:16}}`, `animate={{opacity:1, y:0}}`).
- Hindari animasi yang re-trigger setiap kali scroll naik-turun (gunakan `viewport={{ once: true }}` jika pakai Framer Motion).

---

## 5. Non-goals

- Tidak mengubah struktur konten/copy secara besar-besaran (kecuali deskripsi hero di 3.2 poin 5).
- Tidak mengganti font family kecuali eksplorasi monospace untuk label kecil (opsional, bukan wajib).
- Tidak membangun ulang navigasi routing/struktur halaman — hanya restyle komponen yang sudah ada.

---

## 6. Acceptance criteria

- [ ] Seluruh palet warna baru (`--bg-base`, `--bg-raised`, `--accent`, dst — Pure White + Charcoal + Coral) diterapkan konsisten di semua section, tidak ada warna hardcoded lama (indigo/ungu/dark theme) yang tersisa.
- [ ] Header full-width dengan logo kiri + nav kanan, active/hover state berfungsi.
- [ ] Hero section asymmetric layout dengan elemen visual di sisi kanan, background glow coral subtle, badge availability dengan pulsing dot.
- [ ] Hero terasa full-bleed di layar besar — tidak ada dead space kosong signifikan di kanan-atas/kanan-bawah code card, background grid pattern nempel sampai ujung viewport.
- [ ] Tombol Explore (primary) dan Download CV (secondary) punya visual weight yang jelas beda — bukan terlihat setara.
- [ ] Section Experience & Organizational Experience dirender sebagai alternating (zigzag) timeline dua kolom dengan sumbu garis di tengah — card selang-seling kiri-kanan, bukan list-of-boxes satu kolom.
- [ ] Role aktif ("Present") tampil sebagai card dengan shadow + badge "active" yang terbaca jelas (bukan terlalu kecil); role selesai tampil sebagai card lebih ringkas dengan dot timeline yang lebih kecil/kurang menonjol.
- [ ] Deskripsi pekerjaan (bullet list) tetap tampil penuh di kedua tipe card (aktif maupun selesai) — tidak disembunyikan di balik accordion.
- [ ] Timeline zigzag turun jadi single-column (bukan dua kolom) di breakpoint mobile.
- [ ] Skill icons: default monochrome, hover kembali ke warna asli + tooltip nama teknologi muncul.
- [ ] Semua kontras warna teks-terhadap-background lolos minimal WCAG AA (terutama teks `--text-secondary`/`--text-muted` di atas `--bg-base`).
- [ ] Tidak ada regresi responsive — cek breakpoint mobile (nav collapse ke hamburger jika belum ada, hero layout jadi single-column stack).