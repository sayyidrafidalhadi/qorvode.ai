# fayiizeeh — artwork manifest

Imagery lives in `src/assets/` and is imported by the components, so the
bundler fingerprints and caches it.

## Files

| File                                | Used by                 | Size    | Notes                                  |
| ----------------------------------- | ----------------------- | ------- | -------------------------------------- |
| `src/assets/fayiz.webp`             | Hero portrait           | 922×1152 | Your portrait photo.                   |
| `src/assets/basmala.webp`           | Work — project 01       | 1080×1350 | Basmala event poster.                |
| `src/assets/convocation.webp`       | Work — project 02       | 1200×1500 | Convocation ceremony poster.         |
| `src/assets/congrats.webp`          | Work — project 03       | 1350×1593 | Congrats achievement poster.         |
| `src/assets/soulful.webp`           | Work — project 04       | 1080×1340 | Soulful Time induction week poster.  |

The `.png` / `.jpeg` originals sit alongside them in the same folder. The
`.webp` derivatives are the ones the site ships — they are ~7× smaller
(6.8 MB → 950 KB total) at the same visual quality. Re-export the WebP
versions after any edit:

```bash
cd src/assets
python3 -c "
from PIL import Image
for src, dst, maxw in [('basmala.png','basmala.webp',1080), ('congrats.png','congrats.webp',1350)]:
    im = Image.open(src).convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, round(im.height*maxw/im.width)), Image.LANCZOS)
    im.save(dst, 'WEBP', quality=88, method=6)
"
```

## Social card

`public/fayiz.jpeg` is the copy used for the OpenGraph / Twitter card
(it has to be a stable, absolute URL, so it cannot live in `src/assets/`).

## Brand icons

`public/favicon.svg`, `public/apple-touch-icon.png`, `public/icon-192.png`,
`public/icon-512.png` and `public/logo.webp` are generated geometric "F"
monograms. Replace them with a real logo if you have one — keep the names and
nothing else needs to change.

## Changing the copy

All text lives in `src/data/profile.ts` — project names, clients, years,
services, skills, bio paragraphs and stats are all edited there. The
components are purely presentational.
