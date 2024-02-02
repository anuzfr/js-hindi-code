// ----------------------FOR IN LOOP

// objects iterates by for in loop 

const myObject = {
    game1 : 'nfs' ,
    game2 : 'gta' , 
    game3 : 'pop' ,
}
for (const key in myObject) {
    console.log(`${key} is number of ${myObject[key]}`);     // console.log(key)  => key   ;   console.log(objectname[key])  =>   key value
}

// maps by for in loop   
const map = new Map()
map.set("in" , "india")
map.set("usa" , "america")
map.set("fr" , "france" )
map.set("in" , "india")

for (const key in map) {
    console.log(key)
}
// nothing will happen no error no op 
//maps are not iterateable
// obejects accessed by for in loop 
// but not maps