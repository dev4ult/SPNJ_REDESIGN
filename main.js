const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navListStyle = getComputedStyle(navList);

navToggle.addEventListener('click', () => {
  if (navListStyle.display == 'none') {
    navList.style.display = 'flex';
    navToggle.style.transform = 'rotate(0deg)';
  } else {
    navList.style.display = 'none';
    navToggle.style.transform = 'rotate(180deg)';
  }
});
