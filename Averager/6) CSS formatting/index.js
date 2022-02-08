"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

function createNumberDiv() {


    let numberDiv = document.createElement("div");
    numberDiv.innerHTML = randomNumber(100);

    numberDiv.addEventListener("click", function () {

        numberDiv.classList.toggle("selected")
    })



    return numberDiv;


}

function gridMaker(gridContainer, R, C) {
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`

    gridContainer.innerHTML = "";

    let rowCol = R * C
    for (let i = 0; i < rowCol; i++) {
        gridContainer.appendChild(createNumberDiv())
    };
}



function randomNumber(max) {
    return Math.floor(max * Math.random());
}

document.querySelector("button").addEventListener("click", function () {

    gridMaker(document.querySelector("#grid"), 10, 10);




});