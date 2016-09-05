import $ from 'jQuery';
//import Chart from 'chart.js'
import classie from 'desandro-classie';
import smoothScroll from 'smooth-scroll';
import typed from 'typed.js'

require('jquery-ui');
require('modernizr');
require('wow');

$(document).ready(() => {
  smoothScroll.init({
      offset: 100
    });
});

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});

$(document).ready(() => {
  $("#typed").typed({
    strings: ["first sentence", "second sentence", "third sentence"],
    showCursor: false,
    backSpeed: 0,
    backDelay: 500
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

$(document).ready(function() {
  $('.spinta__answer').hide();
  $('.spinta__list').click(function() {
    let answer = $(this).closest(".spinta__list").find(".spinta__answer");
    answer.toggle(function() {
      answer;
    });
  });
});
