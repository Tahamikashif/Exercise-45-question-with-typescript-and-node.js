"use strict";
// create a variable called alien_color
let alien_color = 'green';
// write an if statement to test wheather the alien color is green .if it is print a message that the player
// just earned 5 points
if (alien_color == 'green') {
    console.log('the player just earned 5 points.');
}
// write one version of this program that passes if test and another that fails.
// (the version that fails will have no output)
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log('the player just earned 5 points.');
}
alien_color = 'red';
if (alien_color == 'green') {
    console.log('the player just earned 5 points.');
}
