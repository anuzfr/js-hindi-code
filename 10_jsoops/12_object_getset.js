const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email); // here email return the value of _email, email is name of getter , setter but _email is object  
                        //whatever we name the object _email,eemail  but it get get and set value from email 
                        //which is in get and set function 

// defining getter (get) and setter (set) through object