// The 'Object' type represents one of JavaScript's data types. It is used to store various keyed 
// collections and more complex entities. Objects can be created using the:
//  Object() constructor (=> singleton) or the object initializer / literal syntax.

// object literals: (methods to declare an object)
// 1. using constructor: (singleton are made using only constructor)
const person = {
    name: "Matthew",
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);
me.isHuman = true;
me.printIntroduction();

// 2. object literals:

// object{
//   key: value
// }

const mySym = Symbol("key1");

const myObj = {
    name: "xyz",
    "full name": "abc",
    // mySym: "myKey", (this is wrong way)
    [mySym]: "myKey", // correct way to convert a symbol as a key in the object
    age: 90,
    location: "city",
    email: "xyz@google.com",
    isLoggedIn: false,
    workingDays: ["monday", "tuesday"]
}

console.log(myObj);

console.log(myObj.email);
console.log(myObj["email"]);

// if the naming of key not follows the variable naming rules, then we can only access the value by 
// using this form
console.log(myObj["full name"]);

console.log(myObj.mySym);
console.log(myObj[mySym]);

console.log(myObj.email);

myObj.email = "newemail@emai.com";
console.log(myObj.email);

// Object.freeze(myObj);

myObj.email = "checknewemail@emai.com";
console.log(myObj.email);

myObj.greeting = function(){
    console.log("Hello js user");
}

// console.log(myObj.greeting);
console.log(myObj.greeting());


myObj.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(myObj.greeting2());