class User{
    constructor(name,email)
        {
            this.name=name;
            this.email=email;
            this.score=0;
        }
     login()
        {
        console.log(this.email+' loggin');
        return this; // for chainning 
        }
     logout()
        {
    console.log(this.email+' loggout');
    return this; // for chainning 
        }
    updateScore(){
    this.score++;
    console.log(this.name +" scored "+this.score);
    return this; // for chainning 
    }
}


var uer1=new User('sherif','sherif@gmail.com');
user1.login().updateScore().updateScore().logout(); // chainning


// if we write class like 
/*class User{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
        this.score=0;
    }
 login()
    {
    console.log(this.email+' loggin');
    }
 logout()
    {
console.log(this.email+' loggout');
    }
updateScore(){
this.score++;
console.log(this.name +" scored "+this.score);
}
}*/

// we cann't make chainning


class Admin extends User{
    deleteScore(user)
    {
         users=users.filter(u=> {u.email != user.email;})
    }
}

    