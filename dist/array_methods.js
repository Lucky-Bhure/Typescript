"use strict";
// /* Array: */
Object.defineProperty(exports, "__esModule", { value: true });
// An array is a data structure that stores a fixed-size collection of elements of the same type in contiguous memory locations. Elements are accessed by index, starting from 0. Arrays can store multiple values, but cannot expand once their size is declared.
// Ways of Array Initilazation:
// a) Using square brackets:
const numbers = [1, 2, 3, 4, 5, 6];
// b) Using the Array constructor:
const numbers1 = new Array(1, 2, 3, 4, 5, 6);
// c) Using the Array. of method:
const names = Array.of("Lucky", "Krushnarao", "Bhure");
// ? You can access individual elements of an array using square brackets notation with the index of the element. Remember that array indices start from 0.
console.log(names[1]); // Krushnarao
console.log(names.toString()); // Lucky,Krushnarao,Bhure
// Operation on Array
const fruits = ["mango", "banana", "orange"];
// push():  insert element at the end of array
const updatedFruits1 = fruits.push("apple");
console.log(updatedFruits1); // return the length the updatedFruits1
console.log(fruits); // return fruits array with added element
// pop(): remove the last element from the array
const updatedFruits2 = fruits.pop();
console.log(updatedFruits2); // return the element from the fruits array
console.log(fruits); // return fruits array with remove element
// Iterating over elements:
// You can iterate over the elements of an array using various looping constructs such as for, for ... of, or array methods like forEach.
// Using for loop
console.log("for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Note: for( i in fruits) return index;
// Note: for( i of fruits) return values;
// Using for ...of
console.log("for ...of:");
for (const i of fruits) {
    console.log(i);
}
// forEach
console.log("forEach:");
fruits.forEach((currVal) => console.log(currVal));
// * Map & Filter Method in Array in TS
const numberArray = [1, 2, 3, 4, 5, 6, 7];
// Map Method
// The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
// 1: Doubling each number
console.log("Double Number: ");
const doubleNumber = numberArray.map((currVal) => currVal * 2);
console.log(doubleNumber);
// 2: Converting numbers to strings
console.log("Number String: ");
const numberString = numberArray.map((currVal) => currVal.toString());
console.log(numberString);
// Filter Method
// Creates a new array with all elements that pass the test implemented by the provided function.
// 1: Filtering even numbers
console.log("Even Number: ");
const evenNumber = numberArray.filter((currVal) => currVal % 2 == 0);
console.log(evenNumber);
// 2: Filtering numbers greater than 3
console.log("Number greater than 3: ");
const greaterNumber = numberArray.filter((currVal) => currVal > 3);
console.log(greaterNumber);
