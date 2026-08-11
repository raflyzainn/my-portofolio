# PRD — One-Page Portfolio (Homepage)

> Menggantikan 3 PRD sebelumnya. Struktur situs: single-page (`/`) dengan anchor nav, ditambah `/resume` terpisah.

## 1. Ringkasan & tujuan

Portofolio jadi satu halaman scroll penuh: hero, experience, skills, projects (expandable), contact. Nav anchor scroll, bukan pindah route. Target: recruiter/HR bisa dapet gambaran lengkap dalam satu scroll tanpa nge-klik ke halaman lain.

## 2. Struktur file (Next.js App Router + Tailwind)

```
app/
  page.tsx                  → render semua section berurutan
  resume/page.tsx           → tetap terpisah
components/
  home/
    Nav.tsx                 → sticky nav + active-section highlight
    Hero.tsx
    Experience.tsx          → wraps ExperienceItem
    ExperienceItem.tsx
    Skills.tsx
    Projects.tsx            → wraps ProjectItem + expand/collapse state
    ProjectItem.tsx
    Contact.tsx
data/
  portfolio.ts               → export experience[], skills[], projects[], contact[]
lib/
  useActiveSection.ts         → hook Intersection Observer untuk nav
```

Kenapa dipecah per komponen: tiap section punya kemungkinan berubah data terpisah (nambah experience, nambah project) tanpa harus nyentuh section lain, dan gampang di-test/di-preview satu-satu.

## 3. Data contract (`data/portfolio.ts`)

```ts
export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;        // format: "Feb 2026 - Jun 2026"
  location?: string;
  summary: string;        // 1 kalimat, max ±120 karakter
}

export interface SkillTag {
  label: string;
  primary: boolean;       // true = max 4 skill, styling coral
}

export interface ProjectEntry {
  id: string;
  name: string;
  year: string;
  description: string;    // max ±130 karakter
  tags: { label: string; primary: boolean }[]; // max 4 tag, max 2 primary
  href?: string;           // link ke repo/demo, opsional
}

export interface ContactLink {
  platform: 'email' | 'linkedin' | 'github';
  url: string;             // "mailto:..." untuk email
  icon: string;             // tabler icon name, e.g. "ti-mail"
}
```

Validasi konten (biar konsisten secara visual, bukan cuma teknis):
- `summary` dan `description` HARUS 1 kalimat, tidak boleh multi-kalimat — kalau lebih dari ±130 karakter, dipangkas manual saat input data, bukan di-truncate otomatis dengan CSS `line-clamp` (biar nggak kepotong di tengah kata secara aneh)
- `primary: true` pada skills dibatasi keras di 4 — kalau lebih, urutan berdasarkan tingkat kemahiran/paling sering dipakai
- `tags` per project maksimal 4, primary tags maksimal 2

## 4. Nav — spesifikasi teknis

- Container: `position: sticky; top: 0; z-index: 40; background: var(--surface-2)`
- Border bawah muncul HANYA setelah `scrollY > 8px` (pakai scroll listener atau `useState` + `useEffect`), biar pas di paling atas halaman nav-nya nyatu sama hero tanpa garis
- Height: 64px, padding horizontal mengikuti max-width container (680px, centered, dengan padding 24px kiri-kanan di mobile)
- Nav item aktif: dideteksi pakai `IntersectionObserver` dengan `threshold: 0.3` dan `rootMargin: "-64px 0px -60% 0px"` (offset atas 64px buat nav height, bottom margin gede biar section "aktif" sebelum bener-bener nyampe tengah viewport)
- Klik nav item: `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`, atau native `<a href="#experience">` + CSS `scroll-margin-top: 80px` di tiap section (biar nggak ketutup nav pas landing)
- Mobile (<640px): nav item tetap horizontal (4 kata pendek: experience/skills/projects/contact, kemungkinan besar muat), font dikecilin ke 11px kalau perlu. Kalau setelah dicoba beneran nggak muat, fallback ke hamburger — tapi defaultnya coba horizontal dulu

