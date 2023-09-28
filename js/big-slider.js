const swiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  simulateTouch: true,

  slidesPerView: 1,

  spaceBetween: 16,

  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 2,
    }
  },
  
});

swiper.width = 800;