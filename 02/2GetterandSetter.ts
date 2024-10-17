

class User{
    // // email:string;
    // name:string;
    private _count:number=1;

    constructor(public email:string,public name:string){
       
    }


public get getemailId() : string {
    return `apple${this.email}`
}


public get Coursecount() : number{
    return this._count;
}

set Coursecount(courseNum){
    if(courseNum <=1 ){
        throw new Error("COurse count should be more than 1");
    }
    this._count=courseNum;
}
// it is not necesaary to use getters and setters only with private property . it can also be used with public property by adding additional logic to it. 
// BUt in most use case ,getters and setters are designed so that any private method can be exposed outside but with some additional logic
// in setter there is no return type i.e we cant write 
// set Coursecount(courseNum):datatype   



}
const sam=new User("sam@gmail.com","sami")

export{}