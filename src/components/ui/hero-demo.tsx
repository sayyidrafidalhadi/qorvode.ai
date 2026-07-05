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
    <section id="home" className="relative min-h-screen bg-bg overflow-hidden">
      {/* Cutout fills the entire viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.2, 0, 0, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet="/landscapesayyid.png" />
            <img
              src="/portraitsayyid.jpg"
              alt=""
              className="h-full w-full object-cover object-right scale-[1.8] translate-y-[25%] saturate-[0.15]"
            />
          </picture>
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-bg mix-blend-multiply" />
        </motion.div>

        {/* Gradient veil for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/10" />

      {/* Content */}
      <div className="relative z-10 w-full h-full min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-bg-alt brutal-border-alt brutal-shadow-sm-alt mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 bg-accent-alt" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-alt">{site.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text"
            >
              {site.hero.headline.top}
              <br />
              <span className="text-accent relative inline-block">
                {site.hero.headline.bottom}
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.2, 0, 0, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-text/70 leading-relaxed font-light max-w-xl"
            >
              {site.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-wrap gap-4"
            >
              <a href="#contact" aria-label={site.hero.ctaPrimary}>
                <Button variant="default" size="lg">
                  {site.hero.ctaPrimary}
                </Button>
              </a>
              <a href="#work" aria-label={site.hero.ctaSecondary}>
                <Button variant="ghost" size="lg" className="gap-2">
                  <BriefcaseIcon size="m" aria-hidden="true" /> {site.hero.ctaSecondary}
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-text/40"
            >
              {site.hero.trust}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <canvas
        className="pointer-events-none absolute inset-0 mx-auto opacity-30"
        id="canvas"
        aria-hidden="true"
      />
    </section>
  );
}
