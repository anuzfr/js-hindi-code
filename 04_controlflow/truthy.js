// the value that is used to for comparision like true false like 0,1 also act as false true 
// there are several value which are true in nature are called truthy values
// falsy value are just opposite of truthy values

const usermail = []

if (usermail) {
    console.log('got user email')
}
else {
    console.log('dont have user email')
}

//falsy value are 
// false , 0 , -0 , bigint 0n , "" , null , undefined , Nan 
// truthy values are 
//true , 1 , "not empty string " , [ ] , [ 3,4,5] , " " , '0' , "false" , {} , function (){}

if (usermail.length === 0){
    console.log('array is empty')
} // empty or not empty array both gives tru so in array or if else use (funcname.length === 0) for array empty or not 

const empty_obj = {}

if (Object.keys(empty_obj).length === 0 ) {
    console.log('object is empty')
}
