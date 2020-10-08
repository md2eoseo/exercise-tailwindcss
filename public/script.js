"use strict";

const start = () => {
  console.log("Hello Tailwindcss!");
  document.querySelectorAll("a").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
    })
  );
};

window.addEventListener("DOMContentLoaded", start);
