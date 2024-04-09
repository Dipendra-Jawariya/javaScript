// Object Singleton

// const tinderUser = new Object(); // Singleton object
const tinderUser = {}; // literal object


tinderUser.id = "123abc";
tinderUser.name = "Dipendra"
tinderUser.isLoggedIn = false
// console.log(tinderUser);// shows 

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        usernameFullName : {
            firstName : "DIpendra",
            latName : "Jawariya"
        }
    }
};

// console.log(regularUser?.fullName?.usernameFullName); // ?. is optional chainning safe 
// hota h agr exist nhi krta h toh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1,obj2};
// const obj3 = obj1.conts(obj2);
//console.log(obj3); // shows { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({} ,obj1,obj2); // target source

const obj3 = {...obj1,...obj2} // using spreat operator
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "Dipendra@gmail.com"
    },{
        id : 1,
        email : "Dipendra@gmail.com"
    },{
        id : 1,
        email : "Dipendra@gmail.com"
    },{
        id : 1,
        email : "Dipendra@gmail.com"
    },
]
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // shows thw keys of thte tinderUser Object



// de-structure of objects
const course = {
    courseName : "js In Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}
// course.courseInstructor;

const {courseInstructor : instructor} =  course; // extrating courseInstructor from course
// console.log(courseInstructor);
console.log(instructor);  


// JSON --> key will be string as well as value be in string
//  {
//     "courseName" : "js In Hindi",
//     "price" : "999",
//     "courseInstructor" : "Hitesh"
// }


[
    {},
    {},
    {},
    {}
]