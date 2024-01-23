const name = "anuj";
const repocount = 50;
// console.log(name + repocount + "value");

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('anuj-one-two');
//console.log(gameName[0]);
//console.log(gameName.__proto__.);


console.log(gameName.length);
console.log(gameName.touppercase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = "    anuj    ";
console.log(newStringOne);
console.log(newStringOne.trim());   

const url "https://anuj.com/anuj%20singh";
console.log(url.replace('%20' , '-'));       // replaces letters in string 
console.log(url.include("anuj"));   //if found yes op is true // if not found op is false 

console.log(gameName.split('-')); // this func make array of string ; 
//makes array where we define the letter ; if we define % so it makes element where there is separation is done by % 