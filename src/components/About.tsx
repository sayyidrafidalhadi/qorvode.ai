import { motion } from "motion/react";
import { CodeIcon, PaletteIcon, HeadphonesIcon } from "@/components/Icons";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg border-y-[3px] border-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent block">About Me</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.95] tracking-tighter text-text">
              Sayyid Rafid<br />
              <span className="text-accent italic font-serif normal-case">Al Hadi.</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-accent font-bold text-[9px] uppercase tracking-[0.15em] brutal-border brutal-shadow-sm">
                <CodeIcon size="sm" /> Vibecoder
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-accent font-bold text-[9px] uppercase tracking-[0.15em] brutal-border brutal-shadow-sm">
                <HeadphonesIcon size="sm" /> Music Artist
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-accent font-bold text-[9px] uppercase tracking-[0.15em] brutal-border brutal-shadow-sm">
                <PaletteIcon size="sm" /> Founder
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-text/70 font-serif italic">
              I build high-performance web experiences and digital brands that bridge the gap between technical efficiency and creative storytelling.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              Based in Kerala, India, I specialize in developing modern, static-first web applications using Astro, Tailwind CSS, and Node.js. My workflow is mobile-first, leveraging advanced terminal environments to build seamless solutions on the go.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              Beyond the code, I am a digital content creator and music artist, bringing a unique, artistic perspective to every project I undertake. Whether it's architecting community platforms like Science Orbit or driving growth for my own ventures like Qorvode, I am driven by the intersection of innovation and art.
            </p>

            <p className="text-sm font-medium text-text/70">
              Let's collaborate on something meaningful.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://instagram.com/zydhh.hadi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-surface brutal-border brutal-shadow-sm text-text text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
              >
                @zydhh.hadi
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
