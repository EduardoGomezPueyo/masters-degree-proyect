import {
    $,
    bindElement,
    bindElements
} from './utils.js';

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

const closeTest = $("#close-test");
const desktopImgsContainer = $(".container-team-images");
const desktopImgs = $(".desktop-team-img");
const firstModalDesktop = $("#first-doctor");
const secondModalDesktop = $("#second-doctor");
const thirdModalDesktop = $("#third-doctor");
const closeModals = $(".btn-close-modal-team")

const openModals = (element) => {
    element.classList.remove("hide")
}

const closeModal = (e) => {
    e.target.parentElement.parentElement.classList.add("hide");
    desktopImgsContainer.classList.remove("hide");
    desktopImgs.forEach(element => {
        element.classList.remove("hide");
    })
}

const hideImages = () => {
    desktopImgsContainer.classList.add("hide");
    desktopImgs.forEach(element => {
        element.classList.add("hide");
    })
}

/*const showImages = () => {
    desktopImgsContainer.classList.remove("hide");
    desktopImgs.forEach(element => {
        element.classList.remove("hide");
    })
}*/

const hoverImages = (e) => {
    e.target.classList.toggle("no-hover");
}

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