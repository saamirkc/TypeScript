



interface User2 {
    email:string,
    userId:number,
    googleId?:string       
startTrail():string

getCoupon(name:string):number

}

// inheritance
interface admin extends User2{
    role: "admin"|"ta"|"learner"
}
const samirr:admin={email:"sam@gmail.com",userId:7,googleId:"sami@google.com",role:"admin",
    startTrail:()=>{
    return "trial started"
},
getCoupon:(name:"sam")=>{
    return 7;
}
}


export{}



