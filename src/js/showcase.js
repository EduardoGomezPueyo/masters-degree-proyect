import {
    $,
    bindElement,
} from './utils.js';

//DOM elements
const prevBtn = $(".prev");
const nextBtn = $(".next");
const dots = $(".dot-showcase");
let slides = $(".showcase-slide");


// Functions
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    //Reset slides limits.
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}



//Add functions
bindElement(prevBtn, "click", () => showSlides(slideIndex += -1));
bindElement(nextBtn, "click", () => showSlides(slideIndex += 1));

dots.forEach(dot => {
    bindElement(dot, "click", () => showSlides(slideIndex = parseInt(dot.getAttribute("name"), 10)))
})



// prevBtn.addEventListener("click", () => showSlides(slideIndex += -1));
// nextBtn.addEventListener("click", () => showSlides(slideIndex += 1));

// dots.forEach(dot => {
//     dot.addEventListener("click", function () {
//         showSlides(slideIndex = dot.getAttribute("name"))
//     })
// })