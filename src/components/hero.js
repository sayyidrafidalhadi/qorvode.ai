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

      <div class="hero-layout">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="fade-up" style="--i:1">${heroData.headline.top}</span>
            <em class="fade-up" style="--i:2">${heroData.headline.bottom}</em>
            <span class="arabic-quote fade-up" style="--i:2">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
          </h1>

          <div class="role-toggle fade-up" style="--i:3">
            <button class="role-chip active" data-role="dev">&lt; Developer /&gt;</button>
            <button class="role-chip" data-role="vocal">♫ Vocalist</button>
          </div>

          <p class="hero-desc hero-desc-dev fade-up" style="--i:4">
            ${heroData.subheadline}
          </p>
          <p class="hero-desc hero-desc-vocal fade-up" style="--i:4; display: none;">
            Crafting soulful nasheeds that inspire and uplift. Blending tradition with modern vocals.
          </p>

          <div class="hero-actions fade-up" style="--i:5">
            <a href="#projects" class="btn-primary btn-dev">${heroData.ctaPrimary}</a>
            <a href="#releases" class="btn-primary btn-vocal" style="display: none;">Listen Now</a>
            <a href="#contact" class="btn-ghost btn-dev">${heroData.ctaSecondary}</a>
            <a href="#contact" class="btn-ghost btn-vocal" style="display: none;">Book Performance</a>
            <a href="#projects" class="btn-scroll">↓ Scroll to Work</a>
          </div>

          <div class="hero-trust fade-up" style="--i:6">
            <div class="trust-line"></div>
            <span>${heroData.trust}</span>
          </div>
        </div>

        <div class="hero-visual fade-up" style="--i:7">
          <div class="visual-split" id="visualSplit">
            <div class="visual-pane dev-pane">
              <div class="terminal">
                <div class="terminal-bar">
                  <div class="t-dots">
                    <span class="td td-red"></span>
                    <span class="td td-yellow"></span>
                    <span class="td td-green"></span>
                  </div>
                  <div class="t-title">${site.terminalPrompt.split('@')[1]}</div>
                </div>
                <div class="terminal-body">
                  <p class="t-cmd"><span class="t-prompt">${site.terminalPrompt}</span> ./accelerate_growth</p>
                  <div id="typing-container"></div>
                </div>
              </div>
            </div>
            <div class="visual-pane vocal-pane">
              <div class="vocal-card">
                <div class="arabic-text">اللهُ أَكْبَرُ</div>
                <div class="waveform"></div>
                <p style="margin-top: 1rem; color: var(--muted); font-size: 0.9rem;">Where devotion meets melody</p>
              </div>
            </div>
          </div>
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

  initRoleToggle();
}

function initRoleToggle() {
  const chips = document.querySelectorAll('.role-chip');
  const devElements = document.querySelectorAll('.btn-dev, .hero-desc-dev');
  const vocalElements = document.querySelectorAll('.btn-vocal, .hero-desc-vocal');
  const visualSplit = document.getElementById('visualSplit');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const role = chip.dataset.role;

      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      if (role === 'dev') {
        devElements.forEach(el => el.style.display = '');
        vocalElements.forEach(el => el.style.display = 'none');
        visualSplit.classList.remove('vocal-active');
      } else {
        devElements.forEach(el => el.style.display = 'none');
        vocalElements.forEach(el => el.style.display = '');
        visualSplit.classList.add('vocal-active');
      }
    });
  });
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
