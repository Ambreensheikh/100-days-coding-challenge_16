"use strict";
//make the index of "banana"in an arr
function replaceBanana(fruits) {
    let index = fruits.indexOf("Banana");
    //if(index !== -1)
    fruits[index] = "mango";
}
let fruits = ["Apple", "chikoo", "Orange", "Banana"];
//console.log(fruits)
replaceBanana(fruits);
console.log(fruits);
