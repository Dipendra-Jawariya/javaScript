// we can use string with single '' as well as with ""
const name = "dipendra";
// console.log(typeof name); //shows string
const repoCount = 50;

// console.log(name + repoCount + " jawariya"); outdated way of writing code with a +

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Dipendra Jawariya');
// console.log(typeof gameName); // shows object --> key value pair h
// console.log(gameName[1]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(`${gameName}`);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));


const newStr = gameName.substring(0,5);
// console.log(newStr);

const anotherStr = gameName.slice(-5,4);
console.log(anotherStr); // reverse se start krega slice substring k liye 
// hi h if we strart from negative value



const newStringOne = "      dipendra    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes white space characters

const url = "https://dipendra.com/deep%20jawariya"


console.log(url.replace('%20', '-'));

console.log(url.includes('dipendra'));// shows true/ false

console.log(gameName.split(' ')); // shows [ 'Dipendra', 'Jawariya' ]