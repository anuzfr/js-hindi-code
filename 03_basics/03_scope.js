// scopes are { } and defining in function and loops , objects has { } they are not scope 

let a = 10;
const b = 2;
var c = 35;
 

if (true) {
    let a = 1;           
    const b = 2;        
    var c = 3;      

    console.log("inner" , a );
 }
console.log(a);
console.log(b);
console.log(c);

// inside { } scope is called block scope .
// outside { } scope is called global scope .


// if let a = 1 , if const b =2 is not exist out side the scope and defining inside the scope and print
// it throws an error 
// but if there is no var c = 3 outside the scope it still can print its value after just defining in scope 
// if var has 35 outside and 3 inside so it print the value which is inside of scope 

//if let a =10  outside has 10 and and we have let a = 1 ; we do print , it print 10 , but if we print inside scope and outside  
//scope it will give two diff values  

// so we use let ; const ; for variable declaration not var 


//----------------------------------------------------------------------

function one(){
    const username = "anuj"

    function two(){
        const website = 'youtube';
        console.log(username) ;

    }
    // console.log(website)
    two()
}
one()

// we cant print webiste because it is inside function two and cant access from outside 
// but function two has console that print variable from function one , username is outside of function two but can call from function one 
// function one is global for function two 
// if we comment the two() then there is no call of console which contain variable from one() 
// function two() can acess from function one() but not vice versa.
// if we comment the two() there is no triggering of function two() so there is no triggering of function one() 
 

// another example for scope
if(true){
    const username = "hitesh"
    if (username === 'hitesh'){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)
} 
//console.log(username)


//-----------------------------------interesting-------------------------------------------
// there are two type of function declaring 

//method 1 
function addone(num){
    return num + 1
}
addone(5)

//in this method if we put addone(5) before function declaring , there is no eror at all



// method 2
const addtwo = function(num){
    return num + 2
}
addtwo(5)
// in this method if we put addone(5) before function declaring , there is an error in it 