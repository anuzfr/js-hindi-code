
//memory storage 
// stack (primitive)  // heap(non-primitive)

//       stack example
let myYtName = "anujdotcom" ;
let anotherName = "anuj";
anotherName = "anujfr";
console.log(myYtName);
console.log(anotherName);

//       heap example

let userOne = {
    email : "anuj@gmail"
    upi : "user@upi"
};

let usertwo = userOne;

usertwo.email = "anuj@hotmail";

console.log(userOne.email);
console.log(usertwo.email);

// in heap both variable have diff email and cant changed because they refer to same source called that heap 
//in stack storage is one on one and they changed because they are on call by value methods