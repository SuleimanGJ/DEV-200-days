// Classes 
// are templates for JavaScript Objects.
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

// is a blueprint (like a generic template for a "Car"), while an instance is the actual, usable object built from that blueprint (like your specific 2018 red sedan)


// Class Syntax
// Use the keyword class to create a class.
// Always add a method named constructor():

// class ClassName {
//   constructor() { ... }
// }


// Example
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);


// The Constructor Method
// The constructor method is a special method:
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.




// Class Methods
// Class methods are created with the same syntax as object methods.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.



// Example
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     const date = new Date();
//     return x - this.year;
//   }
// }

// const date = new Date();
// let year = date.getFullYear();
// myCar.age(year);

// const myCar = new Car("Ford", 2014);




// Class Inheritance
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:




// Example
// Create a class named "Model" which will inherit the methods from the "Car" class:

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// myCar.show();


// The super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.







// Getters and Setters
// Classes also allow you to use getters and setters.
// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
// To add getters and setters in the class, use the get and set keywords.



// Example
// Create a getter and a setter for the "carname" property:

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   get cnam() {
//     return this.carname;
//   }
//   set cnam(x) {
//     this.carname = x;
//   }
// }

// const myCar = new Car("Ford");
// myCar.cnam




// Note: even if the getter is a method, you do not use parentheses when you want to get the property value.

// The name of the getter/setter method cannot be the same as the name of the property, in this case carname.






// Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

// Example
// You can use the underscore character to separate the getter/setter from the actual property:

// class Car {
//   constructor(brand) {
//     this._carname = brand;
//   }
//   get carname() {
//     return this._carname;
//   }
//   set carname(x) {
//     this._carname = x;
//   }
// }

// const myCar = new Car("Ford");
// myCar.carname

// // Use a setter to change the carname to "Volvo":
// myCar.carname = "Volvo";



// Static Methods
// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.


// Example
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// // You can call 'hello()' on the Car Class:
// Car.hello();

// // But NOT on a Car Object:
// myCar.hello();
// // this will raise an error.






const map = new Map();
map.set("name", "Suleiman");
map.set("age", 25);
console.log(map.get("name"))
console.log(map.get("age"))