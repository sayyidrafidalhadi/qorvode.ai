import { motion } from "motion/react";
import TestimonialsCard from "./TestimonialsCard";

interface TestimonialItem {
  id: number;
  description: string;
  author: string;
  role: string;
}

const Testimonials = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      description: "Our bookings increased within 2 weeks after launch. The brand finally felt premium enough for high-value clients. The transformation was immediate.",
      author: "Wellness Brand Founder",
      role: "Healthcare · South Asia"
    },
    {
      id: 2,
      description: "Professional execution from day one. Delivered ahead of schedule with zero revisions needed. The platform exceeded expectations.",
      author: "EdTech Director",
      role: "Education · Middle East"
    },
    {
      id: 3,
      description: "Finally, a developer who understands premium positioning. Our PWA transformed how our community accesses Islamic music.",
      author: "Platform Co-Founder",
      role: "Islamic Audio · Global"
    }
  ];

  return (
    <section id="testimonials" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-16 sm:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Client Success</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
            Trusted by<br />
            <span className="text-accent italic font-serif normal-case">Serious Brands.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
            Real results. Real trust. Every project engineered to deliver measurable business outcomes for clients who expect more.
          </p>
        </motion.div>

        <TestimonialsCard
          items={testimonials}
          showNavigation={true}
          showCounter={true}
          autoPlay={true}
          autoPlayInterval={6000}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-[13px] sm:text-sm text-white/60">
              Ready to join the list of successful transformations?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 sm:px-12 py-5 bg-accent text-bg font-semibold text-[10px] uppercase tracking-[0.25em] hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)] transition-all"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
