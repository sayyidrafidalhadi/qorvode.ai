import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

/**
 * Standalone personal portfolio for Sayyid Rafid Al Hadi (zydhh.hadi).
 *
 * Served at https://qorvode.co.in/zydhh.hadi/ — `base` makes every asset URL
 * resolve under that prefix, and the build writes straight into the main
 * site's dist/ folder (../dist/zydhh.hadi) so the root deploy picks it up.
 */
export default defineConfig({
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
