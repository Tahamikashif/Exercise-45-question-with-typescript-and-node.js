interface item {
     name:string
    price:number

}

// creat two object

let book: item = {
    name:'Essential Typescript',
    price:5000
}

const fruits : item = {

    name: "apple",
    price:500,

}   
console.log(`Book name:${book.name}, Book price:${book.price}` );
console.log(`Fruits name:${fruits.name},fruits price:${fruits.price}`);

