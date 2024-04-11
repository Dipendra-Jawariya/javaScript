//  Objects ---> An object is a collection of properties,and a property is an association between
// a name(key) and a value.


//  Singleton -- when we create objects as literals then singleton nhi banega
// and agr object constructor se banega to Singleton rhega
//  Object.create; // --> this is through singleton object which is created with the 
// help of constructor



 
//  Object literals  {}
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




//  methods of creating object in javascript
// 1. OBJECT LITERALS
const person = {
    name : 'Dipendra',
    age : 30,
    gender : male
}

// 2. Constructor Function 
function Person(name, age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const person1 = new Person('Dipendra',23,male);
const person2 = new Person('Alice',23,female);

// 3. Object.create() 
const personPrototype = {
    greeting : function() {
        console.log(`Hello!`);
    }
}

const personObj = Object.create(personPrototype);
personObj.name = 'Dipendra';
personObj.age = 23;
personObj.gender = 'male';
personObj.greeting();


// ES6 Classes
class Person {
    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let personClass_obj = new Person('DIpendra',22,'male');

//  5. Factory Function
// Factory functions are functions that return objects.
function createPerson(name,age,gender) {
    return {
        name : name,
        age : age,
        gender : gender
    };
}
let person_fucntion_obj = new createPerson('Dipndra',30,'male');

