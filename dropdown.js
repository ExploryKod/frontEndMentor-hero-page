// As few js as possible for the dropdown menu related elements

          /* --------------------------
                NODES FROM THE DOM
        -----------------------------*/

// header tabs and its dropdowns menus 
const featureTabLink = document.querySelector(".features-tab a"); 
const compagnyTabLink = document.querySelector(".compagny-tab a");
const featureTabSubList = document.getElementById("features-sub-list");
const compagnyTabSubList = document.getElementById("compagny-sub-list");

// header tabs to change only the appearance of all tabs with the class dropdown-tabs
const TabLinks = document.querySelectorAll(".dropdown-tabs");

        /* --------------------------
                FUNCTION FOR EVENTS
        -----------------------------*/

const changeTabArrowIcon = (e) => {

    const result = e.target.classList.toggle("clicked");
    const menuTargeted = e.target.nextElementSibling; 
   
    if(result) {
        menuTargeted.style.visibility = "visible";
        menuTargeted.classList.add("dropdown-animation");
    } else {
        menuTargeted.style.visibility = "hidden";
        menuTargeted.classList.remove("dropdown-animation");
    }    
}

const changeTabColor = (e) => {
    console.log(e.target);
    const newColor = e.target.classList.toggle("active");
    console.log(newColor);
    if(newColor) {
        e.target.style.color = "#141414";
    } else {
        e.target.style.color = "#696969";
    }    
}

            /* ---------------------- 
                    EVENTS 
            ---------------------- */

featureTabLink.addEventListener("click", changeTabArrowIcon);
compagnyTabLink.addEventListener("click", changeTabArrowIcon); 

// Each tab link that have dropdown menu to deploy
TabLinks.forEach(tabLink => {tabLink.addEventListener("click", changeTabColor)}); 
