function calculateCartPrice(num){
    return num
}
console.log(calculateCartPrice(200));

//-------------------------------------------------------------

function calculate_cart_price(...num1){              // here that (... num1 ) is called rest operator , when we have to merge arrays and 
    return num1                                      // objects like (...obj1, ...obj2, ...obj3) then we called that a spread operator        
}
console.log(calculate_cart_price(200,400,500,600,900));

//-------------------------------------------------------------

function calc_CartPrice(val1 , val2 ,...num2 ){
    return num2
}
console.log(calc_CartPrice(110,200,300,500,600,700,800,900))   // in this first argument is taken by val1 , second one is taken by val2 
// third is (...num2) which is here a rest operator which prints all rest value as in an array 
// so we return only num2 so its prints only rest value after excluding the val1 , val2   

//-------------------------------------------------------------
const user = {
    username : "anuj" , 
    age : 20
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

// handleObject(user)

handleObject({                           // without making function 
    username : 'sam' ,
    age : 30
})

//----------------------------------------------------------------------

const myNewArray = [10,20,30,40,50,60]

function return2ndValue(getArray){
    return getArray[1]
}
// console.log(return2ndValue(myNewArray)) 

console.log(return2ndValue([200,400,500,800,900]));