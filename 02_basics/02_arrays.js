const marvel_heros = ['ironman' , 'thor' , 'captain_america' , 'hulk'];
const dc_heros = ['superman' , 'batman' , 'flash'];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[4][2]);

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

//----------------------------------------

// push() : push function makes the whole other array an elemnent 
//          for example we push dc_heros in marvel_heros so pushed array(dc_heros) is now an element of the marvel_heros 

// concat() : concat function make both array an one array by merging them in a variable like (allHeros) not making other array as element
//           but both merged in a new array 

//----------------------------------------

const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

// by this [...arr1 , ...arr2 , ...arr3 , ...arrN ];   method we concat two or more than two array in merged way in a variable

const num_array = [1 , 2 , 3 , [ 4 , 5 , 6 ] , 7 , 8 , [ 9 , 10 ,[ 11 ]]];    //3-d array 
const real_num_array = num_array.flat(Infinity);     
console.log(real_num_array);

// by this : flat() method its make many dimensional array to an one array ,the value we defined in parameter it flats is that depth 
//          if we have 5-d array but we define the flat(3) with parameter with value 3 it flats to 3rd dimension and left remain as original
//          so we define infinity ,so it automatically flat the array till the last dimesion .

console.log(Array.isArray('anuj'));  //tells it is array or not in true or false
console.log(Array.from('anuj'));    // makes array fron the given string or if we define number in from func. it returns us a empty array
console.log(Array.from({ name : "anuj"}));  // gives an empty array coz it does not makes array from the object 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3 ));







