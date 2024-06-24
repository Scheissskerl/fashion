let intervalId;

document.querySelectorAll('.cards-right__btn').forEach(e => {
  e.addEventListener('click', e => {
    const menu = e.currentTarget.dataset.path;
    document.querySelectorAll('.cards-right__sub-menu').forEach(e => {
      if (!document.querySelector(`[data-target = ${menu}]`).classList.contains('open')) {
        e.classList.remove('cards-right__sub-menu--active'); // чтобы при открытии другого меню закрывалось
        e.classList.remove('open');// чтобы при открытии другого меню закрывалось
        document.querySelector(`[data-target = ${menu}]`).classList.add('cards-right__sub-menu--active');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target = ${menu}]`).classList.add('open');
        }, 0);
      }
      if (document.querySelector(`[data-target = ${menu}]`).classList.contains('open')) {
        clearTimeout(intervalId);
        document.querySelector(`[data-target = ${menu}]`).classList.remove('cards-right__sub-menu--active');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target = ${menu}]`).classList.remove('open');
        }, 0)
      }
    });
  });
});
