/*
* Description: 
*
* Author: Neo
*/
"use strict";

//clear form fields, or see reset()
function clearFormFields(obj) {
    for(let i = 0; i < obj.length; i++) {
        obj[i].value = "";
    }
}

//convert the input into a string
function formToString(obj) {
    let str = "";
    for(let i = 0; i < obj.length; i++) {
        str = str + obj[i].value + "\n";
    }
    return str;
}

//assign all imgs with no alt a value
function assignAlt(obj) {
    for(let i = 0; i < obj.length; i++) {
        obj[i].setAttribute("alt", "graffiti image");
    }
}

//set the paragraph tag with the attribute value
function setPfromImage(obj) {
    let str;
    for(let i = 0; i < obj.length; i++) {
        str = "para" + obj[i].getAttribute("id").slice(-1);
        str = document.getElementById(str);
        str.innerHTML = obj[i].getAttribute("alt");
    }
}

window.onload = function() {
    let allImg = document.querySelectorAll("img:not([alt])");
    let form = document.querySelector("form");
    assignAlt(allImg);

    let allImg2 = document.images;
    setPfromImage(allImg2);

    const displayBtn = document.getElementById("displayBtn");
    displayBtn.onclick = function () {
        let myInfo = document.querySelectorAll(".myInfo");

        alert(formToString(myInfo));
        //clearFormFields(myInfo);
        form.reset();
    }
}