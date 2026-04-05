import { site } from '../data/site.js';

export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="f-logo">${site.brand}</div>
      <div class="f-links">
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="${site.github}" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <p class="f-copy">© ${year} ${site.name} · All rights reserved</p>
  `;
}
