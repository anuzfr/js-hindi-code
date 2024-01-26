const Arr = [1,2,3,4,true,"anuj"];
//console.log(Arr); 

const myArr = [0,1,2,3,4,5];
const myHeros = ['shaktiman' , 'ironman' , 'superman' , 'thor' ];
//console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4);


// array methods



//myArr.push(6);
//myArr.push(7);
//myArr.pop(6);    // just remove last item of array

myArr.unshift(9);  // just add the element in the starting of array 
myArr.shift();       // remove the unshift wala element 

console.log(myArr.includes(9));      // give true and false to whether the element is present or not in tha array 
console.log(myArr.indexOf(4));  
console.log(myArr);

const newArr = myArr.join();   // array.join() funtion makes an arrat to the string 
console.log(myArr);
console.log(newArr);


// slice and splice function 
console.log('A' , myArr);
const myNewArr1 = myArr.slice(1,3);
console.log(myNewArr1);

console.log('B' , myArr);
const myNewArr2 = myArr.splice(1,3)  
console.log('C', myArr);
console.log(myNewArr2);

// slice : only print the out that pass in the parameter excluding the end limit and doesnot change the original array 
// splice : it cut the array and print the value that pass in parameter and cut that pass value from array and changed the original
//           array . the original array have the elements which ar enot in the parameter , it also print the end value           