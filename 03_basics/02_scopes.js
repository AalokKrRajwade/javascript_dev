//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // c = 30
    // var d = 44
    // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// *********** Closure ***************//
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
// state (the lexical environment). In other words, a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        const website = "youtube";
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    // console.log(website);

    displayName();
}
init();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


/******************** Interesting ************************/

console.log(addone(5)) // not gives error
function addone(num){
    return num + 1
}
// console.log(addone(5))

addTwo(5) // gives error
const addTwo = function(num){
    return num + 2
}