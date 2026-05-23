import { projects, type Project } from '../data/projects';

function buildCard(project: Project) {
  const wideClass = project.wide ? ' project-wide' : '';
  const statusClass = project.statusType === 'beta' ? ' pc-beta' : '';
  const tags = project.tags.map(t => `<span>${t}</span>`).join('');

  return `
    <div class="project-card${wideClass}">
      <div class="pc-top">
        <span class="pc-status${statusClass}">${project.status}</span>
        <a href="${project.url}" target="_blank" class="pc-link" rel="noopener noreferrer">
          <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="pc-tags">${tags}</div>
      <div class="pc-num">0${project.id}</div>
    </div>
  `;
}

export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(buildCard).join('');
}
