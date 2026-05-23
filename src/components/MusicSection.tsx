import { motion } from "motion/react";
import { Music } from "lucide-react";
import { releases } from "@/data/releases";

const MusicSection = () => {
  return (
    <section id="music" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
        <Music className="w-96 h-96" />
      </div>

      <div className="relative z-10">
        <div className="mb-24 sm:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">Sonic Identity</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.85] tracking-tighter">Audio<br />Authority.</h2>
          </div>
          <p className="max-w-xs text-[11px] sm:text-sm opacity-60 leading-relaxed font-light italic font-serif border-l border-white/10 pl-8">
            Where binary logic meets composition. Exploring themes of spirituality and existence through the human voice.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
          <span style={{ fontFamily: "'Amiri', serif" }} className="text-xl sm:text-2xl text-accent tracking-[0.15em]">اللهُ أَكْبَرُ</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {releases.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="p-8 sm:p-12 border border-white/5 rounded-sm bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-700 group"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-60 font-bold">[{release.year}]</span>
                <Music className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display uppercase mb-2 tracking-tighter group-hover:text-accent transition-colors">{release.title}</h3>
              <p className="text-base font-serif italic mb-10 opacity-60 group-hover:opacity-80">{release.arabic}</p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {release.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] uppercase tracking-[0.2em] font-bold px-4 py-2.5 border border-white/10 rounded-full hover:bg-white hover:text-bg transition-all duration-500"
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
