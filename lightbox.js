// Sélection de la lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Récupère toutes les images de la page
const images = document.querySelectorAll(".project img");
let currentIndex = 0;

// Ouvre la lightbox au clic
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

// Ferme la lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Image suivante
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// Image précédente
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Fonction d'affichage
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Fermer si clic sur fond noir
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
