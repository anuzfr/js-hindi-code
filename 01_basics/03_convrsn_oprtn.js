let score = 'hitesh'
console.log(typeof score);

let value_in_number = number(score);
console.log(score);
console.log(typeof value_in_number);

/* 
33 = number 
"33" = string => after number convrsn its a number 
"33abc" = string => after number convrsn its a number 
true => 1 ; false => 0
*/
let isLoggedIn = true 
console.log(typeof isLoggedIn);

let isloggedin = "anuj"
let bool_isloggedin = boolean(isloggedin)
console.log(typeof isloggedin)

//1 => true ; 0 => false 
// "" => false 
// "anuj" => true

let someNumber = 100

let stringNumber = string(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
//100 = number => after string convrsn "100" = string 