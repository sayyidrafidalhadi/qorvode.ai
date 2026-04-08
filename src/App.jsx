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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: "Projects", href: "#work" },
    { name: "Music", href: "#music" },
    { name: "Lab", href: "/articles.html" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-4' : 'mix-blend-difference'}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-display uppercase tracking-tighter cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {site.brand}.
      </motion.div>
      
      <div className="hidden md:flex gap-12 items-center">
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors"
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-bg p-8 flex flex-col gap-6 border-b border-white/10"
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-display uppercase">
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold mb-6 text-accent">
            Available for Work · {site.availableYear}
          </span>
          <h1 className="font-display text-[16vw] md:text-[14vw] leading-[0.82] uppercase tracking-tighter mb-8">
            Digital<br />
            <span className="text-white/20 stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>Resonance</span>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <p className="max-w-xl text-lg md:text-2xl font-light leading-relaxed opacity-70">
            {site.description}
          </p>
          
          <motion.a 
            href="#work"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 group cursor-pointer w-fit"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
              <ArrowRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">Explore My World</span>
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-6 flex gap-8 items-center opacity-40">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-12 bg-white/20 relative"
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
    <div className="py-12 border-y border-white/10 overflow-hidden bg-white/[0.02]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            {items.map((text) => (
              <div key={text} className="flex items-center gap-16">
                <span className="text-4xl md:text-6xl font-display uppercase opacity-10 hover:opacity-100 transition-opacity cursor-default">{text}</span>
                <span className="w-2 h-2 rounded-full bg-accent" />
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
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl mb-8 bg-white/5 border border-white/10 glass">
        <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-700 group-hover:translate-y-[-10px]">
           <div className="flex gap-2 mb-4">
             {project.tags.map(tag => (
               <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-1 rounded bg-white/10 border border-white/10">{tag}</span>
             ))}
           </div>
           <h3 className="text-4xl md:text-5xl font-display uppercase leading-none mb-2">{project.title}</h3>
           <p className="max-w-md text-sm opacity-50 line-clamp-2">{project.description}</p>
        </div>
        
        <div className="absolute top-6 right-6">
           <span className="text-[10px] font-mono opacity-30">0{index + 1}</span>
        </div>

        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
        
        <a 
          href={project.url} 
          target="_blank" 
          rel="noreferrer"
          className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-bg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">Selected Projects</span>
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-none">Crafting Digital<br />Excellence.</h2>
        </div>
        <p className="max-w-xs text-sm opacity-50 leading-relaxed font-light">
          A careful selection of digital products built with performance and aesthetics at the core.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const MusicSection = () => {
  return (
    <section id="music" className="py-32 px-6 bg-white text-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
        <Music className="w-96 h-96" />
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">Sonic Identity</span>
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-none">Audio<br />Releases.</h2>
          </div>
          <p className="max-w-xs text-sm opacity-60 leading-relaxed">
            Where code meets composition. Exploring themes of spirituality and existence through vocals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {releases.map((release, i) => (
            <motion.div 
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-bg/10 rounded-3xl hover:bg-bg hover:text-white transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-60">{release.year}</span>
                <Music className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-display uppercase mb-2">{release.title}</h3>
              <p className="text-sm font-serif italic mb-8 opacity-60 group-hover:opacity-80">{release.arabic}</p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {release.links.map(link => (
                  <a 
                    key={link.url} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[9px] uppercase tracking-widest font-bold px-3 py-2 border border-bg/10 rounded-full group-hover:border-white/20 hover:bg-white hover:text-bg transition-colors"
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
    <section className="py-32 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-6">{stat.label}</span>
            <span className="text-6xl md:text-8xl font-display text-accent">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Stack = () => {
  return (
    <section id="stack" className="py-32 px-6 bg-bg relative overflow-hidden">
       <div className="absolute -left-20 bottom-0 w-96 h-96 bg-accent/10 blur-[120px]" />
       
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="sticky top-32 h-fit">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">The Arsenal</span>
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Technical<br />Stack.</h2>
          <p className="max-w-md text-lg opacity-50 leading-relaxed font-light">
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
              className="py-12 border-b border-white/10 group flex gap-8 items-start"
            >
              <div className="mt-2 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors">
                {i % 4 === 0 ? <Code className="w-5 h-5 text-accent" /> : 
                 i % 4 === 1 ? <Cpu className="w-5 h-5 text-accent" /> :
                 i % 4 === 2 ? <BookOpen className="w-5 h-5 text-accent" /> :
                 <ExternalLink className="w-5 h-5 text-accent" />}
              </div>
              <div>
                <h3 className="text-3xl font-display uppercase mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-base opacity-40 leading-relaxed group-hover:opacity-70 transition-opacity">
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
    <footer id="contact" className="py-32 px-6 bg-bg border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
        <div>
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] mb-12">
            Let's build<br />something<br /><span className="text-accent italic font-serif normal-case">legendary.</span>
          </h2>
          <motion.a 
            href={`mailto:${site.email}`}
            whileHover={{ x: 10 }}
            className="text-xl md:text-3xl font-light border-b border-white/20 pb-4 flex items-center gap-6 w-fit hover:border-accent transition-colors duration-500"
          >
            {site.email} <ArrowRight className="w-8 h-8 text-accent" />
          </motion.a>
        </div>

        <div>
          <form className="flex flex-col gap-8 p-12 bg-white/5 rounded-[40px] border border-white/10 glass" onSubmit={submitForm} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 ml-2">Name</label>
                <input required name="from_name" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/50 transition-colors" placeholder="Joe Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 ml-2">Email</label>
                <input required name="from_email" type="email" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/50 transition-colors" placeholder="joe@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest opacity-40 ml-2">Message</label>
              <textarea required name="message" rows="4" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/50 transition-colors resize-none" placeholder="What's on your mind?" />
            </div>
            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
            
            <button 
              type="submit" 
              disabled={state === 'sending'}
              className="bg-accent text-white font-display uppercase py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {label}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 pt-12 border-t border-white/5">
         <div className="flex flex-col gap-4">
            <span className="text-xl font-display uppercase tracking-tighter">{site.brand}.</span>
            <p className="max-w-xs text-xs opacity-40 leading-relaxed">
              Synthesizing digital craft and vocal depth since 2018. Based on the edge of innovation.
            </p>
         </div>

         <div className="flex gap-12">
            <div className="flex flex-col gap-2">
               <span className="text-[10px] uppercase tracking-widest opacity-30">Social</span>
               <a href={site.github} target="_blank" rel="noreferrer" className="text-sm hover:text-accent transition-colors">GitHub</a>
               <a href="#" className="text-sm hover:text-accent transition-colors">LinkedIn</a>
               <a href="#" className="text-sm hover:text-accent transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col gap-2">
               <span className="text-[10px] uppercase tracking-widest opacity-30">Navigation</span>
               <a href="#work" className="text-sm hover:text-accent transition-colors">Work</a>
               <a href="#music" className="text-sm hover:text-accent transition-colors">Music</a>
               <a href="/articles.html" className="text-sm hover:text-accent transition-colors">Lab</a>
            </div>
         </div>

         <div className="text-right">
            <p className="text-[10px] opacity-20 font-mono mb-2 uppercase">© {new Date().getFullYear()} {site.name}</p>
            <p className="text-[8px] opacity-10 font-mono uppercase tracking-[0.2em]">{site.terminalPrompt} echo "Goodnight"</p>
         </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-white text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <MusicSection />
        <Stack />
        <Stats />
      </main>
      <Contact />
    </div>
  );
}
