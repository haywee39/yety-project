document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});