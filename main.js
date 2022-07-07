$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoPlaySpeed: 1500,
    isFinite: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 850,
        settings: "unslick",
      },
    ],
  });
});

$(document).ready(function () {
  $(".extension-menu").slick({
    responsive: [
      {
        breakpoint: 1920,
        settings: "unslick",
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoPlaySpeed: 1500,
          isFinite: true,
          draggable: true,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".blog-menu").slick({
    responsive: [
      {
        breakpoint: 1920,
        settings: "unslick",
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoPlaySpeed: 1500,
          isFinite: true,
          draggable: true,
          dots: true,
        },
      },
    ],
  });
});

const abc = document.querySelector.bind(document);
const ABC = document.querySelectorAll.bind(document);

const menuMobile = abc(".background-menu");
const menuBtn = abc(".menu-icon");

const closeMenu = abc(".close-menu__icon");

const app = {
  handleEvents: function () {
    menuBtn.onclick = function () {
      menuMobile.classList.add("enable");
      menuMobile.classList.remove("disable");
    };
    closeMenu.onclick = function () {
      menuMobile.classList.remove("enable");
      menuMobile.classList.add("disable");
    };
  },
  start: function () {
    this.handleEvents();
  },
};

app.start();
