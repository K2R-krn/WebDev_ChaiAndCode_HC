// Task 1
//^ Task 1: Bind the Correct Context
// Create an object person with properties name and a method introduce(). 
// Use the bind() method to ensure the method works correctly when passed to another function.
const person = {
    name: "K2R",
    introduce(){
        return `Hi, my name is ${this.name}`;
    }
};
const boundIntroduce = person.introduce.bind(person);

//^ Task 2: Using call() to Invoke a Function with Different Contexts
// Write a function introduce() that uses the this keyword to introduce a person by name. 
// Then, invoke introduce() using call() to introduce different people with the same function.
function introduce() {
    return `Hi, my name is ${this.name}`;
}
const person1 = { name: "K2R" };
const person2 = {name: "RPR"};

introduce.call(person1);
introduce.call(person2);

//^ Task 3: Using apply() to Pass Arguments with Context
// Create a function sum() that accepts two numbers and uses this to access a multiplier value. 
// Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
function sum(a, b) {
    return (a+b) * this.multiplier;
}

const context1 = { multiplier : 2};
const context2 = { multiplier : 3};

sum.apply(context1, [5,10]);
sum.apply(context2, [5,10]);
