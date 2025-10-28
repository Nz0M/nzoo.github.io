const projects = [
  {id:1, title:"Victor Solf", image:"images/projet1.jpg", video:"https://www.youtube.com/embed/nwKivhgaVGc"},
  {id:2, title:"Synapson X Clou", image:"images/projet2.jpg", video:"https://www.youtube.com/embed/VIDÉO2"},
  {id:3, title:"Showcase Aime Simone", image:"images/projet3.jpg", video:"https://www.youtube.com/embed/VIDÉO3"},
  {id:4, title:"Showcase Tessa Dixson", image:"images/projet4.jpg", video:"https://www.youtube.com/embed/VIDÉO4"},
  {id:5, title:"Kaky X Fresh", image:"images/projet5.jpg", video:"https://www.youtube.com/embed/VIDÉO5"},
  {id:6, title:"Charlie Pale X Fresh", image:"images/projet6.jpg", video:"https://www.youtube.com/embed/VIDÉO6"},
  {id:7, title:"Lescop X Fresh", image:"images/projet7.jpg", video:"https://www.youtube.com/embed/VIDÉO7"},
  {id:8, title:"Myra", image:"images/projet8.jpg", video:"https://www.youtube.com/embed/VIDÉO8"},
  {id:9, title:"Camille Yembe X Fresh", image:"images/projet9.jpg", video:"https://www.youtube.com/embed/VIDÉO9"},
  {id:10, title:"Synapson feat. Myra", image:"images/projet10.jpg", video:"https://www.youtube.com/embed/VIDÉO10"},
  {id:11, title:"Charles X Fresh", image:"images/projet11.jpg", video:"https://www.youtube.com/embed/VIDÉO11"},
  {id:12, title:"Luiza X Fresh", image:"images/projet12.jpg", video:"https://www.youtube.com/embed/VIDÉO12"},
  {id:13, title:"Ipndego X Fresh", image:"images/projet13.jpg", video:"https://www.youtube.com/embed/VIDÉO13"},
  {id:14, title:"Casablanca X Fresh", image:"images/projet14.jpg", video:"https://www.youtube.com/embed/VIDÉO14"},
  {id:15, title:"Saint DX X Sound Of Paris", image:"images/projet15.jpg", video:"https://www.youtube.com/embed/VIDÉO15"},
  {id:16, title:"Sainte Victoire X Fresh", image:"images/projet16.jpg", video:"https://www.youtube.com/embed/VIDÉO16"},
  {id:17, title:"Rallye", image:"images/projet17.jpg", video:"https://www.youtube.com/embed/VIDÉO17"},
  {id:18, title:"Hélène Sio X Fresh", image:"images/projet18.jpg", video:"https://www.youtube.com/embed/VIDÉO18"},
  {id:19, title:"Breeyo - Black out", image:"images/projet19.jpg", video:"https://www.youtube.com/embed/VIDÉO19"},
  {id:20, title:"Oklou - Harvest Sky", image:"images/projet20.jpg", video:"https://www.youtube.com/embed/VIDÉO20"},
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

// --- Mettre en surbrillance le lien actif ---
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  document.querySelectorAll(".nav-link").forEach(link => {
    const page = link.getAttribute("data-page");
    if (path.includes("pictures") && page === "pictures") {
      link.classList.add("active");
    } else if ((path.includes("index") || path === "/") && page === "work") {
      link.classList.add("active");
    }
  });
});

