document.addEventListener("DOMContentLoaded", () => {
  const quoteBank = [
    { text: "Consistency is the true foundation of mastery.", author: "Daily Routine Guide" },
    { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
    { text: "Focus on the process, not just the outcome.", author: "James Clear" },
    { text: "First, solve the problem. Then, write the clean code.", author: "John Johnson" },
    { text: "Energy flows where attention goes.", author: "Focus Routine" }
  ];

  const themes = [
    { img: "assets/ghibli-sky.png", card: "card-sky" },
    { img: "assets/ghibli-forest.png", card: "card-mint" },
    { img: "assets/ghibli-sea.png", card: "card-sea" },
    { img: "assets/ghibli-sunset.png", card: "card-sunset" }
  ];

  const textEl = document.getElementById("quote-display");
  const authorEl = document.getElementById("quote-author");
  const btn = document.getElementById("next-quote-btn");
  const stage = document.querySelector(".quote-stage");
  const bgImg = document.querySelector(".stage-bg");
  const card = document.getElementById("quote-card");

  function applyRandomTheme() {
    const t = themes[Math.floor(Math.random() * themes.length)];
    themes.forEach(c => card.classList.remove(c.card));
    card.classList.add(t.card);
    bgImg.style.opacity = "0";
    setTimeout(() => {
      bgImg.src = t.img;
      bgImg.style.opacity = "1";
    }, 350);
  }

  if (btn && textEl && authorEl && stage && bgImg && card) {
    applyRandomTheme();
    btn.addEventListener("click", () => {
      const q = quoteBank[Math.floor(Math.random() * quoteBank.length)];
      textEl.textContent = `"${q.text}"`;
      authorEl.textContent = `— ${q.author}`;
      applyRandomTheme();
    });
  }
});
