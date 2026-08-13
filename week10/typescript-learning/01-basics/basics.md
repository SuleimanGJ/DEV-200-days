
### TypeScript
TypeScript is JavaScript with added syntax for types.
TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
TypeScript being a Syntactic Superset means it shares the same base syntax as JavaScript, but adds something to it.


## Grant Execution Permissions (Recommended for Linux/macOS)
Manually give the binary permission to run, then initialize your project:
bash
chmod +x node_modules/.bin/tsc

### TypeScript installation
option 1
1 npm i typescript // devDep - you can get as cl
2 npx tsc --init
3 npx tsc -b

option 2
1 npm i -g typescript // Global - you can get as cli
2 tsc --init
3 tsc -b

## tsc - Compile/check TypeScript

## tsx - Run TypeScript
- is a tool that lets you run TypeScript files directly with Node.js
- is mainly a convenient development tool so you don't have to manually compile your .ts file every time you want to run it
- how to install -> npm install tsx -D

## random error
- In JavaScript/TypeScript, a number beginning with 0 can have special numeric-literal behavior depending on the syntax/runtime context


### TypeScript Simple Types
The most basic types in TypeScript are called primitives.
These types form the building blocks of more complex types in your applications.


## 1 Boolean
Represents true/false values.
Used for flags, toggles, and conditions.

ExampleGet your own TypeScript Server
let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type


## 2 Number
Represents both integers and floating-point numbers.
TypeScript uses the same number type for all numeric values.

Example
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point



## 3 String
Represents text data.
Can use single quotes ('), double quotes ("), or backticks (`) for template literals.

Example
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;



## 4 Symbol
Creates unique identifiers.
Useful for creating unique property keys and constants.

Example
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"




### tsconfig.json

1 target // es2016, ES5, ES2020,........
2 rootDir // ./src
3 outDir // ./build or dist
4 noImplicitAny  // truel or false 