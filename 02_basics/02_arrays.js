const marvel = ["ironman", "thor", "spiderman"]
const dc = ["superman", "batman", "flash"]

// const tmp = marvel;
// tmp.push(dc);
// console.log(tmp);
// console.log(tmp[3][2]);

// for merging two arrays: 
const tmp2 = marvel.concat(dc);
console.log(tmp2);

// or we can use spread
const tmp3 = [...marvel, ...dc];
console.log(tmp3);

// flat an array: 
const a = [1, 2, 3, [3, 4, 5, [0, 9, [7]]], 8, 6];
const flattened_a = a.flat(Infinity);
console.log(flattened_a);

// checking wether array or not
console.log(Array.isArray("Hell0"));

// converting into array: (string to array)
console.log(Array.from("Hello"));

// object to array conversion: 
console.log(Array.from({name: "Harry"}));

// we have to pass the specific element (key/values), which we want to convert into array
console.log(Array.from({name: "Harry"}.name));

let x1 = 100, x2 = 200, x3 = 500
console.log(Array.from(x1));
console.log(Array.of(x1, x2, x3));