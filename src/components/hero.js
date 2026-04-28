import { site } from '../data/site.js';

export function renderHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const { hero: heroData } = site;

  hero.innerHTML = `
    <div class="hero-container">
      <div class="hero-badge fade-up" style="--i:0">
        <span class="badge-dot"></span> ${heroData.badge}
      </div>
      
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="fade-up" style="--i:1">${heroData.headline.top}</span>
          <em class="fade-up" style="--i:2">${heroData.headline.bottom}</em>
        </h1>
        
        <p class="hero-subheadline fade-up" style="--i:3">
          ${heroData.subheadline}
        </p>
        
        <div class="hero-actions fade-up" style="--i:4">
          <a href="#projects" class="btn-primary">${heroData.ctaPrimary}</a>
          <a href="#contact" class="btn-secondary">${heroData.ctaSecondary}</a>
        </div>

        <div class="hero-trust fade-up" style="--i:5">
          <div class="trust-line"></div>
          <span>${heroData.trust}</span>
        </div>
      </div>

      <div class="hero-visual fade-up" style="--i:6">
        <div class="terminal-container">
          <div class="terminal-premium">
            <div class="terminal-header">
              <div class="t-controls">
                <span></span><span></span><span></span>
              </div>
              <div class="t-tab">${site.terminalPrompt.split('@')[1]}</div>
            </div>
            <div class="terminal-window">
              <p class="t-input"><span class="t-prompt">${site.terminalPrompt}</span> ./accelerate_growth</p>
              <div id="typing-container"></div>
            </div>
          </div>
          <div class="visual-glow"></div>
        </div>
      </div>
    </div>
    
    <div class="hero-scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="scroll-text">DISCOVER MORE</div>
    </div>
  `;
}

export function startTypingAnimation() {
  const lines = site.terminalLines ?? [];
  const container = document.getElementById('typing-container');
  let lineIdx = 0;

  function typeLine() {
    if (!container || lineIdx >= lines.length) {
      if (container && container.lastChild) {
        container.lastChild.classList.add('typing-cursor');
      }
      return;
    }
    const p = document.createElement('p');
    if (lineIdx === lines.length - 1) p.classList.add('t-success');
    container.appendChild(p);

    const text = lines[lineIdx];
    let charIdx = 0;
    const interval = setInterval(() => {
      p.textContent = text.slice(0, ++charIdx);
      if (charIdx === text.length) {
        clearInterval(interval);
        lineIdx++;
        setTimeout(typeLine, 600);
      }
    }, 42);
  }

  setTimeout(typeLine, 1200);
}
