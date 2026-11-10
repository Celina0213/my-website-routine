document.addEventListener("DOMContentLoaded", () => {
  const quoteBank = [
    { text: "Consistency is the true foundation of mastery.", author: "Daily Routine Guide" },
    { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
    { text: "Focus on the process, not just the outcome.", author: "James Clear" },
    { text: "First, solve the problem. Then, write the clean code.", author: "John Johnson" },
    { text: "Energy flows where attention goes.", author: "Focus Routine" }
  ];

  const themes = [
    "assets/ghibli-sky.png",
    "assets/ghibli-forest.png",
    "assets/ghibli-sea.png",
    "assets/ghibli-sunset.png"
  ];

  const textEl = document.getElementById("quote-display");
  const authorEl = document.getElementById("quote-author");
  const btn = document.getElementById("next-quote-btn");
  const card = document.getElementById("quote-card");

  function applyRandomTheme() {
    const img = themes[Math.floor(Math.random() * themes.length)];
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.backgroundImage = `url('${img}')`;
      card.style.opacity = "1";
    }, 300);
  }

  if (btn && textEl && authorEl && card) {
    card.style.backgroundImage = `url('${themes[0]}')`;
    card.style.transition = "opacity 0.3s ease";
    btn.addEventListener("click", () => {
      const q = quoteBank[Math.floor(Math.random() * quoteBank.length)];
      textEl.textContent = `"${q.text}"`;
      authorEl.textContent = `— ${q.author}`;
      applyRandomTheme();
    });
  }
});
