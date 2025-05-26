document.querySelectorAll('.feature-item, .nav-button, .sidebar ul li').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.transition = 'transform 0.2s ease';
  });
});
