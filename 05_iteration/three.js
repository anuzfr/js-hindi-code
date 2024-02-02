//array specific loops
// for of loop
// for in loop
// for each loop 

// -------------------------FOR OF LOOP---------
// array = [{},{},{}]
//array = [ "" , "" , "" ]
//-----------for of (on array )
const arr = [ 1,2,3,4,5,6]
for (const i of arr) {
    //console.log(`the value is ${i}`)
}
//         (on string)
const greeting = 'hello world';

for (const greet of greeting) {
    if (greet === ' ') {
        continue
    }
    //console.log(`each char is ${greet}`)
    
}

//          MAP
// it is like objects with key and values , only values and only keys ,like a way of storing data
const map = new Map()
map.set("in" , "india")
map.set("usa" , "america")
map.set("fr" , "france" )
map.set("in" , "india") // this will not print because it only print one of the duplicate items

console.log(map);

for (const [key , value] of map) {
    //console.log(key);   // it print like an array 
    console.log(key, ":-" , value)       // it print in key and value
}



const myObject = {
    "game1" : "NFS" , 
    "game2" : "gta"
}
for (const [keys ,value] of myObject) {
    // console.log(keys , "=>" ,value);        
    
}

// maps are obejects accessed by for of loop 
// but not objects