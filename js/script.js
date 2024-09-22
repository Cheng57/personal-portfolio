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
