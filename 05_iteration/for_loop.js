for (let i = 0; i < 10; i++) {
    const element = i ;
    if (element == 6) {
        // console.log('6 is best number')
    }
    // console.log("go",i)
}
// console.log(i);  // not printed because of out of scope

for (let i = 1 ; i <= 10; i++) {
//  console.log(`outer loop value : ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and outer loop is ${i})
    //  console.log(i + '*' +  j + '=' + i*j);
        
    }
    
}

let myArray = ['ironman' , 'batman' , 'superman' , 'thor']
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)   
}


//-----------------break and continue-----------------
// break 
for (let lol = 0; lol <= 5; lol++) {
    if (lol == 5) {
        console.log('detected ' , lol)
        break
    }
    console.log(`the value of lol is : ${lol}`);
    
}
//continue
for (let lol = 0; lol <= 10; lol++) {
    if (lol == 5) {
        console.log('detected ' , lol)
        continue
    }
    console.log(`the value of lol is : ${lol}`);
    
} 