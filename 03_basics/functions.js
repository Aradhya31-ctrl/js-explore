function addTwoNumbers(number1,number2){
    let result  = number1+number2
    return result
    //return number1 + number2
}
const result = addTwoNumbers(3,5)
console.log("Result: ",result);

function loginUserMessage(username){
         if(username === undefined){
            console.log("Please enter a username");
         }
         return `${username} just logged in`
}

console.log(loginUserMessage("aradhya"))
console.log(loginUserMessage())


//FOR SHOPPING CARD PURPOSE
function calculateCartPrice(...num1){
         return num1
}
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

//PASSING OBJECT
const user = {
      username : "Aradhya",
      price : 1900
}

function handleObject(anyobject){
         console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//PASSING ARRAYS
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
         return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600])) 