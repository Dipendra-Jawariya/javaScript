const descripter= Object.getOwnPropertyDescriptor(Math, "PI")  // y aapko object ki hidden chizo k baare m batati h  jo aapne nhi dekhi hogi

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); 

// console.log(descripter); 
/* shows
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/ 
//  Kyu nhi ho skti eski value change 
const myNewObj = Object.create(null);
const chai = {
    name : 'ginger chai',
    price : ' 2300',
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {   writable : false,
    enumerable : false,
    configurable : false}) 

console.log(Object.getOwnPropertyDescriptor(chai,"name"));