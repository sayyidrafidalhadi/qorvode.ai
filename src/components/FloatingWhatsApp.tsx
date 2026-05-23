import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "+919526755210";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 sm:bottom-28 left-6 sm:left-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] transition-all"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-bg" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
