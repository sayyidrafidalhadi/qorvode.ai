import { motion } from "motion/react";
import { site } from "@/data/site";
import { team } from "@/data/team";
import ScrambleText from "@/components/motion/ScrambleText";
import { CodeIcon, PaletteIcon, TerminalIcon, ExternalIcon, MailIcon } from "@/components/Icons";

const tags = [
  { icon: CodeIcon, label: "Vibecoder" },
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
    desc: "Cover art, thumbnails, captions, and digital branding treated as one connected creative system.",
    tags: "Visuals ⇢ Content ⇢ Brand",
  },
];

const operatingNotes = [
  {
    title: "Quality-first mindset",
    desc: "I revise until every detail aligns with the vision — across code and design alike.",
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
                    About QORVODE / The studio
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.95] tracking-tighter text-text">
                  <ScrambleText text="A studio of" />
                  <br />
                  <ScrambleText text="makers & storytellers." className="text-accent italic font-serif normal-case" />
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
                  Hey, I'm <span className="font-semibold text-accent">Sayyid Rafid Al Hadi</span> — founder of QORVODE. I build high-performance web experiences and digital brands that bridge the gap between technical efficiency and creative storytelling.
                </p>

                <p className="text-sm leading-relaxed text-text/60">
                  On the development side, I build modern websites with HTML, CSS, JavaScript, React, and Tailwind CSS — ranging from personal portfolios to institutional and healthcare platforms. I prioritise meaningful content, responsive layouts, accessibility, and visual polish in every project.
                </p>

                <p className="text-sm leading-relaxed text-text/60">
                  Technology is part of who I am. I explore Linux distributions, Termux, Ubuntu, Kali Linux, command-line tools, Git, GitHub, Node.js, and Android customisation. I approach technical challenges patiently, experimenting until I understand the underlying concepts rather than settling for surface-level fixes.
                </p>

                <p className="text-sm leading-relaxed text-text/60">
                  Visually, I gravitate toward premium interfaces — elegant typography, smooth animations, balanced spacing, and modern layouts. I revise until every detail aligns with my vision, reflecting a quality-first mindset that carries across code and design alike.
                </p>

                <p className="text-sm leading-relaxed text-text/60">
                  My learning style is practical. I prefer complete examples, full project files, and step-by-step guidance I can apply immediately. This approach lets me steadily expand my knowledge while building real, working projects. And I rarely settle for a first attempt — I iterate, troubleshoot, and refine until it's right.
                </p>

                <p className="text-sm leading-relaxed text-text/60">
                  Looking ahead, I aim to blend software engineering, UI/UX design, and content creation into a career that sits at the intersection of logic and creativity. Curiosity, persistence, and a willingness to keep learning are the foundations I build on.
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
                    href="/zydhh.hadi/"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-surface brutal-border brutal-shadow-sm text-text text-[10px] font-bold uppercase tracking-[0.15em] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
                  >
                    Personal portfolio ↗
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

            {/* ========== TEAM ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 border-t border-border pt-12 sm:mt-24 sm:pt-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-mono">
                  The team
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col bg-surface brutal-border p-6"
                  >
                    <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-bg-alt brutal-border font-display text-lg font-bold text-accent">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-display font-bold tracking-tight text-text">
                      {member.name}
                    </h3>
                    <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {member.role}
                    </span>
                    {member.bio && (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-text/60">
                        {member.bio}
                      </p>
                    )}
                    {member.links && member.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {member.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-[0.15em] text-text/50 transition-colors hover:text-accent"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
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
              QORVODE sits where software engineering, UI/UX design, and creative content meet.
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
                className="bg-surface-alt brutal-border-alt shadow-[5px_5px_0px_var(--color-border)] p-6 flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
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
    </div>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Contact / Collaborate CTA */}
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
                Reach QORVODE for websites, branding, social creatives, and focused product interfaces.
              </p>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 px-6 py-4 bg-bg-alt brutal-border-alt shadow-[4px_4px_0px_var(--color-border)] text-text-alt font-mono text-[12px] font-semibold uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300 shrink-0"
            >
              <MailIcon size="sm" />
              {site.email}
            </a>
          </motion.div>
        </div>

        {/* Site footer bar */}
        <div className="mt-16 pt-10 border-t-[3px] border-accent-alt/20">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 p-8 sm:p-10 brutal-border-alt bg-surface-alt">
            <div className="flex flex-col gap-4 max-w-sm">
              <span className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tighter text-text-alt">
                {site.brand}<span className="text-accent-alt">.</span>
              </span>
              <p className="text-sm leading-relaxed text-text-alt/60">
                Crafting premium digital experiences that blend technical excellence with creative storytelling.
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-alt/40 pt-2">
                © {new Date().getFullYear()} · Kerala, India
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Navigation</span>
                <div className="flex flex-col gap-3">
                  <a href="#work" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Work</a>
                  <a href="#about" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">About</a>
                  <a href="/articles.html" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Insights</a>
                  <a href="#contact" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Contact</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Connect</span>
                <div className="flex flex-col gap-3">
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">GitHub</a>
                  <a href="https://instagram.com/qorvode.ai" target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Instagram</a>
                  <a href={`mailto:${site.email}`} className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Email</a>
                  <a href="/zydhh.hadi/" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Personal portfolio</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Legal</span>
                <div className="flex flex-col gap-3">
                  <a href="/privacy.html" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Privacy Policy</a>
                  <a href="/terms.html" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[9px] font-mono text-text-alt/30 uppercase tracking-[0.15em] text-center mt-8">
            {site.terminalPrompt}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FounderPage;
