import {
    $,
    bindElement,
    bindElements
} from './utils.js';

const navLinks = $(".navbar-span");
const currentLinkIndicator = $(".underline");
const firstNavLink = navLinks[0];
const firstPosition = firstNavLink.getBoundingClientRect().left;
const firstWidth = firstNavLink.getBoundingClientRect().width;

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
    let width = e.target.getBoundingClientRect().width;
    positionIndicator(e.target.getBoundingClientRect().left, width);
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

//Bind Elements
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