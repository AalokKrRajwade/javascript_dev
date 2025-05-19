// functions: a package

// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(1, 3);

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 5));

function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());
console.log(loginUserMessage("Happy"));