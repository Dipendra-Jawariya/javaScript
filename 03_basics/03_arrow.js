// arrow function and this keyword

const user = {
    userName : "Dipendra",
    registorPrice : 199,

    welComeMsg : function() {
        console.log(`${this.userName} , welcome to wesite`);
        // this referes to the current context of the userName
        console.log(this);
    }


}
// user.welComeMsg();
// user.userName = "Dipesh";
// user.welComeMsg();

// console.log(this);

// function chai() {
//     let userName = "Dipendra";
//     console.log(this.userName); // shows undefined
// }

// chai();


// Arrow Function
const chai = () => {
    let userName = "Dipendra";
    console.log(this.userName);  // show undefined
}

// chai();

// const addTwo = (num1,num2) => { // explicit return
//     return num1 + num2;
// }
//implecit return --> return nhi lgega
// const addTwo = (num1,num2) =>  num1 + num2;

// return object from function --> '()' k karan return nhi lg rha h 
const addTwo = (num1,num2) => ({userName : "Dipendra"})
console.log(addTwo(4,7));



const myArr = [20,3,3,44,333,455]

