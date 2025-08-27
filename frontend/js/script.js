function generateShortLink() {
  let longLink = document.getElementById('long-link').value;
  if (longLink.trim() === '') {
    alert('Please enter a long link.');
    return;
  }

  // Mock short link generation (random 6-character string)
  let shortLink = 'https://short.ly/' + Math.random().toString(36).substr(2, 6);
  document.getElementById('short-link').value = shortLink;
  showPopup();
}

function showPopup() {
  let popup = document.getElementById('popup-message');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000); // Hide popup after 2 seconds
}
