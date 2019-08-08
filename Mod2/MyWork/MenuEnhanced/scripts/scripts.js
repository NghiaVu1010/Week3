/*
* Description: For loop to print out 2-D array
*
* Author: Neo
*/
"use strict";

//breakfast, lunch, and dinner menu
let foodMenu = [
    [
        {item: "Sausage and Egg Biscuit", price: 3.49}, 
        {item: "Cereal", price:2.49}, 
        {item: "Grilled Cheese", price: 4.19}
    ],

    [
        {item: "Chicken Salad", price: 6.49}, 
        {item: "Turkey Sandwich", price: 6.99}, 
        {item: "Hamburger", price: 7.29}, 
        {item: "Quesadilla", price: 5.99}
    ],

    [
        {item: "Tacos", price: 5.99}, 
        {item: "Spaghetti", price: 8.79}, 
        {item: "Lobster Rolls", price: 10.99}, 
        {item: "Ramen", price: 9.49}, 
        {item: "Hotdogs", price: 7.49}]
    ];

//loop through menu meals and print out properties based on selection
function displayMenu(menu) {
    //user input
    var meal = 1;

    if(meal == 0) {console.log("Breakfast Menu");}
    else if(meal == 1) {console.log("Lunch Menu");}
    else if(meal == 2) {console.log("Dinner Menu");}
    else {return console.log("Unexpected error.");}

    for(let i in menu[meal]) {
        console.log(menuToString(menu[meal][i]));
    }
}

//turn the object into a string
function menuToString(obj) {
    let str = obj.item + " - $" + obj.price;
    return str;
}

displayMenu(foodMenu);

window.onload = function() 
{
    //breakfast, lunch, and dinner menu
    let foodMenu = [
    [
        {item: "Sausage and Egg Biscuit", price: 3.49}, 
        {item: "Cereal", price:2.49}, 
        {item: "Grilled Cheese", price: 4.19}
    ],
    [
        {item: "Chicken Salad", price: 6.49}, 
        {item: "Turkey Sandwich", price: 6.99}, 
        {item: "Hamburger", price: 7.29}, 
        {item: "Quesadilla", price: 5.99}
    ],
    [
        {item: "Tacos", price: 5.99}, 
        {item: "Spaghetti", price: 8.79}, 
        {item: "Lobster Rolls", price: 10.99}, 
        {item: "Ramen", price: 9.49}, 
        {item: "Hotdogs", price: 7.49}]
    ];
     
    //grab each of the values and assigns value
    let categoryField = document.getElementById("categoryField");
    let priceField = document.getElementById("priceField");
    let table = document.getElementById("tours");

    const searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = function() {
        createTourTable(categoryField.value, tours);
    }
    
    const priceBtn = document.getElementById("priceBtn");
    priceBtn.onclick = function() {
        createPriceTable(priceField.value, tours);
    }

    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        let newBody = document.createElement("tbody");
        newBody.setAttribute("id", "dataBody");

        table.replaceChild(newBody, dataBody);
    }
};