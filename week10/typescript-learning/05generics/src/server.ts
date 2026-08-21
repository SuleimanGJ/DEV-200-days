// ************** GENERICS ********************

// generics - are a language independent concept
// - allows us to write flexible, reusable comp. that work with any data type while keeping type safety

// think of a box that can hold anything - books, toys, clothes.
// the box is the same, but what it holds can change


type arrInput = string | number;
function arrOne(arr: arrInput[]) {
    return arr[0];
}

const numResult = arrOne([0, 1, 3]);
console.log(numResult); // 0
const strResult = arrOne(["Suleiman", "Oz"]);
console.log(strResult); // "Suleiman"

// 1. but if try to modefy string value you cannot, y'll get error undefined
// console.log(strResult.toUpperCase());



function arrEx(arr: arrInput[]) {
// function arrEx(arr: string[] | number[]) {
    return arr[0];
}
let result = arrEx(["Suleiman", "Oz"]);
console.log(result); // "Suleiman"
// console.log(result.toUpperCase());



// 2. mix value. like [1, 2, "hello", "hi there"]
// error with return type coz doesnot know its a string or number or undefined
// to solve use generics
function arrMix(arr: string[] | number[]) {
    return arr[0];
}

// const arrMixRes = arrMix([1, 2, 3, "hi", "hello"]) // error must be number or string
const arrMixResNum = arrMix([1, 2, 3])
const arrMixResStr = arrMix(["hi", "hello"])





// solutin

function firstEle<T>(arr: T[]){
    return arr[0];
}

const n1 = firstEle([10, 11, 12]);
const s1 = firstEle(["First", "Second", "Third"]);
// or give explicity type
const n = firstEle<number>([10, 11, 12]);
const s = firstEle<string>(["First", "Second", "Third"]);


// Example
// T - is type parameter (placeholder for a type);
function identify<T>(arr: T){
    return arr;
}

const num = identify<number>(987);
const str = identify<string>("String");
const bool = identify<boolean>(true);