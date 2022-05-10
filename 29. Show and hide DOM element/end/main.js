// show or hide message
const button = document.getElementById('showMessage');

button.addEventListener('click', function() {
  const message = document.getElementById('message');

  if(message.style.display === 'none') {
    message.style.display = 'block';
    button.textContent = 'Hide message';
  } else {
    message.style.display = 'none';
    button.textContent = 'Show message';
  }
});