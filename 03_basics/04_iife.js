// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB connected`);
})();
// chai();

// global scope k pollution se problem hoti h kyi baar toh us global scope k
//  variables ya declaration ko hatane k liye y krte h 
// ()() // --> first parenthesis is function defination and second one is execution


// named iife
( function aurcode() {
    console.log(`code krlo`);
})();


// unnamed iife --> immediatelty invoked function expression
( (name) => {
    console.log(`Db connected two ${name}`);
})("dipendra jawariya");


// to write two iife in a single file we needed to explicitly put ';' otherwise encounter error


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



const emptyObj = {};

if(Object.keys(emptyObj).length === 0)  {
    console.log("Object is Empty");
}



// ?? Nullish Coalesing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 14;
console.log(val1);

// do {
    
// } while (condition);

// while (condition) {
    
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }