import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { site } from './data/site.js';

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

function LegalPage() {
  const path = window.location.pathname.toLowerCase();
  const page = legalData[path] || legalData['/privacy.html'];
  document.title = `${page.title} | ${site.brand}`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', page.description);

  return (
    <div className="app-shell legal-mode">
      <header className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">{site.brand}</a>
          <nav className="nav-links" aria-label="Primary">
            <a href="/#projects">Projects</a>
            <a href="/#releases">Music</a>
            <a href="/articles.html">Articles</a>
            <a href="/#contact" className="nav-cta">Let&apos;s Talk</a>
          </nav>
        </div>
      </header>
      <main className="legal-page container">
        <a href="/" className="legal-back">Return to Base</a>
        <article className="legal-card">
          <h1>{page.title}</h1>
          <span className="legal-effective">Effective Date: February 25, 2026</span>
          {page.sections.map(([title, text]) => (
            <section key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </section>
          ))}
          <h3>Contact Information</h3>
          <p>Email: {site.email}</p>
        </article>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="/" className="f-logo">{site.brand}</a>
          <div className="f-links">
            <a href="/articles.html">Articles</a>
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href={site.github} aria-label="Visit GitHub profile" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalPage />
  </React.StrictMode>,
);
