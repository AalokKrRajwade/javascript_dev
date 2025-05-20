// for loop

for (let i = 1; i <= 10; i++)
    console.log(i);

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}

// console.log(element);

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) 
    {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) 
    {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}