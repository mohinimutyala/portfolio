// script.js - shared for all pages

// 1) Highlight active nav-link based on current page filename
(function highlightNav() {
  const links = document.querySelectorAll('.nav-link');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === current) a.classList.add('active');
    else a.classList.remove('active');
  });
})();

// 2) Certificate modal (on certifications.html)
(function certModal() {
  const modal = document.getElementById('certModal');
  if (!modal) return; // only run on certifications page
  const certButtons = document.querySelectorAll('.cert-open');
  const certImg = document.getElementById('certImg');
  const certCaption = document.getElementById('certCaption');
  const closeBtn = document.getElementById('modalClose');

  certButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-img');
      const caption = btn.innerText.trim();
      certImg.src = src;
      certImg.alt = caption;
      certCaption.textContent = caption;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    certImg.src = '';
    certCaption.textContent = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
})();

// 3) Contact form: EmailJS integration (only on contact.html)
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Initialize EmailJS (use your existing user id)
  if (window.emailjs && typeof emailjs.init === 'function') {
    try { emailjs.init('Po4FXEHTafrKPyAaA'); } catch (e) { /* ignore */ }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // service ID and template ID as you used earlier
    const serviceID = 'service_94tvd8d';
    const templateID = 'template_wukv5rc';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('✅ Message sent successfully!');
        form.reset();
      }, (err) => {
        console.error('EmailJS error:', err);
        alert('❌ Failed to send message. Please try again later.');
      });
  });
})();
