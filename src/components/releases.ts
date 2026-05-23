import { releases, type Release } from '../data/releases';

function buildStreamLinks(links: Release['links']) {
  return links.map(link => `
    <a href="${link.url}" target="_blank" class="rb ${link.platform}" rel="noopener noreferrer">
      <i class="${link.icon}"></i> ${link.label}
    </a>
  `).join('');
}

function buildCard(release: Release) {
  return `
    <div class="release-card">
      <div class="vinyl">
        <div class="vinyl-disc">
          <div class="vinyl-label"><span>${release.label}</span></div>
        </div>
      </div>
      <div class="release-info">
        <span class="release-year">${release.year}</span>
        <h3>${release.title}</h3>
        <p class="release-arabic">${release.arabic}</p>
        <p class="release-credit">${release.credit}</p>
        <div class="release-btns">
          ${buildStreamLinks(release.links)}
        </div>
      </div>
    </div>
  `;
}

export function renderReleases() {
  const grid = document.getElementById('releases-grid');
  if (!grid) return;
  grid.innerHTML = releases.map(buildCard).join('');
}
