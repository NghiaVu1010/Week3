/*
* Description: 
*
* Author: Neo
*/
"use strict";

function getUserInfo() {
    let userID = document.getElementById("userID");
    //let xhr = getXmlHttpObject();
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);

            /*
            showUserInfo(json);
            let itemsDiv = document.getElementById("itemsDiv");
            let text = 
            "UserID: " + json.userId +
            "\nID: " + json.id + 
            "\nTitle: " + json.title +
            "\nCompleted: " + json.completed;
            
            let para = document.createElement("p");
            let node = document.createTextNode(text);
            para.appendChild(node);
            itemsDiv.appendChild(para);
            */

            insertTableData(json);
        }
    }
    var url = "https://jsonplaceholder.typicode.com/todos/" + userID.value;
    xhr.open("GET", url, true);
    xhr.send();
}

function insertTableData(list) {
    let dataBody = document.getElementById("dataBody");
    let row = dataBody.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = list.userId;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = list.id;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = list.title;

    let cell4 = row.insertCell(3);
    cell4.innerHTML = list.completed;
}

window.onload = function() 
{
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = function() {
        getUserInfo();
    };

    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
    };
};