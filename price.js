const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuMobile = $(".background-menu");
const menuBtn = $(".menu-icon");

const openAnswerList = $$(".show-answer");
const questionItem = $(".question-item");

const closeMenu = $(".close-menu__icon");

const app = {
  handleEvents: function () {
    const openAnswer = Array.from(openAnswerList);
    console.log(openAnswer);
    menuBtn.onclick = function () {
      menuMobile.classList.add("enable");
      menuMobile.classList.remove("disable");
    };
    closeMenu.onclick = function () {
      menuMobile.classList.remove("enable");
      menuMobile.classList.add("disable");
    };
    openAnswer.forEach((itemAnswer) => {
      itemAnswer.onclick = function () {
        itemAnswer.classList.toggle("close");
        // if (openAnswer.classList.contains("close")) {
        //   _this.showAnswer();
        // }
        itemAnswer.classList.toggle("open");
      };
    });
  },
  start: function () {
    this.handleEvents();
  },
};

app.start();
