import { motion } from "motion/react";

const Marquee = () => {
  const items = ["Digital Authority", "Premium Design", "Strategic Development", "Conversion Focus", "Bespoke Solutions", "Brand Upgrade"];
  return (
    <div className="py-8 sm:py-16 border-y-[3px] border-accent-alt bg-bg-alt overflow-hidden">
      <div className="flex whitespace-nowrap">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12"
          >
            {items.map((text) => (
              <div key={text} className="flex items-center gap-16 sm:gap-24">
                <span className="text-lg sm:text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-text-alt/20">{text}</span>
                <span className="w-2 h-2 bg-accent-alt/40" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
