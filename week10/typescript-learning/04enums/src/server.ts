// interface WithId {
//     id: string
// }

// interface User extends WithId {
//     name: string
// }

// const u: User = {
//     id: "01",
//     name: "ali",
//     wringProperty: 123
// }


// type WithIdT = {
//     id: string
// }

// type UserT implements WithIdT {
//     name: string
// }


// const user: UserT = {
//     id: "01",
//     name: "ali",
//     wringProperty: 123
// }



// enum - allows you to define a set of named constants

// Numeric
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move);              // 0
console.log(Direction.Left);    // 2
console.log(Direction[1]);      // "Down"


// String

enum Role {
    User = "USER",
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

let User: Role = Role.User;
console.log(User);              // "USER"
console.log(Role.Admin);        // "ADMIN"
console.log(Role["Editor"]);    // "EDITOR"


// Const

const enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Pending = "PENDING",
}

let succ: Status = Status.Success;
console.log(succ);                  // "SUCCESS"
console.log(Status.Error);          // "ERROR"
console.log(Status["Pending"]);     // "PENDING"


// type assertion

let value: unknown = "suleiman";
// using as syntax
let nameOne = value as String;
console.log(nameOne);               // "suleiman"
console.log(nameOne.toUpperCase()); // "SUELIMAN"

// using angle-bracket syntax
let nameLen = <string>value;
console.log(nameLen);           // "suleiman"
console.log(nameLen.length);    // 8



// more on enums

type KeyInput = "Up" | "Down" | "Left" | "Right";

function typePressKey(KeyPressed: KeyInput){
    if(KeyPressed == "Up") return
};

typePressKey("Up");
typePressKey("Left");


enum DirectionEnum {
    Up,
    Down,
    Left,
    Right
}

function onPressKey(KeyPressed: DirectionEnum){
    if(KeyPressed == DirectionEnum.Up) return
};

onPressKey(DirectionEnum.Up);
onPressKey(DirectionEnum.Down);


// ex. usecase

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500,
}

// res.status(ResponseStatus.Success)
