$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoPlaySpeed: 1500,
          isFinite: true,
          draggable: true,
          dots: true,
        },
      },
      {
        breakpoint: 530,
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
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoPlaySpeed: 1500,
          isFinite: true,
          draggable: true,
          dots: true,
          centerMode: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".blog-menu").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoPlaySpeed: 1500,
          isFinite: true,
          draggable: true,
          dots: true,
        },
      },
      {
        breakpoint: 530,
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

const openAnswer = ABC(".show-answer");
console.log(openAnswer);
const questionItem = abc(".question-item");

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
    openAnswer.onclick = function () {
      console.log(123);
      openAnswer.classList.toggle("close");
      // if (openAnswer.classList.contains("close")) {
      //   _this.showAnswer();
      // }
      openAnswer.classList.toggle("open");
    };
  },
  start: function () {
    this.handleEvents();
  },
};

app.start();
