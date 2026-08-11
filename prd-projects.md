# PRD — Projects Page (Magazine Style)

## 1. Ringkasan

Halaman Projects dirombak jadi list bernomor bergaya editorial, konsisten dengan pattern yang sudah dipakai di About page (nomor section coral, divider tipis, tipografi yang sama). Tujuan: satu bahasa visual di seluruh site, dan daftar proyek jadi lebih scannable dibanding grid kartu biasa.

## 2. Tujuan desain

- Konsistensi visual penuh dengan About page: nomor urut coral, divider hairline, skala font yang sama
- Tiap proyek jadi satu baris (bukan card kotak), fokus ke teks: nama, tahun, deskripsi singkat, tech stack
- Scannable — orang bisa liat sekilas 10+ proyek tanpa harus scroll grid besar-besar
- Badge tech stack membedakan mana teknologi utama (coral) vs pendukung (netral), sama seperti about page

## 3. Struktur layout

```
┌────────────────────────────────────────────┐
│  projects                                    │
│  selected work                               │  ← header
├────────────────────────────────────────────┤
│  01   Nama Proyek              2025          │
│       [deskripsi 1-2 kalimat]                 │
│       [tag] [tag] [tag]                       │
├────────────────────────────────────────────┤
│  02   Nama Proyek              2025          │
│       ...                                    │
├────────────────────────────────────────────┤
│  ...dst                                      │
└────────────────────────────────────────────┘
```

- Max-width konten: 680px, sama seperti About page
- Setiap proyek = 1 baris flex (nomor kiri, konten kanan)
- Divider 1px `var(--border)` di antara tiap proyek, tanpa divider di baris terakhir
- Jarak vertikal per baris: padding 20px atas-bawah

## 4. Detail komponen

| Elemen | Spesifikasi |
|---|---|
| Header label ("projects") | 12px, letter-spacing 0.08em, `text-muted` |
| Header judul ("selected work") | 26px, medium, charcoal — sama persis dengan H1 di About page |
| Nomor urut (01, 02, ...) | 13px, medium, coral (`#D85A30`), lebar tetap 24px biar sejajar vertikal antar baris |
| Nama proyek | 16px, medium, charcoal |
| Tahun | 11px, `text-muted`, rata kanan sejajar dengan nama proyek |
| Deskripsi | 13px, line-height 1.7, `text-secondary`, dibatasi 1-2 kalimat (hindari deskripsi panjang) |
| Tag tech stack | 11px, padding 3px 10px, radius pill (20px). 1-2 tag utama pakai bg coral muda (`#FAECE7`) + teks coral tua (`#712B13`); tag sisanya pakai bg abu-abu muda (`var(--surface-1)`) + teks `text-secondary` |

## 5. Font & warna

Mengikuti token yang sama dengan About page — tidak ada penambahan font/warna baru:

- Font: lanjutkan font existing (sans-serif project saat ini), 2 weight saja (400 regular, 500 medium)
- Coral (`#D85A30`) dipakai untuk: nomor urut, 1-2 tag tech utama per proyek
- Charcoal untuk teks utama (nama proyek, heading)
- Abu-abu (`text-secondary`/`text-muted`) untuk deskripsi dan metadata (tahun)

## 6. Data per proyek

Tiap entri proyek butuh field berikut (bisa disusun sebagai array/CMS data):

```
{
  nomor: "01",
  nama: "PsyLab AI",
  tahun: "2025",
  deskripsi: "Aplikasi latihan tes psikometri dengan soal yang di-generate AI, dibangun pakai Next.js dan Gemini API.",
  tags: [
    { label: "Next.js", primary: true },
    { label: "Gemini API", primary: false }
  ]
}
```

- Deskripsi dibatasi ±110-130 karakter biar konsisten tinggi barisnya
- Maksimal 3-4 tag per proyek biar nggak penuh; 1-2 tag pertama ditandai `primary: true` (dapet styling coral)
- Urutan proyek disusun manual (bukan auto sort by date), biar bisa nge-highlight proyek paling representatif di nomor 01-02

## 7. Interaksi

- Tiap baris proyek clickable (seluruh area baris, bukan cuma nama) → menuju halaman detail proyek atau link eksternal (repo/demo)
- Hover state: background baris berubah tipis jadi `var(--surface-1)`, cursor pointer
- Kalau proyek punya link eksternal (repo/live demo), tambahkan ikon kecil (`ti-external-link`) di sebelah nama proyek

## 8. Responsif

- Desktop: layout seperti mockup, satu kolom
- Mobile: nama proyek dan tahun yang tadinya sejajar (flex row) di-stack jadi 2 baris terpisah (nama di atas, tahun di bawah dengan ukuran lebih kecil) karena ruang horizontal terbatas
- Tag tetap wrap otomatis di semua ukuran layar

## 9. Hubungan dengan Homepage

- Homepage (teaser) menampilkan 2 proyek pertama dari list yang sama, dengan style identik (nomor 01, 02) tapi tanpa tag tech stack — biar tetap ringkas
- CTA "view all" di homepage mengarah ke halaman Projects penuh ini

## 10. Out of scope

- Halaman detail per proyek (case study individual) — kalau dibutuhkan, jadi PRD terpisah
- Filter/kategori proyek (misal filter by tech stack) — bisa jadi iterasi lanjutan kalau jumlah proyek makin banyak
- Gambar/screenshot thumbnail per proyek — desain saat ini sengaja text-first, mengikuti gaya editorial About page

## 11. Referensi visual

Mockup HTML "projects_page_magazine_style" sudah dibuat di percakapan sebelumnya sebagai acuan visual sebelum implementasi ke kode Next.js + Tailwind.