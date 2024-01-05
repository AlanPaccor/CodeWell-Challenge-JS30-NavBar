document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menuIcon');
    const menuIconMobile = document.querySelector('.menuIconMobile');
    const mobileMenu = document.querySelector('.MobileMenu');

    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('showMobileMenu');
    });

    menuIconMobile.addEventListener('click', function () {
        mobileMenu.classList.remove('showMobileMenu');
    });
});