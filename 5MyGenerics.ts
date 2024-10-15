// array declaration:
const score:Array<number>=[1,2,3]
const names:Array<string>=[]
const score1=[2,2,3]


function identityOne(val:boolean|number):boolean|number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}                  //here this can take any datatype and return any datatype . but the problem occurs if it takes lets say number datatype and return string datatype 
// we dont want this so we use generics .


function identityThree<Type>(val:Type):Type{
    return val;
}
// here the data type of value that is taken initially is kept in<Type> and same datatype which is chhoosen is returned at last


function indentityFour<T>(val:T):T{
    return val;

}

// in generics it isnot necessary to use only <Type> you can use either word (Type or any word you like) or letters(T or anyletter) buut it must be conssistent.
// i.e. if u use <T> in all place u have to use <T>.