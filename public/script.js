"use strict";

const start = () => {
  console.log("Hello Tailwindcss!");
  document.querySelectorAll("a").forEach(preventDefaultClick);
  document.querySelectorAll(".dropdown-btn").forEach(toggleSitemapHeader);
  document.querySelectorAll(".bag-view-btn").forEach(toggleBagView);
};

const toggleBagView = (el) =>
  el.addEventListener("click", (e) => {
    const bagView = document.querySelector(".bag-view");
    bagView.classList.toggle("hidden");
  });

const toggleSitemapHeader = (el) =>
  el.addEventListener("click", (e) => {
    const next = e.target.nextElementSibling;
    next.classList.toggle("hidden");
    next.classList.toggle("dropdown-menu-animation");
    el.classList.toggle("dropdown-btn-animation");
  });

const preventDefaultClick = (el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });

window.addEventListener("DOMContentLoaded", start);
