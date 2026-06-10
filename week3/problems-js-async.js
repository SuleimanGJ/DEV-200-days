// 1 counter

const { resolve } = require("node:dns");

// let counter = 0; 
// const updateCounter = () => {
//   counter++; 
//   console.log(counter);
// };

// setInterval(updateCounter, 1000);



// 2 counter with settimeout

// let counter = 0; 

// const updateCounter = () => {
//   counter++; 
//   console.log(counter); 

//   setTimeout(updateCounter, 1000);
// };

// updateCounter();



// 3 read from file
// const fsp = require("fs/promises");

// const fs = require("fs");

// fs.readFile("a.txt", "utf8",function (err, data){
//     console.log(data);
// })

// console.log("Hello from clg");
// // it takes time 
// let cnt = 0;
// for(let i = 0; i <= 100000000000; i++){
//     cnt+= i;
// }
// console.log("Hello after busy wait");




// 4 Write to a file

// // with the callback-based approach
// const fs = require("fs");
// // Write text to a file
// fs.writeFile('c.txt', 'Hello, World!', function(err){
//     if(err) console.log(err)
//     console.log("file was created");
// });
// console.log('Files created successfully');


// // with the promises-based approach
// const fs = require('fs').promises;
// // // Write text to a file
// fs.writeFile('c.txt', 'Hello, World!', 'utf8');
// console.log('Files created successfully');


// Write JSON data
// const data = { name: 'John', age: 30, city: 'New York' };
// fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
// console.log('Files created successfully');






// 5 File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       suleiman
// ```

// After the program runs, the output should be

// ```
// hello world my name is suleiman
// ```


// const fs = require("fs");

// fs.readFile("file.txt", "utf8",function (err, data){
//     // console.log("Before cleaned "data)
//     data = data.replace(/\s+/g, " ").trim()
//     // console.log("After cleaned "data)
//     fs.writeFile("a.txt", data, (err) => {
//         console.log("file cleaned");
//     });
// })




// 6 clock

// function counter() {
//   let d = new Date();
//   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }

// setInterval(counter, 1000);







// 7 promisifiedsetTimeout
//   Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

// function promisifiedsetTimeout(n){
//     return new Promise(function(resolve){
//         setTimeout(resolve, n);
//     })
// }

// promisifiedsetTimeout(1000).then(function(){
//     console.log("after n secconds passed")
// })



// 8 Sleep Completely
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


// function sleepy(n){
//     return new Promise(function(resolve){
//         let cnt = 0;
//         for(let i = 0; i <= n * 1000; i++){
//             cnt++;
//         }
//         resolve();
//     })
// }

// sleepy(1000000).then(function(){
//     console.log("after n secconds passed")
// })