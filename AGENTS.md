# AGENTS.md

## Quick Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Important Constraints
- Do NOT run npm commands unless explicitly requested by the user

## Tech Stack
- React 18 + Vite
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin)
- Motion (Framer Motion v12)
- Three.js for 3D backgrounds

## Key Files
- `src/App.jsx` - Main application with all sections (Hero, Work, About, Services, Testimonials, etc.)
- `src/styles/main.css` - Tailwind imports and global styles
- `src/components/` - Component files (navbar, hero, footer, etc.)
- `src/data/` - Data files (projects, releases, articles, etc.)

## Important Conventions
- Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- Images in `src/` are referenced directly (e.g., `/src/service1.jpg`)
- Use `AnimatePresence` from `motion/react` for exit animations
- Component uses inline styles via Tailwind classes primarily
- The site uses a dark theme with accent color (gold #C5A059)