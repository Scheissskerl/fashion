const links = document.querySelectorAll('.menu-link');

links.forEach(links => {
  links.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    links.classList.add('active');
  })
});