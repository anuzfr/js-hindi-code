const acc_id = 1001
let acc_email = "anuj@anuj.com"
var acc_pass = "1234"
acc_city = "delhi"
let acc_state;

// acc_id = 2000 // no change in constant 

acc_email = "anuj@a.com"
acc_pass = "4321"
acc_city = "j&k"

console.log(acc_id);
console.table([acc_id , acc_email , acc_pass , acc_city , acc_state])


/* 

prefer to use let not var 
because of the issue in block and functional scope 

*/