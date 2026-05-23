import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: number;
  image?: string;
  imageAlt?: string;
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

interface ImageData {
  src: string;
  alt: string;
}

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      image: "https://res.cloudinary.com/detke30vn/image/upload/v1777441930/20260425_142352_kkaqqd.jpg",
      imageAlt: "Graphic Design - Design That Speaks",
      title: "Design That Speaks",
      tagline: "Graphic Design",
      description: "Creative visuals that build trust, attract attention, and make your brand unforgettable.",
      outcome: "Memorable first impressions that last."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/detke30vn/image/upload/v1777441716/file_000000006b6c71fa8ef28b08d120644d_ut0hs0.png",
      imageAlt: "Website Development - Websites That Convert",
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
    <section id="services" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">What I Offer</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
              Services That<br />
              <span className="text-accent italic font-serif normal-case">Drive Growth.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
              I build digital experiences designed to attract, engage, and convert your target audience into loyal customers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="group relative p-0 sm:p-0 lg:p-0 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {service.image && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                </div>
              )}

              <div className="space-y-4 sm:space-y-5 p-6 sm:p-8 lg:p-10">
                <span className="text-[9px] uppercase tracking-[0.4em] text-accent/60 font-medium">
                  {String(i + 1).padStart(2, '0')} — {service.tagline}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-[13px] sm:text-sm leading-relaxed text-white/55 font-light group-hover:text-white/50 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="pt-4 mt-4 border-t border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent/50 font-medium">
                    {service.outcome}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 text-accent" />
              </motion.div>
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
              Ready to elevate your brand?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-4 border border-white/15 hover:border-accent/50 hover:bg-white/[0.02] text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-accent transition-colors"
              >
                <ArrowRight className="w-6 h-6 rotate-[45deg]" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-sm border border-white/10"
              />

              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/60 mt-4">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/[0.06]"
      >
        <div className="mb-12 sm:mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block mb-6">Investment</span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight">
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
              className="p-6 sm:p-8 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <h4 className="text-lg sm:text-xl font-display uppercase tracking-tight mb-2">{pkg.name}</h4>
              <p className="text-2xl sm:text-3xl text-accent font-display mb-4">{pkg.price}</p>
              <ul className="space-y-2">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="text-[11px] sm:text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
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
