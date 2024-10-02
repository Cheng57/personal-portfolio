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
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry.target.id, entry.isIntersecting);
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `a.site-header__nav-link[href="#${entry.target.id}"]`
      );
      activeLink.classList.add("active");
    }
  });
};
const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
});
