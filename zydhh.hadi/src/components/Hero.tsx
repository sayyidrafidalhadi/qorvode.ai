import { motion } from "motion/react";
import { profile } from "@/data/profile";
import ScrambleText from "@/components/motion/ScrambleText";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRightIcon, MailIcon, ExternalIcon } from "@/components/Icons";
import portrait from "@/assets/portrait.jpg";

const TermLine = ({ delay, children }: { delay: number; children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4, ease: [0.2, 0, 0, 1] }}
    className="font-mono text-[11px] leading-relaxed text-text/50 sm:text-xs"
  >
    {children}
  </motion.p>
);

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden border-b-[3px] border-accent bg-bg pt-28 sm:pt-36">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div className="field-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
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
                {profile.status}
              </span>
            </motion.div>

            <h1 className="font-display font-bold uppercase leading-[0.92] tracking-tighter text-text">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <ScrambleText text="Sayyid Rafid" />
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <ScrambleText text="Al Hadi" delay={220} />
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
                {profile.role} · <span className="text-text/60">{profile.brand}</span>
              </p>
              <p className="max-w-xl font-serif text-lg italic leading-relaxed text-text/70 sm:text-xl">
                {profile.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              {profile.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-surface px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-text/70 brutal-border brutal-shadow-sm"
                >
                  {lang}
                </span>
              ))}
              <span className="bg-surface px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-text/70 brutal-border brutal-shadow-sm">
                {profile.location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-bg brutal-border-alt brutal-shadow-sm-alt transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <MailIcon size="sm" /> Start a project
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 bg-surface px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-text brutal-border brutal-shadow-sm transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Selected work <ArrowRightIcon size="sm" />
              </a>
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/50 transition-colors hover:text-accent"
              >
                qorvode.co.in <ExternalIcon size="sm" />
              </a>
            </motion.div>
          </div>

          {/* Portrait + terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="space-y-5 lg:col-span-5"
          >
            <TiltCard className="brutal-border brutal-shadow-lg rounded-xl bg-surface p-3">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={portrait}
                  alt="Portrait of Sayyid Rafid Al Hadi"
                  width={1200}
                  height={1500}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-bg/85 px-4 py-3 backdrop-blur-sm">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    Founder @ QORVODE
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/50">
                    KL · IN
                  </span>
                </div>
              </div>
            </TiltCard>

            <div className="bg-bg-alt px-5 py-4 brutal-border-alt brutal-shadow-alt">
              <p className="font-mono text-[11px] text-accent">
                {profile.terminalPrompt} <span className="text-text/70">{profile.terminalCommand}</span>
                <span className="terminal-caret text-accent" />
              </p>
              <div className="mt-3 space-y-1">
                {profile.terminalOutput.map((line, i) => (
                  <TermLine key={line} delay={0.9 + i * 0.22}>
                    <span className="text-accent/70">›</span> {line}
                  </TermLine>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
