# QORVODE Portfolio — GSAP Animation Upgrade Prompt for OpenCode

## Context

**Stack:** React 18 + Vite + Tailwind CSS + Framer Motion (`motion/react`) + Three.js  
**Current animations:** Framer Motion `whileInView` with basic `opacity + translateY` on every section — functional but generic. No scroll-driven effects, no text splitting, no momentum scroll.  
**Goal:** Add 3 GSAP-powered effects that elevate the feel to near igloo.inc quality without touching the existing Framer Motion code.

---

## Step 1 — Install GSAP

Run in the project root:

```bash
npm install gsap
```

GSAP is now fully free including all plugins (SplitText, ScrollTrigger, ScrollSmoother). No license key needed.

---

## Step 2 — Create `src/lib/gsap.js`

Create a central GSAP setup file that registers all plugins once:

```js
// src/lib/gsap.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export { gsap, ScrollTrigger, ScrollSmoother, SplitText };
```

---

## Step 3 — Wrap the app in ScrollSmoother

### In `index.html`

Wrap the `<div id="root">` in the required ScrollSmoother structure:

```html
<body>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div id="root"></div>
    </div>
  </div>
</body>
```

Add to `src/styles/main.css` (or tokens.css):

```css
/* ScrollSmoother requires these */
#smooth-wrapper {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
#smooth-content {
  overflow: visible;
  width: 100%;
}
```

### In `src/main.jsx`

Initialize ScrollSmoother after React mounts:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { gsap, ScrollSmoother, ScrollTrigger } from './lib/gsap.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Init after paint
requestAnimationFrame(() => {
  // Only on non-touch devices — mobile gets native scroll
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isTouchDevice && !prefersReduced) {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.4,          // momentum drag — 1 = instant, 2 = very slow
      effects: true,        // enables data-speed parallax attributes
      smoothTouch: 0,       // disable on touch
    });
  }
});
```

**Why mobile is excluded:** ScrollSmoother intercepts native scroll which feels wrong on Android. Touch devices keep native momentum which is already excellent on Chrome Android.

---

## Step 4 — Hero Headline SplitText Animation

### In `src/App.jsx`

Find the Hero section component (the `<section>` with `min-h-screen`). Add a `useEffect` that runs SplitText on the hero headline after mount.

**Add this import at the top of App.jsx:**
```jsx
import { gsap, SplitText, ScrollTrigger } from './lib/gsap.js';
```

**Add a ref to the hero `<h1>` element:**
```jsx
const heroTitleRef = useRef(null);
```

**In the hero `<h1>` JSX, add the ref:**
```jsx
<h1 ref={heroTitleRef} className="...existing classes...">
  <span className="block">{site.hero.headline.top}</span>
  <span className="block text-accent italic font-serif normal-case mt-0.5 sm:mt-1">
    {site.hero.headline.bottom}
  </span>
</h1>
```

**Add this useEffect inside the Hero component (or the main App component, after the heroTitleRef):**

```jsx
useEffect(() => {
  if (!heroTitleRef.current) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Split headline into individual characters
  const split = new SplitText(heroTitleRef.current, {
    type: 'chars,words',
    charsClass: 'hero-char',
  });

  // Animate each character in with a stagger
  gsap.from(split.chars, {
    opacity: 0,
    y: 60,
    rotateX: -90,
    transformOrigin: '0% 50% -50px',
    duration: 0.8,
    stagger: 0.022,
    ease: 'back.out(1.4)',
    delay: 0.3,
    onComplete: () => split.revert(), // clean up after animation
  });

  return () => split.revert();
}, []);
```

**Add to CSS (tokens.css or animations.css):**
```css
.hero-char {
  display: inline-block;
  will-change: transform, opacity;
}
```

---

## Step 5 — Section Headings Scramble Effect

This gives section titles a text-scramble/reveal on scroll — like the letter-glitch effect on premium sites.

### Create `src/hooks/useTextScramble.js`

```js
import { useEffect, useRef } from 'react';
import { gsap, SplitText, ScrollTrigger } from '../lib/gsap.js';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function useTextScramble(selector) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      const originalText = el.textContent;
      const chars = originalText.split('');

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          let frame = 0;
          const totalFrames = 18;
          const interval = setInterval(() => {
            el.textContent = chars
              .map((char, i) => {
                if (char === ' ') return ' ';
                if (frame / totalFrames > i / chars.length) return char;
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              })
              .join('');
            frame++;
            if (frame > totalFrames) {
              clearInterval(interval);
              el.textContent = originalText;
            }
          }, 40);
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [selector]);
}
```

### In `src/App.jsx`

Import and use the hook:

```jsx
import { useTextScramble } from './hooks/useTextScramble.js';

// Inside the main App() function:
useTextScramble('.gsap-scramble');
```

### Apply the class to section headings in JSX

On every major section heading `<h2>` or `<h3>`, add `gsap-scramble` class:

```jsx
// Example — Projects section heading:
<h2 className="... gsap-scramble">Selected Work</h2>

// Music section heading:
<h2 className="... gsap-scramble">Discography</h2>

// Arsenal section heading:
<h2 className="... gsap-scramble">Arsenal</h2>
```

---

## Step 6 — Scroll-Driven Project Card Reveals

Replace the current Framer Motion `whileInView` on project cards with GSAP ScrollTrigger for a more cinematic staggered entrance.

### Create `src/hooks/useCardReveal.js`

```js
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap.js';

