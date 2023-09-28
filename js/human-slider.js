const humanSwiper = new Swiper('.human-slider', {
    effect: 'coverflow',
    
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.human-slider-button-next',
      prevEl: '.human-slider-button-prev',
    },
  
    simulateTouch: true,
  
    spaceBetween: 97,

    centeredSlides: true,

    slidesPerView: 'auto',

    coverflowEffect: {
        rotate: 0,
        stretch: -2300,
        depth: 3800,
        modifier: 1,
        slideShadows: false,
        slideScaleEffect: 1,
    }
});