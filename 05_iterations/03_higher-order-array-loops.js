// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    console.log(num);
}

const str = "Hello world!"
for (const ch of str) {
    console.log(`Each char is ${ch}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

// for(const i of map)
//     console.log(i[0] + ' :- ' + i[1]);

for (const [key, value] of map) {
    console.log(key, ' :- ', value);
}

//******************* iteration in objects: ***************//

const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// object is not iterable

// for (const [key, value] of myObject1) {
//     console.log(key, ' :- ', value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// "for in" in array:

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}

// "for in" in map (not iterable)

// const map2 = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map2) {
//     console.log(key);
// }