// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'mooth'
        });
    });
});

// Animations for elements
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate');
    });
});

// Dynamically loading content
const loadContentButton = document.getElementById('load-content-button');
loadContentButton.addEventListener('click', function() {
    const contentContainer = document.getElementById('content-container');
    const newContent = `
        <h2>New Content</h2>
        <p>This is dynamically loaded content.</p>
    `;
    contentContainer.innerHTML += newContent;
});

// Interactive elements
const hoverElements = document.querySelectorAll('.hover-effect');
hoverElements.forEach(element => {
    element.addEventListener('mouseover', function() {
        this.style.background-color = '#ccc';
    });
    element.addEventListener('mouseout', function() {
        this.style.background-color = '';
   });
});