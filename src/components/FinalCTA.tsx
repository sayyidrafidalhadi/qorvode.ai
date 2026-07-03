import { useState, useRef, useMemo, FormEvent } from "react";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { MailIcon } from "@/components/Icons";

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
    <section id="contact" className="py-32 sm:py-48 px-5 sm:px-8 lg:px-12 bg-bg-alt border-t-[3px] border-accent-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt block mb-4 sm:mb-6">Project Discovery</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text-alt">
                Where Serious<br />
                <span className="text-accent-alt italic font-serif normal-case">Projects Begin.</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-text-alt/60 max-w-lg">
              Every premium project begins with strategy. Share your vision and let's explore how we can build digital authority that commands premium positioning.
            </p>

            <div className="pt-6 sm:pt-8 border-t-[3px] border-accent-alt/20 space-y-4">
              <p className="text-xs text-text-alt/55 leading-relaxed">
                <span className="text-accent-alt/70 font-bold uppercase tracking-[0.1em]">Limited projects:</span> Only a select number of projects taken monthly to ensure premium execution quality.
              </p>
              <p className="text-xs text-text-alt/55 leading-relaxed">
                <span className="text-accent-alt/70 font-bold uppercase tracking-[0.1em]">Response:</span> Within 24 hours. Strategic call to discuss your project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 brutal-border-alt bg-surface-alt" onSubmit={submitForm} ref={formRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Full Name</label>
                  <input required name="from_name" className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors text-sm text-text-alt placeholder:text-text-alt/40" placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Brand / Business</label>
                  <input required name="brand_name" className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors text-sm text-text-alt placeholder:text-text-alt/40" placeholder="Your brand or business" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Email Address</label>
                <input required name="from_email" type="email" className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors text-sm text-text-alt placeholder:text-text-alt/40" placeholder="Professional email" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Website (Optional)</label>
                <input name="website_url" className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors text-sm text-text-alt placeholder:text-text-alt/40" placeholder="Current website if any" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Project Type</label>
                  <select required name="project_type" className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors text-sm text-text-alt">
                    <option className="bg-bg-alt" value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option className="bg-bg-alt" key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Budget Range</label>
                  <select required name="budget_range" className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors text-sm text-text-alt">
                    <option className="bg-bg-alt" value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option className="bg-bg-alt" key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/60">Project Vision</label>
                <textarea required name="project_vision" rows={3} className="bg-transparent border-[3px] border-text-alt/10 px-3 py-2.5 outline-none focus:border-accent-alt transition-colors resize-none text-sm text-text-alt placeholder:text-text-alt/40" placeholder="Describe your project goals and vision..." />
              </div>

              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <button
                type="submit"
                disabled={state === 'sending'}
                className="mt-2 bg-accent-alt text-bg-alt font-bold uppercase py-4 text-[10px] tracking-[0.2em] brutal-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300 disabled:opacity-50"
              >
                {label}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-10 border-t-[3px] border-accent-alt/20">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 p-8 sm:p-10 brutal-border-alt bg-surface-alt">
            <div className="flex flex-col gap-4 max-w-sm">
              <span className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tighter text-text-alt">{site.brand}<span className="text-accent-alt">.</span></span>
              <p className="text-sm leading-relaxed text-text-alt/60">
                Crafting premium digital experiences that blend technical excellence with creative storytelling.
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-alt/40 pt-2">
                © {new Date().getFullYear()} / {getHijriYear()} AH
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Navigation</span>
                <div className="flex flex-col gap-3">
                  <a href="#work" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Work</a>
                  <a href="#about" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">About</a>
                  <a href="/articles.html" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Insights</a>
                  <a href="#contact" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Contact</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Connect</span>
                <div className="flex flex-col gap-3">
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">GitHub</a>
                  <a href="https://instagram.com/qorvode.ai" target="_blank" rel="noopener noreferrer" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Instagram</a>
                  <a href={`mailto:${site.email}`} className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium"><MailIcon size="sm" /> Email</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">Legal</span>
                <div className="flex flex-col gap-3">
                  <a href="/privacy.html" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Privacy Policy</a>
                  <a href="/terms.html" className="text-xs text-text-alt/50 hover:text-accent-alt transition-colors font-medium">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[9px] font-mono text-text-alt/30 uppercase tracking-[0.15em] text-center mt-8">
            {site.terminalPrompt}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
