let ordinal_number:number [] = [1,2,3,4,5,6,7,8,9]
for(let i=0; i<ordinal_number.length; i++){

if(ordinal_number[i] == 1){
console.log(`${ordinal_number[i]}st`)
}

else if(ordinal_number[i] == 2){
    console.log(`${ordinal_number[i]}nd`)
    }
    else if(ordinal_number[i] == 3){
        console.log(`${ordinal_number[i]}rd`)

        }else if(ordinal_number[i] >= 4 && ordinal_number[i] <= 9){

             console.log(`${ordinal_number[i]}th`)
        }
          


};













