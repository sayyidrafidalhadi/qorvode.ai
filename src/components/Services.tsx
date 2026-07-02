import { motion } from "motion/react";
import { CheckIcon } from "@/components/Icons";

interface ServiceItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  outcome: string;
}

interface PackageItem {
  name: string;
  price: string;
  features: string[];
}

const Services = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Design That Speaks",
      tagline: "Graphic Design",
      description: "Creative visuals that build trust, attract attention, and make your brand unforgettable.",
      outcome: "Memorable first impressions that last."
    },
    {
      id: 2,
      title: "Websites That Convert",
      tagline: "Website Development",
      description: "Modern, fast websites built to grow your business and turn visitors into customers.",
      outcome: "Growth-focused digital presence that sells."
    },
    {
      id: 3,
      title: "Brand Identity Systems",
      tagline: "Complete Visual Authority",
      description: "Cohesive visual identity systems that position your brand as an industry leader. From digital presence to full brand guidelines.",
      outcome: "Memorable. Distinguished. Dominant."
    },
    {
      id: 4,
      title: "Creative Direction",
      tagline: "Art Direction for Digital",
      description: "Strategic creative direction that elevates your brand above competitors. Visual storytelling that builds emotional authority.",
      outcome: "Brand presence that resonates and retains."
    }
  ];

  const packages: PackageItem[] = [
    { name: "Logo Design", price: "₹999", features: ["Custom Logo Concepts", "Multiple Revisions", "Source Files", "Usage Guide"] },
    { name: "Social Media", price: "₹1,499", features: ["Post Designs", "Story Templates", "Highlight Covers", "3 Formats"] },
    { name: "Website", price: "₹6,999", features: ["Responsive Design", "CMS Setup", "Basic SEO", "Contact Form"] },
    { name: "Full Branding", price: "₹14,999", features: ["Complete Identity", "Brand Guidelines", "All Assets", "Stationery Design"] }
  ];

  return (
    <section id="services" className="py-32 sm:py-48 px-5 sm:px-8 lg:px-12 bg-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent block mb-4">What I Offer</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text">
              Services That<br />
              <span className="text-accent italic font-serif normal-case">Drive Growth.</span>
            </h2>
            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text/60 font-serif italic border-l-[3px] border-accent pl-6 mt-6">
              I build digital experiences designed to attract, engage, and convert your target audience into loyal customers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="group brutal-border bg-surface p-6 sm:p-8 hover:bg-accent/5 transition-all duration-300"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent/60">
                {String(i + 1).padStart(2, '0')} — {service.tagline}
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-text mt-3 mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-text/60">
                {service.description}
              </p>

              <div className="pt-4 mt-6 border-t-[3px] border-accent">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {service.outcome}
                </p>
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
              Ready to elevate your brand?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 border-[3px] border-accent text-text font-bold text-[10px] uppercase tracking-[0.2em] brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t-[3px] border-accent"
      >
        <div className="mb-12 sm:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent block mb-4">Investment</span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold uppercase tracking-tight text-text">
            Service Packages
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="p-6 sm:p-8 brutal-border bg-surface hover:bg-accent/5 transition-all duration-300"
            >
              <h4 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-text mb-2">{pkg.name}</h4>
              <p className="text-2xl sm:text-3xl text-accent font-display font-bold mb-4">{pkg.price}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="text-sm text-text/60 flex items-center gap-3">
                    <CheckIcon size="sm" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
