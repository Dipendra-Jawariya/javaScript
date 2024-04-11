//  Function 

function sayMyName() {
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("e");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("a");
}

// sayMyName() 

// const func = sayMyName;
// console.log(func); // refernce mili function ki execution nhi krvai
// const func1 = sayMyName();
// console.log(func1);

// function addTwoNumer(num1,num2){
//      console.log(num1 + num2);
// }
function addTwoNumer(num1,num2){
    // console.log(num1 + num2);
    return num1 + num2;
}
const result = addTwoNumer(1,"3"); //shows 13
console.log(`Result : ${result}`) //  13 shows Result : undefined

function loggedInUserMsg(userName) {
    return `${userName} just loggedIn` 
}

// console.log(loggedInUserMsg("Dipendra"));



function calculateCartPrice(...num) {
    return num;
}

// console.log(calculateCartPrice(200,400,500,200000,9449494949));

const user = {
    name : "Dipendra",
    prices : 199
}
function handleObject(anyObject) { 
    console.log(`UserName is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    name :"Divya",
    price : 1333
});

const mynewArr = [200,3000,4000,100,600];
function returnSecondValue(getArr) {
    return getArr[1]
}

console.log(returnSecondValue(mynewArr));

// 4. Function Constructor: The Function constructor can be used to create a new function object dynamically.
let greet = new Function(`console.log("Hello!")`);

//  5. Function as a Method
let person = {
    name :'dipenra',
    greet : function() {
        console.log(`Hello!`);
    }
}
