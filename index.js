document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current navigation item
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        if(link.href === window.location.href){
            link.classList.add('active');
        }
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if(!form.checkValidity()) {
                e.preventDefault();
                Array.from(form.elements).forEach(input => {
                    if (input.checkValidity()) {
                        input.classList.remove('invalid');
                    } else {
                        input.classList.add('invalid');
                    }
                });
            }
        });
    });

    // Animated counters for statistics (example)
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        let count = 0;
        const increment = target / 200;
        const updateCount = () => {
            if(count < target) {
                count += increment;
                el.innerText = Math.ceil(count);
                setTimeout(updateCount, 10);
            } else {
                el.innerText = target;
            }
        };
        updateCount();
    }

    // Trigger counter animation when element is in view
    const counterElements = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counterElements.forEach(el => {
        observer.observe(el);
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        // Toggle the 'active' class on the navbar when the button is clicked
        navbar.classList.toggle("active");
    });
});
