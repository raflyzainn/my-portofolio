# PRD: Redesign Homepage Portofolio — Achmad Rafly Khatami Zain

## 1. Ringkasan

Redesign halaman homepage portofolio (`raflyzainn-portofolio.vercel.app`), fokus pada tiga masalah utama:
1. Palet warna saat ini (dark navy + indigo/ungu) terasa generic — sangat mirip template portofolio developer pada umumnya.
2. Hero section kurang "WAH" — layout terlalu center-symmetric, tidak ada elemen visual yang hidup, hierarki tipografi lemah.
3. Section Experience & Skills terasa flat/seragam — semua card punya style identik tanpa variasi, ikon skill saling bentrok warna.

Target akhir: homepage yang terasa curated dan distinctive, bukan hasil template, dengan konsistensi visual dari header sampai footer.

Stack: Next.js (App Router diasumsikan), Tailwind CSS. Sesuaikan dengan struktur project yang sudah ada — jangan rewrite total, migrasikan section per section.

---

## 2. Design system baru — "Espresso + Rose"

### 2.1 Palet warna (CSS variables)

Tambahkan sebagai CSS custom properties di `globals.css` (atau file setara), lalu register ke Tailwind config sebagai extended colors.

```css
:root {
  /* Surfaces */
  --bg-base: #120d0f;        /* page background utama */
  --bg-raised: #1e1518;      /* card, nav pill, container terangkat */
  --bg-raised-hover: #271a1e; /* hover state untuk card interaktif */
  --border-subtle: #2a1e22;  /* border default, hairline */
  --border-strong: #3d2a2f;  /* border hover / emphasis */

  /* Text */
  --text-primary: #f7e8e2;   /* heading, teks utama */
  --text-secondary: #c9b4ac; /* body text, deskripsi */
  --text-muted: #a08088;     /* caption, label kecil, timestamp */

  /* Accent (Rose) */
  --accent: #e08a9a;
  --accent-hover: #e8a3b0;
  --accent-muted: #6b3f47;   /* dipakai untuk bg badge/pill, bukan teks */
  --accent-on-muted: #f2c9d1; /* teks di atas accent-muted */

  /* Semantic (opsional, dipakai sangat jarang) */
  --success: #8fbf9f;
  --warning: #e0b878;
}
```

### 2.2 Tipografi

- Font tetap pakai yang sudah dipakai sekarang (cek konsistensi), tapi opsional eksplorasi monospace untuk label kecil (badge, timestamp) agar konsisten dengan gaya "engineering" — contoh: `IBM Plex Mono` atau `JetBrains Mono` untuk elemen seperti `FRONT END ENGINEER • AVAILABLE`, tanggal, dan label section.
- Hierarki ukuran:
  - Nama (H1 hero): `clamp(2.75rem, 7vw, 5.5rem)`, font-weight 700–800.
  - Tagline/typing text: `1.25rem–1.5rem`, font-weight 500.
  - Section heading (H2, misal "Experience", "Skills"): `2rem`, font-weight 700.
  - Body/deskripsi card: `0.9375rem`, line-height 1.6.

### 2.3 Prinsip pemakaian warna

- `--bg-base` untuk body/page background.
- `--bg-raised` untuk semua card (Experience, Organizational Experience, Skills group).
- Accent rose (`--accent`) dipakai **selektif**: nama highlight di hero, active nav state, hover border card, ikon skill (lihat 3.4). Jangan jadikan dominan di semua elemen — treat sebagai spot color.
- Hindari gradient ungu/biru yang sekarang dipakai di background hero — ganti dengan radial glow rose yang jauh lebih subtle (opacity rendah, lihat 3.2).

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

**Masalah saat ini**: layout center-symmetric, background glow statis, kurang elemen visual, redundansi antara typing text dan deskripsi di bawahnya.

**Perubahan**:
1. **Layout**: ubah dari full-center ke asymmetric split — teks (nama, tagline, CTA) di kiri/tengah-kiri, area kanan diisi elemen visual (pilih salah satu, urutan prioritas):
   - Kartu kode/snippet yang di-tilt sedikit (`rotate(-3deg)`) menampilkan potongan kode nyata (misal snippet dari salah satu project Next.js/Go).
   - Grid kecil 3-4 thumbnail project dengan efek hover scale.
   - Avatar/foto dengan efek border accent rose subtle.
