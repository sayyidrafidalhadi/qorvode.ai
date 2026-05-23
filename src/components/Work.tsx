import { motion } from "motion/react";
import { projects } from "@/data/projects";

interface CaseStudy {
  id: number;
  brand: string;
  problem: string;
  approach: string;
  result: string;
  metric: string;
  timeline: string;
  tags: string[];
  status: string;
}

const Work = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 0,
      brand: "Elvora Creative",
      problem: "Digital design studio needing immersive portfolio with luxury aesthetic and 3D interactions",
      approach: "Premium dark-themed UI with smooth animations and 3D interactive layout",
      result: "Luxury-inspired design portfolio showcasing creative excellence",
      metric: "100+ design inquiries/month",
      timeline: "Delivered in 3 weeks",
      tags: ["React", "3D", "Premium Design", "UI/UX"],
      status: "Live"
    },
    {
      id: 1,
      brand: "Kithademic Studies",
      problem: "Islamic & academic excellence platform lacking modern digital presence and user trust",
      approach: "Premium rebranding with performance-first architecture and authority-focused design system",
      result: "Modern educational platform built to inspire trust and knowledge transfer",
      metric: "35% increase in enrollments",
      timeline: "Delivered in 3 weeks",
      tags: ["Next.js", "Education", "Islamic", "Platform"],
      status: "Live"
    },
    {
      id: 2,
      brand: "KPS Ayurveda Clinic",
      problem: "Traditional wellness clinic invisible to digital audiences seeking authentic holistic care",
      approach: "Clean, elegant digital presence communicating authenticity and trust",
      result: "Professional web presence attracting wellness seekers",
      metric: "40% increase in bookings",
      timeline: "Delivered in 2 weeks",
      tags: ["Web", "Healthcare", "UI/UX"],
      status: "Live"
    },
    {
      id: 3,
      brand: "HalalTune",
      problem: "Islamic music streaming need with poor accessibility and no offline capability",
      approach: "Progressive Web App with Firebase backend, Cloudinary CDN, and offline-first architecture",
      result: "Full-featured PWA with offline playback, playlists, and admin dashboard",
      metric: "5,000+ active users",
      timeline: "Delivered in 4 weeks",
      tags: ["PWA", "Firebase", "Audio", "Cloudinary"],
      status: "Beta"
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display uppercase leading-[0.88] tracking-tighter">
              Work That<br />
              <span className="text-accent italic font-serif normal-case">Builds Authority.</span>
            </h2>
            <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/60 font-serif italic border-l border-accent/20 pl-6">
              Not projects — business transformations. Each system engineered to solve specific problems and deliver measurable results for premium brands.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.2, 0, 0, 1] }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-12 lg:gap-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-accent/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">{study.status}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">
                      {study.brand}
                    </h3>
                    <p className="text-[13px] sm:text-sm leading-relaxed text-white/55 font-light">
                      {study.problem}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent/50 block mb-2">Strategy</span>
                      <p className="text-[12px] sm:text-sm text-white/50 leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent/50 block mb-2">Result</span>
                      <p className="text-[12px] sm:text-sm text-white/50 leading-relaxed">{study.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{study.metric}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">{study.timeline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10 text-white/60 group-hover:text-white/60 group-hover:border-accent/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-sm bg-white/[0.02] border border-white/5 group-hover:border-accent/30 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 block mb-2">Project Preview</span>
                      <span className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white/10">{study.brand}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-700" />

                  <a
                    href={projects.find(p => p.title === study.brand)?.url || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 px-5 sm:px-6 py-3 bg-white text-bg text-[9px] uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight mb-4">
                Ready to build your <span className="text-accent italic font-serif normal-case">transformation</span>?
              </h3>
              <p className="text-[13px] sm:text-sm text-white/60 leading-relaxed">
                Let's discuss how we can solve your specific business challenges through premium digital experience.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 sm:px-12 py-5 bg-accent text-bg font-semibold text-[10px] uppercase tracking-[0.25em] hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)] transition-all"
            >
              Start Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
