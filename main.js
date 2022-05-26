const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navListStyle = getComputedStyle(navList);
const divNavigation = document.querySelector('.division-navigation');

navToggle.addEventListener('click', () => {
  if (navListStyle.display == 'none') {
    navList.style.display = 'flex';
    navToggle.style.transform = 'rotate(0deg)';
    divNavigation.style.opacity = '0';
  } else if (navListStyle.display == 'flex') {
    navList.style.display = 'none';
    navToggle.style.transform = 'rotate(180deg)';
    divNavigation.style.opacity = '1';
  }
});

const arrowGoBack = document.querySelector('.arrow-back');
const arrowGoForward = document.querySelector('.arrow-forward');
const options = document.getElementsByClassName('option');
const divSlide = document.querySelectorAll('.division-section .slide');

let option = 0;

arrowGoBack.addEventListener('click', () => {
  option--;
  optionBehaviour();
});

arrowGoForward.addEventListener('click', () => {
  option++;
  optionBehaviour();
});

function optionBehaviour() {
  if (option == 0) {
    arrowGoBack.style.display = 'none';
    options[option].style.display = 'flex';
    options[option + 1].style.display = 'none';
    Array.from(divSlide).forEach((slide) => (slide.style.transform = `translateX(calc(100vw * ${option}))`));
  } else if (option == 1) {
    arrowGoBack.style.display = 'flex';
    arrowGoForward.style.display = 'flex';
    options[option - 1].style.display = 'none';
    options[option].style.display = 'flex';
    options[option + 1].style.display = 'none';
    Array.from(divSlide).forEach((slide) => (slide.style.transform = `translateX(calc(-100vw * ${option}))`));
  } else {
    arrowGoForward.style.display = 'none';
    options[option - 1].style.display = 'none';
    options[option].style.display = 'flex';
    Array.from(divSlide).forEach((slide) => (slide.style.transform = `translateX(calc(-100vw * ${option}))`));
  }
}

const questionTextarea = document.getElementById('question');

questionTextarea.addEventListener('mouseenter', (_) => {
  questionTextarea.rows = 5;
});

questionTextarea.addEventListener('mouseleave', (_) => {
  questionTextarea.rows = 1;
});
