const menuBtn = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.navbar__container');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active');

    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});