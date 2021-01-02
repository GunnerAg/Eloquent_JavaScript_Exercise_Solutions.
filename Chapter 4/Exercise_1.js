// --------------- SUM OF A RANGE --------------- //
// We do function delcarations, this way we could access the function anywhere in the code not only after this lines, take the console.log below as a prove.

console.log('declaration vs expression prove of concept', range(1,12))

function range (start, end, step=1){
    let arr = [];
    for (i=start;step>0? i<=end : i>=end;i=i+step) {
        arr.push(i)
    }
    return arr
};

function sum (a){
    const result=a.reduce((a,b)=>a+b)
    return result
};

// --------------- CHECKING EXAMPLES OF THE BOOK, RESULTS ARE ACCURATE --------------- //
console.log(range(1,10))
console.log(range(1,10,2))
console.log(range(5,2,-1))