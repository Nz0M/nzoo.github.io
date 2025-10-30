const burger = document.getElementById('burger');
let navLinks = document.getElementById('nav-links');

// Création dynamique du menu fullscreen pour mobile si non présent
if(!navLinks){
  navLinks = document.createElement('div');
  navLinks.id = 'nav-links';
  navLinks.innerHTML = `
    <ul>
      <li><a href="index.html">WORK</a></li>
      <li><a href="pictures.html">PICTURES</a></li>
    </ul>
  `;
  document.body.appendChild(navLinks);
}

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});
