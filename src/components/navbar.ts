import { site } from '../data/site';

export function renderNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav-inner">
      <div class="logo">${site.brand}</div>
      <ul class="nav-links">
        <li><a href="#projects" data-section="projects">Projects</a></li>
        <li><a href="music.html" data-section="releases">Music</a></li>
        <li><a href="#arsenal" data-section="arsenal">Arsenal</a></li>
        <li><a href="#contact" class="nav-cta" data-section="contact">Let's Talk</a></li>
      </ul>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
        <span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#projects" class="mm-link" data-section="projects">Projects</a>
      <a href="music.html" class="mm-link">Music</a>
      <a href="#arsenal" class="mm-link" data-section="arsenal">Arsenal</a>
      <a href="#contact" class="mm-link" data-section="contact">Let's Talk</a>
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar')!;
  const mobileMenu = document.getElementById('mobileMenu')!;
  const menuToggle = document.getElementById('menuToggle')!;
  let menuOpen = false;

  function updateScrollProgress() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / docHeight) * 100;
    navbar.style.setProperty('--scroll-progress', `${Math.min(progress, 100)}%`);
    navbar.style.setProperty('--progress', `${Math.min(progress, 100)}%`);
  }

  const style = document.createElement('style');
  style.textContent = `
    #navbar::before {
      width: var(--progress, 0%);
    }
  `;
  document.head.appendChild(style);

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateScrollProgress();
  }, { passive: true });

  const sections = ['projects', 'releases', 'arsenal', 'contact'];
  const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('[data-section]').forEach(el => {
          el.classList.toggle('active', (el as HTMLElement).dataset.section === id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observers.observe(el);
  });

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

  document.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuToggle.querySelectorAll('span').forEach(s => s.style.transform = '');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
      const href = this.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  updateScrollProgress();
}
