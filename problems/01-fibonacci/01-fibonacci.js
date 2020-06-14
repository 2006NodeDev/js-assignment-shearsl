/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
let n=25;
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
console.log("The first " + n + " " + trm + " of the Fibonacci Sequence " + verb + ": ");
for (let i=0; i<n; i++)
    fibStr += fib(i) + "  ";
console.log(fibStr);