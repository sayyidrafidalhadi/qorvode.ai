import { motion } from "motion/react";

const FloatingWhatsApp = () => {
  const phoneNumber = "+919526755210";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Qorvode on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 sm:bottom-28 left-6 sm:left-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-accent text-text-alt brutal-border brutal-shadow flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsApp;
