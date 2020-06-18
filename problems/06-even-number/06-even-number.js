/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let even = false;
    if (Math.floor(someNum/2) === Math.ceil(someNum/2))
        even = true;
    if (even) return someNum + " is even.";
    else return someNum + " is not even.";
}


console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(-71));
console.log(isEven(-28));
console.log(isEven(0));
console.log(isEven(56.2));