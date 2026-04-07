import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './styles/main.css';
import { site } from './data/site.js';
import { projects } from './data/projects.js';
import { releases } from './data/releases.js';
import { arsenal } from './data/arsenal.js';
import { faq } from './data/faq.js';
import { articles } from './data/articles.js';

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#releases', label: 'Music' },
  { href: '/articles.html', label: 'Articles' },
  { href: '#arsenal', label: 'Arsenal' },
  { href: '#contact', label: "Let's Talk", cta: true },
];

const principles = [
  {
    title: 'Build for clarity',
    detail: 'Every project balances visual depth with clean user flow, so people understand the value in seconds.',
  },
  {
    title: 'Ship with intent',
    detail: 'Production quality, accessibility, and performance are treated as launch requirements, not polish tasks.',
  },
  {
    title: 'Design with rhythm',
    detail: 'Music and engineering influence pacing, hierarchy, and motion systems across the whole interface.',
  },
];

function makeFade(reduced) {
  if (reduced) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onEsc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onEsc);
    };
  }, []);
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="logo">{site.brand}</a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => <a className={item.cta ? 'nav-cta' : ''} key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={`mm-link ${item.cta ? 'nav-cta' : ''}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = makeFade(reduceMotion);
  const heroStagger = reduceMotion
    ? {}
    : {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.14,
          delayChildren: 0.08,
        },
      },
    };
  const [typedLines, setTypedLines] = useState([]);
  useEffect(() => {
    let mounted = true;
    let timeoutId = 0;
    let currentLine = 0;
    const runLine = () => {
      if (!mounted || currentLine >= site.terminalLines.length) return;
      const target = site.terminalLines[currentLine];
      let idx = 0;
      const typeChar = () => {
        if (!mounted) return;
        idx += 1;
        setTypedLines((prev) => {
          const next = [...prev];
          next[currentLine] = target.slice(0, idx);
          return next;
        });
        if (idx < target.length) timeoutId = window.setTimeout(typeChar, reduceMotion ? 1 : 20);
        else {
          currentLine += 1;
          timeoutId = window.setTimeout(runLine, reduceMotion ? 1 : 300);
        }
      };
      typeChar();
    };
    timeoutId = window.setTimeout(runLine, reduceMotion ? 1 : 600);
    return () => {
      mounted = false;
      window.clearTimeout(timeoutId);
    };
  }, [reduceMotion]);

  return (
    <section className="hero section-shell" id="hero">
      <div className="container">
        <motion.div
          className="hero-aurora"
          aria-hidden="true"
          animate={reduceMotion ? {} : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
          transition={reduceMotion ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={heroStagger}>
          <motion.div variants={fade} className="hero-badge">
            <span className="badge-dot" /> Available for work · {site.availableYear}
          </motion.div>
          <div className="hero-layout">
            <motion.div variants={fade}>
            <h1 className="hero-title">
              <motion.span variants={fade}>Crafting</motion.span>
              <motion.em variants={fade}>fluid digital</motion.em>
              <motion.span variants={fade}>experiences</motion.span>
            </h1>
            <motion.p variants={fade} className="hero-desc">{site.description}</motion.p>
            <div className="hero-actions">
              <motion.a
                variants={fade}
                whileHover={reduceMotion ? {} : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? {} : { scale: 0.98 }}
                href="#projects"
                className="btn-primary"
              >
                View Work
              </motion.a>
              <motion.a
                variants={fade}
                whileHover={reduceMotion ? {} : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? {} : { scale: 0.98 }}
                href="#releases"
                className="btn-ghost"
              >
                Listen
              </motion.a>
              <motion.a
                variants={fade}
                whileHover={reduceMotion ? {} : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? {} : { scale: 0.98 }}
                href="/articles.html"
                className="btn-ghost"
              >
                Read Lab
              </motion.a>
            </div>
            </motion.div>
            <motion.aside
              variants={fade}
              className="terminal"
              animate={reduceMotion ? {} : { y: [0, -5, 0] }}
              transition={reduceMotion ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="terminal-bar"><span>deploy_stack.sh</span></div>
              <div className="terminal-body">
                <p><span className="prompt">{site.terminalPrompt}</span> ./deploy</p>
                {typedLines.map((line, idx) => (
                  <p key={`${idx}-${line}`} className={idx === site.terminalLines.length - 1 ? 't-success' : ''}>{line}</p>
                ))}
              </div>
            </motion.aside>
          </div>
        </motion.div>
        <motion.div
          className="hero-scroll-cue"
          initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={reduceMotion ? {} : { opacity: [0.45, 1, 0.45], y: [0, 8, 0] }}
          transition={reduceMotion ? {} : { duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>Scroll</span>
          <span className="hero-scroll-line" />
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [state, setState] = useState('idle');
  const formRef = useRef(null);
  const createdAtRef = useRef(Date.now());
  const reduceMotion = useReducedMotion();
  const fade = makeFade(reduceMotion);

  const label = useMemo(() => {
    if (state === 'sending') return 'Transmitting...';
    if (state === 'success') return 'Transmitted';
    if (state === 'error') return 'Retry';
    return 'Send Transmission';
  }, [state]);

  async function submitForm(e) {
    e.preventDefault();
    if (!formRef.current || state === 'sending') return;
    const data = new FormData(formRef.current);
    if (String(data.get('website') || '').trim()) return;
    if (Date.now() - createdAtRef.current < 2500) {
      setState('error');
      return;
    }
    try {
      setState('sending');
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_8gjk955',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_6m3iq3j',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2PZEMjOl54g2tl_3A',
      );
      formRef.current.reset();
      setState('success');
    } catch {
      setState('error');
    } finally {
      window.setTimeout(() => setState('idle'), 3000);
    }
  }

  return (
    <section className="section-shell" id="contact">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="contact-wrap">
          <div className="contact-left">
            <span className="section-num">06</span>
            <h2>Ready to build something great?</h2>
            <p>Send your requirements for development or audio collaboration. Every transmission is read personally.</p>
            <a href={site.github} className="gh-link" target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
          <form className="contact-right" onSubmit={submitForm} ref={formRef}>
            <label htmlFor="name">Name</label>
            <input id="name" name="from_name" required placeholder="Your name or callsign" />
            <label htmlFor="email">Email</label>
            <input id="email" name="from_email" type="email" required placeholder="you@example.com" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Project details..." />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
            <button type="submit" className="btn-primary btn-submit" disabled={state === 'sending'}>{label}</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#hero" className="f-logo">{site.brand}</a>
        <div className="f-links">
          <a href="/articles.html">Articles</a>
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">GitHub</a>
        </div>
      </div>
      <p className="f-copy">© {new Date().getFullYear()} {site.name} · All rights reserved</p>
    </footer>
  );
}

function SectionTitle({ index, title }) {
  return (
    <div className="section-head">
      <span className="section-num">{index}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function StackMarquee() {
  const reduceMotion = useReducedMotion();
  const all = [...site.stack, ...site.stack];
  return (
    <section className="stack-marquee-wrap">
      <div className="stack-marquee container">
        <motion.div
          className="stack-track"
          animate={reduceMotion ? {} : { x: ['0%', '-50%'] }}
          transition={reduceMotion ? {} : { duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {all.map((item, idx) => (
            <span className="stack-pill" key={`${item.title}-${idx}`}>{item.title}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const reduceMotion = useReducedMotion();
  const fade = makeFade(reduceMotion);
  return (
    <section className="section-shell">
      <div className="container">
        <SectionTitle index="00" title="What This Portfolio Represents" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="story-grid">
          {principles.map((item) => (
            <motion.article key={item.title} variants={fade} whileHover={reduceMotion ? {} : { y: -6 }} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const reduceMotion = useReducedMotion();
  const fade = makeFade(reduceMotion);
  const stats = [
    { label: 'Projects', value: projects.length, hint: 'live and active builds' },
    { label: 'Releases', value: releases.length, hint: 'published audio pieces' },
    { label: 'Core Capabilities', value: arsenal.length, hint: 'across product and sound' },
    { label: 'FAQ Topics', value: faq.length, hint: 'common collaboration questions' },
  ];

  return (
    <section className="section-shell section-muted">
      <div className="container">
        <SectionTitle index="00" title="Quick Snapshot" />
        <div className="stats-grid">
          {stats.map((item) => (
            <motion.article
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              whileHover={reduceMotion ? {} : { scale: 1.02 }}
              className="card stat-card"
            >
              <p className="stat-value">{item.value}</p>
              <h3>{item.label}</h3>
              <p>{item.hint}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundFX() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const layerY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -220]);
  const layerRotate = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -6]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -120]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.14, 0.2, 0.1]);
  const orbAOffset = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -170]);
  const orbBOffset = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -110]);
  const orbCOffset = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -220]);

  return (
    <motion.div className="bg-fx" aria-hidden="true" style={{ y: layerY, rotate: layerRotate }}>
      <motion.div
        className="bg-orb orb-a"
        style={{ y: orbAOffset }}
        animate={reduceMotion ? {} : { x: [0, 35, -20, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={reduceMotion ? {} : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-orb orb-b"
        style={{ y: orbBOffset }}
        animate={reduceMotion ? {} : { x: [0, -30, 20, 0], scale: [1, 0.96, 1.06, 1] }}
        transition={reduceMotion ? {} : { duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-orb orb-c"
        style={{ y: orbCOffset }}
        animate={reduceMotion ? {} : { x: [0, 22, -18, 0] }}
        transition={reduceMotion ? {} : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="bg-grid" style={{ y: gridY, opacity: gridOpacity }} />
    </motion.div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const fade = makeFade(reduceMotion);
  const stagger = reduceMotion ? {} : { visible: { transition: { staggerChildren: 0.12 } } };
  return (
    <div className="app-shell">
      <BackgroundFX />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StackMarquee />
        <StorySection />
        <StatsSection />
        <section id="projects" className="section-shell">
          <div className="container">
            <SectionTitle index="01" title="Selected Projects" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="projects-grid">
              {projects.map((project) => (
                <motion.article variants={fade} whileHover={reduceMotion ? {} : { y: -6 }} key={project.id} className={`card ${project.wide ? 'wide' : ''}`}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="card-meta">Status: {project.status}</p>
                  <div className="chip-row">{project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}</div>
                  <a href={project.url} target="_blank" rel="noreferrer">Open project</a>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="articles" className="section-shell section-muted">
          <div className="container">
            <SectionTitle index="02" title="The Lab" />
            <div className="articles-grid">
              {articles.slice(0, 3).map((article) => (
                <motion.article 
                  key={article.id} 
                  variants={fade} 
                  whileHover={reduceMotion ? {} : { y: -4 }} 
                  className="card" 
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div className="article-preview-compact">
                    <span className="card-meta">{article.date}</span>
                    <h3 style={{ fontSize: '1.25rem', margin: '0.4rem 0' }}>{article.title}</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{article.excerpt}</p>
                  </div>
                  <a href={`/articles.html#${article.id}`} className="chip" style={{ width: 'fit-content', marginTop: '1rem', border: '1px solid var(--accent)' }}>Read More</a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section id="releases" className="section-shell">
          <div className="container">
            <SectionTitle index="03" title="Audio Releases" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="releases-grid">
              {releases.map((release) => (
                <motion.article variants={fade} whileHover={reduceMotion ? {} : { y: -6 }} key={release.id} className="card">
                  <h3>{release.title}</h3>
                  <p>{release.arabic} · {release.year}</p>
                  <p>{release.credit}</p>
                  <p className="card-meta">Label: {release.label}</p>
                  <div className="chip-row">
                    {release.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="chip">{link.label}</a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="arsenal" className="section-shell">
          <div className="container">
            <SectionTitle index="04" title="The Arsenal" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="arsenal-grid">
              {arsenal.map((item) => (
                <motion.article variants={fade} whileHover={reduceMotion ? {} : { y: -6 }} key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="faq" className="section-shell">
          <div className="container">
            <SectionTitle index="05" title="Questions" />
            <div className="faq-list">
              {faq.map((item, idx) => (
                <details key={item.question} className="faq-item" open={idx === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
