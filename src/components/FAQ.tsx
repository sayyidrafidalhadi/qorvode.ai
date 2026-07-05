import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faq } from "@/data/faq";

const iconBase = "text-accent-alt";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={`${iconBase} shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className={`border-b border-accent-alt/20 ${open ? "" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-display font-bold uppercase tracking-tight text-text-alt group-hover:text-accent-alt transition-colors duration-200">
          {question}
        </span>
        <PlusIcon open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 sm:pb-6 pr-10">
              <p className="text-sm sm:text-base text-text-alt/60 leading-relaxed font-light">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-32 sm:py-48 px-5 sm:px-8 lg:px-12 bg-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-alt" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt block mb-4">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text-alt">
            Frequently Asked<br />
            <span className="text-accent-alt italic font-serif normal-case">Questions.</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text-alt/60 font-serif italic border-l-[3px] border-accent-alt pl-6 mt-6">
            Quick answers to the most common things people ask me about.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faq.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t-[3px] border-accent-alt"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-sm text-text-alt/60">
              Still have questions? I&apos;m always open to a conversation.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-accent-alt text-bg-alt font-bold text-[10px] uppercase tracking-[0.2em] brutal-border brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
            >
              Ask Me Anything
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
