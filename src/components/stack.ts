import { site } from '../data/site';

export function renderStackStrip() {
  const el = document.getElementById('stack-strip');
  if (!el) return;

  const icons = site.stack.map(s =>
    `<span title="${s.title}"><i class="${s.icon}"></i></span>`
  ).join('');

  el.innerHTML = `
    <span class="strip-label">Stack</span>
    <div class="stack-icons">${icons}</div>
  `;
}
