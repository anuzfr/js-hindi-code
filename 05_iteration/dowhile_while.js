// while loops 
let index = 1
while (index <= 10) {
    console.log(`valur is ${index} `)
    index += 2
}

let myArr = ['ironman' , 'thor' , 'batman']

let arr = 0
while (arr < myArr.length) {
    console.log(`hero is ${myArr[arr]}`)
    arr += 1
}

//do while loops
// its do first and then check condition 
// if we initialize score with 11 which is greater than 10 , even then do while print at least one result of score is 11 ,coz it do first then check condition
 
let score = 1 
do {
    console.log(`score is ${score}`)
    score += 1
    //score ++
} while (score <= 10);