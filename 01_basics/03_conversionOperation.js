let score1 = "33";
// let score1 = null;
// let score1 = true;
// let score1 = undefined;

console.log(score1);
console.log(typeof score1);
// console.log(typeof(score)); both the ways are same for determining the type of datatype

let newScore1 = Number(score1);
console.log(newScore1);
console.log(typeof newScore1);

let score2 = "33abc";
console.log(score2);
console.log(typeof score2);
// console.log(typeof(score)); both the ways are same for determining the type of datatype

let newScore2 = Number(score2);
console.log(newScore2); // Nan -> not a number
console.log(typeof newScore2); 

// conversion in number
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let score3 = 2;
console.log(score3);
console.log(typeof score3);
// console.log(typeof(score)); both the ways are same for determining the type of datatype

let newScore3 = Boolean(score3);
console.log(newScore3); // Nan -> not a number
console.log(typeof newScore3);

// conversion in boolean:
// 1 => true
// 2 => true
// 0 => false
// "" => false
// "abc" => true

/********************** Operations *******************/
console.log("Operations: ")
// console.log(2+3)
// console.log(2-3)
// console.log(2/3)
console.log(2*3)
console.log(2**3) // 2^3 = 8

console.log(1+2)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

// console.log(true) => true
// console.log(+true) => 1
// console.log(true+) => error
// console.log(+"") => 0