# PRD — About Page Redesign (Magazine Style)

## 1. Ringkasan

Redesign about page portofolio (`raflyzainn-portofolio.vercel.app/about`) dari layout single-column memanjang menjadi layout gaya majalah/editorial dengan section bernomor. Tujuan: bikin konten lebih terstruktur, scannable, dan konsisten dengan tema Pure White + Charcoal + Coral yang udah ditentukan.

## 2. Masalah saat ini

- Ruang kanan halaman kosong, konten cuma isi ~40% lebar layar di desktop
- Tema warna coral belum kepake sama sekali, semua masih monokrom
- Badge tech stack di bawah nggak sinkron sama stack yang disebut di paragraf
- Foto profil kekecilan, kesannya kayak avatar placeholder
- Stats card (internships/projects/HKI) visualnya plain, cuma kotak polos
- CTA "View my projects" kurang nonjol, gampang kelewat
- Bio ditulis sebagai 3 paragraf panjang tanpa struktur, kurang scannable

## 3. Tujuan desain

- Pecah bio jadi section-section pendek dengan label bernomor (01, 02, 03) — kesan storytelling/editorial
- Aksen coral dipakai konsisten di nomor section, angka stats, dan CTA
- Header baru: nama + role di kiri, foto bulat di kanan (sejajar horizontal)
- Stats jadi bagian dari section "what I work with", bukan blok terpisah
- Layout tetap single-column tapi max-width dibatasi biar proporsional, nggak ngambang di layar lebar

## 4. Struktur layout

```
┌────────────────────────────────────────────┐
│  Nama + role              [foto bulat 64px] │  ← header row
├────────────────────────────────────────────┤
│  01   who I am                              │
│       [1 paragraf pendek, 2-3 kalimat]       │
│                                              │
│  02   what I work with                       │
│       [1 paragraf pendek]                    │
│       [5]  [12+]  [3]                        │
│       intern proyek hki                      │
│                                              │
│  03   outside of code                        │
│       [1 paragraf pendek]                    │
│                                              │
│  [ view my projects ]  ← outline button      │
└────────────────────────────────────────────┘
```

- **Max-width konten**: 680px, centered atau align-left dengan margin kiri konsisten sama halaman lain (Home, Projects)
- **Vertical rhythm**: jarak antar section 28-32px, jarak dalam section (label → body) 6-8px
- **Divider**: garis tipis (1px, `var(--border)` atau abu-abu muda) di bawah header row untuk misahin dari body

## 5. Detail komponen

| Elemen | Spesifikasi |
|---|---|
| Nama (h1) | 26px, medium (500), charcoal |
| Role/lokasi | 13px, abu-abu muda (`text-muted`) |
| Foto | 64px, rounded-full, border 1px abu-abu tipis |
| Nomor section (01/02/03) | 13px, medium, warna coral (`#D85A30`), lebar tetap 24px biar sejajar |
| Label section (who I am, dst) | 13px, medium, charcoal |
| Body paragraf | 14px, line-height 1.75, abu-abu (`text-secondary`), maksimal 2-3 kalimat |
| Angka stats | 20px, medium, charcoal |
| Label stats | 11px, abu-abu muda |
| Tombol CTA | Outline style: border 1px coral, teks coral, background transparan, padding 9px 20px, radius 8px |

## 6. Font & tipografi

- **Font family**: lanjutkan font yang udah dipakai di halaman lain (kemungkinan sans-serif seperti Inter/Geist berdasarkan screenshot awal) — jangan ganti font di tengah project, biar konsisten across halaman
- **Skala ukuran**:
  - Nama: 26px / medium
  - Body: 14px / regular, line-height 1.75 (penting buat readability paragraf pendek)
  - Label kecil (nomor, stats label): 11-13px / medium
- **Weight**: cukup 2 weight — regular (400) untuk body, medium (500) untuk heading/label/angka. Hindari bold (700) biar tetap kalem sesuai tema minimalis

## 7. Warna (sesuai tema Pure White + Charcoal + Coral)

| Token | Hex (referensi) | Dipakai untuk |
|---|---|---|
| Coral | `#D85A30` | Nomor section, angka stats, border + teks CTA |
| Charcoal | warna teks utama existing | Nama, label section, angka stats |
| Abu-abu muda | `text-secondary`/`text-muted` existing | Body paragraf, label kecil |
| Putih | background existing | Base surface |

Prinsip: coral dipakai sebagai **aksen**, bukan warna dominan. Jangan lebih dari 3-4 titik pemakaian coral per viewport biar nggak berlebihan.

## 8. Konten per section

**01 — who I am**
Ambil kalimat pembuka dari bio existing, dipangkas jadi 2-3 kalimat inti (bukan 1 paragraf penuh).

**02 — what I work with**
Gabungan info stack teknis (React, Next.js, Tailwind, Node.js, Laravel) + 3 angka stats (internships, projects, HKI/IP) dalam satu section karena keduanya sama-sama "capability proof".

**03 — outside of code**
Bagian personal (musik, kopi, TFT) dipendekkan jadi 1 kalimat, cukup buat kasih sentuhan personality tanpa bikin section ini kepanjangan.

## 9. Interaksi & responsif

- Desktop: layout seperti mockup, max-width 680px
- Mobile: foto pindah ke atas nama (stack vertikal), section tetap sama urutannya, nomor section tetap kiri tapi lebar dikecilin dikit
- CTA button full-width di mobile, auto-width di desktop
- Music player (kalau tetap dipertahankan) ditaruh di luar area 3 section ini, misal di footer halaman atau sticky mini-bar, bukan di antara section

## 10. Out of scope

- Redesign Home dan Projects page (nyusul terpisah kalau mau disamain stylenya)
- Animasi/transisi antar section (bisa jadi iterasi lanjutan pakai Framer Motion)
- Dark mode variant (belum dibahas, asumsikan light theme dulu sesuai tema yang difinalisasi)

## 11. Referensi visual

Mockup HTML sudah dibuat di percakapan sebelumnya (varian "magazine sections") sebagai acuan visual awal sebelum implementasi ke kode Next.js + Tailwind.