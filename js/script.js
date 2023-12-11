let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
let tableHeader = document.querySelector(".tableHeader");


button.addEventListener("click", () => {
    body.classList.toggle("dark");

});

button.addEventListener("click", () => {
    tableHeader.classList.toggle("tableHeaderDark");

    themeName.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemny";
});