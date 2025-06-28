// In JavaScript, prototypes are a fundamental mechanism by which objects inherit properties and methods from one 
// another. Every JavaScript object has a built-in property called its prototype, which is itself an object. 
// This prototype object can have its own prototype, forming a chain known as the prototype chain

// let myName = "aalok     "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aalok = function () {
    console.log(`Aalok is present in all objects`);
}

Array.prototype.heyAalok = function () {
    console.log(`Aalok says hello`);
}

myHeros.aalok()
heroPower.aalok()

myHeros.heyAalok()
// heroPower.heyAalok()

// *** inheritance ***

const User = {
    name: "xyz",
    email: "xyz@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax:
// Object.setPrototypeOf(Teacher, User);

let myName = "aalok     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh     ".trueLength()
"iceTea".trueLength()