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

// Accessible learning image viewer. Unenhanced links still open original PNG.
(() => {
  const dialog = document.getElementById('figure-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const large = document.getElementById('figure-lightbox-image');
  const title = document.getElementById('figure-lightbox-title');
  const closeButton = dialog.querySelector('.figure-lightbox-close');
  const viewport = dialog.querySelector('.figure-lightbox-viewport');
  const zoomButton = dialog.querySelector('.figure-lightbox-zoom');
  const original = dialog.querySelector('.figure-lightbox-original');
  let lastTrigger = null;
  const zoom = (expanded) => {
    viewport.classList.toggle('is-zoomed', expanded);
    zoomButton.setAttribute('aria-pressed', String(expanded));
    zoomButton.textContent = expanded ? 'Fit to screen' : 'Zoom to 100%';
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  };
  document.querySelectorAll('a[data-figure-full]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      lastTrigger = link;
      large.src = link.dataset.figureFull;
      large.alt = link.querySelector('img')?.alt || 'Learning infographic';
      title.textContent = link.dataset.figureTitle || 'Learning diagram';
      original.href = link.dataset.figureFull;
      zoom(false);
      dialog.showModal();
      closeButton.focus();
    });
  });
  zoomButton.addEventListener('click', () => zoom(!viewport.classList.contains('is-zoomed')));
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { lastTrigger?.focus(); });
})();
