class user {
    constructer(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const anuj = new user('anuj')
//console.log(anuj.createId())

const teacher extends user {
    constructer(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher('samsung' , 's@amsung')
iphone.logMe()