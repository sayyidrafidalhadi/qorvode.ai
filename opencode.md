# Project Analysis: QORVODE Portfolio

## Overview

**Project Name:** QORVODE Personal Portfolio
**Owner:** Sayyid Rafid Al Hadi
**Type:** Multi-page personal brand website
**Domain:** https://qorvode.co.in

A dual-identity portfolio showcasing both software development expertise and vocal/music production. Positioned as "Digital Authority" with luxury/premium branding.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + Custom CSS |
| Animations | Framer Motion |
| Background | WebGL (custom shaders) |
| Email | EmailJS |
| Icons | Lucide React |
| Fonts | Outfit, Cormorant Garamond, JetBrains Mono |

---

## Architecture

```
src/
├── components/         # React components (inline in App.jsx)
├── data/               # Content decoupling (JSON-like)
│   ├── site.js        # Config & branding
│   ├── projects.js   # Portfolio items
│   ├── arsenal.js    # Skills/services
│   ├── releases.js  # Music releases
│   └── articles.js   # Blog posts
├── styles/
│   └── main.css      # Tailwind + custom theme
├── App.jsx            # Main SPA (all sections)
└── main.jsx           # Entry point
```

**Pages:**
- `/` — Main SPA (index.html)
- `/articles.html` — Blog/archive
- `/privacy.html` — Static legal
- `/terms.html` — Static legal

---

## UI/UX Analysis

### Design System

**Color Palette:**
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0A0A0A` | Background (near-black) |
| `--color-accent` | `#C5A059` | Gold accent (muted) |
| `--color-emerald` | `#064E3B` | Secondary accent |
| `--color-ivory` | `#F5F5F0` | Text highlights |

**Typography:**
- Display: Outfit (bold, uppercase, tight tracking)
- Body: Outfit (light weight)
- Accent: Cormorant Garamond (italic serif for quotes)
- Mono: JetBrains Mono (terminal elements)

**Spacing:** Extensive use of large gaps (20-48) for luxury whitespace

### Sections

1. **Navbar** — Fixed, transparent → glassmorphism on scroll
2. **Hero** — Massive typography, CTA, trust indicators
3. **Marquee** — Infinite scrolling text band
4. **Work** — Project cards with hover reveals
5. **Music** — Release cards (dual identity)
6. **Articles** — Blog preview grid
7. **Stack** — Skills with accordion-style list
8. **Stats** — Live counters
9. **Contact** — Form + footer

### Interactions

- Scroll-triggered fade-in animations (Framer Motion)
- Hover: gold accent transitions, scale transforms
- Project cards: image reveal on hover, external link button
- Form: honeypot spam protection, loading states

### Responsive

Tailwind breakpoints: `xs: 480px`, `sm: 640px`, `lg: 1024px`, etc.
- Mobile: stacked layouts, font scaling with `vw`
- Desktop: multi-column, side-by-side

---

## UX Strengths

| Area | Assessment |
|------|------------|
| First Impression | Strong — bold typography, premium feel |
| Navigation | Simple, scroll-based SPA |
| Mobile | Touch-optimized with appropriate targets |
| Performance | WebGL capped at 1.5x DPR |
| Accessibility | Semantic HTML, focus states present |
| Spam Protection | Honeypot field on contact form |

---

## UX Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| No skip-to-content | Low | A11y improvement needed |
| Missing meta descriptions on subpages | Medium | SEO impact on articles.html |
| No RSS feed | Low | Blog would benefit |
| Terminal prompt in footer is decorative | Trivial | Dead element |

---

## Data Decoupling

Content editors in `/src/data/`:
- `site.js` — Brand, hero text, social links
- `projects.js` — Portfolio items (tags, URLs, status)
- `arsenal.js` — Skills/services
- `releases.js` — Music discography
- `articles.js` — Blog posts

**Note:** Arsenal icons use Font Awesome classes (`fas fa-*`) but Lucide is imported — potential inconsistency.

---

## Background

**Component:** `AnimeEditBackground.jsx`

- WebGL shader with simplex noise
- Gold and emerald accent mixing
- Time-based fluid animation
- Capped DPR for performance
- Fallback: `#0A0A0A`

---

## Deployment

- Vercel (inferred from `vercel.app` URLs)
- Build: `npm run build`
- No edge functions detected

---

## Recommendations

1. Add skip-to-main-link for keyboard users
2. Extract components from App.jsx to separate files
3. Fix arsenal icons (mix of Font Awesome + Lucide)
4. Add sitemap generation or update manually
5. Consider adding Open Graph for articles.html
6. Add loading state/skeleton for better perceived performance

---

## File Inventory

| Category | Count |
|----------|-------|
| Components | 2 (App.jsx + Background) |
| Data Files | 5 |
| CSS Partials | 0 (main.css only) |
| Pages | 4 HTML files |
| Assets | favicon, og-image |

---

*Analysis generated on 2026-04-28*