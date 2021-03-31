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

const swiper = new Swiper(".swiper-groop-1", {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

});

const swiper2 = new Swiper(".swiper-groop-2", {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next-2",
    prevEl: ".button-prev-2",
  },


});

const swiperDays = new Swiper(".swiper-days", {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


