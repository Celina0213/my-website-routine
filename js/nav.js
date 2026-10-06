document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const linkTarget = link.getAttribute("href");
    if (linkTarget === currentPath) {
      link.classList.add("active");
    }
  });
});