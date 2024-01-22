"use strict"  // treat all js code as newer version 
//alert (3+3) // we are using nodejs not the browser

console.log(3 
    + 3)

console.log("hitesh")


let name = "anuj"
let age = 20
let isLoggedIn = false

// (let) data type for defining the variable
//bigint
//string => " "
//boolean => true / false 
//null => standalone value 
//undefined => thats value is undefined 
//symbol => unique
//object

console.log(typeof age)
console.log(typeof undefined) // o/p is undefined 
console.log(typeof null) // o/p is object => it is a value in it is null




//****************************** data type summary *****************************************

// primitive data type
 
// 7 types    ==> string , number , boolean , null , undefined , symbol , bigInt 

const score = 100 
const score_value = 100.3

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = symbol("1234");
const otherId = symbol("1234");
console.log(id == otherId);


const bigNumber = 12345678900987654321n  //bigInt


// non primitive data type (reference)
// 3 types arrays , objects , functions 

let arraySuperhero = ["ironman" , "batman" , "superman"];  // array 
let objIronman = {
    name_ironman = tony stark 
    age = 36

};
const myFunc = function()
{
          console.log("hello world");
}

console.log(typeof myFunc) 