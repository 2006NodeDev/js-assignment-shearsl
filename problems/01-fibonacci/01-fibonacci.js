/* 1. Fibonacci Revature Training Homework by Laura Shears 
Created June 14, 2020
Last update: June 14, 2020.
*/

let n=103;  //largest integer that I can plug in without getting an answer that uses scientific notation
let verb, trm;
let fibStr = "";

//Selects the correct verb and term or terms depending on whether we have a plural or singular value of n.
if (n===1){
    verb = 'is';
    trm = 'term';
}    
else{
    verb = 'are';
    trm = 'terms';
} 

//Define function: fib(n) to return the nth number in the fibonacci sequence. 
function fib(n) {
    let term = 1;
    let priorTerm = 0;
    let nextTerm = 1;
    if (n === 0 || n === 1)
        return n;
    else {
        for(let i = 1; i < n; i++) {
            nextTerm = term + priorTerm;
            priorTerm = term;
            term = nextTerm;
        }
        return term;
    }
}

//Calculate the first n terms of the sequence and save them to a string.
for (let i=0; i<n; i++)
    fibStr += fib(i) + "  ";

//Write the results to the console log.
console.log("The first " + n + " " + trm + " of the Fibonacci Sequence " + verb + ": ");
console.log(fibStr);