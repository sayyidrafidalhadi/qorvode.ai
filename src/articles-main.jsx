import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import './styles/main.css';
import { site } from './data/site.js';
import { articles } from './data/articles.js';

function makeFade(reduced) {
  if (reduced) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
}

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
  React.useEffect(() => {
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

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navItems = [
    { href: '/#projects', label: 'Projects' },
    { href: '/#releases', label: 'Music' },
    { href: '/articles.html', label: 'Lab' },
    { href: '/#contact', label: "Let's Talk", cta: true },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="/" className="logo">{site.brand}</a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => <a className={item.cta ? 'nav-cta' : ''} key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button
          className={`menu-toggle ${open ? 'active' : ''}`}
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
        <button className="mm-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <span>&times;</span>
        </button>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={`mm-link ${item.cta ? 'nav-cta' : ''}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="/" className="f-logo">{site.brand}</a>
        <div className="f-links">
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">GitHub</a>
        </div>
      </div>
      <p className="f-copy">© {new Date().getFullYear()} {site.name} · All rights reserved</p>
    </footer>
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

function ArticlesPage() {
  const reduceMotion = useReducedMotion();
  const fade = makeFade(reduceMotion);

  React.useEffect(() => {
    // Copy button injection
    const blocks = document.querySelectorAll('pre');
    blocks.forEach(block => {
      if (block.querySelector('.copy-btn')) return;
      block.style.position = 'relative';
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.innerText = 'Copy';
      btn.style.cssText = 'position: absolute; right: 0.5rem; top: 0.5rem; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(255,255,255,0.1); border: 1px solid var(--border); color: var(--text-soft); font-size: 0.75rem; cursor: pointer; transition: all 0.2s;';
      btn.onclick = () => {
        const code = block.querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
          btn.innerText = 'Copied!';
          btn.style.borderColor = 'var(--accent)';
          setTimeout(() => {
            btn.innerText = 'Copy';
            btn.style.borderColor = 'var(--border)';
          }, 2000);
        });
      };
      block.appendChild(btn);
    });

    // Scroll to hash on load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <div className="app-shell legal-mode">
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary)',
          transformOrigin: '0%',
          zIndex: 1100,
        }}
      />
      <BackgroundFX />
      <Navbar />
      <main className="legal-page container">
        <a href="/" className="legal-back">Return to Base</a>
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <SectionTitle index="01" title="Articles & Insights" />
          
          <div className="article-index" style={{ 
            marginBottom: '4rem', 
            padding: '2rem', 
            background: 'var(--surface)', 
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)' 
          }}>
            <h3 style={{ marginBottom: '1.5rem', opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Laboratory Index</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {articles.map((article) => (
                <a key={article.id} href={`#${article.id}`} style={{ 
                  color: 'var(--text-soft)', 
                  textDecoration: 'none', 
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem'
                }} className="index-link">
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>→</span>
                  {article.title}
                </a>
              ))}
            </div>
          </div>

          <div className="articles-list-vertical" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {articles.map((article) => (
              <motion.article key={article.id} id={article.id} variants={fade} className="legal-card">
                <header>
                  <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', marginBottom: '1rem', lineHeight: 1.1 }}>{article.title}</h1>
                  <span className="legal-effective">{article.date}</span>
                  <div className="chip-row" style={{ marginTop: '1rem' }}>
                    {article.tags && article.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                </header>
                <div 
                  className="article-content" 
                  style={{ marginTop: '3rem', maxWidth: '800px' }}
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
                />
                {article.repo && (
                  <div style={{ marginTop: '3rem' }}>
                    <a href={article.repo} target="_blank" rel="noreferrer" className="btn-primary">
                      View Repository
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

function SectionTitle({ index, title }) {
  return (
    <div className="section-head" style={{ marginBottom: '2rem' }}>
      <span className="section-num">{index}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function formatMarkdown(text) {
  let html = text
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
    .replace(/```bash\n([\s\S]*?)```/g, '<pre class="terminal-body" style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px;"><code>$1</code></pre>')
    .replace(/```json\n([\s\S]*?)```/g, '<pre class="terminal-body" style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px;"><code>$1</code></pre>')
    .replace(/```powershell\n([\s\S]*?)```/g, '<pre class="terminal-body" style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px;"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="chip" style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.4rem; border-radius: 4px;">$1</code>');

  // Handle lists: find blocks of lines starting with "- "
  const lines = html.split('\n');
  let inList = false;
  const processedLines = [];

  for (let line of lines) {
    if (line.trim().startsWith('- ')) {
      if (!inList) {
        processedLines.push('<ul>');
        inList = true;
      }
      processedLines.push(`<li>${line.trim().substring(2)}</li>`);
    } else {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      processedLines.push(line);
    }
  }
  if (inList) processedLines.push('</ul>');

  return processedLines
    .join('\n')
    .split('\n\n')
    .map(p => (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<li') || p.startsWith('<pre')) ? p : `<p>${p}</p>`)
    .join('');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticlesPage />
  </React.StrictMode>,
);
