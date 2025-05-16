// there are mainly two types of data types in JS: 
// 1: Primitive (call by value)
//    7 primitive data types: String, Number, Boolean, null (empty), undefined, Symbol, BigInt

// 2: Non-Primitive (call by reference)
//    Array, Object, Function

//  JavaScript is a dynamic language. This means that many of its behaviors and features are determined at runtime rather than at compile time.

// Symbols:

const id = Symbol('123');
const id_2 = Symbol('123');

console.log(id === id_2);

const bigNumber = 31452453423143215669n

// arrray:
const heros = ["shaktiman", "Jadoo"];

// object:
let myObj = {
    name: "Harry",
    age: 20
}

// function: 
const myfunc = function () {
    console.log("Hello world!");
}

console.log(typeof myfunc);
console.log(typeof null);

/********************************************************/

// stack merory is used by "Primitive data-types"
// Heap memory is used by "Non-Primitive data-types"

let myName = "Harry";
let anotherName = myName;
anotherName = "Aalok";

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1;
user2.email = "hitesh@google.com";

console.log(user1.email);
console.log(user2.email);