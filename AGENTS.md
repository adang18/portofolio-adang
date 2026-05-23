# AGENTS.md — Adang Portfolio

## Project Overview
This is a personal portfolio website for **Adang**, a Fullstack Developer focused on the PHP/Laravel ecosystem. The site is built with **vanilla HTML, CSS, and JavaScript** — no framework, no build tool. Designed to be deployed on **Vercel** as a static site.

## Project Structure
```
├── css/
│   └── portfolio-adang.css       # All styles, single file
├── img/
│   ├── OneBLUD/                  # Screenshots for OneBLUD project
│   ├── RPLearn/                  # Screenshots for RPLearn project
│   └── pribadi/
│       └── Aku.jpeg              # Profile photo
├── js/
│   └── portfolio-adang.js        # All scripts, single file
├── index.html          # Main page (single page)
├── oneblud-detail.html           # Detail page for OneBLUD project
└── rplearn-detail.html           # Detail page for RPLearn project
```

## Tech Stack
- **HTML5** — semantic, no framework
- **CSS3** — custom properties (CSS variables), no preprocessor
- **JavaScript** — vanilla ES6+, no bundler
- **AOS** (Animate On Scroll) — CDN, for scroll animations
- **Font Awesome 6.5** — CDN, for icons
- **Devicons** — CDN, for tech stack icons
- **Google Fonts** — Outfit (300, 400, 500, 600, 700)

## Design System
```
Background:   #080c10 (primary), #0d1117 (secondary), #111820 (tertiary)
Accent:       #2dd4bf (teal)
Accent dim:   rgba(45,212,191,0.12)
Text:         #e6edf3 (primary), rgba(230,237,243,0.6) (secondary)
Border:       rgba(255,255,255,0.08)
Glass card:   background rgba(255,255,255,0.04) + border + backdrop-filter blur(8px)
Font:         'Outfit', sans-serif
Border radius: 16px (cards), 10px (buttons), 8px (small elements)
```

## Sections (index.html)
1. **#about** — Hero: foto profil di kanan, teks di kiri, social links, CTA buttons
2. **#experience** — Timeline: pendidikan SMK, magang, project OneBLUD & RPLearn
3. **#skills** — Grid skill cards dengan devicons berwarna
4. **#projects** — 4 project cards dengan screenshot, badge tech stack, tombol demo & source
5. **#certificates** — 3 certificate cards dengan gambar dan deskripsi
6. **#contact** — Glass card besar dengan tombol "Say Hello" dan social links

## Coding Conventions
- CSS variables wajib dipakai untuk semua warna — jangan hardcode hex
- Class naming: kebab-case, deskriptif (`.skill-card`, `.timeline-item`)
- Animasi masuk pakai AOS (`data-aos="fade-up"`, `data-aos-delay="100"`)
- Animasi khusus pakai CSS `@keyframes`
- JS: vanilla, tidak ada jQuery, tidak ada framework
- Semua section responsif — breakpoint utama di `max-width: 900px`
- Jangan tambah dependency baru kecuali diminta

## Key Files to Know
- `portfolio-adang.css` — satu file untuk semua style, diorganisir per section dengan komentar `/* ── SECTION ── */`
- `portfolio-adang.js` — inisialisasi AOS, navbar scroll, mobile menu, welcome intro
- `oneblud-detail.html` & `rplearn-detail.html` — halaman detail project, style konsisten dengan main page

## Agent Instructions
- Selalu jaga konsistensi design system di atas
- Kalau diminta tambah section baru, ikuti pola glass-card yang sudah ada
- Kalau diminta animasi, utamakan AOS atau CSS keyframes — jangan tambah library baru
- Kalau diminta deploy ke Vercel, ini static site — tidak butuh config khusus, cukup `vercel --prod`
- Foto profil ada di `img/pribadi/Aku.jpeg`
- Project screenshots ada di `img/OneBLUD/` dan `img/RPLearn/`
- Kalau ada perubahan warna, ubah di CSS variables di `:root`, bukan satu-satu
- Prioritas: clean code, konsistensi, dan performa — hindari efek yang berlebihan

## Owner
**Adang** — Fullstack Developer, PHP/Laravel ecosystem  
Stack: PHP, Laravel, MySQL, JavaScript, Alpine.js, Node.js, Tailwind CSS, Bootstrap 5, Vite, Git