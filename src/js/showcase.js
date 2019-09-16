import {
    $,
    bindElement,
    bindElements
} from './utils.js';

//DOM elements
const prevBtn = $(".prev");
const nextBtn = $(".next");
const dots = $(".dot-showcase");

// Functions
function showSlides(n) {
    let i;
    let slides = $(".showcase-slide");
    let dots = $(".dot-showcase");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

//Add functions

prevBtn.addEventListener("click", () => showSlides(slideIndex += -1));
nextBtn.addEventListener("click", () => showSlides(slideIndex += 1));

dots.forEach(dot => {
    dot.addEventListener("click", function () {
        showSlides(slideIndex = dot.getAttribute("name"))
    })
})