// const tinderUser = new Object()  // if we console log this this gives { } empty object in output
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "anuj"
tinderUser.isLoggedIn = false

console.log(tinderUser);
// ----------------------------------------------
const regularUser = {
    email : 'reg@gmail.com' ,
    full_name : {
        username : {
            firstName : "anuj",
            lastName : "singh"
        }
    }
}
// nested object 
console.log(regularUser.full_name.username.lastName);

const obj1 = {1 : 'a' , 2 : 'b'};
const obj2 = {3 : 'a' , 4 : 'b'};
const obj3 = {5 : 'a' , 6 : 'b'};

// const obj4 = {obj1 , obj2 , obj3}; 
// const obj4 = Object.assign({} , obj1 , obj2 , obj3)  // object.assign({}, source1 , source2 )      ==> {} are empty and resultant or target obj
// all the elements are from source are stored in {} so we have to target with {} in object.assign operation 

//____________________________
// best option is ...obj1 , ...obj2 , ...obj3   spread operator  ==> it represnets as we throw glass on floor it spread so these ... and
// spread of glass help us to memorize 

const obj4 = {...obj1 , ...obj2 , ...obj3};
console.log(obj4);


const user = [
    {
        id : 1,
        mail: "g@mail.com"
    },
    {
        id : 1,
        mail: "g@mail.com"
    },{
        id : 1,
        mail: "g@mail.com"
    },{
        id : 1,
        mail: "g@mail.com"
    },{
        id : 1,
        mail: "g@mail.com"
    },
]

const meil = user[1].mail;
console.log(meil);

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // it only prints an array of [keys , keys , keys]
console.log(Object.values(tinderUser));  // it only prints an array of [ value , value , value ] 
console.log(Object.entries(tinderUser));  // it print a separate sets of array [ one key , its value ] , [one key , its value ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //object_name.hasOwnProperty() function help to chek that this property is in the object exist or not
console.log(tinderUser.hasOwnProperty("isLogged"));      // in () of this function we write that name of property that we want to check 
