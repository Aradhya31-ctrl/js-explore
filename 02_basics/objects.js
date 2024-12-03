//object literals

const mysym = Symbol("key1")

const JsUser = {
      name : "Aradhya",
      "full name" : "Aradhya Singh",
      [mysym] : "mykey1",
      age:20,
      location:"Bihar",
      email:"aradhya12@gmail.com",
      isLoggedIn: false,
      LastLoginDays:["Monday","Saturday"],
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "aradhya@kiit.ac.in"
Object.freeze(JsUser)
JsUser.email = "aradhya5@kiit.ac.in"
console.log(JsUser);

// JsUser.greeting = function(){
//       console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//        console.log(`Hello Js user,$(this.name)`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//object singleton
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Shreya"
tinderUser.isLoggedIn=false

// console.log(tinderUser);
const regularUser = {
      email : "shreya@gmail.com",
      fullname:{
         userfullname :{
            firstname :"Aradhya",
            lastname : "Singh"
         }
      }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) //merging both objects
//use spread
const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));

const course = {
      coursename : "js",
      price: "999",
      courseInstructor : "hitesh"
}
const{courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

//JSON
{
      "name" ; "aradhya",
      "coursename" ; "js",
      "price";"free"    
}

{
      {};
      {};
      {}
}