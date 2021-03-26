(function () {
  "use strict";

  let registrationBtn = document.querySelector("#registration"),
    characters = document.querySelectorAll(".character"),
    door = document.querySelector(".header__open-hc"),
    headerForm = document.querySelector(".header__form");

  registrationBtn.addEventListener("mouseover", () => {
    characters.forEach((characters) => {
      characters.classList.add("character-fadeIn");
    });
  });

  registrationBtn.addEventListener("mouseout", () => {
    characters.forEach((characters) => {
      characters.classList.remove("character-fadeIn");
    });
  });

function getElOut(className, t) {
   setTimeout(() => {
      className.classList.remove("d-block");
      className.classList.add("d-none");
    }, t);
}

function getElIn(className, t) {
   setTimeout(() => {
      className.classList.remove("d-none");
      className.classList.add("d-block");
    }, t);
}

function fadeIn(className, t) {
   setTimeout(() => {
      className.classList.add("fadeIn");
    }, t);
}

function fadeOut(className, t) {
   setTimeout(() => {
      className.classList.add("fadeOut");
    }, t);
}

  registrationBtn.addEventListener("click", () => {
    door.classList.add("fadeOut");

    getElOut(door, 1000);
    getElIn(headerForm, 1000);
    fadeOut(headerForm, 0);
    fadeIn(headerForm, 1200);

    let mainText = document.querySelector('.header__text');
    mainText.innerText = "Заповніть форму і ми обов'язково зателефонуємо!";

    fadeOut(registrationBtn, 0);
    getElOut(registrationBtn, 1000);

  });
})();
