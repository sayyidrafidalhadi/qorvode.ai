import { motion } from "motion/react";
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
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] transition-all"
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
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-white/40 hover:text-accent transition-colors hidden sm:block"
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
            className="text-white/40 p-2 hover:text-accent transition-colors"
          >
            <Github size={16} sm={18} />
          </motion.a>
          <motion.a
            href="https://instagram.com/qorvode"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="text-white/40 p-2 hover:text-accent transition-colors"
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
    <section className="relative min-h-screen min-h-[100svh] flex flex-col justify-center px-5 sm:px-12 lg:px-24 pt-20 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <div className="space-y-8 sm:space-y-14 lg:space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm border border-white/[0.08] bg-white/[0.02]"
          >
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent shadow-[0_0_8px_#C5A059] sm:shadow-[0_0_12px_#C5A059]" />
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.35em] font-medium text-white/60">
              {site.hero.badge}
            </span>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <h1 className="font-display text-[10vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.92] sm:leading-[0.9] tracking-tighter uppercase font-light">
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
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
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
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-medium">Trusted By</span>
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
      id: 1,
      brand: "Kithademic Studies",
      problem: "Islamic & academic excellence platform lacking modern digital presence and user trust",
      approach: "Premium rebranding with performance-first architecture and authority-focused design system",
      result: "Modern educational platform built to inspire trust and knowledge transfer",
      tags: ["Next.js", "Education", "Islamic", "Platform"],
      status: "Live"
    },
    {
      id: 2,
      brand: "KPS Ayurveda Clinic",
      problem: "Traditional wellness clinic invisible to digital audiences seeking authentic holistic care",
      approach: "Clean, elegant digital presence communicating authenticity and trust",
      result: "Professional web presence attracting wellness seekers",
      tags: ["Web", "Healthcare", "UI/UX"],
      status: "Live"
    },
    {
      id: 3,
      brand: "HalalTune",
      problem: "Islamic music streaming need with poor accessibility and no offline capability",
      approach: "Progressive Web App with Firebase backend, Cloudinary CDN, and offline-first architecture",
      result: "Full-featured PWA with offline playback, playlists, and admin dashboard",
      tags: ["PWA", "Firebase", "Audio", "Cloudinary"],
      status: "Beta"
    }
  ];

  return (
    <section id="work" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 sm:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Case Studies</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.88] tracking-tighter">
              Work That<br />
              <span className="text-accent italic font-serif normal-case">Builds Authority.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/40 font-serif italic border-l border-accent/20 pl-6">
              Not projects — business transformations. Each system engineered to solve specific problems and deliver measurable results for premium brands.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.2, 0, 0, 1] }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-12 lg:gap-20">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-accent/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">{study.status}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">
                      {study.brand}
                    </h3>
                    <p className="text-[13px] sm:text-sm leading-relaxed text-white/35 font-light">
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
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10 text-white/40 group-hover:text-white/60 group-hover:border-accent/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-sm bg-white/[0.02] border border-white/5 group-hover:border-accent/30 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-2">Project Preview</span>
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
              <p className="text-[13px] sm:text-sm text-white/40 leading-relaxed">
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

