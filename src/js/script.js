// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth",
    });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const premierItem = document.querySelector(".carousel__item");
    const scrollAmount = premierItem.clientWidth;
    
    document.querySelector(".carousel").scrollBy(scrollAmount, 0);
});