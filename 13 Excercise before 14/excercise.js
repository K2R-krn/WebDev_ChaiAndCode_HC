//! Q Write a function named `processTeaOrder` that takes another function , `makeTea` as a parameter and calls it with argument "earl grey"
//! Return result of calling 'makeTea'  =  

function makeTea(typeOfTea){
  return `makeTea : ${typeOfTea}`;
}
function processTeaOrder(peopeo){
  return peopeo('Mitthi Chai');
}
let order = processTeaOrder(makeTea);
// console.log(order);
// ---
//! Q Write a function named `createTeaMaker` that returns another finction.  The returned function should take one parameter ,  `teaType` and return 
//! a message like `"Making green tea"`.    Store the returned function in a variable named `teaMaker` and call it with "greenTea"

function createTeaMaker(){
  return function (teaType){
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
// console.log(teaMaker('GreenTea'));




//^ Arrays and Methods
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

//* Task 1: Array Filtering
//* Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumber(arr){
  // return arr.filter(item => typeof item === 'number');
  return arr.filter( (item) => typeof item === 'number');

}
const filtNo = (arr) => arr.filter(item => typeof item === 'number');
let arr = [1,2,3,4,4,'a','s',6,'f',7,8,'f','ss',true];
let result = filtNo(arr);
let result1 = filterNumber(arr);
// console.log(result);
// console.log(result1);
// ==================================================================================================================
// ==================================================================================================================

//* Task 2: Array Reversal
//* Write a function reverseArray(arr) that reverses the array
function reverseArray(arr){
  return arr.reverse();
}

// ==================================================================================================================
// ==================================================================================================================

//* Task 3: Find Maximum in an Array
//* Write a function findMax(arr) that returns the largest number in the array
function findMax(arr){
  return Math.max(...arr);
}
// Spread Syntax (...arr):
// The spread syntax takes an array (arr) and spreads its elements as individual arguments to a function.
// For example, if arr is [1, 2, 3], then ...arr would be equivalent to 1, 2, 3.

// ==================================================================================================================
//* Task 4: Remove Duplicates from an Array
//* Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplucates(arr){
  return [...new Set(arr)];
}
//   This function uses a Set to remove duplicates and then converts the Set 
//   back to an array using the spread operator (...).

// ==================================================================================================================
//* Task 5: Flatten a Nested Array
//* Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
//This function uses the flat() method with Infinity as a parameter to completely flatten a nested array, no matter how deeply nested it is.


// ==================================================================================================================


// =============================================================================================
// Loops
// Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers
function sumOfN(n) {
  let sum = 0;
  for(let i = 1;i<=n;i++){
      sum+=i;
  }
return sum;
}
// Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
function printMultiplicationTable(n) {
  const table = [];
  for(let i = 1;i<=10;i++){
      table.push(`${n} * ${i} = ${n * i}`);    
  }
  return table;
}
// Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
  return count;
}


// =========================================================================================================
// Higher-Order Functions and Arrow Functions
// All the following tasks must be strictly be writtern in arrow functions only.

// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions
const squareNumbers = (arr) => arr.map(num => num*num);

// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions
const filterEvenNumbers = (arr) => arr.filter(num => num%2===0);

// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
const sumPositiveNumbers = (arr) => arr.filter( num => num>0 ).reduce((sum,num) => sum+num,0);

// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
const getNames = (arr) => arr.map(item => item.name);

// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest,"");

// ==============================================================================================================================

//^ Nested Functions and Context

// Task 1: Using this in Objects
// Create an object person with a method introduce() that uses this
// additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()
const person = {
  name : 'Hitesh',
  age : 19.5,
  introduce(){
      return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
};

// Task 2: Function within a function
// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
function outer(outtt) {
  function inner(){
      return `Inner ${outtt} function called`
  }
  return inner();
}
// console.log(outer('Karan'));