function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {               // here define property in which 3 parameter are passed and 
        get: function(){                                 //last parameter is defined as a function which act as get and set 
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
// defining getter (get) and setter (set) through function