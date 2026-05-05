const nav = document.querySelector(".nav-header");
const menu = document.querySelector(".menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add(".active");
    nav.classList.add(".menu-open");
});

closeBtn.addEventListener("click",() => {
    menu.classList.remove(".active");
    nav.classList.remove(".menu-open");
})