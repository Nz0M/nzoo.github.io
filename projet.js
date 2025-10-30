// === Tableau des projets ===
const projects = [
  {id:1, title:"Victor Solf", category:"Electro", video:"https://www.youtube.com/embed/nwKivhgaVGc", image:"images/projet1.jpg"},
  {id:2, title:"Synapson X Clou", category:"Electro", video:"https://www.youtube.com/embed/Rn8zcOwZc6M", image:"images/projet2.jpg"},
  {id:3, title:"Showcase Aime Simone", category:"Cadreur", video:"https://www.youtube.com/embed/JrRPB61i2uU", image:"images/projet3.jpg"},
  {id:4, title:"Showcase Tessa Dixson", category:"Cadreur", video:"https://www.youtube.com/embed/qPE0ChvXO0Y", image:"images/projet4.jpg"},
  {id:5, title:"Kaky X Fresh", category:"Electro", video:"https://www.youtube.com/embed/bPXh8nMOq3c", image:"images/projet5.jpg"},
  {id:6, title:"Charlie Pale X Fresh", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/ANfyjxDES8s", image:"images/projet6.jpg"},
  {id:7, title:"Lescop X Fresh", category:"Electro", video:"https://www.youtube.com/embed/jOacwOoIHd0", image:"images/projet7.jpg"},
  {id:8, title:"Myra", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/yCkHODJJCjo", image:"images/projet8.jpg"},
  {id:9, title:"Camille Yembe X Fresh", category:"Electro", video:"https://www.youtube.com/embed/qQ6fIf3d8qs", image:"images/projet9.jpg"},
  {id:10, title:"Synapson feat. Myra", category:"Electro", video:"https://www.youtube.com/embed/7amskvCTCPw", image:"images/projet10.jpg"},
  {id:11, title:"Charles X Fresh", category:"Electro", video:"https://www.youtube.com/embed/TQn_6qZhVZo", image:"images/projet11.jpg"},
  {id:12, title:"Luiza X Fresh", category:"Electro", video:"https://www.youtube.com/embed/4v_IqjR5DNc", image:"images/projet12.jpg"},
  {id:13, title:"Ipndego X Fresh", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/_qpvIRUIxf8", image:"images/projet13.jpg"},
  {id:14, title:"Casablanca X Fresh", category:"Electro", video:"https://www.youtube.com/embed/18P-VZZzCwQ", image:"images/projet14.jpg"},
  {id:15, title:"Saint DX X Sound Of Paris", category:"Cadreur", video:"https://www.youtube.com/embed/WAyAF7HxLfg", image:"images/projet15.jpg"},
  {id:16, title:"Sainte Victoire X Fresh", category:"Electro", video:"https://www.youtube.com/embed/aXBiZMyrJZM", image:"images/projet16.jpg"},
  {id:17, title:"Rallye", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/sIWohq8KDGg", image:"images/projet17.jpg"},
  {id:18, title:"Hélène Sio X Fresh", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/aZQjYPFOiUw", image:"images/projet18.jpg"},
  {id:19, title:"Breeyo - Black out", category:"Cadreur", video:"https://www.youtube.com/embed/b0JleJ5lEYU", image:"images/projet19.jpg"},
  {id:20, title:"Oklou - Harvest Sky", category:"Cadreur", video:"https://www.youtube.com/embed/B6MuFJ7Oepc", image:"images/projet20.jpg"},
  {id:21, title:"Oklou - Blade Bird", category:"Cadreur", video:"https://www.youtube.com/embed/JdiinD0PJWU", image:"images/projet21.jpg"},
  {id:22, title:"Oklou - Plague Dogs", category:"Cadreur", video:"https://www.youtube.com/embed/zHuJfx8lwZA", image:"images/projet22.jpg"},
  {id:23, title:"CMARG x Fresh", category:"Cadreur", video:"https://www.youtube.com/embed/9UiH4IZQvQg", image:"images/projet23.jpg"},
];

// === Récupération de l'ID du projet dans l'URL (si présent) ===
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'));

// === Si on est sur projet.html avec un ID ===
if (projectId) {
  const project = projects.find(p => p.id === projectId);
  const projectPage = document.querySelector(".project-page");

  if (project && projectPage) {
    projectPage.innerHTML = `
      <h1>${project.title}</h1>
      <span class="category">${project.category}</span>
      <iframe src="${project.video}" allowfullscreen></iframe>
      <div class="suggestions-section">
        <h2>YOU MAY ALSO LIKE</h2>
        <div class="suggestions"></div>
      </div>
    `;

    const suggestionsContainer = projectPage.querySelector(".suggestions");
    const otherProjects = projects.filter(p => p.id !== projectId);
    const shuffled = otherProjects.sort(() => 0.5 - Math.random());
    const suggestions = shuffled.slice(0, 2);

    suggestions.forEach(p => {
      const div = document.createElement("div");
      div.className = "suggestion";
      div.onclick = () => window.location.href = `projet.html?id=${p.id}`;
      div.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="overlay">
          <h3>${p.title}</h3>
          <p>${p.category}</p>
        </div>
      `;
      suggestionsContainer.appendChild(div);
    });

  } else if (projectPage) {
    projectPage.innerHTML = "<p>Projet non trouvé.</p>";
  }
}

// === Sinon on est sur index.html, on affiche tous les projets ===
const workGrid = document.getElementById("work-grid");
if (workGrid) {
  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-item";
    div.onclick = () => window.location.href = `projet.html?id=${p.id}`;
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="overlay">
        <h3>${p.title}</h3>
        <p>${p.category}</p>
      </div>
    `;
    workGrid.appendChild(div);
  });
}