## 5. Hero — spesifikasi

- Section `id="hero"`, padding vertikal 48px atas (setelah nav) / 40px bawah
- H1 nama: `text-[30px] font-medium leading-tight`
- Intro: `text-sm text-[var(--text-secondary)] leading-relaxed max-w-[480px]`
- Stats row: `flex gap-6`, tiap item `flex items-baseline gap-1`, angka `text-lg font-medium text-[#D85A30]`, label `text-[11px] text-[var(--text-muted)]`
- Tidak ada CTA button di hero (karena nav udah anchor ke semua section, CTA button jadi redundant)

## 6. Experience — spesifikasi

- Section `id="experience" class="scroll-mt-20 py-9 border-b border-[var(--border)]"`
- Label kecil: `text-xs tracking-wide text-[var(--text-muted)] mb-4`
- Tiap `ExperienceItem`: `flex gap-4 py-4 border-b border-[var(--border)] last:border-b-0`
  - Nomor: `text-[13px] font-medium text-[#D85A30] min-w-[24px]` — nomor di-generate otomatis dari index array + 1, di-pad jadi 2 digit (`01`, `02`, ..., `10`), bukan di-hardcode di data
  - Role+company dan period: `flex justify-between items-baseline`, role `text-sm font-medium`, period `text-[11px] text-[var(--text-muted)] whitespace-nowrap ml-2` (jangan sampai period ke-wrap aneh di layar sempit — kasih `ml-2` biar ada jarak minimum dari teks role)
  - Summary: `text-xs text-[var(--text-secondary)] mt-1`
- Urutan render: sesuai urutan array di `data/portfolio.ts` (data owner yang atur urutan, bukan auto-sort by date — biar bisa taro pengalaman paling relevan di atas)
- Edge case: kalau `location` ada, ditampilkan setelah period dengan separator " · ", kalau kosong tidak ditampilkan sama sekali (jangan render separator kosong)

## 7. Skills — spesifikasi

- Section `id="skills" class="scroll-mt-20 py-9 border-b border-[var(--border)]"`
- Container tags: `flex flex-wrap gap-2`
- Tag primary: `text-xs px-3 py-1 rounded-full bg-[#FAECE7] text-[#712B13]`
- Tag secondary: `text-xs px-3 py-1 rounded-full bg-[var(--surface-1)] text-[var(--text-secondary)]`
- Urutan render: semua `primary: true` duluan, baru `primary: false`, supaya visual hierarchy-nya konsisten (coral ngumpul di depan, bukan tersebar acak)

## 8. Projects (expandable) — spesifikasi

- Section `id="projects" class="scroll-mt-20 py-9 border-b border-[var(--border)]"`
- State: `const [expanded, setExpanded] = useState(false)`
- Render: `projects.slice(0, expanded ? projects.length : 3)`
- Tombol muncul HANYA kalau `projects.length > 3`. Kalau proyek ≤3, tombol tidak dirender sama sekali
- Tombol collapsed: `"show {projects.length - 3} more projects"` + ikon `ti-chevron-down`
- Tombol expanded: `"show less"` + ikon `ti-chevron-up`, dan setelah klik "show less", scroll otomatis kembali ke atas section Projects (`projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })`) — supaya user nggak "kehilangan tempat" pas list-nya collapse dan halaman tiba-tiba loncat
- Animasi expand: gunakan `grid-template-rows: 0fr → 1fr` transition (bukan `height: auto` yang tidak bisa di-transition secara native), durasi 250ms, easing `ease-out`
- Tiap `ProjectItem` styling identik dengan `ExperienceItem` (nomor coral, divider, last:border-b-0), ditambah tags row di bawah description
- Kalau `href` ada di data, seluruh row jadi `<a>` clickable dengan hover `bg-[var(--surface-1)]` dan ikon `ti-external-link` kecil di sebelah nama; kalau `href` kosong, row tidak clickable dan tidak ada ikon

## 9. Contact — spesifikasi

