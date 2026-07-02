import { motion } from "motion/react";
import { HeadphonesIcon } from "@/components/Icons";
import { releases } from "@/data/releases";

const MusicSection = () => {
  return (
    <section id="music" className="py-32 sm:py-48 px-5 sm:px-8 lg:px-12 bg-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 brutal-border rotate-12 opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Sonic Identity</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.85] tracking-tighter text-text">Audio<br />Authority.</h2>
            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text/60 font-serif italic border-l-[3px] border-accent pl-6 mt-6">
              Where binary logic meets composition. Exploring themes of spirituality and existence through the human voice.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <div className="h-[3px] flex-1 bg-accent/20" />
          <span style={{ fontFamily: "'Amiri', serif" }} className="text-xl sm:text-2xl lg:text-3xl text-accent tracking-[0.15em]">اللهُ أَكْبَرُ</span>
          <div className="h-[3px] flex-1 bg-accent/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {releases.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="p-6 sm:p-8 brutal-border bg-surface hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono font-bold text-text/40">[{release.year}]</span>
                <HeadphonesIcon size="m" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-text mb-2 group-hover:text-accent transition-colors">{release.title}</h3>
              <p className="text-base font-serif italic mb-8 text-text/60" style={{ fontFamily: "'Amiri', serif" }}>{release.arabic}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {release.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-2 brutal-border text-text/60 hover:bg-accent hover:text-text-alt hover:border-accent transition-all duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
