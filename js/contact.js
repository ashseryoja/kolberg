const contactSwiper = new Swiper('.contact-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.contact-button-next',
      prevEl: '.contact-button-prev',
    },
  
    simulateTouch: true,
  
    slidesPerView: 'auto',
  
    spaceBetween: 16,
  
    // breakpoints: {
    //   700: {
    //     slidesPerView: 1,
    //   }
    // },
    
  });
  
  swiper.width = 800;