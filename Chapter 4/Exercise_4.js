// --------------- DEEP COMPARISON --------------- //

function deepEqual(a,b){
    let answer;
    if(a!==null && typeof a === 'object'||b!==null && typeof b === 'object'){
        let keysArrayOne = Object.keys(a);
        let keysArrayTwo = Object.keys(b);
        let valuesArrayOne = Object.values(a);
        let valuesArrayTwo = Object.values(b);
        for(let i=0;i<keysArrayOne.length; i++ ){ 
            keysArrayOne[i]===keysArrayTwo[i]? answer=deepEqual(valuesArrayOne[i],valuesArrayTwo[i]): answer=false
            if(answer===false){break}
            else{continue}
        }
        
    }
    else{
       return a === b? answer=true:answer=false
    }
    return answer
}


let obj1 = {here: {is: "an"}, object: 2};
let obj2 = {here: 1, object: 2}

console.log(deepEqual(obj1,obj1));
console.log(deepEqual(obj1,obj2));
console.log(deepEqual( obj1,{here: {is: "an"}, object: 2}))