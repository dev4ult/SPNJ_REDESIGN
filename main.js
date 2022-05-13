const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navListStyle = getComputedStyle(navList);

navToggle.addEventListener('click', () => {
  if (navListStyle.display == 'none') {
    navList.style.display = 'flex';
    navToggle.style.transform = 'rotate(0deg)';
  } else if (navListStyle.display == 'flex') {
    navList.style.display = 'none';
    navToggle.style.transform = 'rotate(180deg)';
  }
});

const arrowGoBack = document.querySelector('.back');
const arrowGoForward = document.querySelector('.forward');
const options = document.getElementsByClassName('option');
const divisionSlide = document.querySelectorAll('.division-slide');

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
    options[option].style.display = 'block';
    options[option + 1].style.display = 'none';
    Array.from(divisionSlide).forEach((slide) => (slide.style.transform = `translateX(calc(98vw * ${option}))`));
  } else if (option == 1) {
    arrowGoBack.style.display = 'flex';
    arrowGoForward.style.display = 'flex';
    options[option - 1].style.display = 'none';
    options[option].style.display = 'block';
    options[option + 1].style.display = 'none';
    Array.from(divisionSlide).forEach((slide) => (slide.style.transform = `translateX(calc(-98vw * ${option}))`));
  } else {
    arrowGoForward.style.display = 'none';
    options[option - 1].style.display = 'none';
    options[option].style.display = 'block';
    Array.from(divisionSlide).forEach((slide) => (slide.style.transform = `translateX(calc(-98vw * ${option}))`));
  }
}
