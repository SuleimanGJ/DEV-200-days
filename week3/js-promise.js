// Hint 1: Start with only success, ignore errors
// Don't implement .catch() yet.
// Aim to make this work:

// const p = new MyPromise(resolve => {
//     resolve("hello");
// });

// p.then(value => {
//     console.log(value);
// });

// Ask yourself:
// When resolve("hello") is called, where does "hello" go?




// Hint 2: Add two properties
// Your Promise instance probably needs to remember:

// this.state
// this.value

// Initially:

// state = pending
// value = undefined

// After resolve("hello"):

// state = fulfilled
// value = hello



// Hint 3: What if .then() comes later?
// Imagine:

// const p = new MyPromise(resolve => {
//     resolve("hello");
// });

// // some time later

// p.then(...)

// When .then() runs, check:
// Is state already fulfilled?
// If yes, what should happen immediately?



// Hint 4: What if .then() comes first?
// Now consider:

// const p = new MyPromise(resolve => {
//     setTimeout(() => resolve("hello"), 1000);
// });

// p.then(...)

// When .then() executes:
// state = pending

// The value doesn't exist yet.
// Question:
// Where can you save the callback so you can run it later when resolve() happens?
// One callback? Or an array of callbacks?




// Hint 5: Follow the timeline

// Trace this mentally:

// const p = new MyPromise(resolve => {
//     setTimeout(() => resolve("hello"), 1000);
// });

// p.then(console.log);

// At creation:

// state = ?
// value = ?
// handlers = ?

// After .then(console.log):

// state = ?
// value = ?
// handlers = ?

// After 1 second:
// resolve("hello")
// What should change?
// What should be executed?




// Hint 6: The constructor's first job
// Your current constructor stores the executor:

// constructor(fn) {
//     this.fn = fn;
// }

// Ask yourself:
// Who actually calls fn?
// In a real Promise, the executor runs immediately. If nobody calls fn, nothing ever starts.
// That's a very important missing piece.



// 👉 A Promise is just:
// state + stored value + list of waiting callbacks

// Now you’re basically at the core design

// You now understand the 3 essential parts:

// 1. State
// "pending" | "fulfilled"
// 2. Value storage
// "value = "hello"
// 3. Callback queue
// handlers = []

// Full mental model (what you now understand)
// A Promise is just:

// {
//   state: "pending" | "fulfilled" | "rejected",
//   value: any,
//   handlers: []
// }

// And three rules:
// 1. .then(fn)
// if pending → store fn
// if fulfilled → run fn immediately with value
// 2. resolve(value)
// set state = fulfilled
// store value
// run all handlers
// 3. handlers never disappear (they just wait)




// class MyPromise {
//     constructor(fn) {
//         console.log(fn);
//     }
// }


// const p = new MyPromise(resolve => {
//     resolve("hello");
// });

// p.then(value => {
//     console.log(value);
// });
// output is : hello



// class MyPromise {
//     constructor(fn) {
//     fn(function(value) {
//         console.log("resolved with", value);
//     });
// }
// }
// const p = new MyPromise(resolve => {
//     resolve("hello");
// });



// This reveals the real internal structure

// A Promise is basically:

// class MyPromise {
//     state = "pending"
//     value = undefined
//     handlers = []
// }





// Step 1 — The internal structure

// Every Promise needs 3 things:

// state: "pending" | "fulfilled"
// value: result
// handlers: []

// So we start here:
// class MyPromise {
//     constructor(executor) {
//         this.state = "pending";
//         this.value = undefined;
//         this.handlers = [];
//     }
// }

// Step 2 — Create resolve/reject inside constructor
// Now we upgrade your class.
// A Promise constructor does this internally:

// (executor) => {
//     resolve(value)
//     reject(error)
// }

// So we must create those functions:
// class MyPromise {
//     constructor(executor) {
//         this.state = "pending";
//         this.value = undefined;
//         this.handlers = [];

//         const resolve = (value) => {
//             // we will fill this next
//         };

//         const reject = (error) => {
//             // ignore for now
//         };

//         executor(resolve, reject);
//     }
// }


// Correct mental model
// When resolve(value) is called:

// Step 1 — SAVE state
// state = fulfilled
// value = "hello"

// Step 2 — THEN run callbacks
// run all stored handlers


// Step 3 — Let’s implement resolve()

// Now we upgrade your class:

// class MyPromise {
//     constructor(executor) {
//         this.state = "pending";
//         this.value = undefined;
//         this.handlers = [];

//         const resolve = (value) => {
//             this.state = "fulfilled";
//             this.value = value;

//             // run all stored .then() callbacks
//             this.handlers.forEach(fn => fn(value));
//         };

//         executor(resolve);
//     }

//     then(fn) {
//         // we’ll build this next
//     }
// }





// Step 4 — Implement .then()

// Now we combine everything:

// class MyPromise {
//     constructor(executor) {
//         this.state = "pending";
//         this.value = undefined;
//         this.handlers = [];

//         const resolve = (value) => {
//             this.state = "fulfilled";
//             this.value = value;

//             this.handlers.forEach(fn => fn(value));
//         };

//         executor(resolve);

//         const reject = (value) => {
//             this.state = "rejected";
//             this.value = value;

//             this.handlers.forEach(fn => fn(value));
//         };

//         executor(reject);
//     }

//     then(fn) {
//         if (this.state === "fulfilled") {
//             fn(this.value); // already done → run immediately
//         } else {
//             this.handlers.push(fn); // still pending → store it
//         }
//     }


//     then(fn) {
//         if (this.state === "rejected") {
//             fn(this.value); // already done → run immediately
//         } else {
//             this.handlers.push(fn); // still pending → store it
//         }
//     }
// }


// What you just built (this is real Promise behavior)
// Case 1: .then() before resolve
// const p = new MyPromise(reject => {
//     setTimeout(() => reject("hello"), 1000);
// });

// p.then(console.log);

// Flow:
// handler stored
// later resolve runs it

// Case 2: .then() after resolve
// const p = new MyPromise(resolve => {
//     resolve("hello");
// });

// p.then(console.log);

// Flow:
// value already exists
// runs immediately








// created my own promises

// class MyPromise {
//     constructor(executor) {
//         this.state = "pending";
//         this.value = undefined;
//         this.handlers = [];

//         const resolve = (value) => {
//             this.state = "fulfilled";
//             this.value = value;

//             this.handlers.forEach(fn => fn(value));
//         };

//         executor(resolve);

//     }

//     then(fn) {
//         return new MyPromise((resolve) => {

//             const handle = (value) => {
//                 const result = fn(value);
//                 const isPromise = result && typeof result.then === "function";

//                 if (isPromise) {
//                     result.then(resolve);   // WAIT
//                 } else {
//                     resolve(result);        // DIRECT
//                 }
//             };

//             if (this.state === "fulfilled") {
//                 handle(this.value);
//             } else {
//                 this.handlers.push(handle);
//             }
//         });
//     }

//     // then(fn) {
//     //     if (this.state === "fulfilled") {
//     //         fn(this.value); // already done → run immediately
//     //     } else {
//     //         this.handlers.push(fn); // still pending → store it
//     //     }
//     // }

// }