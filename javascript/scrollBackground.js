window.addEventListener('scroll', () => {
  const yOffset = window.scrollY;
  document.body.style.backgroundPosition = `0 ${yOffset * 0.3}px`;
});
