const swiper = new Swiper('.main-slider', {
    slidesPerView: 2,
    spaceBetween:30,
   loop: true,
  navigation: {
    nextEl: '.main-slider__arrow',
   
    },


});

let burger = document.querySelector('.btn-open-menu');
let closeMenu = document.querySelector('.btn-close-menu');
let menuMobile = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'flex';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
})