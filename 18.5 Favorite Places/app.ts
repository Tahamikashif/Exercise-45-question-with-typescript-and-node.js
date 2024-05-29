let places: string[] = ['Pakistan','Canada','new zealand','kashmir'];
console.log('orignal:'+ places);

// Print your array in alphabatical order without modifying the actual list.
console.log('Copy  ' + [...places] .sort());
// Show that your array is still in its orignal order by printing it
console.log('orignal:'+ places);
//Print your array in reverse alphabatical order without changing the order of the orignal it
console.log('Copy  ' + [...places] .sort().reverse());
// Show that your array is still in its orignal order by printing it again
console.log('Copy  ' + [...places].sort().reverse());
// Reverse the order of your list.print the array to show that its order has changed
console.log('Orignal:' + places.sort());
//Reverse the order of your list again.print  the list to show its back to its orignal order
console.log('Orignal:' + places.sort().reverse());



