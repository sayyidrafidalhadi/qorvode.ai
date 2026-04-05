import { site } from '../data/site.js';

export function renderHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  hero.innerHTML = `
    <div class="hero-badge fade-up" style="--i:0">
      <span class="badge-dot"></span> Available for work · ${site.availableYear}
    </div>
    <div class="hero-layout">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="fade-up" style="--i:1">Crafting</span>
          <em class="fade-up" style="--i:2">fluid digital</em>
          <span class="fade-up" style="--i:3">experiences</span>
        </h1>
        <p class="hero-desc fade-up" style="--i:4">Developer &amp; Vocalist — operating at the edge of mobile and web innovation. Code by day, audio by night.</p>
        <div class="hero-actions fade-up" style="--i:5">
          <a href="#projects" class="btn-primary">View Work</a>
          <a href="#releases" class="btn-ghost"><i class="fas fa-play"></i> Listen</a>
        </div>
      </div>
      <div class="terminal-wrap fade-up" style="--i:6">
        <div class="terminal">
          <div class="terminal-bar">
            <div class="t-dots">
              <span class="td td-red"></span>
              <span class="td td-yellow"></span>
              <span class="td td-green"></span>
            </div>
            <span class="t-title">deploy_stack.sh</span>
          </div>
          <div class="terminal-body">
            <p class="t-cmd"><span class="t-prompt">${site.terminalPrompt}</span> ./deploy</p>
            <div id="typing-container"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <span>scroll</span>
      <div class="scroll-bar"></div>
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
