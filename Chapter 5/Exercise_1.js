// --------------- FLATTENING --------------- //
// There is no need to make it a function, but I think it was so simple to do that it was worth just make it as well a function that takes the arr of arrays to flatten as argument.
let arrayOfArrays = [['First array!'],['a','b','c','d'],['e','f','g','h'],[1,2,3,4],[5,6,7,8],['Last array!']], arrays = [[1,2,3],[4,5],[6]] 

function flattenArray(arr){ return arr.reduce((a,b)=>{return a.concat(b)})};

console.log(flattenArray(arrayOfArrays));
console.log(flattenArray(arrays))