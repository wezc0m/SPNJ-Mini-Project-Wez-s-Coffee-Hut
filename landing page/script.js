document.addEventListener('DOMContentLoaded', function() {
    // Form submission (keeping your existing functionality)
    const form = document.getElementById('joinForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            const message = document.getElementById('joinMessage');
            if (emailInput && message) {
                if (emailInput.value.trim()) {
                    message.textContent = "Thank you for joining! Please check your email soon.";
                    message.style.color = "#2d7a2d";
                    form.reset();
                } else {
                    message.textContent = "Please enter a valid email address.";
                    message.style.color = "#c00";
                }
            }
        });
    }

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburgerBtn');
    const nav = document.getElementById('mainNav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            const isActive = nav.classList.toggle('active');
            hamburger.classList.toggle('active', isActive);
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        // Close nav when a nav button is clicked (on mobile)
        nav.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        /* Optional: Close nav if window resized to desktop 
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        */
    }
});