2. **Background**: ganti radial gradient ungu jadi radial glow rose sangat subtle (`background: radial-gradient(circle at 30% 20%, var(--accent) 0%, transparent 40%); opacity: 0.08`), ditambah grid pattern existing (pertahankan, hanya ganti warna garis grid jadi `--border-subtle`).
3. **Spotlight cursor effect (opsional, nice-to-have)**: radial gradient rose subtle yang mengikuti posisi mouse di dalam hero container, pakai `mousemove` listener, update CSS variable `--mouse-x`/`--mouse-y`.
4. **Badge "FRONT END ENGINEER • AVAILABLE"**: tambahkan pulsing dot hijau kecil (`--success`) sebelum kata "AVAILABLE", animasi `@keyframes pulse` scale + opacity loop 2s.
5. **Copy hierarchy**: 
   - Baris 1 (typing animation): pertahankan sebagai statement singkat, misal "I'm building clean, accessible interfaces."
   - Baris 2 (deskripsi statis di bawah): ubah jadi lebih spesifik/teknikal, bukan mengulang kalimat yang sama — contoh arah: sebutkan stack utama (Next.js, Vue, Go) dan value konkret, bukan generic "visually engaging, easy to navigate".
6. **CTA buttons** (`Explore`, `Download CV | PDF`):
   - Primary (`Explore`): background `--accent`, teks warna gelap dari ramp accent (`--bg-base` atau warna gelap khusus, pastikan kontras AA), hover: `--accent-hover` + `transform: scale(1.03)` + subtle box-shadow rose.
   - Secondary (`Download CV`): border 1px `--border-strong`, transparent bg, hover: border jadi `--accent`, teks jadi `--accent`.

### 3.3 Experience & Organizational Experience Section

**Masalah saat ini**: semua card identik persis (border, radius, padding sama), tidak ada hover/interaktivitas, tidak ada pemisah visual antar section penting.

**Perubahan**:
- Card base: `background: var(--bg-raised)`, `border: 0.5px solid var(--border-subtle)`, `border-radius: 12px`, padding `1.25rem 1.5rem`.
- Hover state pada setiap card: `border-color: var(--border-strong)` + `transform: translateY(-2px)`, transisi 200ms ease-out.
- Tambahkan left-border accent 2px `--accent` khusus untuk role/pengalaman yang sedang berjalan (badge "Present" pada tanggal), bedakan dari pengalaman yang sudah selesai.
- Section "Organizational Experience" beri margin-top lebih besar (`4rem` alih-alih spacing default) supaya terasa sebagai grup baru, bukan lanjutan langsung dari "Professional Experience".
- Opsional: convert list card jadi vertical timeline — garis vertikal tipis `--border-subtle` di kiri, dot `--accent` di titik setiap card, connecting line antar card.

### 3.4 Skills Section

**Masalah saat ini**: ikon pakai warna brand asli masing-masing (bentrok satu sama lain), tidak ada label/tooltip, tidak ada hierarki (semua ikon ukuran sama rata).

**Perubahan**:
1. **Monochrome default state**: semua ikon skill di-render dalam satu warna (`--text-muted` atau `--text-secondary`) menggunakan `filter: grayscale(1) opacity(0.6)` atau ganti asset ke versi outline single-color jika tersedia.
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
// trigger build & deploy ke staging, lalu cek visual di browser (desktop + mobile) untuk memastikan semua perubahan diterapkan sesuai design system baru.

- [ ] Seluruh palet warna baru (`--bg-base`, `--bg-raised`, `--accent`, dst.) diterapkan konsisten di semua section, tidak ada warna hardcoded lama (indigo/ungu) yang tersisa.
- [ ] Header full-width dengan logo kiri + nav kanan, active/hover state berfungsi.
- [ ] Hero section asymmetric layout dengan elemen visual di sisi kanan, background glow rose subtle, badge availability dengan pulsing dot.
- [ ] Card Experience & Organizational Experience punya hover state (border + lift) dan spacing yang membedakan antar sub-section.
- [ ] Skill icons: default monochrome, hover kembali ke warna asli + tooltip nama teknologi muncul.
- [ ] Semua kontras warna teks-terhadap-background lolos minimal WCAG AA (terutama teks `--text-secondary`/`--text-muted` di atas `--bg-base`).
- [ ] Tidak ada regresi responsive — cek breakpoint mobile (nav collapse ke hamburger jika belum ada, hero layout jadi single-column stack).