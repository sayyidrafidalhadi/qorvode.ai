import { motion } from "motion/react";

interface Niche {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Niches = () => {
  const niches: Niche[] = [
    {
      id: 1,
      title: "Perfume & Fragrance Brands",
      description: "Luxury scent retailers and brands that need premium digital presence to match their product quality.",
      icon: "✨"
    },
    {
      id: 2,
      title: "Small Businesses",
      description: "Local businesses ready to level up their digital game and compete with bigger brands.",
      icon: "🏪"
    },
    {
      id: 3,
      title: "Islamic Brands",
      description: "Halal businesses, Islamic education platforms, and faith-centered brands seeking modern digital identity.",
      icon: "☪"
    },
    {
      id: 4,
      title: "Luxury Products",
      description: "Premium brands demanding sophisticated design that commands premium pricing.",
      icon: "💎"
    }
  ];

  return (
    <section id="niches" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Specialization</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
            Industries<br />
            <span className="text-accent italic font-serif normal-case">I Serve.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
            Focused expertise in industries where premium positioning makes all the difference. I understand the nuances that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="group p-8 sm:p-10 lg:p-12 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl sm:text-4xl">{niche.icon}</span>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
                    {niche.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm leading-relaxed text-white/55 font-light">
                    {niche.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-[13px] sm:text-sm text-white/60 font-light">
              Ready to elevate your industry presence?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-4 border border-white/15 hover:border-accent/50 hover:bg-white/[0.02] text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Niches;
