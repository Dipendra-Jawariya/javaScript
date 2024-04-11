// // fetch('https://something.com').then().catch().finally();
// // A promise is an object representing eventual completion or failure of an asynchronous operation

// // Promises are used to handle asynchronous operations in javascript.

// // Promise object has four states -

// // Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.

// // Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.

// // Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.

// // Settled - This state represents that the promise has been either rejected or fulfilled.

// // A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.

// // promises create krna
// const promiseOne = new Promise(function(resolve,reject) {
//     // Do an async task
//     //  DB calls,crptography,network
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000);
// });


// // prmises consume krna 
// promiseOne.then(function (){
//     console.log("promise consumed");
// })


// new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
//     }, 1000) 
// }).then(function() {
//     console.log("task 2 resolved");
// })



// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("this is a promise 3");
//         resolve({userName : "chai" , email : "chaiaurCode@gmail.com"});
//     }, 100);
// })


// promiseThree.then(function(user) {
//     console.log(user);
// })



// const promiseFour = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         let error = true;
//         if(error) {
//             reject('ERROR : Something went wrong');
//         }
//         resolve({userName : "chai" , password : "123"});
//     },1000)
// })


//  promiseFour
//  .then( (user) => {
//     console.log(user);
//     return user.userName;    
// } )
// .then((userName) => {
//     console.log(userName);
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Finally the error is resolved or rejected");
// });




// const promiseFive = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         let error = true;
//         if(error) {
//             reject('ERROR : Js went wrong');
//         }
//         resolve({userName : "javascript" , password : "123"});
//     }, 1000);
// });

// // async await directly errors ko handle nhi krte h 
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();




// // async function getAllUser() {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //     const data = await response.json();
// //     console.log(data);
// // }

// // getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
}) 


// My Own Promise

const promiseEx = new Promise(function(resolve,reject) {
    let error = true;
    if(!error) {
        resolve({userName :"Dipednra", inteview: "walkover"});
    }
    else {
        reject(`error : Something went wrong`);
    }
})
.then(function (value) {
    console.log(value);
    return value.userName;
})
.then(function (name) {
    console.log(name);
})
.catch(function (error){
    console.log(error);
})
.finally(() => {
    console.log(`Finally call final`);
})