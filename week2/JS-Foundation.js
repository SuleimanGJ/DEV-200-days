// Variables & Declarations

// The statement below creates (in other words: declares) a variable with the name “message”:
// let message;

// Variables are containers that hold data.
// Think of a variable as a box with a name on it.


// var, let, and const

// var – Old and risky
// Scoped to functions, not blocks
// Can be redeclared and reassigned
// Hoisted to the top with undefined value

// var score = 10;
// var score = 20; // OK


// let – Modern and safe
// Scoped to blocks ( {} )
// Can be reassigned but not redeclared
// Hoisted, but stays in the Temporal Dead Zone (TDZ)

// let age = 25;
// age = 30; // ✅
// let age = 40; // ❌ Error (same block)


// const – Constant values
// Scoped to blocks
// Cannot be reassigned or redeclared
// Value must be assigned at declaration
// // TDZ applies here too

// const PI = 3.14;
// PI = 3.14159; // ❌ Error

// 👉 But: If const holds an object/array, you can still change its contents:
// const student = { name: "Riya" };
// student.name = "Priya"; // ✅ OK
// student = {}; // ❌ Error


// Common Confusions (JS Reality Checks)
// const doesn't make things fully constant. It protects the variable, not the value.
// var is outdated — it's better to use let and const .
// let and const behave similarly, but const gives more safety — use it when you're not planning to reassign.



// Practice
// Declare your name and city using const , and your age using let .
// Try this and observe the result:
// Guess the output:
// Create a const object and add a new key to it — does it work?
// Try accessing a let variable before declaring it — what error do you see?
// Change a const array by pushing a value. Will it throw an error?



// Data Types + Type System


// What Are Data Types?
// In JavaScript, every value has a type.
// These types define what kind of data is being stored — a number, text, boolean, object, etc.
// There are two categories:
// Primitive types – stored directly.
// Reference types – stored as memory references.


// Primitive Data Types
// 1 String → Text 
// "hello" , 'Sheryians'
// 2 Number → Any numeric value 
// 3 , -99 , 3.14
// 3 Boolean → True or false 
// true , false
// 4 Undefined → Variable declared but not assigned
// let x; → x is undefined
// 5 Null → Intentional empty value
// let x = null;
// 6 Symbol → Unique identifier (rarely used)
// 7 BigInt → Very large integers
// 123456789012345678901234567890n



// Reference Data Types
// 1 Object → { name: "Harsh", age: 26 }
// 2 Array → [10, 20, 30]
// 3 Function → function greet() {}
// These are not copied directly, but by reference.

// typeof Operator
// Used to check the data type of a value:

// typeof "JavaScript" // "string"
// typeof 99 // "number"
// typeof true // "boolean"
// typeof undefined // "undefined"
// typeof null // "object" ← known bug
// typeof [] // "object"
// typeof {} // "object"
// typeof function(){} // "function"

// Note: typeof null === "object" is a bug, but has existed since the early days of JS.



// Type Coercion (Auto-Conversion)
// JavaScript auto-converts types in some operations:

// "5" + 1 // "51" → number converted to string
// "5" - 1 // 4 → string converted to number
// true + 1 // 2
// null + 1 // 1
// undefined + 1 // NaN


// Loose vs Strict Equality

// == compares value with type conversion
// === compares value + type (no conversion)

// 5 == "5" // true
// 5 === "5" // false

// Always prefer === for accurate comparisons.



// NaN – Not a Number

// typeof NaN // "number"

// Even though it means “Not a Number”, NaN is actually of type number .
// This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result — just an invalid one.



// Truthy and Falsy Values
// Falsy values:
// false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}

// if ("0") {
// console.log("Runs"); // "0" is a non-empty string = truthy
// }


// Common Confusions
// undefined means the variable was never assigned.
// null means you intentionally set it to "nothing".


// Practice 
// Predict the output:
// console.log(null + 1);
// console.log("5" + 3);
// console.log("5" - 3);
// console.log(true + false);

// Check types:
// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);

