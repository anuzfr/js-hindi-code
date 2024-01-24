const score = 400;
const balance = new Number (100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
 
const otherNumber = 22223.8966;

//console.log(otherNumber.toPrecision(7));

let hundreds = 10000000;
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString("en-IN"));

// ************************** maths *********************************

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.9867));
//console.log(Math.ceil(55.7));
//console.log(Math.floor(55.7));
//console.log(Math.max(4,5,6,7,8));
//console.log(Math.min(4,5,6,7,8));

console.log(Math.random());  //op is between 0 and 1 
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10 ) + 1 );

const min = 10;
const max = 20;

//Math.random() * (max - min + 1) + min  // this formula to get random value in a range 
// if we do Math.floor to it it gives value between range 
// for example :  Math.random() * (max-min) + min 
//                Math.random() *    10     +  1
// all this give decimal value between range but do it with Math.floor for answer between range 


console.log(Math.floor(Math.random()* (max - min) + min ));