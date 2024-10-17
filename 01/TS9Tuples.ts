// tuples is more stricter form of union
 
let user :[string, number , boolean]=["sam",7,true]
//  let user1 :[string, number , boolean]=[true,7,"sam"] cant be done as at first there is string so string has to be used which is not there in union
// in union you aren’t restricted to a specific order or number of elements like you are with tuples.


type User1 =[number ,string]

const newUser:User1 =[5,"Sam"]