// Liste des projets
const projects = {
  projet1: {
    title: "Projet 1",
    youtube: "https://www.youtube.com/watch?v=nwKivhgaVGc&list=RDnwKivhgaVGc&start_radio=1",
    image: "images/projet1.jpg",
  },
  projet2: {
    title: "Projet 2",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_2",
    image: "images/projet2.jpg",
  },
  projet3: {
    title: "Projet 3",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_3",
    image: "images/projet3.jpg",
  },
};

// Ouvre un projet en redirigeant vers la page projet.html avec son id
function openProject(id) {
  localStorage.setItem("selectedProject", id);
  window.location.href = "projet.html";
}
