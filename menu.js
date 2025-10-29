const burger = document.querySelector('#burger');
const navLinks = document.getElementById('nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // ouvre/ferme le menu
    burger.classList.toggle('toggle');   // animation des 3 traits
  });
}
