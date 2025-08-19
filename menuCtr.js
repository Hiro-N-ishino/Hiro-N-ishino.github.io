window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');

  // ページ読み込み時にメニューを閉じる
  if (menuToggle) {
    menuToggle.checked = false;
  }

  // メニュー外をクリックしたら閉じる
  document.addEventListener('click', (e) => {
    const isMenuClick = menuToggle.contains(e.target) ||
                        nav.contains(e.target) ||
                        e.target.classList.contains('menu-icon');

    if (!isMenuClick) {
      menuToggle.checked = false;
    }
  });
});
