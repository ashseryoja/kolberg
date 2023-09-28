const centeredSwiper = new Swiper('.centered-swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.centered-slider-button-next',
      prevEl: '.centered-slider-button-prev',
    },
  
    simulateTouch: true,
  
    slidesPerView: 'auto',
  
    spaceBetween: 97,

    centeredSlides: true,
  });