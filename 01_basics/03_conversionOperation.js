// let score = "33abc";  //NaN bcz of abc in the string and number can be extracted if it was only 33
let score = null;
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);


// "33" ==> 33 
// "33ab " ==> NaN
// true ==> 1;
// false ==> 0;

let isloggedIn = "csd";

// let booleanisLoggedin = Boolean(isloggedIn);
// console.log(booleanisLoggedin);

let someNumer = 33
let stringNumber = String(someNumer);
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2**3); // 2 power 2 ==>


let str1 = "hello";
let str2 = " dipendra";

let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2);
console.log( 1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive datatype) , Heap (non-primitive datatype)

let myname = "dipendra"

let anothername = myname;
myname = "jawariya"
console.log(anothername);