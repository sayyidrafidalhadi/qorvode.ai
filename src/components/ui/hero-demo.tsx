"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas"
import { site } from "@/data/site";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button"
import { BriefcaseIcon } from "@/components/Icons";

export function HeroDemo() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-bg overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-bg-alt brutal-border-alt brutal-shadow-sm-alt mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-accent-alt" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-alt">{site.hero.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text">
            {site.hero.headline.top}
            <br />
            <span className="text-accent relative inline-block">
              {site.hero.headline.bottom}
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              />
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg text-text/70 leading-relaxed font-light">
            {site.hero.subheadline}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button variant="default" size="lg">
                {site.hero.ctaPrimary}
              </Button>
            </a>
            <a href="#work">
              <Button variant="ghost" size="lg" className="gap-2">
                <BriefcaseIcon size="m" /> {site.hero.ctaSecondary}
              </Button>
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-text/40"
          >
            {site.hero.trust}
          </motion.p>
        </motion.div>

        {/* Decorative element */}
        <div className="absolute top-20 right-5 sm:right-12 lg:right-24 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 brutal-border rotate-12 opacity-20 pointer-events-none" aria-hidden="true" />
      </div>

      <canvas
        className="pointer-events-none absolute inset-0 mx-auto opacity-40"
        id="canvas"
      />
    </section>
  );
}
