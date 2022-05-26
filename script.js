"use strict";

const panels = document.querySelectorAll(".panel");

const panelsRemoveClass = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    panelsRemoveClass();
    panel.classList.add("active");
  });
});
