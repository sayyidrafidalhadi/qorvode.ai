import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, X, Minimize2 } from "lucide-react";

interface KnowledgeEntry {
  keywords: string[];
  responses: string[];
}

interface HistoryItem {
  type: "input" | "output";
  content: string;
}

const knowledgeBase: Record<string, KnowledgeEntry> = {
  about: {
    keywords: ['who', 'whoami', 'about', 'yourself', 'introduce', 'background', 'name', 'developer', 'vocalist', 'sayyid'],
    responses: [
      "I'm Sayyid Rafid Al Hadi — a Full-Stack Developer & Vocalist based in South Asia.",
      "I build premium digital experiences for brands that refuse to be average. Plus I compose Islamic vocals.",
    ]
  },
  skills: {
    keywords: ['skills', 'stack', 'tech', 'technologies', 'know', 'expertise', 'tools', 'programming'],
    responses: [
      "Tech Stack: React, Next.js, Tailwind CSS, Vite, Three.js, Framer Motion, Firebase, Python, PHP",
      "Specialties: React 18 + Vite, Tailwind CSS v4, Three.js for 3D, Motion for animations, Firebase, PWA development",
    ]
  },
  services: {
    keywords: ['services', 'offer', 'do', 'build', 'create', 'design', 'pricing', 'price', 'packages'],
    responses: [
      "Services: Logo Design (₹999), Social Media Creatives (₹1,499), Website (₹6,999), Full Branding (₹14,999)",
      "I offer: Graphic Design, Website Development, Brand Identity Systems, Creative Direction",
    ]
  },
  projects: {
    keywords: ['projects', 'work', 'built', 'portfolio', 'case', 'studies', 'clients'],
    responses: [
      "Projects: Kithademic Studies (Islamic education platform), KPS Ayurveda Clinic, HalalTune (Islamic music PWA)",
      "Case Studies: Kithademic — 35% increase in enrollments | KPS Ayurveda — 40% increase in bookings | HalalTune — 5,000+ active users",
    ]
  },
  contact: {
    keywords: ['contact', 'reach', 'connect', 'whatsapp', 'email', 'instagram', 'message', 'hire'],
    responses: [
      "WhatsApp: +919526755210 | Email: qorvode.ai@gmail.com | Instagram: @qorvode",
    ]
  },
  niches: {
    keywords: ['niches', 'industries', 'specialize', 'serve', 'perfume', 'luxury', 'islamic', 'small'],
    responses: [
      "Industries I serve: Perfume & Fragrance Brands, Small Businesses, Islamic Brands, Luxury Products",
    ]
  },
  process: {
    keywords: ['process', 'how', 'work', 'steps', 'deliver', 'timeline', 'brief', 'research'],
    responses: [
      "Process: Brief → Research → Design → Delivery (typically 2-4 weeks per project)",
    ]
  },
  testimonials: {
    keywords: ['testimonials', 'reviews', 'clients', 'feedback', 'success', 'testimony'],
    responses: [
      "Client Success: '40% increase in premium inquiries' — Wellness Brand | 'Launched 2 weeks early' — EdTech | '5,000+ active users' — HalalTune",
    ]
  },
  help: {
    keywords: ['help', 'commands', 'ask', 'what', 'list', 'guide'],
    responses: [
      "Available commands: /about, /skills, /services, /projects, /contact, /niches, /process, /testimonials, /help",
    ]
  }
};

