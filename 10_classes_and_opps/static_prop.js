class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username ${this.username}`);
    }
    static createId () { // method ka access rokne k liye
        return `123`
    }
}

const dipendra = new User("Dipendra");
// console.log(dipendra.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }

}

const english = new Teacher("iphone", "i@phone")
english.logMe();