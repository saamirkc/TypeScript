

interface User2 {
    email:string,
    userId:number,
    googleId?:string       //?: denotes  it is not compulsary . google ID is not compulsory.
    //    method declaration first method
// startTrail:()=>string 
// second method
startTrail():string

getCoupon(name:string):number

}
const samirr:User2={email:"sam@gmail.com",userId:7,googleId:"sami@google.com",
    startTrail:()=>{
    return "trial started"
},
getCoupon:(name:"sam")=>{
    return 7;
}
}

// googleId is not compulsory
// const samirr:User2={email:"sam@gmail.com",userId:7} 







export{}



