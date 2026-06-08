import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">About Me</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-[0.95] tracking-tighter">
              Sayyid Rafid<br />
              <span className="text-accent italic font-serif normal-case">Al Hadi.</span>
            </h2>
            <p className="text-[13px] sm:text-sm uppercase tracking-[0.15em] text-white/60">Vibecoder | Music Artist | Founder of Qorvode</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-[15px] sm:text-lg lg:text-xl font-light leading-relaxed text-white/50">
              I build high-performance web experiences and digital brands that bridge the gap between technical efficiency and creative storytelling.
            </p>

            <p className="text-[14px] sm:text-base leading-relaxed text-white/55">
              Based in Kerala, India, I specialize in developing modern, static-first web applications using Astro, Tailwind CSS, and Node.js. My workflow is mobile-first, leveraging advanced terminal environments to build seamless solutions on the go.
            </p>

            <p className="text-[14px] sm:text-base leading-relaxed text-white/55">
              Beyond the code, I am a digital content creator and music artist, bringing a unique, artistic perspective to every project I undertake. Whether it's architecting community platforms like Science Orbit or driving growth for my own ventures like Qorvode, I am driven by the intersection of innovation and art.
            </p>

            <p className="text-[14px] sm:text-base font-medium text-white/50">
              Let's collaborate on something meaningful.
            </p>
            <div className="pt-4">
              <a
                href="https://instagram.com/zydhh.hadi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[12px] text-white/60 hover:text-accent transition-colors"
              >
                <Instagram size={14} />
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
