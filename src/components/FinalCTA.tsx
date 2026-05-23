import { useState, useRef, useMemo, FormEvent } from "react";
import { motion } from "motion/react";
import { site } from "@/data/site";

function getHijriYear(): number {
  const now = new Date();
  const gregorianYear = now.getFullYear();
  const hijriOffset = Math.floor((gregorianYear - 622) * (33 / 32));
  return hijriOffset;
}

const FinalCTA = () => {
  const [state, setState] = useState<'idle' | 'sending' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const phoneNumber = "+919526755210";

  const label = useMemo(() => {
    if (state === 'success') return 'Opening WhatsApp...';
    return 'Submit via WhatsApp';
  }, [state]);

  function submitForm(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current || state === 'sending') return;

    const data = new FormData(formRef.current);
    const name = data.get('from_name') || '';
    const brand = data.get('brand_name') || '';
    const email = data.get('from_email') || '';
    const website = data.get('website_url') || '';
    const projectType = data.get('project_type') || '';
    const budget = data.get('budget_range') || '';
    const vision = data.get('project_vision') || '';

    const message = `*New Project Inquiry - QORVODE*\n\n*Name:* ${name}\n*Brand:* ${brand}\n*Email:* ${email}\n*Website:* ${website || 'N/A'}\n*Project Type:* ${projectType}\n*Budget:* ${budget}\n*Vision:* ${vision}`;

    setState('success');
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
    formRef.current.reset();
    setState('idle');
  }

  const projectTypes = [
    'Premium Brand Website',
    'Conversion-Focused Landing Page',
    'Authority-Building Personal Brand',
    'Luxury Visual Identity',
    'Creative Direction',
    'Strategic Consultation',
    'Digital Experience System'
  ];

  const budgetRanges = [
    '₹25K – ₹50K',
    '₹50K – ₹1L',
    '₹1L – ₹2L',
    '₹2L+ Premium Projects'
  ];

  return (
    <section id="contact" className="py-32 sm:py-48 px-5 sm:px-12 lg:px-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent block mb-4 sm:mb-6">Project Discovery</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display uppercase leading-[0.9] tracking-tighter">
                Where Serious<br />
                <span className="text-accent italic font-serif normal-case">Projects Begin.</span>
              </h2>
            </div>

            <p className="text-[14px] sm:text-base leading-relaxed text-white/45 max-w-lg">
              Every premium project begins with strategy. Share your vision and let's explore how we can build digital authority that commands premium positioning.
            </p>

            <div className="pt-6 sm:pt-8 border-t border-white/[0.06] space-y-4">
              <p className="text-[11px] text-white/55 leading-relaxed">
                <span className="text-accent/60">Limited projects:</span> Only a select number of projects taken monthly to ensure premium execution quality.
              </p>
              <p className="text-[11px] text-white/55 leading-relaxed">
                <span className="text-accent/60">Response:</span> Within 24 hours. Strategic call to discuss your project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-10 skeuo" onSubmit={submitForm} ref={formRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Full Name</label>
                  <input required name="from_name" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Brand / Business</label>
                  <input required name="brand_name" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Your brand or business" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Email Address</label>
                <input required name="from_email" type="email" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Professional email" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Website (Optional)</label>
                <input name="website_url" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light placeholder:text-white/60" placeholder="Current website if any" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Project Type</label>
                  <select required name="project_type" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light text-white/60 [&>option]:text-black">
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Budget Range</label>
                  <select required name="budget_range" className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors text-sm font-light text-white/60 [&>option]:text-black">
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.25em] text-white/60">Project Vision</label>
                <textarea required name="project_vision" rows={3} className="bg-transparent border-b border-white/[0.1] py-2.5 outline-none focus:border-accent transition-colors resize-none text-sm font-light placeholder:text-white/60" placeholder="Describe your project goals and vision..." />
              </div>

              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <button
                type="submit"
                disabled={state === 'sending'}
                className="mt-2 bg-accent text-bg font-semibold uppercase py-4 text-[10px] tracking-[0.2em] hover:shadow-[0_15px_30px_rgba(197,160,89,0.15)] transition-all disabled:opacity-50"
              >
                {label}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 p-8 sm:p-10 skeuo rounded-lg">
            <div className="flex flex-col gap-4 max-w-sm">
              <span className="text-2xl sm:text-3xl font-display uppercase tracking-tighter text-white/80">{site.brand}<span className="text-accent">.</span></span>
              <p className="text-[13px] leading-relaxed text-white/50">
                Crafting premium digital experiences that blend technical excellence with creative storytelling.
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 pt-2">
                © {new Date().getFullYear()} / {getHijriYear()} AH
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">Navigation</span>
                <div className="flex flex-col gap-3">
                  <a href="#work" className="text-[12px] text-white/50 hover:text-accent transition-colors">Work</a>
                  <a href="#about" className="text-[12px] text-white/50 hover:text-accent transition-colors">About</a>
                  <a href="/articles.html" className="text-[12px] text-white/50 hover:text-accent transition-colors">Insights</a>
                  <a href="#contact" className="text-[12px] text-white/50 hover:text-accent transition-colors">Contact</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">Connect</span>
                <div className="flex flex-col gap-3">
                  <a href={site.github} target="_blank" rel="noreferrer" className="text-[12px] text-white/50 hover:text-accent transition-colors">GitHub</a>
                  <a href="https://instagram.com/qorvode.ai" target="_blank" rel="noreferrer" className="text-[12px] text-white/50 hover:text-accent transition-colors">Instagram</a>
                  <a href={`mailto:${site.email}`} className="text-[12px] text-white/50 hover:text-accent transition-colors">Email</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">Legal</span>
                <div className="flex flex-col gap-3">
                  <a href="/privacy.html" className="text-[12px] text-white/50 hover:text-accent transition-colors">Privacy Policy</a>
                  <a href="/terms.html" className="text-[12px] text-white/50 hover:text-accent transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.15em] text-center mt-8">
            {site.terminalPrompt}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
