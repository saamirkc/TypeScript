// add two 

// solution:



// function addTwo(num){
//     return num+2
// }

// addTwo(5)

// here only thos make num type as any so we can take num as string  by calling addTwo("5") doesnt throw any error .
// in order to avoid this we have to declare num datatype so that num represents only number datatype

function addTwo(num:number){
    return num+2
}
addTwo(5)

// function for get uppercase

function getUpperCase(val:string){
    return val.toUpperCase
}
getUpperCase("samir")

// function for signup

function signup(name:string ,password :string ,isPaid:boolean){

}
signup("sam","abc",false)

export{}