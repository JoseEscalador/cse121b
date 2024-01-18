//creating new paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//creating new image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200")
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage)

//creating new div
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//creating new section
let secTitle = "CSE 121b";
let secText = "Werucomu tu Javascripto Lenguadjo";
const newSection = document.createElement("section");
newSection.innerHTML = `<h2>${secTitle}</h2><p>${secText}</p>`;
document.body.appendChild(newSection);