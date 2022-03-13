async function newFormHandler(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="new-title"]').value;
    const post_text = document.querySelector('input[name="new-text"]').value;
  
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
  
  document.querySelector('.create-post').addEventListener('click', newFormHandler);
  