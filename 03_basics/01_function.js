function sayMyName(){
    console.log("a");
    console.log("n");
    console.log("u");
    console.log("j");
}

//sayMyName   ==> it is reference 
//sayMyName() ==> it is execution 

// sayMyName()

// function addTwoNumber(number1 , number2){  // when u making function defintion , then bracket called parameters
    //console.log(number1 + number2)
//}
//addTwoNumber(2,2)       // when we pass value through parameter then bracket called argument

addTwoNumber(3,4)        // op is 7
addTwoNumber(3,"4")       // op is 34
addTwoNumber(3,"a")       // op is 3a
addTwoNumber(3,null)      //op is 3

function addTwoNumber(num1 , num2){
    console.log(num1 + num2)  
}
const result = addTwoNumber(3,5)
console.log("result : " , result)

// op is 8 
// op is result : undefined 
 
function addTwoNumber1(no_1 , no_2){
    //let rslt = no_1 + no_2
    //return rslt
    return no_1 + no_2            // we also just simply return the parameters without putting it in a variable
    console.log("anuj") // there is nothing will be executed after return statement or not come in output
}

const rslt = addTwoNumber1(6,9)
console.log("result : " , rslt)

// op is result : 15


function loginUserMessage(username = 'sam') {     // its value never be undefined it never goes to if block either sam logge in or anuj or other logged in 
    if(username == undefined){                  // we can also write if parametere as (!username)
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("anuj"));      // op is anuj just logged in  
console.log(loginUserMessage(""));          //op is    just logged in  
console.log(loginUserMessage());            //op is   undefined just logged in 