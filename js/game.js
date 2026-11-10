document.addEventListener("DOMContentLoaded", () => {
  const ideas = [
    "Write one diary sentence in German today.",
    "Practice only backhand clears at badminton tonight.",
    "Add one small animation to this website.",
    "Review yesterday's lecture notes for 15 minutes.",
    "Read 10 pages before bed — no phone.",
    "Learn one German tongue twister.",
    "Refactor one messy block of code.",
    "Take a 20-minute walk without earphones.",
    "Design one tiny thing you will throw away.",
    "Write down tomorrow's single most important task."
  ];

  const lever = document.getElementById("lever");
  const output = document.getElementById("machine-output");
  const ticket = document.getElementById("idea-ticket");
  const ticketNo = document.getElementById("ticket-no");
  const ticketText = document.getElementById("ticket-text");

  let busy = false;

  if (lever && output && ticket && ticketNo && ticketText) {
    lever.addEventListener("click", () => {
      if (busy) return;
      busy = true;
      lever.classList.add("pulled");
      output.textContent = "Dispensing idea...";
      ticket.classList.remove("popped");

      setTimeout(() => {
        const idea = ideas[Math.floor(Math.random() * ideas.length)];
        const no = String(Math.floor(Math.random() * 900) + 100);
        ticketNo.textContent = "No. " + no;
        ticketText.textContent = idea;
        ticket.classList.add("popped");
        output.textContent = "Idea dispensed. Pull again for more.";
        lever.classList.remove("pulled");
        busy = false;
      }, 800);
    });
  }
});
