"use strict";
let currentUSER = ["majid", "saba", "sana", "fayyaz", "rukhsana", "jamil"];
let new_user = ["majid", "saba", "ayesha", "rohan", "arham"];
new_user.forEach((new_user) => {
    if (currentUSER.some((currentUSER) => currentUSER.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new username`);
    }
    else {
        console.log(`${new_user} is available`);
    }
});
