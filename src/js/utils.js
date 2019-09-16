const $ = element => {
    const elements = document.querySelectorAll(element);
    return elements.length === 1 ? elements[0] : elements;
}

function bindElement(element, event, callback) {
    element.addEventListener(event, callback);
}

function bindElements(element, event, callback) {
    element.forEach(element => {
        element.addEventListener(event, callback);
    });
}

export {
    $,
    bindElement,
    bindElements
};