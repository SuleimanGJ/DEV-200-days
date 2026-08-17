
// interface vs type

console.log("Starts Here Basic Type Aliases");
// type aliases - allow defining types with a custom name (an Alias).

// Try creating a new Car using the alias provided
type CarYear = number
type CarType = string
type CarModel = string

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"

const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car); // { year: 2001, type: 'Toyota', model: 'Corolla' }




// Ex. Union and Intersection Types

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";


console.log(bear);
console.log(response);

// Ex. type Merging does not supprt with merge

// type Animals1 = { name: string; } 
// type Animals1 = { age: number; } 
// const dog1: Animals1 = { name: "Fido", age: 5 };
// console.log(dog1);
console.log("Ends Here Basic Type Aliases");



console.log("Starts Here Basic Interfaces");
// Interfaces - are similar to type aliases, except they only apply to object types.


// Try creating a new interface using it below
interface Rectangle {
  height: number,
  width: number
};

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle); // { height: 20, width: 10 }



// Ex. Interface Merging

interface Animals { name: string; } 
interface Animals { age: number; } 
const dog: Animals = { name: "Fido", age: 5 };
console.log(dog);


console.log("Ends Here Basic Interfaces");





console.log("Starts Here Extending Interfaces");
// Extending Interfaces

// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.



// Try creating a new interface and extending it like below
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle); // { height: 20, width: 10, color: 'red' }

console.log("Ends Here Extending Interfaces");




console.log("Ends Here Extending Type Aliases");

type Square = {
  height: number,
  width: number
}

interface ColoredSquare extends Square {
  color: string
}

const ColoredSquare: ColoredSquare = {
  height: 5,
  width: 5,
  color: "blue"
};

console.log(ColoredSquare); // { height: 5, width: 5, color: 'blue' }

console.log("Ends Here Extending Type Aliases");