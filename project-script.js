document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section's id
        const targetSection = document.getElementById(targetId); // Find the target section by id

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});