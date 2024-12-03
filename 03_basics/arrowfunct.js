const user = {
      username : "Aradhya",
      price: 999,

      welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
      }
}

user.welcomeMessage()
user.username = "Shreya"
user.welcomeMessage()

//Explicit return-when we use return
// const addTwo = (num1,num2) => {
//       return num1+num2
// }
//Implicit return-when we don't use return
const addTwo = (num1,num2) => ( num1+num2 )
