//global scope
// var c = 300
let a = 300

//block scope
if(true){
    let a = 10
    const b = 20
}

console.log(a)

function one(){
    const username = "hitesh" 
    //child parent access the variables of parent
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    
}