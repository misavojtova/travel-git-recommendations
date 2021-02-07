$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 5,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
