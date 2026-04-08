import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useScroll } from 'motion/react';
import { ArrowLeft, ExternalLink, Menu, X, BookOpen, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import './styles/main.css';
import { site } from './data/site.js';
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
    { name: "Back to Home", href: "/" },
    { name: "Projects", href: "/#work" },
    { name: "Music", href: "/#music" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent'}`}>
      <a href="/" className="text-xl font-display uppercase tracking-tighter cursor-pointer">
        {site.brand}.
      </a>
      
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

function formatMarkdown(text) {
  return text
    .replace(/### (.*)/g, '<h3 class="text-2xl font-display uppercase mt-12 mb-6">$1</h3>')
    .replace(/\*\*(.*)\*\*/g, '<strong class="text-accent font-semibold">$1</strong>')
    .replace(/```bash\n([\s\S]*?)```/g, '<pre class="bg-white/5 p-6 rounded-2xl border border-white/10 my-8 overflow-x-auto font-mono text-sm leading-relaxed text-accent/80"><code>$1</code></pre>')
    .replace(/```json\n([\s\S]*?)```/g, '<pre class="bg-white/5 p-6 rounded-2xl border border-white/10 my-8 overflow-x-auto font-mono text-sm leading-relaxed text-accent/80"><code>$1</code></pre>')
    .replace(/```powershell\n([\s\S]*?)```/g, '<pre class="bg-white/5 p-6 rounded-2xl border border-white/10 my-8 overflow-x-auto font-mono text-sm leading-relaxed text-accent/80"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-accent/90">$1</code>');
}

const ArticleHero = () => {
    return (
        <section className="pt-48 pb-24 px-6 border-b border-white/10">
            <div className="max-w-4xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">The Laboratory</span>
                <h1 className="text-6xl md:text-8xl font-display uppercase leading-none mb-12">Articles &<br />Insights.</h1>
                <p className="text-xl md:text-2xl font-light opacity-50 max-w-2xl leading-relaxed">
                    Exploring the intersection of agentic workflows, software architecture, and the future of human-AI collaboration.
                </p>
            </div>
        </section>
    );
};

const ArticleList = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-24">
                {articles.map((article, i) => (
                    <motion.article 
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id={article.id}
                        className="group"
                    >
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="md:w-1/4">
                                <div className="sticky top-32 flex flex-col gap-4 text-[10px] uppercase tracking-widest font-bold opacity-30">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3" />
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3 h-3" />
                                        5 min read
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2 uppercase">
                                        {article.tags?.map(tag => (
                                            <span key={tag} className="text-[8px] border border-white/20 px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/4">
                                <h2 className="text-4xl md:text-5xl font-display uppercase leading-none mb-8 group-hover:text-accent transition-colors">
                                    {article.title}
                                </h2>
                                <div 
                                    className="prose prose-invert max-w-none text-lg opacity-60 leading-relaxed space-y-6"
                                    dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
                                />
                                {article.repo && (
                                    <a 
                                        href={article.repo} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="inline-flex items-center gap-2 mt-12 text-sm uppercase tracking-widest font-bold text-accent hover:gap-4 transition-all"
                                    >
                                        Explore Repository <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

const ArticlesPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-white text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <ArticleHero />
        <ArticleList />
      </main>
      <footer className="py-24 px-6 border-t border-white/10 text-center">
         <a href="/" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold opacity-50 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to Base
         </a>
         <div className="mt-12 text-[10px] font-mono opacity-20 uppercase">
            © {new Date().getFullYear()} {site.brand} · Research Dept.
         </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticlesPage />
  </React.StrictMode>,
);
