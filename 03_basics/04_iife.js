// IIFE : Immediately Invoked Function Expression
// An IIFE is an idiom in which a JavaScript function runs as soon as it is defined. 
// It is also known as a self-executing anonymous function. 

// to prevent the pollution from the global scope IIFE are used:

// standard IIFE
(function () {
    // statements…
})();

// arrow function variant
(() => {
    // statements…
})();

// async IIFE
(async () => {
    // statements…
})();

// Ex:
(function chai() {
    // named IIFE
    console.log("Hello I'm here");
})();

((name) => {
    // unnamed IIFE
    console.log(`Hello I'm ${name}`);
})("Aalok");