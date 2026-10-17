import { motion } from "motion/react";
import { profile } from "@/data/profile";
import Counter from "@/components/motion/Counter";
import { ChartIcon } from "@/components/Icons";

const Metrics = () => {
  return (
    <section className="bg-bg-alt border-y-[3px] border-border-alt px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Key metrics
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold uppercase leading-[1.02] tracking-tight text-text sm:text-4xl md:text-5xl">
            Numbers that
            <span className="font-serif normal-case italic text-accent"> hold up.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {profile.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col bg-surface-alt p-6 brutal-border-alt shadow-[5px_5px_0px_var(--color-border)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <ChartIcon size="sm" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <Counter
                value={metric.value}
                className="text-4xl font-display font-bold tracking-tight text-accent sm:text-5xl"
              />
              <span className="mt-3 font-display text-sm font-semibold tracking-tight text-text">
                {metric.label}
              </span>
              <p className="mt-3 flex-1 border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-text/50">
                {metric.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
