import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/Icons";

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
    <section id="process" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt block mb-4">How I Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text-alt">
            The Process<br />
            <span className="text-accent-alt italic font-serif normal-case">That Delivers.</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text-alt/60 font-serif italic border-l-[3px] border-accent-alt pl-6 mt-6">
            A proven framework that turns your vision into a premium digital reality. No confusion, no delays — just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="relative p-6 sm:p-8 brutal-border-alt bg-surface-alt hover:bg-bg-alt transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-accent-alt/40">
                  {String(step.id).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/50">
                  Step {step.id}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-text-alt mb-1">
                {step.title}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/60 mb-4">
                {step.subtitle}
              </p>

              <p className="text-sm leading-relaxed text-text-alt/60">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 bg-bg-alt brutal-border-alt rounded-full w-6 h-6 items-center justify-center z-10">
                  <ArrowRightIcon size="sm" />
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
