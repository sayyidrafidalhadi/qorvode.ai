// =============================================
// MAIN ENTRY — orchestrates all components
// =============================================
import './styles/main.css';

import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderHero, startTypingAnimation } from './components/hero.js';
import { renderStackStrip } from './components/stack.js';
import { renderProjects } from './components/projects.js';
import { renderReleases } from './components/releases.js';
import { renderArsenal } from './components/arsenal.js';
import { renderFaq, initFaq } from './components/faq.js';
import { renderFooter } from './components/footer.js';
import { initScrollReveal } from './scripts/scroll-reveal.js';
import { initContactForm } from './scripts/contact-form.js';

// 1. Render all DOM sections from data
renderNavbar();
renderHero();
renderStackStrip();
renderProjects();
renderReleases();
renderArsenal();
renderFaq();
renderFooter();

// 2. Initialize interactive behaviours (after DOM is built)
initNavbar();
startTypingAnimation();
initFaq();
initScrollReveal();
initContactForm();
