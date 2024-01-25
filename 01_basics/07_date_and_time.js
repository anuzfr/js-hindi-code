// Date 

const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());     // example  : wed mar 01 2023 12:30:41 
console.log(myDate.toDateString()); //            wed mar 01 2023
console.log(myDate.toLocaleString());   //          3/1/2023  12:30:45 PM
console.log(typeof myDate);    // op is object 

let createMyDate = new Date (2023, 0 , 23); // jan is at 1st so its index is 0 in month list // so we write 0 for january 
//month start from when is in array ( , , , , ,)
console.log(createMyDate.toDateString); // op is mon jan 23 2023
let createMyDate1 = new Date (2023, 0 , 23 , 5 , 3 );
console.log(createMyDate1.toLocaleString);    // op is 1/23/2023  5:03:00 am

let myDate1 = new Date("2023-01-15");   // month start fron 1 when written in string form 
console.log(myDate1.toLocaleString());  // op is 1/15/2023 12:00:00

let myTimestamp = Date.now()
console.log(myTimestamp);  // long value of milisecond from the date in ecma and mdn docs 
console.log(myDate1.getTime());  // give value of milisecond from fixed date to the variable date 
console.log(Date.now());    // gives current date in milisecond
console.log(Date.now()/1000);     // give current date in seconds but in decimal 
console.log(Math.floor(Date.now()/1000));  // give current date in exact second


let newdate = new Date();
console.log(newdate);
console.log(newdate.getDay()); // monday is 0 
console.log(newdate.getMonth());  // january is 0


// ` ${newdate.getDay()} is the day `

newdate.toLoacaleString('default ' , {
    weekdays : 'long'
});


