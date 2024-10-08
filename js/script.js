"use strict";
/*Create circular points for circle bar*/
const circles = document.querySelectorAll(".circle");

const pointFunction = function (element) {
  let points = "";
  const dots = element.getAttribute("dots");
  const percent = element.getAttribute("percent");
  const neonPoints = Math.floor(dots * percent);
  const rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="point" style="--i:${i}; --rotate:${rotate}deg"></div>`;
  }

  element.innerHTML = points;

  const allPoints = element.querySelectorAll(".point");
  for (let i = 0; i < neonPoints; i++) {
    allPoints[i].classList.add("neon");
  }
};

circles.forEach(pointFunction);

// Filter portfolio with MixItUp
var mixer = mixitup(".portfolio-gallery");

// Active navigation bar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".site-header__nav-link");

const options = {
  threshold: 0.2,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `a[href="#${entry.target.id}"]`
      );
      activeLink.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => {
  observer.observe(section);
});

// Sticky header
const header = document.querySelector(".site-header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 10);
});

// Toggle icon navbar
const menuIcon = document.querySelector("#site-header__menu-icon");
const navbar = document.querySelector(".site-header__nav-list");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Hide navbar and cross icon when screen is scrolled
window.onscroll = function () {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// Fade in pages
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      entry.target.classList.add("show-content");
    } else {
      entry.target.classList.remove("show-content");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => {
  observer1.observe(el);
});

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => {
  observer1.observe(el);
});

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => {
  observer1.observe(el);
});
