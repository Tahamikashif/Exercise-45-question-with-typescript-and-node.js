function myalbum1(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = myalbum1("ali", "dil hai ", 55);
var album5 = myalbum1("Madad", "jan e nisar", 65);
var album6 = myalbum1("tahami", "typescript ka coder", 0);
console.log(album4);
console.log(album5);
console.log(album6);
var magicianss = ['bhalli magician', "bounder well haunted magician", "birble magician"];
function make_great(name) {
    return { name: name };
}
make_great("magicianss");
console.log(magicianss);
var magicians = ["a haunting we will go magicians", "shahrukh magician", "waffles magicians"];
function show_magician(nameofmagician) {
    return { nameofmagician: nameofmagician };
}
;
show_magician("magicians");
console.log(magicians);
