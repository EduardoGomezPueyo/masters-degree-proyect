import {
    $,
    bindElement,
    bindElements
} from './utils.js';

// ** DOM ELEMENTS **
const openSlide = $("#open-slide-link");
const closeSlide = $(".btn-close");
const sideMenu = $('#side-menu');
const closeModals = $('.btn-close-list');

//Scroll DOM selections
const positionServices = $("#services");
const positionTeam = $("#team");
const positionContact = $("#contact");
const sideTeam = $("#side-team");
const sideServices = $("#side-services");
const sideContact = $("#side-contact");

// ** FUNCTIONS **
const openSlideMenu = () => sideMenu.classList.add("active");
const closeSlideMenu = () => sideMenu.classList.remove("active");

const getActive = (e) => {
    e.target.nextElementSibling.classList.toggle("active");
    e.target.innerHTML = e.target.innerHTML === "+" ? "&times;" : "+"
};


//Scroll Function
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}


// ** Add functions **
bindElement(openSlide, "click", openSlideMenu);
bindElement(closeSlide, "click", closeSlideMenu);
bindElements(closeModals, "click", getActive);


//Side menu bind
bindElement(sideServices, "click", () => {
    scrollIt(positionServices);
    closeSlideMenu();
})
bindElement(sideTeam, "click", () => {
    scrollIt(positionTeam);
    closeSlideMenu();
})
bindElement(sideContact, "click", () => {
    scrollIt(positionContact);
    closeSlideMenu();
})