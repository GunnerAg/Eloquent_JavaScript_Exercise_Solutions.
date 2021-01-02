//----------Exercise One---------------//
console.log("EXERCISE 1")
function min(a,b){
    if(a>b){
        return consol.log(b)
    }
    else if (b>a){
        return console.log(a)
    }
    else 
    return console.log("Both numbers are equal")
};

//----------Exercise Two---------------//
console.log("EXERCISE 2")

function isEven (a){
       
    if(a<0 || isInt(a)===false){
        console.log("number is not integer and positive")
    }
    else if(a===0){
        console.log("Is even")
    }
    else if (a===1){
        console.log('Is not even')
    }
    else{
        isEven(a-2)
    }

function isInt(a){
  return (a%1===0)};
};


//----------Exercise Three---------------//
let countBs =(a)=>{
    countChar(a,b="B")
};

//------------//
let countChar=(a,b)=>{
    let result =0;
        for(let i=0;i<a.length;i++){
            a.charAt(i) === b && result ++
        }
    return console.log(`Count has returned to be: ${result}`)
};
countBs("Baby is this working? ByeBye");
countChar("Let's check if thes one works also, LOL!, Let's go", "L")





