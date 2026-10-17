import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpIcon } from "@/components/Icons";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-accent-alt text-bg-alt brutal-border-alt brutal-shadow-alt flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300 cursor-pointer"
    >
      <ArrowUpIcon size="m" />
    </motion.button>
  );
};

export default BackToTop;
