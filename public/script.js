"use strict";

const start = () => {
  console.log("Hello Tailwindcss!");
  document.querySelectorAll("a").forEach(preventDefaultClick);

  document.querySelectorAll(".dropdown-btn").forEach(toggleSitemapHeader);
};

const toggleSitemapHeader = (el) =>
  el.addEventListener("click", (e) => {
    const next = e.target.nextElementSibling;
    next.classList.toggle("hidden");
  });

const preventDefaultClick = (el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });

window.addEventListener("DOMContentLoaded", start);
