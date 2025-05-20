// arrays

const myArr = [0, 1, 2, 5, 8]
console.log(myArr);
console.log(typeof myArr);

const myHeors = ["spiderman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
// console.log(myArr);
myArr.push(7)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

// converts array into string
const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("A ", myArr);

// slice (takes two input (i, j), return a subarray starting from i to j-1), 
// splice (takes two input (i, len), to remove the subarray starting from i of length len)

const tmp1 = myArr.slice(1, 3);
console.log(tmp1);
console.log("B ", myArr);

const tmp2 = myArr.splice(2, 2)
console.log(tmp2);
console.log("C ", myArr);