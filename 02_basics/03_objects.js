//  Objects ---> An object is a collection of properties,and a property is an association between
// a name(key) and a value.


//  Singleton -- when we create objects as literals then singleton nhi banega
// and agr object constructor se banega to Singleton rhega
//  Object.create; // --> this is through singleton object which is created with the 
// help of constructor



 
//  Object literals 
const mySym = Symbol("key1");
const JsUser  = {
    //Key : "Value" 
    name : "Dipendra",//---> by defauly system name ko ---> "name" ese treat krta h 
    "fullName" : "Dipendra Jawariya",
    [mySym] :"mykey1", // Symbol ki trah refer karna ho toh "[]" lgane honge
    age : 22,
    location : "Indore",
    email : "dipendrajawariya@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday", "Friday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser."fullName");
// console.log(JsUser.fullName);
// console.log(JsUser["fullName"])


// console.log(typeof JsUser.mySym);
// console.log( JsUser[mySym]);



JsUser.email = "Dipendra.com"; //overwrite the value of object key
// Object.freeze(JsUser); // to freeeze a object
JsUser.email = "XYZ"; // CHANGES  propogate nhi honge ab
// console.log(JsUser);



// function in object
JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greeting2 = function() {
    console.log(`Hello Js User,${this.name}`);
}
// console.log(JsUser.greeting); // shows [Function (anonymous)]  return aaya h ek function exrcute nhi hua h
console.log(JsUser.greeting()); // shows Hello Js User
console.log(JsUser.greeting2()); // shwos Hello Js User,Dipendra

