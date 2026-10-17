import { motion } from "motion/react";
import { caseStudies, projects } from "@/data/projects";
import { ExternalIcon } from "@/components/Icons";
import ScrambleText from "@/components/motion/ScrambleText";
import TiltCard from "@/components/motion/TiltCard";

const Work = () => {
  return (
    <section id="work" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent block mb-4">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text">
              <ScrambleText text="Work That" />
              <br />
              <ScrambleText text="Builds Authority." className="text-accent italic font-serif normal-case" />
            </h2>
            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text/60 font-serif italic border-l-[3px] border-accent pl-6 mt-6">
              Not projects — business transformations. Each system engineered to solve specific problems and deliver measurable results for premium brands.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((study, i) => {
            const project = projects.find((p) => p.title === study.brand);
            return (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.2, 0, 0, 1] }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-16">
                <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-text/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 bg-accent text-bg">{study.status}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-text mb-3 group-hover:text-accent transition-colors duration-500">
                      {study.brand}
                    </h3>
                    <p className="text-sm leading-relaxed text-text/60">
                      {study.problem}
                    </p>
                  </div>

                  {study.curated && (
                    <div className="rounded-r-lg border-l-2 border-accent bg-surface/60 p-5 sm:p-6">
                      <span className="mb-3 block font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-accent">
                        {study.curated.eyebrow}
                      </span>
                      <h4 className="mb-3 font-display text-lg font-bold tracking-tight text-text sm:text-xl">
                        {study.curated.title}
                      </h4>
                      <div className="space-y-3">
                        {study.curated.paragraphs.map((para) => (
                          <p key={para} className="text-sm leading-relaxed text-text/60">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent block mb-2">Strategy</span>
                      <p className="text-sm text-text/50 leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent block mb-2">Result</span>
                      <p className="text-sm text-text/50 leading-relaxed">{study.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">{study.metric}</span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-text/50">{study.timeline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 brutal-border text-text/60 group-hover:border-accent transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <TiltCard className="order-1 lg:order-2 w-full rounded-2xl" max={8}>
                  <div className="group/media relative aspect-[16/10] lg:aspect-[4/3] brutal-border bg-surface overflow-hidden">
                  {project?.image && (
                    <img
                      src={project.image}
                      alt={`${study.brand} website preview`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/media:scale-[1.04]"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-bg via-bg/35 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <span className="font-display text-lg font-bold tracking-tight text-text sm:text-xl">
                      {study.brand}
                    </span>
                    <a
                      href={project?.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-mono text-[11px] font-medium text-bg [&_span]:text-current transition-colors duration-150 hover:bg-[color-mix(in_oklch,var(--color-accent),white_14%)]"
                      aria-label={`Visit ${study.brand} website`}
                    >
                      Visit Site <ExternalIcon size="sm" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                </TiltCard>
              </div>
            </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t-[3px] border-accent"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold uppercase tracking-tight text-text mb-4">
                Ready to build your <span className="text-accent italic font-serif normal-case">transformation</span>?
              </h3>
              <p className="text-sm text-text/60 leading-relaxed">
                Let's discuss how we can solve your specific business challenges through premium digital experience.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-accent text-bg font-bold text-[10px] uppercase tracking-[0.2em] brutal-border-alt brutal-shadow-lg-alt hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300"
              aria-label="Start a conversation about your project"
            >
              Start Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
