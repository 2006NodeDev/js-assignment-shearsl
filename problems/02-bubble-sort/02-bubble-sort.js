/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let temp = 0;
  for (let i=0; i<numArray.length; i++){
      for (let j=i+1; j<numArray.length; j++){
          if (numArray[i] > numArray[j]){
              temp = numArray[i];
              numArray[i]=numArray[j];
              numArray[j] = temp;
          }
      }
  }
  return numArray;
}

let numArray = [5, 3, 7, 9, 1, 2, 0, 7]
console.log(numArray + " sorted becomes " + bubbleSort(numArray));

numArray = [9, 5, 10, 4, 8, 20, 30, 15, 4]
console.log(numArray + " sorted becomes " + bubbleSort(numArray));

//I tried a few different codes to get user input.  I thought I would input it as a string and then
//do some string manipulation to turn it into an array.  For now, I will just hard code in an array to test the function.

//looked up the user input code at: https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
/*const readline = require("readline");
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter a row of numbers with a space between each number.", function(numArry) {
    //add code to process the string and break it up into an array of numbers
    console.log(numArry);  //this line is for testing purposes only
    r1.close();
});
   
r1.on("close", function() {});*/