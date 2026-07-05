import { motion } from "motion/react";
import { CodeIcon, PaletteIcon, HeadphonesIcon, TerminalIcon, ExternalIcon } from "@/components/Icons";

const tags = [
  { icon: CodeIcon, label: "Vibecoder" },
  { icon: HeadphonesIcon, label: "Music Artist" },
  { icon: PaletteIcon, label: "Founder" },
  { icon: TerminalIcon, label: "Linux Enthusiast" },
  { icon: TerminalIcon, label: "Cyber Security Student" },
  { icon: ExternalIcon, label: "UI/UX Designer" },
];

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
              {tags.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-accent font-bold text-[9px] uppercase tracking-[0.15em] brutal-border brutal-shadow-sm"
                >
                  <Icon size="sm" /> {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-5 sm:space-y-6"
          >
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-text/70 font-serif italic">
              I build high-performance web experiences and digital brands that bridge the gap between technical efficiency and creative storytelling.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              Music is one of my strongest creative outlets. I pour the same care into cover art, thumbnails, captions, and visual branding as I do into recording. My taste leans toward cinematic aesthetics, minimal compositions, and designs that feel authentic rather than artificial. Every release is a complete visual and auditory statement.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              On the development side, I build modern websites with HTML, CSS, JavaScript, React, and Tailwind CSS — ranging from personal portfolios to institutional and healthcare platforms. I prioritise meaningful content, responsive layouts, accessibility, and visual polish in every project.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              Technology is part of who I am. I explore Linux distributions, Termux, Ubuntu, Kali Linux, command-line tools, Git, GitHub, Node.js, and Android customisation. I approach technical challenges patiently, experimenting until I understand the underlying concepts rather than settling for surface-level fixes.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              Visually, I gravitate toward premium interfaces — elegant typography, smooth animations, balanced spacing, and modern layouts. I revise until every detail aligns with my vision, reflecting a quality-first mindset that carries across code, design, and music alike.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              My learning style is practical. I prefer complete examples, full project files, and step-by-step guidance I can apply immediately. This approach lets me steadily expand my knowledge while building real, working projects. And I rarely settle for a first attempt — I iterate, troubleshoot, and refine until it's right.
            </p>

            <p className="text-sm leading-relaxed text-text/60">
              Looking ahead, I aim to blend software engineering, UI/UX design, content creation, and music into a career that sits at the intersection of logic and creativity. Curiosity, persistence, and a willingness to keep learning are the foundations I build on.
            </p>

            <p className="text-sm font-medium text-text/70">
              Let's collaborate on something meaningful.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://instagram.com/zydhh.hadi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-surface brutal-border brutal-shadow-sm text-text text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
              >
                @zydhh.hadi
              </a>
              <a
                href="https://github.com/sayyidrafidalhadi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-surface brutal-border brutal-shadow-sm text-text text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:qorvode.ai@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-surface brutal-border brutal-shadow-sm text-text text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
