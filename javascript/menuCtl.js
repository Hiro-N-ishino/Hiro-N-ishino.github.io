window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle) {
    menuToggle.checked = false;
  }

  document.addEventListener('click', (e) => {
    const isMenuClick = menuToggle.contains(e.target) ||
                        nav.contains(e.target) ||
                        e.target.classList.contains('menu-icon');

    if (!isMenuClick) {
      menuToggle.checked = false;
    }
  });
});

window.addEventListener('pageshow', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.checked = false;
  }
});
