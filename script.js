document.querySelectorAll('section').forEach(section => {
  section.addEventListener('click', () => {
    section.classList.toggle('expandir');
  });
});
