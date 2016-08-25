import $ from 'jQuery';
import classie from 'desandro-classie';
import smoothScroll from 'smooth-scroll';

require('jquery-ui');
require('modernizr');

$(document).ready(() => {
  smoothScroll.init({
      offset: 100
    });
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

function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector(".logo");
    if (distanceY > shrinkOn) {
      classie.add(header,"is-smaller");
    } else {
      if (classie.has(header,"is-smaller")) {
        classie.remove(header,"is-smaller");
      }
    }
  });
}

window.onload = init();
