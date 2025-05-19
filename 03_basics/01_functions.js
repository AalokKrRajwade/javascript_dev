// functions: a package

const { use } = require("react");

// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(1, 3);

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 5));

function loginUserMessage(username) {
    if (username == undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());
console.log(loginUserMessage("Happy"));

// here ... is known as rest
function calculateCartPrice(...num) {
    return num;
}
console.log(calculateCartPrice(200, 100, 500));

function calculateCartPrice2(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice2(200, 400, 500, 2000))

// passing object in the function:

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username: "sam",
    price: 200
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));