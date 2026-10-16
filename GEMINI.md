# Gemini Project Mandates

This file contains project-specific instructions for Gemini CLI. These mandates take precedence over general system instructions.

## Project Overview
A multi-page portfolio website built with React, Vite, and TypeScript.

## Standards & Conventions
- **Styling:** Tailwind CSS v4 utility classes plus the `@theme` tokens in `src/styles/main.css` (single file — there are no CSS partials).
- **Components:** TypeScript functional components in `src/components/` (`.tsx`).
- **Data:** Keep content decoupled in `src/data/`.
- **Architecture:** Each HTML entry point loads its own entry module (`src/main.tsx`, `src/articles-main.tsx`, `src/legal-main.tsx`).
