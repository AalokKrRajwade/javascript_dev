// *** Object literal: ***

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // method:
    getUserDetails: function () {
        // console.log("Got user details from database");

        // for current context we use: this
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}

console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);

// *** Object Constructor: ***

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

// abstraction and encapsulation:

const userOne = new User("aalok", 12, true)
const userTwo = new User("happy", 11, false)
// console.log(userOne.constructor);
//console.log(userTwo);