$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /* click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });
});

$(window).resize(function () {
  if ($(window).width() < 800) {
    $nav.removeClass("collapse");
  }
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 20,
//   responsiveClass: true,
//   autoplay: true,
//   autoplayTimeout: 4000,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     700: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });
