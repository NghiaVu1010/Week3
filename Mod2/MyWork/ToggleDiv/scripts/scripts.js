/*
* Description: 
*
* Author: Neo
*/
"use strict";

window.onload = function() {
    //grab all images
    let allImg = document.querySelectorAll("img");

    //wire in all checkboxes flexibly
    const checkboxes = document.querySelectorAll("input");
    for(let i = 0; i < checkboxes.length; i++) {
        //checks to see if any checkboxes are checked
        checkboxes[i].onclick = function() {
            //if checked, take the value
            let selection = this.value;
            let selectedImages = document.querySelectorAll("img[alt$=" + selection + "]");

            //with the value and checked, display/hide images
            for(let j = 0; j < selectedImages.length; j++) {
                if(checkboxes[i].checked) {
                    selectedImages[j].parentNode.style.display = 'block';
                }
                else {
                    selectedImages[j].parentNode.style.display = 'none';
                }
            }
        }
    }
}