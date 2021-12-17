const nav = document.querySelector('.js-nav');
const hamburgerBtn = document.querySelector('.js-hamburger-btn');
const details = document.querySelectorAll('.js-detail');
const sections = document.querySelectorAll('.js-section');

// Section observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -400px 0px',
};

const appearOnScroll = function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('section--is-visible');
    details.forEach((detail, i) =>
      setTimeout(
        () => detail.classList.add('detail--is-visible'),
        (i + 3) * 100
      )
    );

    appearOnScroll.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(appearOnScroll, observerOptions);

sections.forEach((section) => observer.observe(section));

// Event callback
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
