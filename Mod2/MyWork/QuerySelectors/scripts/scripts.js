/*
* Description: 
*
* Author: Neo
*/
"use strict";

function clearFormFields(obj) {
    for(let i = 0; i < obj.length; i++) {
        obj[i].value = "";
    }
}

function formToString(obj) {
    let str = "";
    for(let i = 0; i < obj.length; i++) {
        str = str + obj[i].value + "\n";
    }
    return str;
}

function assignAlt(obj) {
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].getAttribute("alt") == null) {
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

window.onload = function() {
    let allImg = document.querySelectorAll("img");
    assignAlt(allImg);

    //for(let i = 0; i < allImg.length; i++) {console.log(allImg[i].getAttribute("alt"));}

    let allImg2 = document.images;
    setPfromImage(allImg2);

    const displayBtn = document.getElementById("displayBtn");
    displayBtn.onclick = function () {
        let myInfo = document.querySelectorAll(".myInfo");

        alert(formToString(myInfo));
        clearFormFields(myInfo);
    }
}