// --------------- REVERSING AN ARRAY --------------- //
function reverseArray (arr){
    let resultArray= [];
    arr.forEach(element => {
        resultArray.unshift(element)
    });
    return resultArray 
}

function reverseArrayInPlace (arr){
    let array= [...arr]
    arr.splice(0,arr.length)
    array.map((element)=>{
        return arr.unshift(element)
    })
    return arr
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))
console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10]))

