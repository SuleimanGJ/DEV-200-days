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








