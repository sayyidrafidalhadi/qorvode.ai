# QORVODE Portfolio — Complete UI/UX Redesign Prompt for OpenCode

## Project Context

**Codebase:** React 18 + Vite SPA at `https://qorvode.co.in`  
**Owner:** Sayyid Rafid Al Hadi (brand: QORVODE)  
**Dual identity:** Full-stack developer + Islamic nasheed vocalist  
**Constraint:** All code must be CDN-compatible (no build-step-only libraries). Use only what is already in `package.json` or importable via CDN/ESM.

---

## Current Design — What Exists

### Token System (`src/styles/partials/tokens.css`)
```
--bg: #0A0A0A  (matte black)
--primary: #C5A059  (muted gold)
--accent: #064E3B  (deep emerald)
--text: #F5F5F0  (ivory)
--muted: rgba(245,245,240,0.5)
--font-display: 'Outfit'
--font-serif: 'Cormorant Garamond'
--font-mono: 'JetBrains Mono'
--radius: 4px  (sharp corners)
--ease: cubic-bezier(0.2,0,0,1)
```

### Critical CSS Issues Found
1. **`--red` / `--red-glow` / `--gold` tokens referenced in hero.css, projects.css, arsenal.css, contact.css — but NEVER defined in tokens.css.** These are dangling variables causing invisible rendering failures (buttons, card glows, form focus, section numbers all broken).
2. `--surface: rgba(255,255,255,0.02)` is nearly invisible — cards have zero depth on dark bg.
3. `--border: rgba(255,255,255,0.05)` — too faint, grid structure collapses on OLED.
4. Hero uses `var(--red)` for the badge dot, title italic, buttons — rendering as transparent.

### Sections (in order)
1. Navbar (fixed, transparent → glassmorphism scroll)
2. Hero (headline + terminal widget, 2-col grid)
3. Marquee band
4. Projects section (2-col card grid, 3 items)
5. Music Releases (2-col cards with spinning vinyl)
6. Arsenal / Services (2-col cards with icon)
7. Stack (icon row)
8. FAQ (accordion)
9. Contact (2-col, left copy + right form)
10. Footer

### UX Issues
- No visual hierarchy between sections (all identical opacity cards)
- Hero trust line and badge are invisible (uses undefined `--red`)
- Project wide-card (`grid-column: span 2`) breaks on mobile
- Vinyl animation non-stop even on low-power devices (no `prefers-reduced-motion`)
- Contact form submit button uses `--gold` (undefined)
- Section numbers use `--red` (undefined)
- FAQ section has no animation on open/close
- No active state indicator in navbar (all links look the same on scroll)
- Zero visual differentiation between the developer identity and the musician identity
- Arabic text in quote divider uses same font as English — needs `font-family: 'Scheherazade New'` or similar Arabic-optimized font
- No loading skeleton — WebGL background may cause FOUC

---

## Redesign Goals

### 1. Fix All Broken Tokens First
Add these missing definitions to `src/styles/partials/tokens.css`:

```css
/* FIX: Define all missing tokens */
--red:           #C5A059;        /* repurpose: gold IS the hero accent */
--red-glow:      rgba(197, 160, 89, 0.15);
--red-dim:       #A8843E;
--gold:          #C5A059;        /* alias — consistent with --primary */
--gold-glow:     rgba(197, 160, 89, 0.15);

/* Improve depth */
--surface:       rgba(255, 255, 255, 0.04);  /* was 0.02 — too invisible */
--surface-hover: rgba(255, 255, 255, 0.07);
--border:        rgba(255, 255, 255, 0.08);  /* was 0.05 — too faint */
--border-h:      rgba(197, 160, 89, 0.4);

/* Emerald glow for music sections */
--emerald-glow:  rgba(6, 78, 59, 0.3);
--emerald-light: #10B981;
```

### 2. Hero Section Redesign

**Goal:** Make the dual identity (coder + vocalist) immediately clear in the hero.

**Layout changes:**
- Keep 2-column grid on desktop, but add a **vertical accent line** (`2px`, gold gradient) between the two columns
- Add a **role toggle chip** below the headline: two pill buttons `< Developer />` and `♫ Vocalist` — clicking smoothly cross-fades subheadline and CTA text (pure JS state toggle, no router)
- Replace the static terminal box with a **split visual**: top half = terminal (developer), bottom half = waveform/Arabic calligraphy card (vocalist) — transition between them with the role toggle
- Badge dot: change pulsing color from `--red` (which was broken) to gold `--primary` with a proper `box-shadow` glow

