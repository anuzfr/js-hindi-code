class User {
    constructer(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){                            // allow to not use this function which has static keyword
        return `123`
    }
}

const anuj = new User('anuj')
// console.log(anuj.createId())

class Teacher extends User {
    constructor (username,email){
        super (username)
        this.email = email
    }
}
const iphone = new Teacher ('samsung' , 's@amsung')
iphone.logMe()