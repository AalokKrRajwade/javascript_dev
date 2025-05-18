const myDate = new Date()

console.log(typeof myDate);

// console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString());

console.log(myDate.getDate)
console.log(myDate.toDateString());

console.log(myDate.getFullYear)

let myCreateDate = new Date(2023, 0, 12); // indexing of months are 0 based
console.log(myCreateDate.toDateString());

// let myCreateDate2 = new Date(2023, 0, 12, 5, 3); // indexing of months are 0 based
// console.log(myCreateDate2.toLocaleString());

let myCreateDate2 = new Date("01-14-2023"); // mm-dd-yyyy
console.log(myCreateDate2.toLocaleString());

// timestamps

const myTimestamps = Date.now(); // this the time in milliseconds since 1 jan 1970
console.log(myTimestamps); 

// for comparision in two dates: 
console.log(myCreateDate2.getTime());