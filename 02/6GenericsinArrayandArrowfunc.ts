//generics in array
function getSearchProducts<T>(products:T[]):T{
    // do database operation
    const myIndex=3
    return products[myIndex];
}


// generics in arrow function . both are same generics in array and generics in aroow func

const getMoreSearchProducts=<T>(products:T[]):T =>{
// do database operation
    const myIndex=3
    return products[myIndex];
}

