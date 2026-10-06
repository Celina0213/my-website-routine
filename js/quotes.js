document.addEventListener("DOMContentLoaded", () => {
  const quoteBank = [
    { text: "Consistency is the true foundation of mastery.", author: "Daily Routine Guide" },
    { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
    { text: "Focus on the process, not just the outcome.", author: "James Clear" },
    { text: "First, solve the problem. Then, write the clean code.", author: "John Johnson" },
    { text: "Energy flows where attention goes.", author: "Focus Routine" }
  ];

  const textEl = document.getElementById("quote-display");
  const authorEl = document.getElementById("quote-author");
  const btn = document.getElementById("next-quote-btn");

  if (btn && textEl && authorEl) {
    btn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quoteBank.length);
      textEl.textContent = `"${quoteBank[randomIndex].text}"`;
      authorEl.textContent = `— ${quoteBank[randomIndex].author}`;
    });
  }
});