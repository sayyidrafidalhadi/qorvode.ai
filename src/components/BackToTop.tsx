import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] transition-all cursor-pointer"
      title="Back to top"
    >
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-bg rotate-[-90deg]" />
    </motion.button>
  );
};

export default BackToTop;
