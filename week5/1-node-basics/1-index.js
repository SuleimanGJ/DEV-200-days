// # Run in watch mode (restarts on file changes)
// node --watch app.js


console.log("Hello Nodejs");

const array = [1, 2, 3, 4];
console.log("array", array);

const os = require("os");
console.log(os.platform())

console.log(`V8 version: ${process.versions.v8}`);
