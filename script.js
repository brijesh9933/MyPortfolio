// Add animation to hero section
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    hero.classList.add("animate");
});

// Add event listener to button
const btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    const projects = document.querySelector(".projects");
    projects.classList.add("animate");
});

// Add animation to projects section
document.addEventListener("scroll", function() {
    const projects = document.querySelector(".projects");
    const offset = projects.offsetTop;
    const scrollPosition = window.scrollY;
    if (scrollPosition > offset - 200) {
        projects.classList.add("animate");
    }
});