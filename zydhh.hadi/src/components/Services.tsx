import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { ArrowRightIcon } from "@/components/Icons";

const Services = () => {
  return (
    <section
      id="services"
      className="border-y-[3px] border-border-alt bg-bg-alt px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
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
              Services &amp; offerings
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold uppercase leading-[1.02] tracking-tight text-text sm:text-4xl md:text-5xl">
            Work with
            <span className="font-serif normal-case italic text-accent"> intent.</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-text/60 sm:text-base">
            Engagements start from these packages — scope is tailored per project. Every build ships
            with responsive layouts, accessibility, and visual polish as baseline, not upgrade.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {profile.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col bg-surface-alt p-6 brutal-border-alt shadow-[5px_5px_0px_var(--color-border)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:p-8"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text/60">{service.desc}</p>

              <span className="mt-6 font-display text-3xl font-bold tracking-tight text-accent">
                {service.price}
              </span>

              <ul className="mt-6 flex-1 space-y-2 border-t border-border pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 font-mono text-[11px] leading-relaxed text-text/55">
                    <span className="text-accent" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`Enquiry — ${service.title}`)}`}
                className="mt-6 inline-flex items-center justify-between gap-3 bg-bg px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-text brutal-border transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Enquire <ArrowRightIcon size="sm" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
