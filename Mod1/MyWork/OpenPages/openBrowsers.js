/*
* Description: Opens new windows in different ways
*
* Author: Neo
*/
"use strict";

window.onload = function() {
    let googleBtn = document.getElementById("googleBtn");
    let hartfordBtn = document.getElementById("hartfordBtn");
    let w3schoolsBtn = document.getElementById("w3schoolsBtn");

    //grab info for popup iwndow
    let learnWin;
    let openLanguageBtn = document.getElementById("openLanguageBtn");
    let closeLanguageBtn = document.getElementById("closeLanguageBtn");

    //open homepages based on which button
    googleBtn.onclick = function () {
        let params = "height=600, width=400";
        window.open("https://www.google.com/", "google", params);
    }
    hartfordBtn.onclick = function () {
        let params = "height=600, width=400";
        window.open("https://www.thehartford.com/", "hartford", params);
    }
    w3schoolsBtn.onclick = function () {
        let params = "height=600, width=400, top=250, left=100";
        window.open("https://www.w3schools.com/js/", "w3schools", params);
    }

    //open and close browser based on language settings
    openLanguageBtn.onclick = function () {
        let params = "height=600, width=400";
        learnWin = window.open("helloEN.html", "learnWin", params);

        learnWin.focus();
    }
    closeLanguageBtn.onclick = function () {
        learnWin.close();
    }
    learnWin.onload = function () {
        
        const msgDiv = helloEN.document.getElementById("msgDiv");
        msgDiv.innerHTML = "<p>Hello World</p>";
    }
}