import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { site } from './data/site';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import AmoledBackground from './components/AnimeEditBackground';

interface LegalSection {
  title: string;
  description: string;
  sections: string[][];
}

const legalData: Record<string, LegalSection> = {
  '/privacy.html': {
    title: 'Privacy Policy',
    description: 'Privacy policy for QORVODE portfolio website.',
    sections: [
      ['1. Introduction', 'Welcome to the portfolio of Sayyid Rafid Al Hadi (QORVODE). This Privacy Policy outlines how your personal information is collected, used, and protected when you visit this website and use the contact forms.'],
      ['2. Information We Collect', 'We only collect information that you voluntarily provide when submitting the contact form: name, email address, and message content.'],
      ['3. How We Use Your Information', 'Information is used strictly to respond to inquiries, discuss project requirements, and maintain professional communication records.'],
      ['4. Third-Party Services', 'This site uses EmailJS to route form messages securely to our inbox without exposing a backend server.'],
      ['5. Data Sharing and Security', 'Your personal data and project details are never sold or shared with third-party marketers. We use standard communication security practices.'],
      ['6. Your Rights', 'You may request deletion of your submitted communication data at any time by contacting us.'],
    ],
  },
  '/terms.html': {
    title: 'Terms of Service',
    description: 'Terms governing the use of QORVODE portfolio website.',
    sections: [
      ['1. Acceptance of Terms', 'By accessing and using this website, you agree to these terms.'],
      ['2. Intellectual Property Rights', 'All original code, design assets, and music releases are protected intellectual property unless explicitly stated otherwise.'],
      ['3. User Conduct', 'You agree not to submit spam, unlawful content, or malicious payloads via the contact form.'],
      ['4. Disclaimer', 'The website is provided as-is without guarantees of uninterrupted availability.'],
      ['5. Limitation of Liability', 'We are not liable for direct or indirect damages resulting from website use.'],
      ['6. Governing Law', 'These terms are governed by the applicable laws of Kerala, India.'],
    ],
  },
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 sm:px-8 lg:px-12 py-5 flex justify-between items-center bg-bg-alt/90 backdrop-blur-md border-b-[3px] border-accent-alt">
      <a href="/" className="text-xl font-display font-bold uppercase tracking-tighter text-text-alt hover:text-accent-alt transition-colors">
        {site.brand}.
      </a>
    </nav>
  );
};

function LegalPage() {
  const path = window.location.pathname.toLowerCase();
  const page = legalData[path] || legalData['/privacy.html'];

  React.useEffect(() => {
    document.title = `${page.title} | ${site.brand}`;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute('content', page.description);
  }, [page]);

  return (
    <div className="bg-bg-alt min-h-screen selection:bg-accent-alt selection:text-bg-alt text-text-alt">
      <AmoledBackground />
      <Navbar />
      <main className="pt-36 sm:pt-40 pb-24 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <motion.a
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-alt/50 hover:text-accent-alt transition-colors mb-10 sm:mb-14"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Base
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          <div className="bg-surface-alt brutal-border-alt p-8 sm:p-12 lg:p-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text-alt mb-6">
              {page.title}
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/60 block mb-12">
              Effective Date: February 25, 2024
            </span>

            <div className="space-y-12">
              {page.sections.map(([title, text]) => (
                <section key={title}>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-accent-alt mb-3">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-alt/60 leading-relaxed font-light">
                    {text}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t-[3px] border-accent-alt">
              <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-accent-alt mb-3">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-text-alt/60 leading-relaxed font-light">
                Email: {site.email}
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <footer className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-t-[3px] border-accent-alt text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-alt/30">
          &copy; {new Date().getFullYear()} {site.brand} &middot; Compliance Dept.
        </p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LegalPage />
  </React.StrictMode>,
);
