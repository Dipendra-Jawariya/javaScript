let a = 10; // block scope
const b = 20; // block scope
var c = 30; // global score

if(true) {
    let a = 2000;
    const b = 30;
    console.log("INNER: " ,a);
}



console.log(a);
// console.log(b);
// console.log(c);