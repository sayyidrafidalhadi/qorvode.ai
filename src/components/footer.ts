import { site } from '../data/site';

function getHijriYear(): number {
  const now = new Date();
  const gregorianYear = now.getFullYear();
  const hijriOffset = Math.floor((gregorianYear - 622) * (33/32));
  const now2 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const muharram1 = new Date(gregorianYear, 7, 19);
  if (now2 >= muharram1) {
    return hijriOffset + 1;
  }
  return hijriOffset;
}

export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const year = new Date().getFullYear();
  const hijriYear = getHijriYear();

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="f-logo">${site.brand}</div>
      <div class="f-links">
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="${site.github}" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-spotify"></i>
        </a>
        <a href="mailto:sayyid@qorvode.co.in">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
    <p class="f-copy">© ${year} · <span>${hijriYear} AH</span> ${site.name} · All rights reserved</p>
    <button class="back-to-top" id="backToTop" title="Back to top">
      <i class="fas fa-arrow-up"></i>
    </button>
  `;

  initBackToTop();
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
