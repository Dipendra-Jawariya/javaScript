const arr = [1,2,3,4,5,6,7,8]

// for (const iter of arr) {
//     console.log(iter);
// }

const greetings = "Hello World";
for (const greeting of greetings) {
    console.log(`Each char is ${greeting}`);
}


// Maps

const map = new Map();
map.set('IN' ,"India")
map.set('US' ,"United State Of America")
console.log(map);


// forof loop in objects
const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObj) {
//    console.log(key,':-', value); 
// } // kaam nhi krega bolega object iterable nhi h 

