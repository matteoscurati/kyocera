import $ from 'jQuery';

require('jquery-ui');
require('modernizr');

$(document).ready(() => {
  console.log("Hello world");
});

$(document).ready(() => {
  const mobileMenu = $(".menu__mobile");

  $('#menu').on('click', (e) => {
    mobileMenu.toggleClass("is-open");
    e.stopPropagation();
    e.preventDefault();
  });

  $(window).on('resize', (e) => {
    if (mobileMenu.hasClass("is-open")) {
      mobileMenu.removeClass("is-open");
    }
    e.stopPropagation();
    e.preventDefault();
  });
});
