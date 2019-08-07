/*
* Description: Good re-usable stuff
*
* Author: Neo
*/
"use strict";

//creates all the options based on description and sets value
function buildOptions(selection, list) {
let len = list.length;

    for(let i = 0; i < len; i++) {
        let option = document.createElement("option");
        option.text = list[i].description;
        option.value = list[i].description;
        selection.appendChild(option);
    }
}

//build the selected images onto the page
function buildSelected(value, list, div) {
    
    let img = document.createElement("img");

    for(let i = 0; i < list.length; i++) {
        if(value == list[i].description) {
            img.src = list[i].file;
            img.alt = list[i].description;
            div.appendChild(img);
        }
    } 
}

window.onload = function() {
    let list = [
                {file: "images/expedition.jpg", description: "Expedition"}, 
                {file: "images/madTea.jpg", description: "Mad Tea"}, 
                {file: "images/river.jpg", description: "River"},
                {file: "images/rocknroll.jpg", description: "Rock 'N Roll"},
                {file: "images/shoot.jpg", description: "Shooter"},
                {file: "images/slinky.jpg", description: "Slinky"},
                {file: "images/smallWorld.jpg", description: "Small World"},
                {file: "images/tower.jpg", description: "Tower"}
                ];

    let imagesDiv = document.getElementById("imagesDiv");

    //grab the select field
    let selectList = document.getElementById("rideOptions");
    //build the selection drop down with the info list
    buildOptions(selectList, list);

    let addBtn = document.getElementById("addBtn");
    //on click, enlarge font size
    addBtn.onclick = function() {
        //console.log(selectList.value);
        buildSelected(selectList.value, list, imagesDiv);
    }

    let clearBtn = document.getElementById("clearBtn");
    clearBtn.onclick = function() {
        imagesDiv.innerHTML = "";
    }
}