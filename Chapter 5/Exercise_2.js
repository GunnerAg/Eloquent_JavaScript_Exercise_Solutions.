
// --------------- YOUR OWN LOOP --------------- //
let a=n=> 120<n<25&&n%40 ;
let b=n=> {return current++};
let c=n=>console.log(`the number ${n} did not pass the test`);

function loop(start,test,update,body){
    current=start;
    while(test(current)){
        body(current)
        update(current)
    }
    console.log(`the number ${current} is bigger than 25, less than 120, bigger than start value and divisible by 40`)
}

loop(2,a,b,c)
loop(41,a,b,c)
loop(81,a,b,c)