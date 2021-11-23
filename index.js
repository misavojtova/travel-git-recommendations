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
    console.log(700);
    $nav.removeClass("collapse");
  }
});
