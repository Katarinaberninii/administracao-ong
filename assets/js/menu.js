document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('active');
        });
    }

    // Fecha menu ao clicar fora no mobile
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 && nav.classList.contains('active')) {
            if (!nav.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        }
    });
});
