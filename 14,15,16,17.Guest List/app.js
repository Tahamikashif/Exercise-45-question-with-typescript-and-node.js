"use strict";
let Guest_List = ['Ahmed', 'Salman', 'Mehmood'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Respected Sir/Madam:' + Guest_List[i], '\n We invite you on dinner tomorrow.\n', '\n Thank You\n');
}
let not_present = "Salman";
let new_guest = "Babar Azam";
Guest_List[1] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Respected Sir/Madam :' + Guest_List[i], '\n We invite you on tomorrow\n', '\n Thank You\n');
}
console.log(`Mr.${not_present}we will not coming tomorrow dinner`);
Guest_List.unshift(' mustafa', 'sarfaraz', 'rizwan', 'shoaib malik', 'rohan');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Respected Sir/Madam:' + Guest_List[i], '\n we invite you on tomorrow.we found big table so we decide can invite more Guest\n');
}
console.log('unfortunately', 'I will not arranged big table." you can invite only two people"  ');
while (Guest_List.length > 2) {
    let Rmove_Guest = Guest_List.pop();
    console.log(`sorry Sir/Madam.${Rmove_Guest} you are not invited for dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Respected Sir/Madam:' + Guest_List[i] + '\n Yes you are still invite on tomorrow dinner\n Thank you ');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
