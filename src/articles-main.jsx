import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useScroll } from 'motion/react';
import { ArrowLeft, ExternalLink, Menu, X, BookOpen, Clock, Calendar, ArrowUpRight, Github, Instagram } from 'lucide-react';
import './styles/main.css';
import { site } from './data/site.js';
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
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg sm:text-xl font-display uppercase tracking-tighter cursor-pointer"
      >
        {site.brand}.
      </motion.a>

      <div className="flex items-center gap-3 sm:gap-4">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-white/60 hover:text-accent transition-colors"
        >
          Home
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

const ArticleIndex = ({ articles, activeArticle }) => {
    return (
        <nav className="hidden lg:block fixed right-6 top-32 w-64 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="sticky top-0 bg-bg/90 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Article Index</h3>
                <ul className="flex flex-col gap-1">
                    {articles.map((article, i) => (
                        <li key={article.id}>
                            <a
                                href={`#${article.id}`}
                                className={`block py-2 px-3 text-[11px] uppercase tracking-wider transition-all rounded-lg border-l-2 ${
                                    activeArticle === article.id
                                        ? 'text-accent border-accent bg-accent/5 font-bold'
                                        : 'text-white/40 border-transparent hover:text-white/70 hover:border-white/20'
                                }`}
                            >
                                <span className="opacity-30 mr-2">0{i + 1}</span>
                                {article.title.length > 35 ? article.title.substring(0, 35) + '...' : article.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-[9px] uppercase tracking-widest text-white/20">
                        {articles.length} Articles
                    </p>
                </div>
            </div>
        </nav>
    );
};

const ArticleList = ({ activeArticle }) => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-24 lg:mr-72">
                {articles.map((article, i) => (
                    <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id={article.id}
                        className="group scroll-mt-24"
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
                                        Visit Resource <ArrowUpRight className="w-4 h-4" />
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
  const [activeArticle, setActiveArticle] = useState('');

  // Track which article is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveArticle(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );

    articles.forEach((article) => {
      const element = document.getElementById(article.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-white text-white">
      <AmoledBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <ArticleHero />
        <ArticleIndex articles={articles} activeArticle={activeArticle} />
        <ArticleList activeArticle={activeArticle} />
      </main>
      <footer className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-bg border-t border-white/10">
        <div className="max-w-6xl mx-auto">
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
                <a href="/" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Home</a>
                <span className="text-white/20">·</span>
                <a href={site.github} target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">GitHub</a>
                <span className="text-white/20">·</span>
                <a href="https://instagram.com/qorvode.ai" target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Instagram</a>
              </div>
            </div>

            <p className="text-[9px] sm:text-[10px] opacity-20 font-mono uppercase tracking-wider">{site.terminalPrompt} echo "Goodnight"</p>
          </div>
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
