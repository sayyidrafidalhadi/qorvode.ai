import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

/**
 * Personal portfolio for Sayyid Swalih (syd.swalih) — a page of the single QORVODE
 * project, not a separate app.
 *
 * Driven from the repo root (`npm run build:syd.swalih`, or as the final step of
 * `npm run build`); `root` is pinned to this folder so one `npm install` and
 * one project serve both builds. Served at https://qorvode.co.in/syd.swalih/ —
 * `base` makes every asset URL resolve under that prefix, and the build writes
 * into the main site's dist/ folder (../dist/syd.swalih) so the single deploy
 * picks it up.
 */
export default defineConfig({
  root: rootDir,
  publicDir: resolve(rootDir, 'public'),
  base: '/syd.swalih/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(rootDir, 'src'),
    },
  },
  build: {
    outDir: resolve(rootDir, '../dist/syd.swalih'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(rootDir, 'index.html'),
    },
  },
  preview: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    },
  },
});
