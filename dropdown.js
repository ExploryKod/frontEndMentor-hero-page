// As few js as possible for the dropdown menu related elements

          /* --------------------------
                NODES FROM THE DOM
        -----------------------------*/

// header tabs and its dropdowns menus 
const featureTabLink = document.querySelector(".features-tab a"); 
const compagnyTabLink = document.querySelector(".compagny-tab a");
const featureTabSubList = document.getElementById("features-sub-list");
const compagnyTabSubList = document.getElementById("compagny-sub-list");

// header tabs to change their appearance
const TabLinks = document.querySelectorAll(".header-tabs-appearance li a");

// header end tabs : login and register parent node
const buttonLinks = document.querySelectorAll(".header-buttons");

        /* --------------------------
                FUNCTION FOR EVENTS
        -----------------------------*/

const changeTabArrowIcon = (e) => {

    const result = e.target.classList.toggle("clicked");
    const menuTargeted = e.target.nextElementSibling; 
   
    if(result) {
        menuTargeted.style.visibility = "visible";
    } else {
        menuTargeted.style.visibility = "hidden";
    }    
}

const changeTabColor = (e) => {

    const newColor = e.target.classList.toggle("active");


    if(newColor) {
        e.target.style.color = "#141414";
    } else {
        e.target.style.color = "#696969";
    }    
}

const changeRegisterBorderColor = (e) => {
        
    const newBorderColor = e.target.classList.toggle("border-color");
    // the button element with text "register":
    const register = buttonLinks[0].children[1].children[0];
    
    if(newBorderColor) {
           register.style.border = "1px solid #141414"
    } else {
           register.style.border = "1px solid #696969"
    }
}

            /* ---------------------- 
                    EVENTS 
            ---------------------- */

featureTabLink.addEventListener("click", changeTabArrowIcon);
compagnyTabLink.addEventListener("click", changeTabArrowIcon); 
TabLinks.forEach(tabLink => {tabLink.addEventListener("click", changeTabColor)}); 
buttonLinks.forEach(buttonLink => {buttonLink.addEventListener("click", changeTabColor)}); 

// the li element with button having his text = "register":
buttonLinks[0].children[1].addEventListener("click", changeRegisterBorderColor); 