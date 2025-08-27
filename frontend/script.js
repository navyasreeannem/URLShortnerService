// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generate-btn').addEventListener('click', generateShortLink);
  document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

  document.getElementById('long-link').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      generateShortLink();
    }
  });
});

async function generateShortLink() {
  const longLink = document.getElementById('long-link').value.trim();

  if (!longLink) {
    showPopup('Please enter a URL', 'error');
    return;
  }

  let validUrl = longLink;
  if (!longLink.startsWith('http://') && !longLink.startsWith('https://')) {
    validUrl = 'https://' + longLink;
  }

  try {
    const response = await fetch('http://localhost:5000/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl: validUrl })
    });

    if (!response.ok) {
      throw new Error('Failed to generate short link');
    }

    const data = await response.json();

    // Backend should return: { shortUrl: "http://localhost:5000/abc123" }
    document.getElementById('short-link').value = data.shortUrl;

    showPopup('Short link generated successfully!');
  } catch (error) {
    console.error(error);
    showPopup('Error generating short link. Please try again.', 'error');
  }
}

function copyToClipboard() {
  const shortLinkInput = document.getElementById('short-link');

  if (!shortLinkInput.value) {
    showPopup('Please generate a short link first', 'error');
    return;
  }

  shortLinkInput.select();
  shortLinkInput.setSelectionRange(0, 99999); // For mobile

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

  if (type === 'error') {
    popup.classList.add('error');
    popup.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
  } else {
    popup.classList.remove('error');
    popup.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
  }

  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 3000);
}
