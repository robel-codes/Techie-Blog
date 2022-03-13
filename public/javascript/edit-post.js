async function editFormHandler(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="edit-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="edit-text"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.update-post-btn').addEventListener('click', editFormHandler);
  