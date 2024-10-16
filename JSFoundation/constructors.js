
//* Below are many Constructor Functions

function Person(name, age){
    // As many copies will be tehre we cant use name and age directly
    
    // Left side ones are my variables and I am defining them // Right side variables are coming in fucntion 
    // Constructor function
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

// In js can store function in variable as well

// Blueprint created above now how do you create an object ?

// OBJECT 1 { myCar }
let myCar = new Car("Toyota", "Camry");
console.log(myCar);

// OBJECT 2
let myNewCar =  new Car("Tata", "Safari"); 
console.log(myNewCar);

// new keyword is linked with this(provide context) of class
// This refers to newly created object inside a constructor function

function Tea(type){
    this.type = type,
    this.describe = function(){
        return `this is a cup of ${this.type}`;
         //^ use this.type because if refers to whichever object we are using for example if we create an object of { GreenTea } type it refers to that object and this.type will that s why print greenTea
    };
}

let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea.describe());

//* =============================================================================================================
// *  Added a function seperately.

function Animals(species){
    this.species = species;
}

// Can add any property or method in a Constructor function
Animals.prototype.sound = function(){  // Sound method added // and write function on right as w also need to define what sound method does
    return `${this.species} makes a sound.`
}

let dog = new Animals("Dog");
console.log(dog.sound()); // Can access sound which was later added


// Basically new createing new object with same blueprint // and this making it unique for every object created even though it was created with same blueprint


// ==================================================================================================================

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new Keyword.");
    }
    this.name = name;
}
let tea = new Drink("chai");
let coffee = Drink("Coffee");