**Typography:**
- `hero-title span` (line 1): `font-weight: 200`, `letter-spacing: -2px`, `color: var(--muted)` — lighter
- `hero-title em` (line 2): `font-weight: 700`, `font-style: normal`, `color: var(--primary)` — heavier, gold, no italic
- Add a third line using `--font-serif` in italic for the Arabic bismillah or a short quote

**CTA buttons:**
- Primary: solid gold background, white text, `border-radius: 6px` (not pill), subtle inner shadow
- Secondary: outlined with gold border, transparent bg — on hover fills with `var(--primary-glow)`
- Add a third micro-link: `↓ Scroll to Work` in mono font, no border

### 3. Navbar

**Current issues:** No active section indicator, mobile menu has no animation spring.

**Changes:**
- Add `data-section` intersection observer: when a section enters viewport, matching nav link gets `color: var(--primary)` with a `2px` gold underline that slides in from left
- Logo: add a subtle breathing glow — `text-shadow: 0 0 20px var(--primary-glow)` on hover only
- Mobile menu: replace `max-height` transition (janky) with `clip-path: inset(0 0 100% 0)` → `inset(0 0 0% 0)` with `cubic-bezier(0.4, 0, 0.2, 1)` — much smoother
- Add a progress bar: `3px` line at very top of page, gold, `width` driven by `scrollY / totalHeight`

### 4. Projects Section

**Current issues:** Cards are flat, no visual depth, `project-wide` span breaks on mobile.

**Changes:**
- Add card `::before` pseudo-element: `1px` gold gradient border that animates from 0% to 100% width on hover (border-reveal effect using `clip-path` or `width` on a pseudo)
- Replace ghost `pc-num` (the huge transparent number) with a more visible `opacity: 0.06` and `color: var(--primary)` — currently uses broken `rgba(67,56,202,0.04)` (indigo — wrong color)
- Project status badge: `IN PROGRESS` → use `--primary` text on `rgba(197,160,89,0.1)` background — fix from broken indigo color
- `project-wide` on mobile: instead of `span 1`, give it a `border-left: 3px solid var(--primary)` to indicate it's the featured/flagship project
- Add a `View Project →` hover reveal overlay: on hover a semi-transparent dark overlay with the arrow icon slides up from bottom (`translateY(100%)` → `translateY(0)`)

### 5. Music Releases Section

**Critical:** This section needs to visually feel different from the dev projects section — it's a different identity.

**Changes:**
- Section background: add a subtle `background: radial-gradient(ellipse at 50% 0%, var(--emerald-glow) 0%, transparent 70%)` scoped to the section wrapper — the green tint signals a tonal shift
- Section heading: use `--font-serif` in italic (`Cormorant Garamond`) instead of `--font-display` — warmer, musical feel
- Vinyl disc: replace solid `#4338CA` (broken indigo) with `radial-gradient(circle at 30% 30%, var(--primary), #1a1a1a)` — gold disc looks intentional
- Add `prefers-reduced-motion` check: `@media (prefers-reduced-motion: reduce) { .vinyl-disc { animation: none; } }`
- Release card layout: add a `1px` left border in gold on the `.release-info` div — gives structure
- Platform buttons: instead of per-platform hover colors, use a single gold hover state for consistency with brand — the current multi-color approach (green Spotify, red YT) looks chaotic
- Arabic title (`release-arabic`): apply `font-family: 'Amiri', serif` loaded via Google Fonts CDN — current `--font-display` (Outfit) has poor Arabic support, text renders as boxes on some devices

### 6. Arsenal / Services Section

**Changes:**
- Cards: add a left-side vertical accent `border-left: 3px solid transparent` → on hover `border-left-color: var(--primary)` — gives directional emphasis
- Icon: replace `color: var(--red)` (was broken) with `color: var(--primary)` + `filter: drop-shadow(0 0 6px var(--primary-glow))`
- On mobile (`max-width: 600px`): don't stack icon above text with `flex-direction: column` — keep `flex-direction: row` but shrink icon to `1.1rem` — saves vertical space and looks more polished

### 7. Contact Section

