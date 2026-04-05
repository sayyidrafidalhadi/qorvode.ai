// =============================================
// LEGAL PAGES ENTRY — privacy.html & terms.html
// =============================================
import './styles/main.css';

import { site } from './data/site.js';

// ----- Render Navbar -----
function renderLegalNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="/" class="logo">${site.brand}</a>
      <ul class="nav-links">
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#releases">Music</a></li>
        <li><a href="/#arsenal">Arsenal</a></li>
        <li><a href="/#contact" class="nav-cta">Let's Talk</a></li>
      </ul>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
        <span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="/#projects" class="mm-link">Projects</a>
      <a href="/#releases" class="mm-link">Music</a>
      <a href="/#arsenal" class="mm-link">Arsenal</a>
      <a href="/#contact" class="mm-link">Let's Talk</a>
    </div>
  `;

  // Always show scrolled style on legal pages
  nav.classList.add('scrolled');

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;
  menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    const spans = menuToggle.querySelectorAll('span');
    if (menuOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.transform = 'translateY(-0px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    }
  });
}

// ----- Render Footer -----
function renderLegalFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div class="footer-inner">
      <a href="/" class="f-logo">${site.brand}</a>
      <div class="f-links">
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
        <a href="${site.github}" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <p class="f-copy">© ${year} ${site.name} · All rights reserved</p>
  `;
}

renderLegalNavbar();
renderLegalFooter();
