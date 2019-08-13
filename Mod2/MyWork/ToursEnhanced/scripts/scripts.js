/*
* Description: Tour list of activities to do
*
* Author: Neo
*/
"use strict";

//generic insertion function for table
function insertTableData(list, dataBody) {
        let row = dataBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = list.title;
        cell2.innerHTML = "$" + list.price;
}

//create table based on category selection
function createTourTable(selection, list) {
    let dataBody = document.getElementById("dataBody");

    for(let i = 0; i < list.length; i++) {
        if(selection == list[i].category) {
            /*let row = dataBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = list[i].title;
            cell2.innerHTML = "$" + list[i].price;*/

            insertTableData(list[i], dataBody);
        }
    }
}

//create table based on price selection
function createPriceTable(selection, list) {
    let dataBody = document.getElementById("dataBody");

    selection = selection.split(/[-+]/);

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].price);

        if((selection[0] <= list[i].price) && (list[i].price < selection[1])) {
            /*let row = dataBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = list[i].title;
            cell2.innerHTML = "$" + list[i].price;*/

            insertTableData(list[i], dataBody);
        }
        else if ((selection[0] == 500) && (selection[0] < list[i].price)) {
            /*let row = dataBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = list[i].title;
            cell2.innerHTML = "$" + list[i].price;*/

            insertTableData(list[i], dataBody);
        }
    }
}

window.onload = function() 
{
    let tours = 
    [
        {category: "Museum Tours", title: "A Touch Tour at the Smithsonian Air And Space Museum", price: 45.00},
        {category: "Museum Tours", title: "A Tour of TV Sets at the American History Museum", price: 15.00},
        {category: "Museum Tours", title: "Dinosaurs are Alive at the Natural History Museum", price: 65.00},
        {category: "Food Tours", title: "Squeezing Things at the Farmers Market", price: 12.00},
        {category: "Food Tours", title: "Murder Mystery at the Vineyard", price: 32.00},
        {category: "Food Tours", title: "101 Ways to Serve Brussel Sprouts", price: 8.00},
        {category: "Adventure Tours", title: "Ziplining the Poconos", price: 115.00},
        {category: "Adventure Tours", title: "Water Skiing the Amazon", price: 4015.00},
        {category: "Adventure Tours", title: "Parasailing Iceland", price: 3215.00},
        {category: "Adventure Tours", title: "Kayaking to Antarctica", price: 3910.00},
        {category: "Adventure Tours", title: "National Zoo: How to Grab a Skunk by the Neck", price: 80.00}
     ];
     
    //grab each of the values and assigns value
    let categoryField = document.getElementById("categoryField");
    let priceField = document.getElementById("priceField");
    let table = document.getElementById("tours");

    const searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = function() {
        createTourTable(categoryField.value, tours);
    };
    
    const priceBtn = document.getElementById("priceBtn");
    priceBtn.onclick = function() {
        createPriceTable(priceField.value, tours);
    };

    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        let newBody = document.createElement("tbody");
        newBody.setAttribute("id", "dataBody");

        table.replaceChild(newBody, dataBody);
    };
};