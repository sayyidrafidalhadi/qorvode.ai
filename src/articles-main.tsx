import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, Github, Instagram } from 'lucide-react';
import './styles/main.css';
import { site } from './data/site';
import { articles, type Article } from './data/articles';

const navItems = [
  { href: "/", label: "Home" },
  { href: "https://instagram.com/qorvode.ai", label: "Instagram", external: true },
  { href: site.github, label: "GitHub", external: true },
];

const menuSpring = { type: "spring" as const, stiffness: 260, damping: 24 };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-bg border-b-2 border-accent"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-text"
          >
            {site.brand}
          </motion.a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-text hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-accent text-text-alt brutal-border-alt brutal-shadow-sm-alt"
            >
              GitHub
            </motion.a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-accent"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-accent"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-accent"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={menuSpring}
            className="md:hidden bg-bg border-b-2 border-accent"
          >
            <nav className="flex flex-col px-5 pb-8 pt-4 gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg font-display font-bold uppercase tracking-tight text-text hover:text-accent transition-colors border-b border-accent/10"
                >
                  {item.label}
                </a>
              ))}
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="mt-4 px-6 py-3 bg-accent text-text-alt font-bold text-[11px] uppercase tracking-[0.2em] text-center brutal-border-alt brutal-shadow-sm-alt"
                  >
                    GitHub
                  </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

