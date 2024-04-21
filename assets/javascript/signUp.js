"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const choix_maison = () => {
    if (select_house.value != "aucun") {
      fieldset.forEach((etape) => {
        etape.className = select_house.value;
      });
    } else {
      fieldset.forEach((etape) => {
        etape.classList.remove(etape.classList);
      });
    }
    console.log(fieldset.className);
  };
  const fieldset = document.querySelectorAll("fieldset");
  const select_house = document.getElementById("maison");
  const body = document.querySelector("body");
  select_house.addEventListener("change", choix_maison);
});
