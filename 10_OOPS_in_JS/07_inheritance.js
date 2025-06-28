class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("teacher1", "teacher1@teacher.com", "123");
teacher1.logMe();

const temp = new User("temp")
temp.logMe()

console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);