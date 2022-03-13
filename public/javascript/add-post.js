async function newFormHandler(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="new-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="new-text"]').value.trim();
    
    if(post_title && post_text){
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          post_title,
          post_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
    }
  }
}
  
  document.querySelector('.form-new-post').addEventListener('submit', newFormHandler);
  