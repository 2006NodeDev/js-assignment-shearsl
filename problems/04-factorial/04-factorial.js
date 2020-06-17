/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

//Trying out the memo technique that Alec tuaght us for his version of Fibonacci
//just so I can practice using the technique regardless of whether it is more 
//efficient or not.
let memo = {
  0:1,
  1:1,
  2:2
}

let fact = (n) => {
  if(memo[n]){
    return memo[n];
  }
  else{
    memo[n] = fact(n-1)*n;
    return memo[n];
  }

}  

//The code below works and is my first instinct on how to write this.
function factorial(sumNum) {
  let sumNumFactorial = 1;
  for (let i=sumNum; i>0; i--)
  {
    sumNumFactorial *= i;
  }
  return sumNumFactorial;
}

console.log("Traditional Technique:");
console.log("  0! = " + factorial(50));
console.log("  3! = " + factorial(3));
console.log("  6! = " + factorial(6));
console.log("  10! = " + factorial(10));
console.log("  20! = " + factorial(20));
console.log("  30! = " + factorial(30));
console.log("  50! = " + factorial(50));
console.log("Memo Techique:");
console.log("  0! = " + fact(0));
console.log("  3! = " + fact(3));
console.log("  6! = " + fact(6));
console.log("  10! = " + fact(10));
console.log("  20! = " + fact(20));
console.log("  30! = " + fact(30));
console.log("  50! = " + fact(50));