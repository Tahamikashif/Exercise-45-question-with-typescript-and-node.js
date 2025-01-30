"use strict";
let item_person = ["bread", "mayo", "ketchup"];
function provides(name, design, quantity) {
    return { name, design, quantity };
}
console.log(item_person);
console.log(provides("sandwitch", "triangle", "2"));
console.log(provides("sandwitch", "triangle", "4"));
console.log(provides("sandwitch", "triangle", "6"));
