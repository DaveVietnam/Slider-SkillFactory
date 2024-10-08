"use strict";

///////////////////////////////////////
// Slider

const slider = function () {
  const slides = document.querySelectorAll(".projects__project");
  const btnLeft = document.querySelector(".projects__pagination-icon-left");
  const btnRight = document.querySelector(".projects__pagination-icon-right");
  const paginationDots = document.querySelectorAll(
    ".projects__pagination-item"
  );
  const locationItem = document.querySelectorAll(".projects__list-item");

  let curSlide = 0;
  const maxSlide = slides.length;

  //the process of switching slides

  const switchSlide = function (slide) {
    slides.forEach(function (s, i) {
      if (i === slide) {
        s.style.display = "flex";
      } else {
        s.style.display = "none";
      }
    });
    console.log(slide);
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    console.log(curSlide);

    switchSlide(curSlide);
    activeDots(curSlide);
    activeLocation(curSlide);
    locationSwitch(curSlide);
  };

  //Previous slide
  const previousSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    switchSlide(curSlide);
    activeDots(curSlide);
    activeLocation(curSlide);
    locationSwitch(curSlide);
    console.log(curSlide);
  };

  //switching slide with dots

  const dotSwitch = function (slide) {
    paginationDots.forEach((dot, i) => {
      dot.addEventListener("click", function () {
        switchSlide(i);
        activeDots(i);
        activeLocation(i);
      });
    });
  };

  dotSwitch();

  //Event Handlers

  btnLeft.addEventListener("click", previousSlide);
  btnRight.addEventListener("click", nextSlide);

  //active pagination

  const activeDots = function (slide) {
    paginationDots.forEach(function (d, i) {
      if (i === slide) {
        d.classList.add("projects__pagination-item--active");
      } else {
        d.classList.remove("projects__pagination-item--active");
      }
    });
  };

  //active location

  const activeLocation = function (slide) {
    locationItem.forEach(function (el, i) {
      if (el.dataset.tab === String(slide + 1)) {
        el.classList.add("projects__list-item--active");
      } else {
        el.classList.remove("projects__list-item--active");
      }
    });
  };

  activeLocation(curSlide);

  //switching slides with location

  const locationSwitch = function (slide) {
    locationItem.forEach((loc, i) => {
      loc.addEventListener("click", function () {
        let location = loc.dataset.tab;
        slide = location - 1;
        switchSlide(slide);
        activeLocation(slide);
        activeDots(slide);
      });
    });
  };

  locationSwitch(curSlide);

  //keyboard switching
  document.addEventListener("keydown", function (e) {
    console.log(e); // checking keys' names
    if (e.key === "ArrowLeft") previousSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};

slider();
