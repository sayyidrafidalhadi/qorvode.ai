import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

/**
 * Personal portfolio for Sayyid Rafid Al Hadi (zydhh.hadi) — a second page of
 * the single QORVODE project, not a separate app.
 *
 * Driven from the repo root (`npm run build:zydhh`, or as the second step of
 * `npm run build`); `root` is pinned to this folder so one `npm install` and
 * one project serve both builds. Served at https://qorvode.co.in/zydhh.hadi/ —
 * `base` makes every asset URL resolve under that prefix, and the build writes
 * into the main site's dist/ folder (../dist/zydhh.hadi) so the single deploy
 * picks it up.
 */
export default defineConfig({
  root: rootDir,
  publicDir: resolve(rootDir, 'public'),
  base: '/zydhh.hadi/',
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
    outDir: resolve(rootDir, '../dist/zydhh.hadi'),
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
