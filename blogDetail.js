const $ = document.querySelector.bind(document);

const menuMobile = $(".background-menu");
const closeMenu = $(".close-menu__icon");
const menuBtn = $(".menu-icon");

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
