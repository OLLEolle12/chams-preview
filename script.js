// Toggle buttons on click
document.querySelectorAll('.feature-item').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
  });
});
