import {
    $,
    bindElement,
    bindElements
} from './utils.js';

//Get DOM elements
const openSlide = $("#open-slide-link");
const closeSlide = $(".btn-close");
const sideMenu = $('#side-menu');
const closeModals = $('.btn-close-list');


//Set functions
const openSlideMenu = () => sideMenu.classList.add("active");
const closeSlideMenu = () => sideMenu.classList.remove("active");

const getActive = (e) => {
    e.target.nextElementSibling.classList.toggle("active");
    e.target.innerHTML = e.target.innerHTML === "+" ? "&times;" : "+"
};

//Add functions
bindElement(openSlide, "click", openSlideMenu);
bindElement(closeSlide, "click", closeSlideMenu);
bindElements(closeModals, "click", getActive);


// Todos
// Find a way to use toggle with the side menu