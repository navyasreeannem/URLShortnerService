document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");
  const flashMessage = document.getElementById("flashMessage");
  const shortUrlSpan = document.getElementById("shortUrl");
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");

  generateBtn.addEventListener("click", () => {
    const longUrl = document.getElementById("longUrl").value.trim();
    const customName = document.getElementById("customName").value.trim();

    if (!longUrl || !customName) {
      alert("Please fill in both fields!");
      return;
    }

    // Fake short URL for frontend-only
    const shortUrl = `https://short.ly/${customName}`;
    shortUrlSpan.textContent = shortUrl;
    flashMessage.classList.remove("d-none");

    // Optional: Scroll to flash message
    flashMessage.scrollIntoView({ behavior: "smooth" });
  });

  toggleThemeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
  });
});
