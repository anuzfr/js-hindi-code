const user = {
    username : 'anuj',
    logincount : 9,
    signedin : true,
    getUserDetails : function(){
        console.log('got user details from database')
    }
}

console.log(user.username)
console.log(user.getUserDetails())
// console.log(this);  return current context 


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)   // make a new copy or a instance , and it is like new object , userOne = new User 
const userTwo = new User("ChaiAurCode", 11, false) // uses the argument from the user and stored with new act as new object 
console.log(userOne.constructor);
console.log(userTwo);