"use strict";

const HTML = {};

const start = () => {
  console.log("Hello Tailwindcss!");

  HTML.nav = document.querySelector(".nav-top");
  HTML.bagView = document.querySelector(".bag-view");
  HTML.bagViewBtnCarets = document.querySelectorAll(".bag-view-btn-caret");
  HTML.menuicon = document.querySelector(".menuicon");
  HTML.menu = document.querySelector(".menu");

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
  // maybe I can just use :checked pseudo class for animation
  document
    .querySelector(".menuicon-checkbox")
    .addEventListener("click", (e) => {
      if (e.target.checked) {
        if (!HTML.bagView.classList.contains("hidden")) {
          HTML.bagView.classList.add("hidden");
          HTML.bagViewBtnCarets.forEach((el) => {
            el.classList.add("hidden");
          });
        }
        HTML.nav.classList.add("menu-on");
      } else {
        HTML.nav.classList.remove("menu-on");
      }
    });
};

const toggleBagView = () => {
  HTML.bagView.classList.toggle("hidden");
  HTML.bagViewBtnCarets.forEach((el) => {
    el.classList.toggle("hidden");
  });
};

const toggleSitemapHeader = (e) => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    const el = e.target;
    const next = e.target.nextElementSibling;
    next.classList.toggle("hidden");
    next.classList.toggle("dropdown-menu-animation");
    el.classList.toggle("dropdown-btn-animation");
  }
};

window.addEventListener("DOMContentLoaded", start);
