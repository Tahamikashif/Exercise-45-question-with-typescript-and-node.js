"use strict";
// choose a color for an alien as you
//did in exercise 25, and write an if-else chain
let alien_color = "green";
// if the alien color is green,print a statement that
// the player just earned 5 points for shooting the alien.
if (alien_color == 'green') {
    console.log('the player just earned 5 points for shooting the alien');
}
else {
    console.log('the player just earned 10 points');
}
alien_color = 'red';
if (alien_color == 'green') {
    console.log('the player just earned 5 points.');
}