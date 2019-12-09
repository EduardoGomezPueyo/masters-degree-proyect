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

//Underline Nav elements
const navLinks = $(".navbar-span");
const currentLinkIndicator = $(".underline");
const firstNavLink = navLinks[0];
const firstPosition = firstNavLink.getBoundingClientRect().left;
const firstWidth = firstNavLink.getBoundingClientRect().width;

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

// Team Selectors for desktop usage
const desktopImgsContainer = $(".container-team-images");
const desktopImgs = $(".desktop-team-img");
const firstModalDesktop = $("#first-doctor");
const secondModalDesktop = $("#second-doctor");
const thirdModalDesktop = $("#third-doctor");
const closeModalsTeam = $(".btn-close-modal-team")

const nameDiv = $("#modal-name");
const imagesTeam = $(".no-hover");
const teamParagraph = $("#team-presentation");

// Elements to hide on contact focus
const teamSection = $(".team");
const contactFormElements = $("#contact-form").elements;

//Contact floating label
let inputText = $("#full-name");
let inputTextLabel = $("#full-name").previousElementSibling;
let inputMail = $("#email");
let inputMailLabel = $("#email").previousElementSibling;
let inputMessage = $("#message");
let inputMessageLabel = $("#message").previousElementSibling;



// ** FUNCTIONS **

//Underline Nav
function positionIndicator(position = firstPosition, width = firstWidth) {
    currentLinkIndicator.style.transform =
        "translate3d(" +
        (position) +
        "px,0,0) scaleX(" +
        (width * 0.01) +
        ")";
}

positionIndicator();

function tabNavLinkEvent(e) {
    positionIndicator(e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().width);
};

function scrollPosition() {
    let scrollY = window.scrollY;
    let positionServices = $("#services").offsetTop;
    let positionTeam = $("#team").offsetTop;
    let positionContact = $("#contact").offsetTop;
    let positionLanding = $("#landing").offsetTop;
    if (scrollY >= positionContact) {
        let position = navLinks[3].getBoundingClientRect().left;
        let width = navLinks[3].getBoundingClientRect().width;
        positionIndicator(position, width)
    }
    if (scrollY >= positionTeam && scrollY < positionContact) {
        let position = navLinks[2].getBoundingClientRect().left;
        let width = navLinks[2].getBoundingClientRect().width;
        positionIndicator(position, width)
    }
    if (scrollY >= positionServices && scrollY < positionTeam) {
        let position = navLinks[1].getBoundingClientRect().left;
        let width = navLinks[1].getBoundingClientRect().width;
        positionIndicator(position, width)
    }
    if (scrollY >= positionLanding && scrollY < positionServices) {
        let position = navLinks[0].getBoundingClientRect().left;
        let width = navLinks[0].getBoundingClientRect().width;
        positionIndicator(position, width)
    }

}

//Dynamic nav
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

//Mobile menu nav - open/close functions
const openSlideMenu = () => sideMenu.classList.add("active");
const closeSlideMenu = () => sideMenu.classList.remove("active");

//Scroll Function
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}

//Activate section item function
const getActive = e => {
    e.target.nextElementSibling.classList.toggle("active");
    e.target.innerHTML = e.target.innerHTML === "+" ? "&times;" : "+"
};

//Create a showcase slider
new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Mobile modals with Modaly.js
new Modaly("#modal-1", {
    overlay: false,
});
new Modaly("#modal-2", {
    overlay: false,
});
new Modaly("#modal-3", {
    overlay: false,
});

// ** Team Modal Functions **

//Open/close modals
const openModals = (element) => {
    element.classList.remove("hide")
}

const closeModal = e => {
    e.target.parentElement.parentElement.classList.add("hide");
    desktopImgsContainer.classList.remove("hide");
    desktopImgs.forEach(element => {
        element.classList.remove("hide");
    })
    teamParagraph.classList.remove("hide");
    nameDiv.classList.remove("hide");
}

const hideImages = () => {
    desktopImgsContainer.classList.add("hide");
    desktopImgs.forEach(element => {
        element.classList.add("hide");
    })
    teamParagraph.classList.add("hide");
    nameDiv.classList.add("hide");
}
//Hover effect on images
const hoverImages = (e) => {
    e.target.classList.toggle("no-hover");
}

//Get Name with hover
function getName(e) {
    let content = e.target.getAttribute("name");
    nameDiv.innerHTML = content;
}

//Get focus status and apply styles
function isFocused() {
    for (let i = 0; i < contactFormElements.length; i++) {
        let elem = contactFormElements[i];
        elem.focused = false;

        elem.onfocus = function () {
            this.focused = true;
        };
        elem.onblur = function () {
            this.focused = false;
        };

        elem.hasFocus = function () {
            return this.focused;
        };
    }
}
isFocused();

function removeImages(e) {
    if (window.innerWidth < 450) {
        if (e.target.focused) {
            teamSection.classList.add("hide");
        } else {
            teamSection.classList.remove("hide");
        }
    }
}

//Contact floating label functions
function floatingLabel(element) {
    let testValue = element.nextElementSibling.value;
    if (testValue != '') {
        element.classList.add("show");
    } else {
        element.classList.remove("show");
    }
}


// ** Add functions **

//Side menu open/close
bindElement(openSlide, "click", openSlideMenu);
bindElement(closeSlide, "click", closeSlideMenu);

//Activate section items
bindElements(closeModals, "click", getActive);

//Side menu bind to dynamic scroll
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

//Underline state bar
bindElements(navLinks, "click", tabNavLinkEvent);
bindElements(navLinks, "mouseover", tabNavLinkEvent);
bindElements(navLinks, "mouseout", scrollPosition);
bindElement(window, "scroll", scrollPosition);
bindElement(window, "resize", () => {
    currentLinkIndicator.style.display = "none";
    setTimeout(function () {
        scrollPosition();
        currentLinkIndicator.style.display = "inline-block";
    }, 1000);
});

//Scroll navbar
bindElement(window, "scroll", dynamicNav);

//Team modals open/close + hover images effects
bindElements(desktopImgs, "mouseover", hoverImages);
bindElements(desktopImgs, "mouseout", hoverImages);
bindElements(closeModalsTeam, "click", (element) => {
    closeModal(element);
});
bindElement(firstModalDesktop, "click", () => {
    openModals($("#first-modal-desktop"));
    hideImages();
});
bindElement(secondModalDesktop, "click", () => {
    openModals($("#second-modal-desktop"));
    hideImages();
});
bindElement(thirdModalDesktop, "click", () => {
    openModals($("#third-modal-desktop"));
    hideImages();
});

bindElements(imagesTeam, "mouseover", getName);

//Hide images while contact is focused
bindElements(Array.from(contactFormElements), "focus", removeImages);
bindElements(Array.from(contactFormElements), "blur", removeImages);

//Floating contact
bindElement(inputText, "keyup", () => floatingLabel(inputTextLabel));
bindElement(inputMail, "keyup", () => floatingLabel(inputMailLabel));
bindElement(inputMessage, "keyup", () => floatingLabel(inputMessageLabel));