const the_number = [1,2,3,4,5,6,7,8,9,10]

//const oyenum = the_number.map( (num) => {return num + 10})
const oyenum = the_number.map( (num) => num*10)
                         .map((num) => num+1)
                         .filter((num => num>=40))   // this is chaining 
console.log(oyenum)