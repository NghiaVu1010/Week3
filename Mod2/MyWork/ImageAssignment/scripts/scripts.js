/*
* Description: 
*
* Author: Neo
*/
"use strict";

function assignAlt(obj) {
    for(let i = 0; i < obj.length; i++) {
        if(!obj[i].getAttribute("alt")) {
          obj[i].setAttribute("alt", "graffiti image");
        }
        //console.log(obj[i].getAttribute("alt"));
    }
}

function setPfromImage(obj) {
    let str;
    for(let i = 0; i < obj.length; i++) {
        str = "para" + obj[i].getAttribute("id").slice(-1);
        str = document.getElementById(str);
        str.innerHTML = obj[i].getAttribute("alt");
    }
}

//foreach function to set src and alt
function setImgInfo(element, i) {
    let imageFiles = ["images/queenStandard.png", "images/kingStandard.png", "images/queenSuite.png"]
    let imageDescriptions = ["queen standard", "king standard", "queen suite"];

    element.src = imageFiles[i];
    element.alt = imageDescriptions[i];
}

window.onload = function() {
    //grab all images
    let allImg = document.querySelectorAll("img");
    //turn into an array and do function
    Array.from(allImg).forEach(setImgInfo);
}