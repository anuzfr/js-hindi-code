// scopes are { } and defining in function and loops , objects has { } they are not scope 

let a = 10;
//const b = 2;
//var c = 35;
 

if (true) {
    let a = 1;           
    const b = 2;        
//  var c = 3;      

    console.log("inner" , a );
 }
console.log(a);
//console.log(b);
//console.log(c);

// inside { } scope is called block scope .
// outside { } scope is called global scope .


// if let a = 1 , if const b =2 is not exist out side the scope and defining inside the scope and print
// it throws an error 
// but if there is no var c = 3 outside the scope it still can print its value after just defining in scope 
// if var has 35 outside and 3 inside so it print the value which is inside of scope 

//if let a =10  outside has 10 and and we have let a = 1 ; we do print , it print 10 , but if we print inside scope and outside  
//scope it will give two diff values  

// so we use let ; const ; for variable declaration not var 
