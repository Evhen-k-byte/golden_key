///= bootstrap/dom/data
///= bootstrap/dom/event-handler
///= bootstrap/dom/manipulator
///= bootstrap/dom/selector-engine

///= bootstrap/alert
///= bootstrap/button
///= bootstrap/carousel
///= bootstrap/collapse
///= bootstrap/dropdown
///= bootstrap/modal
///= bootstrap/tooltip
///= bootstrap/popover
///= bootstrap/scrollspy
///= bootstrap/tab
///= bootstrap/toast

//= scripts.js

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 400,
    slidesPerView: 2,
      spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });