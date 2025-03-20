document.addEventListener('DOMContentLoaded', function() {
    // Dropdown-meny
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.previousElementSibling;
        trigger.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
        trigger.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });
        dropdown.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
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
});