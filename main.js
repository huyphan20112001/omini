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
          slidesToShow: 2,
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
          slidesToShow: 2,
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
