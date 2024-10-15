
// if u are unsure of which ddatatype to use , u can use any but for more stricter form we can use union to represent two or more datatype

let score : number | string  =1
score=77
score="77"
// here we can use score as number as in 4 and 5 and also as string as in line number 6
// this is the use case of union


type user={
    name:string;
    id:number
}

type admin={
    username:string;
    id:number   
}


let samir : user|admin={name:"samir",id:777}

samir={username:"skc",id:777}


function getDBid(id:number | string){

    console.log(`DB id is ${id}`);

}

getDBid(3)
getDBid("3")
// both line 34 and 35 works perfectly fine .


//union in  array\

const data1: number[]=[1,2,3]

const data2: string[]=["1","2","3"]

const data3:(number|string)[]=[1,2,3,"4"]

// here line 44 denotes use of union in array

export{}