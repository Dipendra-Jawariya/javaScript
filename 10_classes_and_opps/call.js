// function SetUsername(username) {
//     // complex DB calls
//     console.log("called");
//     this.username = username;
// }

// function createUser(username,email,password) {
//     SetUsername.call(this,username);
//     // this.username = username
//     this.email = email
//     this.password = password;
// }

// const chai = new createUser("chai", "chai@fb.com","123");
// console.log(chai);// shws { email: 'chai@fb.com', password: '123' }

function SetUserName(username) {
    console.log("user settled");
    this.username = username;
}
function createUser(username, email,password) {
    SetUserName.call(this,username);
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai","xyz@gmail.com","123");
console.log(chai);