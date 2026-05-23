import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Insight {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const LatestArticles = () => {
  const insights: Insight[] = [
    {
      id: 1,
      category: "Strategy",
      title: "Why Premium Brands Lose Trust With Cheap UI",
      excerpt: "The hidden cost of templates and generic design systems on high-ticket client perception and conversion rates.",
      readTime: "4 min"
    },
    {
      id: 2,
      category: "Conversion",
      title: "Conversion Psychology Behind High-Ticket Websites",
      excerpt: "Strategic UX decisions that command premium pricing and increase inquiry quality by 40%.",
      readTime: "6 min"
    },
    {
      id: 3,
      category: "Identity",
      title: "Building Digital Authority Through Design Systems",
      excerpt: "How premium brands maintain consistent authority across every digital touchpoint.",
      readTime: "5 min"
    }
  ];

  return (
    <section id="insights" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block mb-4">The Insights</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display uppercase leading-[0.9] tracking-tighter">
              Strategic<br />
              <span className="text-accent italic font-serif normal-case">Intelligence.</span>
            </h2>
          </div>
          <a
            href="/articles.html"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 hover:text-accent hover:gap-6 transition-all duration-500 py-4"
          >
            Archive <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {insights.map((insight, i) => (
            <motion.a
              key={insight.id}
              href={`/articles.html#${insight.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col p-8 sm:p-10 border border-white/[0.06] hover:border-accent/30 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] uppercase tracking-[0.25em] text-accent/50">{insight.category}</span>
                <span className="text-[9px] text-white/50">{insight.readTime} read</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display uppercase leading-tight mb-4 group-hover:text-accent transition-colors duration-500 tracking-tight">
                {insight.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-white/60 font-light flex-grow mb-6">
                {insight.excerpt}
              </p>

              <div className="pt-4 mt-auto border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 group-hover:text-accent transition-colors">Read Insight</span>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-[13px] sm:text-sm text-white/60">
              Insights for brands that think beyond templates.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-4 bg-accent text-bg font-semibold text-[10px] uppercase tracking-[0.25em] transition-all"
            >
              Work With Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestArticles;
