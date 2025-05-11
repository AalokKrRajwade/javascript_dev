"use strict"; // treat all JS code as newer version

// alert(3 + 3) will give error because we are using node.js, not browser

console.log(3 + 3);
console.log("hello" + " world");

// we can use let for number, string, boolean, symbol etc;

let age = 20;
let Name = "Hitesh";
let isMarried = false;
let friend = undefined;
let wife = null;

console.table([typeof age, typeof Name, typeof isMarried, typeof friend, typeof wife]);