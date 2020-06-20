/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//literal
let animal = {
    name:'Ivy', 
    age: 13,
    type: 'cat'
};
console.log(animal);
console.log("\n");

//constructor function
function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}

let pet1 = new pet('Ivy', 13, 'cat');
let pet2 = new pet('Wally', 12, 'cat');
let pet3 = new pet('Lenny', 11, 'cat');
console.log(pet1);
console.log(pet2);
console.log(pet3);
console.log("\n");

//es6 class
class cat{
    name;
    age;
    likesTo;
    constructor(name, age, likesTo){
        this.name = name;
        this.age = age;
        this.likesTo = likesTo;
    }
    pastime(){
        console.log(`${this.name} likes to ${this.likesTo}`);
    }
}
let cat1 = new cat('Ivy', 13, 'chase and kill small animals.');
let cat2 = new cat('Wally', 12, 'torment his sister.');
let cat3 = new cat('Lenny', 11, 'demand that he be cuddled.');
console.log(cat1);
cat1.pastime();
console.log(cat2);
cat2.pastime();
console.log(cat3);
cat3.pastime();
