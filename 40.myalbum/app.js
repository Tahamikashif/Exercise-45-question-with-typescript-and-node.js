function myalbum(artistname, albumtitle) {
    return { artistname: artistname, albumtitle: albumtitle };
}
var album1 = myalbum("ali", "rang e mohabbat");
var album2 = myalbum("Madad", "roshan e andhera");
var album3 = myalbum("Ayaz", "mousam e dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myalbum1(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = myalbum1("ali", "dil hai ", 55);
var album5 = myalbum1("Madad", "jan e nisar", 65);
var album6 = myalbum1("tahami", "typescript ka coder", 0);
console.log(album4);
console.log(album5);
console.log(album6);
