"use strict";
function myalbum1(artistname, albumtitle, numberoftracks) {
    return { artistname, albumtitle, numberoftracks };
}
let album4 = myalbum1("ali", "dil hai ", 55);
let album5 = myalbum1("Madad", "jan e nisar", 65);
let album6 = myalbum1("tahami", "typescript ka coder", 0);
console.log(album4);
console.log(album5);
console.log(album6);
let magicianss = ['bhalli magician', "bounder well haunted magician", "birble magician"];
function make_great(name) {
    return { name };
}
make_great("magicianss");
console.log(magicianss);
let magicians = ["a haunting we will go magicians", "shahrukh magician", "waffles magicians"];
function show_magician(nameofmagician) {
    return { nameofmagician };
}
;
show_magician("magicians");
console.log(magicians);
