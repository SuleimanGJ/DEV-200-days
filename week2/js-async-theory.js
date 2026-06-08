// Async Programming
// JavaScript executes code one line at a time. Each line must finish before the next line can run.

// Asynchronous is how JavaScript can allow some code to run in the background, and let their results be handled when they are ready.



// Asynchronous Code
// Async code allows a program to start a long-running task (like fetching data from a file). and continue with other tasks before the first one finishes.
// Async code prevents the application from freezing, which is critical for user experience.



// Control Flow
// Control Flow is the order in which statements are executed in a program.
// By default, JavaScript runs code from top to bottom and left to right.
// Async programming can change this.



// How JavaScript Runs Code
// JavaScript executes code one line at a time.
// Each line must finish before the next line runs.

// Example:
// myDisplayer("A");
// myDisplayer("B");
// myDisplayer("C");
// The output is always A B C.



// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// This example will display "Hello Goodbye" because the functions are called in that order:

// Example
// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();
// This example will display "Goodbye Hello" because the functions are called in that order:


// mySecond();
// myFirst();
// The examples above are normal synchronous flow.
// This example will display "Goodbye Hello"






// Why Async Code
// Some tasks take time to finish (network requests, timers, user input).
// To stay responsive, JavaScript can use async programming.
// Asynchronous flow refers to how JavaScript allows certain operations to run in the background and let their results be handled when they are ready.

// If JavaScript waited for these tasks, the page would freeze.
// Asych code lets the rest of the program continue to run.
// Async code does not run immediately:

// Timers run after a specified number of milliseconds
// Events run when triggered by an event
// Network requests run when the data arrives







// Asynchronous Concepts
// JavaScript handles asynchronus programming using different core concepts.

// Concept	Description
// Synchronus	    The JavaScript standard flow is executing line by line
// Timers	        Allows code to run while other code is waiting
// Callbacks	    Callbacks were the first solution for async JavaScript
// Events	        Stores callback function waiting to be executed
// Promises	    Tools to handle asynchronous operations cleanly
// Async/Await 	The clean and modern way to handle async code





// Asynchronous vs Parallel
// Parallel means doing multiple things at the same time on different processors.
// Asynchronous means switching between tasks, not necessarily running them simultaneously.

// A single-threaded JavaScript engine handles asynchronous tasks by using an event loop to switch between them, rather than utilizing multiple CPU cores. When a task finishes, it signals the main thread (via a callback, promise, or event) to handle the result.

// Feature	    Async (Deferred)	                Parallel (Simultaneous)
// Goal	    Responsiveness (Don't freeze)	    Performance (Get it done faster)
// Execution	Non-blocking (waiting for I/O)	    Simultaneous (crunching many numbers)
// Hardware	Can run on 1 processor	            Requires multiple processors
// Example	    Running code while the user scrolls	    Processing 10,000 images at once


// In short, asynchronous tells the system:

// Start this task now
// I don't need the result immediately
// Notify me later when it's done


// Analogy:
// Ordering food at a restaurant.

// Place your order (async call)
// Sit down and do other things while the chef makes it
// The server brings the food (callback)

