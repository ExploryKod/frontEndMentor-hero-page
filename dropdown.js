// As few js as possible for the dropdown menu related elements

const featureTabLink = document.querySelector(".features-tab a"); 
const compagnyTabLink = document.querySelector(".compagny-tab a");
const featureTabSubList = document.getElementById("features-sub-list");
const compagnyTabSubList = document.getElementById("compagny-sub-list");

const TabLinks = document.querySelectorAll(".header-tabs-appearance li a")

const changeTabArrowIcon = (e) => {

    const result = e.target.classList.toggle("clicked");
    const menuTargeted = e.target.nextElementSibling; 
    console.log(e.target);
    console.log(TabLinks);
    if(result) {

        console.log("clicked is here")
        menuTargeted.style.visibility = "visible";

    } else {
        console.log("clicked not here")
        menuTargeted.style.visibility = "hidden";
    }    
}

const changeTabColor = (e) => {

    const result = e.target.classList.toggle("active");
    
    if(result) {
        console.log("color is here")
        e.target.style.color = "#141414";

    } else {
        console.log("color not here")
        e.target.style.color = "#696969";
    }    
}

featureTabLink.addEventListener("click", changeTabArrowIcon);
compagnyTabLink.addEventListener("click", changeTabArrowIcon); 
TabLinks.forEach(tabLink => {tabLink.addEventListener("click", changeTabColor)}); 