// windows functions, setTimeout & setInterval

// The setTimeout() Method
// The setTimeout() method schedules a function to run after a delay in milliseconds.
// It is an async operation used to delay code execution without freezing the browser.
// Waiting for a Timeout
// When using the setTimeout() method, you can specify a function to be executed on time-out:

// Example
// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("I love You !!");
// }

// In the example above, myFunction is passed to setTimeout() as an argument.
// 3000 is the number of milliseconds before myFunction will be called.
// When you pass a function as an argument, remember not to use parenthesis.

// Right: setTimeout(myFunction, 3000);
// Wrong: setTimeout(myFunction(), 3000);



// Instead of passing a function name as an argument to another function, you can always pass the whole function instead:

// Example
// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   console.log(value);
// }




// Waiting for Intervals:
// When using the setInterval() method, you can specify function to be executed for each interval:

// Example
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }


// In the example above, myFunction is passed to setInterval() as an argument.
// 1000 is the number of milliseconds between every time myFunction will be called.







// JS Callbacks

// Callbacks were the first solution for asynchronous JavaScript.
// "I will call back later!"
// The name "callback" stems from the idea that the function will "call you back" later when it has finished its task.

// A callback runs after another function finishes.
// A callback is a function that runs later.
// A callback runs after something has finished.
// The name "callback" stems from the idea that the function will "call you back" later when it has finished its task.
// A callback function is a function passed as an argument into another function.
// The callback function is intended to be executed later, typically when a specific event occurs or an asynchronous operation completes.

// This pattern keeps your function flexible.
// This is how many older JavaScript APIs worked.

// 1 Event Handling
// 2 Asynchronous Operations
// 3 Sequence Control
// 4 The Timing Problem


// Asynchronous code finishes later.
// This means you cannot return the result right away (before they are finished).

// Example:
// let result;
// setTimeout(function() {
//   result = 5;
// }, 1000);

// // What is result here?
// The result is undefined because the async code has not finished yet.
// You cannot solve this problem by waiting in JavaScript.
// Waiting would freeze the page.



// 5 The Callback Idea


// The solution to the problem above, is to run the code after the result is ready.
// You must give JavaScript a callback function to call later.
// A callback is a function passed as an argument to another function.
// This technique allows a function to call another function.

// Example
// function done(value) {
//   myDisplayer(value);
// }
// setTimeout(function() {
//   done(5);
// }, 1000);

// // What is result here?
// The value is used inside the callback.
// This works because the callback runs later.





// 6 Callback Error Handling


// Async code can fail.
// Callbacks often use an error-first pattern:.

// function myDisplayer(message) {
//   console.log(message);
// }

// function getData(callback) {
//   let ok = true;
// //   If ok is changed to false, the output becomes: Something failed
//   if (ok) {
//     callback(null, "Data");
//   } else {
//     callback("Something failed", null);
//   }
// }
// getData(function(error, data) {
//   if (error) {
//     myDisplayer(error);
//     return;
//   }
//   myDisplayer(data);
// });
// This pattern is common in older JavaScript code.



// 7 Callback Drawbacks


// While essential for JavaScript programming, deeply nested callbacks can lead to complex, hard-to-read code known as "callback hell" or the "pyramid of doom".

// Example
// step1(function(r1) {
//   step2(r1, function(r2) {
//     step3(r2, function(r3) {
//       console.log(r3);
//     });
//   });
// });

// When callbacks get deep, debugging becomes difficult.
// The logic moves from left to right and becomes difficult to follow.

// 8 Callback Alternatives


// Asynchronous callback solutions are difficult to write and difficult to debug.
// Because of this, modern asynchronous JavaScript do not use callbacks.
// Modern JavaScript offers superior alternatives for handling asynchronous operations, using Promises and the async/await syntax, which provide a cleaner flow and better error handling.

// When to Use a Callback?
// Callbacks are still important to understand.
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).













// JavaScript Promises

// "I Promise a Result!"
// JavaScript Promises were created to make asynchronous JavaScript easier to use.
// A Promise object represents the completion or failure of an asynchronous operation.
// JavaScript Promises were created to make asynchronous JavaScript easier to use.
// A Promise object represents the completion or failure of an asynchronous operation.
// A Promise can be in one of three exclusive states: pending, rejected or fulfilled.
// A Promise can be in one of three exclusive states:
// pending	    operation started (not finished)
// rejected	    operation failed
// fulfilled	operation completed

// for Succession:

// function pro(){
//     const p = new Promise(function (res, rej){
//         res("Success"); // for success
//         // rej("Error"); // for rejection
//     })
//     return p
// };
// // console.log(pro()) // returns Promise { 'Success' }
// pro().then(data => console.log(data)) // callbacks receives data the logs the data


// You can also write it more concisely:

