const menuBtn = document.querySelector('button.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');
const menuOps = document.querySelector('.page-header__wrapper');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  menuBtn.classList.toggle('main-nav__active');
  menu.classList.toggle('main-nav--close');
  menuOps.classList.toggle('page-header__wrapper--opacity');
})
