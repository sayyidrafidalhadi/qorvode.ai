import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/data/site";

const navItems = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#about", label: "About", id: "about" },
  { href: "/music.html", label: "Music" },
  { href: "/articles.html", label: "Insights" },
];

const menuSpring = { type: "spring" as const, stiffness: 260, damping: 26 };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      let current = "";
      for (const item of navItems) {
        if (!item.id) continue;
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const brandTop = site.brand.replace(/\.AI$/, "");

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      {/* scroll progress */}
      <div className="absolute inset-x-0 top-0 h-px bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center gap-3">
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-text"
          >
            <span className="block size-2.5 bg-accent" />
            <span>
              {brandTop}
              <span className="text-accent">.AI</span>
            </span>
          </motion.a>

          <nav className="ml-2 hidden items-center sm:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = item.id && active === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-1.5 font-mono text-sm whitespace-nowrap transition-colors duration-150 ${
                    isActive ? "text-accent" : "text-text/60 hover:text-text"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2.5">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-8 items-center rounded-md border border-border-alt px-3 font-mono text-[13px] text-text/70 transition-colors hover:border-border-strong hover:text-text sm:inline-flex"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="hidden h-8 items-center rounded-md bg-accent px-4 font-mono text-[13px] font-medium text-bg transition-colors hover:bg-[color-mix(in_oklch,var(--color-accent),white_14%)] sm:inline-flex"
            >
              Hire Me
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex size-9 flex-col items-center justify-center gap-[5px] sm:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-6 bg-text"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-6 bg-text"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-6 bg-text"
              />
            </button>
          </div>
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
            className="border-t border-border bg-bg/95 backdrop-blur-md sm:hidden"
          >
            <nav className="flex flex-col px-5 pb-8 pt-4" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-4 font-mono text-base text-text/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 items-center justify-center rounded-md bg-accent font-mono text-sm font-medium text-bg"
                >
                  Start a Project
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 items-center justify-center rounded-md border border-border-alt font-mono text-sm text-text/80"
                >
                  GitHub
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
