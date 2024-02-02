//const coding = [1,2,3,4,5,6,7,8,9,10]
//const value = coding.forEach( (item) => {
    //console.log(item)
//    return item
//})
//console.log(value)



const myNums = [1,2,3,4,5,6,7,8,9]
// let hiNums = myNums.filter( (num) => {
//     return num > 4   // implicit return . no curly braces{} no use of return ; in explicit return {} with return ; or if we want to use {} in implicit just pack ({}) like that 
// })                  // if dont use return in explicit it return empty array 
//console.log(hiNums)

// another method for above expression 

const hiNums = []
myNums.forEach((num) => {
    if (num > 5) {
        hiNums.push(num)
    }
})
//console.log(hiNums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbook = books.filter( (bk) => bk.genre === 'history')

userbook = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'history'
})
console.log(userbook);


