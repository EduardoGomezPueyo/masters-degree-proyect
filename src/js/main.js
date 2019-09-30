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
const positionLanding = $("#landing");

const sideTeam = $("#side-team");
const sideServices = $("#side-services");
const sideContact = $("#side-contact");

const navInicio = $("#nav-inicio");
const navServices = $("#nav-services");
const navTeam = $("#nav-team");
const navContact = $("#nav-contact");

const navBar = $(".nav-bar");
const navTitle = $(".nav-title");
let scrollY;

// ** FUNCTIONS **
const dinamicNav = () => {
    scrollY = window.scrollY;
    if (window.innerWidth > 450) {
        if (scrollY != 0) {
            navBar.classList.add("scrolled")
            navTitle.style.display = "none";
        } else {
            navBar.classList.remove("scrolled")
            navTitle.style.display = "block";
        }
    }
}

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


//Nav menu bind
bindElement(navInicio, "click", () => scrollIt(positionLanding));
bindElement(navServices, "click", () => scrollIt(positionServices));
bindElement(navTeam, "click", () => scrollIt(positionTeam));
bindElement(navContact, "click", () => scrollIt(positionContact));

//Scroll navbar
bindElement(window, "scroll", dinamicNav);