// Fonction pour charger les annonces sur la page des nouvelles
document.addEventListener("DOMContentLoaded", () => {
    const announcementsContainer = document.getElementById("annonces-container");
    
    // Utilisation d'un tableau d'exemple pour les annonces
    const announcements = [
        { title: "Annonce 1", content: "Contenu de l'annonce 1" },
        { title: "Annonce 2", content: "Contenu de l'annonce 2" }
    ];
    
    announcements.forEach(ann => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${ann.title}</h3><p>${ann.content}</p>`;
        announcementsContainer.appendChild(div);
    });
});
