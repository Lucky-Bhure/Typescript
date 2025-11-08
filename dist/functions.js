"use strict";
// /* Function Declaration: */
// You can declare a function using the function keyword, fol lowed by the function name, a list of parameters enclosed in parentheses, and a return type. 
// * The function body contains the code that Wi ZZ be executed when the function is called.
function greet1(name, id) {
    return `Name: ${name}, id: ${id}`;
}
const greet2 = (name, id) => {
    return `Name: ${name}, id: ${id}`;
};
// /* Function Invocation (Function Call): */
// To execute a function, you simply invoke it by using its name fol lowed by parentheses.
// You can provide arguments (actual values) for the parameters defined in the function declaration.
console.log("Greet1: ", greet1("Lucky", 123));
console.log("Greet2: ", greet2("Sahil", 123));
// /* Function return: */ 
// How do you specify the return type of a function in TypeScript
// To specify the return type of a function, you can use the colon ( : ) followed by the desired type after the function 's parameter list.
// /* Practice Questions: */
// Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
const isPalindrome = (str) => {
    const palindromeStr = str.split("").reverse().join("");
    if (str === palindromeStr) {
        return true;
    }
    return false;
};
console.log(`The string 'nitin' is${isPalindrome("nitin") ? "" : " not"} a palindrome string.`);
// Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
const calculateAverage = (num) => {
    let total = 0;
    num?.forEach((n) => {
        total = total + n;
    });
    return total / num.length;
};
console.log("Average of [2,3,4,5,6] is ", calculateAverage([2, 3, 4, 5, 6]));
// Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
const findMaxValue = (num) => {
    let maxNum = Number.MIN_SAFE_INTEGER;
    num?.forEach((ele) => {
        if (maxNum <= ele) {
            maxNum = ele;
        }
    });
    return maxNum;
};
console.log("Maximum  number in [-1,-2,-3,-4,-5] is ", findMaxValue([-1, -2, -3, -4, -5]));
// /* Optional and Default Parameters: */
// TypeScript allows you to define optional and default parameters in functions.
// Optional parameters are denoted by appending a ? symbol after the parameter name, and default parameters are specified by providing a default value in the parameter declaration.
