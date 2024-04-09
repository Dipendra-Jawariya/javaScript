let a = 10; // block scope
const b = 20; // block scope
var c = 30; // global score

if(true) {
    let a = 2000;
    const b = 30;
    // console.log("INNER: " ,a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const userName = "Dipendra";
    
    function two() { 
        const website = "Youtube";
        console.log(userName);
    }
    // console.log(website);

    two();
}

// one();


// ++++++++++++++ INTERESTING +++++++++++++++++++++
console.log(addOne(4));
function addOne(num) {
    return num + 1;
}


// addTwo(5);
console.log(addTwo(5)); // declare baad m ho rha h esme eliye  hoisting and execution context

const addTwo = function(num) {
    return num + 2;  
}

