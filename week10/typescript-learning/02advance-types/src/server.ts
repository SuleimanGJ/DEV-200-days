// Union types
// - a variable can hold value out of many types.
// - are used when a value can be more than a single type

let id: number | string;
id = 101;
id = "Suleiman"
// id = true; // Error 


type status = "success" | "error" | "pending";
function showStatuts(s: status){
    console.log(s);
}
showStatuts("success")
showStatuts("error")
showStatuts("pending")
// showStatuts("other thing not accepts") // error
// showStatuts("done") // error



// Literal types
// - allow a variable to have only specific values.

let direction: "left" | "right" | "up" | "down";
direction = "left"
direction = "down"
// direction = "back" // error
// direction = "forward" // error


type Role = "admin" | "user" | "viewer" | "member";
let userRole: Role = "admin"
userRole = "user"
userRole = "member"
// userRole = "manager"  // error


// Type aliases
// - give a custom name to any type


type UserId = number | string;
type UserName = string;
let Id: UserId = 123
Id = "suleiman"; 


type User = {
    id: UserId,
    name: UserName,
    isActive: boolean
}

let userOne: User = {id: "101R", name: "Abdi", isActive: true}


// Intersection type
// - combine multiple types into one

type Person = {
    name: string,
    age: number
}

type Developer = {
    skills: string[],
    experience: number
}

// combine them

type DevPerson = Person & Developer // must meet all property ofperson & developer
type DevPersonOne = Person | Developer // should meet at least one property ofperson & developer

let dev: DevPerson = {
    name: "Abdi",
    age: 28,
    skills: ["html, css, js, frontend"],
    experience: 1
}
let devOne: DevPersonOne = {
    name: "Moh",
    age: 25
}