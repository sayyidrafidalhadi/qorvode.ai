import { motion } from "motion/react";

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

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-display text-accent tracking-tight block">
                {metric.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 block mt-3">
                {metric.label}
              </span>
              <span className="text-[11px] text-white/50 block mt-1">
                {metric.description}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Trusted by brands in
            </span>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/60 px-3 py-2 border border-white/[0.08] hover:border-accent/30 hover:text-white/60 transition-colors cursor-default"
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
