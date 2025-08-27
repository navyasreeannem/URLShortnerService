// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize event listeners
  document.getElementById('generate-btn').addEventListener('click', generateShortLink);
  document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
  
  // Allow generating short link with Enter key
  document.getElementById('long-link').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      generateShortLink();
    }
  });
});

function generateShortLink() {
  const longLink = document.getElementById('long-link').value;
  
  // Basic validation
  if (!longLink) {
    showPopup('Please enter a URL', 'error');
    return;
  }
  
  // Check if URL has http/https prefix
  let validUrl = longLink;
  if (!longLink.startsWith('http://') && !longLink.startsWith('https://')) {
    validUrl = 'https://' + longLink;
  }
  
  // Simple hash function for demo purposes
  const hash = Math.random().toString(36).substring(2, 9);
  const shortUrl = `https://short.url/${hash}`;
  
  // Display the short URL
  document.getElementById('short-link').value = shortUrl;
  
  // Show success message
  showPopup('Short link generated successfully!');
}

function copyToClipboard() {
  const shortLinkInput = document.getElementById('short-link');
  
  if (!shortLinkInput.value) {
    showPopup('Please generate a short link first', 'error');
    return;
  }
  
  shortLinkInput.select();
  shortLinkInput.setSelectionRange(0, 99999); // For mobile devices
  
  navigator.clipboard.writeText(shortLinkInput.value)
    .then(() => {
      showPopup('Short link copied to clipboard!');
    })
    .catch(err => {
      showPopup('Failed to copy. Please try again.', 'error');
      console.error('Failed to copy: ', err);
    });
}

function showPopup(message, type = 'success') {
  const popup = document.getElementById('popup-message');
  
  // Change style based on type
  if (type === 'error') {
    popup.classList.add('error');
    popup.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
  } else {
    popup.classList.remove('error');
    popup.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
  }
  
  popup.classList.add('show');
  
  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}