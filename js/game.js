document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    "Write 1 semantic HTML section",
    "Inspect CSS box-model in DevTools",
    "Review Git commit history",
    "Draft 3 personal goals",
    "Organize project assets folder",
    "Refactor nav links and check paths"
  ];

  const screen = document.getElementById("machine-output");
  const spinBtn = document.getElementById("spin-btn");
  const resetBtn = document.getElementById("reset-btn");

  if (spinBtn && screen) {
    spinBtn.addEventListener("click", () => {
      screen.textContent = "Selecting task...";
      setTimeout(() => {
        const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
        screen.textContent = `Target: ${randomTask}`;
      }, 300);
    });
  }

  if (resetBtn && screen) {
    resetBtn.addEventListener("click", () => {
      screen.textContent = "Ready to roll...";
    });
  }
});