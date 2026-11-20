// Academic website interactions: accessible mobile navigation and publication filters.
const menuButton = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');
if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
    primaryNav.classList.toggle('is-open', !expanded);
  });
  primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      primaryNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      menuButton.focus();
    }
  });
}

const filterButtons = [...document.querySelectorAll('.filter')];
const publications = [...document.querySelectorAll('.publication')];
const searchBox = document.querySelector('#pub-search');
const resultsCount = document.querySelector('#results-count');
const emptyResults = document.querySelector('#empty-results');
let selectedFilter = 'all';
function updatePublications() {
  const query = (searchBox?.value || '').trim().toLocaleLowerCase();
  let shown = 0;
  publications.forEach(pub => {
    const categoryMatch = selectedFilter === 'all' || pub.dataset.category === selectedFilter;
    const queryMatch = !query || `${pub.dataset.search} ${pub.textContent}`.toLocaleLowerCase().includes(query);
    const visible = categoryMatch && queryMatch;
    pub.hidden = !visible;
    if (visible) shown++;
  });
  if (resultsCount) resultsCount.textContent = `Showing ${shown} selected publication${shown === 1 ? '' : 's'}`;
  if (emptyResults) emptyResults.hidden = shown !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  selectedFilter = button.dataset.filter;
  filterButtons.forEach(other => {
    const selected = other === button;
    other.classList.toggle('is-active', selected);
    other.setAttribute('aria-pressed', String(selected));
  });
  updatePublications();
}));
searchBox?.addEventListener('input', updatePublications);
updatePublications();
const currentYear = document.querySelector('#year');
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
