(function () {
  "use strict";

  const mainText = "Відкрийте двері в щасливе дитинство разом з нами!";
  const alternativeText = "Заповніть форму і ми обов'язково зателефонуємо!";

  let registrationBtn = document.querySelector("#registration"),
    characters = document.querySelectorAll(".character"),
    door = document.querySelector(".header__open-hc"),
    headerForm = document.querySelector(".header__form"),
    helloText = document.querySelector(".header__text");

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
      className.classList.remove("fadeOut");
      className.classList.add("fadeIn");
    }, t);
  }

  function fadeOut(className, t) {
    setTimeout(() => {
      className.classList.remove("fadeIn");
      className.classList.add("fadeOut");
    }, t);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  registrationBtn.addEventListener("click", () => {
    door.classList.add("fadeOut");

    getElOut(door, 1000);
    getElIn(headerForm, 1000);
    fadeOut(headerForm, 0);
    fadeIn(headerForm, 1200);

    helloText.innerText = alternativeText;

    fadeOut(registrationBtn, 0);
    getElOut(registrationBtn, 1000);
  });

  headerForm.addEventListener("reset", () => {
    fadeOut(headerForm, 0);
    getElOut(headerForm, 1000);
    getElIn(door, 1200);
    fadeIn(door, 1300);

    getElIn(registrationBtn, 1000);
    fadeIn(registrationBtn, 1200);

    helloText.innerText = mainText;
  });
})();

(function () {
  "use strict";

  let days = document.querySelectorAll(".day"),
    positionsX = [],
    positionsY = [];

  function setPosition(el, top, left) {
    let trn = "transform: translate(";

    if (top > 20) {
      trn += `10px,`;
    } else if (top < 0) {
      trn += `-10px,`;
    }

    if (left > 20) {
      trn += `10px`;
    } else if (left < 0) {
      trn += `-10px`;
    }

    trn += ");";

    el.style = trn;
  }

  days.forEach((day) => {
    day.addEventListener("mouseover", (e) => {
      let dayAttrs = day.querySelectorAll(".day__attr"),
        t = null,
        l = null;

      if (positionsX.length >= 2) {
        l = positionsX[1] - positionsX[0];
        positionsX.shift();
      } else {
        positionsX.push(e.screenX);
      }

      if (positionsY.length >= 2) {
        t = positionsY[1] - positionsY[0];
        positionsY.shift();
      } else {
        positionsY.push(e.screenY);
      }

      dayAttrs.forEach((day) => {
        setPosition(day, l, t);
      });
    });
  });
})();

(function () {
  "use strict";

  let personsImg = document.querySelectorAll(".person__img");

  personsImg.forEach((img) => {
    img.addEventListener("click", () => {
      let info = img.querySelector(".person__info");
      console.log(info)
      info.classList.toggle("fadeOut");
    });
  });
})();
