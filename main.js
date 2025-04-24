// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submission simulation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
