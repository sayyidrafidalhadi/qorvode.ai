"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import PixelWordmark from "@/components/PixelWordmark";
import ShaderAurora from "@/components/ShaderAurora";
import Counter from "@/components/motion/Counter";
import Magnetic from "@/components/motion/Magnetic";

const stagger = (n: number) => ({ "--stagger": n } as CSSProperties);

export function HeroDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="pixel-container hero-intro relative flex min-h-svh flex-col overflow-hidden border-b border-border pt-(--nav-h) select-none"
      style={{ background: "var(--t-field-bg)" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <ShaderAurora className="absolute inset-0 h-full w-full opacity-70" />
        <div className="grain absolute inset-0 opacity-40" />
      </div>

      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center px-6"
        style={{ y: isDesktop ? contentY : 0, opacity: contentOpacity }}
      >
        <div className="flex-1 min-h-5" />

        <div
          data-hero-stagger="true"
          style={stagger(0)}
          className="mb-6 hidden flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-text/45 sm:flex"
        >
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            {site.hero.badge}
          </span>
          <span className="hidden text-border-strong sm:inline">/</span>
          <span className="hidden sm:inline">Premium · Craft-first · Remote worldwide</span>
        </div>

        <a
          href={site.hero.news.href}
          data-hero-stagger="true"
          style={stagger(1)}
          className="group inline-flex max-w-full items-center gap-2 border border-accent/35 bg-bg/60 px-3.5 py-1.5 text-left font-mono text-[13px] leading-snug text-accent transition-colors duration-150 ease-out hover:border-accent hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="min-w-0 truncate">{site.hero.news.text}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="size-4 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
          >
            <path d="M14 5.75L20.25 12L14 18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            <path d="M19.5 12H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </a>

        <div data-hero-stagger="true" style={stagger(2)} className="mt-8 w-[90%] max-w-5xl">
          <PixelWordmark text={site.hero.wordmark} />
        </div>

        <div className="mt-10 flex w-full max-w-2xl flex-col items-center text-center">
          <h1
            data-hero-stagger="true"
            style={stagger(3)}
            className="font-mono text-2xl font-medium tracking-tight text-text [text-wrap:balance] sm:text-3xl"
          >
            <span className="sr-only">{site.hero.headline.top}: </span>
            {site.hero.headline.top}
            <span className="text-accent">{site.hero.headline.bottom}</span>
            <span className="block text-base font-normal text-text/70 sm:text-lg">
              Premium Digital Experiences, Built End To End
            </span>
          </h1>

          <p
            data-hero-stagger="true"
            style={stagger(4)}
            className="mt-4 text-[15px] leading-relaxed text-text/60"
          >
            {site.hero.tagline.map((line) => (
              <span key={line} className="block [text-wrap:balance]">
                {line}
              </span>
            ))}
          </p>

          <div
            data-hero-stagger="true"
            style={stagger(5)}
            className="mt-9 flex w-full max-w-xs flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row"
          >
            <Magnetic strength={0.3}>
              <a href="#contact" aria-label={site.hero.ctaPrimary}>
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                  {site.hero.ctaPrimary}
                </Button>
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="#work" aria-label={site.hero.ctaSecondary}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mr-0.5">
                    <path d="M5 22V2L22 12L5 22Z" fill="currentColor" />
                  </svg>
                  {site.hero.ctaSecondary}
                </Button>
              </a>
            </Magnetic>
          </div>

          <div
            data-hero-stagger="true"
            style={stagger(6)}
            className="mt-9 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2"
          >
            {site.hero.capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-border-alt bg-bg/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-text/55"
              >
                {capability}
              </span>
            ))}
          </div>

          <div
            data-hero-stagger="true"
            style={stagger(7)}
            className="mt-10 grid w-full max-w-2xl grid-cols-3 overflow-hidden rounded-xl border border-border bg-bg/40 backdrop-blur-sm"
          >
            {site.hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1 px-2 py-4 text-center ${i > 0 ? "border-l border-border" : ""}`}
              >
                <Counter value={stat.value} className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl" />
                <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-text/45">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p
            data-hero-stagger="true"
            style={stagger(8)}
            className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-text/35"
          >
            {site.hero.trust}
          </p>
        </div>

        <div className="flex-1" />
      </motion.div>
    </section>
  );
}
