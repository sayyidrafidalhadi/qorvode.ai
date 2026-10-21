import { motion } from "motion/react";
import { profile } from "@/data/profile";
import ScrambleText from "@/components/motion/ScrambleText";
import TiltCard from "@/components/motion/TiltCard";
import SmartImage from "@/components/SmartImage";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";
import portraitImg from "@/assets/fayiz.webp";

const PortraitFallback = () => (
  <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-bg-alt">
    <div className="grid-field pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
    <span className="relative font-display text-7xl font-bold tracking-tighter text-text/15">
      F
    </span>
    <span className="relative font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-text/35">
      Portrait
    </span>
  </div>
);

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-[3px] border-accent bg-bg pt-28 sm:pt-36"
    >
      <div className="grid-field pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div className="field-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="space-y-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                {profile.studio}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text/40">
                {profile.location}
              </span>
            </motion.div>

            <h1 className="font-display font-bold lowercase leading-[0.92] tracking-tighter text-text">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <ScrambleText text={profile.handle} />
                <span className="text-accent">.</span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="space-y-4"
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs">
                {profile.role}
              </p>
              <p className="max-w-xl font-serif text-lg italic leading-relaxed text-text/70 sm:text-xl">
                {profile.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-bg [&_span]:text-current brutal-border-alt brutal-shadow-sm-alt transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                View my work <ArrowRightIcon size="sm" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-surface px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-text brutal-border brutal-shadow-sm transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Get in touch <ArrowUpRightIcon size="sm" />
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="lg:col-span-5"
          >
            <TiltCard className="brutal-border brutal-shadow-lg rounded-xl bg-surface p-3">
              <SmartImage
                src={portraitImg}
                alt={`${profile.name} — ${profile.role}`}
                priority
                width={922}
                height={1152}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-bg-alt"
                imgClassName="h-full w-full object-cover object-top"
                fallback={<PortraitFallback />}
              />
              <div className="flex items-center justify-between gap-3 px-1 pt-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {profile.handle}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/50">
                  {profile.region}
                </span>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col bg-bg px-5 py-6 sm:px-6 sm:py-7"
            >
              <dt className="order-2 mt-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-text/45">
                {stat.label}
              </dt>
              <dd className="order-1 block font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll cue */}
      <div className="relative mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-12">
        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-text/40 transition-colors hover:text-accent"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
