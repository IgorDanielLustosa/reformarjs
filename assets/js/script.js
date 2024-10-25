'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 



/*carousel*/

let currentIndex = 0;

function updateCarousel() {
  const carouselSlide = document.querySelector('.carousel-slide');
  const totalImages = document.querySelectorAll('.carousel-slide img').length;
  const offset = -currentIndex * 100;
  carouselSlide.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  const totalImages = document.querySelectorAll('.carousel-slide img').length;
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function previousSlide() {
  const totalImages = document.querySelectorAll('.carousel-slide img').length;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

function adjustSize(value) {
  document.querySelectorAll('.carousel-slide img').forEach(img => {
    img.style.width = `${value}%`;
  });
}

