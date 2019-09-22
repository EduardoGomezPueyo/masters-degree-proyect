import {
    $,
    bindElement
} from "./utils.js";


//DOM elements
const prevBtn = $(".prev-team");
const nextBtn = $(".next-team");
const dots = $(".dot-team");
const slides = $(".person-item");
const img1 = $("#modal-1-img");


// Functions
function showSlides(n) {
    // Reset slides limits.
    if (n > slides.length) {
        slideIndex = 1;
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

let slideIndex = 1;
showSlides(slideIndex);


// Bind Events
bindElement(prevBtn, 'click', () => showSlides(slideIndex -= 1));
bindElement(nextBtn, 'click', () => showSlides(slideIndex += 1));

dots.forEach(dot => {
    bindElement(dot, "click", () => showSlides(slideIndex = parseInt(dot.getAttribute("name"), 10)));
})





//Let's try Modaly
new Modaly("#modal-1", {
    overlay: false,
});
new Modaly("#modal-2", {
    overlay: false,
});
new Modaly("#modal-3", {
    overlay: false,
});