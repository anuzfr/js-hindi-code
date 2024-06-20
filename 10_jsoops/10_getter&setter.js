class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()   // at the time of getting the email by an user , changes it to upper case 
    }
    set email(value){
        this._email = value              // set the email in db as same as given , which is lower case as initial 
    }

    get password(){
        return `${this._password}lol`     // user getting email with the lol word 
    }

    set password(value){
        this._password = value           // but set as only as given  = anuj 
    }
}

const anuj = new User("a@anuj.com", "anuj")
console.log(anuj.email);
// defining getter (get) and setter (set) through class