const  promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls , cryptography , network
    setTimeout(function(){
        console.log('async task is completed');
        resolve() // if we want to write .then() out of this scope so we have to write resolve() inside the scope
    },1000)
}) 
promiseOne.then(function(){
    console.log('promise completed')
})

// promise in few line 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('task completed')
})

// pass object as parameter in resolve()

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "anuj" , mail : 'chai@chai.com'})
    },1000)
}).then(function(user){
    console.log(user);
})

// use of reject , chaining of .then() ,use of .then() .catch() .finally() , with an error

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username : 'anuj' , pass : '123'})
        }
        else{
            reject('error! something went wrong')
        } 
    } ,1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error) // if error is true then this .then block will not executed and print .finally , and if its false then its goes upto .finally() without .catch()
}).finally(() => {
    console.log('the promise is either resolved or rejected ')
})

// error catching with async await , try , catch this method is same as .then() .catch() but it wait untill work is done then it go further otherwise give error at that place
// usefull in case like data base connected or not ,bina connect kiye age bdhna hi nhi h , vha use krte hai async await syntax  

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// fetch with async await 

async function getAllUser (){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = await response.json() // response takes time thats why we put response.json() in await 
        console.log(data)
    } catch (error) {
        console.log("E: " ,error)
    }
}
getAllUser()

// fetch with then catch 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available , find 