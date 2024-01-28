const course = { 
    coursename : 'js in hindi' , 
    price : '999' , 
    courseInstructor : 'hitesh'
}
console.log(course.courseInstructor);

const {courseInstructor : instructor } = course;   // in this line in { } there is object de structuring 
console.log(courseInstructor); 
console.log(instructor); // both return same output


// api is just some values that returned from backend and now its written in the form of json (java script object notation)
 
{
    "cousrename" : "js hindi" ,
    "name" : "anuj" ,                            // == > this is json (a form of writing objects)
    "price" : "free" 
}
// this is json : it is also an object in java script but its notation is different it is without name just with curly braces
// in json key and values both are written in the form of strings 

// some times api returns value in the form of array which contain objects 
//like   
[
    { },
    { },
    { },
]