// reduce function
// acc = accumulator 
const mynums = [1,2,3]
const mytotal = mynums.reduce(function(acc , cur_val ){
    console.log(`acc : ${acc} and cur_val : ${cur_val}`);
    return acc + cur_val
});0

// const mytotal = mynums.reduce( (acc , curr) => acc=curr)   //other short method 

// console.log(mytotal)


const shoppingCart = [
    {
        item : 'js' ,
        price : 500
    },
    {
        item : 'py',
        price : 600
    },
    {
        item : 'java',
        price : 800
    },

]
const priceTOpay = shoppingCart.reduce((acc,item) => acc+item.price , 0 )
console.log(priceTOpay)
