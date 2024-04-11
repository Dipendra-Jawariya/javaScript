class User {
    constructor(userName) {
        this.userName = userName;
    }
    logMe() {
        console.log(`USERNAME is ${this.userName}`);
    }
}
class Teacher extends User {
    constructor(userName, email,password) {  
        super(userName);
        this.email = email;
        this.password = this.password;
    }

    addCourse() {
        console.log(`A new Course was added by ${this.userName}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123");
chai.addCourse();
console.log(chai);

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai == masalaChai);