// =============================================
// Contact Form — EmailJS integration
// =============================================

export function initContactForm() {
  if (typeof emailjs === 'undefined') return;

  emailjs.init('2PZEMjOl54g2tl_3A');

  const form = document.getElementById('contact-form');
  const btn = document.getElementById('submit-btn');

  if (!form || !btn) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = 'Transmitting… <i class="fas fa-spinner fa-spin"></i>';

    emailjs.sendForm('service_8gjk955', 'template_6m3iq3j', form)
      .then(() => {
        btn.innerHTML = 'Transmitted ✓ <i class="fas fa-check"></i>';
        btn.style.background = '#1a6b2a';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = 'Send Transmission <i class="fas fa-paper-plane"></i>';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      })
      .catch(() => {
        btn.innerHTML = 'Error — Retry <i class="fas fa-redo"></i>';
        btn.style.background = '#6b1a1a';
        setTimeout(() => {
          btn.innerHTML = 'Send Transmission <i class="fas fa-paper-plane"></i>';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      });
  });
}
