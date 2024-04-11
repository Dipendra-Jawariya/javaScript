//  ES6 k baad ki kahani h y

// class User {

//     constructor(userName,email,password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUserName() {
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


// behind the schene
function User(userName,email,password) {
    this.userName = userName;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}`
}


const tea = new User("tea","tea@gmail.com","123");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());

