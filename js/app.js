const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
let photo = document.querySelectorAll('.gallery__photo');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('hidden');

    if (menu.classList.contains('hidden')) {
        menuBtn.src = "images/icons/menu_black.svg";
        menuBtn.style.width = "30px";
    } else {
        menuBtn.src = "images/icons/close_black.svg";
        menuBtn.style.width = "20px";
    }
});

const addPopup = () => {}

const closePopup = () => {}

const resizeImage = () => {}