export function useCardReveal(selector, options = {}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    gsap.from(cards, {
      opacity: 0,
      y: 80,
      scale: 0.94,
      duration: 0.9,
      stagger: {
        amount: 0.5,       // total stagger time across all cards
        from: 'start',
      },
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cards[0].closest('section') || cards[0].parentElement,
        start: 'top 75%',
        once: true,
        ...options,
      },
    });
  }, [selector]);
}
```

### In `src/App.jsx`

```jsx
import { useCardReveal } from './hooks/useCardReveal.js';

// Inside App():
useCardReveal('.project-card-gsap');
useCardReveal('.release-card-gsap', { start: 'top 80%' });
useCardReveal('.arsenal-card-gsap', { start: 'top 80%' });
```

### Add the class to card elements in JSX

On each project article/card element in the JSX, add the relevant class:

```jsx
// Project cards — add class:
<article className="... project-card-gsap">

// Release cards:
<div className="... release-card-gsap">

// Arsenal cards:
<div className="... arsenal-card-gsap">
```

**Important:** Remove the `initial` / `whileInView` / `viewport` props from these specific Framer Motion elements to avoid competing animations. You can keep `whileHover` props — they don't conflict.

---

## Step 7 — Parallax on Hero Visual

Add depth to the hero terminal/visual element using ScrollTrigger scrub.

In the hero `<section>`, find the hero visual container div (the one containing the terminal or background element). Add a `data-speed` attribute:

```jsx
<div className="hero-visual-wrap" data-speed="0.85">
  {/* terminal / background visual */}
</div>
```

ScrollSmoother automatically picks up `data-speed` attributes when `effects: true` is set (Step 3). Values:
- `1.0` = normal scroll speed
- `0.85` = slightly slower = appears to float behind content (parallax)
- `1.15` = slightly faster = pops forward

Also add to the hero badge/subheadline:
```jsx
<div data-speed="0.95">
  {/* badge + subheadline */}
</div>
```

---

## Step 8 — Scroll Progress Bar

Add a thin gold progress bar at the top of the page.

### In `src/App.jsx`, add this component:

```jsx
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'var(--primary)',
        transformOrigin: 'left center',
        transform: 'scaleX(0)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};
```

### Add `<ScrollProgress />` as the first child inside the main App return:

```jsx
return (
  <>
    <ScrollProgress />
    <FloatingWhatsApp />
    <Navbar />
    {/* ... rest of sections */}
  </>
);
```

---

## Step 9 — Marquee Speed Boost on Scroll

The current marquee band uses CSS `animate-marquee`. Upgrade it to GSAP for variable speed (faster when scrolling, slower when idle) — feels alive.

### Find the marquee section in App.jsx

It looks like:
```jsx
<div className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12 animate-marquee">
```

### Replace with GSAP-driven marquee:

```jsx
const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (!marqueeRef.current) return;

    const items = marqueeRef.current.children;
    const totalWidth = marqueeRef.current.scrollWidth / 2; // duplicated content

    // Base scroll tween
    const tween = gsap.to(marqueeRef.current, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    });

    // Speed up on scroll
    ScrollTrigger.create({
      trigger: marqueeRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        tween.timeScale(1 + Math.abs(self.getVelocity()) / 800);
        gsap.to(tween, { timeScale: 1, duration: 1.5, overwrite: false, ease: 'power2.out' });
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  const items = ['Design', 'Development', 'Digital Authority', 'React', 'Firebase', 'Next.js', 'Motion', 'Islamic Tech'];

  return (
    <div className="overflow-hidden py-6 border-y border-white/[0.06]">
      <div ref={marqueeRef} className="flex gap-16 sm:gap-24 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[3px] uppercase text-white/20 flex-shrink-0">
            {item} <span className="text-accent mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
```

Remove the old CSS `animate-marquee` keyframe from `main.css` once this is in place.

---

## What NOT to Change

- Do not remove or modify Framer Motion on the Navbar, FloatingWhatsApp, or any `whileHover` / `whileTap` props — these are fine
- Do not touch `AnimeEditBackground.jsx` or `AmoledBackground.jsx`
- Do not modify `src/data/*.js` files
- Do not change `vite.config.js`, `vercel.json`, or `_headers`
- Keep `@emailjs/browser` integration untouched
- Keep all existing Tailwind classes — only add `gsap-scramble`, `project-card-gsap`, `release-card-gsap`, `arsenal-card-gsap` classes alongside existing ones

---

## Implementation Order

1. `npm install gsap`
2. Create `src/lib/gsap.js` (plugin registration)
3. Update `index.html` (smooth-wrapper structure)
4. Update `src/main.jsx` (ScrollSmoother init)
5. Add ScrollProgress component to App.jsx
6. Add SplitText hero animation (Step 4)
7. Create `src/hooks/useTextScramble.js` + apply to headings
8. Create `src/hooks/useCardReveal.js` + apply to cards
9. Add `data-speed` parallax to hero visual (Step 7)
10. Replace CSS marquee with GSAP marquee (Step 9)

---

## Success Criteria

- [ ] Page scroll has momentum/easing on desktop (ScrollSmoother)
- [ ] Mobile retains native scroll (no ScrollSmoother on touch)
- [ ] Hero headline letters animate in on load (SplitText)
- [ ] Section headings scramble-reveal on scroll
- [ ] Project/release/arsenal cards stagger in cinematically
- [ ] Gold progress bar visible at top of page while scrolling
- [ ] Marquee speeds up when user scrolls past it
- [ ] Hero visual floats at slightly different speed (parallax depth)
- [ ] All animations disabled when `prefers-reduced-motion: reduce` is set
- [ ] No console errors from competing Framer Motion + GSAP animations
