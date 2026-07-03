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
    <section id="testimonials" className="py-32 sm:py-48 px-5 sm:px-8 lg:px-12 bg-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-alt" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt block mb-4">Client Success</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text-alt">
            Trusted by<br />
            <span className="text-accent-alt italic font-serif normal-case">Serious Brands.</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text-alt/60 font-serif italic border-l-[3px] border-accent-alt pl-6 mt-6">
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
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t-[3px] border-accent-alt"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-sm text-text-alt/60">
              Ready to join the list of successful transformations?
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-accent-alt text-bg-alt font-bold text-[10px] uppercase tracking-[0.2em] brutal-border brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
              aria-label="Start your project inquiry"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
