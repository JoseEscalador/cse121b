/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Luís José",
    photo: { 
        path: "images/profilepicture.jpeg",
        name: "pfp"
    },
    favoriteFoods: [
        "Lasagna", 
        "Gnochi", 
        "Açaí", 
        "Yakisoba", 
        "Brazillian Barbecue"
    ],
    hobbies: [
        "Biking",
        "Swimming",
        "Going to the beach",
        "Going to the movies",
        "Reading",
    ],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        place: "Fortaleza-CE, Brasil",
        length: "27 years",
        continent: "South America"
    }
)

myProfile.placesLived.push(
    {
        place: "Caucaia-CE, Brasil",
        length: "6 months",
        continent: "South America"
    }
)

myProfile.placesLived.push(
    {
        place: "Godoy Cruz, Mendoza, Argentina",
        length: "8 months",
        continent: "South America"
    }
)

myProfile.placesLived.push(
    {
        place: "General Alvear, Mendoza, Argentina",
        length: "3 months",
        continent: "South America"
    }
)

myProfile.placesLived.push(
    {
        place: "La Punta, San Luis, Argentina",
        length: "8 months",
        continent: "South America"
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo.path)
document.querySelector("#photo").setAttribute("alt", myProfile.photo.name)


function showData (parent, elementType, data) {
    let dataElement = document.createElement(elementType);
    dataElement.textContent = data;
    document.querySelector(`#${parent}`).appendChild(dataElement);
}

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => showData("favorite-foods", "li", food));

/* Hobbies List */

myProfile.hobbies.forEach(hobby => showData("hobbies", "li", hobby));

/* Places Lived DataList */

myProfile.placesLived.forEach(placesData => {
    let placeElement = document.createElement("dt");
    placeElement.textContent = placesData.place;
    document.querySelector("#places-lived").appendChild(placeElement);
    let lengthElement = document.createElement("dd");
    lengthElement.textContent = placesData.length;
    document.querySelector("#places-lived").appendChild(lengthElement);
});