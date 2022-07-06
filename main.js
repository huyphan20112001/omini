$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    isFinite: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: "unslick",
      },
    ],
  });
});
