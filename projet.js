// Tableau des projets complet avec titres, catégories, images et vidéos
const projects = [
  {id:1, title:"Victor Solf", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_1", image:"images/projet1.jpg"},
  {id:2, title:"Synapson X Clou", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_2", image:"images/projet2.jpg"},
  {id:3, title:"Showcase Aime Simone", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_3", image:"images/projet3.jpg"},
  {id:4, title:"Showcase Tessa Dixson", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_4", image:"images/projet4.jpg"},
  {id:5, title:"Kaky X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_5", image:"images/projet5.jpg"},
  {id:6, title:"Charlie Pale X Fresh", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/VIDEO_ID_6", image:"images/projet6.jpg"},
  {id:7, title:"Lescop X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_7", image:"images/projet7.jpg"},
  {id:8, title:"Myra", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/VIDEO_ID_8", image:"images/projet8.jpg"},
  {id:9, title:"Camille Yembe X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_9", image:"images/projet9.jpg"},
  {id:10, title:"Synapson feat. Myra", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_10", image:"images/projet10.jpg"},
  {id:11, title:"Charles X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_11", image:"images/projet11.jpg"},
  {id:12, title:"Luiza X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_12", image:"images/projet12.jpg"},
  {id:13, title:"Ipndego X Fresh", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/VIDEO_ID_13", image:"images/projet13.jpg"},
  {id:14, title:"Casablanca X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_14", image:"images/projet14.jpg"},
  {id:15, title:"Saint DX X Sound Of Paris", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_15", image:"images/projet15.jpg"},
  {id:16, title:"Sainte Victoire X Fresh", category:"Electro", video:"https://www.youtube.com/embed/VIDEO_ID_16", image:"images/projet16.jpg"},
  {id:17, title:"Rallye", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/VIDEO_ID_17", image:"images/projet17.jpg"},
  {id:18, title:"Hélène Sio X Fresh", category:"Cadreur & Electro", video:"https://www.youtube.com/embed/VIDEO_ID_18", image:"images/projet18.jpg"},
  {id:19, title:"Breeyo - Black out", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_19", image:"images/projet19.jpg"},
  {id:20, title:"Oklou - Harvest Sky", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_20", image:"images/projet20.jpg"},
  {id:21, title:"Oklou - Blade Bird", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_21", image:"images/projet21.jpg"},
  {id:22, title:"Oklou - Plague Dogs", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_22", image:"images/projet22.jpg"},
  {id:23, title:"CMARG x Fresh", category:"Cadreur", video:"https://www.youtube.com/embed/VIDEO_ID_23", image:"images/projet23.jpg"},
];

// Récupérer l'ID du projet depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'));

// Trouver le projet correspondant
const project = projects.find(p => p.id === projectId);

if(project){
  // Affichage du projet
  const projectContainer = document.querySelector(".project-page");
  projectContainer.innerHTML = `
    <h1>${project.title}</h1>
    <p>${project.category}</p>
    <iframe src="${project.video}" allowfullscreen></iframe>
    <div class="suggestions-section">
      <h2>Autres projets</h2>
      <div class="suggestions"></div>
    </div>
  `;

  // Générer les suggestions aléatoires (3 projets différents)
  const suggestionsContainer = document.querySelector(".suggestions");
  const otherProjects = projects.filter(p => p.id !== projectId);
  
  // Mélanger et prendre les 3 premiers
  const shuffled = otherProjects.sort(() => 0.5 - Math.random());
  const suggestions = shuffled.slice(0, 3);

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

}else{
  document.querySelector(".project-page").innerHTML = "<p>Projet non trouvé.</p>";
}
