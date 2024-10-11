

const User ={
    name : "samir",
    email :"sam07@gmail.com",
    isActive: true

}

    function createUser({name:string,isPaid:boolean}){}

    // This function accepts an object with two properties:
//    name of type string
//    isPaid of type boolean However, the function body is currently empty, so it doesn't perform any action.

    createUser({name:"Samir",isPaid :true})
    // You call the createUser function, passing an object with name as "Samir" and isPaid as true.


    function createCourse():{name:string ,price :number}{
        return {name:"Angular",price :500}
    }
    // This function returns an object with two properties:
// name of type string
// price of type number
// The returned object has the values name: "Angular" and price: 500


function createUser2({name,isPaid}:{name:string,isPaid:boolean}){
    console.log(`User : ${name}`);
    if(isPaid){
        console.log(`${name} is paid user`);

    }
    else{
        console.log(`${name} is free user`);
    }
}
createUser2({name:"samir",isPaid:true})
createUser2({name:"alex",isPaid:false})

// output
// User : samir
// samir is paid user
// User : alex
// alex is free user