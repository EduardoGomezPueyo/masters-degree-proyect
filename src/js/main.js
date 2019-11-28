import {
    $,
    bindElement,
    bindElements
} from './utils.js';

// ** DOM ELEMENTS **

//Menu elements
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
const navLogo = $(".nav-logo");

const navBar = $(".nav-bar");
const navTitle = $(".nav-title");
let scrollY;

//Contact floating label
let inputText = $("#full-name");
let inputTextLabel = $("#full-name").previousElementSibling;
let inputMail = $("#email");
let inputMailLabel = $("#email").previousElementSibling;
let inputMessage = $("#message");
let inputMessageLabel = $("#message").previousElementSibling;

// ** FUNCTIONS **

// Dynamic nav
const dynamicNav = () => {
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

// Mobile menu nav
const openSlideMenu = () => sideMenu.classList.add("active");
const closeSlideMenu = () => sideMenu.classList.remove("active");

// Scroll Function
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}

const getActive = e => {
    e.target.nextElementSibling.classList.toggle("active");
    e.target.innerHTML = e.target.innerHTML === "+" ? "&times;" : "+"
};

// Create a showcase slider
new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Contact floating label functions
function floatingLabel(element) {
    let testValue = element.nextElementSibling.value;
    if (testValue != '') {
        element.classList.add("show");
    } else {
        element.classList.remove("show");
    }
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
bindElement(navLogo, "click", () => scrollIt(positionLanding));
bindElement(navServices, "click", () => scrollIt(positionServices));
bindElement(navTeam, "click", () => scrollIt(positionTeam));
bindElement(navContact, "click", () => scrollIt(positionContact));

//Scroll navbar
bindElement(window, "scroll", dynamicNav);

//Contact floating
bindElement(inputText, "keyup", () => floatingLabel(inputTextLabel));
bindElement(inputMail, "keyup", () => floatingLabel(inputMailLabel));
bindElement(inputMessage, "keyup", () => floatingLabel(inputMessageLabel));