// Truthy or Falsy?
// console.log(Boolean(0)); // falsy
// console.log(Boolean("0")); // truthy
// console.log(Boolean([])); // truthy
// console.log(Boolean(undefined));// falsy

// Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .




// Operators


// Operators are special symbols or keywords in JavaScript used to perform operations on values (operands).
// You’ll use them in calculations, comparisons, logic, assignments, and even type checks.
// Think of them as the verbs of your code — they act on data.


// Terms: “unary”, “binary”, “operand”
// Before we move on, let’s grasp some common terminology.

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

// let x = 1;
// x = -x;
// alert( x ); // -1, unary negation was applied
// An operator is binary if it has two operands. The same minus exists in binary form as well:

// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values

// Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.




// Arithmetic Operators
// Used for basic math.
// + // addition
// - // subtraction
// * // multiplication
// / // division
// % // modulus (remainder)
// ** // exponentiation (power)


// Assignment Operators
// Assign values to variables.
// = // assigns value
// += // a += b => a = a + b
// -= // a -= b
// *=, /=, %=



// Comparison Operators
// Used in condition checks.
// == // equal (loose)
// === // equal (strict – value + type)
// != // not equal (loose)
// !== // not equal (strict)
// > < >= <=



// Logical Operators
// Used to combine multiple conditions.
// && // AND – both must be true
// || // OR – either one true
// ! // NOT – negates truthiness




// Unary Operators
// Used on a single operand.
// + // tries to convert to number
// - // negates
// ++ // increment
// -- // decrement
// typeof // returns data type



// Ternary Operator (Conditional)
// Shorthand for if...else
// Syntax
// condition ? valueIfTrue : valueIfFalse



// typeof Operator
// typeof 123 // "number"
// typeof "hi" // "string"
// typeof null // "object" (JS bug)
// typeof [] // "object"
// typeof {} // "object"
// typeof function(){} // "function"




// Practice 
// 1. Predict:
// console.log("10" + 1);
// console.log("10" - 1);
// console.log(true + false);
// console.log(!!"Sheryians");


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
// }

// 5. Score logic:
// let marks = 82;
// // Print "Excellent", "Good", "Average", or "Fail" based on ranges




// Nullish coalescing operator '??'
// The nullish coalescing operator is written as two question marks ??.
// As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// The nullish coalescing operator isn’t anything completely new.
// It’s just a nice syntax to get the first “defined” value of the two.

// We can rewrite result = a ?? b using the operators that we already know, like this:
// result = (a !== null && a !== undefined) ? a : b;
// Now it should be absolutely clear what ?? does. Let’s see where it helps.
// The common use case for ?? is to provide a default value.

// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:
// let user;
// alert(user ?? "Anonymous"); // Anonymous (user is undefined)

// Here’s the example with user assigned to a name:
// let user = "John";
// alert(user ?? "Anonymous"); // John (user is not null/undefined)
// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
// It’s used to assign default values to variables:

// // set height=100, if height is null or undefined
// height = height ?? 100;
// height = (height !== undefined && height !== null) ? height : 100;
// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.
// It’s forbidden to use it with || or && without explicit parentheses.











// Control Flow


// Control flow decides which code runs, when it runs, and how many times it runs.
// It's like decision-making + direction in your JavaScript program.
// If operators are the verbs, control flow is the traffic signal.

// if, else if, else

// if (condition) {
// // runs if condition is true
// } else if (anotherCondition) {
// // runs if first was false, second is true
// } else {
// // runs if none are true
// }

// Example:
// let marks = 78;
// if (marks >= 90) {
// console.log("A");
// } else if (marks >= 75) {
// console.log("B");
// } else {
// console.log("C");
// }


// switch-case
// Great for checking one variable against many values.

// switch (value) {
// case value1:
// // code
// break;
// case value2:
// // code
// break;
// default:
// // fallback
// }


// Example:
// let fruit = "apple";
// switch (fruit) {
// case "banana":
// console.log("Yellow");
// break;
// case "apple":
// console.log("Red");
// break;
// default:
// console.log("Unknown");
// }





// Early Return Pattern
// Used in functions to exit early if some condition fails.
// function checkAge(age) {
// if (age < 18) return "Denied";
// return "Allowed";
// }
// This avoids deep nesting and makes logic cleaner.





