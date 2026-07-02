import { motion } from "motion/react";
import { ChartIcon, BriefcaseIcon, ShieldIcon, CheckIcon } from "@/components/Icons";

interface Metric {
  value: string;
  label: string;
  description: string;
}

const SocialProof = () => {
  const metrics: Metric[] = [
    { value: "25+", label: "Premium Projects", description: "Delivered with measurable outcomes" },
    { value: "3x", label: "Faster Systems", description: "Launch timelines that compete" },
    { value: "40%", label: "Avg. Increase", description: "In inquiry quality post-launch" },
    { value: "98%", label: "On-Time Delivery", description: "Projects delivered as promised" }
  ];

  const trustSignals = [
    "Founders & Entrepreneurs",
    "Healthcare & Wellness",
    "Islamic Brands",
    "Personal Brands",
    "Premium Positioning",
    "Authority-First Design"
  ];

  const icons = [BriefcaseIcon, ChartIcon, ShieldIcon, CheckIcon];

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-bg-alt border-t-[3px] border-accent-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {metrics.map((metric, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-accent-alt tracking-tight block">
                  {metric.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-alt/50 block mt-3">
                  {metric.label}
                </span>
                <span className="text-xs text-text-alt/50 block mt-1">
                  {metric.description}
                </span>
                <div className="mt-4">
                  <Icon size="l" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t-[3px] border-accent-alt"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-alt/50">
              Trusted by brands in
            </span>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-text-alt/60 px-3 py-2 brutal-border-alt hover:bg-accent-alt/10 transition-colors cursor-default"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
