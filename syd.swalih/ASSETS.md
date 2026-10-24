# syd.swalih — artwork manifest

Imagery lives in `src/assets/` and is imported by the components, so the
bundler fingerprints and caches it. The WebP derivatives are the files that
ship; the PNG / PDF originals are kept as sources.

## Files

| File                             | Used by                    | Size      | Notes                                                        |
| -------------------------------- | -------------------------- | --------- | ------------------------------------------------------------ |
| `src/assets/swalih.png`          | Portrait source            | 1261×1247 | Original portrait.                                           |
| `src/assets/swalih.webp`         | Hero portrait              | 1000×1250 | 4:5 crop of the portrait, exported for the web.              |
| `src/assets/aura-brand.webp`     | Work — project 01          | 1080×1350 | AURA Beauty identity board.                                  |
| `src/assets/aura-retail.webp`    | Work — project 02          | 1080×1350 | AURA Beauty storefront and packaging application.            |
| `src/assets/aura-guidelines.webp`| Work — project 03          | 1080×1350 | AURA Beauty colour and usage guidelines.                     |
| `src/assets/elvora.webp`         | Work — project 04          | 1080×1350 | Elvora Creative logo identity.                               |
| `src/assets/logoproject.png`     | Source                     | 1182×712  | Original AURA Beauty logo + tote board.                      |
| `src/assets/logoproject.pdf`     | Source                     | 12 pages  | AURA Beauty brand guideline deck (Canva export).             |

The four project images were composed from `logoproject.pdf` (300 DPI renders)
so the work section uses real project material rather than placeholders. The
`.webp` files are the ones the site ships.

## Social card

`public/sayyid.jpeg` is the 1200×630 OpenGraph / Twitter card. It is a stable,
absolute URL, so it lives in `public/` rather than `src/assets/`.

## Brand icons

`public/favicon.svg`, `public/apple-touch-icon.png`, `public/icon-192.png`,
`public/icon-512.png` and `public/logo.webp` are the brass-and-cyan "S"
monogram used across the portfolio and the installable web app. Regenerate the
PNGs after editing the SVG:

```bash
cd public
rsvg-convert -w 512 -h 512 favicon.svg -o icon-512.png
rsvg-convert -w 192 -h 192 favicon.svg -o icon-192.png
rsvg-convert -w 180 -h 180 favicon.svg -o apple-touch-icon.png
python3 -c "from PIL import Image; Image.open('icon-512.png').convert('RGB').save('logo.webp','WEBP',quality=92,method=6)"
```

## Changing the copy

All text lives in `src/data/profile.ts` — project names, clients, years,
services, skills, bio paragraphs and stats are all edited there. The
components are purely presentational.
