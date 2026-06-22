// export function add(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }



// // Named Exports
// // Multiple named exports
// export function sayHello() {
//   console.log('Hello');
// }

// export function sayGoodbye() {
//   console.log('Goodbye');
// }


// Alternative: export list at the end
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { add, subtract };









// // Default Export
// // Only one default export per module
// export default function() {
//   console.log('I am the default export');
// }

// // Or with a named function/class/object
// function mainFunction() {
//   return 'Main functionality';
// }

// export default mainFunction;








// // Mixed Exports
// // Combining default and named exports
// export const VERSION = '1.0.0';

// function main() {
//   console.log('Main function');
// }

// export { main as default }; // Alternative way to set default