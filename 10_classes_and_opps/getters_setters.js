class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }
    set email(value) {
        this._email =  value;
    }
    get email() {
        return this._email.toUpperCase();
    }
    get password() {
        return  this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
}

const dipendra = new User("dipendrajawariya@gmail.com", "xyz")
console.log(dipendra.password);
console.log(dipendra.email);