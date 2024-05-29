"use strict";
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4];
// String Test
// test.1 Equality Comparison (True)
console.log('Is car == "subaru"? I predict true');
console.log(car == "subaru");
// Test.2 Strict Equality Comparison (false)
console.log('Is car === "subaru"? I predict false');
console.log(car === "subaru");
// Test.3 InEquality comparison (True)
console.log('Is car != "Toyota"? I predict true');
console.log(car != "Toyota");
// Test.4 InEquality comparison (False)
console.log('Is car !== "subaru"? I predict false');
console.log(car !== "subaru");
// Lowercase Function Test**
// Test.5 Lowercase Conversion (True)
console.log('Is car.tolowercase() == "subaru"? I predict true');
console.log(car.toLowerCase() === "subaru");
// Test.6 Lowercase conversion (False)
console.log('Is car.tolowercase() === "subaru"? I predict false');
console.log(car.toLowerCase() === "subaru");
// Numerical Test**
// Test .7 Equality (True)
console.log('Is age == 25? I predict true');
console.log(age == 25);
// Test.8 InEquality (false)
console.log('Is age !== 25? I predict false');
console.log(age !== 25);
// Test.9 Greater than (True)
console.log('Is age > 25? I predict false');
console.log(age > 25);
// Test.10 Less than (false)
console.log('Is age < 25? I predict false');
console.log(age < 25);
// Test.11 Greater than or equal to (True)
console.log('Is age >= 25? I predict false');
console.log(age >= 25);
// Test.12 Less than or equal to (False)
console.log('Is age <= 25? I predict false');
console.log(age <= 25);
// Logical Operator**
// Test.13 AND (True)
console.log('Is age > 25 && age < 30? I predict false');
console.log(age > 25 && age < 30);
// Test.14 OR (false)**
console.log('Is age > 25 || age < 30? I predict false');
console.log(age > 25 || age < 30);
// Array  Test**
// Test.15 In Array(True)
console.log('Is 3 in numbers I predict true');
console.log(3 in numbers);
// Test .16 Not in array (False)
console.log('Is 5 not in numbers i predict false');
console.log(5 in numbers);
