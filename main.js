document.addEventListener("DOMContentLoaded", () => {
  // Accessibility Menu Toggle
  window.toggleAccessibilityMenu = function () {
    const menu = document.getElementById("accessibility-menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.style.display = "block"; // Show the menu
    } else {
      menu.classList.add("hidden");
      menu.style.display = "none"; // Hide the menu
    }
  };

  // Dark/Light Mode
  window.toggleDarkMode = function () {
    document.body.classList.toggle("dark-mode");
  };

  // High Contrast mode
  window.toggleHighContrast = function () {
    document.body.classList.toggle("high-contrast");
  };

  // Simplified View
  window.toggleSimplifiedView = function () {
    document.body.classList.toggle("simplified-view");
  };

  // Increase font size
  window.increaseFontSize = function () {
    const body = document.body;
    const currentSize = parseFloat(getComputedStyle(body).fontSize);
    body.style.fontSize = currentSize + 2 + "px";
  };

  // Decrease font size
  window.decreaseFontSize = function () {
    const body = document.body;
    const currentSize = parseFloat(getComputedStyle(body).fontSize);
    body.style.fontSize = currentSize - 2 + "px";
  };

  // Dyslexia-Friendly Font
  window.toggleDyslexiaFriendlyFont = function () {
    document.body.classList.toggle("dyslexia-friendly-font");
  };
});
