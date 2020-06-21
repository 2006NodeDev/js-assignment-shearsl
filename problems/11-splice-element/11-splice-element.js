/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
class Point{
    xCoord;
    yCoord;
    constructor(xCoord, yCoord){
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }
    toString(){
        return `(${Math.round(1000*this.xCoord)/1000}, ${Math.round(1000*this.yCoord)/1000})`;
    }
}

//numerical constants
const SQRT3OVER2 = 0.5*Math.sqrt(3);
const SQRT2OVER2 = 0.5*Math.sqrt(2);
const LONGSIDEPIOV12 = Math.cos(Math.PI/12);
const SHORTSIDEPIOV12 = Math.sin(Math.PI/12);

// Points at multiples of pi/12 on the unit circle
const pointA = new Point(1, 0);
const pointB = new Point(LONGSIDEPIOV12, SHORTSIDEPIOV12);
const pointC = new Point(SQRT3OVER2, 0.5);
const pointD = new Point(SQRT2OVER2, SQRT2OVER2);
const pointE = new Point(0.5, SQRT3OVER2);
const pointF = new Point(SHORTSIDEPIOV12, LONGSIDEPIOV12);
const pointG = new Point(0, 1);
const pointH = new Point(-SHORTSIDEPIOV12, LONGSIDEPIOV12);
const pointI = new Point(-0.5, SQRT3OVER2);
const pointJ = new Point(-SQRT2OVER2, SQRT2OVER2);
const pointK = new Point(-SQRT3OVER2, 0.5);
const pointL = new Point(-LONGSIDEPIOV12, SHORTSIDEPIOV12);
const pointM = new Point(-1, 0);
const pointN = new Point(-LONGSIDEPIOV12, -SHORTSIDEPIOV12);
const pointO = new Point(-SQRT3OVER2, -0.5);
const pointP = new Point(-SQRT2OVER2, -SQRT2OVER2);
const pointQ = new Point(-0.5, -SQRT3OVER2);
const pointR = new Point(-SHORTSIDEPIOV12, -LONGSIDEPIOV12);
const pointS = new Point(0, -1);
const pointT = new Point(SHORTSIDEPIOV12, -LONGSIDEPIOV12);
const pointU = new Point(0.5, -SQRT3OVER2);
const pointV = new Point(SQRT2OVER2, -SQRT2OVER2);
const pointW = new Point(SQRT3OVER2, -0.5);
const pointX = new Point(LONGSIDEPIOV12, -SHORTSIDEPIOV12);


//arrays of point on the unit circle as described by the array name
const axisPoints = [pointA, pointG, pointM, pointS];
const firstQuadPoints = [pointB, pointC, pointD, pointE, pointF];
const secondQuadPoints = [pointH, pointI, pointJ, pointK, pointL];
const thirdQuadPoints = [pointN, pointO, pointP, pointQ, pointR];
const fourthQuadPoints = [pointT, pointU, pointV, pointW, pointX];
let unitCircleCommonPoints = [...axisPoints];  //shallow copy

//variable to keep track of array insertion position
let insertIndex = 1;

//Prints all of coordinates of the passed in array of points
function printCoordinates(pointsArray, pointsArrayNameAndComments){
    console.log(pointsArrayNameAndComments)
    for(let pnt of pointsArray){  //had to splice in one element at a time to avoid getting a multidimensional array
        console.log("   " + pnt.toString());
    }
}

function printValuesAllArrays(){
    printCoordinates(axisPoints, ' axisPoints //stays the same');
    printCoordinates(firstQuadPoints, ' firstQuadPoints //stays the same');
    printCoordinates(secondQuadPoints, ' secondQuadPoints //stays the same');
    printCoordinates(thirdQuadPoints, ' thirdQuadPoints //stays the same');
    printCoordinates(fourthQuadPoints, ' fourthQuadPoints //stays the same');
    printCoordinates(unitCircleCommonPoints, ' unitCircleCommonPoints //changes after splicing the above arrays into it');
}

function spliceElement(someArr, index) {
    for (let i=0; i<someArr.length; i++){
        unitCircleCommonPoints.splice(index, 0, someArr[i]);
        index++;
    }
}

console.log("Values Before Splicing");
printValuesAllArrays();

//Inserts each quadrants points in the appropriate position on the unit 
//circle by starting at the positive x-axis and moving counterclockwise.
spliceElement(firstQuadPoints, insertIndex);
insertIndex += 1 + firstQuadPoints.length;     //the +1 is for the one elment already in the array  
spliceElement(secondQuadPoints, insertIndex);  // that we want to keep between the newly added elements.
insertIndex += 1 + secondQuadPoints.length;
spliceElement(thirdQuadPoints, insertIndex);
insertIndex += 1 + thirdQuadPoints.length;
spliceElement(fourthQuadPoints, insertIndex);

console.log("\nValues After Splicing");
printValuesAllArrays(); 
