interface User2 {
    email:string,
    userId:number,
    googleId?:string       //?: denotes  it is not compulsary . google ID is not compulsory.
    

}
const samirr:User2={email:"sam@gmail.com",userId:7,googleId:"sami@google.com"}

// googleId is not compulsory
// const samirr:User2={email:"sam@gmail.com",userId:7} 

export{}



