import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { accent } from "@/lib/accents";

const Music = () => {
  return (
    <section
      id="music"
      className="relative overflow-hidden border-y-[3px] border-accent bg-bg px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, rgba(224,75,60,0.09), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Sonic identity &amp; creative works
            </span>
          </div>
          <h2 className="font-serif text-3xl italic leading-[1.05] tracking-tight text-accent-alt sm:text-4xl md:text-5xl">
            Music is a second language.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-text/60 sm:text-base">
            {profile.music.intro}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {profile.music.releases.map((release, i) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group flex items-center gap-5 bg-surface p-6 brutal-border-alt brutal-shadow-sm-alt transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              {/* Vinyl */}
              <div className="relative size-16 shrink-0 rounded-full border border-border-alt sm:size-20">
                <div className="vinyl-disc absolute inset-0 rounded-full" />
                <span className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-alt bg-bg sm:size-6" />
                <span
                  className={`absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${accent.text[release.accent]}`}
                />
              </div>

              <div className="min-w-0">
                <span
                  className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${accent.text[release.accent]}`}
                >
                  {release.year}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug tracking-tight text-text sm:text-xl">
                  {release.title}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text/40">
                  Spotify · Apple Music · JioSaavn
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/35">
          Independent releases — composition, vocals, and audio branding.
        </p>
      </div>
    </section>
  );
};

export default Music;