const TerminalContent = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", content: "Welcome to Qorvode AI Terminal" },
    { type: "output", content: "Type /help for available commands or ask me anything about Sayyid." }
  ]);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const findResponse = (query: string): string | null => {
    const q = query.toLowerCase().trim();

    if (!q) return "Please enter a command or question.";

    if (q === 'clear') {
      setHistory([{ type: "output", content: "Terminal cleared." }]);
      return null;
    }

    if (q === '/help') {
      return "Available commands:\n  /about   — Who I am\n  /skills  — Tech stack\n  /services — Services & pricing\n  /projects — My work\n  /contact — Get in touch\n  /niches  — Industries I serve\n  /process — How I work\n  /testimonials — Client reviews\n\nTip: Ask naturally like 'Who are you?' or 'What do you build?'";
    }

    if (q.startsWith('/')) {
      const cmd = q.slice(1);
      if (knowledgeBase[cmd]) {
        return knowledgeBase[cmd].responses[0];
      }
      return `Command '${q}' not found. Type /help for available commands.`;
    }

    for (const [, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(kw => q.includes(kw))) {
        return data.responses[Math.floor(Math.random() * data.responses.length)];
      }
    }

    return `I didn't understand that. Type /help for available commands or ask me about: services, projects, about me, contact info, etc.`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim();
    const response = findResponse(command);

    setHistory(prev => [
      ...prev,
      { type: "input", content: command },
      ...(response ? [{ type: "output", content: response }] : [])
    ]);

    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([{ type: "output", content: "Terminal cleared." }]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="absolute inset-0 bg-bg/95 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-[#000000] border border-white/10 rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Qorvode AI Terminal</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded transition-colors">
              <Minimize2 className="w-4 h-4 text-white/40" />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded transition-colors">
              <X className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>

        <div
          ref={outputRef}
          className="h-80 overflow-y-auto p-4 font-mono text-sm"
        >
          {history.map((item, i) => (
            <div key={i} className={item.type === "input" ? "mb-2" : "mb-4"}>
              {item.type === "input" ? (
                <div className="flex items-center gap-2">
                  <span className="text-accent">qorvode@ai:~$</span>
                  <span className="text-white/80">{item.content}</span>
                </div>
              ) : (
                <pre className="text-white/60 whitespace-pre-wrap leading-relaxed">{item.content}</pre>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-white/10">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02]">
            <span className="text-accent font-mono text-sm">qorvode@ai:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or question..."
              className="flex-1 bg-transparent outline-none text-white font-mono text-sm placeholder:text-white/20"
              autoFocus
            />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export const FloatingTerminal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 sm:bottom-8 left-6 sm:left-8 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] transition-all"
        title="AI Terminal"
      >
        <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-bg" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <TerminalContent onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export const TerminalSection = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", content: "Welcome to Qorvode AI Terminal" },
    { type: "output", content: "Type /help for available commands or ask me anything about Sayyid." }
  ]);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const findResponse = (query: string): string | null => {
    const q = query.toLowerCase().trim();

    if (!q) return "Please enter a command or question.";

    if (q === 'clear') {
      setHistory([{ type: "output", content: "Terminal cleared." }]);
      return null;
    }

    if (q === '/help') {
      return "Available commands:\n  /about   — Who I am\n  /skills  — Tech stack\n  /services — Services & pricing\n  /projects — My work\n  /contact — Get in touch\n  /niches  — Industries I serve\n  /process — How I work\n  /testimonials — Client reviews\n\nTip: Ask naturally like 'Who are you?' or 'What do you build?'";
    }

    if (q.startsWith('/')) {
      const cmd = q.slice(1);
      if (knowledgeBase[cmd]) {
        return knowledgeBase[cmd].responses[0];
      }
      return `Command '${q}' not found. Type /help for available commands.`;
    }

    for (const [, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(kw => q.includes(kw))) {
        return data.responses[Math.floor(Math.random() * data.responses.length)];
      }
    }

    return `I didn't understand that. Type /help for available commands or ask me about: services, projects, about me, contact info, etc.`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim();
    const response = findResponse(command);

    setHistory(prev => [
      ...prev,
      { type: "input", content: command },
      ...(response ? [{ type: "output", content: response }] : [])
    ]);

    setInput("");
  };

  return (
    <section id="terminal" className="py-32 sm:py-48 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mb-16 sm:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent block">Interactive</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] tracking-tighter">
            Ask Me<br />
            <span className="text-accent italic font-serif normal-case">Anything.</span>
          </h2>
          <p className="max-w-xl text-[14px] sm:text-base lg:text-lg font-light leading-relaxed text-white/40 font-serif italic border-l border-accent/20 pl-6">
            Curious about my work, services, or process? Open the terminal and ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#000000] border border-white/10 overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Qorvode AI Terminal</span>
            </div>
          </div>

          <div
            ref={outputRef}
            className="h-64 sm:h-80 overflow-y-auto p-4 font-mono text-sm"
          >
            {history.map((item, i) => (
              <div key={i} className={item.type === "input" ? "mb-2" : "mb-4"}>
                {item.type === "input" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-accent">qorvode@ai:~$</span>
                    <span className="text-white/80">{item.content}</span>
                  </div>
                ) : (
                  <pre className="text-white/60 whitespace-pre-wrap leading-relaxed">{item.content}</pre>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02]">
              <span className="text-accent font-mono text-sm">qorvode@ai:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command or question..."
                className="flex-1 bg-transparent outline-none text-white font-mono text-sm placeholder:text-white/20"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
