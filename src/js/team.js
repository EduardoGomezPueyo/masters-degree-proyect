import {
    $,
    bindElement,
    bindElements
} from './utils.js';

// Modaly for mobile
new Modaly("#modal-1", {
    overlay: false,
});
new Modaly("#modal-2", {
    overlay: false,
});
new Modaly("#modal-3", {
    overlay: false,
});

// DOM Selectors for desktop
const desktopImgsContainer = $(".container-team-images");
const desktopImgs = $(".desktop-team-img");
const firstModalDesktop = $("#first-doctor");
const secondModalDesktop = $("#second-doctor");
const thirdModalDesktop = $("#third-doctor");
const closeModals = $(".btn-close-modal-team")

const nameDiv = $("#modal-name");
const imagesTeam = $(".no-hover");
const teamParagraph = $("#team-presentation");

// Functions desktop
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

const hoverImages = (e) => {
    e.target.classList.toggle("no-hover");
}

//Get Name with hover
function getName(e) {
    let content = e.target.getAttribute("name");
    nameDiv.innerHTML = content;
}

//Bind elements Desktop
bindElements(desktopImgs, "mouseover", hoverImages);
bindElements(desktopImgs, "mouseout", hoverImages);
bindElements(closeModals, "click", (element) => {
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