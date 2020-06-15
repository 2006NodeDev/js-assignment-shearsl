/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let newStr= "";
    let strLength = someStr.length;
    for (let i=strLength; i>0; i--){
        newStr += someStr.charAt(i-1);
    }
    return newStr; 
}

let smStr = "DESSERTS";
let nwStr = reverseStr(smStr);
console.log(nwStr);
