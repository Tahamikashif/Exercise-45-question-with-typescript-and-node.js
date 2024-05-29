"use strict";
let personname = "Tahami";
console.log("lowercase:", personname.toLowerCase());
//UPPER CASE 
console.log("uppercase:", personname.toUpperCase());
// TITLE CASE
console.log("title case:", personname.replace(/\bw/g, c => c.toUpperCase()));
