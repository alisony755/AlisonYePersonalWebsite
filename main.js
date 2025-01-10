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

  window.increaseFontSize = function () {
    // Increase the font size for the entire body
    const body = document.body;
    const currentSize = parseFloat(getComputedStyle(body).fontSize);
    body.style.fontSize = currentSize + 2 + "px";

    // Increase the font size for specific sections
    const projectCards = document.querySelectorAll(
      ".project-card, .project-card *"
    );
    projectCards.forEach((card) => {
      const currentCardSize = parseFloat(getComputedStyle(card).fontSize);
      card.style.fontSize = currentCardSize + 2 + "px";
    });

    // Increase the font size for the navigation
    const nav = document.querySelector("nav");
    const currentNavSize = parseFloat(getComputedStyle(nav).fontSize);
    nav.style.fontSize = currentNavSize + 2 + "px";

    // Increase the font size for the first and last name
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const currentFirstNameSize = parseFloat(
      getComputedStyle(firstName).fontSize
    );
    const currentLastNameSize = parseFloat(getComputedStyle(lastName).fontSize);

    firstName.style.fontSize = currentFirstNameSize + 2 + "px";
    lastName.style.fontSize = currentLastNameSize + 2 + "px";
  };

  window.decreaseFontSize = function () {
    // Decrease the font size for the entire body
    const body = document.body;
    const currentSize = parseFloat(getComputedStyle(body).fontSize);
    body.style.fontSize = currentSize - 2 + "px";

    // Decrease the font size for specific sections
    const projectCards = document.querySelectorAll(
      ".project-card, .project-card *"
    );
    projectCards.forEach((card) => {
      const currentCardSize = parseFloat(getComputedStyle(card).fontSize);
      card.style.fontSize = currentCardSize - 2 + "px";
    });

    // Decrease the font size for the navigation
    const nav = document.querySelector("nav");
    const currentNavSize = parseFloat(getComputedStyle(nav).fontSize);
    nav.style.fontSize = currentNavSize - 2 + "px";

    // Decrease the font size for the first and last name
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const currentFirstNameSize = parseFloat(
      getComputedStyle(firstName).fontSize
    );
    const currentLastNameSize = parseFloat(getComputedStyle(lastName).fontSize);

    firstName.style.fontSize = currentFirstNameSize - 2 + "px";
    lastName.style.fontSize = currentLastNameSize - 2 + "px";
  };

  // Dyslexia-Friendly Font
  window.toggleDyslexiaFriendlyFont = function () {
    document.body.classList.toggle("dyslexia-friendly-font");
  };

  // High Contrast Mode
  window.toggleHighContrastMode = function () {
    document.body.classList.toggle("high-contrast-mode");
  };

  // Quote Changing Function
  const quotes = [
    '"Design is where science and art break even." – Robin Mathew',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer',
    '"The best way to predict the future is to invent it." - Alan Kay',
    '"The computer was born to solve problems that did not exist before." - Bill Gates',
    '"Software is a great combination between artistry and engineering." - Bill Gates',
    '"Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke',
    '"Programming is the art of thinking in a way that computers can understand." - Unknown',
    '"Creativity is intelligence having fun." – Albert Einstein',
    '"Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep." – Scott Adams',
    '"We cannot solve our problems with the same thinking we used when we created them." – Albert Einstein',
    '"You can’t use up creativity. The more you use, the more you have." – Maya Angelou',
    '"Creativity is thinking up new things. Innovation is doing new things." – Theodore Levitt',
    '"If you want to change the world, change your thinking." – Unknown',
    '"It always seems impossible until it’s done." – Nelson Mandela',
    '"The most common way people give up their power is by thinking they don’t have any." – Alice Walker'
  ];

  let currentQuoteIndex = 0;

  function changeQuote() {
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
      quoteElement.textContent = quotes[currentQuoteIndex];
    }
  }

  // Change the quote every 5 seconds
  setInterval(changeQuote, 10000);

  // Skill Bar Animation
  const skillsSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".fill");

  if (skillsSection && progressBars.length > 0) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            const width = bar.getAttribute("data-width");
            if (width) {
              bar.style.width = width;
            }
          });
          observer.unobserve(skillsSection);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(skillsSection);
  }
});
