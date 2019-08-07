/*
* Description: 
*
* Author: Neo
*/
"use strict";

//foreach function to set src and alt, then add a class
function setImgInfo(element, i) {
    let imageFiles = ["images/queenStandard.png", "images/kingStandard.png", "images/queenSuite.png"]
    let imageDescriptions = ["queen standard", "king standard", "queen suite"];

    element.src = imageFiles[i];
    element.alt = imageDescriptions[i];
    element.classList.add("roundedImg");
}

//function to change font size
function changeParaSize(percentChange) {
    const paras = document.querySelectorAll("p");

    let len = paras.length;
    for(let i = 0; i < len; i++) {
        let para = paras[i];

        if(para.style.fontSize == "") {
            para.style.fontSize = "1.0em";
        }

        let size = parseFloat(para.style.fontSize);
        size = size * percentChange;
        para.style.fontSize = size + "em";
    }
}

window.onload = function() {
    //grab all interested fields
    let allImg = document.querySelectorAll("img");
    let larger = document.getElementById("larger");
    let smaller = document.getElementById("smaller");

    //turn into an array and do function
    Array.from(allImg).forEach(setImgInfo);

    //on click, enlarge font size
    larger.onclick = function() {
        changeParaSize(1.2);
    }

    //on click, ensmall font size
    smaller.onclick = function() {
        changeParaSize(.8);
    }
}