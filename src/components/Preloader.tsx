"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ShaderAurora from "@/components/ShaderAurora";
import { site } from "@/data/site";

const BOOT_LINES = [
  "boot qorvode kernel",
  "load interface modules",
  "warm up audio engine",
  "open secure channel",
  "render experience",
];

const SPINNER = ["|", "/", "-", "\\"];

const CORNERS = [
  "left-0 top-0 border-l-2 border-t-2",
  "right-0 top-0 border-r-2 border-t-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 450 : 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => setFrame((f) => f + 1), 110);
    return () => window.clearInterval(id);
  }, [done]);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  const letters = site.hero.wordmark.split("");
  const linesShown = Math.min(
    BOOT_LINES.length,
    Math.ceil((progress / 100) * BOOT_LINES.length),
  );

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          aria-hidden="true"
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-bg px-6"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <ShaderAurora className="absolute inset-0 h-full w-full opacity-70" />
          <div className="preloader-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="grain pointer-events-none absolute inset-0 opacity-40" />
          <div className="preloader-scan pointer-events-none" />

          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative px-6 py-9">
              {CORNERS.map((pos, i) => (
                <motion.span
                  key={pos}
                  className={`absolute size-5 border-accent/60 ${pos}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                />
              ))}

              <div
                className="preloader-flicker flex items-end justify-center"
                style={{ fontSize: "clamp(2.25rem, 10vw, 5rem)", perspective: 900 }}
              >
                {letters.map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    className="pixel-wordmark inline-block"
                    initial={{ opacity: 0, y: 30, rotateX: -85, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.1 + i * 0.055,
                      duration: 0.55,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-text/45">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-grid w-3 place-items-center text-accent">
                    {SPINNER[frame % SPINNER.length]}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={linesShown}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      {linesShown > 0 ? BOOT_LINES[linesShown - 1] : "initializing"}
                    </motion.span>
                  </AnimatePresence>
                  <span className="terminal-caret text-accent" />
                </span>
                <span className="tabular-nums text-accent">{progress}%</span>
              </div>

              <div className="mt-3 h-px w-full overflow-hidden bg-border">
                <motion.div
                  className="relative h-full bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <span
                    className="absolute top-1/2 right-0 size-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent"
                    style={{ boxShadow: "0 0 14px 3px var(--color-accent)" }}
                  />
                </motion.div>
              </div>

              <ul className="mt-6 space-y-1 font-mono text-[11px] leading-relaxed text-text/35">
                <AnimatePresence>
                  {BOOT_LINES.slice(0, linesShown).map((line) => (
                    <motion.li
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-accent">✓</span>
                      <span>{line}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
