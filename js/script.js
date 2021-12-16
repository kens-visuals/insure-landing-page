const nav = document.querySelector('.js-nav');
const hamburgerBtn = document.querySelector('.js-hamburger-btn');

const toggleMenu = function () {
  if (!nav.classList.contains('nav--is-open')) {
    nav.classList.add('nav--is-open');
    document.body.classList.add('body--is-fixed');
    hamburgerBtn.setAttribute('aria-expanded', true);
    hamburgerBtn.firstElementChild.src = './images/icon-close.svg';
  } else {
    nav.classList.remove('nav--is-open');
    document.body.classList.remove('body--is-fixed');
    hamburgerBtn.setAttribute('aria-expanded', false);
    hamburgerBtn.firstElementChild.src = './images/icon-hamburger.svg';
  }
};

hamburgerBtn.addEventListener('click', toggleMenu);
