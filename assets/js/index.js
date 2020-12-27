//testing the API
let _div = document.querySelector('.test');
let hamburger = document.querySelector(('.hamburger'));
let lines = document.querySelectorAll(('.hamburger div'));
let navLinks = document.querySelector(('.nav_links'));
let links = document.querySelectorAll(('.nav_links li'));

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    lines[0].classList.toggle("line1_transform");
    lines[1].classList.toggle("line2_transform");
    lines[2].classList.toggle("line3_transform");
});