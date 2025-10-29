// ======================
// Gestion du menu actif
// ======================
document.addEventListener("DOMContentLoaded", () => {
  // Définir la page actuelle (index = "work")
  const currentPage = window.location.pathname.includes("pictures") ? "pictures" : "work";

  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ======================
// Génération des projets (index.html)
// ======================
if (document.getElementById("projects-grid") && typeof projects !== "undefined") {
  const grid = document.getElementById("projects-grid");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";

    // Au clic, aller vers la page projet avec l'ID
    div.onclick = () => window.location.href = `projet.html?id=${p.id}`;

    // Contenu du projet avec overlay
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="overlay">
        <h3>${p.title}</h3>
        <p>${p.category}</p>
      </div>
    `;

    grid.appendChild(div);
  });
}

// ======================
// Autres scripts généraux
// ======================
// Tu peux rajouter ici toutes les fonctionnalités qui ne dépendent pas des données des projets
// Par exemple : animations, scroll effects, lazy load, etc.
