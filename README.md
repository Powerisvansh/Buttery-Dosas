<p align="center">
  <br>
  <a href="https://powerisvansh.github.io/Buttery-Dosas/" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='50'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.35em' font-family='Georgia,serif' font-size='28' font-weight='700' fill='%23e8e3dd'%3EDosa %26amp%3B Podi%3C/text%3E%3C/svg%3E">
      <img width="420" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='50'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.35em' font-family='Georgia,serif' font-size='28' font-weight='700' fill='%230b0a0a'%3EDosa %26amp%3B Podi%3C/text%3E%3C/svg%3E" alt="Dosa &amp; Podi">
    </picture>
  </a>
  <br><br>
  <strong>Authentic South Indian Cafe — Panaji & Mapusa, Goa</strong>
  <br><br>
  <a href="https://powerisvansh.github.io/Buttery-Dosas/">Live Site →</a>
  &nbsp;&middot;&nbsp;
  <a href="#-features">Features</a>
  &nbsp;&middot;&nbsp;
  <a href="#-tech">Tech</a>
  &nbsp;&middot;&nbsp;
  <a href="#-local-dev">Local Dev</a>
  &nbsp;&middot;&nbsp;
  <a href="#-structure">Structure</a>
</p>

<br>

---

> A warm, modern website for **Dosa & Podi** — a South Indian cafe in Goa serving benne dosas, filter coffee, banana leaf meals, and more across two locations.

---

## ✦ Features

- **Full-screen editorial hero** — parallax image, warm gradient overlay, staggered text reveals
- **Tabbed digital menu** — Dosas, Idli & Vada, Specials, Drinks with prices and descriptions
- **Scroll-triggered animations** — IntersectionObserver fades and translates elements into view
- **Two location cards** — embedded Google Maps, live status indicator, direction links
- **Auto-scrolling reviews carousel** — pause on hover, smooth scroll
- **Mobile-first responsive** — tuned for small phones (≤420px) through desktop
- **Slide-in navigation drawer** — with backdrop overlay on mobile
- **Active nav tracking** — highlights current section on scroll
- **Premium dark palette** — deep charcoal, terracotta accent, gold, DM Mono typography
- **`prefers-reduced-motion` support** — accessibility first

## ✦ Tech

| | |
|---|---|
| **Markup** | Semantic HTML5 |
| **Style** | Vanilla CSS — custom properties, clamp() fluid type, mobile-first breakpoints |
| **Logic** | Vanilla JS — IntersectionObserver, scroll events, dynamic DOM |
| **Fonts** | Inter, Playfair Display, DM Mono (Google Fonts) |
| **Maps** | Embedded Google Maps iframes |
| **Icons** | Inline SVG logo mark, Unicode symbols |
| **Hosting** | GitHub Pages |

Zero frameworks. Zero dependencies. ~22 KB CSS, ~4 KB JS.

## ✦ Local Dev

```bash
git clone https://github.com/Powerisvansh/Buttery-Dosas.git
cd Buttery-Dosas
python3 -m http.server 8000
# open http://localhost:8000
```

No build step — open `index.html` directly or serve with any static server.

## ✦ Structure

```
Buttery-Dosas/
├── index.html          # Main page — 7 sections + footer
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # Interactivity
└── README.md
```

## ✦ License

MIT
