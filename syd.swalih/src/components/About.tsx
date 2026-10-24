import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { QuoteIcon } from "@/components/Icons";

const About = () => {
  return (
    <section
      id="about"
      className="relative border-t-[3px] border-border-alt bg-bg-alt px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="grid-field pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-7"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  About me
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.92] tracking-tighter text-text sm:text-6xl md:text-7xl">
                {profile.name}
                <span className="text-accent">.</span>
              </h2>
            </div>

            <div className="space-y-5">
              {profile.bio.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-text/70 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="relative border-l-2 border-accent bg-surface px-6 py-6 sm:px-8 sm:py-7">
              <QuoteIcon size="l" />
              <p className="mt-4 font-serif text-xl italic leading-snug text-text/85 sm:text-2xl">
                {profile.quote}
              </p>
            </blockquote>

            <div className="space-y-3 border-t border-border pt-8">
              <h3 className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-text">
                <span className="text-accent" aria-hidden="true">
                  ✦
                </span>
                {profile.subRole}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-text/60 sm:text-base">
                {profile.aboutStatement}
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-surface p-6 brutal-border brutal-shadow sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  Skills
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/35">
                  2026
                </span>
              </div>

              <ul className="mt-7 space-y-6">
                {profile.skills.map((skill, i) => (
                  <li key={skill.label}>
                    <div className="mb-2.5 flex items-baseline justify-between gap-4">
                      <span className="font-display text-sm font-semibold tracking-tight text-text">
                        {skill.label}
                      </span>
                      <span className="font-mono text-[11px] font-bold tabular-nums text-accent">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden bg-bg">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.9, ease: [0.2, 0, 0, 1] }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-[11px] leading-relaxed text-text/40">
                  Tools of the trade — Adobe Photoshop, Illustrator, Premiere Pro, After
                  Effects, AutoCAD, CapCut, Canva.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
