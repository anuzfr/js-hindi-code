// if 
const isuserLoggedin = true
const temp = 30
if ( temp > 30) {
    console.log('temp greater than 50' )
}
else if ( temp < 30 ){
    console.log('temp is lower than 50 ')
}
else {
    console.log('it is nice weather')
}

// if else are based on true / false of the comparison of condition 
// compare by comparision operator : < , > , = , <= , >= , == , === , != , !===

const score = 200;
if (score > 100) {
    let power = 'fly' ;  //but if we change let with var it print without error ,that why also we dont use var keyword for define variable
    console.log(`user power : ${power}`)    
}
//console.log(`user power : ${power}`)   // it throw an error of outside of the scope , power cant aceess in global scope 

//---------------------------------
const balance = 1000
// if (balance > 500 ) console.log('test'), console.log('test1'); //implicit scope , it is not scope but we assume that 

if (balance < 500) {
    console.log('less than 500');
}
else if (balance < 750){
    console.log('less than 750')
}
else{
    console.log('less than 1200')
}

// and && , or|| , not!
const isUserLoggedIn = true
const debitCard = true 
const loginFrom_gmail = true 
const loginFrom_email = false

if (isUserLoggedIn && debitCard) {
    console.log("buy course")
}

if (loginFrom_email || loginFrom_gmail){
    console.log('user logged in ')
}