- Section `id="contact" class="scroll-mt-20 py-10 text-center"` (section terakhir, tanpa border-bottom)
- Label kecil di atas, lalu heading `text-base font-medium mb-4`
- Icon links: `flex justify-center gap-3`, tiap link `w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center transition-colors hover:border-[#D85A30] hover:bg-[#FAECE7]`
- Icon dari Tabler sesuai field `icon` di data (`ti-mail`, `ti-brand-linkedin`, `ti-brand-github`)
- Tiap link `target="_blank" rel="noopener noreferrer"` kecuali email (`mailto:` tidak butuh `target="_blank"`)
- `aria-label` wajib di tiap link (misal `aria-label="Email Rafly"`) karena isinya cuma ikon tanpa teks

## 10. Accessibility

- Semua section punya `id` yang match sama href nav, dan `scroll-margin-top` biar nggak ketutup sticky nav pas discroll via anchor
- Nav aktif state jangan cuma dari warna — tambahkan `aria-current="location"` di nav item yang aktif
- Icon-only buttons/links (contact, chevron show more) wajib `aria-label`
- Kontras warna coral (`#D85A30`) di atas putih dicek AA compliant untuk teks kecil (sudah aman untuk 13px+ karena coral ini cukup gelap, tapi tetap hindari coral di atas coral muda untuk teks di bawah 13px)
- Expand/collapse projects: tombol punya `aria-expanded={expanded}` untuk screen reader

## 11. SEO & meta

- `<title>` dan meta description tetap mengacu ke satu halaman (`/`) — karena konten About/Projects sekarang gabung di sini, pastikan meta description homepage mencakup ringkasan skill + fokus, bukan cuma nama doang
- Heading hierarchy: H1 cuma satu (nama, di hero), section lain pakai heading semantik yang sesuai (bisa `<h2 class="sr-only">` per section kalau visual label-nya sengaja kecil/muted, biar screen reader tetap dapet struktur yang jelas)

## 12. Responsif — breakpoint spesifik

- Mobile: `< 640px`
- Di breakpoint ini:
  - Padding horizontal section: 20px (bukan mengandalkan max-width auto-center doang)
  - Experience/Project row: kalau `role+company` atau `name` lebih dari ±28 karakter DAN period/year ada, keduanya di-stack (`flex-col` bukan `flex-row justify-between`) — cek dengan Tailwind `flex-col sm:flex-row sm:justify-between`
  - Stats row di hero: gap dikecilin dari 24px ke 16px (`gap-4 sm:gap-6`)
  - Contact icon links: ukuran tetap 40px (jangan dikecilin, ini touch target — minimum 40px penting untuk mobile tap accuracy)

## 13. Out of scope

- Form kontak, kategorisasi skill per grup, halaman detail proyek, dark mode (sama seperti PRD sebelumnya)
- Search/filter proyek
- Analytics/tracking klik contact link (bisa jadi task terpisah kalau dibutuhkan nanti)

## 14. Acceptance criteria (checklist implementasi)

- [ ] Nav sticky, border muncul setelah scroll >8px
- [ ] Klik nav item scroll smooth ke section yang benar, tidak ketutup nav
- [ ] Nav item aktif ter-highlight sesuai section yang sedang di-viewport
- [ ] Experience & Projects nomor urut auto-generated dari index, bukan hardcode
- [ ] Projects: tombol show more cuma muncul kalau total project >3
- [ ] Expand/collapse projects pakai animasi, bukan langsung snap
- [ ] Semua data (experience/skills/projects/contact) di-render dari `data/portfolio.ts`, tidak ada hardcode di JSX komponen
- [ ] Semua icon-only element punya `aria-label`
- [ ] Layout tidak jebol di lebar 375px (iPhone SE) sampai 1440px
- [ ] Warna coral, spacing, dan tipografi konsisten di semua section (cross-check manual terhadap section 5-9 di atas)

## 15. Referensi visual

Mockup HTML dari percakapan sebelumnya: `onepage_portfolio_full_mockup`, `projects_expandable_and_contact_links`.