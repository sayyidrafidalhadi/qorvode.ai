import { site } from '../data/site.js';

export function renderNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav-inner">
      <div class="logo">${site.brand}</div>
      <ul class="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#releases">Music</a></li>
        <li><a href="#arsenal">Arsenal</a></li>
        <li><a href="#contact" class="nav-cta">Let's Talk</a></li>
      </ul>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
        <span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#projects" class="mm-link">Projects</a>
      <a href="#releases" class="mm-link">Music</a>
      <a href="#arsenal" class="mm-link">Arsenal</a>
      <a href="#contact" class="mm-link">Let's Talk</a>
    </div>
  `;
}

export function initNavbar() {
  // Scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

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

  // Close on mobile link click
  document.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuToggle.querySelectorAll('span').forEach(s => s.style.transform = '');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}
