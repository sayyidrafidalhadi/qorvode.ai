# AGENTS.md

## Quick Commands
- `npm run dev` - Start dev server
- `npm run dev:zydhh` - Start the zydhh.hadi personal portfolio dev server (port 5174)
- `npm run build` - Build for production (chains the zydhh.hadi sub-app build into `dist/zydhh.hadi/`)
- `npm run build:zydhh` - Build only the zydhh.hadi sub-app
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (root site; the sub-app has its own `npm --prefix zydhh.hadi run lint`)

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
- `zydhh.hadi/` - Standalone personal portfolio sub-app for the founder (own `package.json`, Vite config with `base: '/zydhh.hadi/'`; builds into `dist/zydhh.hadi/` so it serves at `/zydhh.hadi/`; content in `zydhh.hadi/src/data/profile.ts`, styles mirrored from root `main.css`)
- `public/` - Static assets served from root (`logo.webp`, `manifest.json`, `sw.js`, `sitemap.xml`, `robots.txt`)

## Important Conventions
- Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- Images in `public/` are referenced as root paths (e.g. `/logo.webp`); images in `src/` directly (e.g. `/src/service1.jpg`)
- Use `AnimatePresence` from `motion/react` for exit animations
- The site uses a dark terminal theme: bg `#0a100d`, accent green `#b9ce82` — the `@theme` block in `src/styles/main.css` is the source of truth for colors
- JSON-LD structured data is injected by `src/components/SEO.tsx` from the data modules; do not re-add it to the HTML files
- The service worker (`public/sw.js`) is registered from the HTML pages only on non-localhost hosts, and uses network-first navigation so deploys are picked up immediately
