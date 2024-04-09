// const coding =  ["js","ruby", "java","python", "cpp"];
// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item;
// });
// console.log(values); // shows undefined
// for each kuchh bhi return nhi krta h 


const myNums = [1,2,3,4,5,6,7,8,9,10];
// let newNums = myNums.filter( (num) => num > 4); // y value ko return bhi krta h 
let newNums = myNums.filter( (num) => { // shows [] because of explicit return aur return nhi lgaya h yha p 
    // num > 4 returns nothing if used shows []
    return num > 4; // explicity return h 
})
console.log(newNums);