/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function twoDVector(xComp, yComp) {
    this.xComp = xComp;
    this.yComp = yComp;
    this.magnitude = Math.round(1000*Math.sqrt(Math.pow(xComp,2)+Math.pow(yComp,2))/1000);
    this.direction = Math.atan2(yComp, xComp);
    this.degDirection = Math.round(1000*this.direction*180/Math.PI)/1000;
    //I usually only use the 'this' keyword when the paramater of the function has the
    //same name as the field, but in order to make the for-in loop below print everything
    //I needed the this keyword on all of the fields.
}

let vectorA = new twoDVector(4, 0);
let vectorB = new twoDVector(0, 3);
let vectorC = new twoDVector(-5, 0);
let vectorD = new twoDVector(0, -2);
let vectorE = new twoDVector(1, Math.sqrt(3));
let vectorF = new twoDVector(-6, 6);
let vectorG = new twoDVector(-3, -4);
let vectorH = new twoDVector(2*Math.sqrt(3), -2);

let vectors = [vectorA, vectorB, vectorC, vectorD, vectorE, vectorF, vectorG, vectorH];

let printVectorData = (vectorName)=>{
    for(const field in vectorName){
        console.log(`${field}: ${vectorName[field]}`);
    }
    console.log("\n");
}

vectors.forEach(printVectorData);
