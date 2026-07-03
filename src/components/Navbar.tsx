import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/data/site";

const navItems = [
  { href: "/articles.html", label: "Insights" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const menuSpring = { type: "spring" as const, stiffness: 260, damping: 24 };

export default function Navbar() {
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
}
