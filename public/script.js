"use strict";

const start = () => {
  console.log("Hello Tailwindcss!");
  document.querySelectorAll("a").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
    })
  );
  document
    .querySelectorAll(".dropdown-btn")
    .forEach((el) => el.addEventListener("click", toggleSitemapHeader));
  document
    .querySelectorAll(".bag-view-btn")
    .forEach((el) => el.addEventListener("click", toggleBagView));
  document
    .querySelector(".bag-view-curtain")
    .addEventListener("click", toggleBagView);
};

const toggleBagView = () => {
  const bagView = document.querySelector(".bag-view");
  bagView.classList.toggle("hidden");
};

const toggleSitemapHeader = (e) => {
  const el = e.target;
  const next = e.target.nextElementSibling;
  next.classList.toggle("hidden");
  next.classList.toggle("dropdown-menu-animation");
  el.classList.toggle("dropdown-btn-animation");
};

window.addEventListener("DOMContentLoaded", start);
