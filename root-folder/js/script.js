// Funzione per aggiungere un post

function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== "") {
      const postList = document.getElementById('postList');
  
      const post = document.createElement('div');
      post.classList.add('post');
      post.innerHTML = `
        <h3>Post del Giorno</h3>
        <p>${postContent}</p>
        <p><small>${new Date().toLocaleString()}</small></p>
      `;
  
      postList.appendChild(post);
      document.getElementById('postContent').value = '';  // Resetta il campo del post
    } else {
      alert("Per favore, scrivi qualcosa nel post.");
    }
  }
  