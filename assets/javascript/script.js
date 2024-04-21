"use strict";

// Fonction pour les tabs
const lightbox = new SimpleLightbox(".card a");
const filterizr = new Filterizr(".ecole-elements", {
  gutterPixels: 50,
});
const filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filter) {
  filter.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    filter.classList.add("active");
    const ecole_elements = document.querySelector(".ecole-elements");
    ecole_elements.classList.remove(
      "Gryffindor",
      "Hufflepuff",
      "Ravenclaw",
      "Slytherin"
    );
    ecole_elements.classList.add(filter.textContent);
  });
});
