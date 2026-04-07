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

  const navItems = [
    { href: '/#projects', label: 'Projects' },
    { href: '/#releases', label: 'Music' },
    { href: '/articles.html', label: 'Articles' },
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

  return (
    <div className="app-shell legal-mode">
      <BackgroundFX />
      <Navbar />
      <main className="legal-page container">
        <a href="/" className="legal-back">Return to Base</a>
        <motion.div initial="hidden" animate="visible" variants={fade}>
          <SectionTitle index="01" title="Articles & Insights" />
          <div className="articles-grid">
            {articles.map((article) => (
              <motion.article key={article.id} id={article.id} variants={fade} className="legal-card" style={{ marginBottom: '2rem' }}>
                <header>
                  <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', marginBottom: '0.5rem' }}>{article.title}</h1>
                  <span className="legal-effective">{article.date}</span>
                  <div className="chip-row">
                    {article.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                </header>
                <div 
                  className="article-content" 
                  style={{ marginTop: '1.5rem' }}
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
                />
                {article.repo && (
                  <div style={{ marginTop: '2rem' }}>
                    <a href={article.repo} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
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
