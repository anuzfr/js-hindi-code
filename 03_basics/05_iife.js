// immediately invoked function expression 
console.log('iife');
// iife syntax is ()() 
// in first ( ) we write the whole function , and second () is its execution 
// ()() and we have to write parameters so we write in second () as first () contains whole function and when we print it it immediately printed 
// that why its called immediately invoked function expression 

(function chai (){
    //named iife : in which function has a name ,like in this case we have chai 
    console.log('DB CONNECTED');
})(); // this semi colon is seperated two iife 

( (name) => {
    // without name iife
    console.log(`DB IS CONNECTED ${name}`)
})('anuj')