**Changes:**
- Form input focus state: replace broken `rgba(67,56,202,0.04)` (indigo) with `rgba(197,160,89,0.06)` (gold tint) and `box-shadow: 0 0 0 3px var(--primary-glow)` — on-brand
- Submit button: currently uses undefined `--gold` → replace with `var(--primary)` which IS defined
- Left column: after the GitHub link, add a row of social links (Spotify, GitHub, email) as icon-only pill buttons with `gap: 0.75rem` — currently there's dead whitespace here
- Add a `<p class="contact-tagline">` in italic serif font beneath the heading: _"Every great product starts with a conversation."_

### 8. Footer

**Changes:**
- Add Islamic timestamp format option: show current Hijri year alongside CE year using a lightweight JS function (no library needed — calculate from date diff)
- Add a `Back to top` button: positioned right, `position: sticky bottom: 2rem`, gold arrow icon, opacity 0 until `scrollY > 300`
- Replace current footer links (plain text) with icon + label format

### 9. Global Animations

**Add to `src/styles/partials/animations.css`:**

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  .fade-up,
  .vinyl-disc,
  .hero-visual,
  [style*="--i:"] {
    animation: none !important;
    transition-duration: 0.01ms !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* Stagger entrance: already uses CSS custom property --i, just ensure timing */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 0.7s var(--ease) forwards;
  animation-delay: calc(var(--i, 0) * 120ms);
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Gold shimmer on hover for headings */
.section-title {
  background: linear-gradient(90deg, var(--text) 0%, var(--primary) 50%, var(--text) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.5s;
}
.section-title:hover {
  background-position: right center;
}
```

### 10. Arabic Font Integration

Add to `index.html` `<head>` (CDN, no npm needed):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

Then in tokens.css:
```css
--font-arabic: 'Amiri', 'Traditional Arabic', serif;
```

Apply to: `.q-arabic`, `.release-arabic`, any Arabic text elements.

---

## Implementation Order

1. **`tokens.css`** — Fix all broken token definitions (15 min, unblocks everything else)
2. **`hero.css` + `hero.js`** — Role toggle chip, dual-identity visual split
3. **`navbar.css` + `navbar.js`** — Active indicator, scroll progress bar, mobile menu spring
4. **`projects.css`** — Border-reveal hover, fix pc-num color, featured project left-border
5. **`releases.css`** — Emerald section bg, Amiri font, fix vinyl gradient, `prefers-reduced-motion`
6. **`arsenal.css`** — Left accent border, fix icon color
7. **`contact.css`** — Fix form focus colors, social links row
8. **`animations.css`** — Reduced motion, stagger timing, shimmer headings
9. **`index.html`** — Amiri font CDN link, Hijri date script in footer
10. **`footer.js`** — Back-to-top button, Hijri year

---

## File Locations (this repo)

```
src/
├── styles/partials/
│   ├── tokens.css       ← START HERE
│   ├── hero.css
│   ├── navbar.css
│   ├── projects.css
│   ├── releases.css
│   ├── arsenal.css
│   ├── contact.css
│   ├── animations.css
│   └── footer.css
├── components/
│   ├── hero.js
│   ├── navbar.js
│   ├── footer.js
│   └── releases.js
└── data/
    └── site.js          ← brand config, do not restructure
index.html               ← add font CDN link here
```

---

## Do NOT Change

- `src/data/*.js` — content files, keep all data intact
- The CDN-only constraint — no new npm packages
- `vercel.json` and `_headers` — deployment config
- `src/components/AmoledBackground.jsx` and `AnimeEditBackground.jsx` — WebGL shaders
- Existing HTML structure of `articles.html`, `privacy.html`, `terms.html`
- EmailJS integration in contact form (service_8gjk955 / template_6m3iq3j)

---

## Success Criteria

After the redesign:

- [ ] No undefined CSS variable references (`--red`, `--gold`, `--red-glow` must all resolve)
- [ ] Hero badge dot is visibly gold and pulsing
- [ ] Section numbers (`01 —`, `02 —`) are visibly gold
- [ ] Project status badges are gold-tinted, not invisible indigo
- [ ] Contact form focus state is gold, not invisible indigo
- [ ] Submit button is visibly gold
- [ ] Vinyl disc is gold gradient, not broken indigo
- [ ] Arabic text uses Amiri font and renders correctly
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Mobile nav menu has smooth spring animation
- [ ] Navbar shows active section indicator on scroll
- [ ] A visitor can identify within 5 seconds that this is both a developer AND a musician
