const user = {
    username : 'anuj' ,
    price : 300 ,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website at ${this.price}`);
        console.log(this);  // it return the whole current context with the before and after changes 
    }
}
user.username()
user.price()
user.username = 'sam'
user.price = 240
user.username()
user.price()

console.log(this) // its op is { } , empty string

// this  can only access current contect which is const user = {  } , outside the object or current context const user ={ } if we print the
// this  it return empty { } because out side  of const user = { } there is no current context which can be access by this

function chai(){
    let username = 'anuj'
    console.log(this.username)
}
chai() // this returns undefined because this operation is used for current context in obejct not function 

const chai = function (){
    let username = 'hitesh'
    console.log(this.username)
}
chai() 
// this also return the undefine beacause it is also an object
// but we can do it with the arrow function 

const chai = () => {                 // arrow function intro 
    let username = 'anuj'
    console.log(this.username)
}
chai()
// it is also rteurn undefined 
// but if we remove username fron the console.log(this.username ) and only console (this) so it return empty { }



//______________________________arrow funtion_______________________________________
// arrow funtion syntax (basic method) or (explicit return) because of return keyword 
// if there is { } curly braces then we should write return keyword but not in implicit return

const addtwo = (num1 , num2) => {
    return num1 + num2 
}
console.log(addtwo(1,2))
// op is 3

// arrow funtion syntax (implicit return) 
const addTwo = (nu1 , nu2) => nu1 + nu2 
const addTwo = (nu1 , nu2) => (nu1 + nu2) 
const addTwo = (nu1 , nu2) => ({username : 'anuj'})  //if there are {} without return just wrap the whole {} with ()
console.log(addTwo(2,3))

//arrow funtion used in arrays also 
// const myArray = [1,2,3,45]
// myArray.forEach( () => {} )
// myArray.forEach(function ( ) { } )





