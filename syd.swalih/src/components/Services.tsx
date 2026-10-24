import { motion } from "motion/react";
import { profile, type ServiceEntry } from "@/data/profile";
import { accent } from "@/lib/accents";
import {
  VideoIcon,
  PlanIcon,
  ScissorsIcon,
  PhotoIcon,
  SparkleIcon,
  ArrowUpRightIcon,
} from "@/components/Icons";

const iconMap = {
  video: VideoIcon,
  plan: PlanIcon,
  editing: ScissorsIcon,
  photo: PhotoIcon,
  poster: SparkleIcon,
};

const Services = () => {
  return (
    <section id="services" className="bg-bg px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                What I do
              </span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.92] tracking-tighter text-text sm:text-6xl md:text-7xl">
              Services
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-text/55">
            From the first sketch to the final export — one creative partner across print,
            screen, and site.
          </p>
        </motion.div>

        <div className="border-t border-border">
          {profile.services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceRow = ({ service, index }: { service: ServiceEntry; index: number }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group border-b border-border"
    >
      <div className="grid grid-cols-[auto_1fr] items-start gap-5 py-8 transition-colors duration-300 sm:gap-8 sm:py-10 lg:grid-cols-[auto_auto_1fr_auto] lg:items-center">
        <span
          className={`font-mono text-[11px] font-bold tabular-nums tracking-[0.2em] text-text/30 transition-colors duration-300 ${accent.groupFill[service.accent]} group-hover:text-bg`}
        >
          {String(index).padStart(2, "0")}
        </span>

        <div
          className={`flex size-12 shrink-0 items-center justify-center bg-surface ${accent.text[service.accent]} brutal-border transition-all duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px] ${accent.groupFill[service.accent]} group-hover:text-bg [&_span]:text-current`}
        >
          <Icon size="m" />
        </div>

        <div className="lg:max-w-xl">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text/60 sm:text-base">
            {service.description}
          </p>
        </div>

        <span
          aria-hidden="true"
          className={`hidden text-text/20 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] ${accent.text[service.accent]} [&_span]:text-current lg:block`}
        >
          <ArrowUpRightIcon size="l" />
        </span>
      </div>
    </motion.div>
  );
};

export default Services;
