import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ExternalLink, Github, Instagram, Music, Code, Cpu, BookOpen, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import './styles/main.css';

// Import data
import { site } from './data/site.js';
import { projects } from './data/projects.js';
import { releases } from './data/releases.js';
import { arsenal } from './data/arsenal.js';
import { articles } from './data/articles.js';
import PremiumBackground from './components/AnimeEditBackground.jsx';
import LumaDrift from './components/LumaDrift.jsx';
import { FloatingTerminal, TerminalSection } from './components/TerminalAI.jsx';
import TestimonialsCard from './components/TestimonialsCard.jsx';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [fadeComplete, setFadeComplete] = useState(false);
  const [started, setStarted] = useState(false);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio || started) return;
    
    setStarted(true);
    setMuted(false);
    audio.volume = 0;
    audio.play().catch(() => {});
    
    const fadeInterval = setInterval(() => {
      if (audio.volume < 0.6) {
        audio.volume = Math.min(audio.volume + 0.02, 0.6);
      } else {
        clearInterval(fadeInterval);
        setFadeComplete(true);
      }
    }, 50);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (muted) {
      audio.volume = 0.6;
      audio.play().catch(() => {});
      setMuted(false);
      const fadeIn = setInterval(() => {
        if (audio.volume < 0.6) {
          audio.volume = Math.min(audio.volume + 0.014, 0.6);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="https://res.cloudinary.com/detke30vn/video/upload/v1777443888/Kaan_Simseker_-_Deep_Force_ynuaua.mp3" loop preload="auto" />
      {!started && (
        <motion.button
          onClick={startAudio}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-24 sm:top-28 right-6 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-white/60 transition-all border border-white/60"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07" />
          </svg>
        </motion.button>
      )}
      {started && (
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ opacity: fadeComplete ? 1 : 0 }}
        className="fixed top-24 sm:top-28 right-6 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-white/60 transition-all border border-white/60"
      >
        {muted ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </motion.button>
      )}
    </>
  );
};

const FloatingWhatsApp = () => {
  const phoneNumber = "+919526755210";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 sm:bottom-28 left-6 sm:left-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] transition-all"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-bg" />
    </motion.a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-5 sm:px-12 py-4 sm:py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-white/[0.06] py-3 sm:py-4' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className="text-lg sm:text-xl font-display uppercase tracking-[0.15em] sm:tracking-[0.2em] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {site.brand}<span className="text-accent">.</span>
      </motion.div>

      <div className="flex items-center gap-4 sm:gap-8">
        <motion.a
          href="/articles.html"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-white/60 hover:text-accent transition-colors hidden sm:block"
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
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="text-white/60 p-2 hover:text-accent transition-colors"
          >
            <Github size={16} sm={18} />
          </motion.a>
          <motion.a
            href="https://instagram.com/qorvode.ai"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="text-white/60 p-2 hover:text-accent transition-colors"
          >
            <Instagram size={16} sm={18} />
          </motion.a>
          <motion.a
            href={`mailto:${site.email}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="px-4 sm:px-5 py-2 border border-white/[0.1] rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-widest font-medium hover:bg-white hover:text-bg transition-all duration-500"
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
    <section className="relative min-h-screen min-h-[100svh] flex flex-col justify-center px-5 sm:px-12 lg:px-24 pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <div className="space-y-6 sm:space-y-10 lg:space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm border border-white/[0.08] bg-white/[0.02]"
          >
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent shadow-[0_0_8px_#33B3E6] sm:shadow-[0_0_12px_#33B3E6]" />
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.35em] font-medium text-white/60">
              {site.hero.badge}
            </span>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.92] sm:leading-[0.9] tracking-tighter uppercase font-light">
              <span className="block">{site.hero.headline.top}</span>
              <span className="block text-accent italic font-serif normal-case mt-0.5 sm:mt-1">{site.hero.headline.bottom}</span>
            </h1>

            <p className="max-w-xl text-[13px] sm:text-lg lg:text-[17px] font-light leading-relaxed text-white/45 font-sans tracking-wide">
              {site.hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-1 sm:pt-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto text-center px-8 sm:px-12 py-4 sm:py-5 bg-accent text-bg font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] rounded-sm transition-all shadow-[0_15px_30px_rgba(197,160,89,0.15)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.25)]"
            >
              {site.hero.ctaPrimary}
            </motion.a>

            <motion.div className="flex items-center gap-6">
              <motion.a
                href="#work"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 group py-3"
              >
                <span className="text-[10px] uppercase tracking-[0.35em] font-medium text-white/50 group-hover:text-accent transition-colors">
                  {site.hero.ctaSecondary}
                </span>
                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="pt-8 sm:pt-12 border-t border-white/[0.06]"
          >
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-16">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/60 font-medium">Trusted By</span>
                <div className="flex items-center gap-6 sm:gap-8 opacity-25">
                  <span className="text-[10px] sm:text-[11px] font-display tracking-widest uppercase">Premium Brands</span>
                  <span className="text-[10px] sm:text-[11px] font-display tracking-widest uppercase">Founders</span>
                  <span className="text-[10px] sm:text-[11px] font-display tracking-widest uppercase">Agencies</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-10 sm:bottom-14 right-6 sm:right-14 flex flex-col items-center gap-6 z-10"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent"
        />
        <span className="text-[8px] uppercase tracking-[0.5em] font-medium text-white/15 vertical-text hidden sm:block">Scroll</span>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Digital Authority", "Premium Design", "Strategic Development", "Conversion Focus", "Bespoke Solutions", "Brand Upgrade"];
  return (
    <div className="py-8 sm:py-16 border-y border-white/[0.05] overflow-hidden bg-white/[0.005]">
      <div className="flex whitespace-nowrap">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12 animate-marquee">
            {items.map((text) => (
              <div key={text} className="flex items-center gap-16 sm:gap-24">
                <span className="text-lg sm:text-3xl md:text-5xl font-display uppercase opacity-20 sm:opacity-[0.08] tracking-tighter">{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Work = () => {
  const caseStudies = [
    {
      id: 0,
      brand: "Elvora Creative",
      problem: "Digital design studio needing immersive portfolio with luxury aesthetic and 3D interactions",
      approach: "Premium dark-themed UI with smooth animations and 3D interactive layout",
      result: "Luxury-inspired design portfolio showcasing creative excellence",
      metric: "100+ design inquiries/month",
      timeline: "Delivered in 3 weeks",
      tags: ["React", "3D", "Premium Design", "UI/UX"],
      status: "Live"
    },
    {
      id: 1,
      brand: "Kithademic Studies",
      problem: "Islamic & academic excellence platform lacking modern digital presence and user trust",
      approach: "Premium rebranding with performance-first architecture and authority-focused design system",
      result: "Modern educational platform built to inspire trust and knowledge transfer",
      metric: "35% increase in enrollments",
      timeline: "Delivered in 3 weeks",
      tags: ["Next.js", "Education", "Islamic", "Platform"],
      status: "Live"
    },
    {
      id: 2,
      brand: "KPS Ayurveda Clinic",
      problem: "Traditional wellness clinic invisible to digital audiences seeking authentic holistic care",
      approach: "Clean, elegant digital presence communicating authenticity and trust",
      result: "Professional web presence attracting wellness seekers",
      metric: "40% increase in bookings",
      timeline: "Delivered in 2 weeks",
      tags: ["Web", "Healthcare", "UI/UX"],
      status: "Live"
    },
    {
      id: 3,
      brand: "HalalTune",
      problem: "Islamic music streaming need with poor accessibility and no offline capability",
      approach: "Progressive Web App with Firebase backend, Cloudinary CDN, and offline-first architecture",
      result: "Full-featured PWA with offline playback, playlists, and admin dashboard",
      metric: "5,000+ active users",
      timeline: "Delivered in 4 weeks",
      tags: ["PWA", "Firebase", "Audio", "Cloudinary"],
      status: "Beta"
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
              Work That<br />
              <span className="text-accent italic font-serif normal-case">Builds Authority.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
              Not projects — business transformations. Each system engineered to solve specific problems and deliver measurable results for premium brands.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.2, 0, 0, 1] }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-12 lg:gap-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-accent/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">{study.status}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">
                      {study.brand}
                    </h3>
                    <p className="text-[13px] sm:text-sm leading-relaxed text-white/55 font-light">
                      {study.problem}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent/50 block mb-2">Strategy</span>
                      <p className="text-[12px] sm:text-sm text-white/50 leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent/50 block mb-2">Result</span>
                      <p className="text-[12px] sm:text-sm text-white/50 leading-relaxed">{study.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{study.metric}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">{study.timeline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10 text-white/60 group-hover:text-white/60 group-hover:border-accent/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-sm bg-white/[0.02] border border-white/5 group-hover:border-accent/30 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 block mb-2">Project Preview</span>
                      <span className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white/10">{study.brand}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-700" />
                  
                  <a
                    href={projects.find(p => p.title === study.brand)?.url || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 px-5 sm:px-6 py-3 bg-white text-bg text-[9px] uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight mb-4">
                Ready to build your <span className="text-accent italic font-serif normal-case">transformation</span>?
              </h3>
              <p className="text-[13px] sm:text-sm text-white/60 leading-relaxed">
                Let's discuss how we can solve your specific business challenges through premium digital experience.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 sm:px-12 py-5 bg-accent text-bg font-semibold text-[10px] uppercase tracking-[0.25em] hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)] transition-all"
            >
              Start Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Brief",
      subtitle: "Discovery",
      description: "We discuss your vision, goals, target audience, and brand aspirations to understand what success looks like for you."
    },
    {
      id: 2,
      title: "Research",
      subtitle: "Strategy",
      description: "I analyze your market, competitors, and audience to develop a strategic approach that positions you for growth."
    },
    {
      id: 3,
      title: "Design",
      subtitle: "Creative",
      description: "Bringing ideas to life with premium visuals, thoughtful user experience, and conversion-focused design elements."
    },
    {
      id: 4,
      title: "Delivery",
      subtitle: "Launch",
      description: "Your complete project delivered on time with all assets, files, and support to help you succeed."
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">How I Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
            The Process<br />
            <span className="text-accent italic font-serif normal-case">That Delivers.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
            A proven framework that turns your vision into a premium digital reality. No confusion, no delays — just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="relative p-6 sm:p-8 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display text-accent/20">
                  {String(step.id).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                  Step {step.id}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight mb-1">
                {step.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-4">
                {step.subtitle}
              </p>
              
              <p className="text-[12px] sm:text-sm leading-relaxed text-white/55 font-light">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
            <p className="text-[13px] sm:text-sm uppercase tracking-[0.15em] text-white/60">Full-Stack Developer | Vocalist | Founder of Qorvode</p>
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
              Beyond the code, I am a digital content creator and vocalist, bringing a unique, artistic perspective to every project I undertake. Whether it's architecting community platforms like Science Orbit or driving growth for my own ventures like Qorvode, I am driven by the intersection of innovation and art.
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

const Niches = () => {
  const niches = [
    {
      id: 1,
      title: "Perfume & Fragrance Brands",
      description: "Luxury scent retailers and brands that need premium digital presence to match their product quality.",
      icon: "✨"
    },
    {
      id: 2,
      title: "Small Businesses",
      description: "Local businesses ready to level up their digital game and compete with bigger brands.",
      icon: "🏪"
    },
    {
      id: 3,
      title: "Islamic Brands",
      description: "Halal businesses, Islamic education platforms, and faith-centered brands seeking modern digital identity.",
      icon: "☪"
    },
    {
      id: 4,
      title: "Luxury Products",
      description: "Premium brands demanding sophisticated design that commands premium pricing.",
      icon: "💎"
    }
  ];

  return (
    <section id="niches" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Specialization</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
            Industries<br />
            <span className="text-accent italic font-serif normal-case">I Serve.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
            Focused expertise in industries where premium positioning makes all the difference. I understand the nuances that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="group p-8 sm:p-10 lg:p-12 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl sm:text-4xl">{niche.icon}</span>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
                    {niche.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm leading-relaxed text-white/55 font-light">
                    {niche.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-[13px] sm:text-sm text-white/60 font-light">
              Ready to elevate your industry presence?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-4 border border-white/15 hover:border-accent/50 hover:bg-white/[0.02] text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      description: "Our bookings increased within 2 weeks after launch. The brand finally felt premium enough for high-value clients. The transformation was immediate.",
      author: "Wellness Brand Founder",
      role: "Healthcare · South Asia"
    },
    {
      id: 2,
      description: "Professional execution from day one. Delivered ahead of schedule with zero revisions needed. The platform exceeded expectations.",
      author: "EdTech Director",
      role: "Education · Middle East"
    },
    {
      id: 3,
      description: "Finally, a developer who understands premium positioning. Our PWA transformed how our community accesses Islamic music.",
      author: "Platform Co-Founder",
      role: "Islamic Audio · Global"
    }
  ];

  return (
    <section id="testimonials" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-16 sm:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Client Success</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
            Trusted by<br />
            <span className="text-accent italic font-serif normal-case">Serious Brands.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
            Real results. Real trust. Every project engineered to deliver measurable business outcomes for clients who expect more.
          </p>
        </motion.div>

        <TestimonialsCard
          items={testimonials}
          showNavigation={true}
          showCounter={true}
          autoPlay={true}
          autoPlayInterval={6000}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-[13px] sm:text-sm text-white/60">
              Ready to join the list of successful transformations?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 sm:px-12 py-5 bg-accent text-bg font-semibold text-[10px] uppercase tracking-[0.25em] hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)] transition-all"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LatestArticles = () => {
  const insights = [
    {
      id: 1,
      category: "Strategy",
      title: "Why Premium Brands Lose Trust With Cheap UI",
      excerpt: "The hidden cost of templates and generic design systems on high-ticket client perception and conversion rates.",
      readTime: "4 min"
    },
    {
      id: 2,
      category: "Conversion",
      title: "Conversion Psychology Behind High-Ticket Websites",
      excerpt: "Strategic UX decisions that command premium pricing and increase inquiry quality by 40%.",
      readTime: "6 min"
    },
    {
      id: 3,
      category: "Identity",
      title: "Building Digital Authority Through Design Systems",
      excerpt: "How premium brands maintain consistent authority across every digital touchpoint.",
      readTime: "5 min"
    }
  ];

  return (
    <section id="insights" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block mb-4">The Insights</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display uppercase leading-[0.9] tracking-tighter">
              Strategic<br />
              <span className="text-accent italic font-serif normal-case">Intelligence.</span>
            </h2>
          </div>
          <a
            href="/articles.html"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 hover:text-accent hover:gap-6 transition-all duration-500 py-4"
          >
            Archive <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {insights.map((insight, i) => (
            <motion.a
              key={insight.id}
              href={`/articles.html#${insight.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col p-8 sm:p-10 border border-white/[0.06] hover:border-accent/30 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] uppercase tracking-[0.25em] text-accent/50">{insight.category}</span>
                <span className="text-[9px] text-white/50">{insight.readTime} read</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display uppercase leading-tight mb-4 group-hover:text-accent transition-colors duration-500 tracking-tight">
                {insight.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-white/60 font-light flex-grow mb-6">
                {insight.excerpt}
              </p>

              <div className="pt-4 mt-auto border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 group-hover:text-accent transition-colors">Read Insight</span>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-[13px] sm:text-sm text-white/60">
              Insights for brands that think beyond templates.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-4 bg-accent text-bg font-semibold text-[10px] uppercase tracking-[0.25em] transition-all"
            >
              Work With Us
            </motion.a>
</div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    {
      id: 1,
      image: "https://res.cloudinary.com/detke30vn/image/upload/v1777441930/20260425_142352_kkaqqd.jpg",
      imageAlt: "Graphic Design - Design That Speaks",
      title: "Design That Speaks",
      tagline: "Graphic Design",
      description: "Creative visuals that build trust, attract attention, and make your brand unforgettable.",
      outcome: "Memorable first impressions that last."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/detke30vn/image/upload/v1777441716/file_000000006b6c71fa8ef28b08d120644d_ut0hs0.png",
      imageAlt: "Website Development - Websites That Convert",
      title: "Websites That Convert",
      tagline: "Website Development",
      description: "Modern, fast websites built to grow your business and turn visitors into customers.",
      outcome: "Growth-focused digital presence that sells."
    },
    {
      id: 3,
      title: "Brand Identity Systems",
      tagline: "Complete Visual Authority",
      description: "Cohesive visual identity systems that position your brand as an industry leader. From digital presence to full brand guidelines.",
      outcome: "Memorable. Distinguished. Dominant."
    },
    {
      id: 4,
      title: "Creative Direction",
      tagline: "Art Direction for Digital",
      description: "Strategic creative direction that elevates your brand above competitors. Visual storytelling that builds emotional authority.",
      outcome: "Brand presence that resonates and retains."
    }
  ];

  return (
    <section id="services" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">What I Offer</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
              Services That<br />
              <span className="text-accent italic font-serif normal-case">Drive Growth.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
              I build digital experiences designed to attract, engage, and convert your target audience into loyal customers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="group relative p-0 sm:p-0 lg:p-0 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {service.image && (
                <div 
                  className="relative aspect-video w-full overflow-hidden"
                >
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                </div>
              )}
              
              <div className="space-y-4 sm:space-y-5 p-6 sm:p-8 lg:p-10">
                <span className="text-[9px] uppercase tracking-[0.4em] text-accent/60 font-medium">
                  {String(i + 1).padStart(2, '0')} — {service.tagline}
                </span>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-[13px] sm:text-sm leading-relaxed text-white/55 font-light group-hover:text-white/50 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="pt-4 mt-4 border-t border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent/50 font-medium">
                    {service.outcome}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 text-accent" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-[13px] sm:text-sm text-white/60 font-light">
              Ready to elevate your brand?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-4 border border-white/15 hover:border-accent/50 hover:bg-white/[0.02] text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-accent transition-colors"
              >
                <ArrowRight className="w-6 h-6 rotate-[45deg]" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-sm border border-white/10"
              />
              
              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/60 mt-4">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/[0.06]"
      >
        <div className="mb-12 sm:mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block mb-6">Investment</span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight">
            Service Packages
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Logo Design", price: "₹999", features: ["Custom Logo Concepts", "Multiple Revisions", "Source Files", "Usage Guide"] },
            { name: "Social Media", price: "₹1,499", features: ["Post Designs", "Story Templates", "Highlight Covers", "3 Formats"] },
            { name: "Website", price: "₹6,999", features: ["Responsive Design", "CMS Setup", "Basic SEO", "Contact Form"] },
            { name: "Full Branding", price: "₹14,999", features: ["Complete Identity", "Brand Guidelines", "All Assets", "Stationery Design"] }
          ].map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="p-6 sm:p-8 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <h4 className="text-lg sm:text-xl font-display uppercase tracking-tight mb-2">{pkg.name}</h4>
              <p className="text-2xl sm:text-3xl text-accent font-display mb-4">{pkg.price}</p>
              <ul className="space-y-2">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="text-[11px] sm:text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => {
  const metrics = [
    { value: "25+", label: "Premium Projects", description: "Delivered with measurable outcomes" },
    { value: "3x", label: "Faster Systems", description: "Launch timelines that compete" },
    { value: "40%", label: "Avg. Increase", description: "In inquiry quality post-launch" },
    { value: "98%", label: "On-Time Delivery", description: "Projects delivered as promised" }
  ];

  const trustSignals = [
    "Founders & Entrepreneurs",
    "Healthcare & Wellness",
    "Islamic Brands",
    "Personal Brands",
    "Premium Positioning",
    "Authority-First Design"
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-display text-accent tracking-tight block">
                {metric.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 block mt-3">
                {metric.label}
              </span>
              <span className="text-[11px] text-white/50 block mt-1">
                {metric.description}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Trusted by brands in
            </span>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {trustSignals.map((signal, i) => (
                <span 
                  key={signal} 
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/60 px-3 py-2 border border-white/[0.08] hover:border-accent/30 hover:text-white/60 transition-colors cursor-default"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const [state, setState] = useState('idle');
  const formRef = useRef(null);
  const phoneNumber = "+919526755210";

  const label = useMemo(() => {
    if (state === 'success') return 'Opening WhatsApp...';
    return 'Submit via WhatsApp';
  }, [state]);

  function submitForm(e) {
    e.preventDefault();
    if (!formRef.current || state === 'sending') return;

    const data = new FormData(formRef.current);
    const name = data.get('from_name') || '';
    const brand = data.get('brand_name') || '';
    const email = data.get('from_email') || '';
    const website = data.get('website_url') || '';
    const projectType = data.get('project_type') || '';
    const budget = data.get('budget_range') || '';
    const vision = data.get('project_vision') || '';

    const message = `*New Project Inquiry - QORVODE*\n\n*Name:* ${name}\n*Brand:* ${brand}\n*Email:* ${email}\n*Website:* ${website || 'N/A'}\n*Project Type:* ${projectType}\n*Budget:* ${budget}\n*Vision:* ${vision}`;

    setState('success');
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
    formRef.current.reset();
    setState('idle');
  }

  const projectTypes = [
    'Premium Brand Website',
    'Conversion-Focused Landing Page',
    'Authority-Building Personal Brand',
    'Luxury Visual Identity',
    'Creative Direction',
    'Strategic Consultation',
    'Digital Experience System'
  ];

  const budgetRanges = [
    '₹25K – ₹50K',
    '₹50K – ₹1L',
    '₹1L – ₹2L',
    '₹2L+ Premium Projects'
  ];

  return (
    <section id="contact" className="py-32 sm:py-48 px-5 sm:px-12 lg:px-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent block mb-4 sm:mb-6">Project Discovery</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display uppercase leading-[0.9] tracking-tighter">
                Where Serious<br />
                <span className="text-accent italic font-serif normal-case">Projects Begin.</span>
              </h2>
            </div>

            <p className="text-[14px] sm:text-base leading-relaxed text-white/45 max-w-lg">
              Every premium project begins with strategy. Share your vision and let's explore how we can build digital authority that commands premium positioning.
            </p>

            <div className="pt-6 sm:pt-8 border-t border-white/[0.06] space-y-4">
              <p className="text-[11px] text-white/55 leading-relaxed">
                <span className="text-accent/60">Limited projects:</span> Only a select number of projects taken monthly to ensure premium execution quality.
              </p>
              <p className="text-[11px] text-white/55 leading-relaxed">
                <span className="text-accent/60">Response:</span> Within 24 hours. Strategic call to discuss your project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-10 skeuo" onSubmit={submitForm} ref={formRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Full Name</label>
                  <input required name="from_name" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Brand / Business</label>
                  <input required name="brand_name" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Your brand or business" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Email Address</label>
                <input required name="from_email" type="email" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Professional email" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Website (Optional)</label>
                <input name="website_url" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Current website if any" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Project Type</label>
                  <select required name="project_type" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light text-white/60 [&>option]:text-black">
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Budget Range</label>
                  <select required name="budget_range" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light text-white/60 [&>option]:text-black">
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Project Vision</label>
                <textarea required name="project_vision" rows="3" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors resize-none text-sm font-light placeholder:text-white/60" placeholder="Describe your project goals and vision..." />
              </div>

              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <button
                type="submit"
                disabled={state === 'sending'}
                className="mt-2 bg-accent text-bg font-semibold uppercase py-4 text-[10px] tracking-[0.2em] hover:shadow-[0_15px_30px_rgba(197,160,89,0.15)] transition-all disabled:opacity-50"
              >
                {label}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 p-8 sm:p-10 skeuo rounded-lg">
            <div className="flex flex-col gap-4 max-w-sm">
              <span className="text-2xl sm:text-3xl font-display uppercase tracking-tighter text-white/80">{site.brand}<span className="text-accent">.</span></span>
              <p className="text-[13px] leading-relaxed text-white/50">
                Crafting premium digital experiences that blend technical excellence with creative storytelling.
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 pt-2">
                © {new Date().getFullYear()} / {getHijriYear()} AH
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">Navigation</span>
                <div className="flex flex-col gap-3">
                  <a href="#work" className="text-[12px] text-white/50 hover:text-accent transition-colors">Work</a>
                  <a href="#about" className="text-[12px] text-white/50 hover:text-accent transition-colors">About</a>
                  <a href="/articles.html" className="text-[12px] text-white/50 hover:text-accent transition-colors">Insights</a>
                  <a href="#contact" className="text-[12px] text-white/50 hover:text-accent transition-colors">Contact</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">Connect</span>
                <div className="flex flex-col gap-3">
                  <a href={site.github} target="_blank" rel="noreferrer" className="text-[12px] text-white/50 hover:text-accent transition-colors">GitHub</a>
                  <a href="https://instagram.com/qorvode.ai" target="_blank" rel="noreferrer" className="text-[12px] text-white/50 hover:text-accent transition-colors">Instagram</a>
                  <a href={`mailto:${site.email}`} className="text-[12px] text-white/50 hover:text-accent transition-colors">Email</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">Legal</span>
                <div className="flex flex-col gap-3">
                  <a href="/privacy.html" className="text-[12px] text-white/50 hover:text-accent transition-colors">Privacy Policy</a>
                  <a href="/terms.html" className="text-[12px] text-white/50 hover:text-accent transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.15em] text-center mt-8">
            {site.terminalPrompt}
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact = FinalCTA;

function getHijriYear() {
  const now = new Date();
  const gregorianYear = now.getFullYear();
  const hijriOffset = Math.floor((gregorianYear - 622) * (33 / 32));
  return hijriOffset;
}

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] transition-all cursor-pointer"
      title="Back to top"
    >
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-bg rotate-[-90deg]" />
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-bg text-white font-sans selection:bg-accent selection:text-bg">
      <LumaDrift />
      <Navbar />
      <MusicPlayer />
      <FloatingWhatsApp />
      <FloatingTerminal />
      <main className="skeuo">
        <Hero />
        <Marquee />
        <Work />
        <Process />
        <About />
        <Niches />
        <Testimonials />
        <MusicSection />
        <LatestArticles />
        <Services />
        <SocialProof />
        <TerminalSection />
      </main>
      <Contact />
      <BackToTop />
    </div>
  );
}
