'use strict';

let goTopBtn = document.querySelector('.scrollup');

function trackScroll() {
let scrolled = window.pageYOffset;
let coords = document.documentElement.clientHeight;

if (scrolled > coords) {
    goTopBtn.classList.add('scrollup__show');
}
if (scrolled < coords) {
    goTopBtn.classList.remove('scrollup__show');
}
}

function backToTop() {
if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
}
}



window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);