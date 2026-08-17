## Type vs Interface: Key Differences
- Extending: Both can be extended, but interfaces support declaration merging.
- Unions/Intersections: Only type aliases support union and intersection types.
- Implements: Classes can implement either.
- Recommendation: Use interface for objects, type for everything else.


### Best Practices:

- Use interface for defining object shapes and public APIs.
- Use type for unions, intersections, and primitives.
- Favor composition over inheritance for types.
- Document your types and interfaces for clarity.


### Common Pitfalls:

- Using type when you need declaration merging (use interface).
- Overcomplicating types-keep them simple and focused.
- Forgetting to update types/interfaces as code evolves.














## interface vs type from other resource

## interface 
- can be use 'implements', and 'extends' merge with the classes
- use for object structures
  

```
interface PersonInterface {
    name: string,
    age: number,
    isStudent: boolean
}

class UserInterface implements PersonInterface {
    name: string,
    age: number,
    isStudent: boolean
    constructor(n: string, a: number, isS: boolen){
      this.name = n
      this.age = a
      this.isStudent = isS
    }
}

// // const uInterface = new UserInterface(name: "suleiman",age: 25,isStudent: true);
// // name,age,isStudent  // - The declaration was marked as deprecated here.

const uInterface = new UserInterface("suleiman", 25, true);
console.log(uInterface)
console.log(uInterface.name)

```


## type
- cannot be use 'implements' not 'extends' with the classes
- use for unions, tuples
- use for advanced types: union types, literal types, type aliases and intersection types

```
type User = {
    name: string,
    age: number,
    isStudent: boolean
}

class UserType implements PersonType {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(n: string, a: number, isS: boolean){
      this.name = n;
      this.age = a;
      this.isStudent = isS;
    }
}

// const uType = new UserType(name: "suleiman",age: 25,isStudent: true);
// name,age,isStudent  // - The declaration was marked as deprecated here.

const uType = new UserType("suleiman", 25, true);
console.log(uType)
console.log(uType.name)
```
