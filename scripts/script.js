// function greet( time = "day", user) {
// //   console.log("Hello " + user);
//   console.log(`Good ${time} ${user}`);
// }

// greet(undefined,"Neda");

// greet("Ian");

// const greet = function (user) {
//   //   console.log("Hello " + user);
//   console.log(`Hello ${user}`);
// }

// const greet =  (user) => {
//     //   console.log("Hello " + user);
//     console.log(`Hello ${user}`);
//   }

// function calcArea(radius) {
//   let result = Math.PI * radius * radius;
//   return result;
// }

// let r = prompt("Give a readius");
// let calculatedArea = calcArea(r).toFixed(2);
// alert(`The area of a circle with radius ${r} is ${calculatedArea}`);

// let radiusParagraph = document.querySelector("#radius");
// radiusParagraph.textContent += r;
// let areaParagraph = document.querySelector("#result");
// areaParagraph.textContent += calculatedArea

let shoppingItems =["cheese" , "bread", "green pepper"];
// DOM node for <ul>
const shoppingListElement = document.querySelector(".shopping");
function populateList(arr)
{
    for (let item of arr){
        let listItem = document.createElement("li");
        listItem.textContent = item;
        shoppingListElement.appendChild(listItem);
    } // for (let i = 0 ; i < arr.length ; i++) // arr.forEach()
}

populateList(shoppingItems);

function changeListStyle()
{
    shoppingListElement.classList.remove("circleList");
    shoppingListElement.classList.add("squareList");

}

changeListStyle();