function formatMarkdown(text: string): string {
  return text
    .replace(/### (.*)/g, '<h3 class="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-accent mt-14 mb-6">$1</h3>')
    .replace(/## (.*)/g, '<h2 class="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-accent mt-16 mb-6">$1</h2>')
    .replace(/\*\*(.*)\*\*/g, '<strong class="text-text font-semibold">$1</strong>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-surface p-5 sm:p-6 brutal-border my-8 overflow-x-auto font-mono text-sm leading-relaxed text-text/80"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-surface px-2 py-0.5 text-accent font-mono text-sm brutal-border">$1</code>')
    .replace(/---/g, '<hr class="border-t-[3px] border-accent/20 my-12" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-all">$1</a>')
    .replace(/^(\d+\.\s.*)$/gm, '<li class="ml-6 list-decimal text-text/70">$1</li>')
    .replace(/^- (.*)$/gm, '<li class="ml-6 list-disc text-text/70">$1</li>');
}

const ArticleHero = () => {
    return (
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-12 bg-bg border-b-[3px] border-accent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                      <BookOpen className="w-5 h-5 text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">The Laboratory</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text mb-8">
                    Articles &<br />
                    <span className="italic font-serif normal-case text-accent">Insights.</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-text/60 max-w-2xl leading-relaxed font-serif italic">
                    Exploring the intersection of agentic workflows, software architecture, and the future of human-AI collaboration.
                  </p>
                </motion.div>
            </div>
        </section>
    );
};

const FeaturedArticles = ({ articles: articleList }: { articles: Article[] }) => {
    const featured = articleList.slice(0, 3);

    return (
        <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg-alt border-b-[3px] border-accent-alt/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt block mb-3">Featured</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase leading-[0.95] tracking-tighter text-text-alt mb-4">
                    Must-Read<br />
                    <span className="italic font-serif normal-case text-accent-alt">Intelligence.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-text-alt/60 max-w-xl leading-relaxed font-serif italic border-l-[3px] border-accent-alt pl-6 mb-12">
                    Curated insights on the tools and workflows shaping the future of development.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {featured.map((article, i) => (
                        <motion.a
                            key={article.id}
                            href={`#${article.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 sm:p-8 brutal-border-alt bg-surface-alt hover:bg-surface-alt/80 transition-all duration-300 flex flex-col"
                            aria-label={`Read article: ${article.title}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[9px] font-mono text-text-alt/40">{article.date}</span>
                                <span className="text-text-alt/20" aria-hidden="true">|</span>
                                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-accent-alt/70">{article.tags?.[0]}</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-display font-bold uppercase leading-tight mb-4 text-text-alt group-hover:text-accent-alt transition-colors flex-grow">
                                {article.title.length > 55 ? article.title.substring(0, 55) + '...' : article.title}
                            </h3>
                            <p className="text-sm text-text-alt/60 leading-relaxed line-clamp-3 mb-6">{article.excerpt}</p>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/60 group-hover:text-accent-alt transition-colors mt-auto pt-4 border-t-[3px] border-accent-alt/20">
                                Read Article <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArticleIndex = ({ articles: articleList, activeArticle }: { articles: Article[]; activeArticle: string }) => {
    return (
        <nav className="hidden lg:block fixed right-8 top-28 w-56 max-h-[calc(100vh-200px)] overflow-y-auto z-30">
            <div className="bg-surface p-5 brutal-border brutal-shadow-sm">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">Index</h3>
                <ul className="flex flex-col gap-1">
                    {articleList.map((article, i) => (
                        <li key={article.id}>
                            <a
                                href={`#${article.id}`}
                                className={`block py-2 px-3 text-[10px] uppercase tracking-wider transition-all brutal-border border ${
                                    activeArticle === article.id
                                        ? 'text-text border-accent bg-accent/10 font-bold'
                                        : 'text-text/50 border-transparent hover:text-text hover:border-accent/50'
                                }`}
                            >
                                <span className="opacity-30 mr-2 font-mono">{String(i + 1).padStart(2, '0')}</span>
                                {article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 pt-4 border-t-[3px] border-accent/10">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-text/40 font-bold">
                        {articleList.length} Articles
                    </p>
                </div>
            </div>
        </nav>
    );
};

const ArticleList = () => {
    return (
        <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg">
            <div className="max-w-4xl mx-auto flex flex-col gap-20 sm:gap-28 lg:mr-64">
                {articles.map((article) => (
                    <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        id={article.id}
                        className="group scroll-mt-28"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="lg:w-1/5 shrink-0">
                                <div className="lg:sticky lg:top-32 flex lg:flex-col gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text/50">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3 text-accent" />
                                        {article.date}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {article.tags?.map(tag => (
                                            <span key={tag} className="text-[8px] tracking-[0.15em] border-2 border-accent/30 px-2 py-1 text-accent font-bold uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-4/5 min-w-0">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase leading-[0.95] tracking-tighter text-text mb-8 group-hover:text-accent transition-colors">
                                    {article.title}
                                </h2>
                                <div
                                    className="text-text/70 leading-relaxed space-y-4 text-base [&_p]:my-4 [&_ul]:space-y-2 [&_li]:leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
                                />
                                {article.repo && (
                                    <a
                                        href={article.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 mt-10 px-6 py-3 bg-accent text-text-alt font-bold text-[10px] uppercase tracking-[0.2em] brutal-border-alt brutal-shadow-sm-alt hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
                                        aria-label={`Visit ${article.title} resource`}
                                    >
                                        Visit Resource <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="mt-16 sm:mt-20 border-t-[3px] border-accent/10" />
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

const Footer = () => {
  return (
    <footer className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 bg-bg-alt border-t-[3px] border-accent-alt/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 p-8 sm:p-10 brutal-border-alt bg-surface-alt">
          <div className="flex flex-col gap-4 max-w-sm">
            <span className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tighter text-text-alt">{site.brand}<span className="text-accent-alt">.</span></span>
            <p className="text-sm leading-relaxed text-text-alt/60">
              Exploring the intersection of agentic workflows, software architecture, and the future of human-AI collaboration.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-alt/40 pt-2">
              &copy; {new Date().getFullYear()} / Articles & Insights
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Navigate</span>
              <div className="flex flex-col gap-3">
                <a href="/" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Home</a>
                <a href="/" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Portfolio</a>
                <a href="https://instagram.com/qorvode.ai" target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Instagram</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Source</span>
              <div className="flex flex-col gap-3">
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">GitHub</a>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Repository</a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[9px] font-mono text-text-alt/30 uppercase tracking-[0.15em] text-center mt-8">
          {site.terminalPrompt}
        </p>
      </div>
    </footer>
  );
};

const ArticlesPage = () => {
  const { scrollYProgress } = useScroll();
  const [activeArticle, setActiveArticle] = useState('');

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
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-text-alt text-text">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <ArticleHero />
        <FeaturedArticles articles={articles} />
        <ArticleIndex articles={articles} activeArticle={activeArticle} />
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArticlesPage />
  </React.StrictMode>,
);
