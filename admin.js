const password = "secretPassword"; // Changez le mot de passe ici
const announcements = [];

function checkPassword() {
    const enteredPassword = document.getElementById("admin-password").value;
    if (enteredPassword === password) {
        document.getElementById("admin-section").style.display = "block";
    } else {
        alert("Mot de passe incorrect");
    }
}

function createAnnouncement() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const image = document.getElementById("image").files[0];

    const announcement = {
        title: title,
        content: content,
        image: image ? URL.createObjectURL(image) : null
    };

    announcements.push(announcement);
    displayAnnouncements();
}

function displayAnnouncements() {
    const container = document.getElementById("announcements-list");
    container.innerHTML = '';

    announcements.forEach((ann, index) => {
        const announcementDiv = document.createElement("div");
        announcementDiv.innerHTML = `
            <h4>${ann.title}</h4>
            <p>${ann.content}</p>
            ${ann.image ? `<img src="${ann.image}" alt="Image" style="width:100px;height:auto;">` : ''}
            <button onclick="deleteAnnouncement(${index})">Supprimer</button>
        `;
        container.appendChild(announcementDiv);
    });
}

function deleteAnnouncement(index) {
    announcements.splice(index, 1);
    displayAnnouncements();
}
