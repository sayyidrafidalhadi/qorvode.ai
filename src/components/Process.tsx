import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const Process = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Brief",
      subtitle: "Discovery",
      description: "We discuss your vision, goals, target audience, and brand aspirations to understand what success looks like for you."
    },
    {
      id: 2,
      title: "Research",
      subtitle: "Strategy",
      description: "I analyze your market, competitors, and audience to develop a strategic approach that positions you for growth."
    },
    {
      id: 3,
      title: "Design",
      subtitle: "Creative",
      description: "Bringing ideas to life with premium visuals, thoughtful user experience, and conversion-focused design elements."
    },
    {
      id: 4,
      title: "Delivery",
      subtitle: "Launch",
      description: "Your complete project delivered on time with all assets, files, and support to help you succeed."
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">How I Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
            The Process<br />
            <span className="text-accent italic font-serif normal-case">That Delivers.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
            A proven framework that turns your vision into a premium digital reality. No confusion, no delays — just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="relative p-6 sm:p-8 border border-white/[0.08] bg-white/[0.01] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display text-accent/20">
                  {String(step.id).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                  Step {step.id}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight mb-1">
                {step.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-4">
                {step.subtitle}
              </p>

              <p className="text-[12px] sm:text-sm leading-relaxed text-white/55 font-light">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
