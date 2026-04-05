// =============================================
// Scroll Reveal — observe elements, add .visible
// =============================================

export function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.project-card, .release-card, .arsenal-card, .section-title, .section-head, .faq-list, .contact-wrap, .quote-divider'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.08}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}
