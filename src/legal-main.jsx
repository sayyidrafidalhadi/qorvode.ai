import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { site } from './data/site.js';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import AmoledBackground from './components/AnimeEditBackground.jsx';

const legalData = {
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
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-bg/80 backdrop-blur-md border-b border-white/10">
        <a href="/" className="text-xl font-display uppercase tracking-tighter cursor-pointer">
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
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-white text-white">
      <AmoledBackground />
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 hover:text-accent transition-all mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Base
        </a>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-12 glass"
        >
          <h1 className="text-5xl md:text-7xl font-display uppercase leading-none mb-12">{page.title}</h1>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-12">Effective Date: February 25, 2024</span>
          
          <div className="space-y-12">
            {page.sections.map(([title, text]) => (
                <section key={title}>
                <h3 className="text-2xl font-display uppercase mb-4 text-accent">{title}</h3>
                <p className="text-lg opacity-60 leading-relaxed font-light">{text}</p>
                </section>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-display uppercase mb-4">Contact Information</h3>
            <p className="text-lg opacity-60">Email: {site.email}</p>
          </div>
        </motion.div>
      </main>
      <footer className="py-24 px-6 border-t border-white/10 text-center opacity-30 text-[10px] uppercase tracking-widest">
         © {new Date().getFullYear()} {site.brand} · Compliance Dept.
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalPage />
  </React.StrictMode>,
);