const About = () => {
  return (
    <section id="about" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">The Authority</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.88] tracking-tighter">
              Built for Brands<br />
              <span className="text-accent italic font-serif normal-case">That Refuse Average.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-[15px] sm:text-lg lg:text-xl font-light leading-relaxed text-white/50">
              Qorvode.ai exists to help brands move from ordinary online presence to premium digital authority.
            </p>

            <p className="text-[14px] sm:text-base leading-relaxed text-white/35">
              I build digital systems where design, trust, and business growth work together. Not just websites — strategic assets that command premium positioning and convert serious clients.
            </p>

            <div className="pt-6 sm:pt-8 border-t border-white/[0.08] space-y-4">
              <p className="text-[12px] uppercase tracking-[0.2em] text-accent/60">The Differentiation</p>
              <ul className="space-y-3">
                {[
                  "Strategy-first approach, not template-based",
                  "Premium positioning that commands pricing",
                  "Systems built for conversion, not decoration",
                  "Execution that respects your brand's authority"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[13px] text-white/45">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-[14px] sm:text-base text-white/40 leading-relaxed">
                Ready to build a digital presence that reflects premium value?
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 sm:px-12 py-5 border border-white/15 hover:border-accent/50 text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500"
            >
              Let's Start
            </motion.a>
          </div>
        </motion.div>
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

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Our bookings increased within 2 weeks after launch. The brand finally felt premium enough for high-value clients. The transformation was immediate.",
      author: "Dr. Priya Sharma",
      role: "Founder",
      company: "KPS Ayurveda Clinic",
      outcome: "40% increase in premium inquiries"
    },
    {
      id: 2,
      quote: "Professional execution from day one. Delivered ahead of schedule with zero revisions needed. The platform exceeded expectations.",
      author: "Ahmed Hasan",
      role: "Director",
      company: "Kithademic Studies",
      outcome: "Launched 2 weeks early"
    },
    {
      id: 3,
      quote: "Finally, a developer who understands premium positioning. Our PWA transformed how our community accesses Islamic music.",
      author: "Sarah Khatun",
      role: "Co-Founder",
      company: "HalalTune",
      outcome: "5,000+ active users"
    }
  ];

  return (
    <section id="testimonials" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 sm:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Client Success</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.88] tracking-tighter">
              Trusted by<br />
              <span className="text-accent italic font-serif normal-case">Serious Brands.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/40 font-serif italic border-l border-accent/20 pl-6">
              Real results. Real trust. Every project engineered to deliver measurable business outcomes for clients who expect more.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="flex flex-col p-8 sm:p-10 lg:p-12 border border-white/[0.06] bg-white/[0.01] hover:border-accent/20 hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="space-y-6 flex-grow">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                  ))}
                </div>
                
                <blockquote className="text-[14px] sm:text-base leading-relaxed text-white/60 font-serif italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.06]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white">
                  {testimonial.author}
                </p>
                <p className="text-[9px] text-white/40 mt-1">
                  {testimonial.role} · {testimonial.company}
                </p>
                <p className="text-[10px] text-accent/60 mt-3 font-medium">
                  {testimonial.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-[13px] sm:text-sm text-white/40">
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
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] tracking-tighter">
              Strategic<br />
              <span className="text-accent italic font-serif normal-case">Intelligence.</span>
            </h2>
          </div>
          <a
            href="/articles.html"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 hover:text-accent hover:gap-6 transition-all duration-500 py-4"
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
                <span className="text-[9px] text-white/30">{insight.readTime} read</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display uppercase leading-tight mb-4 group-hover:text-accent transition-colors duration-500 tracking-tight">
                {insight.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-white/40 font-light flex-grow mb-6">
                {insight.excerpt}
              </p>

              <div className="pt-4 mt-auto border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 group-hover:text-accent transition-colors">Read Insight</span>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500" />
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
            <p className="text-[13px] sm:text-sm text-white/40">
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
  const services = [
    {
      id: 1,
      title: "Premium Brand Websites",
      tagline: "Luxury Digital Presence",
      description: "High-end websites designed to communicate authority, build trust, and convert premium clients. Every pixel is a strategic decision.",
      outcome: "Premium perception that commands premium pricing."
    },
    {
      id: 2,
      title: "Conversion Systems",
      tagline: "Strategic Digital Architecture",
      description: "Custom-built landing pages and sales funnels engineered to increase trust, capture leads, and drive high-ticket conversions.",
      outcome: "Leads that convert. Revenue that grows."
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
        <div className="mb-20 sm:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Premium Services</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.88] tracking-tighter">
              Digital Systems<br />
              <span className="text-accent italic font-serif normal-case">That Convert.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/40 font-serif italic border-l border-accent/20 pl-6">
              We don't just build websites — we architect premium digital experiences that solve business problems and drive measurable results.
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
              className="group relative p-8 sm:p-10 lg:p-12 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="space-y-4 sm:space-y-5">
                <span className="text-[9px] uppercase tracking-[0.4em] text-accent/60 font-medium">
                  {String(i + 1).padStart(2, '0')} — {service.tagline}
                </span>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-[13px] sm:text-sm leading-relaxed text-white/35 font-light group-hover:text-white/50 transition-colors duration-500">
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
            <p className="text-[13px] sm:text-sm text-white/40 font-light">
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
              <span className="text-[11px] text-white/30 block mt-1">
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Trusted by brands in
            </span>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {trustSignals.map((signal, i) => (
                <span 
                  key={signal} 
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/40 px-3 py-2 border border-white/[0.08] hover:border-accent/30 hover:text-white/60 transition-colors cursor-default"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent block mb-4 sm:mb-6">Project Discovery</span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] tracking-tighter">
                Where Serious<br />
                <span className="text-accent italic font-serif normal-case">Projects Begin.</span>
              </h2>
            </div>

            <p className="text-[14px] sm:text-base leading-relaxed text-white/45 max-w-lg">
              Every premium project begins with strategy. Share your vision and let's explore how we can build digital authority that commands premium positioning.
            </p>

            <div className="pt-6 sm:pt-8 border-t border-white/[0.06] space-y-4">
              <p className="text-[11px] text-white/35 leading-relaxed">
                <span className="text-accent/60">Limited projects:</span> Only a select number of projects taken monthly to ensure premium execution quality.
              </p>
              <p className="text-[11px] text-white/35 leading-relaxed">
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
            <form className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-10 border border-white/[0.08] bg-white/[0.01]" onSubmit={submitForm} ref={formRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Full Name</label>
                  <input required name="from_name" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/20" placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Brand / Business</label>
                  <input required name="brand_name" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/20" placeholder="Your brand or business" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Email Address</label>
                <input required name="from_email" type="email" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/20" placeholder="Professional email" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Website (Optional)</label>
                <input name="website_url" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/20" placeholder="Current website if any" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Project Type</label>
                  <select required name="project_type" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light text-white/60 [&>option]:text-black">
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Budget Range</label>
                  <select required name="budget_range" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light text-white/60 [&>option]:text-black">
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">Project Vision</label>
                <textarea required name="project_vision" rows="3" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors resize-none text-sm font-light placeholder:text-white/20" placeholder="Describe your project goals and vision..." />
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/[0.06]">
          <div className="flex flex-col gap-2">
            <span className="text-lg sm:text-xl font-display uppercase tracking-tighter">{site.brand}<span className="text-accent">.</span></span>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              © {new Date().getFullYear()} Premium Digital Execution
            </p>
          </div>

          <div className="flex flex-wrap gap-5 sm:gap-8">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-accent transition-colors">GitHub</a>
            <a href="#work" className="text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-accent transition-colors">Work</a>
            <a href="#about" className="text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-accent transition-colors">About</a>
            <a href="/articles.html" className="text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-accent transition-colors">Insights</a>
          </div>

          <p className="text-[9px] font-mono text-white/15 uppercase tracking-[0.15em]">{site.terminalPrompt}</p>
        </div>
      </div>
    </section>
  );
};

const Contact = FinalCTA;

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-bg text-white font-sans selection:bg-accent selection:text-bg">
      <PremiumBackground />
      <Navbar />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Testimonials />
        <MusicSection />
        <LatestArticles />
        <Services />
        <SocialProof />
      </main>
      <Contact />
    </div>
  );
}
