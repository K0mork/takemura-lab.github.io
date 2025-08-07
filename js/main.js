document.addEventListener('DOMContentLoaded', function() {
    // Load head
    fetch('head.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for head.html');
            }
            return response.text();
        })
        .then(data => {
            document.head.innerHTML = data;
        })
        .catch(error => console.error('Error loading head:', error));


    // Load header
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for header.html');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Setup hamburger menu toggle after header is loaded
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for footer.html');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            // Dynamically update the year in the footer
            const yearSpan = document.getElementById('current-year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
