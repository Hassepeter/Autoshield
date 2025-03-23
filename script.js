document.addEventListener('DOMContentLoaded', function() {
    // Dropdown-meny
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.previousElementSibling;
        trigger.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateX(-50%) translateY(0)';
        });
        trigger.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!dropdown.matches(':hover')) {
                    dropdown.style.display = 'none';
                    dropdown.style.opacity = '0';
                    dropdown.style.transform = 'translateX(-50%) translateY(-10px)';
                }
            }, 200);
        });
        dropdown.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateX(-50%) translateY(0)';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            dropdown.style.transform = 'translateX(-50%) translateY(-10px)';
        });
    });

    // Swiper.js för kundrecensioner
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const logoText = document.querySelector('.logo-text a');

    hamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Adjust logo size based on screen width
    function adjustLogoSize() {
        if (window.innerWidth < 768) {
            logoText.style.fontSize = '1.5rem';
        } else {
            logoText.style.fontSize = '2rem';
        }
    }

    window.addEventListener('resize', adjustLogoSize);
    adjustLogoSize(); // Initial call
});