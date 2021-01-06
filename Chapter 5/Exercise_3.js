//--------------- EVERYTHING --------------- //
//loop version
function everyLoop(arr,restriction){
    let test=true;
    for(value of arr){
        restriction(value)? test=true:test=false
        if(test===true){
            continue;
        }
        else break;
    }
    return console.log(test)
}

everyLoop([1,2,3,4,5,6,7,8],n=>n<7)
everyLoop([1,2,3,4,5,6,7,8],n=>n<10)

//some method version
function everySome(arr,restriction){
    return !arr.some(value => !restriction(value))
}
everySome([1,2,3,4,5,6,7,8],n=>n<7)
everySome([1,2,3,4,5,6,7,8],n=>n<10)
