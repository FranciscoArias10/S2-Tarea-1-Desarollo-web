export const initSkills = () => {
  const filterBtns = document.querySelectorAll('.skill-filters .filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  if (!filterBtns.length || !skillItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      skillItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.classList.add('hidden');
          }, 300);
        }
      });
    });
  });
};
