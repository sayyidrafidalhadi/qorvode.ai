import { faq, type FaqItem } from '../data/faq';

function buildItem(item: FaqItem, idx: number) {
  return `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false" id="faq-btn-${idx}">
        ${item.question} <i class="fas fa-plus"></i>
      </button>
      <div class="faq-a" role="region" aria-labelledby="faq-btn-${idx}">
        <p>${item.answer}</p>
      </div>
    </div>
  `;
}

export function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = faq.map(buildItem).join('');
}

export function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement!;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-q')!.setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