// Common Confusions
// switch-case executes all cases after a match unless you break
// else if chain works top-down — order matters
// You can use truthy/falsy values directly in if



// Practice 
// 1. Student grade logic:
// // Write a program that prints A, B, C, D, or F based on marks


// 2. Rock-paper-scissors:
// // Given player1 and player2's choice, print winner or draw


// 3. Login message:
// let isLoggedIn = true;
// let isAdmin = false;
// // Show different messages based on combination


// 4. Weather advice:
// let weather = "rainy";
// // Use switch-case to print what to wear


// 5. Age checker:
// // Return "Kid", "Teen", "Adult", or "Senior"





// Loops


// Loops are a way to repeat the same code multiple times.
// Loops help us repeat code without rewriting it.
// If a task needs to be done multiple times (e.g., printing 1–10, going through an array, or checking each character in a string), loops are the backbone.



// for Loop
// for (begin; condition; step) {
//   // ... loop body ...
// }


// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//   alert(i);
// }
// part		
// begin	    let i = 0	Executes once upon entering the loop.
// condition	i < 3	    Checked before every loop iteration. If false, the loop stops.
// body	        alert(i)	Runs again and again while the condition is truthy.
// step	        i++	        Executes after the body on each iteration.


// for (let i = 0; i < 5; i++) {
// console.log(i);
// }
// Start from i = 0
// Run till i < 5
// Increase i each time




// while Loop
// let i = 0;
// while (i < 5) {
// console.log(i);
// i++;
// }

// Condition is checked before running




// do-while Loop
// let i = 0;
// do {
// console.log(i);
// i++;
// } while (i < 5);
// Runs at least once, even if condition is false



// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.



// break and continue
// break : Exit loop completely
// continue : Skip current iteration and move to next


// for (let i = 1; i <= 5; i++) {
// if (i === 3) continue;
// console.log(i); // Skips 3
// }


// for-of – Arrays & Strings
// The for...of loop iterates over the values of iterable objects such as arrays, strings, Maps, Sets, and NodeLists.

// for (variable of iterable) {
//   // code block to be executed
// }

// variable
// For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
// iterable
// An object that has iterable properties.


// let fruits = ["Apple", "Orange", "Plum"];
// // iterates over array elements
// for (let fruit of fruits) {
//   alert( fruit );
// }

// for (let char of "Javascript") {
// console.log(char);
// }

// Works on anything iterable (arrays, strings)




// forEach – Arrays
// Iterates over each element in an Array
// let nums = [10, 20, 30];
// nums.forEach((num) => {
// console.log(num);
// });
// Cleaner than for for arrays, but you can’t break/return



// for-in – Objects (and arrays if needed)
// The for...in loop iterates over the enumerable properties of an object.
// It is typically used for iterating over object keys.

// for (key in object) {
//   // code block to be executed
// }



// let user = { name: "John", age: 26 };
// for (let key in user) {
// console.log(key, user[key]);
// }


// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }



// for (key in object) {
//   // executes the body for each key among object properties
// }
// For instance, let’s output all properties of user:

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // keys
//   alert( key );  // name, age, isAdmin
//   // values for the keys
//   alert( user[key] ); // John, 30, true
// }






// Common Confusions
// for-in is for objects, not arrays (may cause issues with unexpected keys)
// forEach can't use break or continue
// while and do-while work best when number of iterations is unknown



// Mindset
// Loops = data processor.
// Use the right loop for the job:
// for = best for numbers/indexes
// for-of = for array values
// for-in = for object keys
// while = for unpredictable conditions




// Practice 
// 1. Print 1 to 10 using for
// 2. Print even numbers between 1 to 20
// 3. Reverse a string using loop
// 4. Sum of all numbers in an array
// 5. Print all characters of a name using for-of
// 6. Print all object keys and values using for-in
// 7. Use continue to skip a specific number
// 8. Guess number game – use while to ask until correct
// 9. Pattern: Print triangle using *
// 10. Sum of even numbers in an array using forEach