class User{
    email:string
    name : string

}

const samir =new User()
samir.email="sam@gmail.com"
samir.name="samirkarki"

// using constructor 
class User2{
    email:string
    name : string
constructor(email:string,name:string){
    this.email=email;
    this.name =name
}
}

const samir2 =new User2("sam2@gmail.com","sam")

export{}