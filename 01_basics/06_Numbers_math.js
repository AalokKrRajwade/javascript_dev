const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 23.8996;
console.log(num.toPrecision(4));

const hundreds = 100000000;
console.log(hundreds.toLocaleString()) // commas according to US standards
console.log(hundreds.toLocaleString('en-IN'))


/************************** Maths ************************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.sqrt(26).toFixed(4));
console.log(Math.min(1, 4, 5, -1));

// gives eveytime a random number between 0 to 1
console.log(Math.random());
console.log((Math.random()*10) + 1); // +1 to ignore the zero case
console.log(Math.floor(Math.random()*10) + 1); // 1-9

const min = 10;
const max = 20;

// for numbers between mit and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min)