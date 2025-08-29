window.alert("Buenas noches :D, espero que disfrutes de la pagina sjsjsj")

document.addEventListener("DOMContentLoaded", () => {

const elementh1 = document.querySelector("h1");
const elementdiv = document.querySelector("#content2");
const elementText = document.querySelector("h2#textD");

const elementImage = document.querySelector("#book-data");
const img = document.createElement("img");

function changeTitle() {
    elementh1.textContent = "HTML & CSS: Curso práctico avanzado :3";
}
function changeOrder() {
    elementdiv.style.flexDirection = "column-reverse";
}
function changeSomethingRandom() {
    elementText.textContent = "Descripción del libro (cambiada aleatoriamente)";
    elementText.style.color = "blue";
    elementText.style.fontStyle = "italic";
}
function addImage() {
    img.src = "FNF.jpeg";
    img.alt = "Placeholder Image";
    img.style.width = "200px";
    img.style.height = "auto";
    img.style.borderRadius = "8px"; 
    elementImage.appendChild(img);
}

document.querySelector("#cambiar-titulo").onclick = changeTitle;
document.querySelector("#invertir-info").onclick = changeOrder;
document.querySelector("#cambiar-algo-random").onclick = changeSomethingRandom;
document.querySelector("#agregar-imagen").onclick = addImage;

})