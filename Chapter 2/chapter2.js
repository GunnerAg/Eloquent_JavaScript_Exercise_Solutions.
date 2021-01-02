//----------Exercise One---------------//
console.log("EXERCISE 1")
let outcome=""
for(let i=0 ;i<7; i++){
    outcome=outcome.concat("#")
    console.log(outcome) 
    }


//----------Exercise Two---------------//
console.log("EXERCISE 2")
let i=0;
while(i<100){
    ((i+1)%3==0 && (i+1)%5==0)? (console.log("FizzBuzz")):((i+1)%3==0 ? console.log("Fizz"): ((i+1)%5==0 ? console.log("Buzz") : console.log(i+1)));
    i++
}


//----------Exercise Three---------------//
console.log("EXERCISE 3")
let white = " ";
let black = "#";
let board = "";
let newline = "\n";
let x=0;
let size=8;
let grid=(size*size)+size
while(x<grid){
    (x%(size+1)===0)? (board = board.concat(newline)) : (((x)%2===0)?(board = board.concat(white)):(board = board.concat(black)))
    x++
} 
console.log(board)
