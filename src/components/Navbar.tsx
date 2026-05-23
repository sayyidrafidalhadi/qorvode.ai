import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Instagram } from "lucide-react";
import { site } from "@/data/site";

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
            <Github size={16} />
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
            <Instagram size={16} />
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

export default Navbar;
