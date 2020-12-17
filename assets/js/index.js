//testing the API
let _div = document.querySelector('.test');
let hamburger = document.querySelector(('.hamburger'));
let navLinks = document.querySelector(('.nav_links'));
let links = document.querySelectorAll(('.nav_links li'));

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});