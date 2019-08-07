/*
* Description: 
*
* Author: Neo
*/
"use strict";

window.onload = function() {
    let allDivs = document.getElementsByTagName("div");
    let allP = document.getElementsByTagName("p");
    let classDiv = document.getElementsByClassName("imageGroup");

    let len = allP.length;
    
    for(let i = 0; i < len; i++) {
        allP[i].style.border = "2px solid red";
    }

    for(let i = 0; i < classDiv.length; i++) {
        classDiv[i].style.border = "2px solid red";
    }
}