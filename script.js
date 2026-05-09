const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Menu
const body = document.body;

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  body.classList.add("menu-open");
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  body.classList.remove("menu-open");
  mobileMenu.classList.remove("active");
});
