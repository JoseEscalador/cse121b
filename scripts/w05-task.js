
/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
/* W05: Programming Tasks */
let templeList = null;

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const newArt = document.createElement("article");
        const title = document.createElement("h3");
        title.textContent = temple.templeName;
        const templeImg = document.createElement("img");
        templeImg.setAttribute("src", temple.imageUrl);
        templeImg.setAttribute("alt", temple.location);
        newArt.appendChild(title);
        newArt.appendChild(templeImg);
        templesElement.appendChild(newArt);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = function (temples) {
    reset();
    let ft = temples;
    let dropDown = document.getElementById("filtered")
    let filter = dropDown.value;
    switch (filter) {
        case "utah": 
            ft = temples.filter(temple => temple.location.includes("Utah"));
            break;
        case "notutah": 
            ft = temples.filter(temple => !temple.location.includes("Utah"));
            break;
        case "all": 
            ft = temples;
            break;
        case "older": 
            ft = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
    }
    displayTemples(ft);
}



/* Event Listener */
// const utah = document.querySelector("[value=utah]")
// const noUtah = document.querySelector("[value=notutah]")
// const older = document.querySelector("[value=older]")
// const all = document.querySelector("[value=all]")

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();