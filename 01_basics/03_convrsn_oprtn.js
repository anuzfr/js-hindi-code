let score = 'hitesh';
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
let isLoggedIn = true ;
console.log(typeof isLoggedIn);

let isloggedin = "anuj";
let bool_isloggedin = boolean(isloggedin);
console.log(typeof isloggedin);

//1 => true ; 0 => false 
// "" => false 
// "anuj" => true

let someNumber = 100;

let stringNumber = string(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
//100 = number => after string convrsn "100" = string 

//***************************************** operation ******************************************************

let value = 3;
let negvalue = -value;
//console.log(negvalue);
 
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**2)
//console.log(2/2)
//console.log(2%2)

let str1 = "hello ";
let str2 = "anuj";
let str3 = str1 + str2;

//console.log( str3 );

//console.log("1" + 2);  // o/p is 12
//console.log(1 + '2'); // o/p is 12
//console.log("1" + 2 + 2); // o/p is 122
//console.log(1 + 2 + "2"); // o/p is 32

//console.log(3+4-5**6);

//console.log(true); // op is true
//console.log(+true); //op is 1
//console.log(+""); //op is 0

let gameCounter = 100;
// ++gameCounter ; //operator prefix // op is 101
// gameCounter++ ; //operator postfix // op is 101
console.log(gameCounter);
//study prefix postfix operator 