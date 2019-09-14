//Get elements
const openSlide = document.querySelector("#open-slide-link");
const closeSlide = document.querySelector(".btn-close");
const sideMenu = document.querySelector('#side-menu');
const closeModal = document.querySelectorAll('.btn-close-list');
const closeModalArray = Array.from(closeModal);



//Set functions
const openSlideMenu = () => sideMenu.classList.add("active");
const closeSlideMenu = () => sideMenu.classList.remove("active");

const getActive = (e) => {
    e.target.nextElementSibling.classList.toggle("active");
    e.target.innerHTML === "+" ? e.target.innerHTML = "&times;" : e.target.innerHTML = "+";
};

//Add functions
openSlide.addEventListener("click", openSlideMenu);
closeSlide.addEventListener("click", closeSlideMenu);


for (var i = 0; i < closeModalArray.length; i++) {
    closeModalArray[i].addEventListener("click", getActive);
}