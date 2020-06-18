/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let strLength = someStr.length;
    let messageStr = "";
    let maxEndIndex = strLength;
    let subStr = "";
    let validData = true;

    //Checks to see if a value was given for the start and end indicies.  If no value
    //is given then default values are assigned so that the substring is the whole string.
    startIndex = startIndex || 0;
    if (strLength > 0){
        endIndex = endIndex || maxEndIndex;
    }else {
        endIndex = endIndex || 0;
    }
 
    //This if statement gets ignored if the user enters something other than a number.
    if (startIndex < 0){
         messageStr += "Error: Your start index of '" + someStr + "'should be >= 0\n";
         validData = false;
    }

    //If the user enters anything but an integer: string, float, character, they get an error message.
    if (Math.floor(startIndex) !== startIndex){
        messageStr += "Error: Your start index of '"+ someStr + "' should be an integer.\n";
        validData = false;
   } 
    if (Math.floor(endIndex) != endIndex){
        messageStr += "Error: Your end index of '" + someStr + "' should be an integer. \n";
        validData = false;
    }

    //If the user enters a string, this sends an error message if the endIndex is too big.
    if ((someStr !== "") && (endIndex > maxEndIndex)){
        messageStr += "Error: Your end index of '" + someStr + "' should be <= " + maxEndIndex + " and >= your starting index.\n";
        validData = false;
    }
 
    //If the user enteres a start index that is bigger than the end index, this gives an error message.
    if (startIndex > endIndex){
        messageStr += "Error: Your end index of '" + someStr + "' should be >= your start index.\n";
        validData = false;
    }
   
    //Report substring if the data is valid.
    if (validData)
    {
        messageStr += "The substring from position " + startIndex + " to position " + endIndex + " of '" + someStr 
        + "' is '" + someStr.slice(startIndex, endIndex) + "'.\n";
    }

    return messageStr;
}

console.log(substring("hi"));
console.log(substring("",0)); 
console.log(substring("Math controls graphics."))
console.log(substring("Howdy, Mate", 3, 8.2));
console.log(substring("supercalifragilisticexpialidocious", 4.85, 14));
console.log(substring("supercalifragilisticexpialidocious", 5, 18));
console.log(substring("Coding Rules!", 'a', 'b'));
