(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  // Align the delivered email subject with the visitor's subject field.
  const collaborationForm = document.getElementById('collaboration-form');
  if (collaborationForm) {
    collaborationForm.addEventListener('submit', () => {
      const subject = document.getElementById('collab-subject').value.trim();
      const destination = document.getElementById('form-email-subject');
      destination.value = subject ? `Academic website: ${subject.slice(0, 140)}` : 'New collaboration inquiry from academic website';
    });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
