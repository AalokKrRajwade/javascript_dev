const coding = ["js", "ruby", "java", "python", "cpp"]

// calback function

// coding.forEach(function (item) {
//     console.log(item);
// })

// arrow function

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// pass the reference of the function: printMe not printMe()
coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// array of objects:

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})