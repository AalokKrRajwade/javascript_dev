// not a singleton object
const tmp_user = {}

// Singleton object
// const user = new Object();

tmp_user.name = "happy";
tmp_user.id = 123;
tmp_user.isPresent = true;

console.log(tmp_user);

const regularUser = {
    email: "some@gmail.com", 
    fullname: {
        userFullname:{
            firstname: "Aalok",
            lastname: "Rajwade"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstname);

// merging of two objects: 
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const tmp = {obj1, obj2};
// console.log(tmp);

// const tmp = Object.assign(target , source);

const tmp = Object.assign({}, obj1, obj2);
console.log(tmp);

// or we can use spread operation
const tmp2 = {...obj1, ...obj2};
console.log(tmp2);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

console.log(Object.keys(tmp_user));
console.log(Object.values(tmp_user));
console.log(Object.entries(tmp_user));

// to check a key, whether exist or not
console.log(tmp_user.hasOwnProperty('isPresent'))


/********************* Destructuring  *****************************/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// API (Application Programming Interface)
// Documentation of api are generally written id json (javascript object notation) format: 
// Ex: 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]