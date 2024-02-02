// for each loop 
// -----------------FOR EACH LOOP -----------
//for array

const coding = ['py' , 'js' , 'ruby' , 'java' ]

coding.forEach( function(val){      // in for each we give it a function , call back function means the function which has no name 
    //and in ( ) pass the iterator like i, j , index and { } contains command 
    console.log(`${val} is a coding lang.`)
})

// for each looop on arrow object () => {} also without name

coding.forEach( (lang) => {
    console.log(lang)
})

//---------------loop outside the function-----------------
// first declare function then apply for each 

function printMe(item){
    console.log(item)
};
coding.forEach(printMe)

//-----------------print whole array with index

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
    

const myLang = [
    {
        langname : 'python',
        langfile: "py"
    },
    {
        langname : 'c++',
        langfile: "cpp"
    },
    {
        langname : 'javascript',
        langfile: "js"
    },
] 
myLang.forEach( (item) => {
    console.log(item.langfile)
})