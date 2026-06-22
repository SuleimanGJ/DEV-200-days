import { add, subtract } from "./maths.js";
console.log(add(5, 3)); // 8




// Import Syntax


// Importing Named Exports

// Import specific named exports
// import { sayHello, sayGoodBye } from './greetings.js';
import {sayHello} from './greetings.js';
sayHello(); // Hello

// Rename imports to avoid naming conflicts
import { add as sum, subtract as minus } from './maths.js';
console.log(sum(5, 3)); // 8

// Import all named exports as an object
import * as math from './maths.js';
console.log(math.add(7, 4)); // 11






// // Importing Default Exports

// Import the default export
import mainFunction from './main.js';
mainFunction();

// // You can name the default import anything you want
// import anyNameYouWant from './main.js';
// anyNameYouWant();



// // Importing Both Default and Named Exports
// Import both default and named exports
import main, { VERSION } from './main2.js';
console.log(VERSION); // 1.0.0
main(); // Main function