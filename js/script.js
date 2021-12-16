const nav = document.querySelector('.js-nav');
const hamburgerBtn = document.querySelector('.js-hamburger-btn');

hamburgerBtn.addEventListener('click', () => {
  if (!nav.classList.contains('nav--is-open')) {
    nav.classList.add('nav--is-open');
    document.body.classList.add('is-fixed');
    hamburgerBtn.setAttribute('aria-expanded', true);
    hamburgerBtn.firstElementChild.src = '../images/icon-close.svg';
  } else {
    nav.classList.remove('nav--is-open');
    document.body.classList.remove('is-fixed');
    hamburgerBtn.setAttribute('aria-expanded', false);
    hamburgerBtn.firstElementChild.src = '../images/icon-hamburger.svg';
  }
});
