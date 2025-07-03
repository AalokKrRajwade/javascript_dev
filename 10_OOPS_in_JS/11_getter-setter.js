// In JavaScript, getters and setters are special methods that allow you to define how to access and modify the 
// properties of an object. They provide a way to encapsulate the logic for retrieving and updating property values, 
// making your code cleaner and more maintainable.

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password.toUpperCase()}123`;
    }

    set password(value){
        this._password = value;
    }
}

const temp = new User("xefrwd@google.com", "abc");
console.log(temp.email);
console.log(temp.password);