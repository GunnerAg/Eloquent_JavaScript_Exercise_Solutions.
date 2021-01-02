// --------------- A LIST --------------- //

function arrayToList(arr){
    let list = null;
    for(let i=arr.length;i>0;i--){
        list = {value: arr[i-1], rest: list }
    }
    return list
};

function listToArray(list){
    let array=[];
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array
};

function prepend(element,list){
    list={value:element, rest:list}
    return list
};

function nth(list,num){
    return  listToArray(list)[num]
};

let arr=[10,20];
console.log(arrayToList(arr));
console.log(listToArray(arrayToList(arr)));
console.log(prepend(10,prepend(20,null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

