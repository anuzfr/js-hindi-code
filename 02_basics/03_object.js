//singleton
//object.create 

//objects literals

const mysym = Symbol('key1');

const jsUser = {
    name : 'anuj' ,  
    'full_name ' : 'anuj_singh'  ,
    [mysym] : "mykey1" ,
    age : 20 ,
    location : 'delhi' ,
    email : 'anuj@gmail.com' ,
    isloggedin : false,
    lastLoginDays : ['monday' , 'saturday']
};           // key : value   ==> the key is stored at back in the form of string  ==>  name : "anuj"   /   "name" : "anuj"  is same

console.log(jsUser.email);   // when dot method is used no inverted comma is used 
console.log(jsUser["email"]);  // when use square bracket we define key name as a string because at back it stored as string
// console.log(jsUser['full_name']); // full_name  key is even defined as "string" , so it can't accesed by dot method 
console.log(jsUser[mysym]);  // this return its value as its act just as string when we do its type of but its written as [mysym] : 'mykey1'
                            //    by using its syntax of [mysym] : it acts as symbol 

jsUser.email = "anuj@youmail.com" ; 
// Object.freeze(jsUser);     // Object.freeze() dont allow us to change the objects 
jsUser.email = "anuj@chatmail.com" ; 
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user ");
}

jsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`)
}


console.log(jsUser.greeting())  //if we do (jsUser.greeting())    ==>  it show : hello js user 
                               // but if we do (jsUser.greeting)   ==>  it show  : function (anonymous)
console.log(jsUser.greeting2())



