//  Object Literal
const user = {
    userName: "Dipendra",
    loginCnt : 8,
    signedIn : true,

    getUserDetails :function()  {
        console.log(`Get user details , ${this.userName}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails());


// const promiseOne = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         let error = true;
//         if(error) {
//             reject(error);
//         }
//         console.log("promise invoked");
//         resolve({userName: "Dipendra", loginCnt : 8});
//     },1000)
// }).then((user) => {
//     console.log(user);
//     return user.userName;
// }).then(function(userName) {
//     console.log(userName)
// })
// .catch((error) =>{
//     console.log("This is error");
// })
// .finally(() =>{
//     console.log("finally executed");
// })


// Constructor function --
function User(userName,logginCnt,isLoggedIn) {
        this.userName = userName;
        this.logginCnt = logginCnt;
        this.isLoggedIn = isLoggedIn;
        this.greeting = function() {
            console.log(`Welcome ${this.userName}`);
        }
        return this; // app return this explicitly define kre ya na kre y implecity define hota hi h aur value milti h
}

// const userOne = User("Dipendra", 20,true);
// const userTwo = User("KYa h B", 0,false); // values overwrite kr dega even if print nhi kiya h ,therefore constructor function jo h voh hmesha aapko nayi instance deta h copy deta so overwrite nhi hoti h chize


// new key word use krke
const userOne = new User("Dipendra", 20,true);
const userTwo = new User("KYa h B", 0,false);
// console.log(userOne);
// console.log(userTwo); // ab dono ki values alg hi rhegi as we are not overwriting the values

// constructor function gives new instance



//  NEW keyword likhte se hi ek empty object create hota h  jise instance kehte h 
// 2, constructor function call hota h new keyword k sath
// 3. argument likhe hue this key m jaate h 
// 4. return this instance


console.log(userOne.constructor);