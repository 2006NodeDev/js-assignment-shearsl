/* 8. Shapes: Laura's Homework (I hope it is okay that I added in a blank between each character.  This causes
  a square to look closer to an actual square since most fonts are ~twice as high as they are wide.)
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.*/
function printShape(shape, height, character) {
  let shapeStr = "";
  //Makes upper/lower case irrevelent by converting everything to lower case.
  shape = shape.toLowerCase();
  // Allows user to enter just the first letter of their desired shape
  if (shape === 's')
    shape = "square";
  else if (shape === 't')
    shape = "triangle";
  else if (shape === 'd')
    shape = "diamond"

  switch (shape)
  {
    case "square":
      shapeStr = drawSquare(height, character);
      break;
    case "triangle":
      shapeStr = drawTriangle(height, character);
      break;
    case "diamond":
      shapeStr = drawDiamond(height, character);
      break;
    default: 
      shapeStr +=  "You entered an invalid shape, please retry the program with a Square, Triangle, or a Diamond."
  } 
  return shapeStr; 
}

/*Example for printShape("Square", 3, "%");
% % %
% % %
% % %
*/
function drawSquare(hght, ch){
  let returnStr = "";
  for(let rows=0; rows<hght; rows++)
  {
    for(let columns=0; columns<hght; columns++){
      returnStr += ch + ' ';
    }
    returnStr += '\n';
  }
  return returnStr;
}


/*Example for printShape("Triangle", 3, "$");
$
$ $
$ $ $
*/
function drawTriangle(hght, ch){
  let returnStr = "";
  for(let rows=0; rows<hght; rows++)
  {
    for(let columns=0; columns<rows+1; columns++){
      returnStr += ch + ' ';
    }
    returnStr += '\n';
  }
  return returnStr;
}

/*Example for printShape("Diamond", 5, "*");
    *
  * * *
* * * * *
  * * *
    * 
*/
//Called by the drawDiamond function to build the zeroth through middle row.
function createRowStr(height, numberOfChar, character)
{
    let numOfBlanksBeforeCh = (height-numberOfChar)/2;
    let blankStr = "";
    let charStr = "";
    for(let colPos = 0; colPos<numOfBlanksBeforeCh; colPos++)
    {
      blankStr += "  ";
    }
    for(let i=0; i<numberOfChar; i++)
    {
      charStr += character + " ";
    }
    return blankStr + charStr + blankStr;
}
function drawDiamond(hght, ch){
  let rowStringArray = [];
  let returnStr = "";

  //build the zeroth through the middle row
  for(let row=0; row<hght/2; row++) 
  {
    let numCh = 1+2*row;  //number of characters in a row
    //call the createRowStr function to create the row string and place it in an array.
    rowStringArray[row] = createRowStr(hght, numCh, ch);
  }

  //copy the bottom rows from the corresponding top rows stored in the array since they are identical
  for(let row=Math.ceil(hght/2); row<hght; row++)  
  {
    rowStringArray[row] = rowStringArray[hght - row - 1];
  }

  //
  for(let row=0; row<hght; row++)
  {
    returnStr += rowStringArray[row] + '\n';
  }
  return returnStr;
}

console.log(printShape('s', 5, '+'));
console.log(printShape('triangle', 9, '-'));
console.log(printShape('D', 13, '#'));