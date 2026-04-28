import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ExternalLink, Github, Instagram, Linkedin, Mail, Menu, Twitter, X, Music, Code, Cpu, BookOpen, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import emailjs from '@emailjs/browser';
import './styles/main.css';

// Import data
import { site } from './data/site.js';
import { projects } from './data/projects.js';
import { releases } from './data/releases.js';
import { arsenal } from './data/arsenal.js';
import { articles } from './data/articles.js';
import PremiumBackground from './components/AnimeEditBackground.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6 flex justify-between items-center transition-all duration-700 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 py-4' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="text-xl font-display uppercase tracking-[0.2em] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {site.brand}<span className="text-accent">.</span>
      </motion.div>

      <div className="flex items-center gap-8">
        <motion.a
          href="/articles.html"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-accent transition-colors hidden sm:block"
        >
          Insights
        </motion.a>

        <div className="flex items-center gap-2">
          <motion.a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -2 }}
            className="text-white/40 p-2 hover:text-accent transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${site.email}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -2 }}
            className="px-5 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-bg transition-all duration-500"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen min-h-[100svh] flex flex-col justify-center px-4 sm:px-12 lg:px-24 pt-20 sm:pt-32 pb-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-12 lg:gap-20 items-end">
          <div className="space-y-8 sm:space-y-12">
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-sm border border-white/5 bg-white/[0.02] backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#C5A059]" />
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold text-white/50">
                {site.hero.badge}
              </span>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.85] tracking-tighter uppercase font-light">
                <span className="block opacity-95">{site.hero.headline.top}</span>
                <span className="block text-accent italic font-serif normal-case mt-1 sm:mt-2">{site.hero.headline.bottom}</span>
              </h1>

              <p className="max-w-2xl text-[13px] sm:text-lg lg:text-xl font-light leading-relaxed text-white/50 font-sans tracking-wide">
                {site.hero.subheadline}
              </p>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-6 sm:gap-8 pt-2 sm:pt-4 w-full">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full xs:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 bg-accent text-bg font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.3em] rounded-sm transition-all shadow-[0_20px_40px_rgba(197,160,89,0.1)] hover:shadow-[0_25px_50px_rgba(197,160,89,0.2)]"
              >
                {site.hero.ctaPrimary}
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group py-2"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 group-hover:text-accent transition-colors">
                  {site.hero.ctaSecondary}
                </span>
                <div className="hidden xs:block w-8 sm:w-10 h-[1px] bg-white/20 group-hover:bg-accent group-hover:w-12 sm:group-hover:w-14 transition-all duration-500" />
              </motion.a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-12 border-l border-white/5 pl-20 pb-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">The Mandate</span>
              <p className="text-sm font-light leading-relaxed text-white/40 italic font-serif">
                "We don't just build websites; we architect digital dominance. Every pixel is a strategic decision. Every interaction is an authority signal."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-3xl font-display text-white/80">01</span>
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Bespoke Architecture</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-display text-white/80">02</span>
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Market Dominance</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Authority Credibility Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 sm:bottom-12 left-6 sm:left-12 lg:left-24 flex items-center gap-8 z-10"
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.5em] text-white/20 font-bold">Strategic Focus</span>
          <div className="flex items-center gap-4 sm:gap-6 opacity-30 grayscale">
            <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase">Performance</span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase">Conversion</span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase">Authority</span>
          </div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 sm:bottom-12 right-6 sm:right-12 lg:right-24 flex flex-col items-center gap-4 sm:gap-6 z-10">
        <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.5em] font-bold text-white/20 vertical-text hidden sm:block">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent"
        />
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Digital Authority", "Premium Design", "Strategic Development", "Conversion Focus", "Bespoke Solutions", "Brand Upgrade"];
  return (
    <div className="py-12 sm:py-28 border-y border-white/5 overflow-hidden bg-white/[0.005]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-20 sm:gap-32 px-10 sm:px-16">
            {items.map((text) => (
              <div key={text} className="flex items-center gap-20 sm:gap-32">
                <span className="text-2xl sm:text-5xl md:text-7xl font-display uppercase opacity-5 hover:opacity-100 hover:text-accent transition-all duration-700 cursor-default tracking-tighter">{text}</span>
                <span className="w-2 h-2 rounded-full bg-accent/20" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.2, 0, 0, 1], delay: index * 0.1 }}
      className="group cursor-pointer relative"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-6 bg-white/[0.02] border border-white/5 transition-all duration-700 group-hover:border-accent/30 group-hover:bg-white/[0.04]">
        <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end">
           <div className="flex gap-2 mb-4 flex-wrap opacity-40 group-hover:opacity-100 transition-opacity duration-700">
             {project.tags.map(tag => (
               <span key={tag} className="text-[8px] uppercase tracking-[0.2em] px-2 py-1 rounded-sm border border-white/10 bg-black/40 backdrop-blur-md">{tag}</span>
             ))}
           </div>
           <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-none mb-3 tracking-tighter group-hover:text-accent transition-colors duration-700">{project.title}</h3>
           <p className="max-w-xl text-[10px] sm:text-sm opacity-40 leading-relaxed font-light group-hover:opacity-80 transition-opacity duration-700">{project.description}</p>
        </div>

        <div className="absolute top-8 right-8">
           <span className="text-xs font-mono opacity-20 font-bold">[{index + 1 < 10 ? `0${index + 1}` : index + 1}]</span>
        </div>

        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700" />

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-12 right-12 w-14 h-14 rounded-full bg-white text-bg flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-700 hover:bg-accent hover:text-white"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 sm:py-48 px-6 sm:px-12 lg:px-24">
      <div className="mb-16 sm:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">The Portfolio</span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter">Selected<br />Manifestations.</h2>
        </div>
        <p className="max-w-xs text-[11px] sm:text-sm opacity-40 leading-relaxed font-light italic font-serif border-l border-white/10 pl-8">
          A curate selection of digital systems built with performance as the primary mandate and aesthetics as the ultimate proof of authority.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 sm:gap-24">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

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
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter">Audio<br />Authority.</h2>
          </div>
          <p className="max-w-xs text-[11px] sm:text-sm opacity-60 leading-relaxed font-light italic font-serif border-l border-white/10 pl-8">
            Where binary logic meets composition. Exploring themes of spirituality and existence through the human voice.
          </p>
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

const Stats = () => {
  const stats = [
    { label: "Selected Works", value: projects.length },
    { label: "Sonic Pieces", value: releases.length },
    { label: "Core Modules", value: site.stack.length },
    { label: "Lab Insights", value: articles.length },
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 border-t border-white/5 pt-16 sm:pt-24">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">{stat.label}</span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-accent tracking-tighter">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const LatestArticles = () => {
  const latestArticles = articles.slice(0, 3);

  return (
    <section id="lab" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">The Lab</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter">Strategic<br />Insights.</h2>
          </div>
          <a
            href="/articles.html"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-accent hover:gap-8 transition-all duration-700 py-4 border-b border-accent/20"
          >
            Archive Access <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {latestArticles.map((article, i) => (
            <motion.a
              key={article.id}
              href={`/articles.html#${article.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col p-8 sm:p-12 bg-bg border border-white/5 rounded-sm hover:border-accent/30 transition-all duration-700 min-h-[350px]"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[9px] uppercase tracking-widest font-bold text-accent/60">[{i + 1}]</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40">{article.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display uppercase leading-tight mb-6 group-hover:text-accent transition-colors tracking-tight">
                {article.title}
              </h3>

              <p className="text-sm opacity-30 leading-relaxed flex-grow line-clamp-3 font-light mb-8">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags?.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm border border-white/5 text-white/20 group-hover:text-white/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent">Access Insight</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stack = () => {
  return (
    <section id="stack" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        <div className="lg:sticky lg:top-32 lg:self-start h-fit">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">The Arsenal</span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter mb-10">Technical<br />Stack.</h2>
          <p className="max-w-md text-base sm:text-lg opacity-40 leading-relaxed font-light italic font-serif border-l border-white/10 pl-8">
            The technical mandate for building high-ticket digital systems, from deep-level architectural modules to fluid authority interfaces.
          </p>
        </div>

        <div className="flex flex-col">
          {arsenal.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.2, 0, 0, 1] }}
              className="py-12 sm:py-16 border-b border-white/5 group flex gap-8 sm:gap-12 items-start hover:bg-white/[0.01] transition-colors"
            >
              <div className="mt-2 p-4 rounded-sm bg-white/5 border border-white/10 group-hover:border-accent/50 transition-all duration-700 flex-shrink-0">
                {i % 4 === 0 ? <Code className="w-5 h-5 text-accent" /> :
                 i % 4 === 1 ? <Cpu className="w-5 h-5 text-accent" /> :
                 i % 4 === 2 ? <BookOpen className="w-5 h-5 text-accent" /> :
                 <ExternalLink className="w-5 h-5 text-accent" />}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-display uppercase group-hover:text-accent transition-colors tracking-tighter">{item.title}</h3>
                <p className="text-sm sm:text-base opacity-30 leading-relaxed group-hover:opacity-60 transition-opacity font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [state, setState] = useState('idle');
  const formRef = useRef(null);
  const createdAtRef = useRef(Date.now());

  const label = useMemo(() => {
    if (state === 'sending') return 'Transmitting...';
    if (state === 'success') return 'Transmitted ✓';
    if (state === 'error') return 'Error. Retry?';
    return 'Execute Transmission';
  }, [state]);

  async function submitForm(e) {
    e.preventDefault();
    if (!formRef.current || state === 'sending') return;
    const data = new FormData(formRef.current);
    if (String(data.get('website') || '').trim()) return; 
    if (Date.now() - createdAtRef.current < 2000) return; 

    try {
      setState('sending');
      await emailjs.sendForm(
        'service_8gjk955',
        'template_6m3iq3j',
        formRef.current,
        '2PZEMjOl54g2tl_3A',
      );
      formRef.current.reset();
      setState('success');
    } catch (err) {
      console.error(err);
      setState('error');
    } finally {
      setTimeout(() => setState('idle'), 4000);
    }
  }

  return (
    <footer id="contact" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-32 sm:mb-48">
        <div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter mb-16">
            Initiate<br />Authority<br /><span className="text-accent italic font-serif normal-case">Upgrade.</span>
          </h2>
          <motion.a
            href={`mailto:${site.email}`}
            whileHover={{ x: 15 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light border-b border-white/10 pb-6 flex items-center justify-between group hover:border-accent transition-all duration-700"
          >
            <span className="opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all">{site.email}</span>
            <ArrowRight className="w-8 h-8 text-accent group-hover:translate-x-4 transition-transform" />
          </motion.a>
        </div>

        <div>
          <form className="flex flex-col gap-10 p-8 sm:p-16 bg-white/[0.02] border border-white/5 rounded-sm" onSubmit={submitForm} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold ml-2">Identify</label>
                <input required name="from_name" className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors text-base font-light placeholder:text-white/10" placeholder="Full Name" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold ml-2">Transmit Via</label>
                <input required name="from_email" type="email" className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors text-base font-light placeholder:text-white/10" placeholder="Email Address" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold ml-2">The Brief</label>
              <textarea required name="message" rows="4" className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors resize-none text-base font-light placeholder:text-white/10" placeholder="Project details and outcomes..." />
            </div>
            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

            <button
              type="submit"
              disabled={state === 'sending'}
              className="mt-6 bg-accent text-bg font-bold uppercase py-6 rounded-sm hover:tracking-[0.3em] active:scale-[0.98] transition-all disabled:opacity-50 text-[11px] tracking-[0.2em]"
            >
              {label}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 pt-12 border-t border-white/5">
         <div className="flex flex-col gap-4">
            <span className="text-2xl font-display uppercase tracking-tighter">{site.brand}<span className="text-accent">.</span></span>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
              © {new Date().getFullYear()} Digital Authority Mandate
            </p>
         </div>

         <div className="flex flex-wrap items-center gap-8 sm:gap-12">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 hover:text-accent transition-colors">GitHub</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 hover:text-accent transition-colors">LinkedIn</a>
            <a href="#work" className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 hover:text-accent transition-colors">Manifestations</a>
            <a href="/articles.html" className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 hover:text-accent transition-colors">Insights</a>
         </div>

         <p className="text-[9px] opacity-10 font-mono uppercase tracking-[0.2em]">{site.terminalPrompt} status --premium</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-bg text-white font-sans selection:bg-accent selection:text-bg">
      <PremiumBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <MusicSection />
        <LatestArticles />
        <Stack />
        <Stats />
      </main>
      <Contact />
    </div>
  );
}
