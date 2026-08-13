
// let x: number = 1;
// x = "Hello World!"
// console.log(x);

// print fundtions that greets users without return
function greeting1(name: string) {
    console.log(`Hello, ${name}!`)
}
greeting1("Mohh");

// print fundtions that greets users
function greeting(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greeting("Mohh"));

const message: string = greeting("Coders");
console.log(message);


// print function that calculates sum 
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(4,8));

const result = sum(5, 9);
console.log(result);


// print function that checks user age >= 18
function isLegal(age: number) {
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(19))




// print function that takes another fn and runs after 1s
function firstFn(cb: () => void) { 
    // () => void - means type of cb is void and is telling type of cb function
    return setTimeout(cb, 1* 1000);
}

function cb(){
    console.log("Hello Coders")
}

firstFn(cb);


function delayFn(callback: Function){
    return setTimeout(callback, 1* 1000);
}

function callback(){
    console.log("Hello Coders")
}

delayFn(callback);


// Arrays - stores multiple values of the same types

// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log( "Original ")
// console.log(numbers)
// numbers.push(6)
// numbers.unshift(0)
// console.log( "after adding ")
// console.log(numbers)
// numbers.pop()
// numbers.shift()
// console.log("after removing ")
// console.log(numbers)


// let names: string[] = ["suleiman", "osman"];
// console.log(names)


// Tuples - is an array with fixed length and known types

// let userOne: [string, number, boolean] = ["suleiman", 245, true];
// console.log(userOne)



// Objects - stores key-value pairs

// let user: {
//     name: string,
//     age: number,
//     isStudent: boolean
// } = {
//     name: "suleiman",
//     age: 25,
//     isStudent: true
// }

// console.log("User name :" + user.name)
// console.log("User age :" + user.age)