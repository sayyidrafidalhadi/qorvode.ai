import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ExternalLink, Github, Instagram, Linkedin, Mail, Menu, Twitter, X, Music, Code, Cpu, BookOpen } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import emailjs from '@emailjs/browser';
import './styles/main.css';

// Import data
import { site } from './data/site.js';
import { projects } from './data/projects.js';
import { releases } from './data/releases.js';
import { arsenal } from './data/arsenal.js';
import { articles } from './data/articles.js';
import AmoledBackground from './components/AnimeEditBackground.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-3 sm:py-4' : 'mix-blend-difference'}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg sm:text-xl font-display uppercase tracking-tighter cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {site.brand}.
      </motion.div>

      <div className="flex items-center gap-3 sm:gap-4">
        <motion.a
          href="/articles.html"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-white/60 hover:text-accent transition-colors"
        >
          Articles
        </motion.a>

        <span className="text-white/20 hidden sm:inline">|</span>

        <motion.a
          href="https://instagram.com/qorvode.ai"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-white/60 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:text-accent transition-colors"
        >
          <Instagram size={20} />
        </motion.a>

        <motion.a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-white/60 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:text-accent transition-colors"
        >
          <Github size={20} />
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen min-h-[100svh] flex flex-col justify-center px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="flex flex-col">
          <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold mb-4 sm:mb-6 text-accent">
            Available for Work · {site.availableYear}
          </span>
          <h1 className="font-display text-[14vw] sm:text-[12vw] md:text-[14vw] leading-[0.82] uppercase tracking-tighter mb-6 sm:mb-8">
            Digital<br />
            <span className="text-white/20 stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>Resonance</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-12">
          <p className="max-w-xl text-base sm:text-lg md:text-2xl font-light leading-relaxed opacity-70">
            {site.description}
          </p>

          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 sm:gap-6 group cursor-pointer w-fit"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-45 transition-transform" />
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold">Explore My World</span>
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 flex gap-6 sm:gap-8 items-center opacity-40">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-10 sm:h-12 bg-white/20 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Full-stack", "Vocalist", "Innovation", "Design", "Resonance", "Engineering"];
  return (
    <div className="py-8 sm:py-12 border-y border-white/10 overflow-hidden bg-white/[0.02]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-12 sm:gap-16 px-6 sm:px-8">
            {items.map((text) => (
              <div key={text} className="flex items-center gap-12 sm:gap-16">
                <span className="text-2xl sm:text-4xl md:text-6xl font-display uppercase opacity-10 hover:opacity-100 transition-opacity cursor-default">{text}</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
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
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer relative"
    >
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl mb-6 sm:mb-8 bg-white/5 border border-white/10 glass">
        <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end transition-transform duration-700 group-hover:translate-y-[-10px]">
           <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
             {project.tags.map(tag => (
               <span key={tag} className="text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-white/10 border border-white/10">{tag}</span>
             ))}
           </div>
           <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-none mb-1 sm:mb-2">{project.title}</h3>
           <p className="max-w-md text-[10px] sm:text-sm opacity-50 line-clamp-2">{project.description}</p>
        </div>

        <div className="absolute top-3 sm:top-6 right-3 sm:right-6">
           <span className="text-[8px] sm:text-[10px] font-mono opacity-30">0{index + 1}</span>
        </div>

        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-bg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500"
        >
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="mb-16 sm:mb-20 md:mb-24">
        <div className="max-w-2xl mb-6 sm:mb-8">
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-accent mb-3 sm:mb-4 block">Selected Projects</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display uppercase leading-none">Crafting Digital<br />Excellence.</h2>
        </div>
        <p className="max-w-xs text-[11px] sm:text-sm opacity-50 leading-relaxed font-light">
          A careful selection of digital products built with performance and aesthetics at the core.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const MusicSection = () => {
  return (
    <section id="music" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white text-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-16 sm:p-24 md:p-32 opacity-5 pointer-events-none">
        <Music className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96" />
      </div>

      <div className="relative z-10">
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-accent mb-3 sm:mb-4 block">Sonic Identity</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display uppercase leading-none">Audio<br />Releases.</h2>
          </div>
          <p className="max-w-xs text-[11px] sm:text-sm opacity-60 leading-relaxed">
            Where code meets composition. Exploring themes of spirituality and existence through vocals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {releases.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 border border-bg/10 rounded-2xl sm:rounded-3xl hover:bg-bg hover:text-white transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8 sm:mb-12">
                <span className="text-[8px] sm:text-[10px] font-mono opacity-40 group-hover:opacity-60">{release.year}</span>
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase mb-1 sm:mb-2">{release.title}</h3>
              <p className="text-sm sm:text-base font-serif italic mb-6 sm:mb-8 opacity-60 group-hover:opacity-80">{release.arabic}</p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                {release.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold px-2 sm:px-3 py-1.5 sm:py-2 border border-bg/10 rounded-full group-hover:border-white/20 hover:bg-white hover:text-bg transition-colors min-h-[32px] sm:min-h-[36px] flex items-center justify-center"
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
    { label: "Live Projects", value: projects.length },
    { label: "Audio Pieces", value: releases.length },
    { label: "Stack Modules", value: site.stack.length },
    { label: "Lab Articles", value: articles.length },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 border-t border-white/10 pt-12 sm:pt-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold opacity-30 mb-4 sm:mb-6">{stat.label}</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display text-accent">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const LatestArticles = () => {
  const latestArticles = articles.slice(0, 3);

  return (
    <section id="lab" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-accent mb-3 sm:mb-4 block">The Lab</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase leading-none">Latest<br />Insights.</h2>
          </div>
          <a
            href="/articles.html"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-accent hover:gap-4 transition-all min-h-[44px]"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {latestArticles.map((article, i) => (
            <motion.a
              key={article.id}
              href={`/articles.html#${article.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col p-6 sm:p-8 bg-bg border border-white/10 rounded-2xl sm:rounded-3xl hover:border-accent/30 transition-all duration-500 min-h-[280px]"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent/60">0{i + 1}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">·</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">{article.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display uppercase leading-none mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                {article.title}
              </h3>

              <p className="text-sm sm:text-base opacity-40 leading-relaxed flex-grow line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                {article.tags?.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[8px] sm:text-[10px] uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full border border-white/10 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Read More <ArrowRight className="w-3 h-3" />
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
    <section id="stack" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-bg relative overflow-hidden">
       <div className="absolute -left-20 sm:-left-10 bottom-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/10 blur-[100px] sm:blur-[120px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:self-start h-fit">
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-accent mb-3 sm:mb-4 block">The Arsenal</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display uppercase leading-[0.85] mb-6 sm:mb-8">Technical<br />Stack.</h2>
          <p className="max-w-md text-base sm:text-lg opacity-50 leading-relaxed font-light">
            My toolkit for building high-performance applications, from deep backend systems to fluid user interfaces.
          </p>
        </div>

        <div className="flex flex-col">
          {arsenal.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-8 sm:py-10 md:py-12 border-b border-white/10 group flex gap-6 sm:gap-8 items-start"
            >
              <div className="mt-1 sm:mt-2 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors flex-shrink-0">
                {i % 4 === 0 ? <Code className="w-4 h-4 sm:w-5 sm:h-5 text-accent" /> :
                 i % 4 === 1 ? <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-accent" /> :
                 i % 4 === 2 ? <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-accent" /> :
                 <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display uppercase mb-3 sm:mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm sm:text-base opacity-40 leading-relaxed group-hover:opacity-70 transition-opacity">
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
    return 'Send Transmission';
  }, [state]);

  async function submitForm(e) {
    e.preventDefault();
    if (!formRef.current || state === 'sending') return;
    const data = new FormData(formRef.current);
    if (String(data.get('website') || '').trim()) return; // Honeypot
    if (Date.now() - createdAtRef.current < 2000) return; // Spam check

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
    } catch (err) {
      console.error(err);
      setState('error');
    } finally {
      setTimeout(() => setState('idle'), 4000);
    }
  }

  return (
    <footer id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-bg border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 mb-20 sm:mb-24 md:mb-32">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display uppercase leading-[0.85] mb-8 sm:mb-10 md:mb-12">
            Let's build<br />something<br /><span className="text-accent italic font-serif normal-case">legendary.</span>
          </h2>
          <motion.a
            href={`mailto:${site.email}`}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light border-b border-white/20 pb-3 sm:pb-4 flex items-center gap-4 sm:gap-6 w-fit hover:border-accent transition-colors duration-500"
          >
            {site.email} <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
          </motion.a>
        </div>

        <div>
          <form className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 md:p-12 bg-white/5 rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-white/10 glass" onSubmit={submitForm} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[8px] sm:text-[10px] uppercase tracking-widest opacity-40 ml-1 sm:ml-2">Name</label>
                <input required name="from_name" className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent/50 transition-colors text-sm sm:text-base min-h-[44px]" placeholder="Joe Doe" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[8px] sm:text-[10px] uppercase tracking-widest opacity-40 ml-1 sm:ml-2">Email</label>
                <input required name="from_email" type="email" className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent/50 transition-colors text-sm sm:text-base min-h-[44px]" placeholder="joe@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[8px] sm:text-[10px] uppercase tracking-widest opacity-40 ml-1 sm:ml-2">Message</label>
              <textarea required name="message" rows="4" className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent/50 transition-colors resize-none text-sm sm:text-base min-h-[100px]" placeholder="What's on your mind?" />
            </div>
            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

            <button
              type="submit"
              disabled={state === 'sending'}
              className="bg-accent text-white font-display uppercase py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 text-sm sm:text-base min-h-[48px]"
            >
              {label}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/5">
         <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-base sm:text-lg font-display uppercase tracking-tighter">{site.brand}.</span>
            <span className="text-white/20">|</span>
            <p className="text-[11px] sm:text-xs opacity-40">
              © {new Date().getFullYear()}
            </p>
         </div>

         <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
               <a href={site.github} target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">GitHub</a>
               <span className="text-white/20">·</span>
               <a href="#" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">LinkedIn</a>
               <span className="text-white/20">·</span>
               <a href="#work" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Work</a>
               <span className="text-white/20">·</span>
               <a href="#music" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Music</a>
               <span className="text-white/20">·</span>
               <a href="/articles.html" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Lab</a>
            </div>
         </div>

         <p className="text-[9px] sm:text-[10px] opacity-20 font-mono uppercase tracking-wider">{site.terminalPrompt} echo "Goodnight"</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-white text-white">
      <AmoledBackground />
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
