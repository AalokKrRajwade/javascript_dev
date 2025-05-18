const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// substring and slice almost do same work, takes two index arguments (l, r) and returns l to r-1 charcters
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// substr takes two arguments or 1, starting index and length of the substring:
console.log(gameName.substr(0, 5));

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const st = "    Hi     hitesh     ";
console.log(st.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));