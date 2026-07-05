# QORVODE — Design System & Founder Profile

## Design System

### Philosophy
**Neo-Tech Brutalism** — bold borders, hard offset shadows, high contrast, monochrome-adjacent palette with lime green accents. Brutalist structural rigidity meets modern typography and motion.

---

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#E4FD97` (Lime Sprout) | Primary light background |
| `--color-bg-alt` | `#2D3E2C` (Fresh Canopy) | Dark background / sections |
| `--color-text` | `#111111` | Body text on light |
| `--color-text-alt` | `#FFFFFF` | Body text on dark |
| `--color-accent` | `#2D3E2C` | Accent on light sections (buttons, borders, highlights) |
| `--color-accent-alt` | `#E4FD97` | Accent on dark sections |
| `--color-surface` | `#FFFFFF` | Card / container surface on light |
| `--color-surface-alt` | `#3A4F39` | Card / container surface on dark |
| `--color-border` | `#2D3E2C` | Borders on light backgrounds |
| `--color-border-alt` | `#E4FD97` | Borders on dark backgrounds |

### Theme Meta
| Mode | Theme Color |
|------|-------------|
| Light | `#E4FD97` |
| Dark | `#2D3E2C` |

### Font Stack

| Family | Role | Weights |
|--------|------|---------|
| **Outfit** | Sans-serif (UI headings, body) | 300, 400, 500, 600, 700 |
| **Cormorant Garamond** | Serif (quotes, italic display) | 300, 400, 500, 600, 700 (roman + italic) |
| **JetBrains Mono** | Monospace (code, terminal) | 400, 500, 600 |
| **Amiri** | Arabic text | 400, 700 |

---

### Brutalist Design Tokens

#### Borders
```css
.brutal-border        /* 2px solid var(--color-border) */
.brutal-border-alt    /* 2px solid var(--color-border-alt) */
```

#### Shadows
```css
.brutal-shadow        /* 4px 4px 0px var(--color-border) */
.brutal-shadow-alt    /* 4px 4px 0px var(--color-border-alt) */
.brutal-shadow-lg     /* 6px 6px 0px var(--color-border) */
.brutal-shadow-lg-alt /* 6px 6px 0px var(--color-border-alt) */
.brutal-shadow-sm     /* 3px 3px 0px var(--color-border) */
.brutal-shadow-sm-alt /* 3px 3px 0px var(--color-border-alt) */
```

#### Interaction
- Hover: `translate-x-[2px] translate-y-[2px]` + remove shadow ("press" effect)
- Transition: `transition-all duration-300`

#### Spacing System
- Horizontal padding: `px-5 sm:px-8 lg:px-12`
- Section vertical padding: `py-16 sm:py-24` to `py-32 sm:py-48`
- Content width: `max-w-7xl mx-auto`
- Grid gaps: `gap-12 lg:gap-20`
- Section dividers: `border-y-[3px]`

#### Motion
- Default easing: `[0.2, 0, 0, 1]` (snappy cubic bezier)
- Spring: `{ type: "spring", stiffness: 260, damping: 24 }`
- Scroll-triggered reveals via `whileInView` / `viewport: { once: true }`

---

### Button Variants

| Variant | Classes |
|---------|---------|
| Default | `bg-accent text-text-alt brutal-border-alt brutal-shadow-alt` |
| Destructive | `bg-red-600 text-white` |
| Outline | `bg-transparent text-text brutal-border brutal-shadow` |
| Secondary | `bg-bg-alt text-text-alt brutal-border-alt brutal-shadow-alt` |
| Ghost | `bg-transparent text-text hover:text-accent hover:bg-black/5` |
| Link | `text-accent underline-offset-4 hover:underline` |

---

### 3D Background Particle Colors (AnimeEditBackground.tsx)
- Gold: `0xC5A059` (40%)
- Emerald: `0x064E3B` (20%)
- White: `0xFFFFFF` (40%)

---

### Scrollbar
```css
::-webkit-scrollbar           { width: 6px; }
::-webkit-scrollbar-track     { background: var(--color-bg); }
::-webkit-scrollbar-thumb     { background: var(--color-accent); }
```

### Selection
```css
::selection   { background: var(--color-accent); color: var(--color-text-alt); }
```

---

## Founder Profile

### Identity

| Field | Value |
|-------|-------|
| Name | **Sayyid Rafid Al Hadi** |
| Brand | **QORVODE / QORVODE.AI** |
| Titles | Vibecoder, Music Artist, Founder, Linux Enthusiast, Cyber Security Student, UI/UX Designer |
| Location | Kerala, India |
| Languages | English, Arabic, Malayalam |
| Website | [qorvode.co.in](https://qorvode.co.in) |

### Contact

| Channel | Handle |
|---------|--------|
| Email | [qorvode.ai@gmail.com](mailto:qorvode.ai@gmail.com) |
| Instagram | [@zydhh.hadi](https://instagram.com/zydhh.hadi) |
| GitHub | [@sayyidrafidalhadi](https://github.com/sayyidrafidalhadi) |
| Phone | +919526755210 |

### Bio (About Section)

> I build high-performance web experiences and digital brands that bridge the gap between technical efficiency and creative storytelling.

> Music is one of my strongest creative outlets. I pour the same care into cover art, thumbnails, captions, and visual branding as I do into recording. My taste leans toward cinematic aesthetics, minimal compositions, and designs that feel authentic rather than artificial. Every release is a complete visual and auditory statement.

> On the development side, I build modern websites with HTML, CSS, JavaScript, React, and Tailwind CSS — ranging from personal portfolios to institutional and healthcare platforms. I prioritise meaningful content, responsive layouts, accessibility, and visual polish in every project.

> Technology is part of who I am. I explore Linux distributions, Termux, Ubuntu, Kali Linux, command-line tools, Git, GitHub, Node.js, and Android customisation. I approach technical challenges patiently, experimenting until I understand the underlying concepts rather than settling for surface-level fixes.

> Visually, I gravitate toward premium interfaces — elegant typography, smooth animations, balanced spacing, and modern layouts. I revise until every detail aligns with my vision, reflecting a quality-first mindset that carries across code, design, and music alike.

> My learning style is practical. I prefer complete examples, full project files, and step-by-step guidance I can apply immediately. This approach lets me steadily expand my knowledge while building real, working projects. And I rarely settle for a first attempt — I iterate, troubleshoot, and refine until it's right.

> Looking ahead, I aim to blend software engineering, UI/UX design, content creation, and music into a career that sits at the intersection of logic and creativity. Curiosity, persistence, and a willingness to keep learning are the foundations I build on.

> Let's collaborate on something meaningful.

### Tech Stack
HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Python, PHP, Linux, Docker, Git, GitHub

### Education

| Institution | Location | Level |
|------------|----------|-------|
| Green Woods Public School | Palakkunnu, Kasaragod, Kerala | Lower Primary |
| GHSS Pookkottur | Pookkottur, Kasaragod, Kerala | Upper Primary |
| Pallikkara Islamic School | Pallikkara, Kasaragod, Kerala | High School |
| Jamia Madeenathunnoor Baithul Izza | Narikkuni, Calicut, Kerala | Higher Secondary |
| Al-Azhar Engineering College | Thodupuzha, Kerala | B.Tech CSE (Cyber Security), 2026–Present |

### Services (via Terminal AI)
| Service | Price |
|---------|-------|
| Logo Design | ₹999 |
| Social Media Creatives | ₹1,499 |
| Website | ₹6,999 |
| Full Branding | ₹14,999 |
