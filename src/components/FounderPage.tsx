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

const capabilities = [
  {
    title: "Web development",
    desc: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, PHP, Python, and practical product builds.",
    tags: "Frontend ⇢ Platforms ⇢ Performance",
  },
  {
    title: "UI/UX design",
    desc: "Premium interfaces with elegant typography, balanced spacing, smooth motion, and careful revision.",
    tags: "Layouts ⇢ Systems ⇢ Polish",
  },
  {
    title: "Linux and security",
    desc: "Ubuntu, Kali Linux, Termux, command-line tools, Git, GitHub, Node.js, and cyber security learning.",
    tags: "Linux ⇢ CLI ⇢ Cybersecurity",
  },
  {
    title: "Creative storytelling",
    desc: "Music, cover art, thumbnails, captions, and digital branding treated as one connected creative system.",
    tags: "Music ⇢ Visuals ⇢ Brand",
  },
];

const operatingNotes = [
  {
    title: "Quality-first mindset",
    desc: "I revise until every detail aligns with the vision — across code, design, and music alike.",
  },
  {
    title: "Practical learning style",
    desc: "Complete examples, full project files, and step-by-step guidance turn learning into working projects.",
  },
  {
    title: "Curious by default",
    desc: "I experiment patiently until I understand the underlying concept instead of settling for surface-level fixes.",
  },
];

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      {/* ========== INTRO + ABOUT (MERGED) — FULL-BLEED ========== */}
      <section id="about" className="relative min-h-screen sm:min-h-[80vh] bg-bg border-y-[3px] border-accent overflow-hidden">
        {/* Full-bleed cutout background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet="/landscapesayyid.png" />
            <img
              src="/portraitsayyid.jpg"
              alt=""
              className="h-full w-full object-cover object-left scale-[1.8] saturate-[0.15]"
            />
          </picture>
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-bg mix-blend-multiply" />
        </motion.div>

        {/* Gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/30 via-bg/85 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/10" />

        {/* Content */}
        <div className="relative z-10 w-full h-full min-h-screen sm:min-h-[80vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-mono">
                    QORVODE.AI / Founder profile
                  </span>
                </div>

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

                <div className="flex flex-wrap gap-2 pt-2">
                  {["HTML", "CSS", "JS", "React"].map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-bg text-text font-mono text-[11px] font-semibold uppercase tracking-wider brutal-border brutal-shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right column — bio */}
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
        </div>
      </section>

      {/* ========== CAPABILITIES ========== */}
      <section
        id="capabilities"
        className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg-alt border-y-[3px] border-border-alt"
      >
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt font-mono block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight text-text-alt">
              QORVODE sits where software engineering, UI/UX design, content creation, and music meet.
            </h2>
          </motion.div>

          {/* Capability grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface-alt brutal-border-alt shadow-[5px_5px_0px_#111] p-6 flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
              >
                {/* Icon shell */}
                <div className="w-10 h-10 bg-bg brutal-border flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16.5 7.5L21 3.75L16.5 0H4.5L0 3.75L4.5 7.5z" transform="translate(1.5 8.25)" />
                    <path d="M4.5 0L0 3.75L4.5 7.5" transform="translate(1.5 8.25)" />
                    <path d="M0 0L4.5 3.75L0 7.5" transform="translate(18 8.25)" />
                    <path d="M6 0L0 16.5" transform="translate(9 3.75)" />
                  </svg>
                </div>

                <h3 className="text-lg font-display font-bold text-text-alt mb-2">{c.title}</h3>

                <p className="text-sm leading-relaxed text-text-alt/70 flex-1">{c.desc}</p>

                <span className="text-[11px] font-mono font-semibold text-accent-alt uppercase tracking-wider mt-4 pt-4 border-t border-border-alt block">
                  {c.tags}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Operating notes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {operatingNotes.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="brutal-border-alt p-6"
              >
                <h3 className="text-base font-display font-bold text-text-alt mb-2">{n.title}</h3>
                <p className="text-sm leading-relaxed text-text-alt/60">{n.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT / FOOTER ========== */}
      <footer className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface brutal-border brutal-shadow-lg p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            >
              <div className="space-y-4 max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-mono block">
                  Contact / Collaborate
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight text-text">
                  Let's collaborate on something meaningful.
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-text/60">
                  Reach QORVODE for websites, branding, social creatives, music visuals, or focused product interfaces.
                </p>
              </div>

              <a
                href="mailto:qorvode.ai@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-4 bg-bg-alt brutal-border-alt shadow-[4px_4px_0px_#111] text-text-alt font-mono text-[12px] font-semibold uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300 shrink-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-accent-alt"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h9.75v9.75H0z" transform="translate(8.25 6)" />
                  <path d="M0 7.125L7.125 0" transform="translate(6 10.875)" />
                  <path d="M0 0h9.75v9.75H0z" transform="translate(8.25 6)" />
                </svg>
                qorvode.ai@gmail.com
              </a>
            </motion.div>

            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border">
              <a
                href="https://instagram.com/zydhh.hadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text/60 hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://github.com/sayyidrafidalhadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text/60 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://qorvode.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text/60 hover:text-accent transition-colors"
              >
                qorvode.co.in
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 mt-8 text-xs text-text/50">
            <p>© 2026 QORVODE / Sayyid Rafid Al Hadi</p>
            <p>Kerala, India • English / Arabic / Malayalam • +919526755210</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FounderPage;
