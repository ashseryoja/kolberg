const miniSwiper = new Swiper('.mini-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.mini-slider-button-next',
    prevEl: '.mini-slider-button-prev',
  },

  simulateTouch: true,

  slidesPerView: 1,

  spaceBetween: 16,

  breakpoints: {
      1600: {
        slidesPerView: 2.2,
      }
  },
});