// function pro() {
//     return new Promise((resolve, reject) => {
//         resolve("Success");
//     });
// }
// pro().then(console.log); // Success

// Both return a Promise that resolves to "Success".
// Difference is
// 1. Storing the Promise in a variable
// Variable vs direct return → just a style/conciseness difference.
// 2. Regular function vs Arrow function
// Regular function vs arrow function → mostly about this behavior, which doesn't matter in this Promise example.
// Result → exactly the same Promise.




// shortest way to create an already-resolved Promise.
// function pro() {
//     return Promise.resolve("Success"); // is a constructor
// }
// pro().then(console.log); // Success


// for rejection:

// function pro() {
//     return new Promise(function (res, rej) {
//         rej("Error");
//     });
// }

// pro().catch(err => console.log(err));



// Promise and new Promise() are related, but they're not the same thing.

// Promise
// Promise is the constructor function (class-like object) itself.
// console.log(Promise);
// You can think of it as the blueprint for creating Promise objects.
// Example:
// console.log(typeof Promise); // "function"
// typeof Promise  // "function"


// new Promise()
// // new Promise() creates a new Promise instance.
// const p = new Promise((resolve, reject) => {
//     resolve("Success");
// });
// // Now p is an actual Promise object:
// console.log(p);
// // Promise { 'Success' }



// Analogy
// class Car {}
// Car → the class (blueprint)
// new Car() → an actual car object

// Similarly:
// Promise → the constructor
// new Promise(...) → an actual Promise instance






// Core Methods and Usage
// Promises are consumed using methods attached to the promise object:

// .then(onFulfilled, onRejected):
// This method attaches handlers for both the fulfillment and rejection cases. It returns a new promise, which enables method chaining.

// .catch(onRejected):
// This is a shorthand for .then(null, onRejected) and is typically used to handle errors at the end of a promise chain.

// .finally(onFinally):
// This handler is called when the promise is settled (either fulfilled or rejected), regardless of the outcome. It's useful for cleanup operations.




// Using then and catch
// You do not read a promise result immediately.

// You attach code that runs when the promise finishes.
// then() runs when a promise is fulfilled.
// catch() runs when a promise is rejected.

// Examples
// function myDisplayer(data){
//     console.log(data);
// }
// let promise = Promise.resolve("OK");
// promise
// .then(function(value) {
//   console.log(value);
// })
// .catch(function(value) {
//   myDisplayer(value);
// });


// let promise1 = Promise.reject("Error");
// promise1
// .then(function(value) {
//   console.log(value);
// })
// .catch(function(value) {
//   myDisplayer(value);
// });




// Promise API Static Methods
// JavaScript also provides static methods on the Promise object for handling multiple promises at once:

// Promise.all(iterable):
// Fulfills when all promises in the iterable are fulfilled; rejects immediately if any promise rejects.

// Promise.allSettled(iterable):
// Waits for all promises to settle (either fulfill or reject) and returns an array of their results.

// Promise.race(iterable):
// Settles (fulfills or rejects) as soon as any of the promises in the iterable settles.

// Promise.any(iterable):
// Fulfills as soon as any promise in the iterable fulfills; rejects if all promises reject.






// function proFS(file){
    
// }


// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   console.log(value);
// }


// let p = new Promise(function (res, rej){
//     setTimeout(function() { res("I love You !!!"); }, 3000);
// })
// console.log(p)
// p.then(function(value) {
//   console.log(value);
// })



// function promisifiedsetTimeout(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// promisifiedsetTimeout(1000).then(() => {
//     console.log("timer finished");
// })


const { resolve } = require("dns");
const fs = require("fs");
// console.log(fs)
// console.log(fs.readFile())

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data)
// })


// function promisifiedFs(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data)
//         })
//     })
// }

// promisifiedFs().then(function(data){
//     console.log(data)
// })





// function readTheFile(value){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         value(data)
//     })
// }

// function readFile(){
//     return new Promise(readTheFile)
// }

// const p = readFile()

// p.then(function(val){
//     console.log(val)
// })





// function readFile(){
//     return new Promise(function(resolve){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         resolve(data)
//     })
// })
// }

// readFile().then(function(val){
//     console.log(val)
// })




// class Promise {
//     constructor(fn){
//         this.fn = fn;
//     }
//     then(resolve){
//         this.fn.success = resolve
//     }
//     catch(err){
//         this.fn.reject = err
//     }
// }



// A minimal mental model
// A Promise-like object needs at least:

// class MyPromise {
//     state;      // pending/fulfilled/rejected
//     value;      // success value
//     reason;     // error value

//     successHandlers = [];
//     errorHandlers = [];
// }

// Then:
// constructor runs executor immediately
// resolve() updates state/value
// reject() updates state/reason
// .then() registers success handlers
// .catch() registers error handlers
// if already resolved/rejected, handlers run immediately

// That's the core architecture.