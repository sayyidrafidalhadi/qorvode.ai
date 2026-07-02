import { motion } from "motion/react";
import { PerfumeIcon, StoreIcon, CrescentIcon, DiamondIcon } from "@/components/Icons";

interface Niche {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Niches = () => {
  const niches: Niche[] = [
    {
      id: 1,
      title: "Perfume & Fragrance Brands",
      description: "Luxury scent retailers and brands that need premium digital presence to match their product quality.",
      icon: <PerfumeIcon size="xl" />
    },
    {
      id: 2,
      title: "Small Businesses",
      description: "Local businesses ready to level up their digital game and compete with bigger brands.",
      icon: <StoreIcon size="xl" />
    },
    {
      id: 3,
      title: "Islamic Brands",
      description: "Halal businesses, Islamic education platforms, and faith-centered brands seeking modern digital identity.",
      icon: <CrescentIcon size="xl" />
    },
    {
      id: 4,
      title: "Luxury Products",
      description: "Premium brands demanding sophisticated design that commands premium pricing.",
      icon: <DiamondIcon size="xl" />
    }
  ];

  return (
    <section id="niches" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent block">Specialization</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text">
            Industries<br />
            <span className="text-accent italic font-serif normal-case">I Serve.</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text/60 font-serif italic border-l-[3px] border-accent pl-6 mt-6">
            Focused expertise in industries where premium positioning makes all the difference. I understand the nuances that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="group p-6 sm:p-8 lg:p-10 brutal-border bg-surface hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 mt-1">{niche.icon}</div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-text group-hover:text-accent transition-colors duration-300">
                    {niche.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text/60">
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
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t-[3px] border-accent"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-sm text-text/60">
              Ready to elevate your industry presence?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 border-[3px] border-accent text-text font-bold text-[10px] uppercase tracking-[0.2em] brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Niches;
