/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  let strLength = someStr.length;
  let someStrUpper = someStr.toUpperCase();  //convert all letters to uppercase 
  let someStrStrippedUpper = ""; // will equal someStr, except with only uppercase letters and digits
  let stripArray = []; //will hold the position numbers of characters to be stripped from someStrUpper

  //gets the positions of all punctuation and empty spaces
  for (let pos = 0; pos < strLength; pos++){
    let asciiCodeInt = someStrUpper.charCodeAt(pos); //holds the ascii code of the character in the current position
    //        keeps the digits 0 - 9                keeps the '='             keeps letters 'A - Z'
    if (!((asciiCodeInt>=48 && asciiCodeInt<=57) || asciiCodeInt===61 || (asciiCodeInt>=65 && asciiCodeInt<=90))){
        stripArray.push(pos); 
    } 
  }
  stripArray.push(strLength);

  //creates a new string without the punctuation and empty spaces
  let lastPos = 0;
  for (let i=0; i<stripArray.length; i++){
    someStrStrippedUpper += someStrUpper.slice(lastPos, stripArray[i]);
    lastPos = stripArray[i]+1;
  }

  //redefine string length now that we have stripped some characters
  strLength = someStrStrippedUpper.length;
  //check for palindrome
  for (let pos = 0; pos < strLength/2; pos++){
      if (!(someStrStrippedUpper[pos] === someStrStrippedUpper[strLength - pos - 1]))
        return false;
  }
  return true;
}

function palindromeMsg(smStr){
    if (isPalindrome(smStr))
        return("'" + smStr + "' is a palindrome\n");
    else
        return("'" + smStr + "' is not a palindrome.\n");
}

console.log(palindromeMsg("stressed = desserts"));
console.log(palindromeMsg(""))
console.log(palindromeMsg("This sentence is not a palindrone."));
console.log(palindromeMsg("Norma is as selfless as I am, Ron.")); //found at: https://www.thoughtco.com/what-is-a-palindrome-1691560