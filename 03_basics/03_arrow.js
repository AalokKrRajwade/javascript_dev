// this keyword is used to refer current context

const user = {
    username: "Happy", 
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        // console.log(this);
    }
}

user.welcomeMessage();
// user.username = "Hitesh";
// user.welcomeMessage();

// console.log(this);

// name of object in the browser: window object

// An arrow function expression is a compact alternative to a traditional function expression, 
// with some semantic differences and deliberate limitations in usage:

// const temp_func = function(){
//     let username = "Aalok";
//     console.log(this.username);
// }

// arrow function: basic syntax

const temp_func = () => {
    let username = "Aalok";
    console.log(this.username);
}

temp_func();

// // basic arrow function:   
// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return: 
//  () => ()

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: "Aalok"};
const addTwo = (num1, num2) => ({username: "Aalok"});

console.log(addTwo(5, 9));