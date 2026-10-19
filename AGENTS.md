# AGENTS.md

## Quick Commands
- `npm run dev` - Start dev server (agency site)
- `npm run dev:zydhh` - Start the zydhh.hadi portfolio dev server (port 5174)
- `npm run build` - Single production build: agency site into `dist/`, then the portfolio into `dist/zydhh.hadi/`
- `npm run build:zydhh` - Build only the portfolio (`dist/zydhh.hadi/`)
- `npm run preview` - Preview the whole build (agency at `/`, portfolio at `/zydhh.hadi/`)
- `npm run lint` - Run ESLint over the whole project (agency + portfolio)

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
- `src/data/` - Content modules (site, projects, articles, faq, arsenal)
- `src/styles/main.css` - Tailwind v4 import + `@theme` design tokens (single file, no CSS partials)
- `src/main.tsx`, `src/articles-main.tsx`, `src/legal-main.tsx` - Entry module per HTML page
- `zydhh.hadi/` - Founder's personal portfolio page, built as a second page of this single project (`zydhh.hadi/vite.config.ts`, `base: '/zydhh.hadi/'`, `root` pinned to that folder; output lands in `dist/zydhh.hadi/` so it serves at `/zydhh.hadi/`). There is no separate `package.json` or nested install — root `node_modules` powers both builds. Content in `zydhh.hadi/src/data/profile.ts`, styles mirrored from root `main.css`
- `public/` - Static assets served from root (`logo.webp`, `manifest.json`, `sw.js`, `sitemap.xml`, `robots.txt`)

## Important Conventions
- Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- Images in `public/` are referenced as root paths (e.g. `/logo.webp`); images in `src/` directly (e.g. `/src/service1.jpg`)
- Use `AnimatePresence` from `motion/react` for exit animations
- The site uses a strict monochrome palette: bg `#000000`, text `#ededed`, accent `#ffffff`, accent-alt `#c8c8c8` — the `@theme` block in `src/styles/main.css` (mirrored in `zydhh.hadi/src/styles/main.css`) is the source of truth. Shipped images are desaturated (R=G=B); keep new assets greyscale
- JSON-LD structured data is injected by `src/components/SEO.tsx` from the data modules; do not re-add it to the HTML files
- The service worker (`public/sw.js`) is registered from the HTML pages only on non-localhost hosts, and uses network-first navigation so deploys are picked up immediately

## Deployment
- One project, one `npm install`, one `npm run build`. The single deploy produces the agency site at `/` (index, articles, privacy, terms) and the founder portfolio at `/zydhh.hadi/`.
- Do not add a second `package.json` or a separate deployment for `zydhh.hadi/` — it is a page of this project, and the agency page links to it.
- Build order matters: the agency build (`vite build`) empties `dist/`, so the portfolio build must run after it (as `npm run build` does).
