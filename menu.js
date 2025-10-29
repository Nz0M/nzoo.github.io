const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle'); // animation burger
    nav.classList.toggle('active');    // affiche/masque menu mobile
  });
}
