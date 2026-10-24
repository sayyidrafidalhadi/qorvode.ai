# AGENTS.md

## Quick Commands
- `npm run dev` - Start dev server (agency site)
- `npm run dev:zydhh` - Start the zydhh.hadi portfolio dev server (port 5174)
- `npm run dev:syd.swalih` - Start the syd.swalih portfolio dev server (port 5175)
- `npm run dev:fayiizeeh` - Start the fayiizeeh portfolio dev server (port 5176)
- `npm run build` - Single production build: agency site into `dist/`, then the portfolios into `dist/zydhh.hadi/`, `dist/fayiizeeh/` and `dist/syd.swalih/`
- `npm run build:zydhh` - Build only the portfolio (`dist/zydhh.hadi/`)
- `npm run build:fayiizeeh` - Build only the portfolio (`dist/fayiizeeh/`)
- `npm run build:syd.swalih` - Build only the portfolio (`dist/syd.swalih/`)
- `npm run preview` - Preview the whole build (agency at `/`, portfolios at `/zydhh.hadi/`, `/fayiizeeh/` and `/syd.swalih/`)
- `npm run lint` - Run ESLint over the whole project (agency + portfolios)

## Important Constraints
- Do NOT run npm commands unless explicitly requested by the user

## Tech Stack
- React 18 + Vite + TypeScript (multi-page build: index, articles, privacy, terms)
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin; theme tokens live in `src/styles/main.css`)
- Motion (Framer Motion v12) via `motion/react`
- Three.js for 3D backgrounds; lucide-react for icons

## Key Files
- `src/App.tsx` - Home page section order (Hero, Work, Process, FounderPage, Niches, Testimonials, Articles, Services, SocialProof, FAQ, Terminal, CTA)
- `src/components/` - Components (Navbar, Work, TerminalAI, SEO, etc.)
- `src/data/` - Content modules (site, projects, articles, faq, arsenal, team)
- `src/styles/main.css` - Tailwind v4 import + `@theme` design tokens (single file, no CSS partials)
- `src/main.tsx`, `src/articles-main.tsx`, `src/legal-main.tsx` - Entry module per HTML page
- `zydhh.hadi/` - Founder's personal portfolio page, built as a second page of this single project (`zydhh.hadi/vite.config.ts`, `base: '/zydhh.hadi/'`, `root` pinned to that folder; output lands in `dist/zydhh.hadi/` so it serves at `/zydhh.hadi/`). There is no separate `package.json` or nested install — root `node_modules` powers both builds. Content in `zydhh.hadi/src/data/profile.ts`, styles mirrored from root `main.css`
- `fayiizeeh/` - Fayiz's portfolio page (graphic designer, eladesign.co), built the same way (`fayiizeeh/vite.config.ts`, `base: '/fayiizeeh/'`, output lands in `dist/fayiizeeh/`). Content in `fayiizeeh/src/data/profile.ts`; poster artwork in `fayiizeeh/src/assets/` (WebP derivatives are the ones that ship — see `fayiizeeh/ASSETS.md`)
- `syd.swalih/` - Sayyid Swalih's portfolio page (graphic designer & civil engineer, Bekal), built the same way (`syd.swalih/vite.config.ts`, `base: '/syd.swalih/'`, output lands in `dist/syd.swalih/`). Content in `syd.swalih/src/data/profile.ts`; project artwork and the portrait live in `syd.swalih/src/assets/` (WebP derivatives ship — see `syd.swalih/ASSETS.md`). The AURA Beauty project boards are composed from the designer's own `logoproject.pdf`; the OG card is `syd.swalih/public/sayyid.jpeg`
- `public/` - Static assets served from root (`logo.webp`, `manifest.json`, `sw.js`, `sitemap.xml`, `robots.txt`)

## Important Conventions
- Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- Images in `public/` are referenced as root paths (e.g. `/logo.webp`); images in `src/` directly (e.g. `/src/service1.jpg`)
- Use `AnimatePresence` from `motion/react` for exit animations
- The agency site uses a strict monochrome palette: bg `#000000`, text `#ededed`, accent `#ffffff`, accent-alt `#c8c8c8` — the `@theme` block in `src/styles/main.css` is the source of truth. Shipped images are desaturated (R=G=B); keep new assets greyscale
- Each portfolio page has its own palette, defined in its own `@theme` block: `zydhh.hadi/` is red + gold on golden black (bg `#0a0805`, accent `#e04b3c`, accent-alt `#d9a648`), `fayiizeeh/` is an earth palette (bg `#070706`, accent `#c1e77d`, accent-alt `#caa251`) and `syd.swalih/` is a blueprint palette (bg `#08090b`, accent `#e6a53c` brass, accent-alt `#74b3c6` drafting cyan). Per-item accents (projects, capabilities, services) are resolved through `src/lib/accents.ts` in each folder — the class strings there must stay literal so Tailwind can see them
- The posters in `fayiizeeh/src/assets/` are the designer's own colour work and are shown as-is — they are content, not UI imagery. The AURA Beauty boards in `syd.swalih/src/assets/` are the designer's own work too and are shown as-is
- JSON-LD structured data is injected by `src/components/SEO.tsx` from the data modules; do not re-add it to the HTML files. The portfolio pages are standalone HTML entry points, so each carries its own `<script type="application/ld+json">` block
- The team roster in `src/data/team.ts` is the single source for the team cards, the `Person`/`Organization` JSON-LD, the FAQ entries and both `llms.txt` files — edit it there, not in the components
- GEO/AEO artifacts live in `public/`: `llms.txt` (llmstxt.org convention), `llms-full.txt` (extended reference) and `robots.txt` (AI/answer-engine crawlers explicitly allowed). Keep them in sync with `src/data/site.ts` and `src/data/team.ts`
- The service worker (`public/sw.js`) is registered from the HTML pages only on non-localhost hosts, and uses network-first navigation so deploys are picked up immediately

## Deployment
- One project, one `npm install`, one `npm run build`. The single deploy produces the agency site at `/` (index, articles, privacy, terms) and the portfolios at `/zydhh.hadi/`, `/fayiizeeh/` and `/syd.swalih/`.
- Do not add a second `package.json` or a separate deployment for `zydhh.hadi/`, `fayiizeeh/` or `syd.swalih/` — they are pages of this project.
- Build order matters: the agency build (`vite build`) empties `dist/`, so the portfolio builds must run after it (as `npm run build` does).
