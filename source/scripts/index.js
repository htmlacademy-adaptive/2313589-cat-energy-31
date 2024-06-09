/* в этот файл добавляет скрипты*/
//menu
const navigation = document.querySelector('.navigation');
const navList = document.querySelector('.site-list');
const navToggle = document.querySelector('.navigation__toggle');
const navClue = document.querySelector('.navigation__open');

navList.classList.remove('site-list--nojs');
navToggle.classList.remove('navigation__toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navList.classList.contains('site-list--closed')) {
    navList.classList.remove('site-list--closed');
    navToggle.classList.add('navigation__toggle--closed');
    navClue.textContent = 'Закрыть меню.';
  } else {
    navList.classList.add('site-list--closed');
    navToggle.classList.remove('navigation__toggle--closed');
    navClue.textContent = 'Открыть меню.';
  }
});

navList.style.top = `${navigation.offsetHeight }px`;

window.addEventListener('resize', () => {
  navList.style.top = `${navigation.offsetHeight }px`;
});

//map
const wrapper = document.querySelector('.invite__map');
const image = document.querySelector('.invite__map-image');

image.classList.remove('invite__map-image--nojs');
wrapper.classList.remove('invite__map--nojs');
