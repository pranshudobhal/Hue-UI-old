const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const sidenav = document.getElementById('mySidenav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    sidenav.style.width = '250px';
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    sidenav.style.width = '0';
    showMenu = false;
  }
}
