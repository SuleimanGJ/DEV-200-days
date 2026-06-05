// Variables

// Practice
// Declare your name and city using const , and your age using let .

// const name = "suleiman";
// const city = "Hello world!";
// let age = 25;

// Try this and observe the result:

// console.log(name);
// console.log(city);
// console.log(age);

// Guess the output:

// console.log(name); // suleiman
// console.log(city); // Hello world!
// console.log(age); // 25

// Create a const object and add a new key to it — does it work? because of reference data type

// const user = {};
// user.name2= "suleiman";

// Try accessing a let variable before declaring it — what error do you see? // reference error

// console.log(name3);
// let name3 = "suleiman";

// Change a const array by pushing a value. Will it throw an error? no error

// const numbers = [];
// numbers.push(1);


// Data Type

// Practice 
// Predict the output:
// console.log(null + 1); // 1
// console.log("5" + 3); // "53"
// console.log("5" - 3); // 2
// console.log(true + false); // 1

// Check types:
// console.log(typeof []); // obj
// console.log(typeof null); // obj
// console.log(typeof 123n); // bigInt

// Truthy or Falsy?
// console.log(Boolean(0)); // falsy
// console.log(Boolean("0")); // truthy
// console.log(Boolean([])); // truthy
// console.log(Boolean(undefined));// falsy

// Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .

// function isEmpty(value){
//     return (typeof value)
// }
// isEmpty(null)




// Operators

// Practice 
// 1. Predict:
// console.log("10" + 1); // "11"
// console.log("10" - 1); // 9
// console.log(true + false); // 1
// console.log(!!"Javascipt"); // true


// 2. Convert using unary +
// let str = "42";
// let num = +str;
// console.log(num); // 42

// 3. Use ternary:
// let age = 17;
// let msg = age >= 18 ? "Adult" : "Minor";

// 4. Build a calculator:
// // Using switch + arithmetic operators
// function calc(a, b, operator) {
// // +, -, *, /
// if(operator == "+"){
//     return a+b;
// }
// if(operator == "-"){
//     return a-b;
// }
// if(operator == "*"){
//     return a*b;
// }
// if(operator == "/"){
//     return a/b;
// }
// }

// 5. Score logic:
// let marks = 82;
// // Print "Excellent", "Good", "Average", or "Fail" based on ranges
// function score(marks){
//     if(marks > 90){
//         return "Excellent"
//     }
//     else if(marks > 70){
//         return "Good"
//     }
//     else if(marks > 50){
//         return "Average"
//     }
//     else {
//         return "Fail"
//     }
// }


