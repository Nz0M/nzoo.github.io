const projects = [
  {id:1, title:"Victor Solf", image:"images/projet1.jpg", video:"https://www.youtube.com/embed/nwKivhgaVGc"},
  {id:2, title:"Synapson X Clou", image:"images/projet2.jpg", video:"https://www.youtube.com/embed/Rn8zcOwZc6M"},
  {id:3, title:"Showcase Aime Simone", image:"images/projet3.jpg", video:"https://www.youtube.com/embed/JrRPB61i2uU"},
  {id:4, title:"Showcase Tessa Dixson", image:"images/projet4.jpg", video:"https://www.youtube.com/embed/qPE0ChvXO0Y"},
  {id:5, title:"Kaky X Fresh", image:"images/projet5.jpg", video:"https://www.youtube.com/embed/bPXh8nMOq3c"},
  {id:6, title:"Charlie Pale X Fresh", image:"images/projet6.jpg", video:"https://www.youtube.com/embed/ANfyjxDES8s"},
  {id:7, title:"Lescop X Fresh", image:"images/projet7.jpg", video:"https://www.youtube.com/embed/jOacwOoIHd0"},
  {id:8, title:"Myra", image:"images/projet8.jpg", video:"https://www.youtube.com/embed/yCkHODJJCjo"},
  {id:9, title:"Camille Yembe X Fresh", image:"images/projet9.jpg", video:"https://www.youtube.com/embed/qQ6fIf3d8qs"},
  {id:10, title:"Synapson feat. Myra", image:"images/projet10.jpg", video:"https://www.youtube.com/embed/7amskvCTCPw"},
  {id:11, title:"Charles X Fresh", image:"images/projet11.jpg", video:"https://www.youtube.com/embed/TQn_6qZhVZo"},
  {id:12, title:"Luiza X Fresh", image:"images/projet12.jpg", video:"https://www.youtube.com/embed/4v_IqjR5DNc"},
  {id:13, title:"Ipndego X Fresh", image:"images/projet13.jpg", video:"https://www.youtube.com/embed/_qpvIRUIxf8"},
  {id:14, title:"Casablanca X Fresh", image:"images/projet14.jpg", video:"https://www.youtube.com/embed/18P-VZZzCwQ"},
  {id:15, title:"Saint DX X Sound Of Paris", image:"images/projet15.jpg", video:"https://www.youtube.com/embed/WAyAF7HxLfg&t"},
  {id:16, title:"Sainte Victoire X Fresh", image:"images/projet16.jpg", video:"https://www.youtube.com/embed/aXBiZMyrJZM"},
  {id:17, title:"Rallye", image:"images/projet17.jpg", video:"https://www.youtube.com/embed/sIWohq8KDGg"},
  {id:18, title:"Hélène Sio X Fresh", image:"images/projet18.jpg", video:"https://www.youtube.com/embed/aZQjYPFOiUw"},
  {id:19, title:"Breeyo - Black out", image:"images/projet19.jpg", video:"https://www.youtube.com/embed/b0JleJ5lEYU"},
  {id:20, title:"Oklou - Harvest Sky", image:"images/projet20.jpg", video:"https://www.youtube.com/embed/B6MuFJ7Oepc"},
  {id:21, title:"Oklou - Blade Bird", image:"images/projet21.jpg", video:"https://www.youtube.com/embed/JdiinD0PJWU"},
  {id:22, title:"Oklou - Plague Dogs", image:"images/projet22.jpg", video:"https://www.youtube.com/embed/zHuJfx8lwZA"},
  {id:23, title:"CMARG x Fresh", image:"images/projet23.jpg", video:"https://www.youtube.com/embed/9UiH4IZQvQg"},
];

// Lire l'id dans l'URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) || 1; // par défaut projet 1

const project = projects.find(p => p.id === id);

// Afficher le projet
document.getElementById("project-title").textContent = project.title;
document.getElementById("project-video").src = project.video;

// Générer 2 suggestions aléatoires (mise en page avec hover et infos)
const suggestionsDiv = document.getElementById("suggestions");
const others = projects.filter(p => p.id !== id);
const shuffled = others.sort(() => 0.5 - Math.random());
const selected = shuffled.slice(0, 2);

selected.forEach(p => {
  const div = document.createElement("div");
  div.className = "suggestion";
  div.onclick = () => window.location.href = `projet.html?id=${p.id}`;
  div.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <div class="overlay">
      <h3>${p.title}</h3>
      <p>Electro</p>
    </div>
  `;
  suggestionsDiv.appendChild(div);
});

// --- Mettre en surbrillance (opacité) selon la page ---
document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    const page = link.getAttribute("data-page");

    if ((current === "" || current === "index.html") && page === "work") {
      link.classList.add("active");
    } 
    else if (current === "pictures.html" && page === "pictures") {
      link.classList.add("active");
    }
  });
});


