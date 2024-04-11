function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));// 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // shows {}

//  This means in JavaScript everyThing is object 
// functions are functions also as well as objects 
// we can also make it behave like a object

// javascript m prototyple inheritance hoti h hr chiz ko upr se upr leke jaadi h aur dundti h 
// example
const myArr = [2,5];
myArr.push(10);
// ab y push toh mene likha nhi h toh js myArr k prototype m dekhi h ese jo ki array ka