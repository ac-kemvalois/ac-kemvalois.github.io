document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
    this.reset();
});

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `<h4>${title}</h4><p>${content}</p>`;
    document.getElementById('posts').appendChild(postDiv);
    this.reset();
});
