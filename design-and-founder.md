# QORVODE — Design System & Founder Profile

## Design System

### Philosophy
**Terminal Brutalism** — dark green-black palette, terminal-green accents, thin structural borders with soft layered shadows. Brutalist structure meets modern pixel typography and motion. The palette is dark-only (no light mode).

---

### Color Palette

_Source of truth: the `@theme` block in `src/styles/main.css`._

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a100d` | Primary dark background |
| `--color-bg-alt` | `#0b130f` | Alternate dark background / sections |
| `--color-text` | `#f1e6be` | Body text (warm parchment) |
| `--color-text-alt` | `#eadfb0` | Body text on alt surfaces |
| `--color-accent` | `#b9ce82` | Primary accent (terminal green) |
| `--color-accent-alt` | `#9ece6a` | Accent on alt sections |
| `--color-surface` | `#101812` | Card / container surface |
| `--color-surface-alt` | `#141e16` | Alternate card surface |
| `--color-surface-2` | `#18241b` | Nested surface |
| `--color-border` | `#1e2e22` | Subtle borders |
| `--color-border-alt` | `#26382a` | Default borders |
| `--color-border-strong` | `#35513c` | Emphasized borders |
| `--color-muted` | `#8a9a76` | Muted text / metadata |

### Theme Meta
| Mode | Theme Color |
|------|-------------|
| Light | `#0a100d` |
| Dark | `#0a100d` |

### Font Stack

| Family | Role | Weights |
|--------|------|---------|
| **Outfit** | Sans-serif (UI headings, body) | 300, 400, 500, 600, 700 |
| **Cormorant Garamond** | Serif (quotes, italic display) | 300, 400, 500, 600, 700 (roman + italic) |
| **JetBrains Mono** | Mono (display headings, code, terminal) | 400, 500, 600 |
| **Silkscreen** | Pixel display (hero wordmark) | 400, 700 |
| **Amiri** | Arabic text | 400, 700 |

---

### Brutalist Design Tokens

#### Borders
```css
.brutal-border        /* 1px solid var(--color-border-alt), border-radius 12px */
.brutal-border-alt    /* 1px solid var(--color-border), border-radius 12px */
```

#### Shadows (soft layered rings, not hard offsets)
```css
.brutal-shadow        /* ring 1px var(--color-border-alt) @60% + 0 24px 48px -32px black */
.brutal-shadow-sm     /* ring 1px @50% + 0 12px 28px -22px black */
.brutal-shadow-lg     /* ring 1px @70% + 0 36px 70px -40px black */
/* -alt variants swap --color-border-alt for --color-border */
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
| Titles | Vibecoder, Founder, Linux Enthusiast, Cyber Security Student, UI/UX Designer |
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

> Cover art, thumbnails, captions, and visual branding are treated as one connected creative system. My taste leans toward cinematic aesthetics, minimal compositions, and designs that feel authentic rather than artificial. Every project is a complete visual statement.

> On the development side, I build modern websites with HTML, CSS, JavaScript, React, and Tailwind CSS — ranging from personal portfolios to institutional and healthcare platforms. I prioritise meaningful content, responsive layouts, accessibility, and visual polish in every project.

> Technology is part of who I am. I explore Linux distributions, Termux, Ubuntu, Kali Linux, command-line tools, Git, GitHub, Node.js, and Android customisation. I approach technical challenges patiently, experimenting until I understand the underlying concepts rather than settling for surface-level fixes.

> Visually, I gravitate toward premium interfaces — elegant typography, smooth animations, balanced spacing, and modern layouts. I revise until every detail aligns with my vision, reflecting a quality-first mindset that carries across code and design alike.

> My learning style is practical. I prefer complete examples, full project files, and step-by-step guidance I can apply immediately. This approach lets me steadily expand my knowledge while building real, working projects. And I rarely settle for a first attempt — I iterate, troubleshoot, and refine until it's right.

> Looking ahead, I aim to blend software engineering, UI/UX design, and content creation into a career that sits at the intersection of logic and creativity. Curiosity, persistence, and a willingness to keep learning are the foundations I build on.

> Let's collaborate on something meaningful.

### Tech Stack
HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Python, PHP, Linux, Docker, Git, GitHub

### Services (via Terminal AI)
| Service | Price |
|---------|-------|
| Logo Design | ₹999 |
| Social Media Creatives | ₹1,499 |
| Website | ₹6,999 |
| Full Branding | ₹14,999 |
