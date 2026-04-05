import { arsenal } from '../data/arsenal.js';

function buildCard(item) {
  return `
    <div class="arsenal-card">
      <i class="${item.icon}"></i>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `;
}

export function renderArsenal() {
  const grid = document.getElementById('arsenal-grid');
  if (!grid) return;
  grid.innerHTML = arsenal.map(buildCard).join('');
}
