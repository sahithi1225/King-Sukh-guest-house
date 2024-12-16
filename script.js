document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation menu on hamburger icon click (for mobile view)
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navigationMenu = document.querySelector('.navigation');

    // Toggle the navigation menu visibility
    hamburgerIcon.addEventListener('click', function () {
        navigationMenu.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Smooth scroll to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the mobile menu after clicking a link (for mobile view)
            if (navigationMenu.classList.contains('active')) {
                navigationMenu.classList.remove('active');
            }
        });
    });
});
